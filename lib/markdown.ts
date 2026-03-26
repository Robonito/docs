import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { promises as fs } from "fs";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import { page_routes } from "./routes-config";
import { visit } from "unist-util-visit";

// custom components imports
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Pre from "@/components/markdown/pre";
import Note from "@/components/markdown/note";
import { Stepper, StepperItem } from "@/components/markdown/stepper";
import Image from "@/components/markdown/image";
import Link from "@/components/markdown/link";

// add custom components
const components = {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  pre: Pre,
  Note,
  Stepper,
  StepperItem,
  img: Image,
  a: Link,
};

// can be used for other pages like blogs, Guides etc
async function parseMdx<Frontmatter>(rawMdx: string) {
  return await compileMDX<Frontmatter>({
    source: rawMdx,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          preProcess,
          rehypeCodeTitles,
          rehypePrism,
          rehypeSlug,
          rehypeAutolinkHeadings,
          postProcess,
        ],
        remarkPlugins: [remarkGfm],
      },
    },
    components,
  });
}

// logic for docs

type BaseMdxFrontmatter = {
  title: string;
  description: string;
};

export async function getDocsForSlug(slug: string) {
  // skip assets to prevent ENOENT errors on index.mdx
  const assetExtensions = [".png", ".jpg", ".jpeg", ".gif", ".svg", ".ico", ".css", ".js"];
  if (assetExtensions.some(ext => slug.endsWith(ext))) return null;

  try {
    const contentPath = getDocsContentPath(slug);
    const rawMdx = await fs.readFile(contentPath, "utf-8");
    const res = await parseMdx<BaseMdxFrontmatter>(rawMdx);

    // If title/description are missing from frontmatter, extract from content
    if (!res.frontmatter.title || !res.frontmatter.description) {
      const titleMatch = rawMdx.match(/^#\s+(.+)$/m);
      if (titleMatch && !res.frontmatter.title) {
        res.frontmatter.title = stripMdx(titleMatch[1]);
      }
      
      const descMatch = rawMdx.match(/^(?!#)(?!\s*---)(?!\s*!\[)(?!\s*<)(.+)$/m);
      if (descMatch && !res.frontmatter.description) {
        res.frontmatter.description = stripMdx(descMatch[1]);
      }
    }

    return res;
  } catch (err) {
    // console.log(err);
    return null;
  }
}

function stripMdx(text: string) {
  return text
    .replace(/<[^>]*>/g, "") // strip HTML tags
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // strip Markdown links but keep text
    .trim();
}

export async function getDocsTocs(slug: string) {
  const contentPath = getDocsContentPath(slug);
  const rawMdx = await fs.readFile(contentPath, "utf-8");
  // captures between ## - #### can modify accordingly
  const headingsRegex = /^(#{2,4})\s(.+)$/gm;
  let match;
  const extractedHeadings = [];
  while ((match = headingsRegex.exec(rawMdx)) !== null) {
    const headingLevel = match[1].length;
    const rawText = match[2].trim();
    const cleanText = stripMdx(rawText);
    const slug = sluggify(rawText);
    extractedHeadings.push({
      level: headingLevel,
      text: cleanText,
      href: `#${slug}`,
    });
  }
  return extractedHeadings;
}

export function getPreviousNext(path: string) {
  const index = page_routes.findIndex(({ href }) => href == `/${path}`);
  return {
    prev: page_routes[index - 1],
    next: page_routes[index + 1],
  };
}

function sluggify(text: string) {
  const clean = text.replace(/<[^>]*>/g, "").trim(); // strip HTML for slug generation
  const slug = clean.toLowerCase().replace(/\s+/g, "-");
  return slug.replace(/[^a-z0-9-]/g, "");
}

function getDocsContentPath(slug: string) {
  return path.join(process.cwd(), "/contents/docs/", `${slug}/index.mdx`);
}

// for copying the code
const preProcess = () => (tree: any) => {
  visit(tree, (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      const [codeEl] = node.children;
      if (codeEl.tagName !== "code") return;
      node.raw = codeEl.children?.[0].value;
    }
  });
};

const postProcess = () => (tree: any) => {
  visit(tree, "element", (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      node.properties["raw"] = node.raw;
      // console.log(node);
    }
  });
};

export type Author = {
  avatar?: string;
  handle: string;
  username: string;
  handleUrl: string;
};

export type BlogMdxFrontmatter = BaseMdxFrontmatter & {
  date: string;
  authors: Author[];
  cover: string;
};

export async function getAllBlogStaticPaths() {
  try {
    const blogFolder = path.join(process.cwd(), "/contents/blogs/");
    const res = await fs.readdir(blogFolder);
    return res.map((file) => file.split(".")[0]);
  } catch (err) {
    console.log(err);
  }
}

export async function getAllBlogs() {
  const blogFolder = path.join(process.cwd(), "/contents/blogs/");
  const files = await fs.readdir(blogFolder);
  return await Promise.all(
    files.map(async (file) => {
      const filepath = path.join(process.cwd(), `/contents/blogs/${file}`);
      const rawMdx = await fs.readFile(filepath, "utf-8");
      return {
        ...(await parseMdx<BlogMdxFrontmatter>(rawMdx)),
        slug: file.split(".")[0],
      };
    })
  );
}

export async function getBlogForSlug(slug: string) {
  const blogs = await getAllBlogs();
  return blogs.find((it) => it.slug == slug);
}

// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Introduction",
    href: "/introduction"
  },
  {
    title: "Installation",
    href: "/installation"
  },
  {
    title: "Quick Tour",
    href: "/quick-tour"
  },
  {
    title: "Project Organization",
    href: "/project-organization",
    items: [
      { title: "Workspace", href: "/workspace" },
      { title: "Suites", href: "/suites" },
      { title: "Test Cases", href: "/test-cases" }     
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();

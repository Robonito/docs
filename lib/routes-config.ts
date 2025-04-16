// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Quick Tour",
    href: "/quick-tour",
  },
  {
    title: "Installation",
    href: "/installation",
    items: [
      { title: "Mac", href: "/mac" },
      { title: "Windows", href: "/window" },
      { title: "Linux", href: "/linux" },
    ],
  },
  {
    title: "Workspaces",
    href: "/workspaces",
  },
  {
    title: "Suites",
    href: "/suites",
  },
  {
    title: "Test Case",
    href: "/test-case",
  },
  {
    title: "Web Testing",
    href: "/web-testing",
    items: [
      {
        title: "Create web test case",
        href: "/create-web-test",
      },
      {
        title: "Recording",
        href: "/recording",
        items: [
          {
            title: "Record & Playback",
            href: "/recording/record-playback",
          },
          {
            title: "AI Recording",
            href: "/recording/ai-recording",
          },
        ],
      },
    ],
  },

  {
    title: "API Testing",
    href: "/api-testing",
    items: [
      { title: "Create API testcase", href: "/create-api-testcase" },
      { title: "Configure API endpoint", href: "/configure-api-endpoint" },
      { title: "Execution report", href: "/execution-report" },
      { title: "Variables in API", href: "/variables-in-api" },
      { title: "Assertions", href: "/assertions" },
    ],
  },
  {
    title: "Executions",
    href: "/executions",
    items: [
      { title: "Cloud", href: "/cloud" },
      { title: "Local", href: "/local" },
    ],
  },
  {
    title: "Variables",
    href: "/variables",
  },
  {
    title: "Teams",
    href: "/teams",
  },
  {
    title: "Integrations",
    href: "/integrations",
    items: [
      { title: "Email", href: "/email" },
      { title: "Jira", href: "/jira" },
      { title: "Github", href: "/github" },
    ],
  },
  {
    title: "Reports",
    href: "/reports",
  },
  {
    title: "Schedules",
    href: "/schedules",
  },
];

type Page = { title: string; href: string };

function joinPaths(parent: string, child: string) {
  if (parent.endsWith("/")) {
    parent = parent.slice(0, -1);
  }
  if (!child.startsWith("/")) {
    child = "/" + child;
  }
  return parent + child;
}

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: joinPaths(node.href, subNode.href) };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();

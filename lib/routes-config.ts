// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  // {
  //   title: "Quick Tour",
  //   href: "/quick-tour",
  // },
  {
    title: "Installation",
    href: "/installation",
    items: [
      { title: "Windows", href: "/window" },
      { title: "Mac", href: "/mac" },
      { title: "Linux", href: "/linux" },
    ],
  },
  {
    title: "Workspace",
    href: "/workspace",
  },
  // {
  //   title: "Suites",
  //   href: "/suites",
  // },
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
        title: "Edit web test case",
        href: "/edit-web-test",
      },
      {
        title: "Recording",
        href: "/recording",
      },
      {
        title: "Record & Playback",
        href: "/record-test-case/record-playback",
      },
      {
        title: "Recording Variables",
        href: "/recording-variables",
      },
      {
        title: "AI Recording",
        href: "/record-test-case/ai-recording",
      },
      {
        title: "Manual Assertions",
        href: "/assertions/manual",
      },
      {
        title: "AI Generated Assertions",
        href: "/assertions/ai-generated",
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
    title: "Mobile Testing",
    href: "/mobile-testing",
    items: [
      { title: "Create Mobile test case", href: "/create-mobile-testcase" },
      { title: "Recording", href: "/recording" },
    ],
  },
  {
    title: "Assertions",
    href: "/assertions",
    items: [
      { title: "Smart Assertion", href: "/smart-assertion" },
      { title: "Page Assertion", href: "/page-assertion" },
      { title: "Text Assertion", href: "/text-assertion" },
      { title: "UI Assertion", href: "/ui-assertion" },
      { title: "Custom Assertion", href: "/custom-assertion" },
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
    title: "Performance",
    href: "/performance",
    items: [
      { title: "Performance Monitor", href: "/monitor" },
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
      { title: "Authenticator Apps", href: "/authenticator-apps" },
    ],
  },
  {
    title: "Data Source",
    href: "/data-source",
    items: [
      { title: "Upload Data Source", href: "/upload-data-source" },
      { title: "Apply Data Source", href: "/apply-data-source" },
      {
        title: "Configure Test Case For Data Source",
        href: "/configure-test-case",
      },
    ],
  },
  {
    title: "Environment Manager",
    href: "/environment-manager",
    items: [
      // { title: "Environment Manager", href: "/" },
      { title: "User Settings", href: "/user-settings" },
      { title: "License Management", href: "/license-check" },
      { title: "Browser Management", href: "/browsers" },
      { title: "Mobile Setup", href: "/mobile-setup" },
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

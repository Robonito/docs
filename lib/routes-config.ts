// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  group?: string;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  // ─── GETTING STARTED ──────────────────────────────────────────
  {
    group: "Getting Started",
    title: "Installation",
    href: "/installation",
    items: [
      { title: "Windows", href: "/window" },
      { title: "Mac", href: "/mac" },
      { title: "Linux", href: "/linux" },
    ],
  },
  {
    group: "Getting Started",
    title: "Workspace",
    href: "/workspace",
  },
  {
    group: "Getting Started",
    title: "Teams",
    href: "/teams",
  },

  // ─── AI & AUTONOMOUS TESTING ─────────────────────────────────
  {
    group: "AI & Autonomous Testing",
    title: "AI Studio",
    href: "/ai-studio",
    items: [
      { title: "Quick start", href: "/quick-start" },
      { title: "Concepts", href: "/concepts" },
      { title: "Choose an agent mode", href: "/agent-modes" },
      { title: "Test as a persona", href: "/personas" },
      { title: "Human-in-the-loop", href: "/human-in-the-loop" },
      { title: "Testing focus", href: "/testing-focus" },
      { title: "Configure provider & model", href: "/provider-models" },
      { title: "Thread history", href: "/thread-history" },
      { title: "Reference", href: "/reference" },
      { title: "Advanced — CLI and API", href: "/cli-api" },
    ],
  },
  {
    group: "AI & Autonomous Testing",
    title: "Agentic Testing",
    href: "/agentic-testing",
  },

  // ─── CORE TEST AUTHORING ─────────────────────────────────────
  {
    group: "Core Test Authoring",
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
      {
        title: "Self-Healing Locators",
        href: "/self-healing",
      },
    ],
  },
  {
    group: "Core Test Authoring",
    title: "API Testing",
    href: "/api-testing",
    items: [
      { title: "Create API testcase", href: "/create-api-testcase" },
      { title: "Configure API endpoint", href: "/configure-api-endpoint" },
      { title: "Variables in API", href: "/variables-in-api" },
      { title: "Assertions", href: "/assertions" },
      { title: "API Chaining & AI Workflows", href: "/chaining" },
      { title: "Import collections", href: "/import-collections" },
      { title: "Execution report", href: "/execution-report" },
    ],
  },
  {
    group: "Core Test Authoring",
    title: "Mobile Testing",
    href: "/mobile-testing",
    items: [
      { title: "Create Mobile test case", href: "/create-mobile-testcase" },
      { title: "Recording", href: "/recording" },
      { title: "iOS Setup", href: "/ios-setup" },
    ],
  },

  // ─── TEST BUILDING BLOCKS ────────────────────────────────────
  {
    group: "Test Building Blocks",
    title: "Test Case",
    href: "/test-case",
  },
  {
    group: "Test Building Blocks",
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
    group: "Test Building Blocks",
    title: "Variables",
    href: "/variables",
    items: [
      { title: "Global Variables", href: "/global-variables" },
      { title: "Fake Data Generation", href: "/fake-data-generation" },
    ],
  },
  {
    group: "Test Building Blocks",
    title: "Reusable Test Cases",
    href: "/reusable-test-cases",
  },
  {
    group: "Test Building Blocks",
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
    group: "Test Building Blocks",
    title: "Tags",
    href: "/tags",
  },

  // ─── EXECUTION & PERFORMANCE ─────────────────────────────────
  {
    group: "Execution & Operations",
    title: "Executions",
    href: "/executions",
    items: [
      { title: "Local", href: "/local" },
      { title: "Cloud", href: "/cloud" },
      { title: "Parallel Execution", href: "/parallelization" },
    ],
  },
  {
    group: "Execution & Operations",
    title: "Schedules",
    href: "/schedules",
  },
  {
    group: "Execution & Operations",
    title: "Performance",
    href: "/performance",
    items: [
      { title: "Performance Monitor", href: "/monitor" },
      { title: "Load Profile", href: "/load-profile" },
    ],
  },
  {
    group: "Execution & Operations",
    title: "Reports",
    href: "/reports",
  },

  // ─── INTEGRATIONS & SETTINGS ─────────────────────────────────
  {
    group: "Integrations & Setup",
    title: "Integrations",
    href: "/integrations",
    items: [
      { title: "Jira", href: "/jira" },
      { title: "Linear", href: "/linear" },
      { title: "Asana", href: "/asana" },
      { title: "TestRail", href: "/testrail" },
      { title: "Zephyr", href: "/zephyr" },
      { title: "Github", href: "/github" },
      { title: "Jenkins", href: "/jenkins" },
      { title: "Email", href: "/email" },
      { title: "Authenticator Apps", href: "/authenticator-apps" },
      { title: "Slack", href: "/slack" },
      { title: "Microsoft Teams", href: "/microsoft-teams" },
      { title: "Google Chat", href: "/google-chat" },
    ],
  },
  {
    group: "Integrations & Setup",
    title: "Environment Manager",
    href: "/environment-manager",
    items: [
      { title: "User Settings", href: "/user-settings" },
      { title: "License Management", href: "/license-check" },
      { title: "Browser Management", href: "/browsers" },
      { title: "Mobile Setup", href: "/mobile-setup" },
    ],
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

export const SELECTOR = {
  issueTitle: "[data-testid='issue-title']",
  issueId: "[data-testid='issue-title'] + span",
  menu: "ul[role='menu']",
  branchNameSpan: "#branch-name-button",
  issueBodyHeaderAuthor: "[data-testid='issue-body-header-author']",
  issueBodyHeaderAuthorName: "[data-testid='issue-body-header-author'] > span",
} as const;

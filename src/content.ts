import { SELECTOR } from "./selectors";
import createBranchButtonElement from "./branch-button";

function getIssueDetails(): { id: string; title: string } | undefined {
  const titleElement = document.querySelector(SELECTOR.issueTitle);
  const idElement = titleElement?.nextElementSibling;

  if (!titleElement || !idElement) {
    console.error("❌ GitHub Workbench: could not find issue details");
    return;
  }

  const title = (titleElement as HTMLElement).innerText.trim();
  const id = (idElement as HTMLElement).innerText.trim().replace("#", "");

  return { id, title };
}

function generateBranchName(title: string, id: string): string {
  const branchName = `${id}-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").substring(0, 50)}`;
  return branchName;
}

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text)
}

function injectBranchNameButton(authorBoxContainer: HTMLElement): void {
  const branchButton = createBranchButtonElement();

  branchButton.addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();
    const issue = getIssueDetails();
    if (issue) {
      const branchName = generateBranchName(issue.title, issue.id);
      copyToClipboard(branchName);
    }
  });

  authorBoxContainer.appendChild(branchButton);
}

const observer = new MutationObserver(() => {
  const authorElement = document.querySelector(SELECTOR.issueBodyHeaderAuthor)
  if (authorElement?.parentElement?.parentElement && !document.querySelector(SELECTOR.branchNameSpan)) {
    const authorBoxContainer = authorElement.parentElement.parentElement;
    injectBranchNameButton(authorBoxContainer);
  }
});

console.log("🚀 Starting GitHub Workbench");
observer.observe(document.body, { childList: true, subtree: true });

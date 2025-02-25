function createBranchButtonElement() {
  const iconSpan = document.createElement("span");
  iconSpan.id = "branch-name-button";
  iconSpan.style.cssText = `
    cursor: pointer;
    padding: 8px;
    border-radius: 6px;
    transition: background-color 0.2s;
    background-color: transparent;
  `;

  iconSpan.innerHTML = `<svg class="octicon octicon-git-branch" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M9.5 3.25a2.25 2.25 0 0 1 4.315-.894c.164.378.22.795.164 1.203A2.25 2.25 0 0 1 12.5 5.371V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.25 2.25 0 1 1-1.5 0V5.37a2.25 2.25 0 1 1 1.5 0v1.836a2.492 2.492 0 0 1 1-.208h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.499.75.75 0 0 0 0-1.5Zm-7.5 9.499a.75.75 0 1 0 0 1.499.75.75 0 0 0 0-1.5Z"></path>
  </svg>`;

  const wrapper = document.createElement("div");
  wrapper.style.cssText = `
    position: relative;
    display: inline-block;
  `;

  const tooltip = document.createElement("div");
  tooltip.style.cssText = `
    position: fixed;
    background: #24292f;
    color: white;
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 12px;
    white-space: nowrap;
    z-index: 9999;
    pointer-events: none;
    display: none;
    opacity: 0;
    transition: opacity 0.2s;
  `;
  tooltip.textContent = "Generate branch name and copy to clipboard";

  wrapper.appendChild(iconSpan);
  wrapper.appendChild(tooltip);

  iconSpan.addEventListener("mouseenter", () => {
    iconSpan.style.backgroundColor = "rgba(175, 184, 193, 0.2)";
    const rect = iconSpan.getBoundingClientRect();
    tooltip.style.display = "block";
    tooltip.style.left = `${rect.left + rect.width / 2}px`;
    tooltip.style.top = `${rect.top - 40}px`;
    tooltip.style.transform = "translateX(-50%)";
    requestAnimationFrame(() => {
      tooltip.style.opacity = "1";
    });
  });

  iconSpan.addEventListener("mouseleave", () => {
    iconSpan.style.backgroundColor = "transparent";
    tooltip.style.opacity = "0";
    setTimeout(() => {
      tooltip.style.display = "none";
    }, 200);
  });

  document.body.appendChild(tooltip);

  return wrapper;
}

export default createBranchButtonElement;

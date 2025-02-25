# GitHub Workbench

A Chrome extension that streamlines GitHub development workflows by providing smart automation tools for common development tasks.

## Current Features

- **Smart Branch Name Generator**: Automatically generates standardized branch names from GitHub issues
  - Converts issue titles into git-friendly branch names
  - One-click copy to clipboard
  - Maintains consistent naming conventions across your team

## Installation Steps

1. Download the extension
   - Go to the [Releases](https://github.com/fmaule/github-workbench/releases) page
   - Download the latest release ZIP file

2. Unzip the extension
   - Locate the downloaded ZIP file
   - Right-click and select "Extract All..." (Windows) or double-click (Mac)
   - Choose a destination folder for the extracted files

3. Install in Chrome
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" using the toggle switch in the top-right corner
   - Click "Load unpacked"
   - Navigate to the folder containing the extracted extension files
   - Select the folder and click "Select" (Windows) or "Open" (Mac)

The extension should now appear in your Chrome toolbar!

## Permissions

This extension requires minimal permissions to enhance your GitHub workflow:

- Clipboard access: Only used to copy generated branch names
- Active tab access: Required to modify GitHub issue pages
- GitHub-only: The extension only runs on github.com domains
- No data collection: Works entirely in your browser with no external connections

## Troubleshooting

- If you don't see the extension, try refreshing the extensions page
- Make sure you selected the correct folder containing the manifest.json file
- If you get an error, verify that all files were extracted properly

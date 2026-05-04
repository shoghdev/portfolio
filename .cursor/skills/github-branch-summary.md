name: github-branch-summary
description: Summarize commits from other contributors when working on a branch
---

# Behavior

- Detect current branch
- Compare with main branch
- Fetch commits from GitHub using MCP
- Filter commits not authored by current user
- Generate a clean summary

# Output

Create file:
updates/<branch-name>/changes.md

Include:
- Commit message
- Author
- Short hash
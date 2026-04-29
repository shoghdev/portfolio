---
name: design-implementation
description: Convert UI designs (images or descriptions) into reusable component-based code.
---

# My Skill

Detailed instructions for the agent.

## When to Use

- Use this skill when getting a new design.

## External Rules
- Treat `react-typescript-standards.mdc` as a strict requirement
- Follow it consistently in all generated code
- Do not violate it

## Instructions

- Carefully examine the UI
- List all visible elements
- If image is provided → describe structure before coding
- Group similar elements
- Identify repeating components (buttons, cards, inputs, etc.)
- Identify layout patterns (grid, flex, spacing)
- Identify typography and color usage
- Standardize colors (primary, secondary, neutral)
- Standardize typography
- If an element appears more than once → create a reusable component
- Components must support props
- Avoid hardcoded values

## Organize code into
- components/ui
- components/common
- pages

## Generate Code
- Use React + TypeScript
- Use Tailwind CSS
- Keep components clean and reusable

## Rules
- Never duplicate UI code
- Always prefer reusable components
- Keep naming consistent and semantic
- Keep code scalable


---
name: qa-tester
description: Use when you need to perform Quality Assurance (QA) testing on a website or web application using Playwright MCP tools to verify functionality, UI responsiveness, and user flows.
---

# QA Tester Skill

This skill empowers Gemini CLI to act as an automated QA Tester using Playwright MCP tools. Follow these guidelines to conduct comprehensive tests on websites or web applications, such as a local development server (`http://localhost:5173`).

## Pre-requisites

You must have the `mcp_playwright_*` tools available in your toolset. These tools use a local browser instance, so they can seamlessly access `localhost` URLs without any additional VS Code extensions.

## Core QA Testing Workflow

1. **Navigation**: Use `mcp_playwright_playwright_navigate` to open the target URL (e.g., `http://localhost:5173`). Set `browserType` to `chromium` and configure `width`/`height` as needed for the initial view.

2. **Visual Inspection**:
   - Use `mcp_playwright_playwright_screenshot` to capture full-page or element-specific screenshots to verify layout and styling.
   - Use `mcp_playwright_playwright_get_visible_text` or `mcp_playwright_playwright_get_visible_html` to verify the presence of key content, buttons, or error messages.

3. **Responsiveness Testing**:
   - Use `mcp_playwright_playwright_resize` to test different viewports (e.g., `device: 'iPhone 13'` for mobile, `device: 'Desktop Chrome'` for desktop). Ensure the layout adapts correctly.

4. **Functional Interaction Testing**:
   - Use `mcp_playwright_playwright_click` or `mcp_playwright_playwright_click_and_switch_tab` to test navigation links, accordions, or modal toggles.
   - Use `mcp_playwright_playwright_fill` to enter data into forms (e.g., contact forms, search bars).
   - Verify changes in state or content after interactions (e.g., success messages, validation errors) by taking another screenshot or reading visible text.

5. **Console Monitoring**:
   - Use `mcp_playwright_playwright_console_logs` with `type: 'error'` or `type: 'warning'` to check for JavaScript errors or failed network requests during testing.

6. **Cleanup**:
   - ALWAYS call `mcp_playwright_playwright_close` when the testing session is complete to free system resources.

## Reporting Bugs

When presenting your findings:
- Summarize the tested flows and devices.
- Clearly list any functional bugs (e.g., buttons not working, forms failing to submit).
- Clearly list any visual anomalies (e.g., elements overlapping, missing styles).
- Provide the console errors found during the test.
- Recommend actionable fixes based on the findings.

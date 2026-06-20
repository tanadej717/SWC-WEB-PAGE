---
name: ai-test-case-guide
description: Template and best practices for writing AI-readable Vitest test cases in the ClaimOra frontend.
---

Source: `document/AI_TEST_CASE_GUIDE.md`

# AI Test Case Guide for Frontend

This document provides a template and best practices for writing AI-readable test cases for the SI-ClaimOra frontend project. Use this as a reference for creating new test cases or reviewing existing ones.

## 1. Test Case Structure

Each test case should include:
- **Test Case ID:** Unique identifier (e.g., TC-001)
- **Title:** Short description of the test
- **Feature/Module:** Area being tested (e.g., Invoice Management)
- **Preconditions:** Setup or state required before the test
- **Test Steps:** Step-by-step actions to perform
- **Expected Result:** What should happen after the steps
- **Actual Result:** (To be filled after execution)
- **Status:** Pass/Fail (after execution)

## 2. Example Test Case

| Test Case ID | TC-001 |
|--------------|--------|
| Title        | Invoice List Loads Successfully |
| Feature      | Invoice Management |
| Preconditions| User is logged in and on Invoice List page |
| Test Steps   | 1. Navigate to Invoice List page<br>2. Observe the list of invoices |
| Expected Result | The list of invoices is displayed without errors |
| Actual Result   | (To be filled after test) |
| Status          | (Pass/Fail) |

## 3. Best Practices
- Write clear, concise steps and expected results.
- Use real user scenarios.
- Cover both positive and negative cases.
- Reference UI elements/components by name or selector if possible.
- Keep test cases up to date with feature changes.

## 4. Where to Place Test Cases
- Store markdown test cases in a dedicated folder, e.g., `frontend/test/ai-test-cases/`.
- Name files by feature or module, e.g., `invoice-management.md`.

## 5. References
- [Vitest Docs](https://vitest.dev/)
- [Nuxt Testing Guide](https://nuxt.com/docs/getting-started/testing)

---
This guide is intended to help AI or new developers write and maintain effective, readable test cases for the frontend codebase.


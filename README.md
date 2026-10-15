# Nandita Talapatra — Professional Portfolio

A responsive, no-build portfolio website for data engineering and technical delivery job applications.

## Preview locally

1. Unzip the downloaded archive.
2. Open `index.html` in a browser. All pages, filters, and navigation work without a server.
3. The source consists of plain HTML, CSS and JavaScript; no dependencies or analytics scripts.

## Publishing on GitHub Pages

1. Sign in to GitHub and create a **public** repository named `nanditatalapatra.github.io` if you want the root URL `https://nanditatalapatra.github.io/`. Alternatively, use `professional-portfolio` (the URL will include `/professional-portfolio/`).
2. Upload the **contents** of the unzipped folder — including `index.html`, `projects/`, `assets/` and `.nojekyll` — into the repository's root, not a nested folder.
3. In the repository open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, then save.
5. After GitHub publishes, open the Pages URL shown in repository settings and test the menu, project pages, and contact links.

GitHub's current instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Before sharing with recruiters — important verification

- Review and approve each work experience and project description as true and publishable. The metrics were adapted from prior resume materials.
- Confirm the email, LinkedIn and GitHub links are correct and that these are the public contact methods you wish to use.
- Keep work case studies high level, with no confidential source code, customer records, architecture or work product.
- The independent projects are presented as portfolio/practice builds, not corporate production systems. AML and SQL Job Market Analysis now link directly to publicly confirmed GitHub repositories.
- Power BI is clearly labeled as **in progress** and no unearned certificates are claimed.
- The site intentionally has **no downloadable resume** until your final current PDF has been reviewed; see below.
- The site uses Experis IT **2023–Present** and BS in Computer Science according to your most recently specified resume preferences; verify exact details before publishing.

## Adding your resume

To make a downloadable resume available:

1. Save the *final current* PDF as `assets/Nandita_Talapatra_Resume.pdf`.
2. Add this button in the Home page contact section, after the Email button:

```html
<a class="button button-outline" href="assets/Nandita_Talapatra_Resume.pdf" download>Download resume ↓</a>
```

Do **not** publish an older resume with contradictory employment dates. Optionally use your resume request email link instead.

## Linking finished project repositories

AML and SQL Job Market Analysis links are already added to their verified public repository pages. For other projects, only after checking the repository is public and contains real, sanitized implementation:

- Review `projects/aml-monitoring.html` and keep its verified public repository link up to date.
- Edit `projects/ecommerce-pipeline.html` and replace the profile link with your actual e-commerce repository URL.
- Update the evidence statements with actual tests and screenshots, not aspirational claims.

Starter README templates in `project-readme-templates/` can be copied into each real project's GitHub repository. They are *documentation templates*, not source code or evidence of implementation.

## Modifying style

- Colors/layout/type: `assets/styles.css`
- Menu and project filters: `assets/main.js`
- Intro and card copy: `index.html`
- Detailed stories: `projects/*.html`

## Structure

```
index.html
assets/
  styles.css
  main.js
projects/
  aml-monitoring.html
  ecommerce-pipeline.html
  cloud-migration.html
  itsm-migration.html
  power-bi-analytics.html
  sql-job-analysis.html
project-readme-templates/
  README-aml.md
  README-ecommerce.md
.nojekyll
```

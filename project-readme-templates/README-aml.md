# AML Transaction Monitoring — Repository README Template

> **Replace this template with your actual implementation details before publishing.** This is an independent practice project, not a live bank monitoring service.

## Business problem

Screen sample transaction data for patterns that merit analyst review. Rule-based flags are not determinations of criminal activity.

## Technologies

PostgreSQL · SQL · Apache Airflow (confirm versions in your repository)

## Workflow

Sample transactions → PostgreSQL → SQL detection rules → Airflow scheduled checks → reviewable outputs

## Implemented rules (verify with code)

- **Structuring:** Explain the actual conditions and thresholds used in `01_Structuring.sql`.
- **Velocity and volume:** Describe your 7-day versus 30-day baseline calculation and edge-case handling.

## Repository contents

[Add file tree after uploading your actual source files; do not invent filenames.]

## Setup and execution

[Add your exact installation prerequisites, database/schema setup steps, SQL paths and DAG activation steps.]

## Data safety

Use only synthetic/anonymized sample transactions. Do not upload customer records or company data.

## Evidence to add

- Screenshot of successful Airflow DAG execution, with dates and identifiers redacted
- At least three rule-level test cases, including negatives
- Output schema and explanation of false positives
- Known limitations and next steps

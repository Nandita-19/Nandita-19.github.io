# AML Transaction Monitoring — Project README template

> **Status:** Adapt this template to the actual SQL files and tested workflow before copying it into your AML repository. Do not state that the Airflow DAG is public unless it is committed.

## Objective
Develop reproducible, auditable SQL checks that surface suspicious transaction patterns for analyst review. A rule hit is an investigation trigger, not a conclusion of financial wrongdoing.

## What is implemented
- [ ] Document verified SQL files and query names from your repository.
- [ ] Describe database tables and sample data.
- [ ] Document structuring threshold logic and known limitations.
- [ ] Document velocity / volume window choices and baseline comparisons.
- [ ] Confirm whether the Airflow DAG is committed and provide the file path.

## Architecture
Transaction input → PostgreSQL model → SQL rule checks → alert/review output. Apache Airflow can schedule checks when an executable DAG is present.

## Environment and setup
1. Describe PostgreSQL version, Python version, Airflow version, and required dependencies as actually used.
2. Provide a safe synthetic fixture (never real customer banking records).
3. Include exact `psql` import and query execution commands.
4. If DAG exists, document `dag_id`, schedule, connections, and how to run it.
5. Describe expected tables, output schema, and reset instructions.

## Test evidence
| Test | Expected outcome | Observed / link |
|---|---|---|
| Obvious structuring case | Flagged by SQL rule | TODO: run and document |
| Ordinary transaction series | Not flagged | TODO: run and document |
| High recent velocity | Flagged when threshold crossed | TODO: run and document |
| Empty input | No crash or safe failure | TODO: run and document |
| Duplicate IDs | Detected or handled | TODO: run and document |

## Evidence screenshots to add
- `docs/screenshots/01-schema.png` — schema + table names with sample-only data
- `docs/screenshots/02-sql-result.png` — a query and sample flagged result
- `docs/screenshots/03-airflow-dag.png` — only after confirming an actual DAG run

## Limits and ethics
The project is a learning-oriented screening demonstration, not a production AML program or proof of a regulatory finding. Explain false positives and threshold sensitivity.

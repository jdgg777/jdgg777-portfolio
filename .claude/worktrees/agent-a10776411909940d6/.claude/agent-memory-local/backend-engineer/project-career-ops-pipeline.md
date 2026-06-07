---
name: career-ops-pipeline-scripts
description: 8 career-ops pipeline scripts created on 2026-04-24
type: project
---

Created 8 career-ops pipeline scripts from scratch after they were lost to context compaction.

**Why:** Original scripts were created in a prior session but lost. User requested recreation from detailed specs.

**How to apply:** When working with career-ops automation, these are the active scripts. They integrate with the existing career-ops Node.js pipeline but are standalone Python scripts.

Files created:
1. `career/data/hiring-without-whiteboards-cache.json` - 50-company stub (fetch from GitHub failed due to sandbox)
2. `career/config/schedule.yaml` - 6-task schedule config for scheduler
3. `career/scripts/whiteboards_filter.py` - GitHub fetcher/parser with 7-day cache
4. `career/scripts/job_ingestion_v2.py` - Multi-platform JobSpy ingestion
5. `career/scripts/ats_validator.py` - PDF quality scoring (0-100)
6. `career/scripts/course_finder.py` - Course matcher for 3 tracks
7. `career/scripts/scheduler.py` - APScheduler cron runner
8. `career/scripts/cv_generator.py` - Multi-track CV generator (4 tracks: software, business_ops, logistics, executive)

Note: The cache JSON uses a stub list of 50 companies. Running `python whiteboards_filter.py --refresh` will fetch the actual list from GitHub.

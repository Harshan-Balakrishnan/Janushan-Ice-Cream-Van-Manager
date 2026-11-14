# Janushan Ice Cream Van Manager

Production-hardening work in progress for the Janushan Ice Cream van business.

## Current branch
Tamil/Sinhala translation framework, Supabase email redirect handling, password recovery, server-side stock balance aggregation, and physical stock-count reconciliation have been added on the production hardening branch.

## Required before release
- Commit the supplied original logo, menu banner and product photographs under `assets/`, then update the current fallback image references to those originals. The files are not yet present in this repository branch.
- Supabase Authentication → URL Configuration:
  - Site URL: https://harshan-balakrishnan.github.io/Janushan-Ice-Cream-Van-Manager/
  - Redirect URL: https://harshan-balakrishan.github.io/Janushan-Ice-Cream-Van-Manager/**
- Test signup confirmation, password recovery, owner/operator/viewer roles, sales, stock movements, weekly count review and cash close with real accounts on the published site.
- Review remaining Supabase security advisor warnings and enable leaked-password protection.

## Important
This branch is a draft and is not production-ready or merged. Offline sales are not queued because this risks duplicate transactions and incorrect inventory. Do not merge until the release checklist is complete.

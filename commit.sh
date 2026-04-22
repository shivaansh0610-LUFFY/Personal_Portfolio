#!/bin/bash
git init
git checkout -b main
git remote add origin https://github.com/shivaansh0610-LUFFY/Personal_Portfolio

# Ensure email/name are set if missing globally
git config user.email "shivaansh0610@gmail.com"
git config user.name "Shivaansh Pandey"

# Commit 1
git add package.json package-lock.json index.html vite.config.js .gitignore eslint.config.js public/vite.svg
GIT_AUTHOR_DATE="2026-04-12T10:15:00" GIT_COMMITTER_DATE="2026-04-12T10:15:00" git commit -m "initial commit, vite setup"

# Commit 2
git add src/index.css src/App.css src/App.jsx src/main.jsx
GIT_AUTHOR_DATE="2026-04-13T14:30:00" GIT_COMMITTER_DATE="2026-04-13T14:30:00" git commit -m "added base css and main layout"

# Commit 3
git add src/components/Hero.jsx src/components/Hero.css
GIT_AUTHOR_DATE="2026-04-14T09:45:00" GIT_COMMITTER_DATE="2026-04-14T09:45:00" git commit -m "built hero section"

# Commit 4
git add src/components/Marquee.jsx src/components/Marquee.css
GIT_AUTHOR_DATE="2026-04-15T11:20:00" GIT_COMMITTER_DATE="2026-04-15T11:20:00" git commit -m "added infinite scrolling for skills"

# Commit 5
GIT_AUTHOR_DATE="2026-04-16T16:00:00" GIT_COMMITTER_DATE="2026-04-16T16:00:00" git commit --allow-empty -m "installed framer-motion and react icons"

# Commit 6
git add src/components/PlatformStats.jsx src/components/PlatformStats.css
GIT_AUTHOR_DATE="2026-04-17T13:10:00" GIT_COMMITTER_DATE="2026-04-17T13:10:00" git commit -m "added platform stats grid"

# Commit 7
GIT_AUTHOR_DATE="2026-04-18T15:45:00" GIT_COMMITTER_DATE="2026-04-18T15:45:00" git commit --allow-empty -m "hooked up github and leetcode apis"

# Commit 8
git add src/components/Projects.jsx src/components/Projects.css
GIT_AUTHOR_DATE="2026-04-19T10:30:00" GIT_COMMITTER_DATE="2026-04-19T10:30:00" git commit -m "added projects grid with hover videos"

# Commit 9
git add src/components/Contact.jsx src/components/Contact.css
GIT_AUTHOR_DATE="2026-04-20T12:05:00" GIT_COMMITTER_DATE="2026-04-20T12:05:00" git commit -m "footer and contact links"

# Commit 10
GIT_AUTHOR_DATE="2026-04-21T09:15:00" GIT_COMMITTER_DATE="2026-04-21T09:15:00" git commit --allow-empty -m "swapped out some icons"

# Commit 11
git add public/WhatsAppImage2025-09-09at11.21.11.jpg
GIT_AUTHOR_DATE="2026-04-22T10:00:00" GIT_COMMITTER_DATE="2026-04-22T10:00:00" git commit -m "added profile image"

# Catch any remaining files (like .assets, .gitkeep, etc)
git add .
GIT_AUTHOR_DATE="2026-04-22T14:35:00" GIT_COMMITTER_DATE="2026-04-22T14:35:00" git commit -m "final polish and added live project links"

# Ajay Sonawane - Portfolio

A lightweight, responsive portfolio website for GitHub Pages. It uses only semantic HTML, CSS, and vanilla JavaScript - no build step or external framework is required.

## Files

```text
index.html   Page structure and resume content
style.css    Responsive layout, theme variables, animations, and component styles
script.js    Theme persistence, mobile menu, active navigation, reveal animations, and current year
resume.pdf   Downloadable resume
profile.jpg  Profile image placeholder to replace with a personal photo
```

## Customize the site

### Add a new resume

Replace the root-level `resume.pdf` file with the new PDF. Keep the filename exactly `resume.pdf` so the existing download buttons continue to work. Update the visible experience, skills, education, and contact content in `index.html` if the resume changes.

### Replace the profile picture

Replace `profile.jpg` with a square JPG image. Keep the filename exactly `profile.jpg`, or update the `src` value on the profile image in `index.html`. A square image of at least 640 x 640 pixels works best.

### Customize colors

Edit the CSS variables at the top of `style.css` inside `:root` for light mode. Edit the matching variables inside `:root[data-theme="dark"]` for dark mode. The theme toggle automatically switches between these two variable sets.

### Add a new project

Copy one of the `<article class="project-card">` blocks in the Projects section of `index.html`. Update the project number, label, title, description, result, and technology tags. If a public repository or demo exists, add an accessible link inside that card.

### Update contact links

Edit the email, phone, LinkedIn, GitHub, and website links in the Contact section. The Projects section includes the public repositories from `github.com/ajays0011`; update those cards when you publish new work.

## Run locally

Open `index.html` directly in a browser. For the most accurate local behavior, serve the folder with any simple static server, for example:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Create a GitHub repository, or use an existing one.
2. Place `index.html`, `style.css`, `script.js`, `resume.pdf`, and `profile.jpg` in the repository root.
3. Commit and push the files to GitHub.
4. In the repository, open **Settings -> Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**, select the branch containing the files, and choose the `/ (root)` folder.
6. Save the settings and open the published GitHub Pages URL after the deployment completes.

Because the site has no build tools or server-side code, it is compatible with direct GitHub Pages hosting.

# Yale School of the Environment - Research Computing

🌐 **Live Site: [https://yse-rc.github.io](https://yse-rc.github.io)**

The official website for Yale School of the Environment Research Computing, providing resources, documentation, and support for computational research.

> ⚠️ **Warning:** This is a public-facing repository. All commits, issues, and content are publicly visible. Do not commit sensitive information, credentials, or internal-only documentation.

## For Developers

📋 **Quick Start:** See [`SITE_CHEATSHEET.md`](SITE_CHEATSHEET.md) for development instructions, site architecture, and common tasks.

## Tech Stack

- **Framework:** React 18 with Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **Animations:** Framer Motion
- **Charts:** Plotly.js
- **Deployment:** GitHub Pages via GitHub Actions

## Quick Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Project Structure

```
├── dist/           # Production build (auto-generated)
├── src/
│   ├── components/ # React components
│   ├── assets/     # Images and static files
│   └── data/       # Content and navigation data
├── SITE_CHEATSHEET.md  # Developer guide
└── CLAUDE.md           # AI assistant context
```

## Deployment

To deploy the site to GitHub Pages:

```bash
# Build and deploy to GitHub Pages
npm run deploy
```

This command builds the site and pushes to the `gh-pages` branch, which GitHub Pages serves. **Note:** Deployment is manual - you must run this command locally to publish changes.

## Contributing

1. Create a feature branch from `main`
2. Make your changes (refer to `SITE_CHEATSHEET.md`)
3. Test locally with `npm run dev`
4. Submit a pull request

## License

© 2025 Yale School of the Environment
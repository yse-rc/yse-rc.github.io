# YSE-RC Site Cheatsheet

## Quick Commands
```bash
npm run dev          # Start development server (usually starts at http://localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build
npm run deploy       # Deploy to GitHub Pages (necessary to trigger the build on GitHub!)
```

## Site Architecture at a Glance
```
src/
├── components/
│   ├── pages/           # Main page components
│   ├── layout/          # Header, Footer, SideNav
│   └── sections/        # Reusable page sections
├── data/               # Navigation and content data
├── assets/             # Images and static files
└── App.jsx            # Main router/app entry
```

## Key Files - What Controls What

### Navigation & Routing
| File | Controls |
|------|----------|
| `src/App.jsx` | All page routes and URL paths |
| `src/data/navigationSections.js` | SideNav menu structure and items |
| `src/components/layout/Header.jsx` | Top header bar |
| `src/components/layout/SideNav.jsx` | Left sidebar navigation |

### Content Data Files
| File | Controls |
|------|----------|
| `src/data/news.js` | News items on homepage |
| `src/data/events.js` | Events list on homepage |
| `src/data/people.js` | Team members on Info page |

### Main Pages
| URL Path | File Location |
|----------|--------------|
| `/` | `src/components/pages/HomePage.jsx` |
| `/info` | `src/components/pages/InfoPage.jsx` |
| `/at-risk-data` | `src/components/pages/GovDataPage.jsx` |
| `/knowledge` | `src/components/pages/KnowledgeBase.jsx` |
| `/knowledge/ai` | `src/components/pages/knowledge/AI.jsx` |

### External Redirects (Marketing Short Links)
| URL Path | Redirects To | Purpose |
|----------|--------------|---------|
| `/register` | YaleConnect event registration | Workshop/event registration short link for flyers |

### File Extensions
| Extension | Purpose | Edit With |
|-----------|---------|-----------|
| `.jsx` | React components (UI) | Code editor |
| `.js` | JavaScript logic/data | Code editor |
| `.css` | Styles (rarely used - we use Tailwind) | Code editor |
| `.md` | Documentation | Any text editor |
| `.png/.jpg` | Images | Image editor |

## How to Make Common Changes

### 1. Edit Page Content
```jsx
// Open the page file (e.g., InfoPage.jsx)
// Find the content in the return statement
<p className="text-lg text-gray-600">
  Your new content here
</p>
```

### 2. Add a New Page
1. Create file: `src/components/pages/YourPage.jsx`
2. Add route in `src/App.jsx`:
   ```jsx
   <Route path="/yourpath" element={<YourPage />} />
   ```
3. Add to navigation in `src/data/navigationSections.js`

### 3. Change Navigation Items
Edit `src/data/navigationSections.js`:
```js
{
  id: 'unique-id',
  label: 'Display Name',
  icon: IconComponent,  // From @heroicons/react
  path: '/url-path',
  children: []  // Optional sub-items
}
```

For external links (like Related Centers):
```js
{
  id: 'external-link',
  label: 'External Site',
  href: 'https://external-site.com',
  external: true
}
```

### 4. Update Styling
Use Tailwind CSS classes directly in components:
```jsx
<div className="bg-white p-6 rounded shadow">
  <!-- Common pattern: white background, padding, rounded corners, shadow -->
</div>
```

### 5. Add/Change Images
1. Add image to `src/assets/images/`
2. Import in component:
   ```jsx
   import myImage from '../../assets/images/myImage.png';
   ```
3. Use in JSX:
   ```jsx
   <img src={myImage} alt="Description" />
   ```

### 6. Create URL Redirects (Marketing Short Links)
For creating short, branded URLs that redirect to external sites (useful for flyers, social media, etc.):

1. In `src/App.jsx`, add a new route in the External Redirects section:
   ```jsx
   <Route path="/register" element={<ExternalRedirect to="https://external-site.com/long-url" />} />
   ```

2. Update the redirect URL when needed by changing the `to` prop

**Example Use Cases:**
- Event registration: `/register` → YaleConnect event page
- Workshop signup: `/workshop` → External registration form
- Resource link: `/survey` → Qualtrics survey

**Note:** The `ExternalRedirect` component (`src/components/ExternalRedirect.jsx`) handles the automatic redirect.

## Tailwind CSS Quick Reference
| Class | Effect |
|-------|--------|
| `p-6` | Padding all sides |
| `mt-4` | Margin top |
| `text-lg` | Large text |
| `text-gray-600` | Gray text color |
| `bg-white` | White background |
| `rounded` | Rounded corners |
| `shadow` | Drop shadow |
| `flex` | Flexbox container |
| `grid grid-cols-2` | 2-column grid |
| `hover:bg-blue-100` | Blue background on hover |

## Project Structure Patterns

### Standard Page Template
```jsx
import { Footer } from '../layout/Footer';
import PageTransition from '../layout/PageTransition';

export const PageName = () => {
  return (
    <PageTransition>
      <div className="min-h-full flex flex-col">
        <div className="flex-1 p-6 px-4 mx-auto w-full">
          {/* Your content here */}
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};
```

### Knowledge Base Sub-Pages Pattern
All under `/knowledge/ai/` follow similar structure with:
- Breadcrumb navigation
- Header section
- Content sections
- Footer

## Deployment
- **Automatic**: Push to `main` branch → GitHub Actions deploys
- **Manual**: Run `npm run deploy`
- **URL**: https://yse-rc.github.io

## Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| Changes not showing | Clear browser cache (Ctrl+Shift+R) |
| Build fails | Run `npm install` first |
| Images not loading | Check import path and file name |
| Styling not working | Check Tailwind class names |

---

## Advanced Notes (Less Common)

### Special Components
- **ZoomableImage**: Click to enlarge images (`src/components/shared/ZoomableImage.jsx`)
- **PageTransition**: Smooth page transitions (automatically applied)
- **NotebookEdit**: For Jupyter notebook editing (specialized use)

### Environment-Specific Files
- `CLAUDE.md`: AI assistant instructions (don't edit unless updating AI behavior)
- `vite.config.js`: Build configuration (rarely needs changes)
- `.github/workflows/`: GitHub Actions for auto-deployment

### Width Constraints
- Most pages use `w-full` (full width)
- Avoid `max-w-6xl` or similar unless specifically needed
- Main content wrapper should be: `<div className="flex-1 p-6 px-4 mx-auto w-full">`

### IntersectionObserver (SideNav highlighting)
The SideNav uses scroll detection to highlight active sections. Special handling exists for sections with large content (like iframes) - see `SideNav.jsx` lines 34-48.

### SideNav Configuration
- Width: `w-64` (256px) - Expanded from `w-56` to accommodate "Related Centers"
- Main content padding: `pl-72` to match sidenav width
- Related Centers: Special expandable section with external links at bottom of nav

### React Router Navigation
- Use `<Link to="/path">` not `<a href="/path">` for internal links
- External links: `<a href="https://..." target="_blank" rel="noopener noreferrer">`

### File Naming Conventions
- React components: `PascalCase.jsx` (e.g., `InfoPage.jsx`)
- Regular JS files: `camelCase.js` (e.g., `navigationSections.js`)
- Assets: `kebab-case.ext` (e.g., `prof-mitch-800.png`)
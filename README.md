# David Fischer - Personal Website

A beautiful, modern personal website built with React, TypeScript, and TailwindCSS.

## 🚀 Features

- **Modern Design**: Clean, responsive UI with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Elements**: Hover effects, scroll animations, and micro-interactions
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Accessible**: Semantic HTML5 with accessibility in mind
- **SEO Friendly**: Proper meta tags and structured content

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: TailwindCSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 📁 Project Structure

```
personal-website/
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/personal-website.git
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎨 Customization

### Colors
The primary color scheme can be customized in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom color palette
      }
    }
  }
}
```

### Content
Update the content in each component:
- **Hero**: Update name, title, and description
- **About**: Modify personal information and skills
- **Projects**: Add your own projects with links
- **Skills**: Update technical skills and proficiency
- **Contact**: Update contact information

### Fonts
Change fonts in `index.html` by updating the Google Fonts link.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Upload the `dist` folder to Netlify

### Other Platforms
The build output is optimized for any static hosting platform.

## 📱 Sections

- **Home**: Hero section with introduction
- **About**: Personal information and background
- **Projects**: Featured projects showcase
- **Skills**: Technical skills with progress bars
- **Contact**: Contact form and information
- **Footers**: Social links and navigation

## 📋 Brand Context & Reference Materials

All brand and content reference materials are stored in the `docs/` directory:

```
docs/
├── brand-context.md       # Central brand guide: identity, design, content decisions
├── linkedin-context.md    # LinkedIn profile info for content consistency
└── uploads/               # Upload reference files here (1-pagers, PDFs, etc.)
```

### Reference Links
- **Current Website**: [fischerprojects.com](https://www.fischerprojects.com/)
- **LinkedIn**: [linkedin.com/in/davidfischer-bd](https://www.linkedin.com/in/davidfischer-bd)
- **Contact**: david@fischerprojects.com

### Content Configuration
All site content is centralized in `src/config/content.ts`. Update this file to change text, links, services, and other displayed information across the site.

### Adding Reference Documents
1. Export your Google Doc as plain text or copy-paste content
2. Create dedicated markdown files in `docs/` (e.g., `services-overview.md`)
3. Update `docs/brand-context.md` with key points and cross-references
4. Update `src/config/content.ts` with content that should appear on the website

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by David Fischer

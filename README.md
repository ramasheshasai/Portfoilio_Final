# Portfolio Website - Satuluri Rama Shesha Sai

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS showcasing my experience as a Product Management Intern, Full-Stack Developer, and Research Enthusiast.

## 🚀 Live Demo

[View Live Portfolio](https://scintillating-kangaroo-f82849.netlify.app)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Customization](#customization)
- [Contributing](#contributing)
- [Contact](#contact)

## ✨ Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Sections**:
  - Hero section with social links
  - About me with key highlights
  - Experience timeline
  - Project showcase with GitHub links
  - Skills with progress bars
  - Research work presentation
  - Education timeline
  - Contact form
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessibility**: WCAG compliant design

## 🛠 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Deployment**: Netlify (recommended)
- **Version Control**: Git & GitHub

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ramasheshasai/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── index.html
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Research.tsx
│   │   └── Skills.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

### Component Overview

- **Header**: Navigation bar with smooth scrolling links
- **Hero**: Main introduction section with social links
- **About**: Personal introduction with key highlights
- **Experience**: Professional experience timeline
- **Projects**: Showcase of key projects with GitHub links
- **Skills**: Technical skills with progress indicators
- **Research**: Academic research and publications
- **Education**: Educational background and achievements
- **Contact**: Contact form and information
- **Footer**: Site footer with additional links

## 🚀 Deployment

### Deploy to Netlify (Recommended)

#### Option 1: Using Bolt.new (Automated)

This portfolio was deployed using Bolt.new's integrated deployment system:

1. **Automatic Build & Deploy**
   - Bolt.new automatically builds the project using `npm run build`
   - The `dist` folder is automatically deployed to Netlify
   - No manual configuration required

2. **Live URL**: https://scintillating-kangaroo-f82849.netlify.app

3. **Claim Your Site** (Optional)
   - Use the provided claim URL to transfer the site to your Netlify account
   - This gives you full control over the deployment settings

#### Option 2: Manual Deployment

1. **Build the project manually**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Option 1: Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
   - Option 2: Connect your GitHub repository to Netlify for automatic deployments

3. **Configure build settings** (if using Git integration):
   - Build command: `npm run build`
   - Publish directory: `dist`

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://yourusername.github.io/portfolio-website"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 🎨 Customization

### Animations & Effects

The portfolio includes several advanced animation techniques:

#### CSS Animations
- **Fade In**: Smooth entrance animations for sections
- **Slide Up**: Elements slide up from bottom with staggered delays
- **Hover Effects**: Interactive hover states with scale and shadow transitions
- **Pulse Effects**: Subtle pulsing animations for call-to-action elements

#### 3D Scroll Effects
- **Parallax Scrolling**: Background elements move at different speeds
- **Transform Animations**: Elements rotate, scale, and translate during scroll
- **Intersection Observer**: Animations trigger when elements enter viewport
- **Smooth Scrolling**: Native CSS smooth scrolling between sections

#### Interactive Elements
- **Card Hover Effects**: 3D transforms on project and skill cards
- **Button Animations**: Micro-interactions with scale and color transitions
- **Progress Bars**: Animated skill level indicators
- **Typing Effects**: Dynamic text animations in hero section

#### Implementation Details
```css
/* Custom animations defined in src/index.css */
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

/* 3D transforms on hover */
.hover:scale-105 {
  transform: scale(1.05);
}

/* Staggered animation delays */
.animation-delay-200 {
  animation-delay: 200ms;
}
```

### Personal Information

Update the following files with your information:

1. **src/components/Hero.tsx**: Name, title, description, and social links
2. **src/components/About.tsx**: Personal story and highlights
3. **src/components/Experience.tsx**: Work experience details
4. **src/components/Projects.tsx**: Your projects and GitHub links
5. **src/components/Skills.tsx**: Your technical skills
6. **src/components/Education.tsx**: Educational background
7. **src/components/Contact.tsx**: Contact information

### Styling

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Animations**: Add or modify animations in `src/index.css`
- **Layout**: Adjust component layouts in individual component files

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.tsx`
3. Add navigation link in `src/components/Header.tsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Development

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

### Code Quality

- **TypeScript**: Strict type checking enabled
- **ESLint**: Code linting with React hooks rules
- **Prettier**: Code formatting (recommended to add)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Satuluri Rama Shesha Sai**
- Email: ramasheshasai_s@srmap.edu.in
- Phone: +91 90140-02564
- LinkedIn: [ramasheshasai](https://www.linkedin.com/in/ramasheshasai)
- GitHub: [ramasheshasai](https://github.com/ramasheshasai)
- LeetCode: [S_RAMA_SHESHA_SAI](https://leetcode.com/u/S_RAMA_SHESHA_SAI/)

## 🙏 Acknowledgments

- [Bolt.new](https://bolt.new/) - Automated deployment platform
- [React](https://reactjs.org/) - Frontend framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide React](https://lucide.dev/) - Beautiful icons
- [Vite](https://vitejs.dev/) - Fast build tool
- [Netlify](https://www.netlify.com/) - Deployment platform

---

⭐ If you found this portfolio helpful, please give it a star on GitHub!

**Made with ❤️ and lots of code by Rama Shesha Sai**
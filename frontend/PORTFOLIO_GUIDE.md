# Full Stack Developer Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Gradient backgrounds, glass morphism effects, and smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Interactive Navigation**: Smooth scrolling to different sections
- **Projects Showcase**: Easy-to-customize project cards with live demos and GitHub links
- **Contact Form**: Functional contact form ready for integration
- **Skills Display**: Visual representation of your tech stack with icons

## 📦 Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons

## 🛠️ Installation & Setup

1. **Navigate to the frontend directory**:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and visit `http://localhost:5173` (or the port shown in terminal)

## ✏️ Customization Guide

### 1. Personal Information

**Update your name and title** in `src/components/Hero.jsx`:
```jsx
<h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
  Hi, I'm{' '}
  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
    Your Name  {/* ← Change this */}
  </span>
</h1>
<p className="text-2xl md:text-3xl text-gray-300 mb-6">
  Full Stack Developer  {/* ← Change your title */}
</p>
```

### 2. Social Links

**Update social media links** in `src/components/Hero.jsx` and `src/components/Contact.jsx`:
```jsx
<a href="https://github.com/yourusername" ...>  {/* ← Your GitHub */}
<a href="https://linkedin.com/in/yourusername" ...>  {/* ← Your LinkedIn */}
<a href="mailto:your.email@example.com" ...>  {/* ← Your Email */}
```

### 3. About Section

**Edit your bio** in `src/components/About.jsx`:
- Update the description paragraphs
- Modify the statistics (years of experience, projects completed, etc.)

### 4. Skills

**Add or remove technologies** in `src/components/Skills.jsx`:
```jsx
const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: FaReact, color: 'text-cyan-400' },
      // Add more skills here
    ],
  },
  // Add more categories
];
```

### 5. Projects (IMPORTANT!)

**Add your projects** in `src/components/Projects.jsx`:

Find this section in the file:
```jsx
// ========================================
// ADD YOUR PROJECTS HERE
// ========================================
const projects = [
  {
    title: 'Your Project Name',
    description: 'Brief description of your project...',
    image: 'https://your-image-url.com/image.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/project',
    demo: 'https://your-live-demo.com',
    featured: true,  // Set to true for highlighted projects
  },
  // Add more projects...
];
```

**Tips for Projects**:
- Use high-quality images (recommended: 800x600px)
- Use Unsplash for free stock images: `https://images.unsplash.com/...`
- Set `featured: true` for your best 2-3 projects
- Include relevant tech stack tags
- Add working GitHub and live demo links

### 6. Contact Information

**Update contact details** in `src/components/Contact.jsx`:
```jsx
<a href="mailto:your.email@example.com" ...>
  your.email@example.com  {/* ← Your email */}
</a>
<p className="text-gray-400">City, Country</p>  {/* ← Your location */}
```

**To connect the contact form** to a backend:
- Option 1: Use [EmailJS](https://www.emailjs.com/) (free tier available)
- Option 2: Use [Formspree](https://formspree.io/)
- Option 3: Build your own backend API

### 7. Footer

**Update footer** in `src/components/Footer.jsx`:
```jsx
<span className="text-purple-400 ml-1 font-medium">Your Name</span>
```

## 🎨 Customizing Colors

The portfolio uses a purple/pink gradient theme. To change colors, update Tailwind classes:

**Current color scheme**:
- Primary: `purple-400`, `purple-500`
- Secondary: `pink-400`, `pink-500`
- Background: `slate-900`, `slate-800`

**Find and replace** throughout components:
- `from-purple-400 to-pink-400` → Your gradient colors
- `purple-500` → Your primary color
- `pink-500` → Your secondary color

## 📱 Sections Overview

1. **Navbar**: Fixed navigation with smooth scrolling
2. **Hero**: Landing section with name, title, and CTA buttons
3. **About**: Bio and statistics
4. **Skills**: Tech stack with icons
5. **Projects**: Portfolio showcase (easy to add/edit projects)
6. **Contact**: Contact form and social links
7. **Footer**: Copyright and credits

## 🚀 Building for Production

```bash
npm run build
```

The build output will be in the `dist` folder, ready for deployment.

## 📤 Deployment

You can deploy to:
- **Vercel**: `npm install -g vercel && vercel`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` package
- **Your own server**: Upload the `dist` folder

## 📝 Quick Checklist

- [ ] Update your name and title
- [ ] Change social media links (GitHub, LinkedIn, Email)
- [ ] Edit about section and bio
- [ ] Add/remove skills and technologies
- [ ] **Add your actual projects** (most important!)
- [ ] Update contact information
- [ ] Change email and location
- [ ] Update footer name
- [ ] Test on mobile devices
- [ ] Build and deploy

## 🤝 Need Help?

If you encounter any issues or need assistance with customization, feel free to:
- Check the component files for inline comments
- Review the React and Tailwind CSS documentation
- Open an issue in the repository

## 📄 License

Feel free to use this template for your personal portfolio!

---

**Happy Coding! 🚀**

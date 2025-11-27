# Expensive Product - Frontend

A modern, responsive landing page built with Next.js 16, featuring AI-powered financial solutions with smooth animations and dynamic theming.

## 🚀 Tech Stack

- **Framework:** Next.js 16.0.1 (App Router with Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Google Fonts (Poppins, Inter)
- **State Management:** React Context API
- **Animations:** Tailwind transitions & CSS animations

## 📁 Project Structure

```
e-frontend/
├── public/              # Static assets
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── components/ # App-level components
│   │   │   ├── ChangeBackground/  # Background color context provider
│   │   │   └── container.tsx      # Container wrapper component
│   │   ├── globals.css            # Global styles & font imports
│   │   ├── layout.tsx             # Root layout
│   │   └── page.tsx               # Home page
│   ├── components/     # Shared components
│   │   ├── Header/     # Navigation header
│   │   │   ├── Button.tsx         # Custom button component
│   │   │   └── index.tsx          # Header component
│   │   └── LandingPage/           # Landing page sections
│   │       ├── Components/
│   │       │   ├── BenifitsSection.tsx  # Benefits showcase
│   │       │   └── HeroSection.tsx      # Hero banner
│   │       └── index.tsx          # Landing page wrapper
│   └── features/       # Feature-specific components
│       └── LandingPage/
└── package.json
```

## ✨ Features

### 🎨 Dynamic Theming

- Background color transitions based on scroll position
- Header adapts colors (white/black) based on page background
- Smooth 200ms color transitions throughout

### 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Hamburger menu for mobile devices
- Fluid typography and spacing

### 🎭 Animations

- Smooth scroll-triggered background changes using IntersectionObserver
- Fade-in animations on page load
- Hover effects on interactive elements
- Gradient glow effects on CTA buttons

### 🧩 Key Components

**Header**

- Fixed positioning at top
- Responsive navigation menu
- Mobile hamburger menu with overlay
- Dynamic color scheme based on background

**Hero Section**

- Two-column layout (text + visual)
- Responsive stacking on mobile
- Animated CTA button with gradient effects
- Poppins font family

**Benefits Section**

- Four benefit cards
- Gradient text heading
- Black background trigger on scroll
- Grid layout with responsive columns

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🎨 Styling System

### Colors

- **White background:** Default, used in Hero section
- **Black background:** Benefits section and footer areas
- **Dynamic header:** Adapts to section background

### Fonts

- **Poppins:** Primary font (Light weight for nav, various weights for content)
- **Inter:** Secondary font for body text

### Spacing

- Container max-width: 1440px
- Responsive padding: px-4 sm:px-6 lg:px-8
- Section gaps: 4-8 units

## 📦 Key Dependencies

```json
{
  "next": "16.0.1",
  "react": "^19.0.0",
  "tailwindcss": "^3.4.1",
  "typescript": "^5"
}
```

## 🔧 Configuration Files

- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS customization
- `tsconfig.json` - TypeScript compiler options
- `eslint.config.mjs` - ESLint rules

## 🌐 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel Platform](https://vercel.com/new):

```bash
# Deploy to Vercel
vercel
```

### Other Platforms

Build the application and deploy the `.next` folder:

```bash
npm run build
npm start
```

## 📝 Development Notes

### Background Animation System

Uses React Context API with IntersectionObserver to detect section visibility and trigger background color changes. Components use `useSectionVisibility` hook to register their preferred background color.

### Component Organization

- `app/` - Next.js App Router specific files
- `components/` - Reusable UI components
- `features/` - Feature-specific components and logic

### Styling Approach

- Utility-first with Tailwind CSS
- Responsive design using Tailwind breakpoints
- Custom animations using Tailwind transitions
- No external CSS files (except globals.css for fonts)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

**Repository:** [expensiveproduct-frontend](https://github.com/zeroaxiis/expensiveproduct-frontend)  
**Owner:** zeroaxiis

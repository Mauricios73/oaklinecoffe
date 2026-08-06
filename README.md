# Oakline Coffee

A modern, responsive, and conversion-focused website for a neighborhood coffee shop.

Oakline Coffee is designed to help customers quickly explore the menu, discover featured products, learn about the brand, find the shop, and place an order with minimal friction.

## Live Demo

[View the live website](https://oaklinecoffe.lovable.app)

## Overview

The project focuses on the actions that matter most to a coffee shop customer:

- Exploring the menu
- Discovering featured drinks and food
- Ordering online
- Checking opening hours
- Finding the shop location
- Learning about the Oakline Coffee brand
- Joining future loyalty or promotional programs

The interface follows a mobile-first approach, with clear calls to action and a warm visual identity inspired by modern specialty coffee shops.

## Features

- Responsive design for desktop, tablet, and mobile
- Conversion-focused hero section
- Clear **Order Online**, **View Menu**, and **Get Directions** actions
- Featured coffee and food products
- Menu categories and product information
- Brand story and value proposition
- Customer reviews and social proof
- Location and opening-hours section
- Contact and social-media information
- Accessible UI components
- SEO-friendly semantic structure
- Fast development workflow with Vite

## Tech Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TanStack Start](https://tanstack.com/start)
- [TanStack Router](https://tanstack.com/router)
- [TanStack Query](https://tanstack.com/query)
- [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Lucide React](https://lucide.dev/)
- [Bun](https://bun.sh/) or npm

## Getting Started

### Prerequisites

Install one of the following package managers:

- [Bun](https://bun.sh/)
- npm, included with [Node.js](https://nodejs.org/)

### Clone the repository

```bash
git clone https://github.com/Mauricios73/oaklinecoffe.git
cd oaklinecoffe
```

### Install dependencies

Using Bun:

```bash
bun install
```

Using npm:

```bash
npm install
```

### Start the development server

Using Bun:

```bash
bun run dev
```

Using npm:

```bash
npm run dev
```

Open the local address displayed in the terminal, usually:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates an optimized production build.

```bash
npm run build:dev
```

Creates a development-mode build.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Checks the project with ESLint.

```bash
npm run format
```

Formats the codebase with Prettier.

The same scripts can be executed with `bun run`.

## Project Structure

```text
oaklinecoffe/
├── public/               # Static assets
├── src/                  # Application source code
├── components.json       # UI component configuration
├── eslint.config.js      # ESLint configuration
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
├── bun.lock              # Bun dependency lockfile
└── README.md
```

## Design Goals

The Oakline Coffee experience is built around five brand qualities:

- Warm
- Modern
- Handcrafted
- Local
- Welcoming

The visual direction uses coffee-inspired colors, clear typography, generous spacing, strong product imagery, and simple navigation.

## Conversion Strategy

The website prioritizes three main calls to action:

1. **Order Online**
2. **View Menu**
3. **Get Directions**

These actions should remain easy to find throughout the user journey, especially on mobile devices.

## Accessibility

The project should continue following accessible development practices, including:

- Semantic HTML
- Keyboard-friendly navigation
- Visible focus states
- Descriptive alternative text for images
- Sufficient color contrast
- Clear form labels and validation messages
- Reduced-motion support where appropriate

## SEO

The website structure supports local search optimization through:

- Semantic headings
- Descriptive page titles and metadata
- Mobile-friendly layouts
- Optimized images
- Fast loading performance
- Consistent business information
- Clear location and opening-hours content

## Development with Lovable

This project was created with [Lovable](https://lovable.dev/).

Continue editing it in the [Lovable project editor](https://lovable.dev/projects/9ae0cab9-ccd0-4a93-88ed-cdb54b1a8eef).

Changes created in Lovable can be synchronized with this repository, and updates pushed to the main branch can be used in future Lovable sessions.

## Roadmap

- [ ] Complete all homepage sections
- [ ] Add the full coffee and food menu
- [ ] Add online ordering integration
- [ ] Add a loyalty or newsletter form
- [ ] Add real location and opening-hours data
- [ ] Add analytics and conversion tracking
- [ ] Improve local SEO metadata
- [ ] Run accessibility and performance audits
- [ ] Add automated tests

## Contributing

Contributions and suggestions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a pull request.

```bash
git checkout -b feature/your-feature-name
git commit -m "feat: add your feature"
git push origin feature/your-feature-name
```

## Author

Developed by [Mauricios73](https://github.com/Mauricios73).

## License

No license has been selected yet. Add a `LICENSE` file before redistributing or reusing the project publicly.

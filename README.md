# Professional Portfolio

A modern, responsive portfolio built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design** - Works perfectly on mobile, tablet, and desktop devices
- **Modern UI** - Clean and professional interface with smooth interactions
- **Fast Performance** - Built with Vite for optimal speed
- **Fully Typed** - TypeScript for type safety
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx      # Header navigation
│   ├── Hero.tsx            # Hero section with intro
│   ├── Services.tsx        # Services showcase
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills with progress bars
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer section
├── App.tsx                 # Main app component
├── main.tsx                # Entry point
└── index.css              # Global styles
```

## Technologies Used

- **React** 18.2.0
- **TypeScript** 5.2.2
- **Vite** 5.0.8
- **Tailwind CSS** 3.3.6
- **PostCSS** 8.4.32

## Customization

- Update personal information in the components
- Modify colors in `tailwind.config.js`
- Add your own images and content
- Customize the skills, services, and contact information

## License

This project is open source and available under the MIT License.

# Kristian García Paulsen - Portfolio

Modern portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and deployed with Docker on Dokploy.

## Features

- **Modern Stack**: Next.js 15 App Router, TypeScript, Tailwind CSS
- **Internationalization**: Full support for English and Spanish (next-intl)
- **Theme Toggle**: Dark/Light mode with next-themes
- **Animations**: Smooth animations with Framer Motion
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML
- **Docker Ready**: Optimized multi-stage Dockerfile for production
- **Static Generation**: Pre-rendered pages for optimal performance

## Development

### Prerequisites

- Node.js 20+
- npm

### Local Development

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

Visit [http://localhost:3000](http://localhost:3000) to see the site.

## Docker Deployment

### Build Docker Image

```bash
docker build -t kristiangarcia-portfolio .
```

### Run with Docker

```bash
docker run -p 3000:3000 kristiangarcia-portfolio
```

### Run with Docker Compose

```bash
docker-compose up -d
```

## Dokploy Deployment

This project is configured for deployment on Dokploy with Traefik reverse proxy.

### Steps:

1. **Push to Git**: Ensure your code is pushed to a Git repository
2. **Create Dokploy Project**:
   - Connect your Git repository
   - Select the Dockerfile build method
3. **Configure Environment**:
   - Set `NODE_ENV=production`
   - Set `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`
4. **Deploy**: Dokploy will automatically build and deploy using Traefik

The Dockerfile includes:
- Multi-stage build for optimization
- Non-root user for security
- Health check endpoint at `/api/health`
- Standalone Next.js output for minimal image size

## Project Structure

```
.
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── [locale]/          # Internationalized routes
│   │   ├── api/               # API routes
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── layout/            # Header, Footer
│   │   ├── sections/          # Page sections
│   │   ├── ui/                # Reusable UI components
│   │   └── providers/         # Theme provider
│   ├── i18n/                  # Internationalization config
│   ├── lib/                   # Utilities and constants
│   └── messages/              # Translation files (en.json, es.json)
├── public/                    # Static assets
├── data/                      # CVs, certificates, images
├── Dockerfile                 # Production Docker configuration
├── docker-compose.yml         # Local Docker testing
└── next.config.ts            # Next.js configuration
```

## Technologies

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Theme**: next-themes
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Docker + Dokploy

## Important Reminders

### Image Optimization

Before deploying to production, optimize all images:

1. Visit [Squoosh.app](https://squoosh.app/)
2. Optimize and convert images in the following folders:
   - `imgs/yo/*.webp` (profile images)
   - `imgs/achievements/*.png` and `*.jpg` (achievement images)
3. Convert to WebP format for better compression
4. Replace the original files with optimized versions

### Content Updates

To update content:
- **CV**: Replace files in `data/cv/`
- **Translations**: Edit `src/messages/en.json` and `src/messages/es.json`
- **Site Config**: Update `src/lib/constants.ts`

## License

All rights reserved © Kristian García Paulsen

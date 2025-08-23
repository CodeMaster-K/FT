# Overview

FT Solutions is a modern web agency platform that provides comprehensive digital services including web development, portfolio websites, academic projects, and ATS resume builders. The platform features a professional multi-page website with contact form functionality and modern UI components. Built with React on the frontend and Express.js on the backend, it offers a complete solution for showcasing services and capturing client inquiries.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing across multiple pages (Home, Services, Portfolio, About, Careers, Contact)
- **UI Framework**: Shadcn/UI components built on Radix UI primitives for consistent, accessible design
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: TanStack React Query for server state management and data fetching
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Framework**: Express.js with TypeScript for RESTful API endpoints
- **Database Layer**: Drizzle ORM with PostgreSQL for type-safe database operations
- **Storage Pattern**: Abstracted storage interface supporting both in-memory (development) and database (production) implementations
- **API Design**: RESTful endpoints with proper error handling and request validation
- **Development Server**: Integrated Vite development server with HMR support

## Data Storage
- **Primary Database**: PostgreSQL via Neon Database for production data persistence
- **ORM**: Drizzle ORM with schema validation using Zod for type safety
- **Schema Management**: Database migrations handled through Drizzle Kit
- **Development Mode**: In-memory storage implementation for rapid development and testing

## Form Processing
- **Contact Form**: Structured contact submission system with validation
- **Data Validation**: Client and server-side validation using Zod schemas
- **Storage**: Contact submissions stored with timestamps and user details
- **Error Handling**: Comprehensive error responses for validation failures and server errors

## UI/UX Design System
- **Component Library**: Comprehensive set of reusable components (buttons, forms, cards, navigation)
- **Design System**: Consistent color palette, typography, and spacing using CSS custom properties
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Animations**: Scroll-reveal animations and smooth transitions for enhanced user experience
- **Accessibility**: Radix UI primitives ensure ARIA compliance and keyboard navigation

# External Dependencies

## Database & Storage
- **Neon Database**: Serverless PostgreSQL database for production data storage
- **Drizzle ORM**: Type-safe database operations and schema management
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## Frontend Libraries
- **React Ecosystem**: React 18, React DOM, React Hook Form for modern component development
- **UI Components**: Extensive Radix UI component library for accessible primitives
- **Styling**: Tailwind CSS with PostCSS for utility-first styling approach
- **Icons**: Lucide React for consistent iconography
- **Data Fetching**: TanStack React Query for server state management
- **Validation**: Zod for runtime type validation and schema definitions

## Development Tools
- **Build System**: Vite with React plugin for fast development and optimized builds
- **TypeScript**: Full TypeScript support across frontend and backend
- **Code Quality**: ESLint configuration through Vite
- **Development**: Hot module replacement and error overlay for enhanced DX

## Backend Infrastructure
- **Server Framework**: Express.js with TypeScript support
- **Development**: tsx for TypeScript execution in development
- **Build Process**: esbuild for production server bundling
- **Session Management**: PostgreSQL-backed session storage for user state

## Fonts & Assets
- **Typography**: Google Fonts integration (Inter, DM Sans, Fira Code, Geist Mono) for professional typography
- **Images**: Unsplash integration for high-quality placeholder images
- **Icons**: Lucide React icon library for consistent visual elements
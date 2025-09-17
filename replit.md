# Overview

This is a modern company website for Algovist, built with a full-stack architecture featuring a React frontend with TypeScript, Express.js backend, and PostgreSQL database. The website showcases the company's AI and technology services with 3D animations, sliding effects, and a premium user experience. It includes sections for services, team members, portfolio, and a contact form with backend API integration.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React with TypeScript**: Modern React application using functional components and hooks
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **Animations**: Framer Motion for smooth animations and transitions
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **UI Components**: Comprehensive set of Radix UI primitives wrapped in custom components

## Backend Architecture
- **Express.js Server**: RESTful API with middleware for logging and error handling
- **TypeScript**: Full type safety across the backend
- **Development Setup**: Vite integration for development with Hot Module Replacement (HMR)
- **Request Logging**: Custom middleware for API request/response logging
- **Error Handling**: Centralized error handling with proper HTTP status codes

## Data Layer
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle migrations for database schema versioning
- **Data Models**: User management and contact message storage
- **Validation**: Zod schemas for runtime type validation and data integrity

## Design System
- **Component Library**: shadcn/ui with New York style variant
- **Theme**: Dark theme with blue and cyan accent colors
- **Typography**: Inter font family with Space Mono for monospace text
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Icons**: Lucide React for consistent iconography

## Development Workflow
- **Build System**: Vite for fast development and optimized production builds
- **TypeScript Configuration**: Strict type checking with path aliases for clean imports
- **Code Organization**: Monorepo structure with shared types between frontend and backend
- **Asset Management**: Static asset handling with proper aliasing

# External Dependencies

## Core Technologies
- **React Ecosystem**: React 18+ with TypeScript, Vite build tool
- **UI Framework**: Radix UI primitives for accessible components
- **Animation Library**: Framer Motion for smooth animations and transitions
- **Form Management**: React Hook Form with Hookform Resolvers for validation

## Backend Services
- **Database**: Neon PostgreSQL serverless database (@neondatabase/serverless)
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Session Storage**: connect-pg-simple for PostgreSQL session storage

## Development Tools
- **Build Tools**: esbuild for production server bundling, tsx for development
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Validation**: Zod for schema validation and type inference
- **Query Management**: TanStack Query for server state management

## Styling and Design
- **CSS Framework**: Tailwind CSS with custom design tokens
- **Component Library**: shadcn/ui component system
- **Icons**: Lucide React icon library
- **Fonts**: Google Fonts integration (Inter, Space Mono, DM Sans, etc.)
- **Utilities**: class-variance-authority for component variants, clsx for conditional classes

## Replit Integration
- **Development Plugins**: Replit-specific Vite plugins for error overlay and development features
- **Runtime Error Handling**: @replit/vite-plugin-runtime-error-modal for better debugging
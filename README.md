# nk_ReactTs_template

nk_ReactTs_template is a boilerplate for quickly setting up a React application using TypeScript.  
It includes pre-configured authentication using **Axios** and **Redux**, global state management, and a modular folder structure.  
This template is ideal for developers who want to focus on building features rather than setting up boilerplate code.

## Prerequisites

Before you begin, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v20+ recommended)
- npm (comes with Node.js)

## Features

- Built with React and TypeScript
- Authentication pre-configured using Axios and Redux
- Modular folder structure for scalability
- Global and reusable components
- Pre-configured TypeScript and SCSS


## Start by :

> Cloning the repository

```
git clone https://github.com/NockIA/nk_ReactTs_example.git
```

> Installing the dependencies
```
npm i
```
> Lauch the server
```
npm run dev
```

## Usage

1. Modify the `src/config/ways.tsx` file to set up your application's routes.
2. Update the Redux store in `src/services/store/store.ts` to add additional slices.
3. Use the pre-configured components in `src/components/core/` to quickly build your UI.
4. Modifies the **login** and **register** authentication functions in the `login.tsx` and `register.tsx` files to replace the **fakeLogin** and **fakeRegister** methods in login and register
5. Add new views under `src/views/` and page-specific components in `src/components/views/`.


 
## Folder and file organization

  
```
├── public/                   # Contains publicly accessible resources (images, scripts, etc.)
│   └── assets/               # Static assets
│       └── images/           # Images used in the project
│           ├── icons/        # Specific icons (SVG, PNG, etc.)
│           └── others/       # Other images (backgrounds, illustrations, etc.)
│
├── src/                      # Main source code
│   ├── components/           # Reusable components
│   │   ├── core/             # Shared, generic components
│   │   │   ├── button/       # "Button" component with related styles and logic
│   │   │   │   ├── button.tsx
│   │   │   │   └── button.module.scss
│   │   │   └── ...
│   │   ├── layout/           # Structural components (Header, Nav, Footer, etc.)
│   │   │   ├── nav/          # "Navigation" component
│   │   │   │   ├── desktop/  # Desktop version of the navigation
│   │   │   │   ├── mobile/   # Mobile version of the navigation
│   │   │   │   ├── nav.module.scss
│   │   │   │   └── nav.tsx
│   │   │   └── ...
│   │   └── views/            # Page-specific components
│   │       ├── home/         # "Home" view
│   │       │   ├── hero.module.scss
│   │       │   └── hero.tsx
│   │       └── ...
│   │
│   ├── config/               # Application configuration and routing
│   │   ├── private-route.tsx # Component for protecting routes (requires authentication)
│   │   └── ways.tsx          # Configuration for navigation paths
│   │
│   ├── models/               # Data models and types
│   │   ├── auth/             # Models related to authentication
│   │   │   └── auth.ts       # Types and interfaces for user data
│   │   └── ...
│   │
│   ├── constants/            # Application-wide constants
│   │   └── nav-links.ts      # Statically defined navigation links
│   │
│   ├── services/             # Application services (API interactions, global state management)
│   │   ├── auth/             # Services related to authentication
│   │   │   ├── auth-service.ts # Authentication service (API calls)
│   │   │   └── auth-slice.ts   # Redux slice for authentication state
│   │   └── store/            # Global store configuration (e.g., Redux)
│   │       └── store.ts
│   │
│   ├── styles/               # Global and shared styles
│   │   ├── _fonts.scss       # Fonts definitions
│   │   ├── _palette.scss     # Project color palette
│   │   └── global.scss       # Global styles
│   │
│   ├── views/                # Main application pages
│   │   ├── home/             # "Home" page
│   │   │   ├── home.tsx
│   │   │   └── home.css
│   │   └── error/            # "Error" page
│   │       ├── error.tsx
│   │       └── error.css
│   │
│   └── main.tsx              # Main entry point of the application
│
├── tsconfig.json             # TypeScript configuration
├── package.json              # npm dependencies and scripts
└── README.md                 # Project documentation
```

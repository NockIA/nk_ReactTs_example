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
├── public/ # Contains publicly accessible resources (images, scripts, etc.) 
│ └── assets/ # Static assets 
│ ├── fonts/ # Font files (e.g., Poppins) 
│ └── images/ # Images used in the project 
│ ├── icons/ # Specific icons (SVG, PNG, etc.) 
│ └── others/ # Other images (backgrounds, illustrations, etc.) 
│ 
├── src/ # Main source code 
│ ├── common/ # Shared resources and utilities 
│ │ ├── components/ # Reusable components 
│ │ │ ├── Navigation/ # Navigation components 
│ │ │ │ ├── Desktop/ # Desktop navigation 
│ │ │ │ ├── Mobile/ # Mobile navigation 
│ │ │ │ └── Navigation.tsx 
│ │ │ └── ... 
│ │ ├── constants/ # Application-wide constants 
│ │ │ └── NAV_LINKS.ts # Navigation links 
│ │ ├── hooks/ # Custom React hooks 
│ │ │ └── useSearch.tsx # Search hook with debounce 
│ │ ├── models/ # Data models and types 
│ │ │ ├── Auth/ # Authentication-related models 
│ │ │ └── Navigation.ts # Navigation-related models 
│ │ ├── services/ # API services and global state management 
│ │ │ ├── Store/ # Redux store configuration 
│ │ │ │ ├── Slices/ # Redux slices 
│ │ │ │ └── store.ts # Store setup 
│ │ │ ├── authService.ts # Authentication service 
│ │ │ ├── userService.ts # User-related API calls 
│ │ │ └── axiosInstance.ts # Axios instance with interceptors 
│ │ ├── styles/ # Global and shared styles 
│ │ │ ├── _colors.scss # Color variables 
│ │ │ ├── _fonts.scss # Font definitions 
│ │ │ └── global.scss # Global styles 
│ │ └── ... 
│ │
│ ├── pages/ # Main application pages 
│ │ ├── Auth/ # Authentication pages 
│ │ │ ├── Login/ # Login page 
│ │ │ │ └── Login.tsx 
│ │ │ ├── Register/ # Register page 
│ │ │ │ └── Register.tsx 
│ │ │ └── Auth.module.scss # Shared styles for Auth pages 
│ │ ├── Error/ # Error page 
│ │ │ ├── Error.tsx 
│ │ │ └── Error.module.scss 
│ │ ├── Home/ # Home page 
│ │ │ ├── components/ # Home-specific components 
│ │ │ │ ├── Card/ # Card component 
│ │ │ │ └── Hero/ # Hero section 
│ │ │ ├── models/ # Home-specific models 
│ │ │ ├── services/ # Home-specific services 
│ │ │ ├── Home.tsx 
│ │ │ └── Home.module.scss 
│ │ └── ... 
│ │
│ ├── routes/ # Application routing 
│ │ ├── ProtectedRoute.tsx # Route protection logic 
│ │ └── Router.tsx # Main router configuration 
│ └── main.tsx # Main entry point of the application 
├── .env.example # Example environment variables 
├── .eslintrc.cjs # ESLint configuration 
├── .gitignore # Git ignore rules 
├── .prettierignore # Prettier ignore rules 
├── .prettierrc # Prettier configuration 
├── index.html # HTML entry point 
├── package.json # npm dependencies and scripts 
├── tsconfig.json # TypeScript configuration 
├── tsconfig.node.json # TypeScript configuration for Node.js 
├── vite.config.ts # Vite configuration 
└── README.md # Project documentation
```

## Naming Conventions

To ensure a clear and consistent organization of the project, the following conventions are used for naming folders and files:

### Folders
- **PascalCase**: Folder names representing components or pages use PascalCase.
  - Example: `Navigation`, `Auth`, `Home`.
- **snake_case**: Folder names containing global resources or utilities use snake_case.
  - Example: `common`, `services`, `styles`.

### Files
- **PascalCase**: Files containing React components use PascalCase.
  - Example: `NavigationBar.tsx`, `LoginForm.tsx`.
- **kebab-case**: SCSS or CSS files use kebab-case.
  - Example: `auth.module.scss`, `home.module.scss`.
- **camelCase**: Utility files or specific functions use camelCase.
  - Example: `useSearch.tsx`, `axiosInstance.ts`.
- **UPPER_CASE**: Files containing global constants use UPPER_CASE.
  - Example: `NAV_LINKS.ts`.

### Additional Rules
- TypeScript files containing types or interfaces should be placed in a `models` folder and named using PascalCase.
  - Example: `User.ts`, `Auth.ts`.
- Service files should be placed in a `services` folder and named using camelCase.
  - Example: `authService.ts`, `userService.ts`.

By following these conventions, it becomes easier to navigate the project and maintain a consistent structure.

## Branch and Commit Naming Conventions

To maintain a clear and consistent workflow, the following conventions are used for naming branches and writing commit messages:

### Branch Naming
Branches should follow a structured naming convention to indicate their purpose. Use the following format:

```
<type>/<short-description>
```

#### Types:
- **feature**: For new features or enhancements.
  - Example: `feature/add-login-page`
- **bugfix**: For fixing bugs or issues.
  - Example: `bugfix/fix-auth-token`
- **hotfix**: For urgent fixes in production.
  - Example: `hotfix/fix-critical-error`
- **refactor**: For code refactoring without changing functionality.
  - Example: `refactor/update-navigation-component`
- **chore**: For maintenance tasks like updating dependencies or configurations.
  - Example: `chore/update-eslint-config`
- **docs**: For documentation updates.
  - Example: `docs/update-readme`

### Commit Message Format
Commit messages should follow the [Conventional Commits](https://www.conventionalcommits.org/) standard for clarity and consistency. Use the following format:

```
<type>(scope): <short-description>
```

#### Types:
- **feat**: For new features.
  - Example: `feat(auth): add login functionality`
- **fix**: For bug fixes.
  - Example: `fix(router): resolve navigation issue`
- **docs**: For documentation changes.
  - Example: `docs(readme): update usage instructions`
- **style**: For code style changes (formatting, indentation, etc.).
  - Example: `style(navbar): fix indentation`
- **refactor**: For code refactoring.
  - Example: `refactor(home): optimize rendering logic`
- **test**: For adding or updating tests.
  - Example: `test(auth): add unit tests for login`
- **chore**: For maintenance tasks.
  - Example: `chore(deps): update axios to v1.2.3`

#### Guidelines:
1. **Scope**: The scope is optional but recommended to indicate the part of the project affected (e.g., `auth`, `router`, `styles`).
2. **Short Description**: Use a concise description (max 50 characters) in the present tense.
3. **Body (Optional)**: Add a detailed explanation if necessary, separated by a blank line.
4. **Footer (Optional)**: Include references to issues or breaking changes.
   - Example: `BREAKING CHANGE: updates API endpoint structure`

By following these conventions, the project will have a more organized and understandable history, making collaboration easier.
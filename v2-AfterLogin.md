# React - Redirect After Login

## Structure
```
react-fastapi-app/
├── frontend/
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── theme.jsx
│       └── componets/
│            ├── HomeScreen.jsx
│            ├── Register.jsx
│            ├── LoginStaff.jsx
│            └── Login.js
│
└── v1-HomeScreen.md
```

### Authentication Structure
```
src/
├── components/
│   └── Auth/
│       ├── AuthLayout.jsx       # Reusable layout for authentication pages (LoginPage, RegisterPage, LoginStaffPage)
│       ├── RegisterForm.jsx     # Form component for client registration
│       ├── LoginForm.jsx        # Form component for client login
│       └── LoginStaffForm.jsx   # Form component for staff login
|
├── features/
│   └── Auth/
│       ├── RegisterPage.jsx     # Client Register page
│       ├── LoginPage.jsx        # Client Login page
│       └── LoginStaffPage.jsx   # Staff Login page
|
├── hooks/
│   └── useAuth.js               # Custom hook for authentication
|
```

### Target Directory Structure
```
src/
├── assets/               # Static assets like images, fonts, icons
├── components/           # Shared reusable components
│   ├── Auth/             # Authentication components (e.g., Login, Register)
│   ├── Layout/           # Shared layout components (Sidebar, UserMenu, etc.)
│   ├── Table/            # Table components (e.g., DataTable)
│   └── Chatbot/          # Chatbot-specific UI components
|
├── features/             # Feature-specific pages or components
│   ├── Auth/             # Login and registration pages
│   ├── StaffConsole/     # Staff console pages (Home, Uploader, Scraper, Admin)
│   │   ├── routes/       # Route definitions for console pages
│   │   ├── Home/         # Home page
│   │   ├── FileUploader/ # File uploader page
│   │   ├── WebScraper/   # Web scraper page
│   │   └── AdminControl/ # Admin control page
│   └── ClientChatbot/    # Chatbot UI page
|
├── hooks/                # Custom React hooks
|
├── router/               # Centralized routing definitions for TanStack Router
│   └── router.jsx        # Main route configuration
|
├── services/             # API services and backend communication
|
├── utils/                # Utility functions/helpers
|
├── App.jsx               # Main app component
├── main.jsx              # Entry point
├── theme.jsx             # design theme
└── styles/               # Global or shared styles (CSS/SCSS modules)
```

## Workflow Step 1 - Home Screen
```
npm install react-icons
```

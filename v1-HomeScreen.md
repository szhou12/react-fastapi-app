# React - Static Home, Login, Register Pages

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

## Workflow Step 1 - Home Screen

### 1. Customize Theme `frontend/src/theme.jsx`
1. create a `theme.jsx` file in `frontend/src/`
2. add customized code

### 2. Create a New Component 'HomeScreen'
1. create a new directory in `frontend/src/components`
2. create a new file in the directory, e.g. `HomeScreen.jsx`
3. In `HomeScreen.jsx`, copy and paste the template code from [Chakra Templates Hero - Split Screen with Image](https://chakra-templates.vercel.app/page-sections/hero)
4. modify the template code based on your needs
    - add theme
    - add extra buttons
    - edit the text

### 3. Edit App File `frontend/src/App.jsx`
import `HomeScreen` component
```jsx
import React from 'react';
import HomeScreen from './components/HomeScreen';

function App() {
  return (
    <div>
      <HomeScreen />
    </div>
  );
}

export default App;
```

### 4. Edit Main File `frontend/src/main.jsx`
NOTE: you have to add `theme` in the `ChakraProvider` tag!
```jsx
import React from 'react';
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import { ChakraProvider} from '@chakra-ui/react';
import App from './App';

import theme from "./theme"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
```

## Workflow Step 2 - Routing
### 1. Edit `HomeScreen.jsx`
Each of 3 buttons add `onClick` to navigate to the corresponding page:
```jsx
import { useNavigate } from 'react-router-dom';
const navigate = useNavigate(); // add this line in HomeScreen() body

<Button 
  ... // other props
  onClick={() => navigate('/login')}
>
  Login
</Button>
```

### 2. Edit `App.jsx`
```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
```
**Quiz Time**: What are `<Router>`, `<Routes>` and `<Route>`? Why are they used together?
- `<Router>`: provides the routing context. It listens to changes in the browser's URL and provides the current location to its children, enabling them to render the appropriate components based on the URL.
- `<Routes>`: used to define different routes in your application. It wraps around `<Route>` components.
- `<Route>`: specifies individual paths and components to render when the URL matches the path.
- Dependency: `<Routes>` relies on the context provided by `<Router>` to function correctly. Without `<Router>`, `<Routes>` will not know how to match the current URL to the defined routes.



### 3. Add Components: `Login.jsx`, `Register.jsx`, `UserProfile.jsx`
place them in `frontend/src/components/`
```jsx
// Login.jsx
import React from 'react';

function Login() {
    return (
        <div>
            <h1>This is Login Page</h1>
        </div>
    );
}

export default Login;
```

## Workflow Step 3 - Login, Registration
### 1. Customize login and register page
- [templates](https://chakra-templates.vercel.app/forms/authentication)
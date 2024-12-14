# Home Screen by React


## SetUp
### Version
- Node.js: v22.12.0
- npm: 10.9.2
### Install
```linux
npm create vite@latest frontend --template react
 > Select a framework: React
 > Select a variant: JavaScript

cd frontend

npm install

// Note: install 2.8.2 and above as 2.8.2 is the latest stable version
npm install @chakra-ui/react@^2.8.2

npm install @emotion/react @emotion/styled framer-motion
```

## Workflow

### 1. Customize Theme `frontend/src/theme.jsx`
1. create a `theme.jsx` file in `frontend/src/`
2. add customized code

### 2. Create a New Component
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

## Start the App
```linux
npm run dev
```
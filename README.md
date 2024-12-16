# React + FastAPI Learning Project

## Table of Contents
- [SetUp](#setup)
- [Start the App](#start-the-app)
- [Milestones](#milestones)
  - [Stage 1 - Static Home, Login, Register Pages](#stage-1---static-home-login-register-pages)

## SetUp
### Version
- Node.js: v22.12.0
- npm: 10.9.2
- chakra-ui: 2.8.2
- react-router-dom: 7.0.2

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
npm install react-router-dom
npm i @chakra-ui/icons


## Reinstall if having issues to start the app
# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Clear npm cache (optional)
sudo npm cache clean --force

# Reinstall all dependencies
npm install
```

## Start the App
```linux
// under /frontend
npm run dev
```

## Milestones
1. [Stage 1 - Static Home, Login, Register Pages](https://github.com/szhou12/react-fastapi-app/blob/main/v1-HomeScreen.md)

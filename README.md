# React + FastAPI Learning Project

## Table of Contents
- [Milestones](#milestones)
  - [Stage 1 - Static Home, Login, Register Pages](#stage-1---static-home-login-register-pages)
- [SetUp](#setup)
- [Start the App](#start-the-app)
- [Git Branch for Tracking Milestones](#git-branch-for-tracking-milestones)

## Milestones
1. [Stage 1 - Static Home, Login, Register Pages](https://github.com/szhou12/react-fastapi-app/blob/main/v1-HomeScreen.md)


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

## Git Branch for Tracking Milestones
1. Check what branch currently on
```linux
git branch

// or
git status
```
2. Switch to a branch
```linux
git checkout branch-name

// or
git switch branch-name
```
3. Create a new branch ("v1-code") based on the branch you are currently on AND switch to the new branch
```linux
git checkout -b v1-code
```
4. Add your changes, commit them, and push this new branch
```linux
git add .

git commit -m "version 1 code"

git push -u origin v1-code // FIRST time pushing a branch to the remote repository, MUST specify the branch name!

git push // subsequent push can write like this
```
5. Create next branch ("v2-code") from a specified branch ("v1-code") AND switch to the new branch
```linux
git checkout -b v2-code v1-code
```
6. Compare differences between branches to track progress:
```linux
git diff v1-code..v2-code
```
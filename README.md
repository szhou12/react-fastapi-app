# React + FastAPI Learning Project

## Table of Contents
- [Milestones](#milestones)
  - [Stage 1 - Static Home, Login, Register Pages](#stage-1---static-home-login-register-pages)
- [SetUp](#setup)
- [Start the App](#start-the-app)
- [Git](#git)
  - [Git Branch for Tracking Milestones](#git-branch-for-tracking-milestones)
  - [Git Merge Branches](#git-merge-branches)

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

npm install @chakra-ui/react@^2.8.2   // Note: install 2.8.2 and above as 2.8.2 is the latest stable version
npm install @emotion/react @emotion/styled framer-motion
npm install react-router-dom
npm install @chakra-ui/icons
npm install @tanstack/react-query
npm install @tanstack/react-query-devtools
npm install @tanstack/react-router
npm install react-hook-form
npm install react-icons
npm install uuid


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

## Git
### Git Branch for Tracking Milestones
Every time I achieve a milestone (a big progress), I will stage the current verion in the current branch and create a new branch for inheriting the existing progress and working on the next milestone.

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

### Git Merge Branches
Keep `main` up-to-date with the latest version (i.e. the latest working branch). Conduct step 1, 2, 3, 4 if and only if you want to bring some ahead commits in `main` to `lastest-working-branch`. If `main` is totally behind `lastest-working-branch`, skip step 1, 2, 3, 4.

1. Switch to the latest working branch
```linux
git checkout lastest-working-branch
```
2. Bring ahead commits in `main` to `lastest-working-branch`
```linux
git merge main
```
This may open up a text editor, leave necessary messages and type ESC and then `:wq` to save and exit.
3. Resove Merge Conflicts if Arise
    1. Open the conflicted files in your editor.
    2. Look for conflict markers (e.g., <<<<<<<, =======, >>>>>>>).
    3. Manually resolve the conflicts by keeping or modifying the appropriate changes.
    4. Mark the file as resolved: `git add <conflicted-filename>`
4. Commit the Merge
```linux
git commit -m "Merge main into v2-afterlogin"
```
5. Bring commits in `lastest-working-branch` to `main`
    1. Switch to `main`: 
    ```linux
    git checkout main
    ```
    2. Merge `lastest-working-branch` to `main`: 
        - `--ff-only` flag ensures a clean fast-forward merge if `main` is behind `lastest-working-branch`.
    ```linux
    git merge --ff-only lastest-working-branch
    ```
    3. Push the updated `main`:
    ```linux
    git push origin main
    ```

## Notes on [full-stack-fastapi-template](https://github.com/fastapi/full-stack-fastapi-template)
- `frontend/src/client/sdk.gen.ts`: items CRUD
- `frontend/src/routes/_layout/items.tsx`: Items Table
- `frontend/src/client/types.gen.ts`: defined interfaces. e.g. ItemPublic, UserPublic
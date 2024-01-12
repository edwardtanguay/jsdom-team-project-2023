# Welcome to our JS-DOM Project!

## General Information

-   **Name**: JS-DOM Project!
-   **Version**: 0.0.0
-   **Private**: Yes

## Description: Joint exercise project of class WD23-D04

## For more details and task tracking, visit our [GitHub Board](https://github.com/orgs/WD23-D04/projects/7/views/1?visibleFields=%5B%22Title%22%2C%22Assignees%22%2C%22Status%22%2C%22Labels%22%5D&verticalGroupedBy%5BcolumnId%5D=Status).

## Scripts

To execute the following scripts, use the command `npm run [script-name]`:

-   **dev**: `npm run dev`  
    Executes `backendWatch` and `frontend` simultaneously.

-   **backendWatch**: `npm run backendWatch`  
    Starts nodemon to monitor backend changes.

-   **api**: `npm run api`  
    Launches the backend API server.

-   **frontend**: `npm run frontend`  
    Starts Vite on port 4223.

-   **buildBackend**: `npm run buildBackend`  
    Compiles TypeScript files based on the backend-tsconfig.

-   **build**: `npm run build`  
    Runs tests, compiles TypeScript, and builds the frontend.

-   **preview**: `npm run preview`  
    Previews the built frontend with Vite.

-   **cli**: `npm run cli`  
    Executes a script to create a task prompt.

-   **ce**: `npm run ce`  
    Creates an exercise.

-   **fix-at-layer**: `npm run fix-at-layer`  
    Fixes errors at a specific layer.

-   **sc**: `npm run sc`  
    Displays the last 10 Git commits.

-   **sc-OLD**: `npm run sc-OLD`  
    Displays the last 10 Git commits (old method).

-   **sca**: `npm run sca`  
    Shows all Git commits.

-   **delbranches**: `npm run delbranches`  
    Deletes all Git branches except dev, master, and main.

-   **ud**: `npm run ud`  
    Does the steps `git pull`, `npm i` and `npm run dev` in succession to eachother.

## Folder and File Structure

-   **backend**:
    More details about this folder will follow.

-   **dev**:
    More details about this folder will follow.

-   **public**:
    This is the public directory. Place assets such as images, favicons, fonts, etc., here.

    -   **images**:
        Place images in the appropriate subdirectories.
    -   **favicon.ico**:
        This is the favicon file displayed in the browser's address bar.

-   **share**:
    More details about this folder will follow.

-   **src**:
    This directory contains all the source files.
    -   **components**:
        Store reusable components here.
    -   **data**:
        Contains JSON files with data.
    -   **exercises**:
        Contains exercise files in TXT format.
    -   **pages**:
        Contains all page files, e.g., About, 404.
    -   **solutions**:
        Store your solutions for the exercises here.
    -   **interfaces.ts**:
        TypeScript interfaces are defined here.
    -   **main.ts**:
        The current page is rendered into this file.
    -   **router.ts**:
        This file handles app routing.
    -   **style.scss**:
        Our main SCSS file. Store styles here that aren't directly set using Tailwind.

## Additional Resources

To make sure that the Formatting of our Files is unified we are making use of the extension **[EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)** which makes sure the settings of our Indentation default is applied instead of personal settings. **If you plan to work on it too, we implore you to install said extension so our Files don't get mixed up every time.**

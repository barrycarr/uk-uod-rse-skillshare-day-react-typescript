# Dundee Research Software Engineer Skillshare Days
## Getting Started with React and typescript

### Quick Start
This is a walkthru on how to get started with [React](https://reactjs.org/) and [TypesSript](https://www.typescriptlang.org/) by creating a simple Todo application.

To get started, ensure you have [nodejs](https://nodejs.org/en/) installed and then clone this repo.

Next, `cd` into the folder where this project has been cloned to and enter the following command:

`npm install`

This command will then install of the packages listed in `package.json`

Next run:

`npm start`

and this app should run in your default browser.

### Starting from Scratch
If you'd like create the React project from scratch, create new folder/directory and from there enter the following command:

`npx create-react-app name-of-project --typescript`

where `name-of-project` is the sub-folder where your project will be created. Once `create-react-app` and downloaded and installed all of the dependencies is needs, `cd` in to `name-of-project` folder.

Go here for more information on [Create React App](https://github.com/facebook/create-react-app) and all of its options.

#### Next Steps
If you would like to use [SASS](https://sass-lang.com/) as you CSS pre-processor you will need to install node-sass. To do that enter the following command:

`	npm i --save-dev node-sass`

If you are using SASS, you will need to rename all `.css` files to have a `.scss` extension and also adjust all `import` statements to reflect this change.

Next, install [eslint](https://eslint.org/) linter. This linter will catch many errors before you run your app and can also be used to enforce a team wide code style.  For more information on setting up eslint with TypesSript, see this article, [here](https://dev.to/benweiser/how-to-set-up-eslint-typescript-prettier-with-create-react-app-3675). Enter the following command to install eslint:

`npm i -D @types/react @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-react`

Once eslint is installed, you will to configure it. If you're using [VSCode](https://code.visualstudio.com/) you will need to install the [eslint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint). There are two files in this project that will help set-up eslint with sensible defaults, they are:

`.eslintignore` & `.eslintrc.json`

Copy these files into your `name-of-project` folder.

Next you will need to install two node packages that this project uses, enter the following command in your `name-of-project` folder:

`npm i --save classnames lodash`

Finally, you will need to install the [type declaration files](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html) for the previously installed packages:

`npm i --save-dev @types/classnames @types/lodash`


## Original Create React App readme follows:

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

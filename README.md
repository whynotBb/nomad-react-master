# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

coin icon img
https://coinicons-api.vercel.app/

npm install --save react-apexcharts apexcharts
npm i react-helmet
npm i --save-dev @types/react-helmet
React Helmet
npm i react-helmet
npm i --save-dev @types/react-helmet
https://www.npmjs.com/package/react-helmet

- Warning: Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code.
  React Helmet사용시 콘솔창에 위와 같은 경고창이 뜨시는 분들은 React Helmet 대신 React Helmet Async를 사용하시면 됩니다.
  npm i react-helmet-async

```
// App.tsx (1. HelmetProvider를 가져와서 Router위에 감싸줍니다.)
import { HelmetProvider } from "react-helmet-async";

< HelmetProvider >
< Router />
< / HelmetProvider >

// Chart.tsx (2. Helmet컴포넌트 안에 title을 전달합니다.)
import { Helmet } from "react-helmet-async";

< Helmet >
< title >Chart< / title >
< / Helmet >
```

https://www.npmjs.com/package/react-helmet-async

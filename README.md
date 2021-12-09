# Love Being Home - Real Estate Web Application
This is a portfolio project created by Asia/Asia B the Techie. It is a web application created for a fictional real estate company called Love Being Home. 

This README will not offer a step-by-step written guide to creating everything in this project. [JavaScript Mastery](https://www.youtube.com/channel/UCmXmlB4-HJytD7wek0Uo97A) created a very detailed video which acted as the original guide for this project and thus would do a better job at providing a walkthrough. 

Instead this README will act as a reference guide for developers who are famliar with the concepts featured in this project but may need additional assistance understanding those concepts to be able to use them independently. 

## Making the Project 
This project was made using the JavaScript framework, Next.js. The goal of this project was to create a real estate web application that would showcase JavaScript skills by making use of JavaScript frameworks and libraries. As well as the ability to retrieve and display API data effectively within a web app. This project was made to be housed on the [love-being-home](https://github.com/asiabthetechie/love-being-home) repository on Github.   

Construction of this project was made possible with the use of the following:
- [Build and Deploy a Modern Real Estate App | React Website Tutorial](https://www.youtube.com/watch?v=y47gYvXchXM&ab_channel=JavaScriptMastery) - A detailed ReactJS and NextJS tutorial offered on YouTube by JavaScript Mastery
- [Next.js Documentation](https://nextjs.org/docs) - The official Next.js documentation
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment) - The official Next.js documentation deployment section
- [Learn Next.js](https://nextjs.org/learn) - A interactive Next.js tutorial offered by the Next.js team 


### 1. Create the Project :construction:
Start by creating a new folder to contain the project. For this project the folder was named 'Love-Being-Home-Real-Estate-App'. Enter the folder within your terminal and then create the project by running the following command:
```
npx create-next-app@latest  ./
```
This command initializes a new Next.js application inside of the current container folder. This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Note, Node.js will need to be installed on the system for the command to work properly. 

  
**BABEL**
Once the Next.js app was made the `.babelrc` file was manually created to include the `"presets"` and `"plugins"`:
```
{
    "presets": ["next/babel"],
    "plugins": []
}
``` 
[Babel](https://babeljs.io/docs/en/) is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers. 
  
  
**RUN THE PROJECT**
Once that's done to run the application enter the following command into the terminal:
```
npm run dev
```
Then open in [http://localhost:3000](http://localhost:3000).
To reuse the terminal enter CTRL + C, and when asked if the batch job should be terminated enter Y (for yes).  
  
  
**INSTALL DEPENDENCIES/PACKAGES**
Now the dependencies/packages will need to be installed to the project.  
Install the necessary dependencies by running:
```
npm install @chakra-ui/react @emotion/react @emotion/styled axios framer-motion millify nprogress react-horizontal-scrolling-menu react-icons
```
The command directly above will install the Chakra UI, Emotion, Axios, Millify, NProgress, the React Horizontal Scrolling Menu, and React Icons.
- Chakra UI is a component library that helps build React applications.
- Emotion is library designed for writing CSS styles with JavaScript.
- Axios is a library that helps React applications retrieve external data.
- Millify is a npm package that converts long numbers into readable strings.
- NProgress is a npm package that creates slim progress bars.
- React Horizontal Scrolling Menu... creates horizontal scrolling menus... in React.
- React Icons are a collection of popular icons to use within a React project. 

---
### 2. Edit the Project :hammer_and_wrench:
To start editing the home page within the Next.js project the `pages/index.js` file should be modified. When running the project the live page will auto-update as the files within are editied. When editing this new project everything within the `<div>` can be deleted, as this is placeholder content, as well as any unnecessary imports.
  
  
**COMPONENTS**  
Reusable components can be created in React and Next.js to split the UI into more manageable pieces. They are the building blocks of the application. Components are typically contained in a `components` folder that is created in the root project folder.
Components are JavaScript functions that accept input (in the form of "props") and return elements that describe what should appear on screen.

To learn more about components see the following:
- [React Components](https://reactjs.org/docs/components-and-props.html)
- [Next.js Layout Components](https://nextjs.org/docs/basic-features/layouts)
  
  
**PAGES & ROUTING**  
Next.js projects automatically come with a `pages` folder. When a new JavaScript file is added to the `pages` directory it is automatically available as a route.  

The Next.js Link component from `next/link` is a common file import as this component enables client-side transitions between routes (it's what allows users to go to different pages within app).

To learn more about Next.js routing see the following:
- [Next.js Routing Introduction](https://nextjs.org/docs/routing/introduction)
- [Next.js `next/link`](https://nextjs.org/docs/api-reference/next/link)
  
  
**ASSETS - IMAGES, ILLUSTRATIONS, ETC.**  
Assets are typically contained in a `assets` folder that is created in the root project folder. Within this folder there may be additional folders for `images`, `illustrations`, etc.

To display these assets the Next.js Image component from `next/image` is a common solution. This component acts as an extension of the HTML `<img>` element. Note, when using this component height and width are required passed through as props.

To learn more about the Next.js image component see the following:
- [Next.js Image Component/Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)

---
### 3. Style the Project :art:
This project utilizes Chakra UI for styling. Chakra UI is a component library. By importing the necessary components one can create easily styled projects.
For example, the Flex, Box, Text, and Button components are common components seen throughout this project. They render elements such as `<div>` and `<button>`.
From there the components can be given shorthand props such as `color`, `alignItems`, `justifyContent`, etc.  

However, one important note is that for Chakra UI to work properly, the ChakraProvider needs to be set up at the root of the application. This can be done by going to `/pages/_app.js` importing the ChakraProvider from `'@chakra-ui/react'` and including it within the `MyApp` function.

To learn more about the Chakra UI see the official documentation:
- [Chakra UI Website](https://chakra-ui.com/)

---
### 4. Adding Data to the Project - API Routes :bar_chart:
This project gathers its data from the use of an external API rather than a database, using [RapidAPI](https://rapidapi.com/hub) as its API Source. Specifically, using the API [Bayut](https://rapidapi.com/apidojo/api/bayut/) which is an API to query real estate in the UAE.  
To use the API create or log-in to a Rapid API account and subscribe to the API. 
Once subscribed the option to test endpoints will be available and that will provide code snippets to use in the project. 
```
headers: {
    'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': '...'
}
```
  
  
API Routes can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.
The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as API routes instead of React pages.

To learn more about working with data in Next.js see the following:
- [Next.js API routes Introduction](https://nextjs.org/docs/api-routes/introduction) 

---
### 5. Add Functionality to the Project :toolbox:
Components make up the user interface but just like components the functionality is seperated so it can be reused as well. The utility folder `utils` will contain utility functions to use throughout the project. Next.js offers two forms of pre-rendering: static generation and server-side rendering. Both of these make an appearance in the project functionality.  

To learn more about adding functionality to a project see the following:
- [Asynchronous JavaScript](https://www.better.dev/asynchronous-javascript-using-async-await)
- [Next.js Data Fetching](https://nextjs.org/docs/basic-features/data-fetching)

**FETCHING DATA**  
The `utils/fetchApi.js` file is responsible for fetching the external API data for the project. Ihis utility makes use of `getStaticProps`, a static generation function that allows  users to fetch data at build time.  
As an overview, `fetchApi` does the following:
- Imports axios
- Exports the `baseUrl` variable assigned to the value of 'x-rapidapi-host'
- Exports the `fetchApi` async function that fetches data from the API and returns the API data as a promise 

Then within the `index.js` file:
- Import `baseUrl` and `fetchApi` from `utils/fetchApi`
- Export the `getStaticProps` async function that contains the API calls and returns a props object. API calls can be made using the parameters from the API documentation.

**SEARCH FUNCTIONALITY**  
The Search page is made from a function component that uses makes use of React States and Hooks, components, and utilities. The async function that's exported from the Search page makes use of `getServerSideProps`, a server-side rendering function that fetches data on each request.  

To learn more about how the search functionality is made see the following:
- [React Hooks](https://reactjs.org/docs/hooks-state.html)
- [Handling Events](https://reactjs.org/docs/handling-events.html)

### 6. Deploy the Project :rocket:
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
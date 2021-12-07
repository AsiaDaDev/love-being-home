# Love Being Home - Real Estate Web Application
This is a portfolio project created by Asia/Asia B the Techie. It is a web application created for a fictional real estate company called Love Being Home. 


## Making the Project
This project was made using the JavaScript framework, Next.js. The goal of this project was to create a web application that would showcase personal JavaScript skills by making use of the programming languages' frameworks and libraries. This project was made to be housed on the love-being-home repository on Github. Construction of this project was made possible with the use of the following:
- [Build and Deploy a Modern Real Estate App | React Website Tutorial](https://www.youtube.com/watch?v=y47gYvXchXM&ab_channel=JavaScriptMastery)
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Next.js deployment documentation](https://nextjs.org/docs/deployment) 
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


### 1. Create the project
This project was made by running the following command:
```
npx create-next-app@latest  ./
```
This command initializes a new Next.js application inside of the current container folder.
Note, Node.js will need to be installed on the system for the command to work properly. 

Once the Next.js app was made the `.babelrc` file was manually created to include the "presets" and "plugins":
```
{
    "presets": ["next/babel"],
    "plugins": []
}
``` 

To run the application enter the following command into the terminal:
```
npm run dev
```
Then open in [http://localhost:3000](http://localhost:3000).

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Now the dependencies/packages will need to be installed to the project. Install the necessary dependencies by running:
```
npm install @chakra-ui/react @emotion/react @emotion/styled axios framer-motion millify nprogress react-horizontal-scrolling-menu react-icons
```
The command directly above will install the Chakra UI and Axios.
- Chakra UI is a component library that helps build React applications.
- Axios is a library that helps React applications retrieve external data.
- Millify is a npm package that converts long numbers into readable strings.
- NProgress is a npm package that creates slim progress bars.
- React Horizontal Scrolling Menu... creates horizontal scrolling menus... in React.
- React Icons are a collection of popular icons to use within a React project. 


### 2. Editing the Project
To start editing the Next.js project the `pages/index.js` file should be modified. The live page will auto-update as the file `index.js` file is editied.
When creating a new project everything within the `<div>` can be deleted as well as any unnecessary imports.

COMPONENTS
Reusable components can be created in React and Next.js to split the UI into more manageable pieces.
Components are JavaScript functions that accept input (in the form of "props") and return elements that describe what should appear on screen.

To learn more about components see the following:
- [React Components](https://reactjs.org/docs/components-and-props.html)
- [Next.js Layout Components](https://nextjs.org/docs/basic-features/layouts)

PAGES & ROUTING
When a file is added to the `pages` directory it is automatically available as a route. 
The Next.js Link component from `next/link` to enable client-side transitions between routes. 

To learn more about Next.js routing see the following:
- [Next.js Routing Introduction](https://nextjs.org/docs/routing/introduction)
- [Next.js `next/link`](https://nextjs.org/docs/api-reference/next/link)

IMAGES
The Next.js Image component from `next/image` is simply an extension of the HTML `<img>` element. 

To learn more about the Next.js image component see the following:
- [Next.js Image Component/Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)


### 3. Styling with Chakra UI
The Chakra UI is a component library. By importing the necessary components one can create easily styled projects.
For example, the Flex, Box, Text, and Button components are common components. They render elements such as `<div>` and `<button>`.
From there the components can be given shorthand props such as color, alignItems, justifyContent, etc.  

To learn more about the Chakra UI see the documentation:
- [Chakra UI Website](https://chakra-ui.com/)


### 4. API Routes - Working with Data
This project utilizes [RapidAPI](https://rapidapi.com/hub) as its API Source. 
Specifically, using the API [Bayut](https://rapidapi.com/apidojo/api/bayut/) which is an API to query real estate in the UAE.
To use the API create or log-in to a Rapid API account and subscribe to the API. 
Once subscribed the option to test endpoints will be available and that will provide code snippets to use in the project. 
```
headers: {
    'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': '...'
}
```

The utility folder `utils` will contain utility functions to use throughout the project. 
The `utils/fetchApi.js` file does the following: 
- Imports axios
- Exports the `baseUrl` variable assigned to the value of 'x-rapidapi-host'
- Exports the `fetchApi` async function that fetches data from the API and returns the API data as a promise 

Within the `index.js` file do the following:
- Import `baseUrl` and `fetchApi` from `utils/fetchApi`
- Export the `getStaticProps` async function that contains the API calls and returns a props object. API calls can be made using the parameters from the API documentation.    

Also, make sure to create the Property component to display the necessary props. 

API Routes can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.
The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as API routes instead of React pages.

To learn more about working with data in Next.js see the following:
- [Next.js API routes Introduction](https://nextjs.org/docs/api-routes/introduction) 
- [Asynchronous JavaScript](https://www.better.dev/asynchronous-javascript-using-async-await)
- [Next.js Data Fetching](https://nextjs.org/docs/basic-features/data-fetching)


### 5. Deployment
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
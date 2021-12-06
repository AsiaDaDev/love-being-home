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
Reusable components can be created in React and Next.js to improve productivity. 

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

### 3. Chakra UI
The Chakra UI is a component library. By importing the necessary components one can create easily styled projects.
For example, the Flex, Box, Text, and Button components are common components.

To learn more about the Chakra UI see the documentation:
- [Chakra UI Website](https://chakra-ui.com/)

### 4. Working with Data
[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.
The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### 5. Deployment
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
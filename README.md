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
npx create-next-app 
```

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

### 2. Editing the Project
To start editing the Next.js project the `pages/index.js` file should be modified. The page will auto-update as the file `index.js` file is editied.
[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.
The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### 3. Deployment
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
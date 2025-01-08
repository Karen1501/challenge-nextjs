## React Next.js Project

## Description.

This project is an application built with **React** and **Next.js** that uses **React Query** to handle queries and data updates, and **Tailwind CSS** for styling. It includes infinite scroll functionality that combines user data and facts about cats obtained from an API.

---

## Features

- Next.js\*\*: React-based framework for SSR (Server-Side Rendering) and ISR (Incremental Static Regeneration).
- React Query\*\*: Advanced asynchronous data handling, caching and state synchronization.
- Tailwind CSS\*\*: Fast and customizable styling with utilities.
- Infinite Scroll\*\*: Combine data from two external sources.
- **API REST**: Data obtained from JSONPlaceholder and CatFact.

---

## Technologies Used

- **React**: **Next.js**: **Next.js**: \*\*Next.js
- **Next.js**
- **React Query** **Tailwind CSS**: **Tailwind CSS**: \*\*Tailwind CSS
- **Tailwind CSS**
- JavaScript (ES6+)
- **Fetch API**

---

## Prerequisites

Before you start, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** (package manager)

---

## Installation

1. **Clone the repository:**

   ````bash
   git clone https://github.com/Karen1501/challenge-nextjs
   cd challenge-next-js
   ```

   ````

2. **Install dependencies:**

   ````bash
   npm install
   # o
   yarn install
   ```

   ````

3. **Run the development server:** \*\* ```bash

   ````bash
   npm run dev
   # o
   yarn dev
   ```

   ````

4. **Open in browser:**
   Go to [http://localhost:3000](http://localhost:3000) to view the application in your browser.

---

## Project Structure

```
/src
  /components
    Card.js # Component to display combined data.
    Layout.js # Main page structure.
  /hooks
    useFetchCats.js # Custom hook to fetch data from “Cat Facts”.
    useFetchUsers.js # Custom hook to fetch data from users.
  /pages
    index.js # Main page.
  /styles
    globals.css # Tailwind CSS configuration and customization.
```

---

## Available scripts

- npm run dev`\*\*: Starts the development server.
- npm run build`\*\*: Generates the production version.
- **`npm run start`**: Starts the server with the production version.
- npm run lint`\*\*: Runs the linter to verify the code.

---

## Main dependencies

- **react**: ^18.x
- **next**: ^13.x
- **@tanstack/react-query**: ^4.x
- tailwindcss\*\*: ^3.x

---

## Tailwind CSS configuration

1. Make sure the `tailwind.config.js` file is configured correctly:
   ````js
   module.exports = {
     content: [“./src/**/*.{js,jsx,ts,tsx}”],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```
   ````
2. Import Tailwind CSS into `globals.css`:
   ````css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
   ````

---

## Additional Resources

- React Query Documentation\*\*: [https://react-query.tanstack.com/](https://react-query.tanstack.com/)
- Next.js Documentation\*\*: [https://nextjs.org/docs](https://nextjs.org/docs)
- Tailwind CSS Documentation\*\*: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

---

## Contribute

1. Make a fork of the repository.
2. Create a new branch:
   ````bash
   git checkout -b feature/new-functionality
   ```
   ````
3. Make your changes and commit:
   ````bash
   git commit -m “Added new feature”.
   ```
   ````
4. Upload your changes:
   ````bash
   git push origin origin feature/new-functionality
   ```
   ````
5. Open a Pull Request.

---

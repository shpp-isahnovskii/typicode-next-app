# Typocode APP

## Overview

This application is designed to display a list of posts fetched from a real API and allow users to interact with the posts. Users can mark posts as favorites, navigate to individual post pages, and view comments related to each post.

## Features

### Posts Page

- **Fetch and Display Posts**: The app fetches real data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) and displays it.
- **Static Page**: The posts page is static and does not require server-side rendering.
- **Metadata**: The page includes metadata for better SEO.
- **Favorite Posts**: Users can add and remove posts from their favorites. The favorite status is updated across the app.
- **Navigation**: Clicking on a post redirects the user to the post's detail page.

### (Single) Post Page

- **Fetch and Display Post**: The app fetches data for a single post from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts/:id).
- **Server-Side Rendering**: Post pages are generated on the server side.
- **Favorite Posts**: Users can add or remove the post from their favorites on this page as well.

### Comments

- **Fetch and Display Comments**: The app fetches comments for each post from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts/:id/comments) and displays them on the post page.
- **User Avatars**: Each Comments displays an avatar with the first letters of the user's first and second names. The avatar's circle color is random for each user.

## Technical Requirements

- **Next.js**: Used for server-side rendering and static site generation.
- **State Management**: Redux/toolkit is used for managing the application's state.
- **TypeScript**: The app is written in TypeScript for static type checking.
- **Linting**: ESLint is used to maintain code quality and consistency.
- **Styling**: Tailwind CSS or Styled Components are used for styling the app.

## Installation and Setup

1. **Clone the Repository**
```bash
   git clone https://github.com/your-repo/my-app.git
   cd my-app
```

2. **Run the Development Server**
```bash
   npm install
```

3. **Run the Development Server**
```bash
   npm run dev
```

# Animatefolio

This is a fully responsive, animated personal portfolio website for a Java Full Stack Developer, built with Next.js, Tailwind CSS, and Framer Motion.

## Getting Startedadd

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Deploying to Firebase Hosting

This project is configured for deployment to Firebase Hosting.

### Prerequisites

1.  You must have the [Firebase CLI](https://firebase.google.com/docs/cli) installed.
2.  You must have a Firebase project. If you don't have one, create one at the [Firebase Console](https://console.firebase.google.com/).

### Deployment Steps

1.  **Login to Firebase:**
    ```bash
    firebase login
    ```

2.  **Initialize Firebase in your project directory (if you haven't already):**
    
    If this is your first time deploying from this local project directory, run:
    ```bash
    firebase init hosting
    ```
    - When prompted, select 'Use an existing project' and choose your Firebase project.
    - It will detect that you have a Next.js application and ask if you want to use the web frameworks support. Say **yes**. This will automatically configure the necessary backend infrastructure (like Cloud Functions) for you.
    - This will update the `firebase.json` file with the correct configuration.

3.  **Deploy:**
    
    After initialization, or for any subsequent deployments, simply run:
    ```bash
    firebase deploy --only hosting
    ```

This command will build your Next.js application and deploy it to Firebase Hosting, along with any required backend functions.

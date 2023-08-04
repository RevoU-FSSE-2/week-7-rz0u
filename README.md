# Week 7 Intermediate Assignment

## Introduction
This is a super simple financial tracker web application built with TypeScript. The app allows users to track their expenses and income to get a clear overview of their financial situation.

## Features
- Add new income and expense entries.
- View a list of all transactions with details such as income/outcome source, details, and amount.

## Technologies Used
- TypeScript
- HTML
- CSS

## Installation and Local Development
1. Clone the repository from GitHub: `git clone https://github.com/your-username/financial-tracker.git`
2. Navigate to the project directory: `cd financial-tracker`
3. Install dependencies: `npm install`
4. Start the development server: `npm run start`
5. Right click on the file .html file and select "Open with Live-Server" to test the app locally

## Deployment to Netlify
1. Sign in to [Netlify](https://www.netlify.com/) or create a new account.
2. Create a new site from Git and link it to your GitHub repository containing the financial tracker app.
3. Configure the build settings in Netlify to use `npm run build` as the build command and `build` as the publish directory.
4. Deploy the site.

## Live Demo
You can access the live demo of the Financial Tracker Web App [here](https://your-netlify-app-url.netlify.app).

## Project Structure
The project has the following file structure:
```
financial-tracker/
├── index.html
├── styles.css
├── dest
|    └── app.js // Converted .ts file for production
└── src 
     └── app.ts // Main TypeScript file for the app logic
```


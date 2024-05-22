# STP_Crime_Database

## Description
The STP_Crime_Database project is a comprehensive solution for managing and displaying crime data through a RESTful API and a modern front-end interface. Built with Node.js and Express on the back-end and Vue.js on the front-end, this project aims to provide an efficient and user-friendly way to handle crime data. The application includes full CRUD (Create, Read, Update, Delete) operations, making it a robust platform for crime data management and analysis.

## Features
- RESTful API with CRUD operations
- Responsive front-end interface with Vue.js
- Modular and scalable project structure
- Environment configuration for development and production

## Prerequisites
- Node.js
- npm (Node Package Manager)

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/gcabdu/STP_Crime_Database.git

2. **Navigate to Project Directory:**
   cd STP_Crime_Database
   
3. **Install Dependencies**
   npm install
## Running Application

1. **Start Dev Server**
   ```sh
   npm run dev

2. **Run Server:**
   npm run

## Project Structure

- `dynamicServer/`: Contains the Node.js server setup.
  - `node_modules/`: Node.js modules.
  - `public/`: Public static files (CSS, HTML).
  - `server.mjs`: Main server file.
  
- `src/`: Source code for the front-end application.
  - `components/`: Vue.js components.
    - `WeatherRow.vue`: Vue component for displaying weather data.
  - `App.vue`: Main Vue.js application component.
  - `main.js`: Entry point for the Vue.js application.
  - `vite.config.js`: Configuration file for Vite.

- `package.json`: Configuration file for npm scripts and dependencies.
- `package-lock.json`: Lock file for npm dependencies.

## API Endpoints

- **GET /api/crimes**: Retrieve all crime data.
- **POST /api/crimes**: Add a new crime entry.
- **PUT /api/crimes/:id**: Update a crime entry.
- **DELETE /api/crimes/:id**: Delete a crime entry.

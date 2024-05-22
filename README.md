# STP_Crime_Database

## Description
The STP_Crime_Database project is about managing and demonstrating crime data with an amazing RESTful API and an advanced front-end. We developed our users with Node.js and Express on the predominantly back-end and Vue.js on the front-end. This project was intended to make working with crime data super easy and highly efficient. Using the CRUD methods, it makes it easy for law enforcement and researchers to manage and evaluate crime reports, incidences, and patterns. Additionally, this project ensures our tool under real-time updates and shows different visualization to assist us to respond to an incident, prevent crime. It is thus our primary aim to build efficient tools to provide evidence-based crime analysis and develop strategies to respond to and prevent criminologically.

### Domain-Specific Overview
First, crime data management helps in understanding where and when crimes happen, and what types of crimes are more frequent. Then, by collecting and analyzing this data, we find patterns; for example, certain areas may be more likely to have a lot of crime or more crimes at night. This information is essential for law enforcement to provide the necessary resources more adequately and to come up with strategies to reduce cases. By using our project, users are able to see the data trends in real-time, which makes it easier to take a glance and make a judgment.


## Features

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

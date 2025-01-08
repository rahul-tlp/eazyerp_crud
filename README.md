# Node.js CRUD Application with PostgreSQL and PM2 and build

A robust, scalable Node.js application that implements CRUD operations with PostgreSQL as the database, PM2 for process management, and Babel for transpiling modern JavaScript code into a build version.

---

## Key Features

- **Efficient Data Management**: Perform Create, Read, Update, and Delete (CRUD) operations.
- **PostgreSQL Integration**: Leverages PostgreSQL with parameterized queries for secure and efficient data handling.
- **Process Management**: PM2 for clustering, process monitoring, and zero-downtime deployments.
- **Build Management**: Babel is used to transpile ES6+ code into production-ready JavaScript.
- **Version Control**: Semantic versioning of builds for streamlined production deployments.
- **Authentication**: JWT is used to create token on basis of user credentials and also one of its method is used to verify token coming in the headers of every request so that after authentication request proceed to controller.


---

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js**: Version 16 or later
- **PostgreSQL**: Version 13 or later
- **PM2**: For process management (`npm install -g pm2`)
- **Git**: For version control
- **Babel CLI**: (`npm install --save-dev @babel/core @babel/cli @babel/preset-env`)


---

## Project Setup

### Clone the Repository
```bash
git clone https://github.com/rahul-tlp/eazyerp_crud.git
cd eazyerp_crud
 ```

 ## Install Dependencies
 npm install

## Configure Environment Variables

# Server Configuration
NODE_ENV=development
PORT=3000

# PostgreSQL Database Configuration
DATABASE_USER=your_db_user
DATABASE_PASSWORD=your_db_password
DATABASE_NAME=your_db_name
DATABASE_HOST=localhost
DATABASE_PORT=5432

# Authentication Configuration
JWT_SECRET=your_secret_key
JWT_EXP=10m


### Running the Application

## To make Build
npm run build

## To run build using pm2 
pm2 start

## To run application in development environmet
npm start

### pm2 command

## To reload application in prod environment
pm2 reload all

## To check status of application in prod environment
 pm2 status

 ## To check logs of application in prod environment
pm2 logs

## To monitor application in prod environment
pm2 monit

## To stop application in prod environment
pm2 kill

## To restart application 
pm2 restart ecosystem.config.js 

## To enable cluster mode 
uncomment the commented part in eccosystem.config.js
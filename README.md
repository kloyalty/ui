Store Frontend - Angular Application
A modern e-commerce frontend application built with Angular, featuring user authentication, product management, and a responsive UI.
🚀 Live Demo
Production URL: https://store-frontend-jet.vercel.app
📋 Table of Contents

Features
Prerequisites
Installation
Configuration
Running the Application
Building for Production
Deployment
Project Structure
API Integration
Troubleshooting

✨ Features

User Authentication

User registration with form validation
Secure login with JWT tokens
Protected routes with auth guards


Product Management

Browse all products
View user's own products
Add new products
Update existing products
Delete products


Responsive Design

Mobile-friendly interface
Modern UI with Tailwind CSS/Bootstrap
Intuitive navigation



🔧 Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v18 or higher) - Download
npm (comes with Node.js)
Angular CLI (v17 or higher)

bash# Check versions
node --version
npm --version
ng version
📦 Installation

Clone the repository

bashcd store-frontend

Install dependencies

bashnpm install

Install Angular CLI globally (if not already installed)

bashnpm install -g @angular/cli
⚙️ Configuration
Backend API Configuration
Update the backend API URLs in the service files:
File: src/app/services/auth.service.ts
typescriptprivate apiUrl = 'https://your-backend-url.ngrok-free.dev/auth';
File: src/app/services/product.service.ts
typescriptprivate apiUrl = 'https://your-backend-url.ngrok-free.dev/products';
Environment Files (Optional)
For better configuration management, you can use environment files:
File: src/environments/environment.ts (Development)
typescriptexport const environment = {
  production: false,
  apiUrl: 'http://localhost:8080'
};
File: src/environments/environment.prod.ts (Production)
typescriptexport const environment = {
  production: true,
  apiUrl: 'https://your-backend-url.ngrok-free.dev'
};
🏃 Running the Application
Development Server
Start the development server:
bashng serve
The application will be available at: http://localhost:4200
Development Server with Custom Port
bashng serve --port 4300
Open Browser Automatically
bashng serve --open
🏗️ Building for Production
Build the project for production deployment:
bashng build --configuration production
The build artifacts will be stored in the dist/ directory.
Build Output Location
Check your angular.json file for the exact output path:
json"outputPath": "dist/store-frontend/browser"
🚀 Deployment
Deploy to Vercel

Install Vercel CLI

bashnpm install -g vercel

Login to Vercel

bashvercel login

Deploy to Production

bashvercel --prod
Configuration prompts:

Build Command: ng build --configuration production
Output Directory: dist/store-frontend/browser (check your angular.json)
Development Command: ng serve

Deploy to Netlify

Build the project

bashng build --configuration production

Deploy using Netlify CLI

bashnpm install -g netlify-cli
netlify deploy --prod --dir=dist/store-frontend/browser
Deploy to GitHub Pages
bashng add angular-cli-ghpages
ng deploy --base-href=/your-repo-name/
📁 Project Structure
store-frontend/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   ├── product-list/
│   │   │   ├── product-form/
│   │   │   └── navbar/
│   │   ├── services/
│   │   │   ├── auth.service.ts
│   │   │   └── product.service.ts
│   │   ├── guards/
│   │   │   └── auth.guard.ts
│   │   ├── models/
│   │   │   ├── user.model.ts
│   │   │   └── product.model.ts
│   │   └── app.routes.ts
│   ├── assets/
│   ├── environments/
│   └── index.html
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
🔌 API Integration
Authentication Endpoints

POST /auth/register - Register new user
POST /auth/login - Login user (returns JWT token)

Product Endpoints

GET /products - Get all products
GET /products/my-products - Get user's products (requires auth)
POST /products - Create new product (requires auth)
PUT /products/{id} - Update product (requires auth)
DELETE /products/{id} - Delete product (requires auth)

Request Headers
All authenticated requests include:
typescriptheaders: {
  'Authorization': 'Bearer <jwt-token>',
  'Content-Type': 'application/json'
}
🐛 Troubleshooting
CORS Errors
If you encounter CORS errors, ensure your Spring Boot backend has proper CORS configuration:
javaconfiguration.setAllowedOriginPatterns(List.of("*"));
configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
configuration.setAllowedHeaders(List.of("*"));
configuration.setAllowCredentials(true);
401 Unauthorized on Products Page

Ensure you're logged in first
Check that JWT token is being stored (Browser DevTools → Application → Local Storage)
Verify the token is being sent in request headers (Network tab)

Build Errors
Clear cache and reinstall dependencies:
bashrm -rf node_modules package-lock.json
npm install
Port Already in Use
If port 4200 is busy:
bashng serve --port 4300
Or kill the process:
bash# Windows
netstat -ano | findstr :4200
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:4200 | xargs kill -9
📚 Available Scripts
bash# Development server
npm start

# Build for production
npm run build

# Run unit tests
npm test

# Run end-to-end tests
npm run e2e

# Lint the code
npm run lint
🛠️ Technologies Used

Angular 17+ - Frontend framework
TypeScript - Programming language
RxJS - Reactive programming
Angular Router - Navigation
HttpClient - API communication
Tailwind CSS / Bootstrap - Styling

📝 Notes

The application uses JWT tokens for authentication
Tokens are stored in browser's localStorage
All product operations require authentication
Make sure the backend server is running before starting the frontend

🤝 Contributing

Fork the repository
Create a feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add some amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request

📄 License
This project is licensed under the MIT License.
👤 Author
Caleb 

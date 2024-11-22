// import express from 'express';
// import Hello from "./Hello.js"
// import Lab5 from "./Lab5/index.js";
// import cors from "cors";
// import session from "express-session";
// import "dotenv/config";
// import CourseRoutes from "./Kanbas/Courses/routes.js";
// import UserRoutes from "./Kanbas/Users/routes.js";
// import ModuleRoutes from "./Kanbas/Modules/routes.js";
// import AssignmentRoutes from './Kanbas/Assignments/routes.js';
// import PathParameters from "./Lab5/PathParameters.js";
// import QueryParameters from "./Lab5/QueryParameters.js";
// import WorkingWithObjects from "./Lab5/WorkingWithObjects.js";
// import WorkingWithArrays from "./Lab5/WorkingWithArrays.js";

// const app = express()
// app.use(cors({
//     credentials: true,
//     origin: process.env.NETLIFY_URL || "http://localhost:3000",
// }));

// const sessionOptions = {
//     secret: process.env.SESSION_SECRET || "kanbas",
//     resave: false,
//     saveUninitialized: false,
//   };
//   if (process.env.NODE_ENV !== "development") {
//     sessionOptions.proxy = true;
//     sessionOptions.cookie = {
//       sameSite: "none",
//       secure: true,
//       domain: process.env.NODE_SERVER_DOMAIN,
//     };
//   }
//   app.use(session(sessionOptions));
  
//   app.use(express.json());

//   // Middleware for logging incoming requests and session data
// app.use((req, res, next) => {
//   console.log("Request URL:", req.method, req.url); // Log request method and URL
//   console.log("Session Data:", req.session); // Log session data for debugging
//   next(); // Pass control to the next middleware
// });

  
// UserRoutes(app);
// CourseRoutes(app);
// ModuleRoutes(app);
// AssignmentRoutes(app);
// Lab5(app);
// Hello(app);
// PathParameters(app);
// QueryParameters(app);
// WorkingWithObjects(app);
// WorkingWithArrays(app);

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

import express from 'express';
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import session from "express-session";
import "dotenv/config";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import UserRoutes from "./Kanbas/Users/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from './Kanbas/Assignments/routes.js';
import PathParameters from "./Lab5/PathParameters.js";
import QueryParameters from "./Lab5/QueryParameters.js";
import WorkingWithObjects from "./Lab5/WorkingWithObjects.js";
import WorkingWithArrays from "./Lab5/WorkingWithArrays.js";

const app = express();

// CORS Configuration: Allow requests from specific origin with credentials (cookies)
app.use(cors({
  credentials: true,
  origin: process.env.NETLIFY_URL || "http://localhost:3000", // Handle different environments
}));

// Session configuration
const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kanbas", // Use environment variable for security
  resave: false,
  saveUninitialized: false,
};

if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none", // Important for cross-origin requests with cookies
    secure: true, // Secure cookies in production (HTTPS)
    domain: process.env.NODE_SERVER_DOMAIN, // Use correct domain in production
  };
}

app.use(session(sessionOptions)); // Set up session middleware

// Middleware for logging incoming requests and session data
app.use((req, res, next) => {
  console.log("Request Method:", req.method);  // Log method (GET, POST, etc.)
  console.log("Request URL:", req.url); // Log request URL
  console.log("Session Data:", req.session); // Log session data for debugging (remove in prod)
  next(); // Pass control to the next middleware
});

// Use express.json() to handle JSON request bodies
app.use(express.json());

// Set up routes after session middleware
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
Lab5(app);
Hello(app);
PathParameters(app);
QueryParameters(app);
WorkingWithObjects(app);
WorkingWithArrays(app);

// Set up server to listen on a specific port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

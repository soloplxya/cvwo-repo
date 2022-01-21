// Constants.js
const PRODUCTION = {
    url: {
     API_URL: "https://many-todos-backend.herokuapp.com/", 
     API_TAGS_URL: "https://many-todos-backend.herokuapp.com/tags",
     API_AUTH_URL: "https://many-todos-backend.herokuapp.com/logged_in",
     API_TASKS_URL: "https://many-todos-backend.herokuapp.com/tasks", 
     API_REGISTRATION_URL: "https://many-todos-backend.herokuapp.com/registrations",
     API_SESSIONS_URL: "https://many-todos-backend.herokuapp.com/sessions",
    }
};

const DEVELOPMENT = {
    url: {
     API_URL: "http://localhost:3001",
     API_TAGS_URL: "http://localhost:3001/tags",
     API_AUTH_URL: "http://localhost:3001/logged_in",
     API_TASKS_URL: "http://localhost:3001/tasks", 
     API_REGISTRATION_URL: "http://localhost:3001/registrations",
     API_SESSIONS_URL: "http://localhost:3001/sessions",
    }
};
   

export const config = !process.env.NODE_ENV || (process.env.NODE_ENV === "development") 
    ? PRODUCTION
    : PRODUCTION;
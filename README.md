# Services Notes Server

This project is a server-side application for managing customer notes in an office environment.

## Installation

To use this application, you need to have [Node.js](https://nodejs.org) installed on your system. Clone the repository and navigate to the project directory. Then, run the following command to install the dependencies:

npm install

## Usage

To start the server, you can use either of the following commands:

npm start
or

npm run dev

The server will start running on the specified port, and you can access it through your web browser or make API requests using tools like Postman or curl.

## Dependencies

This project has the following dependencies:

bcrypt: ^5.1.0
cookie-parser: ^1.4.6
cors: ^2.8.5
date-fns: ^2.30.0
dotenv: ^16.0.3
express: ^4.18.2
express-async-handler: ^1.2.0
mongoose: ^7.1.1
mongoose-sequence: ^5.3.1
uuid: ^9.0.0

## Project Structure

The project structure is as follows:

- server.js: The main entry point of the application.
- middleware/logger.js: Middleware for logging HTTP requests.
- middleware/errors.js: Error handling middleware.
- config/corsOptions.js: Configuration options for CORS (Cross-Origin Resource Sharing).
- routes/root.js: Root router for handling root-level requests.
- routes/userRoutes.js: Router for handling user-related requests.
- routes/noteRoutes.js: Router for handling note-related requests.
- middleware/throw404.js: Middleware for throwing a 404 error when a route is not found.
- public/: Directory for serving static files.

## License

This project is private and the license information is not available.

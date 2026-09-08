Node.js Express Notes API

A simple REST API built with Node.js and Express.js for working with notes.

Technologies
Node.js
Express.js
CORS
dotenv
pino-http
pino-pretty
Installation

Clone the repository and install dependencies:

npm install
Environment Variables

Create a .env file in the root directory:

PORT=3000

If PORT is not specified, the server will use port 3000 by default.

Running the Project

Start the server:

npm start

Start the server in development mode:

npm run dev
API Endpoints
Get all notes
GET /notes

Response:

{
"message": "Retrieved all notes"
}
Get a note by ID
GET /notes/:noteId

Example:

GET /notes/123

Response:

{
"message": "Retrieved note with ID: 123"
}
Test server error
GET /test-error

Returns a 500 status code with:

{
"message": "Simulated server error"
}
Unknown route

Any undefined route returns a 404 status code:

{
"message": "Route not found"
}
Deployment

The project is deployed on Render.

Live API:

https://nodejs-hw-v8zk.onrender.com

Branch

The homework is implemented on the 01-express branch.

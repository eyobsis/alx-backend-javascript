This is a project description for a Node.js project that involves creating a series of small HTTP servers using Node.js and Express.js. The project is divided into 8 tasks, each with its own set of requirements and objectives.

Here is a brief summary of each task:

Task 0: Executing basic JavaScript with Node JS

Create a function displayMessage that prints a string argument to STDOUT.
Use the require function to import the displayMessage function in a separate file.
Task 1: Using Process stdin

Create a program that prompts the user to input their name.
Display a welcome message and then display the user's input.
When the user ends the program, display a closing message.
Task 2: Reading a file synchronously with Node JS

Create a function countStudents that reads a CSV file synchronously.
If the file is not available, throw an error.
If the file is available, log the number of students and the list of students in each field.
Task 3: Reading a file asynchronously with Node JS

Create a function countStudents that reads a CSV file asynchronously.
Return a Promise that resolves with the number of students and the list of students in each field.
If the file is not available, reject the Promise with an error.
Task 4: Create a small HTTP server using Node's HTTP module

Create a small HTTP server using the http module.
Listen on port 1245.
Display "Hello Holberton School!" in the page body for any endpoint.
Task 5: Create a more complex HTTP server using Node's HTTP module

Create a small HTTP server using the http module.
Listen on port 1245.
Display "Hello Holberton School!" in the page body for the root endpoint.
Display the list of students for the /students endpoint.
Task 6: Create a small HTTP server using Express

Create a small HTTP server using Express.
Listen on port 1245.
Display "Hello Holberton School!" in the page body for the root endpoint.
Task 7: Create a more complex HTTP server using Express

Create a small HTTP server using Express.
Listen on port 1245.
Display "Hello Holberton School!" in the page body for the root endpoint.
Display the list of students for the /students endpoint.
Task 8: Organize a complex HTTP server using Express

Create a full server with a directory structure.
Use ES6 and Babel to write the server.
Create controllers, routes, and a server file.
Use the readDatabase function to read the CSV file.
Display the list of students for the /students endpoint.
Display the list of students for a specific major for the /students/:major endpoint.
The project also includes a set of provided files, including a database.csv file, a package.json file, and several configuration files. The project must be completed using a specific set of tools and editors, and the code must pass a set of tests using Jest and ESLint.

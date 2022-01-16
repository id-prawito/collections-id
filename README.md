<div align="center">
  <img alt="Logo" src="https://user-images.githubusercontent.com/71351196/149660651-a76c6d7d-a14f-482c-aa94-cf78283cd4a5.png" width="100" />
</div>
<h1 align="center">
  Collections-id | MERN
</h1>
<p align="center">
  This project <a href="https://limitless-dawn-39905.herokuapp.com/" target="_blank">Collections-id/</a> build with <a href="https://reactjs.org" target="_blank">React Js,</a><a href="https://www.mongodb.com" target="_blank"> Monggo DB,</a><a href="https://nodejs.org" target="_blank"> Node Js,</a><a href="https://expressjs.com" target="_blank"> Express Js,</a> and hosted with <a href="https://www.heroku.com" target="_blank">Heroku.</a>
</p>

![project](https://user-images.githubusercontent.com/71351196/149660621-6f3443d0-da51-4ce2-8035-4e7936093c79.PNG)

## 🛠 How To Use, Installation & Set Up

From your command line, first clone collections-id:

```bash
# Clone the repository
$ git clone https://github.com/id-prawito/collections-id.git

# Move into the repository
$ cd collections-id

# Remove the current origin repository
$ git remote remove origin
```

After that, you can install the dependencies either using NPM or Yarn.

Using NPM: Simply run the below commands. Add your MONGO_URI to the default.json file in server.js.

```bash
# Install dependencies for server
$ npm install

# Install dependencies for client
$ npm run client-install

# Run the client & server with concurrently
$ npm run dev

# Run the Express server only
$ npm run server

# Run the React client only
$ npm run client

# Server runs on http://localhost:9000 and client on http://localhost:9000
```

Building and Running for Production in Heroku.

```bash
# Download and Install Heroku CLI
# If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.
$ heroku login

# Create New Git repository
# Initialize a git repository in a new or existing directory
$ git init
$ heroku git:remote -a {name_project_after_run_heroku_login}

# Deploy your application
# Commit your code to the repository and deploy it to Heroku using Git
$ git add .
$ git commit -am "version 1.0"
$ git push heroku master

# And your project ready to use, if don't found error.
```
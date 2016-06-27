
1) - Install Node.js :

// visit http://nodejs.org and click the download button.
// Run the installer. 
// That's it, you have installed Node.js and NPM – Node Package Manager.

 - Open a Node.js command prompt
 - cd to the directory in which you wish to keep your test apps, eg. C:\nodejs

2) - Install Express : 

//Express, which is a framework that takes Node from a barebones application and turns it into something that behaves more like the web servers

 C:\nodejs> npm install -g express

//This installs some core Express functionality right into our Node installation.
//This will install the Express command line tool, which will aid in creating a basic web application. 

 C:\nodejs> npm install -g express-generator
 
3) - Steps to create an empty Express project:

 C:\nodejs> mkdir myProject-test

 C:\nodejs> cd myProject-test

 C:\nodejs\myProject-test> express

 C:\nodejs\myProject-test> npm install 
 
//These commands will create an empty Express project in the directory we just created myProject-test. We then run " C:\nodejs\myProject-test>npm install " to get all the dependencies that are needed to run the app. To test the empty application, run " C:\nodejs\myProject-test>node app " then navigate your browser to http://yourDropletIp-or-domainName:3000. You should get a simple welcome message saying: "Welcome to Express".
//If you see the welcome message then you have a basic express application ready and running!
//Ctrl+c - To quit the last node app.This is important. 

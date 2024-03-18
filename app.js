const http = require("http"); //Importing the module 'http' and assigning it to the constant variable http
const fs = require("fs") //Importing the module "fs" and assigning it to the constant variable fs
const port = 3000; //Setting up a port number - this will be the port number the server will be listening to for incoming http requests

const server = http.createServer(function (req, res) { //Creating a server with a callback function as a parameter and assigning it to the constant server.
    res.writeHead(200, { "Content-Type": "text/html" }) // using the res variable to access the writeHead function. This function basically lets the server know what type of file format it's going to hosting - in this case, HTML
    fs.readFile("index.html", function (error, data) { //attempts to read the file in index.html 
        if (error) { //Checks to see if there's an error
            res.writeHead(404); //if there is it'll set the response status to 404 indicating (file not found)
            res.write("File not found");//Same as above
        }
        else {
            res.write(data)//Else it will write the content of the index.html file
        }
        res.end()//Ends the response.
    });
});

server.listen(port, function (error){//Makes the server listen to the port and executes a callback function once the server starts listening
    if (error)//if theres an error encountered
    {
        console.log("Something went wrong", error);//Log an error message
    }
    else {
        console.log("Server is listening on port " + port);//Else display that the operation has been successful and provide a message accordingly.
    }
})

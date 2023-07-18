const http = require('http');
const url = require('url');
const fs = require('fs')
const filePath = 'data.json'
const server = http.createServer((req, res) => {
  // Parse the request URL
  const parsedUrl = url.parse(req.url, true);

  

  // Route the request to the appropriate handler based on the path
  if (parsedUrl.pathname === '/register') {
    register (req, res);
  } else if (parsedUrl.pathname === '/login') {
    login(req, res);
  } else {
    // Return a 404 Not Found response for unrecognized paths
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Not Found');
  }
});

// Start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Handler for register API 1
function register(req, res) {
  // Implement the logic for API 1 here
  const data = {
    message: 'Hello, World!',
    timestamp: Date.now()
   };

   let dataSet = []
    dataSet.push(data)
  const jsonData = JSON.stringify(dataSet);

  fs.writeFile(filePath, jsonData, (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('data saved successfully')
    }
  })

  console.log("hit")
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(jsonData)
  res.end();
}

// Handler for login API 2
function login(req, res) {
  // Implement the logic for API 2 here
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('API 2 response');
}

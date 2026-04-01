const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    const logString = `${new Date().toISOString()} | IP: ${req.ip} | Browser: ${req.headers['user-agent']}\n`;
    console.log("New Request Detected:", logString);
    fs.appendFileSync('requests.log', logString);
    next();
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    const destination = 'https://sites.google.com/site/populardoodlegames/pac-man?authuser=0'; 
    
    res.redirect(destination);
});
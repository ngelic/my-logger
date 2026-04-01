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

app.get('/', (req, res) => {
    res.send('<h1>Request Logged!</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
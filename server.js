const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer();

// Serve a redirect to a public test file for download speed
app.get('/testfile', (req, res) => {
    res.redirect('10MB-TESTFILE.ORG.pdf'); // Redirect to a public 1MB test file
});

// Handle upload requests
app.post('/upload', upload.single('file'), (req, res) => {
    res.send('Upload complete'); // Response for successful upload
});

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Ensure this line points to your index.html
});

// Serve static files like speedtest.js
app.use(express.static(__dirname));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Contact.html'); // send HTML file on GET request
});

app.post('/submit-form', (req, res) => {
    const {fullname, email, subject} = req.body; // access form data
    // Add validation logic here
    console.log("Name:", fullname);
    console.log("Email:", email);
    console.log("Subject:", subject);
    res.send(`Submitted`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});


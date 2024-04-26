const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

// Define a basic route
app.get('/', (req, res) => {
    res.send('Hello from Express.js!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
});

const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const app = express();
const PORT = process.env.PORT || 3001;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start the server on the specified port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

/**
 * Start the server on the specified port.
 * @function
 * @name listen
 * @param {number} port - The port number to listen on.
 * @param {Function} callback - The callback function to execute when the server starts listening.
 * @returns {void}
 */
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

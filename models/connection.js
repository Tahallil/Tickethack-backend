const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://vanderstappendev:rVUGqPIk5AhvoDra@cluster0.wwgcw.mongodb.net/tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
 .then(() => console.log('Database connected'))
 .catch(error => console.error(error));
import express from 'express';
import dbConfig from './config/db';

const app = express();
/*
* DATABASE
*/
dbConfig();

const PORT = process.env.PORT || 5000;

app.listen(PORT, err => {
    if (err) {
        console.error(err);
    } else {
        console.log(`App Listen to port: ${PORT}`);
    }
});

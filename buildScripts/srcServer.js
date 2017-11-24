import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev.js';

/* eslint-disable no-console */
const port = 4200;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, // Do not display special info
    oublicPath: config.output.publicPath // Public path defined in webpack config
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', (req, res) => {
    // Dummy data
    res.json([
        { "id": 1, "name": "Bob", "surname": "Marley" },
        { "id": 2, "name": "Al", "surname": "Capone" }
    ]);
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
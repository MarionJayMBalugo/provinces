const express = require('express');
const app = express();
const fs = require('fs');
const adding = require('./add');
const path = require('path');

app.listen('8080', console.log('listening to port 8080'));
app.set('view engine', 'pug');

app.use("/public", express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    console.log("counted")
    fs.readFile('counter.txt', function(err, data) {
        dic = JSON.parse(data);
        console.log(dic);
        var cnt = dic + 1;

        fs.writeFile('counter.txt', cnt, (err) => {
            if (err) throw err;
            console.log('Done!');
            next();
        });
    });

});
app.get('/province/:provinceName', (req, res) => {
    fs.readFile('./province/' + req.params.provinceName + '.json', (e, data) => {
        if (e) {
            res.sendStatus(404);
        }

        var dats = JSON.parse(data);

        res.render('index', { h: req.params.provinceName, reg: dats.group, img1: dats.img_1, img2: dats.img_2, img3: dats.img_3, population: dats.population, x: dats.delicacies, his: dats.hist, aver: dats.rate, reque: 1 });
    });

});

app.get('/rate', (req, res) => {
    res.render('rate');

});

app.get('*', (req, res) => {
    res.sendStatus(404);
});

app.post('/province/*', function(req, res) {
    console.log(req.path.split('/')[2]);
    adding.addFile(req, res);
})
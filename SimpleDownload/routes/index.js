var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.post('/down', function (req, res) {
    res.attachment('name.txt');
    res.send(req.param("name"));
});

module.exports = router;
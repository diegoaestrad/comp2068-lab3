var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Family Home Page' });
});

router.get('/oscar', (req, res, next)=> {
    res.render('oscar', { title: 'Oscar Home Page Index' });
});

router.get('/marina', (req, res, next) => {
    res.render('marina', { title: 'Marina Home Page Index' });
});

router.get('/diego', (req, res, next) => {
    res.render('diego', { title: 'Diego Home Page Index' });
});

module.exports = router;

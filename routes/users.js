var express = require('express');
var dbutil = require('../util/db');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  var conn = dbutil();
  conn.query('select * from tbuser',
    function(err,rows,fields){
        console.log(rows);
        res.render('users',{data:rows});
        //res.send('mudou qq coisa');
    }
  );
});

router.get('/edit/:id', function(req, res, next) {
  console.log(req.params);
  res.send('Chegou aqui:' + req.params.id);
});

module.exports = router;

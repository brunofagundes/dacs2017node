var mysql = require('mysql');
function dbcomm(){
	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'bob',
	  password : 'bob',
	  database : 'nodedacs2017'
	});

	connection.connect(function(err){
		if(err) {
		    console.log("Error connecting database ... nn");    
		}
	});
	return connection;
}
var conn = dbcomm();
conn.query('select id,login,nome,sobrenome,email,senha from tbuser',
    function(err,rows,fields){
        console.log(rows);
        res.render('contact',{data:rows});
    }
);
var conn = dbcomm();
    conn.query('insert into tbuser(login,nome,sobrenome,email,senha) values(?,?,?,?,?)' ,[req.body.login, req.body.nome, req.body.sobrenome, req.body.email, req.body.senha], function(err,rows,fields){
		if(err)
		console.log("Deu não...");
	}   
);
   
module.exports = dbcomm;    
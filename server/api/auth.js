token = Tokens.findOne({});

if (!token) {
 	initLogin();
 	console.log('initializing...');

} else {
	loginWithToken(token);
	console.log('logging in with Token...');
}

function initLogin() {

	Conn.call('login', {
			user: {
	    		email: 'admin@mail.com'
	  		},
	      	password: 'abc123'
    	},

	    function (err, result) {
	    	if (err) {
	        	console.log('ERROR logging in:');
	        	console.log(err);
	        	return;
	      	}
	      
	      	Tokens.upsert({userid: result.id }, {$set: result});
	});
}

function loginWithToken(token) {
	Conn.call('login', {
    		'resume': token.token
    	},

	    function (err, res) {
	    	if (err) {
	        	Tokens.remove();
	        	console.log('error loggin in with token');
	        	console.log(err);

	        	// if the token didn't work, try logging in as init
	        	initLogin();
	        	return;
	      	}
	      	
	      	Tokens.upsert({userid: res.id}, {$set: res});
    });
}
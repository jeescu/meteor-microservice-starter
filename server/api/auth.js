console.log('initializing...');  
/**
 * This should be called when remote service has someone
 * to try to login
 */
initLogin('admin@mail.com', 'abc123');

/**
 * Initialize login
 * 
 * Login using remote credential account
 * to access this service
 * 
 * @param {any} email
 * @param {any} password
 */
function initLogin(email, password) {
  // Using the remote service to login
  Conn.call('login', {
    user: { email: email },
    password: password
  }, function (err, result) {
    if (err) {
      console.log('ERROR logging in email:', email);
      console.log(err);
      return;
    }

    // saving tokens by user id
    Tokens.upsert({ userid: result.id }, { $set: result });
  });
}

function loginWithToken(token) {
  Conn.call('login', {
    'resume': token.token
  }, function (err, res) {
    if (err) {
      console.log('Error loggin in with token');
      console.log(err);
      return;
    }

    // saving tokens by user id
    Tokens.upsert({ userid: res.id }, { $set: res });
  });
}
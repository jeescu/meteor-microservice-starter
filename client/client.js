
/**
 * Subscribe collection from client side
 * 
 * Use subscribe method when client needs
 * Listen changes to remote collection
 */
Conn.subscribe('users', function () {
  // Do something when succesfully subscribed to collection
  // An Example when syncing remote collection to own collection
  RemoteUsers.find().observeChanges({
    added: function (id, row) {
      console.log("Syncing remote users");
      Users.insert({
        username: row.username,
        email: row.emails[0].address
      }).save();
    }
  });
});

/**
 * The best part
 * 
 * After subscribing to a remote collection,
 * This remote collection instance is now bound to remote service
 * 
 * Handle this, to recieve changes
 * and put data reactively anywhere in the client
 * (Hint: Using React, Blaze)
 */

RemoteUsers.find();
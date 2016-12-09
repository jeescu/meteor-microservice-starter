// Do not forget to subscribe the remote data when used used by client side
Conn.subscribe('users', function () {

  // MongoUsers.find({}).observeChanges({

  //   added: function (id, row) {
  //     console.log("Syncing mongo user to background saervices");

  // 		Users.insert({
  // 			username: "swow",
  // 			email: row.emails[0].address
  // 		}).save();

  //   }

  // });
  
  // We're connected as long as 3000 authenticated
  // console.log(MongoUsers.find({}).fetch());
  
});


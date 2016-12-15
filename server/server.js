Meteor.publish('users', function () {
  return Users.find({});
});

// Global API configuration
var Api = new Restivus({
  apiPath: 'api/',
  auth: {
    token: 'auth.apiKey',
    user: function () {
      return {
        userId: this.request.headers['user-id'],
        token: this.request.headers['login-token']
      };
    }
  },
  defaultHeaders: {
    'Content-Type': 'application/json'
  },
  onLoggedIn: function () {
    console.log(this.user.emails[0].address + ' (' + this.userId + ') logged in');
  },
  onLoggedOut: function () {
    console.log(this.user.emails[0].address + ' (' + this.userId + ') logged out');
  },
  prettyJson: true,
  useDefaultAuth: true,
  version: 'v1'
});

Api.addCollection(RemoteTargets);

Api.addCollection(RemoteUsers);
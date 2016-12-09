Conn = DDP.connect('localhost:3000');

// Meteor users from port 3000
RemoteUsers = new Mongo.Collection('users', Conn);

RemoteTargets = new Mongo.Collection('targets', Conn);

Users = new Mongo.Collection('service-users');
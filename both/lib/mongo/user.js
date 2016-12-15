/**
 * DDP connection
 * 
 * Creating a remote connection to another service.
 * By doing this, you registered to another meteor or service,
 * This can listen changes from the defined remote collections
 */
Conn = DDP.connect('localhost:3000');

/**
 * Remote collections
 * 
 * Collections that are actually from another service
 * you connected at.
 * You can then manipulate each collections and will 
 * auto update to original service
 */
RemoteUsers = new Mongo.Collection('users', Conn);
RemoteTargets = new Mongo.Collection('targets', Conn);

/**
 * Own collection
 * 
 * You can also define your own collection.
 */
Users = new Mongo.Collection('service-users');
/**
 * Mongo Model Tokens
 * 
 * This collection is used
 * to store generated unique tokens
 * from each authenticated source.
 * Tokens should be used by client source to
 * allow further actions
 */
Tokens = new Mongo.Collection('auth-tokens');
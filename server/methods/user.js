// Conn: is the Meteor Server Instance from 3000, more like MeteorServer

// This client can call the meteor server methods like:
// Conn.call('deleteContentPage', 'PuMshwDHykTXSJDxn', callback)

// If a server wants to call client methods it may need to add DDP connection instance too
// vice versa

Meteor.methods({

	changeUserPassword: function(user, data) {
        console.log('api service change password..');
        try {
            // var api = Meteor.settings.api;
            var api = "http://staging.monregimepaleo.com/";

            var apiUrl = api + "default/premium-user/change-password/format/json";

            var result = Meteor.http.call("GET", apiUrl, {
                params: {
                    userid: user._id,
                    email: user.emails[0].address,
                    newpassword: data.newPassword,
                    oldpassword: data.oldPassword
                }
            });

            return result;
        } catch(e) {
            console.log(e);
        }
    },

    checkCredits: function(email) {
    	console.log(email);
        console.log('api service check credit..');
        try {

            // var api = Meteor.settings.api;
            var api = 'http://staging.monregimepaleo.com/';
            var apiUrl = api + "default/premium-user/get-credit-count/format/json";
            
            var creditInfo = Meteor.http.call("GET", apiUrl,
                {
                    params:
                    {
                        email: email
                    }

            });

            return creditInfo;

        } catch (error) {
            console.log("Error: unable to read api url for check credits");
            console.log(error);
        }
    }

});
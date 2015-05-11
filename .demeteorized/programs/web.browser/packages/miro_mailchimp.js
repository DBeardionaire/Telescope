//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Template = Package.templating.Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var MailChimp;

(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// packages/miro:mailchimp/lib/client/views/subscribe/template.subscribe.js                          //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
                                                                                                     // 1
Template.__checkName("MailChimpListSubscribe");                                                      // 2
Template["MailChimpListSubscribe"] = new Template("Template.MailChimpListSubscribe", (function() {   // 3
  var view = this;                                                                                   // 4
  return HTML.DIV("\n	", Blaze.If(function() {                                                       // 5
    return Spacebars.call(view.lookup("message"));                                                   // 6
  }, function() {                                                                                    // 7
    return [ "\n		", HTML.P({                                                                        // 8
      "class": "message"                                                                             // 9
    }, Blaze.View(function() {                                                                       // 10
      return Spacebars.mustache(view.lookup("message"));                                             // 11
    })), "\n	" ];                                                                                    // 12
  }), HTML.Raw('\n		<input class="email" type="email" placeholder="email@example.com">\n		<button class="subscribe" type="button">Subscribe</button>\n	'));
}));                                                                                                 // 14
                                                                                                     // 15
///////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// packages/miro:mailchimp/lib/client/views/subscribe/subscribe.js                                   //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
var subscribeMessage			= 'Get on the mailing list:',                                                 // 1
	subscribeInvalidEmail		= 'Invalid email address :(',                                                // 2
	subscribeSubscribing		= 'Subscribing...',                                                           // 3
	subscribeSuccess			= 'Check your inbox! :)',                                                        // 4
	subscribeAlreadySubscribed	= 'Already subscribed! O.o',                                             // 5
                                                                                                     // 6
	subscribeTitle,                                                                                     // 7
	subscribeEmail,                                                                                     // 8
	subscribeButton,                                                                                    // 9
                                                                                                     // 10
	showMessage = function ( message ) {                                                                // 11
		if ( subscribeTitle ) {                                                                            // 12
			subscribeTitle.innerHTML = message;                                                               // 13
		}                                                                                                  // 14
	},                                                                                                  // 15
                                                                                                     // 16
	isValidEmailAddress = function ( emailAddress ) {                                                   // 17
		// http://stackoverflow.com/a/46181/11236                                                          // 18
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                                                                                     // 20
		return re.test( emailAddress );                                                                    // 21
	},                                                                                                  // 22
                                                                                                     // 23
	validateEmailAddress = function ( updateMessage ) {                                                 // 24
		if ( subscribeEmail.value !== '' && isValidEmailAddress( subscribeEmail.value ) ) {                // 25
			subscribeButton.disabled = false;                                                                 // 26
                                                                                                     // 27
			if ( updateMessage ) {                                                                            // 28
				showMessage( subscribeMessage );                                                                 // 29
			}                                                                                                 // 30
		} else {                                                                                           // 31
			subscribeButton.disabled = true;                                                                  // 32
                                                                                                     // 33
			if ( subscribeEmail.value !== '' ) {                                                              // 34
				showMessage( subscribeInvalidEmail );                                                            // 35
			} else if ( updateMessage ) {                                                                     // 36
				showMessage( subscribeMessage );                                                                 // 37
			}                                                                                                 // 38
		}                                                                                                  // 39
	},                                                                                                  // 40
                                                                                                     // 41
	mailChimpListSubscribe = function ( email, list_id ) {                                              // 42
		var mailChimp = new MailChimp(/* apiKey, options */);                                              // 43
                                                                                                     // 44
		mailChimp.call( 'lists', 'subscribe',                                                              // 45
			{                                                                                                 // 46
				id   : list_id,		// null -> defined @ server                                                     // 47
				email: {                                                                                         // 48
					email: email                                                                                    // 49
				}                                                                                                // 50
			},                                                                                                // 51
                                                                                                     // 52
			function ( error, result ) {                                                                      // 53
				if ( error ) {                                                                                   // 54
					switch ( error.error ) {                                                                        // 55
						case 232:	// 'Email_NotExists'                                                                 // 56
							showMessage( subscribeInvalidEmail );                                                         // 57
							break;                                                                                        // 58
						case 214:	// 'List_AlreadySubscribed'                                                          // 59
							showMessage( subscribeAlreadySubscribed );                                                    // 60
							break;                                                                                        // 61
						case 200:	// 'List_DoesNotExist'                                                               // 62
							// We shouldn't be here!                                                                      // 63
							// Oh, well, continue to default...                                                           // 64
						default:                                                                                       // 65
							showMessage( 'Error: ' + error.reason );                                                      // 66
					}                                                                                               // 67
                                                                                                     // 68
					console.error( '[MailChimp][Subscribe] Error: %o', error );                                     // 69
                                                                                                     // 70
				} else {                                                                                         // 71
                                                                                                     // 72
					console.info( '[MailChimp][Subscribe] Yo, ' + subscribeEmail.value + ', ' + subscribeSuccess ); // 73
					console.info( '[MailChimp][Subscribe] Subscriber: %o', result );                                // 74
                                                                                                     // 75
					showMessage( subscribeSuccess );                                                                // 76
				}                                                                                                // 77
                                                                                                     // 78
				subscribeEmail.disabled = false;                                                                 // 79
				validateEmailAddress( false );                                                                   // 80
			}                                                                                                 // 81
		);                                                                                                 // 82
	},                                                                                                  // 83
                                                                                                     // 84
	subscribeGo = function ( eventBubbling ) {                                                          // 85
		subscribeEmail.disabled  = true;                                                                   // 86
		subscribeButton.disabled = true;                                                                   // 87
                                                                                                     // 88
		showMessage( subscribeSubscribing );                                                               // 89
                                                                                                     // 90
		mailChimpListSubscribe( subscribeEmail.value );                                                    // 91
                                                                                                     // 92
		// Prevent Event Bubbling                                                                          // 93
		return eventBubbling;                                                                              // 94
	};                                                                                                  // 95
                                                                                                     // 96
Template.MailChimpListSubscribe.rendered = function () {                                             // 97
	subscribeTitle  = this.find( '.message' );                                                          // 98
	subscribeEmail  = this.find( '.email' );                                                            // 99
	subscribeButton = this.find( '.subscribe' );                                                        // 100
	subscribeButton.disabled = ( subscribeEmail.value === '' );                                         // 101
};                                                                                                   // 102
                                                                                                     // 103
Template.MailChimpListSubscribe.helpers({                                                            // 104
	message: function() {                                                                               // 105
		return subscribeMessage;                                                                           // 106
	}                                                                                                   // 107
});                                                                                                  // 108
                                                                                                     // 109
Template.MailChimpListSubscribe.events({                                                             // 110
	'focus .email, paste .email, cut .email': function ( e ) {                                          // 111
		setTimeout( function ( e ) {                                                                       // 112
			validateEmailAddress( true );                                                                     // 113
		}, 0 );                                                                                            // 114
	},                                                                                                  // 115
                                                                                                     // 116
	'keyup .email': function ( e ) {                                                                    // 117
		var key = e.which || e.keyCode || e.charCode;                                                      // 118
                                                                                                     // 119
		if (                                                                                               // 120
			key === 8 ||				// [Backspace]                                                                    // 121
			key === 46					// [Delete]                                                                        // 122
		) {                                                                                                // 123
			setTimeout( function () {                                                                         // 124
				validateEmailAddress( true );                                                                    // 125
			}, 0 );                                                                                           // 126
		}                                                                                                  // 127
	},                                                                                                  // 128
                                                                                                     // 129
	'keypress .email': function ( e ) {                                                                 // 130
		var key = e.which || e.keyCode || e.charCode;                                                      // 131
                                                                                                     // 132
		setTimeout( function () {                                                                          // 133
			validateEmailAddress( true );                                                                     // 134
			if ( isValidEmailAddress( subscribeEmail.value  ) ) {                                             // 135
				if ( key === 13	) {		// [Return]                                                                 // 136
					subscribeGo( true );                                                                            // 137
				}                                                                                                // 138
			}                                                                                                 // 139
		}, 0 );                                                                                            // 140
	},                                                                                                  // 141
                                                                                                     // 142
	'click .subscribe': function ( e ) {                                                                // 143
		validateEmailAddress( true );                                                                      // 144
		if ( isValidEmailAddress( subscribeEmail.value  ) ) {                                              // 145
			subscribeGo( false );                                                                             // 146
		}                                                                                                  // 147
	}                                                                                                   // 148
});                                                                                                  // 149
                                                                                                     // 150
///////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// packages/miro:mailchimp/lib/client/mailchimp.js                                                   //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
MailChimp = function ( apiKey, options ) {                                                           // 1
	this._options = {                                                                                   // 2
		apiKey : ( apiKey ) ? apiKey : Session.get( 'MailChimp.apiKey' ),                                  // 3
		options: options                                                                                   // 4
	};                                                                                                  // 5
};                                                                                                   // 6
                                                                                                     // 7
MailChimp.prototype.call = function ( section, method, options, callback ) {                         // 8
	var mailChimpOptions = _.defaults( {}, options );                                                   // 9
                                                                                                     // 10
	switch ( section ) {                                                                                // 11
		case 'lists':                                                                                      // 12
			if ( !mailChimpOptions.id || mailChimpOptions.id === '' ) {                                       // 13
				mailChimpOptions.id = Session.get( 'MailChimp.lists.listId' );                                   // 14
			}                                                                                                 // 15
                                                                                                     // 16
			break;                                                                                            // 17
		default:                                                                                           // 18
	}                                                                                                   // 19
                                                                                                     // 20
	Meteor.call( 'MailChimp',                                                                           // 21
		this._options,                                                                                     // 22
		section,                                                                                           // 23
		method,                                                                                            // 24
		mailChimpOptions,                                                                                  // 25
		callback                                                                                           // 26
	);                                                                                                  // 27
};                                                                                                   // 28
                                                                                                     // 29
///////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['miro:mailchimp'] = {
  MailChimp: MailChimp
};

})();

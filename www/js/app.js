var app = angular.module('caffeinehit', [
	'ionic',
	'ngMap',
	'ngCordova',
	'caffeinehit.controllers',
	'caffeinehit.services',
	'caffeinehit.filters'
]);

app.run(function ($ionicPlatform) {
	$ionicPlatform.ready(function () {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
});

app.config(function ($httpProvider) {
	$httpProvider.defaults.headers.common['Authorization'] = 'Token 19657514573f85a89408f9f7b21b80bfa4beb133';
});

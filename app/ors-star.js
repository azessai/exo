(function() {
	'use strict';

	var app = angular.module('ors-star', ['ors-route']);

	app.directive('orsStar', function() {
		return {
			link: function(scope, element, attrs) {
				console.log('orsStar link', arguments);
				var html = '';
				var note = 4
				for (let index = 0; index < note; index++) {
					html += '<img src="./ors-star/img/yellow_star.png" />';
				}
				for (let index = note; index < 5; index++) {
					html += '<img src="./ors-star/img/white_star.png" />';
				}
				element.html(html);
			}
		};
	});


})();

(function() {
	'use strict';
	var app = angular.module('main', []);

	app.component('orsHeader', {
			templateUrl: 'tmpl/ors-header.html'
	});
	app.directive('orsBody', function() {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/ors-body.html',
			transclude: true
		};
	});
	app.directive('orsFooter', function() {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/ors-footer.html',
			transclude: true
		};
	});
})();

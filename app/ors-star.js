(function() {
	'use strict';

	var app = angular.module('ors-star', ['ors-route']);

	app.directive('orsStar', ['$compile', function($compile) {
			return {
				scope: {
					n: '=?note',
				},
				link: function(scope, element, attrs) {
					console.log('orsStar link', arguments);
					scope.update = function(n) {
						console.log('update', arguments);
						scope.n = n;
					}
					scope.$watch('n', function() {
						var html = '';
						var note = 4;
						note = (scope.n === undefined) ? note : Number(scope.n);
						note = (isNaN(note)) ? 0 : note;
						note = (note > 5) ? 5 : note;
						note = (note < 0) ? 0 : note;
						for (let index = 0; index < note; index++) {
							html += '<img ng-click="update(' + (index + 1) + ')" src="./ors-star/img/yellow_star.png" />';
						}
						for (let index = note; index < 5; index++) {
							html += '<img ng-click="update(' + (index + 1) + ')" src="./ors-star/img/white_star.png" />';
						}
						element.html(html);
						$compile(element.contents())(scope);
					});
			}

		};
	}]);


})();

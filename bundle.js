/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function() {
	'use strict';

	var app = angular.module('main', ['ors-route','ors-star']);

	app.run(['$injector', function($injector) {
		var $rootScope=$injector.get('$rootScope');
		var $location=$injector.get('$location');
		$rootScope.isActive = function(url) {
			var path = $location.path();
			console.log('path', path);
			return url === path;
		};
		console.log('run');
	}]);

	app.directive('orsActive', function() {
		return {
			restrict: 'A',
			controller: ['$scope', '$attrs', '$element', '$location',
				function($scope, $attrs, $element, $location) {
					console.log('$attrs', $attrs);
					$scope.$on('$routeChangeStart', function(next, current) {
						var url = $attrs.href;
						var path = '#' + $location.path();
						if (url === path) {
							$element.addClass('active');
						} else {
							$element.removeClass('active');
						}
					});
				}
			]
		};
	});

	app.component('orsHeader', {
		templateUrl: 'tmpl/ors-header.html'
	});


	app.directive('orsBody', function() {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/ors-body.html'
		};
	});


	app.directive('orsFooter', function() {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/ors-footer.html',
		};
	});

})();


/***/ })
/******/ ]);
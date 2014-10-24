var ezyBankModule = angular.module('ezyBankModule',[ 'ui.router','angularUtils.directives.uiBreadcrumbs', 'ngDialog']);


ezyBankModule.service('toggleService', function() {
	this.toggle= function(){
		$('.row-offcanvas-left').removeClass('active relative');
		$('.left-side').addClass("collapse-left");
	    $(".right-side").addClass("strech");
	};
	this.untoggle= function(){
		$('.row-offcanvas-left').addClass('active relative');
		$('.left-side').removeClass("collapse-left");
	    $(".right-side").removeClass("strech");
	};
});

ezyBankModule.config(function($stateProvider) {
	  $stateProvider
	    .state('home', {
	      url: '/home',
	      views: {
	        'main@': {
	          templateUrl: 'pages/welcome.html',
	          controller: function($scope,toggleService) {
	        	   	toggleService.untoggle();
		            $scope.message = 'Welcome User.';
		          }
	        }
	      },
	      data: {
	        displayName: 'Home',
	      }
	    })
	    .state('idnv', {
	      // this is a demonstration of how abstract states can be handled by this
	      // directive. See the docs for a detailed explanation.
	      abstract: true,
	      parent :'home',
	      data: {
	       // proxy: 'home.users.list'
	    	  displayName: 'IDNV',
	      }
	    })
	    .state('idnv.cs', {
	      url: 'idnv/cs',
	      views: {
	        'main@': {
	          templateUrl: 'pages/customersearch.html',
	          controller : function($scope,toggleService){
	        	  toggleService.toggle();
	        	  $scope.showResults = false;
		        	 $scope.searchResults = function(){
		        		 $scope.showResults= true;
		        	 }
	          }
	        }
	      },
	      data: {
	        displayName: 'Customer Search'
	      }
	    })
	    .state('idnv.cv', {
	      url: 'idnv/cv',
	      views: {
	        'main@': {
	          templateUrl: 'pages/customerverification.html',
	          controller: function($scope,toggleService) {
	        	  toggleService.toggle();
	            //$scope.userName = userName;
	          }
	        }
	      },
	      data: {
	        displayName: 'Customer Verification'
	      }
	    })
	    .state('idnv.co', {
	      url: 'idnv/co',
	      views: {
	        'main@': {
	          templateUrl: 'pages/customeroverview.html',
	          controller: function($scope,ngDialog,toggleService) {
	        	  toggleService.toggle();
	        	  $scope.clickToOpen = function () {
	      	        ngDialog.open({ template: 'templateId' });
	      	      };
	          }
	        }
	      },
	      data: {
	        displayName: 'Customer Overview'
	      },

	    }).state('case', {
		      // this is a demonstration of how abstract states can be handled by this
		      // directive. See the docs for a detailed explanation.
		      abstract: true,
		      parent :'home',
		      data: {
		    	  displayName: 'Case Management',
		      }
		    })
		    .state('case.sc', {
		      url: 'case/sc',
		      views: {
		        'main@': {
		          templateUrl: 'pages/searchcase.html',
		          controller : function($scope,toggleService){
		        	  toggleService.toggle();
		        	  $scope.showResults=false;
		        	  $scope.searchCase = function () {
		        		$scope.showResults=true;
		        	  };
		          }
		        }
		      },
		      data: {
		        displayName: 'Manage Case'
		      }
		    })
		    .state('case.ac', {
		      url: 'case/ac',
		      views: {
		        'main@': {
		          templateUrl: 'pages/addcase.html',
		          controller: function($scope,toggleService) {
		        	 toggleService.toggle();
		            //$scope.userName = userName;
		          }
		        }
		      },
		      data: {
		        displayName: 'Create Case'
		      }
		    })

	})
	.run(function($state) {
	  $state.go('home');
	})
	;

/*//configure our routes
ezyBankModule.config(function($routeProvider) {
	$routeProvider

	// route for the dashboard page
	.when('/', {
		templateUrl : 'pages/welcome.html',
		controller  : 'welcomeController'
	})
	
	.when('/home', {
		templateUrl : 'pages/welcome.html',
		controller  : 'welcomeController'
	})

	.when('/cs', {
		templateUrl : 'pages/customersearch.html',
		controller  : 'customerSearchController'
	})

	.when('/cv', {
		templateUrl : 'pages/customerverification.html',
		controller  : 'customerVerficationController'
	})

	.when('/co', {
		templateUrl : 'pages/customeroverview.html',
		controller  : 'customerOverviewController'
	})

	// route for the blank page
	.when('/ac', {
		templateUrl : 'pages/addcase.html',
		controller  : 'addCaseController'
	})

	.when('/sc', {
		templateUrl : 'pages/searchcase.html',
		controller  : 'searchCaseController'
	});
});


//create the controller and inject Angular's $scope
ezyBankModule.controller('welcomeController', function($scope) {
	$scope.message = 'Welcome User.';
});

ezyBankModule.controller('customerSearchController', function($scope) {
	$scope.message = 'Look! I am customerSearch page.';
});

ezyBankModule.controller('customerVerficationController', function($scope) {
	$scope.message = 'Look! I am customerVerfication page.';
});

ezyBankModule.controller('customerOverviewController', function($scope) {
	$scope.message = 'Look! I am customerOverview page.';
});

ezyBankModule.controller('addCaseController', function($scope) {
	$scope.message = 'Look! I am addCase page.';
});

ezyBankModule.controller('searchCaseController', function($scope) {
	$scope.message = 'Look! I am searchCase page.';
});
*/


/*$('#user-email').on('input',function() {
        var email = $('#user-email').val()
        var message = 'Welcome Back, ' + email;
        $('.welcome-message').text(message);
    });*/

var foodieApp = angular.module('foodieApp',['ngRoute']);  //This is the code we write to properly initialize our Angular app
                             //1. We are storing the value returned by the angular.module() function here
                            //2. The first argument we pass to the function is the name of the app we mentioned in 'ng-app' directive
                           //3. The second parameter is an array of 'extra powers' we want to add to our app - we'll see this in future classes
foodieApp.config(function ($routeProvider) {   // .config() is a function that allows us to set-up our app in some way. We pass it a function as the parameter
	                                          //$routeProvider is an object defined in ngRoute. It allows us to set-up routes
	$routeProvider      ////$routeProvider is an object defined in ngRoute. It allows us to set-up routes
	.when('/',{          //We are using the .when() function defined in the $routeProvider object. We pass it two parameter
		templateUrl: 'pages/login.html',  //The first parameter is the URL of the route. Here '/' means the root route
		controller: 'loginController'   //the second paramter is an object. We need to tell $routeProvider two things
		                               //1. The place where we have the template/view saved.  2. The controller to use with that view
	})
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/restaurant/:id', {   //The :id part in the URL is known as a route parameter
                              //This means that whatever value we put in after /restaurant/ will be available to AngularJS in the controller
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
})

foodieApp.controller('mainController',function($scope) {  //Here we are using the object variable(foodieApp) that angular gave us to create a controller
                                                // In the first argument, we are passing the name of the controller we want to create
                                               // And in the second argument, we are passing the function we want the controller to do
    // $scope is the Model part of the MVC in AngularJS

   /*$scope.restaurants = ['Farzi Cafe','Pizza Hut','Wenger\'s Deli','Sagar Ratna'];  //Here we are adding a property of restaurants to the $scope object
                                                   //It is an object to which we can add a list of properties and functions
                                                   //These properties that we add are available in the HTML code
                                                  //HTML ke in-built variables ko access krne ke liye $scope use krte hai
   */

	 $scope.restaurants = [{
	 name: 'Farzi Cafe',
	 address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	 location: 'Connaught Place',
	 category: 'Casual Dining, Bar',
	 vote: '4.2',
	 cuisines: 'Modern Indian',
	 cost: '2200',
	 hours: '12 Noon to 1 AM (Mon-Sun)',
	 image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	 },
	 {
	 name: 'Farzi Cafe1',
	 address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	 location: 'Connaught Place',
	 category: 'Casual Dining, Bar',
	 vote: '4.2',
	 cuisines: 'Modern Indian',
	 cost: '2200',
	 hours: '12 Noon to 1 AM (Mon-Sun)',
	 image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	 },
	 {
	 name: 'Farzi Cafe2',
	 address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	 location: 'Connaught Place',
	 category: 'Casual Dining, Bar',
	 vote: '4.2',
	 cuisines: 'Modern Indian',
	 cost: '2200',
	 hours: '12 Noon to 1 AM (Mon-Sun)',
	 image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	 },
	 {
	 name: 'Farzi Cafe3',
	 address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	 location: 'Connaught Place',
	 category: 'Casual Dining, Bar',
	 vote: '4.2',
	 cuisines: 'Modern Indian',
	 cost: '2200',
	 hours: '12 Noon to 1 AM (Mon-Sun)',
	 image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	 }]

})


foodieApp.controller('loginController',function($scope, $location) {  //The $location object helps us modify the URL of the webpage automatically
	$scope.goToHome = function() {// when we are using html part then we use $scope (goToHome is defined in html)
		//console.log('Do Something')
		$location.url('home')  //vo location dundo jiske url main home aa rha hai
	}
})


foodieApp.controller('restaurantController',function($scope,$routeParams) {  //$routeParams object is actually a part of the ngRoute module
                                                    //give us access to all the route parameters (variables) as property of the object
	$scope.restaurantId = $routeParams.id;
	//var restaurants = 'Paste your restaurant Object here'  //Paste your restaurant Object here

	//$scope.restaurants
	var restaurants= [{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
name: 'Farzi Cafe1',
address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
location: 'Connaught Place',
category: 'Casual Dining, Bar',
vote: '4.2',
cuisines: 'Modern Indian',
cost: '2200',
hours: '12 Noon to 1 AM (Mon-Sun)',
image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
name: 'Farzi Cafe2',
address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
location: 'Connaught Place',
category: 'Casual Dining, Bar',
vote: '4.2',
cuisines: 'Modern Indian',
cost: '2200',
hours: '12 Noon to 1 AM (Mon-Sun)',
image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
name: 'Farzi Cafe3',
address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
location: 'Connaught Place',
category: 'Casual Dining, Bar',
vote: '4.2',
cuisines: 'Modern Indian',
cost: '2200',
hours: '12 Noon to 1 AM (Mon-Sun)',
image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
}]

$scope.restaurant = restaurants[$routeParams.id - 1];
})

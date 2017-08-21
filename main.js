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
	/*.when('/groceryList',{
		templateUrl: 'pages/groceryList.html',
		controller: 'groceryListController'
	})*/
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
	 id: '1',
	 hours: '12 Noon to 1 AM (Mon-Sun)',
	 image: 'https://cdn.pixabay.com/photo/2015/04/10/00/41/food-715542__340.jpg'
},
	 {
		 name: 'Food Night Riders',
		 address: 'Industrial Area Phase 2, Chandigarh Industrial Area, Chandigarh',
		 location: 'Chandigarh Industrial Area',
		 category: 'North Indian, Mughlai, Chinese, Continental',
		 vote: '3.4',
		 cuisines: 'Modern Indian',
		 cost: '700',
		 id: '2',
		 hours: ' 7 PM to 4 AM (Mon-Sun)',
		 image: 'https://cdn.pixabay.com/photo/2016/03/05/19/58/appetite-1238569__340.jpg'
	 },
	 {
	 name: 'Baskin Robbins',
	 address: 'Booth 324 & 325, Phase 5, Mohali',
	 location: 'Phase 5, Mohali',
	 category: 'Dessert Parlor',
	 vote: '3.4',
	 cuisines: 'Ice Cream, Desserts',
	 cost: '2200',
	 id: '3',
	 hours: '11 AM to 11 PM (Mon-Sun)',
	 image: 'https://cdn.pixabay.com/photo/2017/03/03/19/28/eat-2114779__340.jpg'
	 },
	 {
		 name: 'Midnight Chef',
		 address: 'SCO 329-332, Sector 35B, Sector 35, Chandigarh',
		 location: 'Sector 35',
		 category: 'Casual Dining, Bar',
		 vote: '4.2',
		 cuisines: 'North Indian, Chinese, Continental, Italian, Burger, Rolls, Salad',
		 cost: '2200',
		 id: '4',
		 hours: ' 7 PM to 4 AM (Mon-Sun)',
		 image: 'https://cdn.pixabay.com/photo/2016/11/18/22/21/architecture-1837150__340.jpg'
	 },
	 {
	 name: 'Chokhi Dhani',
	 address: 'Amravati Enclave, Near Chandi Mandir, Panchkula - Shimla Highway, Sector 2, Panchkula',
	 location: 'Sector 2',
	 category: 'Casual Dining',
	 vote: '4.2',
	 cuisines: 'Rajasthani',
	 cost: '2000',
	 id: '5',
	 hours: ' 5:30 PM to 11 PM (Mon-Sun)',
	 image: 'https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952__340.jpg'
	 }]

})


foodieApp.controller('loginController',function($scope, $location) {  //The $location object helps us modify the URL of the webpage automatically
	$scope.goToHome = function() {// when we are using html part then we use $scope (goToHome is defined in html)
		//console.log('Do Something')
		$location.url('home')  //vo location dundo jiske url main home aa rha hai
	}
})


foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {  //$routeParams object is actually a part of the ngRoute module
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
	id: '1',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	bestDish: {
 name: 'Corn Pizza',
 image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
					 },
	image: 'https://cdn.pixabay.com/photo/2015/04/10/00/41/food-715542__340.jpg'
},
{
name: 'Food Night Riders',
address: 'Industrial Area Phase 2, Chandigarh Industrial Area, Chandigarh',
location: 'Chandigarh Industrial Area',
category: 'North Indian, Mughlai, Chinese, Continental',
vote: '3.4',
cuisines: 'Modern Indian',
cost: '700',
id: '2',
hours: ' 7 PM to 4 AM (Mon-Sun)',
bestDish: {
name: 'kathi roll',
image: 'https://thumb7.shutterstock.com/display_pic_with_logo/2435534/342594524/stock-photo-dosa-south-indian-meal-close-up-side-view-selective-focus-342594524.jpg'
				 },
image: 'https://cdn.pixabay.com/photo/2016/03/05/19/58/appetite-1238569__340.jpg'
},
{
	name: 'Baskin Robbins',
	address: 'Booth 324 & 325, Phase 5, Mohali',
	location: 'Phase 5, Mohali',
	category: 'Dessert Parlor',
	vote: '3.4',
	cuisines: 'Ice Cream, Desserts',
	cost: '500',
	id: '3',
	hours: '11 AM to 11 PM (Mon-Sun)',
	image: 'https://cdn.pixabay.com/photo/2017/03/03/19/28/eat-2114779__340.jpg'
},
{
name: 'Midnight Chef',
address: 'SCO 329-332, Sector 35B, Sector 35, Chandigarh',
location: 'Sector 35',
category: 'Casual Dining, Bar',
vote: '4.2',
cuisines: 'North Indian, Chinese, Continental, Italian, Burger, Rolls, Salad',
cost: '2200',
id: '4',
hours: ' 7 PM to 4 AM (Mon-Sun)',
bestDish: {
name: 'Dal Makhani',
image: 'https://b.zmtcdn.com/data/reviews_photos/a75/8f1582cb88ab703c1b25461a60ff6a75_1481161260.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
				 },
image: 'https://cdn.pixabay.com/photo/2016/11/18/22/21/architecture-1837150__340.jpg'
},
{
name: 'Chokhi Dhani',
address: 'Amravati Enclave, Near Chandi Mandir, Panchkula - Shimla Highway, Sector 2, Panchkula',
location: 'Sector 2',
category: 'Casual Dining',
vote: '4.2',
cuisines: 'Rajasthani',
cost: '2000',
id: '5',
hours: ' 5:30 PM to 11 PM (Mon-Sun)',
bestDish: {
name: 'Rajasthani Thali',
image: 'https://b.zmtcdn.com/data/reviews_photos/dc4/fe3f2f52e7c4b315151c375e07bfedc4_1476118137.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
				 },
image: 'https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952__340.jpg'
}]

$scope.restaurant = restaurants[$routeParams.id - 1];


$scope.ingredients = [];   //initializing the variable as an empty array
$scope.getIngredients = function(url) {
/*	$("#show").click(function(){
        $("p").show();
    });*/
		/*$("#playlist").append(
	        "<li class='list-group-item'>" + val.singer + " - " + val.songName
	      );
   */
	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
	$http({
		'method': 'POST',
		'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
		'headers': {
			          'Authorization': 'Key f29f0c7fa52a4cd1ac82d3cd6e0e5058',
			           'Content-Type': 'application/json'
		          },
		'data': data
	}).then(function (response)
	   {
     		var ingredients = response.data.outputs[0].data.concepts;
        for (var i =0;i < ingredients.length;i++)  // running a loop through all the ingredients we got
				 {
           $scope.ingredients.push(ingredients[i].name);    // pushing each value in the array
         }
    	}, function (xhr) {
        	console.log(xhr);
        })
	}



	$scope.removeItem = function (x) {
        $scope.errortext = "";
        $scope.ingredients.splice(x, 1);
    }

})

/*foodieApp.controller('groceryListController', function($scope,$routeParams,$http) {
  $scope.restaurantId = $routeParams.id;

	var restaurants= [{
	bestDish: {
 name: 'Corn Pizza',
 image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
					 }
},
{
bestDish: {
name: 'kathi roll',
image: 'https://thumb7.shutterstock.com/display_pic_with_logo/2435534/342594524/stock-photo-dosa-south-indian-meal-close-up-side-view-selective-focus-342594524.jpg'
				 }
},
{
	name: 'Baskin Robbins',
	address: 'Booth 324 & 325, Phase 5, Mohali',
	location: 'Phase 5, Mohali',
	category: 'Dessert Parlor',
	vote: '3.4',
	cuisines: 'Ice Cream, Desserts',
	cost: '500',
	id: '3',
	hours: '11 AM to 11 PM (Mon-Sun)',
	image: 'https://cdn.pixabay.com/photo/2017/03/03/19/28/eat-2114779__340.jpg'
},
{
image: 'https://b.zmtcdn.com/data/reviews_photos/a75/8f1582cb88ab703c1b25461a60ff6a75_1481161260.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
				 }
},
{
bestDish: {
name: 'Rajasthani Thali',
image: 'https://b.zmtcdn.com/data/reviews_photos/dc4/fe3f2f52e7c4b315151c375e07bfedc4_1476118137.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
				 }
}]
	$scope.restaurant = restaurants[$routeParams.id - 1];
	$scope.ingredients = [];   //initializing the variable as an empty array
	$scope.getIngredients = function(url) {
		var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
		$http({
			'method': 'POST',
			'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
			'headers': {
				          'Authorization': 'Key f29f0c7fa52a4cd1ac82d3cd6e0e5058',
				           'Content-Type': 'application/json'
			          },
			'data': data
		}).then(function (response)
		   {
	     		var ingredients = response.data.outputs[0].data.concepts;
	        for (var i =0;i < ingredients.length;i++)  // running a loop through all the ingredients we got
					 {
	           $scope.ingredients.push(ingredients[i].name);    // pushing each value in the array
	         }
	    	}, function (xhr) {
	        	console.log(xhr);
	        })
		}

		$scope.removeItem = function (x) {
	        $scope.errortext = "";
	        $scope.ingredients.splice(x, 1);
	    }
})
*/

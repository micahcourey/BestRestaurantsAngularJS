bestRestaurants.controller('RestaurantsCtrl', function RestaurantsCtrl($scope) {
  $scope.restaurants = [];
  $scope.cuisine = [];
  $scope.addRestaurant = function() {
    $scope.restaurants.push({name: $scope.restaurantName, cuisine: $scope.restaurantCuisine, address: $scope.restaurantAddress, price: $scope.restaurantPrice });
    $scope.restaurantName = null;
    $scope.restaurantCuisine = null;
    $scope.restaurantAddress = null;
    $scope.restaurantPrice = null;
  };
  $scope.deleteRestaurant = function(restuarant) {
    var index = $scope.restaurants.indexOf(restaurant);
    $scope.restaurants.splice(index, 1);
  }
});

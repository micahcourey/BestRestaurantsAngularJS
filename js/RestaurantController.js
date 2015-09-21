bestRestaurants.controller('RestaurantsCtrl', function StudentsCtrl($scope) {
  $scope.restaurants = [];
  $scope.addRestaurant = function() {
    $scope.restaurants.push({name: $scope.restaurantName})
    $scope.restaurantName = null;
  };
  $scope.deleteRestaurant = function(restuarant) {
    var index = $scope.restaurants.indexOf(restaurant)
    $scope.restaurants.splice(index, 1);
  }
});

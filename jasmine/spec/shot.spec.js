

describe('fimPagina', function() {

  it('deve retornar um valor válido da posição scroll', function() {
    expect(fimPagina()).toBeTruthy();
	
  });


});

describe('CtrlLista', function() {
  beforeEach(module('shotsApp'));

  var $controller;
  var shot = [
			  {
				"id" : 471756,
				"title" : "Sasquatch",
				"description" : "<p>Quick, messy, five minute sketch of something that might become a fictional something.</p>",
				"width" : 400,
				"height" : 300,
				"images" : {
				  "hidpi" : null,
				  "normal" : "https://d13yacurqjgara.cloudfront.net/users/1/screenshots/471756/sasquatch.png",
				  "teaser" : "https://d13yacurqjgara.cloudfront.net/users/1/screenshots/471756/sasquatch_teaser.png"
				}
			  }	
			]; 


  beforeEach(inject(function(_$controller_){
    
    $controller = _$controller_;
  }));

  describe('$scope.carregarMais', function() {
    it('deve validar o formato de um shot', function() {
      var $scope = {};
      var controller = $controller('CtrlLista', { $scope: $scope });
	  $scope.shots = shot;	
	  expect($scope.shots).toEqual(jasmine.any(Object));
    });
	
  });
  
  
  
});



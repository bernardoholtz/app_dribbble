var App = angular.module('shotsApp', ['infinite-scroll','ngSanitize']);
var token = "c6d7296dd93ab02ef37183c0d645169d23cb3e1cdfc4bb6c75bf70bc48d0743a";
var page=0;
var r = [];
App.controller('CtrlLista', function($scope, $http){

	$scope.carregarMais = function() {
		
		if (fimPagina()) {
			
			page = page+1;
		    var rs = $http.get('https://api.github.com/repos/globocom/ACL-API-client-java');
			rs.success(function (response) {
			
				$scope.shots = r.concat(response);
				r = r.concat(response);
				
			});
	   }
		
	 };

});

function fimPagina() {
  if ($(window).scrollTop() + $(window).height() == $(document).height()) {	
	return true;
  }else{return false;}
  
}
 









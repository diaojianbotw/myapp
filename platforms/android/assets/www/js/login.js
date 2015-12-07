angular.module('login',['ngResource','ionic','ngCordova','cps.config','cps.filters'])
	.controller('loginCtrl',['$resource','$scope','ENV','$state','$ionicPopup','$ionicLoading',function($resource,$scope,ENV,$state,$ionicPopup,$ionicLoading){
		//var sysService = $resource(ENV.api+'login/:method',{},{
			//loginphonegap:{methos:'post',params:{method:'logingap'},isArray:false,timeout:10000}
		//});
		$scope.signIn=function(user){
			//$ionicLoading.show({
				//template:"请稍候......"
		//	});
			
			//sysService.loginphonegap(user,function(data){
				//if(data.flag="true"){
					$state.go('index');
				//}else{
					//$scope.showAlert();
				//}
			//});
		}

		$scope.showAlert=function(){
			$ionicPopup.alert({
				title:'提示',
				template:'用户名或者密码不存在'
			})
		}
		
	}])
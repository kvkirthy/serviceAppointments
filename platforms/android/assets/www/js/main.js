
var angularApp = angular.module('serviceApointments',['ngRoute'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/',{controller:'scheduleServiceStep1Controller', templateUrl: 'view/scheduleServiceStep1.html'})
	.otherwise({redirectTo:'/'});
}])
.run(function(){
	if ( device.platform == 'android' || device.platform == 'Android' )
	{
		notification.pushAlert.register(
        function(data){
        	console.log('successfully registered ' + data);
        },
        function(data){
        	console.log('Error registering' + data);
        }, {
            "senderID":"528261533991",
            "ecb":"onNotificationGCM"
        });
	}
});
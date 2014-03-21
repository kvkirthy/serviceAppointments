angularApp.controller('scheduleServiceStep1Controller',function($scope){
	$scope.isModelDropdownVisible = false;
	$scope.makes = [ "Lexus", "Jaguar", "Rolls-Royce", "Mercedes-Benz"];
	$scope.models = [];
	$scope.getModels = function(make){		
		$scope.isModelDropdownVisible = true;		
		if(make === "Lexus"){
			$scope.models = [ "IS 350C", "LX 450 Luxury Wagon", "HS 250h", "GS 430", "CT 200h", "GX 460", "RX 300", "RX 300 Luxury SUV", "GS 350", "LS 400", "SC 430", "LS 600h L", "LX 570", "LS 460", "SC 300 Luxury Sport Cpe", "LX 470", "ES 300h", "GS 400", "RX 450h", "GS 400 Luxury Perform Sdn", "RX 330", "SC 400 Luxury Sport Cpe", "LX 470 Luxury Wagon", "ES 300 Luxury Sport Sdn", "ES 300", "IS 350", "IS F", "IS 250", "IS 250C", "GS 460", "GX 470", "GS 450h", "ES 350", "LS 430", "RX 400h", "RX 350", "LFA", "GS 300", "ES 330", "SC 300", "LS 400 Luxury Sdn", "GS 300 Luxury Perform Sdn", "IS 300", "LX 470 Luxury SUV", "SC 400" ];
		}
		else if (make === "Jaguar"){
			$scope.models = [ "F-TYPE", "XF", "XJ Series", "XJ", "S-TYPE", "XK", "X-TYPE", "XK8", "XK Series" ];
		}
		else if(make === "Rolls-Royce"){
			$scope.models = [ "Phantom", "Ghost", "Phantom Drophead Coupe", "Silver Seraph", "Phantom Coupe", "Corniche", "Park Ward" ];
		}
		else if(make === "Mercedes-Benz"){
			$scope.models = [ "G-Class", "M-Class", "SLS AMG", "SL-Class", "SLK-Class", "SLS AMG GT", "Sprinter Crew Vans", "Sprinter Cargo Vans", "E-Class", "Sprinter Passenger Vans", "C-Class", "CLK-Class", "CLS-Class", "SLR McLaren", "GL-Class", "GLK-Class", "S-Class", "CL-Class", "R-Class", "Sprinter Chassis-Cabs" ];
		}
		else{
			$scope.models = ['Unknown'];
		}
	};	
	$scope.years = ["2007","2008","2009","2010","2011","2012","2013","2014"];
	$scope.serviceOptions = [{value:"Quicklube Service",isSelected:true}, {value:"Driveability", isSelected:false}, {value: "Manufacturer Maintenance Package", isSelected: true}, {value:"Factory Maintenance Package",isSelected:false}];
	$scope.apointmentDateAndTime="4-Mar-2014 4 PM";		
});

var firstBreath;
var secondBreath = 0;
var breathInterval = 0;

// var firstKeydown = function(e){
// 	if(e.keyCode === 32){
// 		firstBreath = Date.now();
// 		console.log(firstBreath);
// 		return firstBreath;
// 	}
	
// }

// var secondKeydown = function(e){
// 	if(e.keyCode === 32){
// 		secondBreath = Date.now();
// 		console.log(secondBreath);
// 		return secondBreath;
// 	}
	
// }

document.addEventListener('keydown', function(e){
	 if(e.keyCode === 32){
	 	firstBreath = Date.now();
	 	console.log(firstBreath);
	 	breathInterval = firstBreath - secondBreath;
	 secondBreath = firstBreath;
	 console.log(breathInterval);
	 }
	 // breathInterval = firstBreath - secondBreath;
	 // secondBreath = firstBreath;
	 // console.log(breathInterval);
})

// document.addEventListener('keydown', firstKeydown, false);
// document.addEventListener('keydown', secondKeydown, true);





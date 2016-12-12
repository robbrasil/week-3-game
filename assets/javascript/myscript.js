 window.onload = function() {
 	var guessesLeft = 10;
 	var points = 0;
     var letras = [];
     var keyArray = [];
     var imNotEqualAgain = false;
     var wins = 0;
     var score = true;
     $("#guessesRemaining").text(guessesLeft);
   
     //Selects random contry...
 	function chosenCountry() {
 		var countries = ["Afghanistan", "Angola", "Argentina", "Australia", "Austria", "Belgium", "Bolivia", "Brazil", "Bulgaria", "Cameroon", "Canada", "Chile", "China", "Colombia", "Costa Rica", "Cuba", "Denmark", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Finland", "France", "Germany", "Greece", "Guatemala", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iraq", "Malaysia", "Mexico", "Morocco", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Nigeria", "Norway", "Pakistan", "Panama", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Romania", "Russia", "Saudi Arabia", "Senegal", "Singapore", "South Africa", "Spain", "Sweden", "Switzerland", "Taiwan", "Thailand", "Turkey", "Uganda", "Ukraine", "United Kingdom", "United States", "Uruguay", "Venezuela", "Vietnam"];
 		var arrToUp = String.prototype.toUpperCase.apply(countries).split(",");
 		var select = arrToUp[Math.floor(Math.random() * countries.length)];
 		return select;
 	}
 	//Sets the Chosen Country...
 	var country = chosenCountry();
 	//Makes an array of letters from selected country...
 	var arrFromCountry = Array.from(country);
 	//Draws out the spaces...
 	for (var i = 0; i < country.length; i++) {
 	
        var letter = $("<span>");
   
 		letter.attr('id', i);
        letter.addClass("letter");
       $("#currentWord").append(letter);
        if (arrFromCountry[i] === ' '){
            points++;
            letter.text("    ");
            letter.removeClass("letter");
            letter.addClass("space");
            console.log(arrFromCountry);
            console.log(points);
            
        }
 		
 	}
 	console.log(country)
 		// When the user presses a key, the game starts...
 	document.onkeydown = function(event) {
        if (event.keyCode >= 65 && event.keyCode <= 90 && event.keyCode != 13){
        imNotEqualAgain = false;
        
        
        
 		// Determine which key was pressed, make it uppercase, and set it to the userGuess variable.       
 		var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
 		var arrFromCountry = Array.from(country);
 		var indexOfArray = $.inArray(userGuess, arrFromCountry);
         
        $.each(letras, function (i, value){
            if(value == event.keyCode){
                imNotEqualAgain = true;
            }
        });
        console.log(imNotEqualAgain)
 		if ((indexOfArray == -1)&& (imNotEqualAgain == false) ){
 			guessesLeft--;
 			//Sets the guesses remaining...
 			$("#guessesRemaining").html(guessesLeft);
 			$("#alreadyGuessed").append(userGuess);
           
            //If user guess does not match a letter in the word this will happen...
 			
            
 		} else if (imNotEqualAgain == false) {
            
           
    if ( $.inArray( userGuess, keyArray ) > -1 ) {
        
      
    }
            keyArray.push(userGuess);
            console.log(keyArray);
           
            
 			//If user guess matches a letter in the word this will happen...
 			console.log("letter found");
 			//Compares the user input to the word selected...
 			for (var i = 0; i < country.length; i++) {
 				if (arrFromCountry[i] === userGuess) {
                     if ($(".letter")!= " "){
                         points++
                     };
 					document.getElementById(i).innerHTML = userGuess;
                    
 					document.getElementById(indexOfArray).innerHTML = userGuess;
                    console.log(points)
                     
 				}
 			}
 		}
        
        letras.push(event.keyCode);
       
        if (guessesLeft < 1){
            $("#alreadyGuessed").html("");
            $("#guessesRemaining").html("");
            $("#wonLost").removeClass("panel-info");
            $("#wonLost").addClass("panel-danger");
            $("#currentWord").html(country);
            $("#lost").html("You Lost! Press Enter to play again.");
           
                   $(document).keypress(function(e) {
    if(e.which == 13) {
        reload();
    }
});
          
        }
        
        if (points === arrFromCountry.length){
             $("#alreadyGuessed").html("");
            $("#guessesRemaining").html("");
           $("#wonLost").removeClass("panel-info");
            $("#wonLost").addClass("panel-success");
            $("#lost").html("You Won! Press Enter to play again");
            wins++;
                
      
        if (score == true){
            $("#wins").html(wins);
            score = false;
        }
            $(document).keypress(function(e) {
    if(e.which == 13) {
        reload();
    }
});
        }
            
        }
        
        function reload(){
            score = true;
            $("#wonLost").removeClass("panel-danger");
             $("#wonLost").removeClass("panel-success");
            $("#wonLost").addClass("panel-info");
            $("#lost").html("Press any key to get started!")
            $("playAgainButton").hide();
            $("#currentWord").text("");
            $("#alreadyGuessed").text("");
            $("#guessesRemaining").text("10");
           
                guessesLeft = 10;
 	            points = 0;
                letras = [];
                keyArray = [];
                imNotEqualAgain = false;
                
     $("#guessesRemaining").text(guessesLeft);
    $("#playAgainButton").hide();
            country = chosenCountry();
 	
 	for (var i = 0; i < country.length; i++) {
 	
        letter = $("<span>");
        letter.attr('id', i);
        letter.addClass("letter");
       $("#currentWord").append(letter);
        if (arrFromCountry[i] === ' '){
            points++;
            letter.text("    ");
            letter.removeClass("letter");
            letter.addClass("space");
            console.log(arrFromCountry);
            console.log(points);
            
        }
 		
 	}
 	console.log(country)
        }
 	}
 }
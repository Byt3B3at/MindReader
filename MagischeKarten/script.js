/**
 * MagischeKarten - Library
 *
 * Diese Bibliothek stellt Funktionen zur Verfuegung,
 * die dem Benutzer 6 verschiedene Karten mit fest
 * vorgegebenen Zahlen ausgeben. Der Benutzer bestaetigt,
 * auf welcher der Karten sich seine gedachte Zahl befindet.
 * Die ersten Zahlen der 'positiven' Karten werden addiert
 * und das Ergebnis ergibt die gedachte Zahl.
 *
 * @author Marcus Freund
 * @date 2018-08-06
 * @version 1.05
 */

const cardArray1 = [
	
	1, 3, 5, 7, 
	9, 11, 13, 15, 
	17, 19, 21, 23, 
	25, 27, 29, 31, 
	33, 35, 37, 39, 
	41, 43, 45, 47, 
	49, 51, 53, 55, 
	57, 59, 61, 63
	
	];

const cardArray2 = [
	
	2, 3, 6, 7, 
	10, 11, 14, 15, 
	18, 19, 22, 23, 
	26, 27, 30, 31, 
	34, 35, 38, 39, 
	42, 43, 46, 47, 
	50, 51, 54, 55, 
	58, 59, 62, 63	
	
	];

const cardArray3 = [
	
	4, 5, 6, 7, 
	12, 13, 14, 15, 
	20, 21, 22, 23, 
	28, 29, 30, 31, 
	36, 37, 38, 39, 
	44, 45, 46, 47, 
	52, 53, 54, 55, 
	60, 61, 62, 63	
	
	];

const cardArray4 = [
	
	8, 9, 10, 11, 
	12, 13, 14, 15, 
	24, 25, 26, 27, 
	28, 29, 30, 31, 
	40, 41, 42, 43, 
	44, 45, 46, 47, 
	56, 57, 58, 59, 
	60, 61, 62, 63
	
	];

const cardArray5 = [
	
	16, 17, 18, 19, 
	20, 21, 22, 23, 
	24, 25, 26, 27, 
	28, 29, 30, 31, 
	48, 49, 50, 51, 
	52, 53, 54, 55, 
	56, 57, 58, 59, 
	60, 61, 62, 63
	
	];

const cardArray6 = [
	
	32, 33, 34, 35, 
	36, 37, 38, 39, 
	40, 41, 42, 43, 
	44, 45, 46, 47, 
	48, 49, 50, 51, 
	52, 53, 54, 55, 
	56, 57, 58, 59, 
	60, 61, 62, 63
	
	];

window.onload = function loadGame() {
	
	initialize();
	
	//console.log(`@loadGame(): cardArray1: ${cardArray1}`);
	//console.log(`@loadGame(): cardArray2: ${cardArray2}`);
	//console.log(`@loadGame(): cardArray3: ${cardArray3}`);
	//console.log(`@loadGame(): cardArray4: ${cardArray4}`);
	//console.log(`@loadGame(): cardArray5: ${cardArray5}`);
	//console.log(`@loadGame(): cardArray6: ${cardArray6}`);
	
}

function initialize() {
	
	const version = 105;
	console.log(`@initialize(): version: ${version}`);
	
	var level = 1;
	//console.log(`@getCardArrayValues(): level: ${level}`);
	
	var sumFirstNumbers = 0;
	var secretNumber = 0;
	
	htmlOutput(cardArray1);
	level++;
	
	var button1 = document.getElementById('buttonYes').onclick = function() {
		
		getCardArrayValues(true);
		
	};
	
	var button2 = document.getElementById('buttonNo').onclick = function() {
		
		getCardArrayValues(false);
		
	};
	
	function getCardArrayValues(numberExists) {
		
		//console.log(`@getCardArrayValues(): level: ${level}`);
		
		switch (level) {
			
			case 1:
				htmlOutput(cardArray1);
				level++;
				break;
			case 2:
				sumFirstNumbers = numberExists ? sumFirstNumbers + cardArray1[0] : sumFirstNumbers;
				//console.log(`@getCardArrayValues(): sumFirstNumbers: ${sumFirstNumbers}`);
				htmlOutput(cardArray2);
				level++;
				break;
			case 3:
				sumFirstNumbers = numberExists ? sumFirstNumbers + cardArray2[0] : sumFirstNumbers;
				//console.log(`@getCardArrayValues(): sumFirstNumbers: ${sumFirstNumbers}`);
				htmlOutput(cardArray3);
				level++;
				break;
			case 4:
				sumFirstNumbers = numberExists ? sumFirstNumbers + cardArray3[0] : sumFirstNumbers;
				//console.log(`@getCardArrayValues(): sumFirstNumbers: ${sumFirstNumbers}`);
				htmlOutput(cardArray4);
				level++;
				break;
			case 5:
				sumFirstNumbers = numberExists ? sumFirstNumbers + cardArray4[0] : sumFirstNumbers;
				//console.log(`@getCardArrayValues(): sumFirstNumbers: ${sumFirstNumbers}`);
				htmlOutput(cardArray5);
				level++;
				break;
			case 6:
				sumFirstNumbers = numberExists ? sumFirstNumbers + cardArray5[0] : sumFirstNumbers;
				//console.log(`@getCardArrayValues(): sumFirstNumbers: ${sumFirstNumbers}`);
				htmlOutput(cardArray6);
				level++;
				break;
			case 7:
				sumFirstNumbers = numberExists ? sumFirstNumbers + cardArray6[0] : sumFirstNumbers;
				//console.log(`@getCardArrayValues(): sumFirstNumbers: ${sumFirstNumbers}`);
				secretNumber = sumFirstNumbers;
				//console.log(`@getCardArrayValues(): secretNumber: ${secretNumber}`);
				document.getElementById('showCards').innerHTML =
					`Du hast Dir die Zahl ${secretNumber} ausgedacht!`;
				level = 1;
				sumFirstNumbers = 0;
				secretNumber = 0;
				
		}
		
	}
	
}

function sortedArrayString(array) {
	
	array.sort(sortNumber);
	
	function sortNumber(a, b) {
		
	    return a - b;
	    
	}
	
	return outputString = array.join(", ");
	
}

function htmlOutput(input) {
	
	return document.getElementById('showCards').innerHTML = input.join(", ");
	
}
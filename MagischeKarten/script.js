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
 * @version 1.00
 */

const cardArray1 = Array(
                     
					1, 9, 17, 25, 33,
					41, 49, 57, 3, 11,
					19, 27, 35, 43, 51,
					59, 5, 13, 21, 29,
					37, 45, 53, 61, 7,
					15, 23, 31, 39, 47,
					55, 63
					
                    );

const cardArray2 = Array(
                     
					2, 10, 18, 26, 34,
					42, 50, 58, 3, 11,
					19, 27, 35, 43, 51,
					59, 6, 14, 22, 30,
					38, 46, 54, 62, 7,
					15, 23, 31, 39, 47,
					55, 63
					
);

const cardArray3 = Array(
                     
					4, 12, 20, 28, 36,
					44, 52, 60, 5, 13,
					21, 29, 37, 45, 53,
					61, 6, 14, 22, 30,
					38, 46, 54, 62, 7,
					15, 23, 31, 39, 47,
					55, 63
					
);

const cardArray4 = Array(
                     
					8, 12, 24, 28, 40,
					44, 56, 60, 9, 13,
					25, 29, 41, 45, 57,
					61, 10, 14, 26, 30,
					42, 46, 58, 62, 11,
					15, 27, 31, 43, 47,
					59, 63
					
);

const cardArray5 = Array(
                     
					16, 20, 24, 28, 48,
					52, 56, 60, 17, 21,
					25, 29, 49, 53, 57,
					61, 18, 22, 26, 30,
					50, 54, 58, 62, 19,
					23, 27, 31, 51, 55,
					59, 63
					
);

const cardArray6 = Array(
                     
					32, 36, 40, 44, 48,
					52, 56, 60, 33, 37,
					41, 45, 49, 53, 57,
					61, 34, 38, 42, 46,
					50, 54, 58, 62, 35,
					39, 43, 47, 51, 55,
					59, 63
					
);

window.onload = function loadGame() {
	
	initialize();
	
	console.log(`@loadGame(): cardArray1: ${cardArray1}`);
	console.log(`@loadGame(): cardArray2: ${cardArray2}`);
	console.log(`@loadGame(): cardArray3: ${cardArray3}`);
	console.log(`@loadGame(): cardArray4: ${cardArray4}`);
	console.log(`@loadGame(): cardArray5: ${cardArray5}`);
	console.log(`@loadGame(): cardArray6: ${cardArray6}`);
	
}

function initialize() {
	
	const version = 20;
	console.log(`@initialize(): version: ${version}`);
	
	var level = 1;
	console.log(`@getCardArrayValues(): level: ${level}`);
	
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
		
		console.log(`@getCardArrayValues(): level: ${level}`);
		
		switch (level) {
			
			case 1:
				htmlOutput(cardArray1);
				level++;
				break;
			case 2:
				sumFirstNumbers = numberExists ? sumFirstNumbers + cardArray1[0] : sumFirstNumbers;
				console.log(`@getCardArrayValues(): sumFirstNumbers: ${sumFirstNumbers}`);
				htmlOutput(cardArray2);
				level++;
				break;
			case 3:
				sumFirstNumbers = numberExists ? sumFirstNumbers + cardArray2[0] : sumFirstNumbers;
				console.log(`@getCardArrayValues(): sumFirstNumbers: ${sumFirstNumbers}`);
				htmlOutput(cardArray3);
				level++;
				break;
			case 4:
				sumFirstNumbers = numberExists ? sumFirstNumbers + cardArray3[0] : sumFirstNumbers;
				console.log(`@getCardArrayValues(): sumFirstNumbers: ${sumFirstNumbers}`);
				htmlOutput(cardArray4);
				level++;
				break;
			case 5:
				sumFirstNumbers = numberExists ? sumFirstNumbers + cardArray4[0] : sumFirstNumbers;
				console.log(`@getCardArrayValues(): sumFirstNumbers: ${sumFirstNumbers}`);
				htmlOutput(cardArray5);
				level++;
				break;
			case 6:
				sumFirstNumbers = numberExists ? sumFirstNumbers + cardArray5[0] : sumFirstNumbers;
				console.log(`@getCardArrayValues(): sumFirstNumbers: ${sumFirstNumbers}`);
				htmlOutput(cardArray6);
				level++;
				break;
			case 7:
				sumFirstNumbers = numberExists ? sumFirstNumbers + cardArray6[0] : sumFirstNumbers;
				console.log(`@getCardArrayValues(): sumFirstNumbers: ${sumFirstNumbers}`);
				secretNumber = sumFirstNumbers;
				console.log(`@getCardArrayValues(): secretNumber: ${secretNumber}`);
				document.getElementById('showCards').innerHTML =
					'<tr><td>'
					+ JSON.stringify(
									'Die Zahl lautet: '
									+ secretNumber, null, 4
									)
									+ '</td></tr>';
				level = 1;
				sumFirstNumbers = 0;
				secretNumber = 0;
				
		}
		
	}
	
}

function magicGuessing() {
	
	
}

function htmlOutput(cardArrayValues) {
	
	return document.getElementById('showCards').innerHTML =
		'<tr><td>'
		+ JSON.stringify(
		                 cardArrayValues, null, 4
		                 )
		                 + '</td></tr>';
	
}
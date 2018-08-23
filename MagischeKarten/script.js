/**
 * Magische Karten
 * 
 * @author Marcus Freund
 * @date 2018-08-06
 * @version 1.4
 * @description Diese Bibliothek stellt Funktionen zur Verfuegung, die dem
 *              Benutzer 6 verschiedene Karten mit fest vorgegebenen Zahlen
 *              ausgibt. Der Benutzer bestaetigt, auf welcher der Karten sich
 *              seine gedachte Zahl befindet. Die ersten Zahlen der 'positiven'
 *              Karten werden addiert und das Ergebnis ergibt die gedachte Zahl.
 */

window.onload = function initialize() {

    LOGGING_ENABLED = true;
    
    htmlElement = document.getElementById('showCards');
    
    level = 1;
    secretNumber = 0;
    
    setArrays();
    
    getArrayValues(false);
    
    getButtons(true, true, false);
    
}

function setArrays() {

    cardArray1 =
        [
            
            '01', '03', '05', '07', '09', '11', '13', '15', '17', '19', '21', '23', '25', '27',
            '29', '31', '33', '35', '37', '39', '41', '43', '45', '47', '49', '51', '53', '55',
            '57', '59', '61', '63'
        
        ];
    
    cardArray1Table = createTableBody([
        [
            cardArray1.slice(0, 4).join(', ')
        ], [
            cardArray1.slice(4, 8).join(', ')
        ], [
            cardArray1.slice(8, 12).join(', ')
        ], [
            cardArray1.slice(12, 16).join(', ')
        ], [
            cardArray1.slice(16, 20).join(', ')
        ], [
            cardArray1.slice(20, 24).join(', ')
        ], [
            cardArray1.slice(24, 28).join(', ')
        ], [
            cardArray1.slice(28).join(', ')
        ]
    ]);
    
    cardArray2 =
        [
            
            '02', '03', '06', '07', '10', '11', '14', '15', '18', '19', '22', '23', '26', '27',
            '30', '31', '34', '35', '38', '39', '42', '43', '46', '47', '50', '51', '54', '55',
            '58', '59', '62', '63'
        
        ];
    
    cardArray2Table = createTableBody([
        [
            cardArray2.slice(0, 4).join(', ')
        ], [
            cardArray2.slice(4, 8).join(', ')
        ], [
            cardArray2.slice(8, 12).join(', ')
        ], [
            cardArray2.slice(12, 16).join(', ')
        ], [
            cardArray2.slice(16, 20).join(', ')
        ], [
            cardArray2.slice(20, 24).join(', ')
        ], [
            cardArray2.slice(24, 28).join(', ')
        ], [
            cardArray2.slice(28).join(', ')
        ]
    ]);
    
    cardArray3 =
        [
            
            '04', '05', '06', '07', '12', '13', '14', '15', '20', '21', '22', '23', '28', '29',
            '30', '31', '36', '37', '38', '39', '44', '45', '46', '47', '52', '53', '54', '55',
            '60', '61', '62', '63'
        
        ];
    
    cardArray3Table = createTableBody([
        [
            cardArray3.slice(0, 4).join(', ')
        ], [
            cardArray3.slice(4, 8).join(', ')
        ], [
            cardArray3.slice(8, 12).join(', ')
        ], [
            cardArray3.slice(12, 16).join(', ')
        ], [
            cardArray3.slice(16, 20).join(', ')
        ], [
            cardArray3.slice(20, 24).join(', ')
        ], [
            cardArray3.slice(24, 28).join(', ')
        ], [
            cardArray3.slice(28).join(', ')
        ]
    ]);
    
    cardArray4 =
        [
            
            '08', '09', '10', '11', '12', '13', '14', '15', '24', '25', '26', '27', '28', '29',
            '30', '31', '40', '41', '42', '43', '44', '45', '46', '47', '56', '57', '58', '59',
            '60', '61', '62', '63'
        
        ];
    
    cardArray4Table = createTableBody([
        [
            cardArray4.slice(0, 4).join(', ')
        ], [
            cardArray4.slice(4, 8).join(', ')
        ], [
            cardArray4.slice(8, 12).join(', ')
        ], [
            cardArray4.slice(12, 16).join(', ')
        ], [
            cardArray4.slice(16, 20).join(', ')
        ], [
            cardArray4.slice(20, 24).join(', ')
        ], [
            cardArray4.slice(24, 28).join(', ')
        ], [
            cardArray4.slice(28).join(', ')
        ]
    ]);
    
    cardArray5 =
        [
            
            '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29',
            '30', '31', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59',
            '60', '61', '62', '63'
        
        ];
    
    cardArray5Table = createTableBody([
        [
            cardArray5.slice(0, 4).join(', ')
        ], [
            cardArray5.slice(4, 8).join(', ')
        ], [
            cardArray5.slice(8, 12).join(', ')
        ], [
            cardArray5.slice(12, 16).join(', ')
        ], [
            cardArray5.slice(16, 20).join(', ')
        ], [
            cardArray5.slice(20, 24).join(', ')
        ], [
            cardArray5.slice(24, 28).join(', ')
        ], [
            cardArray5.slice(28).join(', ')
        ]
    ]);
    
    cardArray6 =
        [
            
            '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45',
            '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59',
            '60', '61', '62', '63'
        
        ];
    
    cardArray6Table = createTableBody([
        [
            cardArray6.slice(0, 4).join(', ')
        ], [
            cardArray6.slice(4, 8).join(', ')
        ], [
            cardArray6.slice(8, 12).join(', ')
        ], [
            cardArray6.slice(12, 16).join(', ')
        ], [
            cardArray6.slice(16, 20).join(', ')
        ], [
            cardArray6.slice(20, 24).join(', ')
        ], [
            cardArray6.slice(24, 28).join(', ')
        ], [
            cardArray6.slice(28).join(', ')
        ]
    ]);
    
}

function getButtons(showButton1, showButton2, showButton3) {

    var buttonYes = document.getElementById('buttonYes');
    var buttonNo = document.getElementById('buttonNo');
    var buttonAgain = document.getElementById('buttonAgain');
    
    if (showButton1) {
        
        buttonYes.style.display = 'inline-block';
        
        buttonYes.onclick = function() {

            getArrayValues(true);
            
        }

    } else {
        
        buttonYes.style.display = 'none';
        
    }
    
    if (showButton2) {
        
        buttonNo.style.display = 'inline-block';
        
        buttonNo.onclick = function() {

            getArrayValues(false);
            
        }

    } else {
        
        buttonNo.style.display = 'none';
        
    }
    
    if (showButton3) {
        
        buttonAgain.style.display = 'inline-block';
        
        buttonAgain.onclick = function() {

            if (LOGGING_ENABLED) {
                
                console.clear();
                
            }
            
            getArrayValues(false);
            
        }

    } else {
        
        buttonAgain.style.display = 'none';
        
    }
    
}

function showHtmlElement(elementId) {

    return document.getElementById(elementId).style.visibility = 'visible';
    
}

function hideHtmlElement(elementId) {

    return document.getElementById(elementId).style.visibility = 'hidden';
    
}

function getArrayValues(userInput) {

    switch (getLevel()) {
        
        case 1:
            setSecretNumber(userInput, null);
            showHtmlElement('exerciseIntro');
            htmlElement.innerHTML = cardArray1Table.innerHTML;
            showHtmlElement('exerciseQuestion');
            setLevel(); // 2
            getButtons(true, true, false);
            break;
        case 2:
            setSecretNumber(userInput, cardArray1);
            htmlElement.innerHTML = cardArray2Table.innerHTML;
            setLevel(); // 3
            getButtons(true, true, false);
            break;
        case 3:
            setSecretNumber(userInput, cardArray2);
            htmlElement.innerHTML = cardArray3Table.innerHTML;
            setLevel(); // 4
            getButtons(true, true, false);
            break;
        case 4:
            setSecretNumber(userInput, cardArray3);
            htmlElement.innerHTML = cardArray4Table.innerHTML;
            setLevel(); // 5
            getButtons(true, true, false);
            break;
        case 5:
            setSecretNumber(userInput, cardArray4);
            htmlElement.innerHTML = cardArray5Table.innerHTML;
            setLevel(); // 6
            getButtons(true, true, false);
            break;
        case 6:
            setSecretNumber(userInput, cardArray5);
            htmlElement.innerHTML = cardArray6Table.innerHTML;
            setLevel(); // 7
            getButtons(true, true, false);
            break;
        case 7:
            setSecretNumber(userInput, cardArray6);
            hideHtmlElement('exerciseIntro');
            hideHtmlElement('exerciseQuestion');
            if (getSecretNumber() > 0) {
                
                htmlElement.innerText = `Du hast Dir die Zahl ${getSecretNumber()} ausgedacht!`;
                
            } else {
                
                htmlElement.innerText = `Warum so geheimnisvoll?`;
                
            }
            setLevel(); // 1
            getButtons(false, false, true);
            
    }
    
}

function getLevel() {

    if (LOGGING_ENABLED) {
        
        console.log(`@getLevel(): level: ${level}`);
        
    }
    
    return level;
    
}

function setLevel() {

    return level = (level < 7) ? (level + 1) : 1;
    
}

function getSecretNumber() {

    if (LOGGING_ENABLED) {
        
        console.log(`@getSecretNumber(): secretNumber = ${secretNumber}`);
        
    }
    
    return secretNumber;
    
}

function setSecretNumber(userInputYes, array) {

    if (array !== null) {
        
        if (userInputYes) {
            
            return secretNumber = getSecretNumber() + (Number(array[0]));
            
        }
        
        return getSecretNumber();
        
    }
    
    return secretNumber = 0;
    
}

function createTableBody(tableData) {

    var tableBody = document.createElement('tbody');
    
    tableData.forEach(function(rowData) {

        var row = document.createElement('tr');
        
        rowData.forEach(function(cellData) {

            var cell = document.createElement('td');
            // TODO: Formatierung
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        });
        //.join(', ')
        tableBody.appendChild(row);
    });
    
    return tableBody;
}
/**
 * Magische Karten
 * 
 * @author Marcus Freund
 * @date 2018-08-06
 * @version 1.30
 * @description Diese Bibliothek stellt Funktionen zur Verfuegung, die dem
 *              Benutzer 6 verschiedene Karten mit fest vorgegebenen Zahlen
 *              ausgibt. Der Benutzer bestaetigt, auf welcher der Karten sich
 *              seine gedachte Zahl befindet. Die ersten Zahlen der 'positiven'
 *              Karten werden addiert und das Ergebnis ergibt die gedachte Zahl.
 */

window.onload = function loadGame() {

    initialize();

}

const cardArray1 =
    [

        '01', '03', '05', '07', '09', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29',
        '31', '33', '35', '37', '39', '41', '43', '45', '47', '49', '51', '53', '55', '57', '59',
        '61', '63'

    ];

const cardArray2 =
    [

        '02', '03', '06', '07', '10', '11', '14', '15', '18', '19', '22', '23', '26', '27', '30',
        '31', '34', '35', '38', '39', '42', '43', '46', '47', '50', '51', '54', '55', '58', '59',
        '62', '63'

    ];

const cardArray3 =
    [

        '04', '05', '06', '07', '12', '13', '14', '15', '20', '21', '22', '23', '28', '29', '30',
        '31', '36', '37', '38', '39', '44', '45', '46', '47', '52', '53', '54', '55', '60', '61',
        '62', '63'

    ];

const cardArray4 =
    [

        '08', '09', '10', '11', '12', '13', '14', '15', '24', '25', '26', '27', '28', '29', '30',
        '31', '40', '41', '42', '43', '44', '45', '46', '47', '56', '57', '58', '59', '60', '61',
        '62', '63'

    ];

const cardArray5 =
    [

        '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
        '31', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61',
        '62', '63'

    ];

const cardArray6 =
    [

        '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46',
        '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61',
        '62', '63'

    ];

function initialize() {

    LOGGING_ENABLED = false;
    EXPERIMENTAL_FEATURES_ENABLED = false;

    htmlElement = document.getElementById('showCards');

    level = 1;
    secretNumber = 0;
    arrayCollection = [];

    displayArrayValues(false);

    displayButtons(true, true, false);

}

function displayButtons(showButton1, showButton2, showButton3) {

    var buttonYesElement = document.getElementById('buttonYes');
    var buttonNoElement = document.getElementById('buttonNo');
    var buttonAgainElement = document.getElementById('buttonAgain');

    if (showButton1) {

        buttonYesElement.style.display = "initial";

        buttonYesElement.onclick = function() {

            displayArrayValues(true);

        }

    } else {

        buttonYesElement.style.display = "none";

    }

    if (showButton2) {

        buttonNoElement.style.display = "initial";

        buttonNoElement.onclick = function() {

            displayArrayValues(false);

        }

    } else {

        buttonNoElement.style.display = "none";

    }

    if (showButton3) {

        buttonAgainElement.style.display = "initial";

        buttonAgainElement.onclick = function() {

            if (LOGGING_ENABLED) {

                console.clear();

            }

            displayArrayValues(false);

        }

    } else {

        buttonAgainElement.style.display = "none";

    }

}

function displayArrayValues(userInput) {

    switch (getLevel()) {

        case 1:
            setSecretNumber(userInput, null);
            htmlArrayOutput(cardArray1);
            setLevel(); // 2
            displayButtons(true, true, false);
        break;
        case 2:
            setSecretNumber(userInput, cardArray1);
            htmlArrayOutput(cardArray2);
            setLevel(); // 3
            displayButtons(true, true, false);
        break;
        case 3:
            setSecretNumber(userInput, cardArray2);
            htmlArrayOutput(cardArray3);
            setLevel(); // 4
            displayButtons(true, true, false);
        break;
        case 4:
            setSecretNumber(userInput, cardArray3);
            htmlArrayOutput(cardArray4);
            setLevel(); // 5
            displayButtons(true, true, false);
        break;
        case 5:
            setSecretNumber(userInput, cardArray4);
            htmlArrayOutput(cardArray5);
            setLevel(); // 6
            displayButtons(true, true, false);
        break;
        case 6:
            setSecretNumber(userInput, cardArray5);
            htmlArrayOutput(cardArray6);
            setLevel(); // 7
            displayButtons(true, true, false);
        break;
        case 7:
            setSecretNumber(userInput, cardArray6);
            if (getSecretNumber() > 0) {

                htmlElement.innerHTML = `Du hast Dir die Zahl ${getSecretNumber()} ausgedacht!`;

            } else {

                htmlElement.innerHTML = `Warum so geheimnisvoll?`;

            }
            setLevel(); // 1
            displayButtons(false, false, true);

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

function getArrayCollection() {

    if (LOGGING_ENABLED) {

        console.log(`@getArrayCollection(): arrayCollection: ${arrayCollection}`);

    }

    return arrayCollection;

}

function setArrayCollection(array) {

    return (array != null) ? arrayCollection.push(array) : arrayCollection = [];

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

            if (EXPERIMENTAL_FEATURES_ENABLED) {

                if (getArrayCollection().length > 0) {

                    if (isValidUserInput(array)) {

                        setArrayCollection(array);

                        return secretNumber = getSecretNumber() + (Number(array[0]));

                    }

                    return getSecretNumber();

                }

            }

            setArrayCollection(array);

            return secretNumber = getSecretNumber() + (Number(array[0]));

        }

        return getSecretNumber();

    }

    setArrayCollection(null);

    return secretNumber = 0;

}

function isValidUserInput(array) {

    var temp = [];

    arr1 = getArrayCollection().toString().split(',').map(Number);
    arr2 = array.toString().split(',').map(Number);

    for ( var i in arr1) {

        if (arr2.includes(arr1[i])) {

            temp.push(arr1[i]);

        }

    }

    if (LOGGING_ENABLED) {

        console.log(`@isValidUserInput(): temp = ${temp}`);
    }

    return temp !== [];

}

function htmlArrayOutput(input) {

    return htmlElement.innerHTML = input.join(", ");

}

function sortArray(array) {

    function sortNumber(a, b) {

        return a - b;

    }

    array.sort(sortNumber);

    if (LOGGING_ENABLED) {

        console.log(`'${array.join("', '")}'`); // Hochkomma um die Array-Werte
    }

    return array.join(", ");

}
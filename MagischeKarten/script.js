/**
 * Magische Karten
 * 
 * @author Marcus Freund
 * @date 2018-08-06
 * @version 1.59
 * @description This library offers functions run a magic card game. The game
 *              works as follows: The player is told to think of a number
 *              between 1 and 63. The game starts with a card which displays 32
 *              numbers and overall 6 cards are shown to him. So he is asked six
 *              times overall if his guessed number is shown on the displayed
 *              cards. If he confirms, the first number of the card is stored
 *              and added to the possible numbers where he confirms too. The
 *              result is his guessed number.
 */

const LOGGING_ENABLED = false;

class MagicCard {
    
    constructor(cardNumbers, htmlElementId) {
        
        this.cardNumbers = cardNumbers;
        this.htmlElementId = htmlElementId;
        
    }

    get tableArray() {
        
        return this.createTableArray();
        
    }

    createTableArray() {

        const TABLE = document.createElement('table');
        TABLE.setAttribute('class', 'table');
        TABLE.setAttribute('id', this.htmlElementId);
        
        const TABLE_BODY = document.createElement('tbody');
        
        this.cardNumbers.forEach(function(rowData) {

            const ROW = document.createElement('tr');
            
            rowData.forEach(function(cellData) {

                const CELL = document.createElement('td');
                CELL.appendChild(document.createTextNode(cellData));
                ROW.appendChild(CELL);
            });
            TABLE_BODY.appendChild(ROW);
        });
        TABLE.appendChild(TABLE_BODY);
        
        return TABLE;
    }
    
 }

const NUMBERS_CARD_1 = 
    
    [
        '01', '03', '05', '07', '09', '11', '13', '15', '17', '19', '21', '23', '25', '27',
        '29', '31', '33', '35', '37', '39', '41', '43', '45', '47', '49', '51', '53', '55',
        '57', '59', '61', '63'
    ];

function sliceArray(array){
    
    return [
        [
            array.slice(0, 4).join(', ')
        ], [
            array.slice(4, 8).join(', ')
        ], [
            array.slice(8, 12).join(', ')
        ], [
            array.slice(12, 16).join(', ')
        ], [
            array.slice(16, 20).join(', ')
        ], [
            array.slice(20, 24).join(', ')
        ], [
            array.slice(24, 28).join(', ')
        ], [
            array.slice(28).join(', ')
        ]
    ];
    
}

function setCard(array, id) {
    
    return new MagicCard(sliceArray(array), id).tableArray;
    
}

function getNumbersCard1() {
    
    return NUMBERS_CARD_1;
    
}

function getCard1() {
    
    return card1;
    
}

const NUMBERS_CARD_2 = 
    
    [
        '02', '03', '06', '07', '10', '11', '14', '15', '18', '19', '22', '23', '26', '27',
        '30', '31', '34', '35', '38', '39', '42', '43', '46', '47', '50', '51', '54', '55',
        '58', '59', '62', '63'
    ];

function getNumbersCard2() {
    
    return NUMBERS_CARD_2;
    
}

function getCard2() {
    
    return card2;
    
}

const NUMBERS_CARD_3 =
    
    [
        '04', '05', '06', '07', '12', '13', '14', '15', '20', '21', '22', '23', '28', '29',
        '30', '31', '36', '37', '38', '39', '44', '45', '46', '47', '52', '53', '54', '55',
        '60', '61', '62', '63'
    ];

function getNumbersCard3() {
    
    return NUMBERS_CARD_3;
    
}

function getCard3() {
    
    return card3;
    
}

const NUMBERS_CARD_4 =
    
    [
        '08', '09', '10', '11', '12', '13', '14', '15', '24', '25', '26', '27', '28', '29',
        '30', '31', '40', '41', '42', '43', '44', '45', '46', '47', '56', '57', '58', '59',
        '60', '61', '62', '63'
    ];

function getNumbersCard4() {
    
    return NUMBERS_CARD_4;
    
}

function getCard4() {
    
    return card4;
    
}

const NUMBERS_CARD_5 =
    [
        '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29',
        '30', '31', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59',
        '60', '61', '62', '63'
    ];

function getNumbersCard5() {
    
    return NUMBERS_CARD_5;
    
}

function getCard5() {
    
    return card5;
    
}
    
const NUMBERS_CARD_6 =
    [
        '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45',
        '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59',
        '60', '61', '62', '63'
    ];

function getNumbersCard6() {
    
    return NUMBERS_CARD_6;
    
}

function getCard6() {
    
    return card6;
    
}

const CARD_1 = setCard(getNumbersCard1(), 'card1');
const CARD_2 = setCard(getNumbersCard2(), 'card2');
const CARD_3 = setCard(getNumbersCard3(), 'card3');
const CARD_4 = setCard(getNumbersCard4(), 'card4');
const CARD_5 = setCard(getNumbersCard5(), 'card5');
const CARD_6 = setCard(getNumbersCard6(), 'card6');

function createParagraph(id, string) {
    
    const PARAGRAPH = document.createElement('p');
    PARAGRAPH.setAttribute('class', 'p');
    PARAGRAPH.setAttribute('id', id);
    const TEXT_VALUE = document.createTextNode(string);
    PARAGRAPH.appendChild(TEXT_VALUE);
    return PARAGRAPH;
    
}

const INTRO = `Denke Dir nun bitte eine Zahl zwischen 1 und 63
    aus und beantworte mir, ob sie sich auf der unten
    dargestellten sowie den folgenden Karten (insgesamt 6)
    auftaucht:`;
const PARAGRAPH_INTRO = createParagraph('exerciseIntro', INTRO);

const OUTRO = `Ist Deine ausgedachte Zahl auf der obigen Karte dabei?`;
const PARAGRAPH_OUTRO = createParagraph('exerciseQuestion', OUTRO);

const NO_RESULT = `Warum so geheimnisvoll?`;
const PARAGRAPH_NO_RESULT = createParagraph('result', NO_RESULT);

function createButton(id, string) {

    const BUTTON = document.createElement('button');
    BUTTON.setAttribute('class', 'button');
    BUTTON.setAttribute('id', id);
    BUTTON.setAttribute('type', 'button');
    const TEXT_VALUE = document.createTextNode(string);
    BUTTON.appendChild(TEXT_VALUE);
    return BUTTON;
    
}

const BUTTON_YES = createButton('buttonYes', 'Ja');
const BUTTON_NO = createButton('buttonNo', 'Nein');
const BUTTON_AGAIN = createButton('buttonAgain', 'Nochmal');

const LEVEL_COUNTER = function() {
    
    let count = 1;

    this.getCount = function() {
        
        return count;
        
    };

    this.setCount = function(value) {
        
        return count = value;
        
    };

    this.increase = function() {
        
        count++;
        
    };
   
};

const LEVEL = new LEVEL_COUNTER();

function getLevel() {

    return LEVEL.getCount();
    
}

function setLevel(value) {

    return LEVEL.setCount(value);
    
}

function increaseLevel() {

    return LEVEL.increase();
    
}

const SECRET_NUMBER_CALCULATOR = function() {
    
    let count = 0;

    this.getCount = function() {
        
        return count;
        
    };

    this.setCount = function(value) {
        
        return count = value;
        
    };

    this.increase = function(number) {
        
        count += Number(number);
        
    };
   
};

const SECRET_NUMBER = new SECRET_NUMBER_CALCULATOR();

function getSecretNumber() {

    return SECRET_NUMBER.getCount();
    
}

function setSecretNumber(value) {

    return SECRET_NUMBER.setCount(value);
    
}

function increaseSecretNumber(number) {

    return SECRET_NUMBER.increase(number);
    
}

function runGame(htmlElementId, userInputYes) {

    switch (getLevel()) {
        
        case 1:
            console.clear();
            setSecretNumber(0);
            showHtmlElement(PARAGRAPH_INTRO);
            if (!getHtmlElementById(htmlElementId).childNodes[0]) {
                
                appendChildElement(htmlElementId, CARD_1);
                
            } else {
                
                replaceChildElement(htmlElementId, CARD_1);
                
            }
            showHtmlElement(PARAGRAPH_OUTRO);
            showHtmlElement(BUTTON_YES);
            showHtmlElement(BUTTON_NO);
            hideHtmlElement(BUTTON_AGAIN);
            increaseLevel(); // 2
            break;
        
        case 2:
            if (userInputYes) {
                
                increaseSecretNumber(getNumbersCard1()[0]);
                
            }
            replaceChildElement(htmlElementId, CARD_2);
            increaseLevel(); // 3
            break;
        
        case 3:
            if (userInputYes) {
                
                increaseSecretNumber(getNumbersCard2()[0]);
            
            }
            replaceChildElement(htmlElementId, CARD_3);
            increaseLevel(); // 4
            break;
        
        case 4:
            if (userInputYes) {
                
                increaseSecretNumber(getNumbersCard3()[0]);
                
            }
            replaceChildElement(htmlElementId, CARD_4);
            increaseLevel(); // 5
            break;
        
        case 5:
            if (userInputYes) {
                
                increaseSecretNumber(getNumbersCard4()[0]);
                
            }
            replaceChildElement(htmlElementId, CARD_5);
            increaseLevel(); // 6
            break;
        
        case 6:
            if (userInputYes) {
                
                increaseSecretNumber(getNumbersCard5()[0]);
                
            }
            replaceChildElement(htmlElementId, CARD_6);
            increaseLevel(); // 7
            break;
        
        case 7:
            if (userInputYes) {
                
                increaseSecretNumber(getNumbersCard6()[0]);
                
            }
            hideHtmlElement(PARAGRAPH_INTRO);
            hideHtmlElement(PARAGRAPH_OUTRO);
            hideHtmlElement(BUTTON_YES);
            hideHtmlElement(BUTTON_NO);
            showHtmlElement(BUTTON_AGAIN);
            replaceChildElement(htmlElementId, getResult());
            setLevel(1);
            break;
            
    }
    
    if (LOGGING_ENABLED) {
        
        console.log(`@runGame(): level: ${getLevel()}`);
        
    }
    
    if (LOGGING_ENABLED) {
        
        console.log(`@runGame(): secretNumber = ${getSecretNumber()}`);
        
    }
    
}

function getResult() {
    
    const RESULT = `Du hast Dir die Zahl ${getSecretNumber()} ausgedacht!`;
    const PARAGRAPH_RESULT = createParagraph('result', RESULT);

    if (getSecretNumber() > 0) {
        
        return PARAGRAPH_RESULT;
    
    } else {
        
        return PARAGRAPH_NO_RESULT;

    }
    
}

function getHtmlElementById(htmlElementId) {

    if (document.getElementById(htmlElementId) !== null) {
        
        return document.getElementById(htmlElementId);
        
    }
    return htmlElementId;
    
}

function appendChildElement(htmlElementId, childElement) {

    const HTML_ELEMENT = getHtmlElementById(htmlElementId);
    
    return HTML_ELEMENT.appendChild(childElement);
    
}

function replaceChildElement(htmlElementId, newChildElement) {

    const HTML_ELEMENT = getHtmlElementById(htmlElementId);
    const FIRST_CHILD_NODE = HTML_ELEMENT.childNodes[0];
    
    return HTML_ELEMENT.replaceChild(newChildElement, FIRST_CHILD_NODE);
    
}

function showHtmlElement(htmlElementId) {

    const HTML_ELEMENT = getHtmlElementById(htmlElementId);
    
    if (LOGGING_ENABLED) {
        
        console.log(`@showHtmlElement(): HTML_ELEMENT: ${HTML_ELEMENT}`);
    
    }
    
    if (HTML_ELEMENT.getAttribute('type') === 'button') {
        
        return HTML_ELEMENT.style.display = 'inline-block';
        
    }
    
    return HTML_ELEMENT.style.visibility = 'visible';
    
}

function hideHtmlElement(htmlElementId) {

    const HTML_ELEMENT = getHtmlElementById(htmlElementId);
    
    if (LOGGING_ENABLED) {
        
        console.log(`@hideHtmlElement(): HTML_ELEMENT: ${HTML_ELEMENT}`);
        
    }
    
    if (HTML_ELEMENT.getAttribute('type') === 'button') {
        
        return HTML_ELEMENT.style.display = 'none';
        
    }
    
    return HTML_ELEMENT.style.visibility = 'hidden';
    
}
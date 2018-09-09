/**
 * MagicCardsGame library
 * 
 * @author Marcus Freund
 * @version 1.6.7
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

const DOCUMENT = document;

class MagicCard {

    constructor(htmlElementId, cardNumbers) {

        this._htmlElementId = htmlElementId;
        this._cardNumbers = cardNumbers;

    }

    get cardNumbers() {

        return this._cardNumbers;

    }

    set cardNumbers(numbers) {

        this._cardNumbers = numbers;

    }

    get cardNumberTable() {

        return this.createCardNumberTable();

    }

    createCardNumberTable() {

        const HTML_ELEMENT_ID = this._htmlElementId;
        const CARD_NUMBERS = sliceNumbers(this._cardNumbers);

        const TABLE = DOCUMENT.createElement('table');
        TABLE.setAttribute('class', 'table');
        TABLE.setAttribute('id', HTML_ELEMENT_ID);
        const TABLE_BODY = DOCUMENT.createElement('tbody');
        CARD_NUMBERS.forEach(function(rowData) {

            const ROW = DOCUMENT.createElement('tr');
            const ROW_DATA = rowData;
            ROW_DATA.forEach(function(cellData) {

                const CELL = DOCUMENT.createElement('td');
                $(CELL).append(DOCUMENT.createTextNode(cellData));
                $(ROW).append(CELL);

            });

            $(TABLE_BODY).append(ROW);

        });

        $(TABLE).append(TABLE_BODY);
        return TABLE;

    }

}

function sliceNumbers(numbers) {

    const cachedNumbers = numbers;

    return [
        [
            cachedNumbers.slice(0, 4).join(', ')
        ],
        [
            cachedNumbers.slice(4, 8).join(', ')
        ],
        [
            cachedNumbers.slice(8, 12).join(', ')
        ],
        [
            cachedNumbers.slice(12, 16).join(', ')
        ],
        [
            cachedNumbers.slice(16, 20).join(', ')
        ],
        [
            cachedNumbers.slice(20, 24).join(', ')
        ],
        [
            cachedNumbers.slice(24, 28).join(', ')
        ],
        [
            cachedNumbers.slice(28).join(', ')
        ]
    ];

}

const NUMBERS_CARD_1 =

    [
        '01', '03', '05', '07', '09', '11', '13', '15', '17', '19', '21', '23', '25', '27',
        '29', '31', '33', '35', '37', '39', '41', '43', '45', '47', '49', '51', '53', '55',
        '57', '59', '61', '63'
    ];

function getNumbersCard1() {

    return NUMBERS_CARD_1;

}

const CARD_1 = new MagicCard('card1', getNumbersCard1());

function getCard1() {

    return CARD_1;

}

const CARD_1_TABLE = getCard1().cardNumberTable;

function getTableCard1() {

    return CARD_1_TABLE;

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

const CARD_2 = new MagicCard('card2', getNumbersCard2());

function getCard2() {

    return CARD_2;

}

const CARD_2_TABLE = getCard2().cardNumberTable;

function getTableCard2() {

    return CARD_2_TABLE;

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

const CARD_3 = new MagicCard('card3', getNumbersCard3());

function getCard3() {

    return CARD_3;

}

const CARD_3_TABLE = getCard3().cardNumberTable;

function getTableCard3() {

    return CARD_3_TABLE;

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

const CARD_4 = new MagicCard('card4', getNumbersCard4());

function getCard4() {

    return CARD_4;

}

const CARD_4_TABLE = getCard4().cardNumberTable;

function getTableCard4() {

    return CARD_4_TABLE;

}

const NUMBERS_CARD_5 = [
    '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29',
    '30', '31', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59',
    '60', '61', '62', '63'
];

function getNumbersCard5() {

    return NUMBERS_CARD_5;

}

const CARD_5 = new MagicCard('card5', getNumbersCard5());

function getCard5() {

    return CARD_5;

}

const CARD_5_TABLE = getCard5().cardNumberTable;

function getTableCard5() {

    return CARD_5_TABLE;

}

const NUMBERS_CARD_6 = [
    '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45',
    '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59',
    '60', '61', '62', '63'
];

function getNumbersCard6() {

    return NUMBERS_CARD_6;

}

const CARD_6 = new MagicCard('card6', getNumbersCard6());

function getCard6() {

    return CARD_6;

}

const CARD_6_TABLE = getCard6().cardNumberTable;

function getTableCard6() {

    return CARD_6_TABLE;

}

function createParagraphElement(id, string) {

    const PARAGRAPH = DOCUMENT.createElement('p');
    PARAGRAPH.setAttribute('class', 'p');
    PARAGRAPH.setAttribute('id', id);
    $(PARAGRAPH).prepend(DOCUMENT.createTextNode(string));
    return PARAGRAPH;

}

const INTRO =
    `Ueberlege Dir nun bitte eine Zahl zwischen 1 und 63 und sage mir, ob sie sich auf der unten dargestellten sowie den folgenden Zahlenkarten (insgesamt 6) auftaucht:`;
const PARAGRAPH_INTRO = createParagraphElement('exerciseIntro', INTRO);

const OUTRO = `Ist Deine ausgedachte Zahl auf der obigen Karte dabei?`;
const PARAGRAPH_OUTRO = createParagraphElement('exerciseOutro', OUTRO);

const NO_RESULT = `Warum so geheimnisvoll?`;
const PARAGRAPH_NO_RESULT = createParagraphElement('result', NO_RESULT);

function createButtonElement(id, string) {

    const BUTTON = DOCUMENT.createElement('button');
    BUTTON.setAttribute('class', 'button');
    BUTTON.setAttribute('id', id);
    BUTTON.setAttribute('type', 'button');
    $(BUTTON).prepend(DOCUMENT.createTextNode(string));
    return BUTTON;

}

const BUTTON_YES = createButtonElement('buttonYes', 'Ja');
const BUTTON_NO = createButtonElement('buttonNo', 'Nein');
const BUTTON_AGAIN = createButtonElement('buttonAgain', 'Nochmal');

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

function runGame(htmlElement, userInputYes) {

    const LEVEL = getLevel();
    switch (LEVEL) {

        case 1:
            if (LOGGING_ENABLED) {

                console.clear();

            }
            setSecretNumber(0);
            showHtmlElement(PARAGRAPH_INTRO);
            $(htmlElement).empty().append(getTableCard1());
            showHtmlElement(PARAGRAPH_OUTRO);
            showHtmlElement(BUTTON_YES);
            showHtmlElement(BUTTON_NO);
            hideHtmlElement(BUTTON_AGAIN);
            increaseLevel(); // 2
            break;

        case 2:
            if (userInputYes) {

                increaseSecretNumber(getCard1().cardNumbers[0]);

            }
            $(htmlElement).empty().append(getTableCard2());
            increaseLevel(); // 3
            break;

        case 3:
            if (userInputYes) {

                increaseSecretNumber(getCard2().cardNumbers[0]);

            }
            $(htmlElement).empty().append(getTableCard3());
            increaseLevel(); // 4
            break;

        case 4:
            if (userInputYes) {

                increaseSecretNumber(getCard3().cardNumbers[0]);

            }
            $(htmlElement).empty().append(getTableCard4());
            increaseLevel(); // 5
            break;

        case 5:
            if (userInputYes) {

                increaseSecretNumber(getCard4().cardNumbers[0]);

            }
            $(htmlElement).empty().append(getTableCard5());
            increaseLevel(); // 6
            break;

        case 6:
            if (userInputYes) {

                increaseSecretNumber(getCard5().cardNumbers[0]);

            }
            $(htmlElement).empty().append(getTableCard6());
            increaseLevel(); // 7
            break;

        case 7:
            if (userInputYes) {

                increaseSecretNumber(getCard6().cardNumbers[0]);

            }
            hideHtmlElement(PARAGRAPH_INTRO);
            hideHtmlElement(PARAGRAPH_OUTRO);
            hideHtmlElement(BUTTON_YES);
            hideHtmlElement(BUTTON_NO);
            showHtmlElement(BUTTON_AGAIN);
            $(htmlElement).empty().append(getResult());
            setLevel(1);
            break;

    }

    if (LOGGING_ENABLED) {

        console.log(`@runGame(): level: ${LEVEL}`);

    }

    if (LOGGING_ENABLED) {

        console.log(`@runGame(): secretNumber = ${getSecretNumber()}`);

    }

}

function getResult() {

    const RESULT = `Du hast Dir die Zahl ${getSecretNumber()} ausgedacht!`;
    const PARAGRAPH_RESULT = createParagraphElement('result', RESULT);

    if (getSecretNumber() > 0) {

        return PARAGRAPH_RESULT;

    } else {

        return PARAGRAPH_NO_RESULT;

    }

}

function showHtmlElement(htmlElement) {

    if (LOGGING_ENABLED) {

        console.log(`@showHtmlElement(): htmlElement: ${htmlElement}`);

    }

    if (htmlElement.getAttribute('type') === 'button') {

        return htmlElement.style.display = 'inline-block';

    }

    return htmlElement.style.visibility = 'visible';

}

function hideHtmlElement(htmlElement) {

    if (LOGGING_ENABLED) {

        console.log(`@hideHtmlElement(): htmlElement: ${htmlElement}`);

    }

    if (htmlElement.getAttribute('type') === 'button') {

        return htmlElement.style.display = 'none';

    }

    return htmlElement.style.visibility = 'hidden';

}
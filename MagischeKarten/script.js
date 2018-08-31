/**
 * Magische Karten
 * 
 * @author Marcus Freund
 * @date 2018-08-06
 * @version 1.55
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

        let table = document.createElement('table');
        table.setAttribute('class', 'table');
        table.setAttribute('id', this.htmlElementId);
        
        let tableBody = document.createElement('tbody');
        
        this.cardNumbers.forEach(function(rowData) {

            let row = document.createElement('tr');
            
            rowData.forEach(function(cellData) {

                let cell = document.createElement('td');
                cell.appendChild(document.createTextNode(cellData));
                row.appendChild(cell);
            });
            tableBody.appendChild(row);
        });
        table.appendChild(tableBody);
        
        return table;
    }
    
 }

const paragraphExerciseIntro = getParagraphExerciseIntro();
const paragraphExerciseQuestion = getParagraphExerciseQuestion();

let level;

let buttonYes, buttonNo, buttonAgain;

let secretNumber;

const paragraphNoResult = getParagraphNoResult();
const paragraphResult = getParagraphResult();

function initialize() {

    setButtons();
    
}

const numbersCard1 = 
    
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
    
    return numbersCard1;
    
}

function getCard1() {
    
    return card1;
    
}

const numbersCard2 = 
    
    [
        '02', '03', '06', '07', '10', '11', '14', '15', '18', '19', '22', '23', '26', '27',
        '30', '31', '34', '35', '38', '39', '42', '43', '46', '47', '50', '51', '54', '55',
        '58', '59', '62', '63'
    ];

function getNumbersCard2() {
    
    return numbersCard2;
    
}

function getCard2() {
    
    return card2;
    
}

const numbersCard3 =
    
    [
        '04', '05', '06', '07', '12', '13', '14', '15', '20', '21', '22', '23', '28', '29',
        '30', '31', '36', '37', '38', '39', '44', '45', '46', '47', '52', '53', '54', '55',
        '60', '61', '62', '63'
    ];

function getNumbersCard3() {
    
    return numbersCard3;
    
}

function getCard3() {
    
    return card3;
    
}

const numbersCard4 =
    
    [
        '08', '09', '10', '11', '12', '13', '14', '15', '24', '25', '26', '27', '28', '29',
        '30', '31', '40', '41', '42', '43', '44', '45', '46', '47', '56', '57', '58', '59',
        '60', '61', '62', '63'
    ];

function getNumbersCard4() {
    
    return numbersCard4;
    
}

function getCard4() {
    
    return card4;
    
}

const numbersCard5 =
    [
        '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29',
        '30', '31', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59',
        '60', '61', '62', '63'
    ];

function getNumbersCard5() {
    
    return numbersCard5;
    
}

function getCard5() {
    
    return card5;
    
}
    
const numbersCard6 =
    [
        '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45',
        '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59',
        '60', '61', '62', '63'
    ];

function getNumbersCard6() {
    
    return numbersCard6;
    
}

function getCard6() {
    
    return card6;
    
}

const card1 = setCard(getNumbersCard1(), 'card1');
const card2 = setCard(getNumbersCard2(), 'card2');
const card3 = setCard(getNumbersCard3(), 'card3');
const card4 = setCard(getNumbersCard4(), 'card4');
const card5 = setCard(getNumbersCard5(), 'card5');
const card6 = setCard(getNumbersCard6(), 'card6');

function createParagraph(id, string) {
    
    let paragraph = document.createElement('p');
    paragraph.setAttribute('class', 'p');
    paragraph.setAttribute('id', id);
    const textValue = document.createTextNode(string);
    paragraph.appendChild(textValue);
    return paragraph;
    
}

function getParagraphExerciseIntro() {
    
    const textNode = `Denke Dir nun bitte eine Zahl zwischen 1 und 63
        aus und beantworte mir, ob sie sich auf der unten
        dargestellten sowie den folgenden Karten (insgesamt 6)
        auftaucht:`;
    
    return createParagraph('exerciseIntro', textNode);
    
}

function getParagraphExerciseQuestion() {

    const textNode = `Ist Deine ausgedachte Zahl auf der obigen Karte dabei?`;
    
    return createParagraph('exerciseQuestion', textNode);
    
}

function getParagraphNoResult() {

    const textNode = `Warum so geheimnisvoll?`;
    
    return createParagraph('result', textNode);
    
}

function getParagraphResult() {

    const textNode = `Du hast Dir die Zahl ${getSecretNumber()} ausgedacht!`;
    
    return createParagraph('result', textNode);
    
}

function createButton(id, string) {

    let button = document.createElement('button');
    button.setAttribute('class', 'button');
    button.setAttribute('id', id);
    button.setAttribute('type', 'button');
    const textValue = document.createTextNode(string);
    button.appendChild(textValue);
    return button;
    
}

function setButtons() {

    buttonYes = createButton('buttonYes', 'Ja');
    buttonNo = createButton('buttonNo', 'Nein');
    buttonAgain = createButton('buttonAgain', 'Nochmal');
    
}

function runGame(htmlElementId, userInput) {

    switch (getLevel()) {
        
        case 1:
            setSecretNumber(htmlElementId, 0);
            showHtmlElement(paragraphExerciseIntro);
            if (!getHtmlElementById(htmlElementId).childNodes[0]) {
                
                appendChildElement(htmlElementId, card1);
                
            } else {
                
                replaceChildElement(htmlElementId, card1);
                
            }
            showHtmlElement(paragraphExerciseQuestion);
            showHtmlElement(buttonYes);
            showHtmlElement(buttonNo);
            hideHtmlElement(buttonAgain);
            setLevel(); // 2
            break;
        
        case 2:
            setSecretNumber(userInput, getNumbersCard1()[0]);
            replaceChildElement(htmlElementId, card2);
            setLevel(); // 3
            break;
        
        case 3:
            setSecretNumber(userInput, getNumbersCard2()[0]);
            replaceChildElement(htmlElementId, card3);
            setLevel(); // 4
            break;
        
        case 4:
            setSecretNumber(userInput, getNumbersCard3()[0]);
            replaceChildElement(htmlElementId, card4);
            setLevel(); // 5
            break;
        
        case 5:
            setSecretNumber(userInput, getNumbersCard4()[0]);
            replaceChildElement(htmlElementId, card5);
            setLevel(); // 6
            break;
        
        case 6:
            setSecretNumber(userInput, getNumbersCard5()[0]);
            replaceChildElement(htmlElementId, card6);
            setLevel(); // 7
            break;
        
        case 7:
            setSecretNumber(userInput, getNumbersCard6()[0]);
            hideHtmlElement(paragraphExerciseIntro);
            hideHtmlElement(paragraphExerciseQuestion);
            hideHtmlElement(buttonYes);
            hideHtmlElement(buttonNo);
            showHtmlElement(buttonAgain);
            replaceChildElement(htmlElementId, getResult());
            setLevel(); // 1
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
    
    if (getSecretNumber() > 0) {
        
        return getParagraphResult();
    
    } else {
        
        return getParagraphNoResult();

    }
    
}


function setLevel() {

    return (getLevel() < 7) ? level++ : level = 1;
    
}

function getLevel() {

    return !level ? (level = 1) : level;
    
}

function setSecretNumber(userInputYes, number) {

    if (LOGGING_ENABLED) {
        
        console.log(`@setSecretNumber(): number: ${Number(number)}`);
        
    }
    
    return userInputYes && Number(number) ? secretNumber += Number(number) : getSecretNumber();
    
}

function getSecretNumber() {

    return !secretNumber || (getLevel() === 1) ? secretNumber = 0 : secretNumber;
    
}

function getHtmlElementById(htmlElementId) {

    if (document.getElementById(htmlElementId) !== null) {
        
        return document.getElementById(htmlElementId);
        
    }
    return htmlElementId;
    
}

function appendChildElement(htmlElementId, childElement) {

    const htmlElement = getHtmlElementById(htmlElementId);
    
    return htmlElement.appendChild(childElement);
    
}

function replaceChildElement(htmlElementId, newChildElement) {

    const htmlElement = getHtmlElementById(htmlElementId);
    const firstChildNode = htmlElement.childNodes[0];
    
    return htmlElement.replaceChild(newChildElement, firstChildNode);
    
}

function showHtmlElement(htmlElementId) {

    const htmlElement = getHtmlElementById(htmlElementId);
    
    if (LOGGING_ENABLED) {
        
        console.log(`@showHtmlElement(): htmlElement: ${htmlElement}`);
    
    }
    
    if (htmlElement.getAttribute('type') === 'button') {
        
        return htmlElement.style.display = 'inline-block';
        
    }
    
    return htmlElement.style.visibility = 'visible';
    
}

function hideHtmlElement(htmlElementId) {

    const htmlElement = getHtmlElementById(htmlElementId);
    
    if (LOGGING_ENABLED) {
        
        console.log(`@hideHtmlElement(): htmlElement: ${htmlElement}`);
        
    }
    
    if (htmlElement.getAttribute('type') === 'button') {
        
        return htmlElement.style.display = 'none';
        
    }
    
    return htmlElement.style.visibility = 'hidden';
    
}
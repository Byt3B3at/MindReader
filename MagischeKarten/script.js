/**
 * Magische Karten
 * 
 * @author Marcus Freund
 * @date 2018-08-06
 * @version 1.5
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

let array1, array2, array3, array4, array5, array6;
let array1Table, array2Table, array3Table, array4Table, array5Table, array6Table;
let buttonYes, buttonNo, buttonAgain;
let level;
let paragraph1, paragraph2;
let secretNumber;

function initialize() {

    setArrays();
    setButtons();
    setParagraphs();
    setTables();
    
}

function createParagraph(id, string) {
    
    let paragraph = document.createElement('p');
    paragraph.setAttribute('class', 'p');
    paragraph.setAttribute('id', id);
    const textValue = document.createTextNode(string);
    paragraph.appendChild(textValue);
    return paragraph;
    
}

function setParagraphs() {

    paragraph1 = createParagraph('exerciseIntro', 
        `Denke Dir nun bitte eine Zahl zwischen 1 und 63
        aus und beantworte mir, ob sie sich auf der unten
        dargestellten sowie den folgenden Karten (insgesamt 6)
        auftaucht:`)
    paragraph2 = createParagraph('exerciseQuestion', 
        `Ist Deine ausgedachte Zahl auf der obigen Karte dabei?`)
    
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

function setArrays() {

    array1 =
        [
            
            '01', '03', '05', '07', '09', '11', '13', '15', '17', '19', '21', '23', '25', '27',
            '29', '31', '33', '35', '37', '39', '41', '43', '45', '47', '49', '51', '53', '55',
            '57', '59', '61', '63'
        
        ];
    
    array2 =
        [
            
            '02', '03', '06', '07', '10', '11', '14', '15', '18', '19', '22', '23', '26', '27',
            '30', '31', '34', '35', '38', '39', '42', '43', '46', '47', '50', '51', '54', '55',
            '58', '59', '62', '63'
        
        ];
    
    array3 =
        [
            
            '04', '05', '06', '07', '12', '13', '14', '15', '20', '21', '22', '23', '28', '29',
            '30', '31', '36', '37', '38', '39', '44', '45', '46', '47', '52', '53', '54', '55',
            '60', '61', '62', '63'
        
        ];
    
    array4 =
        [
            
            '08', '09', '10', '11', '12', '13', '14', '15', '24', '25', '26', '27', '28', '29',
            '30', '31', '40', '41', '42', '43', '44', '45', '46', '47', '56', '57', '58', '59',
            '60', '61', '62', '63'
        
        ];
    
    array5 =
        [
            
            '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29',
            '30', '31', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59',
            '60', '61', '62', '63'
        
        ];
    
    array6 =
        [
            
            '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45',
            '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59',
            '60', '61', '62', '63'
        
        ];
    
}

function createTable(tableData, id) {

    let table = document.createElement('table');
    table.setAttribute('class', 'table');
    table.setAttribute('id', id);
    
    let tableBody = document.createElement('tbody');
    
    tableData.forEach(function(rowData) {

        var row = document.createElement('tr');
        
        rowData.forEach(function(cellData) {

            var cell = document.createElement('td');
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });
    table.appendChild(tableBody);
    
    return table;
}

function setTables() {

    array1Table = createTable([
        [
            array1.slice(0, 4).join(', ')
        ], [
            array1.slice(4, 8).join(', ')
        ], [
            array1.slice(8, 12).join(', ')
        ], [
            array1.slice(12, 16).join(', ')
        ], [
            array1.slice(16, 20).join(', ')
        ], [
            array1.slice(20, 24).join(', ')
        ], [
            array1.slice(24, 28).join(', ')
        ], [
            array1.slice(28).join(', ')
        ]
    ], 'array1Table');
    
    array2Table = createTable([
        [
            array2.slice(0, 4).join(', ')
        ], [
            array2.slice(4, 8).join(', ')
        ], [
            array2.slice(8, 12).join(', ')
        ], [
            array2.slice(12, 16).join(', ')
        ], [
            array2.slice(16, 20).join(', ')
        ], [
            array2.slice(20, 24).join(', ')
        ], [
            array2.slice(24, 28).join(', ')
        ], [
            array2.slice(28).join(', ')
        ]
    ], 'array2Table');
    
    array3Table = createTable([
        [
            array3.slice(0, 4).join(', ')
        ], [
            array3.slice(4, 8).join(', ')
        ], [
            array3.slice(8, 12).join(', ')
        ], [
            array3.slice(12, 16).join(', ')
        ], [
            array3.slice(16, 20).join(', ')
        ], [
            array3.slice(20, 24).join(', ')
        ], [
            array3.slice(24, 28).join(', ')
        ], [
            array3.slice(28).join(', ')
        ]
    ], 'array3Table');
    
    array4Table = createTable([
        [
            array4.slice(0, 4).join(', ')
        ], [
            array4.slice(4, 8).join(', ')
        ], [
            array4.slice(8, 12).join(', ')
        ], [
            array4.slice(12, 16).join(', ')
        ], [
            array4.slice(16, 20).join(', ')
        ], [
            array4.slice(20, 24).join(', ')
        ], [
            array4.slice(24, 28).join(', ')
        ], [
            array4.slice(28).join(', ')
        ]
    ], 'array4Table');
    
    array5Table = createTable([
        [
            array5.slice(0, 4).join(', ')
        ], [
            array5.slice(4, 8).join(', ')
        ], [
            array5.slice(8, 12).join(', ')
        ], [
            array5.slice(12, 16).join(', ')
        ], [
            array5.slice(16, 20).join(', ')
        ], [
            array5.slice(20, 24).join(', ')
        ], [
            array5.slice(24, 28).join(', ')
        ], [
            array5.slice(28).join(', ')
        ]
    ], 'array5Table');
    
    array6Table = createTable([
        [
            array6.slice(0, 4).join(', ')
        ], [
            array6.slice(4, 8).join(', ')
        ], [
            array6.slice(8, 12).join(', ')
        ], [
            array6.slice(12, 16).join(', ')
        ], [
            array6.slice(16, 20).join(', ')
        ], [
            array6.slice(20, 24).join(', ')
        ], [
            array6.slice(24, 28).join(', ')
        ], [
            array6.slice(28).join(', ')
        ]
    ], 'array6Table');
    
}

function getArrayValues(htmlElementId, userInput) {

    switch (getLevel()) {
        
        case 1:
            setSecretNumber(null, false);
            showHtmlElement(paragraph1);
            if (!getHtmlElementById(htmlElementId).childNodes[0]) {
                
                appendChildElement(htmlElementId, array1Table);
                
            } else {
                
                replaceChildElement(htmlElementId, array1Table);
                
            }
            showHtmlElement(paragraph2);
            showHtmlElement(buttonYes);
            showHtmlElement(buttonNo);
            hideHtmlElement(buttonAgain);
            setLevel(); // 2
            break;
        
        case 2:
            setSecretNumber(userInput, array1);
            replaceChildElement(htmlElementId, array2Table);
            setLevel(); // 3
            break;
        
        case 3:
            setSecretNumber(userInput, array2);
            replaceChildElement(htmlElementId, array3Table);
            setLevel(); // 4
            break;
        
        case 4:
            setSecretNumber(userInput, array3);
            replaceChildElement(htmlElementId, array4Table);
            setLevel(); // 5
            break;
        
        case 5:
            setSecretNumber(userInput, array4);
            replaceChildElement(htmlElementId, array5Table);
            setLevel(); // 6
            break;
        
        case 6:
            setSecretNumber(userInput, array5);
            replaceChildElement(htmlElementId, array6Table);
            setLevel(); // 7
            break;
        
        case 7:
            setSecretNumber(userInput, array6);
            hideHtmlElement(paragraph1);
            hideHtmlElement(paragraph2);
            hideHtmlElement(buttonYes);
            hideHtmlElement(buttonNo);
            showHtmlElement(buttonAgain);
            replaceChildElement(htmlElementId, getResult());
            setLevel(); // 1
            
    }
    
    if (LOGGING_ENABLED) {
        
        console.log(`@getArrayValues(): level: ${getLevel()}`);
        
    }
    
    if (LOGGING_ENABLED) {
        
        console.log(`@getArrayValues(): secretNumber = ${getSecretNumber()}`);
        
    }
    
}

function getResult() {
    
    if (getSecretNumber() > 0) {
        
        return createParagraph('result', `Du hast Dir die Zahl ${getSecretNumber()} ausgedacht!`);
    
    } else {
        
        return createParagraph('result', `Warum so geheimnisvoll?`);

    }
    
}


function setLevel() {

    return (getLevel() < 7) ? level++ : level = 1;
    
}

function getLevel() {

    return !level ? level = 1 : level;
    
}

function setSecretNumber(userInputYes, array) {

    return (userInputYes && array) ? secretNumber += (Number(array[0])) : getSecretNumber();
    
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

function replaceFirstChildNode(htmlElementId, newChildNode) {

    const htmlElement = getHtmlElementById(htmlElementId);
    const firstChildNode = htmlElement.childNodes[0];
    
    return firstChildNode.replaceChild(newChildNode, firstChildNode.childNodes[0]);
    
}

function replaceChildElement(htmlElementId, newChildElement) {

    const htmlElement = getHtmlElementById(htmlElementId);
    const firstChildNode = htmlElement.childNodes[0];
    
    return htmlElement.replaceChild(newChildElement, firstChildNode);
    
}

function showHtmlElement(htmlElementId) {

    const htmlElement = getHtmlElementById(htmlElementId);
    
    if (LOGGING_ENABLED) {
        
        console.log(htmlElement);
    
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
// Write your code below

let text_areas = document.getElementsByTagName("textarea");
let buttons = document.getElementsByTagName("button");

let bigDiv = document.createElement('div');
document.querySelector('section').appendChild(bigDiv);


buttons[0].addEventListener('click', function (event) {
    let avatar = document.createElement('img');
    let message = text_areas[0].value;
    let pElement = document.createElement('p');
    let buttonElement = document.createElement('span');


    avatar.setAttribute('src', 'https://randomuser.me/api/portraits/thumb/men/45.jpg')
    avatar.setAttribute('class', 'left');
    pElement.setAttribute('class', 'left');
    buttonElement.setAttribute('class', 'cancel');


    let text = document.createTextNode(message);
    let xText = document.createTextNode('X');


    document.querySelector('div').appendChild(avatar);
    pElement.appendChild(text);
    buttonElement.appendChild(xText);
    pElement.appendChild(buttonElement);
    document.querySelector('div').appendChild(pElement);

    buttonElement.addEventListener('click', function (event) {
        avatar.remove();
        pElement.remove();

    })

})

buttons[1].addEventListener('click', function (event) {
    let avatar = document.createElement('img');
    let message = text_areas[1].value;
    let pElement = document.createElement('p');
    let buttonElement = document.createElement('span');


    pElement.setAttribute('class', 'right');
    buttonElement.setAttribute('class', 'cancel');
    avatar.setAttribute('src', 'https://randomuser.me/api/portraits/thumb/men/75.jpg')
    avatar.setAttribute('class', 'right');

    let text = document.createTextNode(message);
    let xText = document.createTextNode('X');

    buttonElement.appendChild(xText);
    pElement.appendChild(text);
    pElement.appendChild(buttonElement);

    document.querySelector('div').appendChild(pElement);
    document.querySelector('div').appendChild(avatar);

    buttonElement.addEventListener('click', function (event) {
        avatar.remove();
        pElement.remove();

    })

})


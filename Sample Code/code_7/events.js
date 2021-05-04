let counter = 1;
let btn = document.querySelector('button');
btn.addEventListener('click', function(event) {
    let img = document.querySelector('img');
    let imgSrc = 'https://randomuser.me/api/portraits/men/' + counter  + '.jpg';
    
    img.src = imgSrc;
    
    counter = counter + 1;
    
    // the images go from 1 to 99, need to reset value of counter
    // if the value reaches 100
    if (counter==100) {
        counter = 1;
    }
})

let img = document.querySelector('img');
img.addEventListener('mouseover', function(event) {
    let element = event.target; // we also know that event.target = img in this case
    element.style.width = '175px';
    element.style.height = '175px';
});
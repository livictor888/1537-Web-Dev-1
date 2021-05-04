// add a new list item with an image
let li = document.createElement('li');
let img = document.createElement('img');
img.src = "https://randomuser.me/api/portraits/med/men/89.jpg";
li.appendChild(img);
document.querySelector('#featuredartists ul').appendChild(li);
                   
// remove the last menu item
// document.querySelector('header li:nth-child(5)').remove();
// or
document.querySelector('header li:last-child').remove();
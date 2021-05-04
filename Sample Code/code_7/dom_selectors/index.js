console.group(' -- document.getElementByID -- ');
    console.log('Get the element with id = page_home');

    let page_home = document.getElementById('page_home');
    console.log(page_home);

    console.log('Get the element with id = comingtoevent');

    let comingtoevent = document.getElementById('comingtoevent');
    console.log(comingtoevent);
console.groupEnd();

//----------------------------------------------------------------

console.group(' -- document.getElementsByTagName -- ');
    console.log('Get all listitems (<li>)');

    let lis = document.getElementsByTagName('li');
    console.log(lis);

    console.log('Get only those listitems which are within the id = featuredartists');

    let lis_within_featuredartists = document.
                                            getElementById('featuredartists').
                                            getElementsByTagName('li');
    console.log(lis_within_featuredartists);
console.groupEnd();

//----------------------------------------------------------------

console.group(' -- document.getElementsByClassName -- ');
    console.log('Get all elements which have a class of group');

    let group = document.getElementsByClassName('group');
    console.log(group);

console.groupEnd();

//----------------------------------------------------------------

console.log("%cJust like we write css selectors, we follow the same syntax",  "color: white; font-style: italic; background-color: teal;padding: 2px");
console.log("%cwhen using querySelector and querySelectorAll to target matching elements", "color: white; font-style: italic; background-color: teal;padding: 2px" );
console.log("%cthe following using the Descendant combinator: https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator#Syntax", "color: white; font-style: italic; background-color: teal;padding: 2px" )


//----------------------------------------------------------------
console.group(' -- document.querySelector -- ');
    console.log('Get the first instance of h3 within the id = schedule');

    let h3_first_instance = document.querySelector('#schedule h3');
    console.log(h3_first_instance);

console.groupEnd();

//----------------------------------------------------------------

console.group(' -- document.querySelectorAll -- ');
    console.log('Get all h3 within the id = schedule');

    let h3_all = document.querySelectorAll('#schedule h3');
    console.log(h3_all);

console.groupEnd();

// ------------------------------------------------------------------


function darkMode() {
    let linkText = document.querySelectorAll('a');

    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('h1').style.color = 'white';
    document.querySelector('h1').style.borderBottomColor = 'white';
    document.querySelector('div').style.borderLeftColor = 'white';
    document.querySelector('ol').style.color = 'white';
    linkText[0].style.color = 'lightblue';
    linkText[1].style.color = 'lightblue';
    linkText[2].style.color = 'lightblue';
    document.querySelector('h2').style.color = 'white';
    document.querySelector('p').style.color = 'white';
}
function lightMode() {
    let linkText = document.querySelectorAll('a');

    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('h1').style.color = 'black';
    document.querySelector('h1').style.borderBottomColor = 'black';
    document.querySelector('div').style.borderLeftColor = 'black';
    document.querySelector('ol').style.color = 'black';
    linkText[0].style.color = 'red';
    linkText[1].style.color = 'red';
    linkText[2].style.color = 'red';
    document.querySelector('h2').style.color = 'black';
    document.querySelector('p').style.color = 'black';
}
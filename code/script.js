/*This is the userName function which is triggered after enterting a name. Create a variable using getElementById to access the input field elemt in HTML */
/* Reading material about getElementById: https://www.w3schools.com/jsref/met_document_getelementbyid.asp */
/*The we create a variable userName which is the one that stores the name entered by the user*/
/*This function generates a sentence contained inside the h2 element with id name-greeting using the user's name, we can use the name entered by the user in this sentence because it has been saved in the variable userName*/
/* We use template literals to construct that sentence where the name is replaced by that variable using template literals*/
/*Info on template literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals */
/*The next question is now displayed by changing its display CSS property from none to block, this happens on the last step of this userName function*/
/*The question is inside the div with id user-number which is hidden by having a CSS rule for it display: none */

const userName = () => {
    const nameField = document.getElementById('input-name');
    const userName = nameField.value;
    document.getElementById('name-greeting').innerHTML = `Your name is ${userName}, sounds lucky...`
    document.getElementById('user-number').style.display = 'block';
};

/*This is the luckyNumber function called after entering a number and clicking on the second button. We have a variable numberField which selects the HTML input element where the user picks a number.
We have another variable userNumber, which stores the number entered by the user*/
/*Then we have a small nested if/else function which will generate the random fortune sentence. Reading material on if/else: https://www.w3schools.com/js/js_if_else.asp */
/* So depending on which number the user entered, a sentence is chosen from that function*/
/* The sentence is going to be shown in the HTML element with id fortune-message, which we have saved in the variable called fortune*/
/* fortune is a <p> element in HTML, it is originally empty until a random sentence is generated. We populate it by changing its innerHTML with the text from the sentence*/
/* info about innerHTML: https://www.w3schools.com/jsref/prop_html_innerhtml.asp*/


const luckyNumber = () => {
    const numberField = document.getElementById('lucky-number');
    const userNumber = numberField.value;

    const fortune = document.getElementById('fortune-message');
    if (userNumber === '1') {
        fortune.innerHTML = '&#127775; Stars are shining upon your future &#129497;'
    } else if (userNumber === '2') {
        fortune.innerHTML = '&#127775; Great day to make a bad decision! &#129497;'
    } else if (userNumber === '3') {
        fortune.innerHTML = '&#127775; Keep trying, fortune will smile upon you &#129497;'
    } else if (userNumber === '4') {
        fortune.innerHTML = '&#127775; Better let it go, fortune not looking good here... &#129497;'
    } else {
        fortune.innerHTML = '&#127775; Sorry, lady luck is not on your side... &#129497;'
    }
};
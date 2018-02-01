/*
#### IamBham 99 Lines of Code Pt 2

## Info

* This lab consists of two parts

* Today you will be transforming part 1 of the lab

* You should copy your files from part 1 and paste them into a new folder for part 2

* Except for one part of this lab where I explicitly use the word delete, you will not be deleting or destroying anything from yesterday. You are simply changing/transitioning what you did yesterday into something more useful.

## Objectives

* You already have an array called `friends`. It holds five of your friends' names.

* For every friend in the friend array, you have successfully used `console.log` to log the chorus line of the song 99 times.

* In the HTML, the page title should be 99 Lines of Code In The File

* Put an `h1` in the html body that says My Singing Friends

* Put a `div` in the html body with a class of `friend`.

* Inside the `div`, put 5 `p`.

* Inside each `p`, put Test1, Test2, Test3, etc.

* Style the page

* Set a background color on the page.

* Change the text color of the h1.

* Set a background color for class `friend`.

* Target the paragraphs inside the `friend` class div and make them uppercase using only CSS.

* You have stylistic freedom to make the page look good

### New Objectives

* Put a `button` in the HTML that says `Sing!`

* When you click the button, all the `console.log` statements from yesterday should happen. They SHOULD NOT happen before the button is clicked.

* When you have the button setup and working correctly as described, then:

* Delete the `div` with class `friend` and the paragraphs it contains from your html file

* Go to your code where you are "singing the song" and change it as follows:

* For every one of your friends, create a `div` with class `friend`

* Put an `h3` containing your friend's name in the div

* Then, instead of using `console.log` to put the song lyric in the console, create a paragraph for each song lyric line and put that paragraph in the `friend` div.

* Edit your CSS. Instead of making `p` elements inside the div class `friend` uppercase, make `h3` elements uppercase

* To Recap:

* The page should start out just showing a button labeled Sing!

* Nothing will be logged to the console

* Clicking the button will cause 5 `div` elements with class name `friend` to be added to the page, one for each of your friends

* Each div contains 99 paragraphs, each one representing a lyric line that you previously were logging to the console in part 1 of this lab.

## Hints

* You will be using DOM functions to complete this portion of the lab

* Remember that elements can be added to other elements

* document.body.appendChild(someElement);

* someElement.appendChild(someOtherElement);
*/



var wrapper = document.getElementsByTagName("p");


document.addEventListener('DOMContentLoaded', function(){
var friends = [' Joseph ',' Book ',' Tori ','Aj ',' Shock '];
document.getElementById("MyBtn").addEventListener("click",() => {
    
var x = document.getElementById("myBtn");
x.addEventListener('click', () =>{
// x.addEventListener ("click", display);
//x.addEventListener ("click", lines(friends), true);
// function display() {
//     let text = ["Joseph", "Book", "Tori", "AJ", "Shock"];
//     text.forEach(function(bl){
//         var div = document.createElement("div");
//         div.className = "friend";
//         div.innerHTML = bl;
//         document.body.appendChild(div);
//         var p = document.createElement("p");
//         p.className = "para"
//         document.body.appendChild(p);

//     })
// }
const friends = [' Joseph ',' Book ',' Tori ','Aj ',' Shock '];


    for(i = 0 ;i < friends.length ; i++){

        let name = friends[i];
        let friendDiv = document.createElement('div');
        friendDiv.className = 'friend';
        let friendH3 = document.createElement('h3');
        friendH3.innerText = `${name.toUpperCase()}:`
        friendDiv.appendChild(friendH3)

        for(j = 99; j > 0; j--) {
            let p = document.createElement('p');
            if (j === 2) {
            p.innerText = (`${j} lines of code in the file, ${j} lines of code; ${friends[i]} strikes one out, clears it all out, ${j - 1} line of code in the file`);
            }else if(j === 1) {
                p.innerText = (`${j} lines of code in the file, ${j} lines of code; ${friends[i]} strikes one out, clears it all out, no more lines of code in the file`)
            }else{
                p.innerText = (`${j} lines of code in the file, ${j} lines of code; ${friends[i]} strikes one out, clears it all out, ${j - 1} line of code in the file`)
            }

            friendDiv.appendChild(p);
        }
        container.appendChild(friendDiv);
    }
})

});
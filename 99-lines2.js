const wrapper = document.getElementsByTagName("p");
const friends = [' Joseph ',' Book ',' Tori ','Aj ',' Shock '];
const button = document.getElementById('myBtn');

document.addEventListener('DOMContentLoaded', function(){
});
button.addEventListener("click",() => {
    display ();
})

function display (){
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

}




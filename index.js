// Create an Array of at least 3 losing messages
var messages = [
    'oops, try again.',
    'better luck next time!',
    'not quite right...'
]
// Create variables to count wins and losses
var wins = 0
var losses = 0

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
var messageEl = document.getElementById('message')
var winsEl = document.getElementById('wins')
var lossesEl = document.getElementById('losses')

// target all .box elements and attach a click event listener to each one using a loop
var boxElements = document.querySelectorAll('.box')

for (var i = 0; i < boxElements.length; i++){
    //0,1,2
    var boxElement = boxElements[i];
    console.log(boxElements[i])
    boxElement.onclick = function(event){

// within each click event...
// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that value to a Number and store it to a variable
    var numWasClicked = Number(event.target.textContent)
    //console.log(typeof boxNumWasClicked)
    console.log(Number(numWasClicked))
    // create a random number between 1-3 and store it to a variable
    var randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber)
    // This number will represent the winning box
        // determine if the box clicked is equal to the random number
        var messageElement = document.getElementById('message')

        if (numWasClicked === randomNumber) {
            //console.log('You WIN!!!!')

            // if the numbers match, display a winning message by changing the text content of the div#message element
           document.getElementById('message').innerHTML = 'You WIN!!!'
  

            // if the numbers match, increment wins and display the win count in div#wins
            wins = wins + 1
            winsEl.innerHTML = ('WINS:') + wins
          
                           
        } else {
            console.log('Try again.')

            // if the numbers don't match, change the div#message element's text to a random losing message from the array above
            //document.getElementById('message').innerHTML = messages

            const randomMessages = messages[Math.floor(Math.random() * messages.length)]
            document.getElementById('message').innerHTML = randomMessages
            // if the numbers don't match, increment losses and display the loss count in div#losses
            losses = losses + 1
            lossesEl.innerHTML = ('LOSSES:') + losses
        }
    }
}





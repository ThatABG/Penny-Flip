// TODO: Declare any global variables we need
let headsFlips = 0
let headsPercent = '0%'
let tailsFlips = 0
let tailsPercent = '0%'
let totalFlips = 0

document.addEventListener('DOMContentLoaded', function () {
    // TODO: Add event listener and handler for flip and clear buttons
    document.querySelector('#flip').addEventListener('click', function() {
        if (Math.random() > .499999999) {
            //let's assume heads
            document.querySelector("#penny-image").src = 'assets/images/penny-heads.jpg'
            // TODO: Update image and status message in the DOM
            document.querySelector('#message').innerHTML = "You Flipped Heads!"
            // Update the scorboard
            // TODO: Calculate the total number of rolls/flips
            headsFlips++
            totalFlips++
            headsPercent = Math.round(headsFlips / totalFlips * 100)
            tailsPercent = Math.round(tailsFlips / totalFlips * 100)
            document.querySelector('#heads').innerHTML = headsFlips
            document.querySelector('#heads-percent').innerHTML = headsPercent
            document.querySelector('#tails').innerHTML = tailsFlips
            document.querySelector('#tails-percent').innerHTML = tailsPercent
            // Make variables to track the percentages of heads and tails
            // TODO: Use the calculated total to calculate the percentages
            // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
            // TODO: Update the display of each table cell
        } else {
            //let's assume tails
            document.querySelector("#penny-image").src = "assets/images/penny-tails.jpg";
            // TODO: Update image and status message in the DOM
            document.querySelector("#message").innerHTML = "You Flipped Tails!";
            // Update the scorboard
            // TODO: Calculate the total number of rolls/flips
            tailsFlips++
            totalFlips++
            headsPercent = Math.round(headsFlips / totalFlips * 100)
            tailsPercent = Math.round(tailsFlips/totalFlips * 100)
            document.querySelector("#heads").innerHTML = headsFlips;
            document.querySelector("#heads-percent").innerHTML = headsPercent;
            document.querySelector("#tails").innerHTML = tailsFlips;
            document.querySelector("#tails-percent").innerHTML = tailsPercent;

            // Make variables to track the percentages of heads and tails
            // TODO: Use the calculated total to calculate the percentages
            // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
            // TODO: Update the display of each table cell
        }

      
    })



    // Clear Button Click Handler
    document.querySelector('#clear').addEventListener('click', function () {
        headsFlips = 0
        headsPercent = '0%'
        tailsFlips = 0
        tailsPercent = '0%'
        totalFlips = 0
        document.querySelector("#message").innerHTML = "Let's Get Flipping!";
      // TODO: Update the scoreboard (same logic as in flip button click handler)
    })


})
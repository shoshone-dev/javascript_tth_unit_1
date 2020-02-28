/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


/*** 
 * `quotes` array 
***/
var quotes = [
  {
    quote: 'Winning takes precedence over all. There’s no gray area. No almosts.', name: '- Kobe Bryant',
    cited: ' , Lakers Game ',
    time: ' ,2012'
  },
  {
    quote: '[The U.S. still names] military helicopter gunships after victims of genocide. Nobody bats an eyelash about that: Blackhawk. Apache. And Comanche. If the Luftwaffe named it\'s military helicopters Jew and Gypsy, I suppose people would notice.', 
    name: '- Noam Chomsky',
    cited: ' , Propaganda and the Public Mind ',
    time: ' ,May, 2001'
  },
  {
    quote: 'No guns, no bullets could ever kill me. That was my power... Now my time is over.', 
    name: ' - Geronimo',
    cited: ' , General Crook ',
    time: ' ,1886'
  },
  {
    quote: 'It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat. ', 
    name: ' - Theodore Roosevelt',
    cited: '-  Paris, France',
    time: ' ,April 23, 1910'
  },
  {
    quote: 'There he goes. One of God\'s own prototypes. A high-powered mutant of some kind never even considered for mass production. Too weird to live, and too rare to die.', 
    name: 'Hunter S. Thompson',
    cited: ' -   Rolling Stone ',
    time: ' ,December 15, 1977'
  },
  {
    quote: 'Obviously you’re not a golfer.', 
    name: ' - Dude',
    cited: '- The Big Lebowski ',
    time: ' ,1998'
  }

];

var arrQuote = "";
  
/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  var ranNum = Math.floor(Math.random() * quotes.length);
  return quotes[ranNum];
}


/***
 * `printQuote` function
***/
function printQuote() {
  var current = getRandomQuote();
  arrQuote = '<p class="quote">' + current["quote"] + "</p>";
  arrQuote+= '<p class="name">' + current["name"];
  if (current.cited !=="") {
    arrQuote += '<span class="cited">' + current["cited"] + '</span>';
  }
  if (current.time !== "") {
    arrQuote += '<span class="time">' + current["time"] + '</span>';
  }
  arrQuote += '</p>';
  document.getElementById('quote-box').innerHTML = arrQuote;
}
function colorRefresh() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var ranColor = "rgb(" + x + "," + y + "," + z + ")";
console.log(ranColor);

  document.body.style.background = ranColor;
  }

colorRefresh();

arrQuote = printQuote();
setTimeout(function() {
  location.reload();
}, 4000);
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);






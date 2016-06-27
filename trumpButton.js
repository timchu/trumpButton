var For = 'For'
var Against = 'Against'

function proTrump(issue) {
  return "I am for " + issue + "! I love " + issue + "!";
}

function antiTrump(issue) {
  return capitalize(issue) + " is a total loser! Terrible idea!"
}

function arrToObject(array) {
  return {
    For: "\"" + array[0] + "\"",
    Against: "\"" + array[1] + "\""
  };
}


// Have all of Trump's positions in 2 length arrays.
var trumpImmigrationArr = ["I love immigration. Immigrants come to this country, they want to work hard, be successful, raise their kids, and share in the American dream. It's a beautiful story. I can close my eyes and just imagine what my relatives must have been thinking when they sailed past the Statue of Liberty into New York and their new lives. And if they could only see the results of their risk and sacrifice! How can anyone not appreciate the courage it took for these people to leave their families and come here?", "Build the Wall."]
var trumpImmigration = arrToObject(trumpImmigrationArr);

var trumpNukesArr = ["I will be the last to use (nuclear weapons)....But I will never, ever rule it out.", "I've always thought about the issue of nuclear war; it's a very important element in my thought process. It's the ultimate, the ultimate catastrophe, the biggest problem this world has, and nobody's focusing on the nuts and bolts of it. It's a little like sickness. People don't believe they're going to get sick until they do. Nobody wants to talk about it. I believe the greatest of all stupidities is people's believing it will never happen, because everybody knows how destructive it will be, so nobody uses weapons. What bullshit."]
var trumpNukes = arrToObject(trumpNukesArr);

trumpHillaryArr = ["Hillary Clinton I think is a terrific woman. I am biased because I have known her for years. I live in New York. She lives in New York. I really like her and her husband both a lot. I think she really works hard. And I think, again, she's given an agenda, it is not all of her, but I think she really works hard and I think she does a good job. I like her.", "The Hillary Clinton foreign policy has cost America thousands of lives and trillions of dollars -- and unleashed ISIS across the world. No secretary of state has been more wrong, more often, and in more places than Hillary Clinton. Her decisions spread death, destruction and terrorism everywhere she touched. "]
var trumpHillary = arrToObject(trumpHillaryArr);

var trumpHispanicsArr = ["Happy #CincoDeMayo! The best taco bowls are made in Trump Tower Grill. I love Hispanics!", "When Mexico sends its people, they're not sending their best.... They're rapists. And some, I assume, are good people."]
var trumpHispanics = arrToObject(trumpHispanicsArr);

var trumpHealthcareArr = ["Well, I like the mandate.", "Repeal all of #Obamacare, including the mandate, period."]
var trumpHealthcare = arrToObject(trumpHealthcareArr);

var trumpRefugeesArr = ["You know, it's living in hell in Syria. There's no question about it. They're living in hell, and something has to be done. I hate the concept of it, but on a humanitarian basis, you have to (take in refugees).", "Donald J. Trump is calling for a total and complete shutdown of Muslims entering the United States until our country's representatives can figure out what is going on."]
var trumpRefugees = arrToObject(trumpRefugeesArr);

var trumpLGBTArr = ["North Carolina did something that was very strong (in banning transgender people from using their bathroom of choice). And they're paying a price. They should leave it the way it is.", "I believe it should be states' rights and the state should make the decision. They're more capable of making the decision."]
var trumpLGBT = arrToObject(trumpLGBTArr);

function makeTrumpArg(issue) {
  issueTitle = capitalize(issue);
  var trumpProIssue = proTrump(issueTitle);
  var trumpAntiIssue = antiTrump(issueTitle);
  return {
    For: trumpProIssue,
    Against: trumpAntiIssue
  };
}

var trump = {
  immigration: trumpImmigration,
  nukes: trumpNukes,
  hillary: trumpHillary,
  hispanics: trumpHispanics,
  refugees: trumpRefugees,
  healthcare: trumpHealthcare,
  trade: makeTrumpArg('trade'),
  lgbt_rights: trumpLGBT,
  economy: makeTrumpArg('economy'),
};


function hideArgs () {
  $('.argbox').hide();
}

function capitalize(a) {
  return a[0].toUpperCase() + a.slice(1);
}

// Probably want to split up the jquery and the javascript.
function makeArgBox(issue, title=issue.toUpperCase()){
  var id =issue + '-arg';
  var forId = 'for-' + issue;
  var againstId = 'against-' + issue;
  var box = " <div id = '" + id + "' class='argbox' style='display:none'> <h2>" + title + "</h2> <b> FOR: </b> <div id='" + forId + "'> </div> <b> AGAINST: </b> <div id='" + againstId + "'> </div> </div>";
  var buttonId = issue + '-button';

  $("#" + buttonId).after(box);
  $('#' + forId).text(trump[issue][For]);
  $('#' + againstId).text(trump[issue][Against]);
  $('#' + id).css("text-align", "center");
}

function toggleOnClick(issue) {
  // Duplicate code with makeArgBox.
  argName = '#' + issue + '-arg';
  hideArgs();
  $(argName).toggle();
}

function jqueryToggleArgOnClick(issue) {
  makeArgBox(issue);
  buttonName = '#' + issue + '-button';
  $(buttonName).css('cursor','pointer');
  $(document).on('click', buttonName,  function(event) {
      toggleOnClick(issue);
  });
} 

var issues = ["immigration", "hillary", "nukes", "hispanics", "lgbt_rights", "refugees", "healthcare", "trade", "economy"]

$(document).ready( function () {
  jqueryToggleArgOnClick(issues[0]);
  jqueryToggleArgOnClick(issues[1]);
  jqueryToggleArgOnClick(issues[2]);
  jqueryToggleArgOnClick(issues[3]);
  jqueryToggleArgOnClick(issues[4]);
  jqueryToggleArgOnClick(issues[5]);
  jqueryToggleArgOnClick(issues[6]);
  jqueryToggleArgOnClick(issues[7]);
  jqueryToggleArgOnClick(issues[8]);
});

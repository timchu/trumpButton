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
var trumpImmigrationArr = ["I love immigration.", "Public reports routinely state great amounts of crime are being committed by illegal immigrants. This must be stopped and it must be stopped now."]

var trumpImmigration = arrToObject(trumpImmigrationArr);

var trumpNukesArr = ["It's a horror to use nuclear weapons. The power of weaponry today is the single greatest problem that our world has", "I will be the last to use (nuclear weapons)....But I will never, ever rule it out."]
var trumpNukes = arrToObject(trumpNukesArr);

trumpHillaryArr = ["Hillary Clinton I think is a terrific woman. I am biased because I have known her for years. I live in New York. She lives in New York. I really like her and her husband both a lot. I think she really works hard. And I think, again, she's given an agenda, it is not all of her, but I think she really works hard and I think she does a good job. I like her.", "The Hillary Clinton foreign policy has cost America thousands of lives and trillions of dollars -- and unleashed ISIS across the world. No secretary of state has been more wrong, more often, and in more places than Hillary Clinton. Her decisions spread death, destruction and terrorism everywhere she touched. "]

var trumpHillary = arrToObject(trumpHillaryArr);

var trumpHispanicsArr = ["Happy #CincoDeMayo! The best taco bowls are made in Trump Tower Grill. I love Hispanics!", "When Mexico sends its people, they're not sending their best.... They're rapists. And some, I assume, are good people."]

var trumpHispanics = arrToObject(trumpHispanicsArr);

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
  refugees: makeTrumpArg('refugees'),
  healthcare: makeTrumpArg('healthcare'),
  trade: makeTrumpArg('trade'),
  lgbt_rights: makeTrumpArg('LGBT rights'),
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

function showOnClick(issue) {
  // Duplicate code with makeArgBox.
  argName = '#' + issue + '-arg';
  hideArgs();
  $(argName).show();
}

function jqueryShowArgOnClick(issue) {
  makeArgBox(issue);
  buttonName = '#' + issue + '-button';
  $(document).on('click touchstart', buttonName, function(event){
    showOnClick(issue);
  });
}

var issues = ["immigration", "hillary", "nukes", "hispanics", "lgbt_rights", "refugees", "healthcare", "trade", "economy"]

$(document).ready( function () {
  jqueryShowArgOnClick(issues[0]);
  jqueryShowArgOnClick(issues[1]);
  jqueryShowArgOnClick(issues[2]);
  jqueryShowArgOnClick(issues[3]);
  jqueryShowArgOnClick(issues[4]);
  jqueryShowArgOnClick(issues[5]);
  jqueryShowArgOnClick(issues[6]);
  jqueryShowArgOnClick(issues[7]);
  jqueryShowArgOnClick(issues[8]);
});

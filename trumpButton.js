var For = 'For'
var Against = 'Against'

function proTrump(issue) {
  return "I am for " + issue + "! I love " + issue + "!";
}

function antiTrump(issue) {
  return capitalize(issue) + " is a total loser! Terrible idea!"
}

// Create separate file storing database of fors and againsts.
var trumpProImmigration = "I am for immigrants! I love immigrants!"
var trumpAntiImmigration = "When Mexico sends its people, they're not sending their best.... They're rapists. And some, I assume, are good people."

var trumpImmigration = {
  For: trumpProImmigration,
  Against: trumpAntiImmigration
};

var trumpProNukes = "Nuclear War is the most grave threat mankind ever faces."
var trumpAntiNukes = "I will nuke the hell out of ISIS."

var trumpNukes = {
  For: trumpProNukes,
  Against: trumpAntiNukes
};

function makeTrumpArg(issue) {
  issueTitle = capitalize(issue)
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
  hispanics: makeTrumpArg('hispanics'),
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
  $(buttonName).click(function(event){
    showOnClick(issue);
  });
}

var issues = ["immigration", "nukes", "hispanics", "lgbt_rights", "refugees", "healthcare", "trade", "economy"]

$(document).ready( function () {
  jqueryShowArgOnClick(issues[0]);
  jqueryShowArgOnClick(issues[1]);
  jqueryShowArgOnClick(issues[2]);
  jqueryShowArgOnClick(issues[3]);
  jqueryShowArgOnClick(issues[4]);
  jqueryShowArgOnClick(issues[5]);
  jqueryShowArgOnClick(issues[6]);
  jqueryShowArgOnClick(issues[7]);
});

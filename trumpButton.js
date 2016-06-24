var For = 'For'
var Against = 'Against'

// Create separate file storing database of fors and againsts.
var trumpProImmigration = "I am for Hispanics! I love Hispanics!"
var trumpAntiImmigration = "When Mexico sends its people, they're not sending their best. They're not sending you. They're not sending you. They're sending people that have lots of problems, and they're bringing those problems with us. They're bringing drugs. They're bringing crime. They're rapists. And some, I assume, are good people."

var trumpProNukes = "Nuclear War is the most grave threat mankind ever faces."
var trumpAntiNukes = "I will nuke the hell out of ISIS."

var trumpImmigration = {
  For: trumpProImmigration,
  Against: trumpAntiImmigration
};

var trumpNukes = {
  For: trumpProNukes,
  Against: trumpAntiNukes
};

// Probably want to split up the jquery and the javascript.
$(document).ready( function () {
  $('#immigration-button').click(function(event){
    $('#argbox').show();
    $('#title').text("IMMIGRATION");
    $('#for').text(trumpImmigration[For]);
    $('#against').text(trumpImmigration[Against]);
  });

  $('#nukes-button').click(function(event){
    $('#argbox').show();
    $('#title').text("NUCLEAR WAR");
    $('#for').text(trumpNukes[For]);
    $('#against').text(trumpNukes[Against]);
  });
});

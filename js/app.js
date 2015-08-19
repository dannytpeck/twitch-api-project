var streamers = [
  "freecodecamp",
  "storbeck",
  "habathcx",
  "RobotCaleb",
  "noobs2ninjas",
  "dannytpeck",
  "dev-chieftain",
  "skyasi",
  "beohoff",
  "thomasballinger"
];

var userURL = "https://api.twitch.tv/kraken/users/";
var streamsURL = "https://api.twitch.tv/kraken/streams/";
var callback = "?callback=?";
var data = {
  client_id : "3h2g0xt7jmrjhrmojtz95pgpnhvxp0h",
}

function showAll() {
  showOnline();
  showOffline();  
}

function showOnline() {
  var onlineIcon, streamStatus;
  $('#list').empty();
  $.each(streamers, function(i, streamer) {

    $.getJSON(streamsURL + streamer + callback, data, function(result) {
      if (result.stream !== null) {
        streamStatus = '<span class="status">' + result.stream.channel.status + '</span>';
        $.getJSON(userURL + streamer + callback, data, function(result) {
          if (result.logo) {
            logo = "<img src='" + result.logo + "' class='logo'>";
          }
          else {
            logo = "<img src='http://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_150x150.png' class='logo'>"; 
          }
          name = '<span class="username">' + result.display_name + '</span>';
          $("#list").append("<a href='http://twitch.tv/" + result.display_name + "'><li>" + logo + name + streamStatus + "</li></a>");
        });
      }
    });
  });
}

function showOffline() {
  var onlineIcon;
  $('#list').empty();
  $.each(streamers, function(i, streamer) {

    $.getJSON(streamsURL + streamer + callback, data, function(result) {
      if (result.stream === null) {
        onlineIcon = '<i class="fa fa-times"></i>';
        $.getJSON(userURL + streamer + callback, data, function(result) {
          if (result.logo) {
            logo = "<img src='" + result.logo + "' class='logo'>";
          }
          else {
            logo = "<img src='http://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_150x150.png' class='logo'>"; 
          }
          name = '<span class="username">' + result.display_name + '</span>';
          $("#list").append("<a href='http://twitch.tv/" + result.display_name + "'><li>" + logo + name + onlineIcon + "</li></a>");        
        });
      }
    });
  });
}

// Start up showing all
showAll();

// Add event listeners for navigation buttons
$('#all').on("click", showAll);
$('#online').on("click", showOnline);
$('#offline').on("click", showOffline);

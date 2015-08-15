var streamers = [
  "freecodecamp",
  "storbeck",
  "terakilobyte",
  "habathcx",
  "RobotCaleb",
  "comster404",
  "brunofin",
  "thomasballinger",
  "noobs2ninjas",
  "beohoff"
];

// Begin code //

$.each(streamers, function(i, streamer) {
  var userURL = "https://api.twitch.tv/kraken/users/";
  var streamsURL = "https://api.twitch.tv/kraken/streams/";
  var callback = "?callback=?";
  var data = {
    client_id : "3h2g0xt7jmrjhrmojtz95pgpnhvxp0h",
  }
  $.getJSON(userURL + streamers[i] + callback, data, function(result) {
    if (result.logo) {
      logo = "<img src='" + result.logo + "' class='logo'>";
    }
    else {
      logo = "<img src='http://placehold.it/50x50' class='logo'>"; 
    }
    name = "<a href='http://twitch.tv/" + result.display_name + "'>" +
                    result.display_name + "</a>";
    
    onlineIcon = '<i class="fa fa-exclamation"></i>'
    
    $("#userURL").append("<li>" + logo + name + onlineIcon + "</li>");
  });
});
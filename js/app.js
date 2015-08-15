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
var html = "";
var url = "https://api.twitch.tv/kraken/users/";
var cid = "?callback=?&client_id=3h2g0xt7jmrjhrmojtz95pgpnhvxp0h";
var logo = "";
var name = "";

html = "";
for(var i = 0; i < streamers.length; i++) {
  $.getJSON(url + streamers[i] + cid, function(result) {
    if (result.logo) {
      logo = "<img src='" + result.logo + "' class='logo'>";
    }
    else {
      logo = "<img src='http://placehold.it/50x50' class='logo'>"; 
    }
    name = "<a href='http://twitch.tv/" + result.display_name + "'>" +
                    result.display_name + "</a>";
    
    $("#streamers").append("<li>" + logo + name + "</li>");
  });
}  

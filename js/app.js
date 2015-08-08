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

$(document).ready(function() {
  html = "<ul>";
  streamers.forEach(function(streamer){
    console.log(streamer);
    $.getJSON(url + streamer + cid, function(result) {
      if (result.logo) {
        logo = " <img src=' " + result.logo + " ' class='logo'> ";
      }
      else {
        logo = "<span>(Not Pictured)</span>";
      }
      var name = result.display_name;
      html += ("<li>" + logo + " " + name + "</li>");
      $('#list').append(html);
    });
  });
  html += "</ul>";
});
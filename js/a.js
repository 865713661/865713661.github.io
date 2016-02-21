$(document).ready(function(){


  var playlist = [{
      title:"Butter fly",
      artist:"",
      mp3:"和田光司 - Butter Fly(主MIX).mp3",
	  /*下面是海报*/
      poster: "5fdfe7970159cb3a.jpeg"
    },{
      title:"未闻花名",
      artist:"",
      mp3:"Melodic Taste - secret base ～君がくれたもの～.mp3",
      poster: "ab2e108a08ebc083.jpg"
    },{
      title:"The show",
      artist:"",
      mp3:"Lenka - The Show.mp3",
      poster: "a1.jpeg"
    },];
	
/*	{
      title:"Cro Magnon Man",
      artist:"The Stark Palace",
      mp3:"http://jq22.qiniudn.com/i2.mp3",
      poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
    },
	这个可以自己随便加了  嘎嘎嘎嘎嘎啊噶
	
	*/
  
  
  
  
  
  var cssSelector = {
    jPlayer: "#jquery_jplayer",
    cssSelectorAncestor: ".music-player"
  };
  
  var options = {
    swfPath: "http://cdnjs.cloudflare.com/ajax/libs/jplayer/2.6.4/jquery.jplayer/Jplayer.swf",
    supplied: "ogv, m4v, oga, mp3"
  };
  
  var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);
  
});
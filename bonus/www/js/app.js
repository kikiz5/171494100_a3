$(document).ready(function(){
  $("button").click(function() {
    $.getJSON( 'http://cp202-server.appspot.com/keys/171494100', function( data ) {
      alert(data);
      var items = [];
      $.each( data, function( key, val ) {
        items.push( "<li id='" + key + "'>" + val + "</li>" );
      });

      $( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
      }).appendTo( "body" );
    });
  });
});

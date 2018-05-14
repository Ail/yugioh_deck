function loadcard(name){

$.ajax({
  method: "GET",
  url: "http://52.57.88.137/api/card_data/"+name,
  dataType: "json",
  success: function(data){

  	$("#main").html(" ");
  	$("#main").append(
      "<h1>"+data.data.name+"</h1>"+
  		"<p>"+data.data.text+"</p>"+
      "<br>"+
      "<p>"+data.data.card_type+", "+data.data.type+", "
      +data.data.family+"</p>"+
      "<br>"+
       "<p>Level: "+data.data.level+"</p>"+
       "<p>Attack: "+data.data.atk+"</p>"+
       "<p>Defence: "+data.data.def+"</p>"
  		);
  }
});

  	$("#photo").html(" ");
  	$("#photo").append(
  		'<img style="-webkit-user-select: none;" src="http://52.57.88.137/api/card_image/'+name+'">'
  		);

}
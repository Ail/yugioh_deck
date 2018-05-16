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

$( document ).ready(function() {


  $("select").change(function(){

        // Declare variables
        var select, filter, button, i;
        select = document.getElementsByTagName('select');
        // filter = select.options[select.selectedIndex].value.toUpperCase();
        filter = $("select").val();
        console.log($("select").val());
        button = document.getElementsByTagName('button');

        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < button.length; i++) {
            small = button[i].getElementsByTagName("small")[0];
            //console.log(small);
            if (small.innerHTML.indexOf(filter) > -1) {
                button[i].style.display = "";
            } else if(filter == "all"){
                button[i].style.display = "";
            } else {
                button[i].style.display = "none";
            }
        }



    // if($("select").val() == "moster"){
    //   $('button').find("spell").find("trap").parent().hide();
    //   $('button').find("moster").parent().show();
    // }else if($("select").val() == "spell"){
    //   $('button').find("monster").find("trap").parent().hide();
    //   $('button').find("spell").parent().show();
    // }else if($("select").val() == "trap"){
    //   $('button').find("monster").find("spell").parent().hide();
    //   $('button').find("trap").parent().show();
    // }else if($("select").val() == ""){
    //   $('button').show();
    // }
  });
});



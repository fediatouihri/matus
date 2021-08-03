









function verifierMotaSept(){
  
  if( $( "#text" ).val().length==7)
  {  $("#text").css('border-color','green');
  console.log("changer");

}
else
$("#text").css('border-color','red');

}
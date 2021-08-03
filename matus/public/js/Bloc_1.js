






function telecharger(){
for (var i=0;i<mydata.length;i++){

  if(mydata[i].label.length==7){
       mydatasept.push(mydata[i].label);
  }
}


var mots=[];
var nb_mots=mydatasept.length;
for(var i=0;i<10;i++){
     var rand= Math.floor(Math.random() *nb_mots);
     mots.push(mydatasept[rand]);
     console.log(mots[i]);
}

}

function RemplacerCaractere(mot){
    return  mot.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

}










 var tps_partie;
 var tps_mots;
 var solution={'valeur':0};
 var motreussi={'valeur':0};
 var essai ={ 'valeur' : 0 };
 var mots=[];
 var liste=[];
 

 
//function 

 function essayer(){
     var mot_a_essaiye=document.getElementById('text').value;
     console.log(mot_a_essaiye);
     mot_a_essaiye= RemplacerCaractere(mot_a_essaiye);
     console.log(mot_a_essaiye);
     
     afficherGrille(mot_a_essaiye,essai.valeur,mots[0]);
     proposerLettres(mot_a_essaiye,essai.valeur,mots[0]);
     console.log(mots[0]);
     //console.log(mots[0].charcoleur);
     afficherAlphabet(introduireMot(mot_a_essaiye,mots[0]).charcoleur);
   
   }
   
   

function main(){
//declarations des variables
    




     /*var sol1=document.getElementById('p1');
     var sol2=document.getElementById('p2');
    var est =essai.valeur-1;
     var sol=sol1.childNodes[0].textContent+ est+sol2.childNodes[0].textContent;
     console.log(sol);
     var kelmet=telecharger();
     console.log(kelmet);*/

     $( "#jouer" ).click(function() {
          alert( "commancer a jouer" );
          mots=jouer();
          console.log(mots);
        
         
          });

     


          
      $("#essayer" ).click(function() {
               alert( " essayer " );
               essayer();
               essai.valeur++;
               decrementerTempsParMot();
               if(essai.valeur==5){
                    essai.valeur=0;
                    solution.valeur++;
                   
               }

               });
            
    
   

}
/****** Correction Cécile avec affichage du nombre de clicks dans une modale **********/
function displayClickScore() {
  var timesOfClick = document.getElementById('addClick');
  var scoreOfClick = 0;

  timesOfClick.addEventListener('click', function() {
      /* dans la fonction on incrémente la variable scoreOfClick
      ceci peut aussi se coder comme cela : scoreOfClick++; */
      scoreOfClick = scoreOfClick + 1;
      /* on affiche ici la concaténation .*/
      alert('Vous avez cliqué : ' + scoreOfClick + ' fois !');
    }
    /*fin de l'écoute par le gestionnaire d'événemnts où est imbriquée l'incrémentation
    pour le calcul du nombre de clicks*/
  );
}



// ************ correction louiza *******************
// var counter = 1;
//
// function displayNumberOfClicks() {
//   var numberOfClicks = document.getElementById('numberOfClicks'); /// id de l'input dans le form
//   numberOfClicks.value = counter;
//   counter++;
// }
//
// function resetForm() {
//   document.getElementById('numberOfClicks').value = '';
//   counter = 1;
// }
/*
voir essayer de donner un type="reset" à l'input avec une value="reset"
<input type="text" id="increment" value="0"></input> @Nella
*/
/************************* Correction Olga *******************
let i = 1;
function displayNumberOfClicks(){
  document.getElementById('numberOfClicks').value = 'Vous avez cliqué :' + i++ + ' fois !';
}
function resetForm(){
  document.getElementById('form01').reset;
}
*/

/**************** Corection JP  *****************************
var number = 0;
function addInt(){
  number++;
  console.log(number);
  var displayTab = document.getElementById('tab').innerHTML = 'Vous avez cliqué : ' + number +'fois !';
}
 html form correspondant :

 <form>
   <input type="button" name="addClick" value="ajout click" onclick="addInt()">
   <p id="tab"></p>
 </form>

*/

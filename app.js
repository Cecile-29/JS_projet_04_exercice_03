function displayClickScore(){
  var timesOfClick = document.getElementById('addClick');
  var scoreOfClick = 0;
  timesOfClick.addEventListener('click', function()
  {
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

// on crée une fonction qui va faire la bascule //de la classe hidden sur l'élément qui a l'id #overlay
// (si la classe est présente dans la liste des classes de l'élément, 
// la fonction toggle enlève la classe de la liste et inversement si la classe n'est pas présente, elle l'ajoute).

function togglePopup(){
  //'hidden' c'est le nom de la classe
  //#overlay c'est l'id de l'élément auquel on s'adresse
  document.querySelector('#overlay').classList.toggle('hidden')
}
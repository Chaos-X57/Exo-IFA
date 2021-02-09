function voiture() {

  var marque = document.getElementById('marque').value;
  var modele = document.getElementById('modele').value;
  var type = document.getElementById('type').value;
  var origine = document.getElementById('origine').value;
  var km = document.getElementById('km').value;
  var valeur = document.getElementById('valeur').value;
  var travau = document.getElementById('travau').value;

  if (marque == '') {
    document.getElementById('missMarque').innerHTML='(* vous devez saisir une marque)';
    document.getElementById('missMarque').classList.add('error');
    event.preventDefault();
  }
  else {
    document.getElementById('missMarque').innerHTML='';
  }

  if (modele == '') {
    document.getElementById('missModele').innerHTML='(* vous devez saisir un modèle)';
    document.getElementById('missModele').classList.add('error');
    event.preventDefault();
  }
  else {
    document.getElementById('missModele').innerHTML='';
  }

  if (type == '') {
    document.getElementById('missType').innerHTML='(* vous devez sélectionner un Type)';
    document.getElementById('missType').classList.add('error');
    event.preventDefault();
  }
  else {
    document.getElementById('missType').innerHTML='';
  }

  if (origine == '') {
    document.getElementById('missOrigine').innerHTML='(* vous devez sélectionner un pays)';
    document.getElementById('missOrigine').classList.add('error');
    event.preventDefault();
  }
  else {
    document.getElementById('missOrigine').innerHTML='';
  }

  if (km == '') {
    document.getElementById('missKm').innerHTML='(* vous devez saisir les kms)';
    document.getElementById('missKm').classList.add('error');
    event.preventDefault();
  }
  else {
    document.getElementById('missKm').innerHTML='';
  }

  if (valeur == '') {
    document.getElementById('missValeur').innerHTML='(* vous devez saisir le prix)';
    document.getElementById('missValeur').classList.add('error');
    event.preventDefault();
  }
  else {
    document.getElementById('missValeur').innerHTML='';
  }

  if (travau == '') {
    document.getElementById('missTravau').innerHTML='(* vous devez sélectionner les travaux)';
    document.getElementById('missTravau').classList.add('error');
    event.preventDefault();
  }
  else {
    document.getElementById('missTravau').innerHTML='';
  }

  if (marque != '' && modele != '' && type != '' && origine != '' && km != '' && valeur != '' && travau != '') {
    document.getElementById('button').style.display="block";
  }

  if (km > 50000) {
    document.getElementById('missButton').style.display="block";
    document.getElementById('missButton').innerHTML='Le véhicule à trop de km';
    document.getElementById('missButton').classList.add('error');
    event.preventDefault();
    document.getElementById('button').style.display="none";
  }
  else {
    document.getElementById('missButton').style.display="none";
  }
}

function calcul () {

  var marque = document.getElementById('marque').value;
  var modele = document.getElementById('modele').value;
  var type = document.getElementById('type').value;
  var origine = document.getElementById('origine').value;
  var km = document.getElementById('km').value;
  var valeur = document.getElementById('valeur').value;
  var travau = document.getElementById('travau').value;
  var result;


    if (origine == "France" && type == "Essence" && travau == "Oui"){
        result = valeur - (km * 0.10);
        document.getElementById('missEstime').innerHTML= result + ' €';
        document.getElementById('missEstime').classList.add('error');
        event.preventDefault();
    }

    else if (origine == "France" && type == "Essence" && travau == "Non"){
        result = valeur - (km * 0.09);
        document.getElementById('missEstime').innerHTML= result + ' €';
        document.getElementById('missEstime').classList.add('error');
        event.preventDefault();
    }

    else if (origine == "France" && type == "Diesel" && travau == "Oui"){
        result = valeur - (km * 0.11);
        document.getElementById('missEstime').innerHTML= result + ' €';
        document.getElementById('missEstime').classList.add('error');
        event.preventDefault();
    }

    else if (origine == "France" && type == "Diesel" && travau == "Non"){
        result = valeur - (km * 0.10);
        document.getElementById('missEstime').innerHTML= result + ' €';
        document.getElementById('missEstime').classList.add('error');
        event.preventDefault();
    }

    else if (origine == "Allemagne" && type == "Essence" && travau == "Oui"){
        Allemagnecul = valeur - (km * 0.06);
        document.getElementById('missEstime').innerHTML= result + ' €';
        document.getElementById('missEstime').classList.add('error');
        event.preventDefault();
    }

    else if (origine == "Allemagne" && type == "Essence" && travau == "Non"){
        result = valeur - (km * 0.08);
        document.getElementById('missEstime').innerHTML= result + ' €';
        document.getElementById('missEstime').classList.add('error');
        event.preventDefault();
    }

    else if (origine == "Allemagne" && type == "Diesel" && travau == "Oui"){
        result = valeur - (km * 0.10);
        document.getElementById('missEstime').innerHTML= result + ' €';
        document.getElementById('missEstime').classList.add('error');
        event.preventDefault();
    }

    else if (origine == "Allemagne" && type == "Diesel" && travau == "Non"){
        result = valeur - (km * 0.09);
        document.getElementById('missEstime').innerHTML= result + ' €';
        document.getElementById('missEstime').classList.add('error');
        event.preventDefault();
    }

    else if (origine == "Italie" && type == "Essence" && travau == "Oui"){
        result = valeur - (km * 0.5);
        document.getElementById('missEstime').innerHTML= result+ ' €';
        document.getElementById('missEstime').classList.add('error');
        event.preventDefault();
    }

    else if (origine == "Italie" && type == "Essence" && travau == "Non"){
        result = valeur - (km * 0.07);
        document.getElementById('missEstime').innerHTML= result + ' €';
        document.getElementById('missEstime').classList.add('error');
        event.preventDefault();
    }

    else if (origine == "Italie" && type == "Diesel" && travau =="Oui"){
        result= valeur - (km * 0.09);
        document.getElementById('missEstime').innerHTML= result + ' €';
        document.getElementById('missEstime').classList.add('error');
        event.preventDefault();
    }

    else if (origine == "Italie" && type == "Diesel" && travau == "Non"){
        result = valeur - (km * 0.08);
        document.getElementById('missEstime').innerHTML= result + ' €';
        document.getElementById('missEstime').classList.add('error');
        event.preventDefault();
    }

    document.getElementById('missMarque2').innerHTML= marque;
    document.getElementById('missMarque2').classList.add('error');
    event.preventDefault();

    document.getElementById('missModele2').innerHTML= modele;
    document.getElementById('missModele2').classList.add('error');
    event.preventDefault();

    document.getElementById('missType2').innerHTML= type;
    document.getElementById('missType2').classList.add('error');
    event.preventDefault();

    document.getElementById('missOrigine2').innerHTML= origine;
    document.getElementById('missOrigine2').classList.add('error');
    event.preventDefault();

    document.getElementById('missKm2').innerHTML= km;
    document.getElementById('missKm2').classList.add('error');
    event.preventDefault();

    document.getElementById('missTravau2').innerHTML= travau;
    document.getElementById('missTravau2').classList.add('error');
    event.preventDefault();

    if (result > 0) {
      document.getElementById('missEstime').style.color = 'green';
      document.getElementById('missEstime').classList.add('error');
      event.preventDefault();
    }
    else {
      document.getElementById('missEstime').style.color = 'red';
      document.getElementById('missEstime').classList.add('error');
      event.preventDefault();
    }

    if (travau != '') {
      document.getElementById('form1').style.display = 'none';
      document.getElementById('div1').style.display = 'block';
      document.getElementById('form1').classList.add('error');
      event.preventDefault();
    }
}

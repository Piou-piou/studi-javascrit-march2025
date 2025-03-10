// définition des varaibles
let boite = 'ma boite';
const etagere = 'mon étagère';

// console.log('coucou la console');


if (boite == 'ma boite') {
  let boite2 = 'ma boite 2';
  // console.log(boite2);
  boite2 = 'ma nouvelle boite 2';
  // console.log(boite2);

  const etagere2 = 'mon etagere 2';
}

// impossible afficher variable car portée des let uniquement dans le bloc et bloc enfant
//console.log(etagere2);


// définition tableau
let marquesVoiture = ['Peugeot', 'Citroen'];
marquesVoiture.push('Audi');
//console.table(marquesVoiture);

// boucle for of et marque change de valeur à chaque tour
// la boucle s'arrête après le dernier élément du tableau
// marque peut etre une const ou un let tout dépend de si on doit modifier sa valeur
for (const marque of marquesVoiture) {
  //console.log(marque);
}

// boucle for in utilise l'index du tableau pour parcourir chaque élément
// à utiliser sur des objets (on les verra plus tard)
for (const index in marquesVoiture) {
  //console.log(index);
  //console.log(marquesVoiture[index]);
}

// ici la boucle for possède un varaible i qui va s'incrémenter à chaque itération (tour de boucle)
console.log(marquesVoiture.length);
for (let i = 0 ; i < marquesVoiture.length ; i++) {
  //console.log(marquesVoiture[i]);
}


// écrire un petit programme permettant de calculer la moyenne des notes suivantes :
// pnesez boucle, portée des variables
// le must une fonction calculMoyenne();
const notes = [10, 15, 8, 12, 14.5, 13.5];
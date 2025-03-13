// fonction qui permet de calculer la moyenne en fonction d'un tableau de note
function calculMoyenne(notes) {
  let totalNote = null;

  for (const note of notes) {
    if (totalNote == null) {
      totalNote = note;
    } else {
      totalNote += note;
    }
  }

  return (totalNote / notes.length).toFixed(2);
}

const notesLaurent = [10, 15, 8, 12, 14.5, 13.5];
const notesPierre = [12.5, 8, 9, 10];

const moyenneLaurent = calculMoyenne(notesLaurent);
const moyennePierre = calculMoyenne(notesPierre);

if (moyenneLaurent >= 15) {
  console.log('Bravo vous avez les félicitations');
} else if (moyenneLaurent >= 13 && moyenneLaurent < 15) {
  console.log('Bravo vous avez les compliments');
} else if (moyenneLaurent >= 10 && moyenneLaurent < 13) {
  console.log('Bravo vous avez les encouragement');
} else {
  console.log('Vous avez encore du travail à faire');
}



// Bonus avec objet au lieu de tableau
/*
const notesEleves = {
  pierre: [12.5, 8, 9, 10],
  laurent: [10, 15, 8, 12, 14.5, 13.5],
};

for (const eleve in notesEleves) {
  console.log(`La moyenne de ${eleve} est de ${calculMoyenne(notesEleves[eleve])}`)
}

console.log(calculMoyenne(notesEleves.laurent))*/

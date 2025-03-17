const maDiv = document.getElementById('ma-div');
const maDivSelector = document.querySelector('div');

// maDiv.innerText = 'mon texte';
// maDiv.innerHTML = '<span></span>'
//
// maDiv.style.marginTop = '10px';
// maDiv.classList.add('autre-class');

maDiv.addEventListener('click', (event) => {
  const element = event.currentTarget;

  element.classList.toggle('clicked');
});


const carreBleus = document.querySelectorAll('body > div.carre-bleu');

for (const carreBleu of carreBleus) {
  console.log(carreBleu);
}

console.log('----');

carreBleus.forEach((carreBleu) => {
  carreBleu.addEventListener('mouseover', (event) => {
    const target = event.currentTarget;
    target.style.background = 'green';
  });

  carreBleu.addEventListener('mouseleave', (event) => {
    const target = event.currentTarget;
    target.style.removeProperty('background');
  });
});


const googleLink = document.querySelector('#google-link');
googleLink.addEventListener('click', (event) => {
  event.preventDefault();

  const maDiv = document.getElementById('ma-div');
  maDiv.classList.add('clicked');
});



// Exo
// a partir d'un element input type number avec l'id number1
// et d'un  autre element input type number avec l'id number2
// en javascript multiplier les 2 nombre entre eux
// afficher le résultat dans une div avec l'id resultat
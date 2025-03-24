const modalLayer = document.getElementById('modal-layer');

document.querySelectorAll('[data-modal]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const element = event.currentTarget;

    const modal = document.getElementById(element.dataset.modal);
    if (modal) {
      // passage de display none à block directement
      modalLayer.classList.add('active');
      modal.classList.add('active');

      // on attend 10ms que le passage en block se fasse puis on joue notre animation avec l'ajout de .animate
      setTimeout(() => {
        modalLayer.classList.add('animate');
        modal.classList.add('animate');
      }, 10);
    }
  });
});

document.querySelectorAll('.modal [data-close]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const element = event.currentTarget;

    // quand on ferme, on enlève d'abord animate pour jouer l'animation
    element.closest('.modal').classList.remove('animate');
    modalLayer.classList.remove('animate');

    // on attend le temps de l'animation dans .animate avant de virer .active pour repasser en display none
    setTimeout(() => {
      element.closest('.modal').classList.remove('active');
      modalLayer.classList.remove('active');
    }, 1100);
  });
})
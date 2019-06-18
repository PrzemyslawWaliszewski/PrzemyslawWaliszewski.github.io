document.querySelector('.navbar-toggle').addEventListener('click', () => {
   const navMenu = document.querySelector('.navbar-menu');

   navMenu.classList.contains('hidden') ?
       navMenu.classList.remove('hidden') :
       navMenu.classList.add('hidden');
});

// Le script détecte les clics en dehors du menu pour le fermer.
document.addEventListener('click', function(event) {
    var menu = document.getElementById('Hainaut_main_nav'); 
    if (event.target !== menu && !menu.contains(event.target) 
    && event.target !== document.querySelector('.navbar-toggler')) {
        
        menu.classList.remove('show');
    }
});

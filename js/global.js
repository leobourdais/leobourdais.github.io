/* Menu */

function menuMobile() {
    const btn = document.querySelector('.burger');
    const header = document.querySelector('.header');
    const links = document.querySelectorAll('.navbar a');


    btn.addEventListener('click', () => {
        header.classList.toggle('show-nav');
    });
    links.forEach(link, () => {
        link.addEventListener('click', () => {
            header.classList.remove('show-nav');
        });
    });
}

menuMobile();


/* Projets */

function tabsFilters() {
    const tabs = document.querySelectorAll('.portfolio-filters a');
    const projets = document.querySelectorAll('.portfolio .card');
    
    const showProjets = () => {
        projets.forEach(projet => {
            console.log(projet);
        });
    }
    
    tabs.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
        });
    });
    showProjets();
}




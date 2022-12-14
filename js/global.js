/* Menu */

function menuMobile() {
    const btn = document.querySelector('.burger');
    const header = document.querySelector('.header');
    const links = document.querySelectorAll('.navbar a');


    btn.addEventListener('click', () => {
        header.classList.toggle('show-nav');
    });
    links.forEach(link => {
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

  const resetActiveLinks = () => {
    tabs.forEach(elem => {
      elem.classList.remove('active');
    });
  }
  const showProjets = (elem) => {

    projets.forEach(projet => {

      let filter = projet.getAttribute('data-category');

      if (elem === "all") {
        projet.parentNode.classList.remove('hide');
        return
      }

      filter !== elem ? projet.parentNode.classList.add('hide') : projet.parentNode.classList.remove('hide');

    });
  }

  tabs.forEach(elem => {
    elem.addEventListener('click', function (event) {
      event.preventDefault();
      let filter = elem.getAttribute('data-filter');
      showProjets(filter)
      resetActiveLinks();
      elem.classList.add('active');
    });
  });

}

tabsFilters();

function showProjetsDetails() {
  const links = document.querySelectorAll('.card__link');
  const modals = document.querySelectorAll('.modal');
  const btns = document.querySelectorAll('.modal__close');


  const hideModals = () => {
    modals.forEach(modal => {
      modal.classList.remove('show');
    });
  }

  links.forEach(elem => {
    elem.addEventListener('click', function (event) {
      event.preventDefault();
      document.querySelector(`[id=${elem.dataset.id}]`).classList.add('show');

    });
  })

    btns.forEach(btn => {
      btn.addEventListener('click', function (event) {
        hideModals();

    });
  })

}

showProjetsDetails();
/*33min12s bonus video*/ 

/*effets*/

const observerIntersectionAnimation = () => {
  const sections = document.querySelectorAll('section');


  sections.forEach((section, index) => {
    if (index === 0) return;
    section.style.opacity = "0";
    section.style.transition = "all 1.6s";
  });

  let sectionObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let elem = entry.target;
        elem.style.opacity = 1;
      }
    });
  });
  sections.forEach(section => {
    sectionObserver.observe(section)
  });

}

observerIntersectionAnimation();
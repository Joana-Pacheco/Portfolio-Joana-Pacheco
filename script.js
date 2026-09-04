const elementos = document.querySelectorAll(
    '.habilidade, .projeto, .sobre-texto, .sobre-destaque'
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add('visivel');

            }

        });

    },
    {
        threshold: 0.15
    }
);


elementos.forEach((elemento) => {

    elemento.classList.add('animar');

    observer.observe(elemento);

});
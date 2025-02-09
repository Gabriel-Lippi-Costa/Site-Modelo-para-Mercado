const myObserver = new IntersectionObserver ( (entries) => {
    entries.forEach ( ( entry ) => {
        if (entry.isIntersecting === true) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    } )
} )

const h1 = document.querySelectorAll('h1')

const h2 = document.querySelectorAll('h2')

const card = document.querySelectorAll('.card')


h1.forEach( (element) => myObserver.observe(element) )
h2.forEach( (element) => myObserver.observe(element) )
card.forEach( (element) => myObserver.observe(element) )
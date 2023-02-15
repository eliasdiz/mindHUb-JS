import { url, createChekbox, printCard, filterCheck, filterSearch, getCategories } from './module/functions.js'

const checkboxContainer = document.querySelector(".div-checkbox")
const cardsContainer = document.querySelector(".div-cards")
const search = document.getElementById('search')


fetch(url)
.then( result => result.json())
.then( data => {
  const events = data.events.filter(viejos =>  viejos.date < data.currentDate )
  const eventsCategories = [ ...new Set( events.map(category => category.category))]
  createChekbox(eventsCategories,checkboxContainer)
  printCard(events,cardsContainer)
  checkboxContainer.addEventListener('change',(e) =>{  
    cardsContainer.innerHTML = ''
    const text = search.value
    const cheked = document.querySelectorAll(`input[type="checkbox"]:checked`)
    const categories = getCategories(cheked)
    const filterSearchA = filterSearch(events,text)
    const filtered = filterCheck(filterSearchA,categories)
    printCard(filtered,cardsContainer)
  })
  
  search.addEventListener('keyup',(e) =>{
    cardsContainer.innerHTML = ''
    const text = search.value
    const cheked = document.querySelectorAll(`input[type="checkbox"]:checked`)
    const categories = getCategories(cheked)
    const filteredCheckbox = filterCheck(events,categories)
    const filtered = filterSearch(filteredCheckbox,text)
    printCard(filtered,cardsContainer)
  })

  })
  .catch( error => console.log('El Error Es: ',error))

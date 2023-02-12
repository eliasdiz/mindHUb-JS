import { url, createChekbox, printCard, filterCheck, filterSearch, getCategories } from "./module/functions.js"

const cardsContainer = document.querySelector('.div-cards')
const checkboxContainer = document.querySelector(".div-checkbox")
const search = document.getElementById('search')


fetch(url)
.then( result => result.json())
.then( data => {
  const events = data.events
  const eventsCategories = [ ...new Set( events.map(category => category.category))]
  createChekbox(eventsCategories,checkboxContainer)
  printCard(events,cardsContainer)
  checkboxContainer.addEventListener('change',(e) =>{  
    cardsContainer.innerHTML = ''
    const cheked = document.querySelectorAll(`input[type="checkbox"]:checked`)
    const categories = getCategories(cheked)
    const filtered = filterCheck(events,categories)
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
  .catch( error => console.log('El Error es : ', error))





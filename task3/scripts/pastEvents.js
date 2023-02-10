import {data} from './module/data.js'
import { createChekbox, printCard, filterCheck, filterSearch, getCategories } from './module/functions.js'


const events = data.events.filter(viejos =>  viejos.date < data.currentDate )
const checkboxCategories = [ ...new Set( events.map(category => category.category))]
const checkboxContainer = document.querySelector(".div-checkbox")
const cardsContainer = document.querySelector(".div-cards")
const search = document.getElementById('search')


createChekbox(checkboxCategories,checkboxContainer)
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
  const text = (search.value).toLowerCase()
  const filtered = filterSearch(events,text)
  printCard(filtered,cardsContainer)
})
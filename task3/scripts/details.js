import {data} from './module/data.js'

const events = data.events
const main = document.querySelector('.main-details')

const parameters = new URLSearchParams(location.search)
const id = parameters.get('id')
const event = events.find(event => event["_id"] === id)
const nameDeatils = event.name
document.title = `Details ${nameDeatils}`

main.innerHTML =
`<div class="div-details">
    <img src=${event.image} alt="image">
    <section>
        <h5>${event.name}</h5>
        <p>
        ${event.description}
        </p>
        <span> <b>Date:</b> ${event.date}</span> 
        <span> <b>Place:</b> ${event.place}</span>
        <span> <b>Price:</b > $ ${event.price} USD</span>
        <a href="./shop.html" target="_blank" class="btn btn-primary">Buy</a>
    </section>
</div>`
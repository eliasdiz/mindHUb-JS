import { url, printDetails} from './module/functions.js'

const main = document.querySelector('.main-details')

fetch(url)
.then( result => result.json())
.then( data => {
    const events = data.events 
    const parameters = new URLSearchParams(location.search)
    const id = parameters.get('id')
    const event = events.find(event => event["_id"] == id)
    const nameDeatils = event.name
    document.title = `Details ${nameDeatils}`
    printDetails(event,main)
    })
    .catch( error => console.log('El Error Es: ', error))
    





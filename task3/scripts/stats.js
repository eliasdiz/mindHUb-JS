import {url, newList, infoTable1, infoTables, printTable1, printTables} from './module/functions.js'

const table1 = document.querySelector('.body-table1')
const table2 = document.querySelector('.body-table2')
const table3 = document.querySelector('.body-table3')

fetch(url)
    .then( result => result.json())
    .then( data => {
        const events = newList(data.events)
        const pastEvents = events.filter( event => event.date < data.currentDate)
        const upEvents = events.filter( event => event.date > data.currentDate)
        const table1Info = infoTable1(data)
        const infoUpcoming = infoTables(upEvents)
        const infoPast = infoTables(pastEvents)
        printTable1(table1Info,table1)
        printTables(infoUpcoming,table2)
        printTables(infoPast,table3)

    })
    .catch( error => console.log('El Error Es: ',error))









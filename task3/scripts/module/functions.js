export const url = 'https://mindhub-xj03.onrender.com/api/amazing'

export function createChekbox(list,container){
    list.forEach(category => {
        container.innerHTML += 
            `
            <div class="form-check">
            <label class="form-check-label"">${category}</label>
            <input class="form-check-input" type="checkbox" value="${category}">
            </div>
            `
        })
}

export function printCard(list,container){
    if(list.length === 0){return container.innerHTML = `<img src="./assets/images/searchDontFound.webp" alt="image" id="searchDontFound">`}
    list.forEach(event => {
        container.innerHTML += 
            `
            <div class="card" style="width: 18rem;">
            <img src=${event.image} class="card-img-top" alt="food">
            <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.description}</p>
            <a href="./details.html?id=${event['_id']}" class="btn btn-primary">Details</a>
            </div>
            </div>
            `
    });
}

export function filterCheck(list,categories){
    if(categories.length === 0) return list
    return list.filter( event =>  categories.includes(event.category))
}

export function filterSearch(list,string){
    return list.filter(event => event["name"].toLowerCase().includes(string.toLowerCase()))
}

export function getCategories(nodes){
    let categories = []
    nodes.forEach(category => {if(category){categories.push(category.value)}})
    return categories
} 

export function printDetails(event,conteiner){
    conteiner.innerHTML =
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
}

// STATS
export function newList(list){
    let newListEvents = []
    list.forEach( event => {
        if(event.estimate){
            let assistPercent = ((event.estimate / event.capacity) * 100)
            event.assistPercent = parseInt(assistPercent)
            let revenues = event.estimate * event.price
            event.revenues = revenues
            newListEvents.push(event)
        }
        else if(!event.estimate){
            let assistPercent = ((event.assistance / event.capacity) * 100)
            event.assistPercent = parseInt(assistPercent)
            let revenues = event.assistance * event.price
            event.revenues = revenues
            newListEvents.push(event)
        }
    });
    return newListEvents
} 

export function infoTable1(list){
    function Info(highAtt,loweAtt,lowerCap){
        this.highAtt = highAtt
        this.loweAtt = loweAtt
        this.lowerCap = lowerCap
    }
    let pastEvents = list.events.filter( past => past.date < list.currentDate)    
    let highest = newList(pastEvents).sort( (a,b) => b.assistPercent - a.assistPercent).slice(0,1)
    let lowest = newList(pastEvents).sort( (a,b) => a.assistPercent - b.assistPercent).slice(0,1)
    let larger = list.events.sort( (a,b) => b.capacity - a.capacity).slice(0,1)
    const newArray = new Info (`${highest[0].name}: ${highest[0].assistPercent} %`,`${lowest[0].name}: ${lowest[0].assistPercent} %`,`${larger[0].name}: ${larger[0].capacity}`)
    return [newArray]
}

export function printTable1(list,conteiner){
    list.forEach( item => {
        conteiner.innerHTML +=
        `   
        <tr>
            <td class="text-center">${item.highAtt}</td>
            <td class="text-center">${item.loweAtt}</td>
            <td class="text-center">${item.lowerCap}</td>     
        </tr>
        `
    })
}

export function infoTables(list){
    let aux = []
    const categories = [ ...new Set(list.map( event => event.category))]
    categories.forEach( category => {
        let revenue = list.map( event => {
            if( event.category.includes(category)){
                return event.revenues
            }
        }).filter(Boolean)
        let attendance = list.map( event => {
            if( event.category.includes(category)){
                return event.assistPercent
            }
        }).filter(Boolean)
        aux.push([ category, revenue.reduce( (a,b)=> a + b),(attendance.reduce( (a,b) => a + b)/attendance.length).toFixed(2)])
    })
    return aux
}

export function printTables(list,conteiner){
    list.forEach( item => {
        conteiner.innerHTML +=
        `   
        <tr>
            <td class="text-center">${item[0]}</td>
            <td class="text-center"> $ ${item[1]}</td>
            <td class="text-center">${item[2]} %</td>     
        </tr>
        `
    })
}
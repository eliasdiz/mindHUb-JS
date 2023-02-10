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
    let filtered = []
    categories.forEach(category => {
        list.forEach(event =>{
            if(category === event.category){
            filtered.push(event)
            }
        })
    })
    return filtered
}

export function filterSearch(list,string){
    let filtered = [] 
    list.filter(event => {
        if((event["name"].toLowerCase()).includes(string)){
            filtered.push(event)}})
            
    return filtered
}

export function getCategories(nodes){
    let categories = []
    nodes.forEach(category => {if(category){categories.push(category.value)}})
    return categories
}
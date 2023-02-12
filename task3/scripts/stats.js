



fetch(url)
    .then(result => result.json())
    .then( data => {
        const currentDate  = data.currentDate
        const events = [data.events]
        
    })  
    .catch(err => console.log('El Error es: ',err))




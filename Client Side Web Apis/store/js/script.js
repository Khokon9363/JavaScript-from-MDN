fetch('products.json')
    .then(res => {
        return res.json()
    })
    .then(json => {
        console.log(json)
    })
    .catch(err => {
        console.log(err)
    })
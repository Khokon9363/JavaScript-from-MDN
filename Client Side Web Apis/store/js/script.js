const category = document.getElementById('category')
const main = document.getElementById('main')
const search = document.getElementById('search')

let products

window.onload = function () {
    fetch('https://raw.githubusercontent.com/Khokon9363/JavaScript-from-MDN/master/Client%20Side%20Web%20Apis/store/js/products.json')
        .then(res => {
            return res.json() // It can be text() or blob()
        })
        .then(res => {
            products = res
        })
        .catch(err => {
            console.log(err)
        })
        
    function showProduct(product){
        let section = document.createElement('section')
        let h2 = document.createElement('h2')
        let p = document.createElement('p')
        let img = document.createElement('img')

            section.setAttribute('class', product.type)
            h2.textContent = product.name
            p.textContent = `$${product.price}`
            img.src = `images/${product.image}`
            img.alt = product.name
        
        section.appendChild(h2)
        section.appendChild(p)
        section.appendChild(img)
        main.appendChild(section)
    }

    function productShowLoop(products){
        main.innerHTML = ''
        if(!products) window.location.reload()
        for (let i = 0; i < products.length; i++) {
            showProduct(products[i])
        }
    }

    setTimeout(() => {
        productShowLoop(products)
    }, 250)

    function filterProducts() {
        let filteredProducts = products
            if(category.value == 'all'){
                    if(search.value.trim()){
                        filteredProducts = []
                        products.forEach(product => {
                            if (product.name.includes(search.value.trim())) {
                                filteredProducts.push(product)
                            }
                        })
                    }
                    productShowLoop(filteredProducts)
            } else if(category.value == 'vegetables' || category.value == 'meat' || category.value == 'soup'){
                filteredProducts = []
                    products.forEach(product => {
                        if(search.value.trim()){
                            if(product.name.includes(search.value.trim()) && product.type == category.value){
                                filteredProducts.push(product)
                            }
                        }else if(product.type == category.value){
                            filteredProducts.push(product)
                        }
                    })
                    productShowLoop(filteredProducts)
            }
    }

    category.addEventListener('change', filterProducts)
    search.addEventListener('keyup', filterProducts)
}
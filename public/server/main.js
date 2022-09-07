const url = "http://localhost:8888/api/V1/categories/";

const $productList = document.querySelector('[data-product]')
console.log($productList);

function renderProduct({image, name, price}){
    return`
    <div class="product-item">
       <div class="product-description">
                <img src="${image}" alt="${name}" />
                <h4 class="title-category-product">${name}</h4>
                <h4 class="title-category-price">R$${price.toLocaleString("pt-BR",{currency:"BRL"})}</h4>
                <button class="btn">Comprar</button>
        </div>

    </div>
    `
}

function getProducts(params){
   return axios.get(`${url}/${params}`);     
}

getProducts($productList.dataset.product).then(({data}) => {
    data.items.forEach(item => {
       const rendered = renderProduct(item);
       $productList.innerHTML += rendered;
    })
})



  
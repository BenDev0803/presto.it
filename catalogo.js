//Fetch

fetch("./catalogo.json")
.then(response => response.json())
.then( data => {

    function setCategoryFilter(){
        let categories = Array.from(new Set(data.map(el => el.category)));
        let categoriesWrapper = document.querySelector(`#categoriesWrapper`)

        categories.forEach(el =>{
            let div = document.createElement(`div`)
            div.classList.add(`form-check`);
            div.innerHTML = `
            
                <input class="form-check-input" type="radio" name="categories" id="${el}" value="option1">
                <label class="form-check-label" for="${el}">${el}</label>
            `
            categoriesWrapper.appendChild(div); 
        })
    }
    setCategoryFilter()

    function showCards(array){
        let cardWrapper = document.querySelector('#cardWrapper')


        array.forEach(el =>{

            let div = document.createElement(`div`);
            div.classList.add(`productCard`)
            div.innerHTML = `
            
            <div class="box">
            <div class="image">
                <img src="https://picsum.photos/300" alt="">
                <a href="#" class="fas fa-heart"></a>
            </div>
            <div id="" class="content">
                   <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <div id="productCard">
                    
                </div>
            </div>

            `

            cardWrapper.appendChild(div)
        })
    }

     showCards(data);   


    let radioFilters = document.querySelectorAll(`.form-check-input`)

    radioFilters.forEach(el => console.log(el.id))




})

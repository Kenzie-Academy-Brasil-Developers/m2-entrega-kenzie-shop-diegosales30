const containerProdutos = document.querySelector('.container_produtos');

export class app {
    static requisicao(){
        fetch('https://m2-kenzie-shop.herokuapp.com/products')
        .then(response => response.json())
        .then((data)=>{
            let arrayProdutos = data.products;
            let produtos = arrayProdutos.map((current) => current);
            this.template(produtos);
        })
    }

    static template(arr){
        arr.forEach((current) => {
            const figure   = document.createElement('figure');
            figure.classList.add('card--produtos');

            const divImg   = document.createElement('div');
            divImg.classList.add('div-img');
            

            const img = document.createElement('img');
            img.src = `https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint3/img/consumindo-api-produtos/${current.id}/Image.png`;
            

            const divStar  = document.createElement('div');
            divStar.classList.add('star');
            if(current.reviews == 5){
                divStar.innerHTML  = `
                <img src="src/img/Vector.png" alt="">
                <img src="src/img/Vector.png" alt="">
                <img src="src/img/Vector.png" alt="">
                <img src="src/img/Vector.png" alt="">
                <img src="src/img/Vector.png" alt="">
                
                `
            }else if(current.reviews == 4){
                divStar.innerHTML  = `
                <img src="src/img/Vector.png" alt="">
                <img src="src/img/Vector.png" alt="">
                <img src="src/img/Vector.png" alt="">
                <img src="src/img/Vector.png" alt="">
                <img src="src/img/VectorApagada.png" alt="">
                
                `
            }else if(current.reviews == 3){
                divStar.innerHTML  = `
                <img src="src/img/Vector.png" alt="">
                <img src="src/img/Vector.png" alt="">
                <img src="src/img/Vector.png" alt="">
                <img src="src/img/VectorApagada.png" alt="">
                <img src="src/img/VectorApagada.png" alt="">
                
                `
            }else if(current.reviews == 2){
                divStar.innerHTML  = `
                <img src="src/img/Vector.png" alt="">
                <img src="src/img/Vector.png" alt="">
                <img src="src/img/VectorApagada.png" alt="">
                <img src="src/img/VectorApagada.png" alt="">
                <img src="src/img/VectorApagada.png" alt="">
                `
            }else if(current.reviews == 1){
                divStar.innerHTML  = `
                <img src="src/img/Vector.png" alt="">
                <img src="src/img/VectorApagada.png" alt="">
                <img src="src/img/VectorApagada.png" alt="">
                <img src="src/img/VectorApagada.png" alt="">
                <img src="src/img/VectorApagada.png" alt="">
                `
            }else{
                divStar.innerHTML  = `
                <img src="src/img/VectorApagada.png" alt="">
                <img src="src/img/VectorApagada.png" alt="">
                <img src="src/img/VectorApagada.png" alt="">
                <img src="src/img/VectorApagada.png" alt="">
                <img src="src/img/VectorApagada.png" alt="">
                `
            }
            

            const p = document.createElement('p');
            p.innerText = `${current.productName}`;
            

            const span = document.createElement('span');
            if(current.promotionStatus){
                span.classList.add('preco-promocional');
                span.classList.remove('preco-normal');
                span.innerText = `de: R$${current.price.productPrice} por: R$${current.price.productPromotionPrice}`;
            }else{
                span.classList.add('preco-normal');
                span.innerText = `R$${current.price.productPrice},00`;
            }
            

            const btn = document.createElement('button');
            btn.innerText = 'COMPRAR';


            figure.appendChild(divImg)
            divImg.appendChild(img)
            figure.appendChild(divStar);
            figure.appendChild(p);
            figure.appendChild(span);
            figure.appendChild(btn);
            containerProdutos.appendChild(figure);
        })
        
    }
    

}
app.requisicao()






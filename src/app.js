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
            let estrela;
            const estrelaApagada = 5;
            switch (current.reviews){
                case 5:
                    estrela = 5;
                    break;
                case 4:
                    estrela = 4;
                    break;
                case 3:
                    estrela = 3;
                    break;
                case 2:
                    estrela = 2;
                    break;
                case 1:
                    estrela = 1;
                    break;
            }

            const output = estrelaApagada - estrela
            for(let i = 1; i <= estrela; i++){
                divStar.innerHTML += '<img src="src/img/Vector.png" alt="">'
            }
            for(let i = 1; i <= output; i++){
                divStar.innerHTML += '<img src="src/img/VectorApagada.png" alt="">'
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






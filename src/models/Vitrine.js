/**
    <figure class="card--produtos">
        <div class="div-img">
            <img src="src/Image.png" alt="">
        </div>
        <div class="star">
            <img src="src/img/Vector.png" alt="">
            <img src="src/img/Vector.png" alt="">
            <img src="src/img/Vector.png" alt="">
            <img src="src/img/Vector.png" alt="">
            <img src="src/img/VectorApagada.png" alt="">
        </div>
        <p>Professional teadrinking set for every designer and developer</p>
        <span>R$ 100,00</span>
        <button>COMPRAR</button>
    </figure>
 */
const container         = document.querySelector('.container')
const containerProdutos = document.querySelector('.container_produtos')
import { app } from "../app.js";



class Vitrine {
    static criaVitrine(prod){
        for(let i = 0; i < 12; i++){
            const figure = document.createElement('figure');
        figure.classList.add('card--produtos');
        figure.innerHTML = `
            <div class="div-img">
                <img src="src/Image.png" alt="">
            </div>
            <div class="star">
                <img src="src/img/Vector.png" alt="">
                <img src="src/img/Vector.png" alt="">
                <img src="src/img/Vector.png" alt="">
                <img src="src/img/Vector.png" alt="">
                <img src="src/img/VectorApagada.png" alt="">
            </div>
            <p>Professional teadrinking set for every designer and developer</p>
            <span>R$ 100,00</span>
            <button>COMPRAR</button>
        
        `
        containerProdutos.appendChild(figure)
        }
        
    }
}

//Vitrine.criaVitrine()
export {Vitrine};
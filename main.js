

import { getLista, limpaLista, adicionaItem } from "./lista.js";

const olItens = document.querySelector("#itens");
const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");


btnAdicionar.addEventListener('click', () => {
    const item = pEntrada.textContent.trim();
    adicionaItem(item);
    pEntrada.textContent = "";
    atualizarLista();
});
btnLimpar.addEventListener('click', limparItensDeLista);
function limparItensDeLista(){
    limpaLista();
    atualizarLista();
}

atualizarLista();
function atualizarLista(){
    olItens.innerHTML = "";
    let lista = getLista();
    for(let i=0; i< lista.length; i++){
        const li = document.createElement('li');
        li.textContent = lista[i];
        olItens.appendChild(li);
    }
}
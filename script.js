const imagem = document.querySelector('img');
const imagem2 = document.querySelector('#img2');
const imagem3 = document.querySelector('#img3');
const imagem4 = document.querySelector('#img4');

const nome = document.querySelector('h3');
const nome2 = document.querySelector('#nome2');
const nome3 = document.querySelector('#nome3');
const nome4 = document.querySelector('#nome4');

const botao = document.querySelector('button');


let nomeDoPersonagem;
gerarValorAleatorio = () => {
    let arr = [];
    for(let i=1;i<5;i++){
    arr.push(Math.floor(Math.random() * 670)+1)
    }
    let formatted_arr = arr.toString();
    return formatted_arr
}


pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch('https://rickandmortyapi.com/api/character/'+numeroAleatorio, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }

    }).then((response) => response.json())
      .then((data) => {
        imagem.src = data[0].image;
        imagem.alt = data[0].name;
        nomeDoPersonagem = data[0].name;
        nome.innerHTML = nomeDoPersonagem;

        imagem2.src = data[1].image;
        imagem2.alt = data[1].name;
        nomeDoPersonagem = data[1].name;
        nome2.innerHTML = nomeDoPersonagem;

        imagem3.src = data[2].image;
        imagem3.alt = data[2].name;
        nomeDoPersonagem = data[2].name;
        nome3.innerHTML = nomeDoPersonagem;

        imagem4.src = data[3].image;
        imagem4.alt = data[3].name;
        nomeDoPersonagem = data[3].name;
        nome4.innerHTML = nomeDoPersonagem;
    });
}

botao.onclick = pegarPersonagem;

window.onload = pegarPersonagem;
AOS.init();

const menu_hidden = document.querySelector('.menu');
const bars = document.querySelector('.fa-bars');

bars.addEventListener('click', () => {
    menu_hidden.classList.toggle('menu-block');
    bars.classList.toggle('fa-times');
});

const menu_localizacao_hidden = document.querySelector('.localizacao-menu-hidden');
const localizacao_bars = document.querySelector('#menu-barras');

localizacao_bars.addEventListener('click', () => {
    menu_localizacao_hidden.classList.toggle('localizacao-menu-visible');
    localizacao_bars.classList.toggle('fa-times');
});

let preco = document.querySelector('.saida-preco');
let btn_pedido = document.querySelector('.calcular');

btn_pedido.addEventListener('click', (event) => {
    event.preventDefault();
    btn_pedido.classList.toggle('calcular-focus');

    setTimeout(() => {
        btn_pedido.classList.toggle('calcular-focus');
    }, 300);

    let pasteis = document.querySelector('#pasteis').value;
    let suco = document.querySelector('#suco:checked').value;

    if (suco === "sim") {
        switch (pasteis) {
            case 'misto':
                preco.innerHTML = '08:00';
                break;
            case 'queijo':
                preco.innerHTML = '07:00';
                break;
            case 'presunto':
                preco.innerHTML = '07:00';
                break;
            case 'frango':
                preco.innerHTML = '08:00';
                break;
            default:
                alert("erro, tente novamente");
        }
    } else if (suco === "nao") {
        switch (pasteis) {
            case 'misto':
                preco.innerHTML = '06:00';
                break;
            case 'queijo':
                preco.innerHTML = '05:00';
                break;
            case 'presunto':
                preco.innerHTML = '05:00';
                break;
            case 'frango':
                preco.innerHTML = '06:00';
                break;
            default:
                alert("erro, tente novamente");
        };
    };
});
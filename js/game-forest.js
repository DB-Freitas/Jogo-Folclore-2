const lobisomem = document.querySelector('.lobisomem');
const plant = document.querySelector('.plant')

const jump = () => {
    lobisomem.classList.add('jump');

    setTimeout(()=> {

        lobisomem.classList.remove('jump');

    }, 1000)
}

const loop = setInterval(()=>{

    const plantPosition = plant.offsetLeft;
    const lobisomemPosition = +window.getComputedStyle(lobisomem).bottom.replace('px', '');


    console.log(lobisomemPosition);

    if (plantPosition <= 160 && plantPosition > 20 && lobisomemPosition < 65){

        plant.style.animation = 'none';
        plant.style.left = `${plantPosition}px`

        lobisomem.style.animation = 'none';
        lobisomem.style.bottom = `${lobisomemPosition}px`;

        lobisomem.classList.add('black-and-white');


        clearInterval(loop);
    }

}, 10);
document.addEventListener('keydown', jump)
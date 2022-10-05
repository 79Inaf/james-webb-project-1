const title = document.querySelector('.autotextressources');
const text = "titre du h2 ressources"

let index = 0;

const play = () => {
    title.innerHTML = text.slice(0, index)

    if (index > text.length) {
        index = text.length + 1;
        clearTimeout(timer);
    } else {
        index++;
    }
}

play();

let timer = setInterval(play, 175);
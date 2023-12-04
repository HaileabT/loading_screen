for (let i = 1; i < 9; ++i) {
    document.querySelector(`.one${i}`).style.borderColor = `rgb(${275-i*30}, ${45+i*1.5}, ${-10+i*35})`;
    document.querySelector(`.one${i}`).style.outlineColor = `rgb(${315-i*30}, ${55+i*1.5}, ${10+i*35})`;
    document.querySelector(`.one${i}`).style.width = `${25*i}px`;
    document.querySelector(`.one${i}`).style.height = `${25*i}px`;
    document.querySelector(`.one${i}`).style.zIndex = `${100+10*i}`;
    document.querySelector(`.one${i}`).style.animation = `anim 2s ${0.1*i}s cubic-bezier(0.69, 0.07, 0.29, 0.95) infinite`;
    document.querySelector(`.one${i}`).style.filter = `blur(${-0.2+0.2*i}px)`;
}
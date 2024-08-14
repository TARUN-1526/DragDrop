let cardCounter = 0;

document.getElementById('add-card').addEventListener('click', addCard);

function addCard() {
    cardCounter++;
    
    const card = document.createElement('div');
    card.className = 'card';
    card.style.top = `${Math.random() * 500}px`;
    card.style.left = `${Math.random() * 500}px`;
    
    const text = document.createElement('p');
    const showMore = document.createElement('span');
    
    const dummyText = "This is some dummy text that is longer than what is displayed.";
    
    text.textContent = dummyText;
    showMore.textContent = "Show more";
    showMore.className = 'show-more';
    
    showMore.addEventListener('click', function() {
        document.getElementById('full-text').textContent = dummyText;
        document.getElementById('popup').classList.remove('hidden');
    });
    
    card.appendChild(text);
    card.appendChild(showMore);
    
    document.getElementById('canvas').appendChild(card);
    
    makeDraggable(card);
}

function makeDraggable(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
    element.onmousedown = dragMouseDown;
    
    function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
    
    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }
    
    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('popup').classList.add('hidden');
});

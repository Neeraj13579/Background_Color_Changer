const button = document.querySelectorAll('.box')
const body = document.querySelector("body")

button.forEach(function(box){
    box.addEventListener('click', function(color){
        if(color.target.id === 'box1'){
            body.style.backgroundColor = "#a67da6"
        }
        if(color.target.id === 'box2'){
            body.style.backgroundColor = "#37B5B6"
        }
        if(color.target.id === 'box3'){
            body.style.backgroundColor = "#80ff00"
        }
        if(color.target.id === 'box4'){
            body.style.backgroundColor = "#E6A4B4"
        }
        if(color.target.id === 'box5'){
            body.style.backgroundColor ="#ffffff"
        }
    })
})
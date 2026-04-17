
tampa = document.getElementById("tampa")
box = document.getElementById("box")

box.addEventListener('click', ()=>{
    tampa.classList.add("top-open")
    tampa.classList.remove('top-closed')
})

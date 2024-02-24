const click = document.querySelector('#btn_1')
const hex = document.querySelector(".hex_code")
const con = document.querySelector('.container_bg')

function getRandomcolor(){
    let randomNum = Math.floor(Math.random() * 16777215).toString(16)
    return colorCode = "#" + randomNum
    
}





click.addEventListener("click", () => {
  con.style.backgroundColor = getRandomcolor()
   hex.innerHTML = getRandomcolor()
})

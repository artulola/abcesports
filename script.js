const botao = document.querySelector('#botao')

botao.addEventListener('click', () =>{
    window.scroll({
        top: 1800,
        behavior: "smooth"
    })
    
})

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    proxImg();
}, 5000)


function proxImg(){
    count++;

    if(count > 6){
        count =  1;
    }

    document.getElementById("radio"+count).checked = true;

}


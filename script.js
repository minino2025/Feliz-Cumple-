let contador=0;
const lluvia=document.getElementById("lluvia");

function crearbillete(){

    const billete=document.createElement("img")
    billete.src="imagenes/alepunto.jpeg";

    billete.classList.add("billete");

    billete.style.left=Math.random()*100+"vw";
    billete.style.animationDuration=(Math.random()*3+3)+"s";

    billete.addEventListener("click",()=>{
    contador++;
    document.getElementById("puntos").textContent="Dinero:"+contador+"💸"
    console.log(contador);
    billete.remove();
    });

    lluvia.appendChild(billete);

    setTimeout(()=>{
        billete.remove();
    },5000);
}

setInterval(crearbillete,300);
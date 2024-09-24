let inputs = [];
let punt = [];
let marcador = [];
let gameover = true;


let div1 = document.getElementById("botones");
let div2 = document.getElementById("punteros");
let mensaje = document.getElementById("txt");
let mensaje2 = document.getElementById("txt2");
let avisos = document.getElementById("avisos");
let msg1 = document.getElementById("msg1");
let msg2 = document.getElementById("msg2");
let progress = document.getElementById("progress");
let mcont = document.getElementById("mcont");
let ok = document.getElementById("ok");
let inicio = document.getElementById("play");
let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId;
progress.value = 100;
let numr;


function updateCounter() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    document.getElementById('counter').innerText = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}


function stopCounter() {
    clearInterval(intervalId);
    clearInterval(progreso);
    progress.value = 100; 
    document.getElementById('counter').innerText = `00:00:00`;
}

for(let i = 1; i <= 4; i++)
    {
        inputs.push(document.getElementById("btn" + i));
        punt.push(document.getElementById("nt" + i));
    }



div1.style.display = "none";
div2.style.display = "none";


let play = document.getElementById("iniciar");
let mensajes = document.getElementById("mensajes");

let cont1 = 0;
let cinit;

function animationn()
{
    cont1++;
    console.log(cont1);
    
           if(cont1 === 1)
           {
            avisos.style.display = "flex";
            msg2.style.display = "flex";
            mensaje2.innerHTML = "3";
           }
           else if(cont1 === 100)
            {
             mensaje2.innerHTML = "2";
            }
           else if(cont1 === 200)
           {
            mensaje2.innerHTML = "1";
           }

           else if(cont1 === 300)
           {
            
            clearInterval(cinit);
            avisos.style.display = "none";
            msg2.style.display = "none";
            mcont.style.display = "flex";
            div1.style.display = "flex";
            div2.style.display = "flex";
            inputs[0].style.backgroundColor = "rgb(205, 233, 238)";
            inputs[1].style.backgroundColor = "rgb(205, 233, 238)";
            inputs[2].style.backgroundColor = "rgb(205, 233, 238)";
            inputs[3].style.backgroundColor = "rgb(205, 233, 238)";
            mensajes.style.display = "none";
            progreso = setInterval(avanzar, 10);
            progress.value = 100;
            intervalId = setInterval(updateCounter, 1000);
           }

}

    

function iniciar()
{
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById('counter').innerText = `00:00:00`;
    msg1.style.display = "none";
    progress.value = 100;
    remove();
    generar();
    cinit = setInterval(animationn, 10);   
    cont1 = 0;  
}
        
let contador = 0;


function generar()
{
    
    numr = Math.round(Math.random() * (3 - 0) + 0)
    marcador[numr] = true;
    punt[numr].classList.add("animacion-entrar");
    punt[numr].innerText = contador++;
    
}

function perdiste()
{
    contador = 0;
    generar();
    remove();
    avisos.style.display = "flex";
    msg1.style.display = "flex";
    mcont.style.display = "none";
    // mensaje.innerHTML = `
    // <img style="border-radius: 10px;" src="https://mir-s3-cdn-cf.behance.net/projects/404/05c1e8173805207.Y3JvcCw1MzI4LDQxNjgsMjUwLDA.jpg" alt="" width="200px" height="200px"></img>
    // `;
    mensaje.innerHTML = "Perdiste"
    div1.style.display = "none";
    div2.style.display = "none";
    mensajes.style.display = "flex";

    
}

function desaparecer()
{
    avisos.style.display = "none";
    msg1.style.display = "none";
}


function remove()
{

    punt[0].classList.remove("animacion-entrar");
    marcador[0] = false;

    punt[1].classList.remove("animacion-entrar");
    marcador[1] = false;

    punt[2].classList.remove("animacion-entrar");
    marcador[2] = false;

    punt[3].classList.remove("animacion-entrar");
    marcador[3] = false;

    punt[0].innerText = '';
    punt[1].innerText = '';
    punt[2].innerText = '';
    punt[3].innerText = '';

    
}

            
            function avanzar() {
                progress.value--;
                if(progress.value == 0)
                {
                    perdiste();
                    stopCounter();
                    inputs[0].style.color = "black";
                }
            }
            




// Logica del minijuego

document.addEventListener("keypress" , (e) => {
    
    if (e.key == "d" || e.key == "D") 
    {
        inputs[0].style.backgroundColor = "rgb(116, 228, 112)";
        inputs[0].style.color = "white";
        console.log(e.key);
        

        if(marcador[0] === true && div1.style.display === "flex")
        {
            remove();
            generar();
            progress.value = 100;
        }
        else
        {
            if(div1.style.display === "flex")
                {
                    remove();
                    perdiste();
                    stopCounter();
                    inputs[0].style.color = "black";
                }
        }
        
    }

    if (e.key == "f" || e.key == "F") 
    {
        inputs[1].style.backgroundColor = "rgb(116, 228, 112)";
        inputs[1].style.color = "white";
        console.log(e.key);

        if(marcador[1] == true && div1.style.display === "flex")
            {
                remove();
                generar();    
                progress.value = 100;
            }
            else
            {
                if(div1.style.display === "flex")
                {
                    remove();
                    perdiste();
                    stopCounter();
                    inputs[1].style.color = "black";
                }
                
            }
    }

    if (e.key == "j" || e.key == "J") 
    {
        inputs[2].style.backgroundColor = "rgb(116, 228, 112)";
        inputs[2].style.color = "white";
        console.log(e.key);

        if(marcador[2] == true && div1.style.display === "flex")
            {
                remove();
                generar();
                progress.value = 100;
            }
            else
            {
                if(div1.style.display === "flex")
                    {
                        remove();
                        perdiste();
                        stopCounter();
                        inputs[2].style.color = "black";
                    }
            }
    }

    if (e.key == "k" || e.key == "K") 
    {
        inputs[3].style.backgroundColor = "rgb(116, 228, 112)";
        inputs[3].style.color = "white";
        console.log(e.key);

        if(marcador[3] == true && div1.style.display === "flex")
            {
                remove();
                generar();
                progress.value = 100;
            }
            else
            {
                if(div1.style.display === "flex")
                    {
                        remove();
                        perdiste();
                        stopCounter();
                        inputs[3].style.color = "black";
                    }
            }
    }

    

});


document.addEventListener("keyup" , (e) => {
    
    if (e.key == "d" || e.key == "D") 
    {
        inputs[0].style.backgroundColor = "rgb(155, 244, 250)";
        inputs[0].style.color = "black";
    }

    if (e.key == "f" || e.key == "F") 
    {
        inputs[1].style.backgroundColor = "rgb(155, 244, 250)";
        inputs[1].style.color = "black";
    }

    if (e.key == "j" || e.key == "J") 
    {
        inputs[2].style.backgroundColor = "rgb(155, 244, 250)";
        inputs[2].style.color = "black";
    }

    if (e.key == "k" || e.key == "K") 
    {
        inputs[3].style.backgroundColor = "rgb(155, 244, 250)";
        inputs[3].style.color = "black";
        
    }
    
});





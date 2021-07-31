/*
function hello()
{
    var nom = document.f.nom.value;
    var prenom = document.f.prenom.value;
    alert("Bonjour "+nom+" "+prenom);
}
*/

// variables
// let var qui a la possiblite d'evoluer

const btn = document.querySelector('#btn');
const img = document.getElementById('img');


btn.addEventListener('click', () =>{
    img.classList.toggle('show');
    btn.classList.toggle('btn');
})

// *****************************
/*
const mouseEvent = document.querySelector('.mouseEvent');
const hori = document.querySelector('.hori');
const verti = document.querySelector('.verti');

mouseEvent.addEventListener('mousemove', (e) =>{
    hori.innerHTML = e.x;
    verti.innerHTML = e.y;
    mouseEvent.style.left = e.x / window.innerWidth * 100 + "%";

    if(e.x > 900)
    {
        document.body.style.filter = "blur(3px)";
    }
    else
    {
        document.body.style.filter = "none";
    }
})
*/

// ******************************************

var zone = document.getElementById('text');
var btn2 = document.getElementById('btn2');

document.getElementById('nom').addEventListener('input', (e) => {
    zone.innerHTML = e.target.value;
});

btn2.addEventListener('click', () => {
    document.body.classList.toggle('darkmode');
})


// ************************

const theme = document.querySelectorAll('.th1');
const dark = document.querySelector('.dark');
const salmon = document.querySelector('.salmon');
const yellow = document.querySelector('.yellow');

theme.forEach((item) => {
    item.addEventListener('click', (e) => {
        document.body.classList.remove('darktheme', 'salmontheme', 'yellowtheme');
        switch(e.target.id)
        {
            case "dark":
                document.body.classList.add('darktheme');
                break;
            case "salmon":
                document.body.classList.add('salmontheme');
                break;
            case "yellow":
                document.body.classList.add('yellowtheme');
                break;
            default:
                null;
        }
    })
})
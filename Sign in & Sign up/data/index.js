
const change = (lien) => {
    let ch2 = lien.replace('je', '../');
    ch = ch2.split(':')[0];
}


const input = document.getElementById('input');
const video = document.getElementById('video');
let ch = '';

input.addEventListener('input', (e) => {
    change(e.target.value);
    video.innerHTML = '<img src="'+ch+'" alt="image" width="400"/>';
})

/*window.onload = function() {
    const btn = document.querySelector('#btn')
    btn.addEventListener('click', () => {
        alert('Im click')
    })
    btn.addEventListener('mousemove', () => {
        btn.style.left = '100px'
    })
};*/


document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector('.btn')
    btn.addEventListener('click', () => {
        alert('Im click')
    })
    btn.addEventListener('mousemove', () => {
        console.log(btn.style.left)
        btn.style.left = btn.style.left + '100px'
    })
});

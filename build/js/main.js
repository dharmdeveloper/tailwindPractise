const initApp = () =>{
    const hamburgerButton = document.getElementById('hamburger-button')
    const menu = document.getElementById('mobile-menu')

    const toggleMenu =() =>{
        menu.classList.toggle('hidden')
        menu.classList.toggle('flex')
        hamburgerButton.classList.toggle('toggle-btn')
    }

    hamburgerButton.addEventListener('click', toggleMenu)
    menu.addEventListener('click',toggleMenu)
}
document.addEventListener('DOMContentLoaded',initApp)
//Action of Navitation bar
const menuOpenButton=document.querySelector("#menu_open_button");
const menuCloseButton=document.querySelector("#menu_close_button");
const navLink=document.querySelectorAll(".nav_menu .nav_link")
menuOpenButton.addEventListener("click", () =>{
    // Toggle mobile menu visibility
   document.body.classList.toggle("show-mobile-menu");
});
// close menu when the button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navLink.forEach(link =>{
    link.addEventListener("click",()=> menuCloseButton.click());
})
// Dark-Mode
const body = document.querySelector("body");
        header = document.querySelector("header");
        modeToggle = document.querySelector(".dark-mode")
        modeToggle.addEventListener("click", () => {
        document.body.classList.toggle("active");
        body.classList.toggle("dark");
    });
// Acotion between login and registeration
const registerLink=document.querySelector('.register-link');
const loninLink=document.querySelector('.login-link');
registerLink.addEventListener('click', () =>{
   document.body.classList.toggle('action-login');
});
loninLink.addEventListener('click', () => registerLink.click());
//Acount login with icon
const account=document.querySelector("#account");
const closeForm=document.querySelector('#form-close');
account.addEventListener("click", () =>{
    document.body.classList.toggle("account-login");
});
closeForm.addEventListener('click', () => account.click());


// Handle switching between login and register forms
const showRegisterFormLink = document.querySelector('#showRegisterForm');
const showLoginFormLink = document.querySelector('#showLoginForm');
const loginForm = document.querySelector('#loginForm');
const registerForm = document.querySelector('#registerForm');
const formCloseButton = document.querySelector('#form-close');

// Show the register form when "Register" link is clicked
showRegisterFormLink.addEventListener('click', () => {
    loginForm.style.display = 'none'; // Hide login form
    registerForm.style.display = 'block'; // Show register form
});

// Show the login form when "Login" link is clicked
showLoginFormLink.addEventListener('click', () => {
    registerForm.style.display = 'none'; // Hide register form
    loginForm.style.display = 'block'; // Show login form
});

// Close the form when the close button is clicked
formCloseButton.addEventListener('click', () => {
    loginForm.style.display = 'none'; // Hide login form
    registerForm.style.display = 'none'; // Hide register form
});



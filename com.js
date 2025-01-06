const menuOpenButton=document.querySelector("#menu_open_button");
const menuCloseButton=document.querySelector("#menu_close_button");
menuOpenButton.addEventListener("click", () =>{
    // Toggle mobile menu visibility
   document.body.classList.toggle("show-mobile-menu");
});
// close menu when the button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());
// Dark-Mode
const body = document.querySelector("body");
        header = document.querySelector("header");
        modeToggle = document.querySelector(".dark-mode")
        modeToggle.addEventListener("click", () => {
        document.body.classList.toggle("active");
        body.classList.toggle("dark");
    });
//Acount login
const account=document.querySelector("#account");
const closeForm=document.querySelector('#form-close');
account.addEventListener("click", () =>{
    document.body.classList.toggle("account-login");
});
closeForm.addEventListener('click', () => account.click());


const menuOpenButton=document.querySelector("#menu_open_button");
const menuCloseButton=document.querySelector("#menu_close_button");
menuOpenButton.addEventListener("click", () =>{
    // Toggle mobile menu visibility
   document.body.classList.toggle("show-mobile-menu");
});
// close menu when the button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

const body = document.querySelector("body");
        header = document.querySelector("header");
        modeToggle = document.querySelector(".dark-mode")
        modeToggle.addEventListener("click", () => {
        document.body.classList.toggle("active");
        body.classList.toggle("dark");
    });

    const wrapper= document.querySelector('.wrapper');
    const loginLink=document.querySelector('.wrapper');
    const registerLink=document.querySelector('.wrapper');

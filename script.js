const shopBtn = document.getElementById("shopBtn");

shopBtn.addEventListener("click", () => {

    document.getElementById("products").scrollIntoView({

        behavior: "smooth"

    });

});

// <!-- check o input -->

            document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn việc gửi form mặc định

    var emailInput = document.getElementById("email");
    var errorMessage = document.getElementById("error-message");
    var successMessage = document.getElementById("success-message");

    if (emailInput.value === "") {
        errorMessage.style.display = "block";
        successMessage.style.display = "none";
    } else if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(emailInput.value)) {
        errorMessage.style.display = "none";
        successMessage.style.display = "block";
    } else {
        errorMessage.style.display = "block";
        successMessage.style.display = "none";
    }
});


    // <!-- modal search -->
  const openModalButton = document.getElementById("openModalButton");
const modalContainer = document.getElementById("modalContainer");
const closeModalButton = document.getElementById("closeModalButton");

openModalButton.addEventListener("click", () => {
    modalContainer.style.display = "block";
    setTimeout(() => {
        modalContainer.style.right = "0";
    }, 90);
});

closeModalButton.addEventListener("click", () => {
    modalContainer.style.right = "-400px";
    setTimeout(() => {
        modalContainer.style.display = "none";

    }, 300);
});


    // <!-- login -->
        const openModalButton02 = document.getElementById("openModalButton02");
const modalContainer02 = document.getElementById("modalContainer02");
const closeModalButton02 = document.getElementById("closeModalButton02");

openModalButton02.addEventListener("click", () => {
    modalContainer02.style.display = "block";
    setTimeout(() => {
        modalContainer02.style.right = "0";
    }, 90);
});

closeModalButton02.addEventListener("click", () => {
    modalContainer02.style.right = "-400px";
    setTimeout(() => {
        modalContainer02.style.display = "none";
    }, 300);
});

    // ioqhsdwgefy
        const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const loginButton = document.getElementById("loginButton");
const errorMessage = document.getElementById("errorMessage");

loginButton.addEventListener("click", () => {
    // Kiểm tra xem email và password có trống không
    if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
        errorMessage.classList.remove("hidden");
    } else {
        errorMessage.classList.add("hidden");
        // Thực hiện xử lý đăng nhập ở đây (đã được ẩn ở ví dụ)
    }
});

// cart
const cartIcon = document.getElementById("cartIcon");
const modalContainer03 = document.getElementById("modalContainer03");
const closeModalButton03 = document.getElementById("closeModalButton03");
const quantityInput = document.getElementById("quantityInput");
const totalPrice = document.getElementById("totalPrice");

cartIcon.addEventListener("click", () => {
    modalContainer03.style.display = "block";
    setTimeout(() => {
        modalContainer03.style.right = "0";
    }, 90);
});

closeModalButton03.addEventListener("click", () => {
    modalContainer03.style.right = "-400px";
    setTimeout(() => {
        modalContainer03.style.display = "none";
    }, 300);
});

quantityInput.addEventListener("input", updateTotalPrice);

function updateTotalPrice() {
    const pricePerItem = 68; // Giá tiền cho mỗi sản phẩm
    const quantity = quantityInput.value;
    const total = pricePerItem * quantity;
    totalPrice.innerText = total;
}



// xoa sp khoi cart
const hideDivLink = document.getElementById("hideDivLink");
const contentDiv = document.getElementById("contentDiv");

// Xử lý sự kiện khi click vào thẻ a
hideDivLink.addEventListener("click", () => {
    // Ẩn thẻ div
    contentDiv.style.display = "none";
});
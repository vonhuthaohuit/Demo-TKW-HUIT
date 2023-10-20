const navbarToggler = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', () => {
    navbarMenu.classList.toggle('show');
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var thumbnails = document.getElementsByClassName("thumbnail");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove("active-thumbnail");
    }
    slides[slideIndex - 1].style.display = "block";
    thumbnails[slideIndex - 1].classList.add("active-thumbnail");
}

const loginbtn = document.querySelector('#login-form')
const loginbtn2 = document.querySelector('#login-form2')
const closeLogin = document.querySelector('#close-login')

const registerbtn = document.querySelector('#register-form')
const closeRegister = document.querySelector('#close-register')

const buybtn = document.querySelector('#buy-form');
const closeBuy = document.querySelector('#close-buy');


console.log(loginbtn)

loginbtn.addEventListener("click", function () {
    document.querySelector('.login-form').style.display = "flex"
    document.querySelector('.register-form').style.display = "none"
})

loginbtn2.addEventListener("click", function () {
    document.querySelector('.login-form').style.display = "flex"
    document.querySelector('.register-form').style.display = "none"
})

closeLogin.addEventListener("click", function () {
    document.querySelector('.login-form').style.display = "none"
})

registerbtn.addEventListener("click", function () {
    document.querySelector('.login-form').style.display = "none"
    document.querySelector('.register-form').style.display = "flex"
})

closeRegister.addEventListener("click", function () {
    document.querySelector('.register-form').style.display = "none"
})

loginbtn.addEventListener("click", function () {
    document.querySelector('.login-form').style.display = "flex"
    document.querySelector('.register-form').style.display = "none"
})

buybtn.addEventListener("click", function () {
    document.querySelector('.buy-form').style.display = "flex";
});

closeBuy.addEventListener("click", function () {
    document.querySelector('.buy-form').style.display = "none";
});

function changeTypePassword() {
    document.getElementById('password').type = document.getElementById('password').type == 'text' ? 'password' : 'text';
}

function changeTypePassword2() {
    document.getElementById('register-password1').type = document.getElementById('register-password1').type == 'text' ? 'password' : 'text';
}
function changeTypePassword3() {
    document.getElementById('register-password2').type = document.getElementById('register-password2').type == 'text' ? 'password' : 'text';
}

var toggleButton = document.querySelector('.category-toggle');
var category = document.querySelector('.category');

toggleButton.addEventListener('click', function () {
    if (category.classList.contains('show-more')) {
        category.classList.remove('show-more');
        toggleButton.textContent = 'Xem thêm';
    } else {
        category.classList.add('show-more');
        toggleButton.textContent = 'Thu gọn';
    }
});

const slideWrapper = document.querySelector('.slide-wrapper');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let counter = 0;

function prevSlide() {
    counter--;
    if (counter < 0) {
        counter = 2;
    }
    slideWrapper.style.transform = `translateX(-${counter * 1180}px)`;
}

function nextSlide() {
    counter++;
    if (counter > 2) {
        counter = 0;
    }
    slideWrapper.style.transform = `translateX(-${counter * 1180}px)`;
}

const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        boxes.forEach((box) => {
            box.classList.remove("selected");
        });
        box.classList.add("selected");
    });
});

const boxes1 = document.querySelectorAll(".box1");
boxes1.forEach((box1) => {
    box1.addEventListener("click", () => {
        boxes1.forEach((box1) => {
            box1.classList.remove("selected");
        });
        box1.classList.add("selected");
    });
});

// kiểm tra Login, register

function validateformLogin() {
    // Lấy tham chiếu đến các phần tử trong biểu mẫu
    const form = document.getElementById('formLogin');
    const nameInput = document.getElementById('name');
    const passwordInput = document.getElementById('password');

    // Định nghĩa các biểu thức chính quy để kiểm tra định dạng tên và email
    const nameRegex = /^[a-zA-Z\sàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệđìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵ]+$/;
    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

    // Kiểm tra tên có được nhập hay không
    if (nameInput.value.trim() === '') {
        nameInput.classList.add('invalid');
        document.getElementById('nameError').innerHTML = 'Họ tên chưa được nhập';
        return false;
    } else if (!nameRegex.test(nameInput.value)) {
        nameInput.classList.add('invalid');
        document.getElementById('nameError').innerHTML = 'Họ tên không hợp lệ';
        return false;
    } else {
        nameInput.classList.remove('invalid');
        document.getElementById('nameError').innerHTML = '';
    }

    // Kiểm tra mật khẩu có được nhập hay không
    if (passwordInput.value.trim() === '') {
        passwordInput.classList.add('invalid');
        document.getElementById('passwordError').innerHTML = 'Mật khẩu chưa được nhập';
        return false;
    } else if (!passwordRegex.test(passwordInput.value)) {
        passwordInput.classList.add('invalid');
        document.getElementById('passwordError').innerHTML = 'Mật khẩu không hợp lệ';
        return false;
    } else {
        passwordInput.classList.remove('invalid');
        document.getElementById('passwordError').innerHTML = '';
    }

    // Nếu đến đây, có nghĩa là tất cả các trường đã được nhập đúng định dạng
    return true;
}

const formRegister = document.querySelector('.formRegister');
formRegister.addEventListener('submit', function (e) {
    e.preventDefault(); // ngăn người dùng gửi biểu mẫu nếu các trường không hợp lệ
    validateformRegister(); // kiểm tra các trường trong biểu mẫu
});

const formLogin = document.querySelector('.formLogin');
formLogin.addEventListener('submit', function (e) {
    e.preventDefault(); // ngăn người dùng gửi biểu mẫu nếu các trường không hợp lệ
    validateformLogin(); // kiểm tra các trường trong biểu mẫu
});

const formBuy = document.querySelector('.formBuy');
formLogin.addEventListener('submit', function (e) {
    e.preventDefault(); // ngăn người dùng gửi biểu mẫu nếu các trường không hợp lệ
    validateformBuy(); // kiểm tra các trường trong biểu mẫu
});

function validateformRegister() {
    // Get references to form elements
    const form = document.getElementById('formRegister');
    const nameInput = document.getElementById('register-name');
    const password1Input = document.getElementById("register-password1");
    const password2Input = document.getElementById("register-password2");
    
    const nameRegex = /^[a-zA-Z\sàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệđìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵ]+$/;
    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

    // Check if name is entered
    if (nameInput.value.trim() === '') {
        nameInput.classList.add('invalid');
        document.getElementById('register-nameError').innerHTML = 'Họ tên chưa được nhập';
        return false;
    } else if (!nameRegex.test(nameInput.value)) {
        nameInput.classList.add('invalid');
        document.getElementById('register-nameError').innerHTML = 'Họ tên không hợp lệ';
        return false;
    } else {
        nameInput.classList.remove('invalid');
        document.getElementById('register-nameError').innerHTML = '';
    }

    // Check if password is entered and valid
    if (password1Input.value.trim() === '') {
        password1Input.classList.add('invalid');
        document.getElementById("register-passwordError").style.display = "block";
        document.getElementById("register-passwordError").innerHTML = "Mật khẩu chưa được nhập";
        return false;
    } else if (!passwordRegex.test(password1Input.value)) {
        password1Input.classList.add('invalid');
        document.getElementById("register-passwordError").style.display = "block";
        document.getElementById("register-passwordError").innerHTML = "Mật khẩu không hợp lệ";
        return false;
    } else {
        document.getElementById("register-passwordError").style.display = "none";
        password1Input.classList.remove('invalid');
    }

    // Check if password confirmation is entered and matches password
    if (password2Input.value.trim() === '') {
        password2Input.classList.add('invalid');
        document.getElementById("register-passwordError2").style.display = "block";
        document.getElementById("register-passwordError2").innerHTML = "Xác nhận mật khẩu chưa được nhập";
        return false;
    } else if (password1Input.value.trim() !== password2Input.value.trim()) {
        password2Input.classList.add('invalid');
        document.getElementById("register-passwordError2").style.display = "block";
        document.getElementById("register-passwordError2").innerHTML = "Xác nhận mật khẩu không đúng";
        return false;
    } else {
        document.getElementById("register-passwordError2").style.display = "none";
        password2Input.classList.remove('invalid');
    }

    // All fields are valid
    return true;
}


function validateformBuy() {
    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('hoten');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');

    const nameRegex = /^[a-zA-Z\sàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệđìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵ]+$/;

    const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nameInput.value.trim() === '') {
        nameInput.classList.add('invalid');
        document.getElementById("hotenError").style.display = "block";
        document.getElementById("hotenError").innerHTML = "Họ tên chưa được nhập";
        return false;
    } else if (!nameRegex.test(nameInput.value)) {
        nameInput.classList.add('invalid');
        document.getElementById("hotenError").style.display = "block";
        document.getElementById("hotenError").innerHTML = "Họ tên không hợp lệ";
        return false;
    } else {
        document.getElementById("hotenError").style.display = "none";
        nameInput.classList.remove('invalid');
    }

    if (phoneInput.value.trim() === '') {
        phoneInput.classList.add('invalid');
        document.getElementById("sdtError").style.display = "block";
        document.getElementById("sdtError").innerHTML = "Số điện thoại chưa được nhập";
        return false;
    } else if (!phoneRegex.test(phoneInput.value)) {
        phoneInput.classList.add('invalid');
        document.getElementById("sdtError").style.display = "block";
        document.getElementById("sdtError").innerHTML = "Số điện thoại không hợp lệ";
        return false;
    } else {
        document.getElementById("sdtError").style.display = "none";
        phoneInput.classList.remove('invalid');
    }

    if (emailInput.value.trim() === '') {
        emailInput.classList.add('invalid');
        document.getElementById("emailError").style.display = "block";
        document.getElementById("emailError").innerHTML = "Email chưa được nhập";
        return false;
    } else if (!emailRegex.test(emailInput.value)) {
        emailInput.classList.add('invalid');
        document.getElementById("emailError").style.display = "block";
        document.getElementById("emailError").innerHTML = "Email không đúng định dạng";
        return false;
    } else {
        document.getElementById("emailError").style.display = "none";
        emailInput.classList.remove('invalid');
    }
    return true;
}
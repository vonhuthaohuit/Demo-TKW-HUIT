// lấy phần Modal
var modal = document.getElementsByClassName('myModal');

// Lấy phần div mở Modal
var divModal = document.getElementsByClassName("myDivModal");

// Lấy phần span đóng Modal
var span = document.getElementsByClassName("close")[0];

// Khi button được click thi mở Modal
divModal.onclick = function() {
    modal.style.display = "block";
}

// Khi span được click thì đóng Modal
span.onclick = function() {
    modal.style.display = "none";
}

// Khi click ngoài Modal thì đóng Modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


const loginbtn = document.querySelector('#login-form')
const loginbtn2 = document.querySelector('#login-form2')
const closeLogin = document.querySelector('#close-login')
const registerbtn = document.querySelector('#register-form')
const closeRegister = document.querySelector('#close-register')
console.log(loginbtn)
loginbtn.addEventListener("click", function(){
    document.querySelector('.login-form').style.display = "flex"
    document.querySelector('.register-form').style.display = "none"
})

loginbtn2.addEventListener("click", function(){
    document.querySelector('.login-form').style.display = "flex"
    document.querySelector('.register-form').style.display = "none"
})

closeLogin.addEventListener("click", function(){
    document.querySelector('.login-form').style.display = "none"
})

registerbtn.addEventListener("click", function(){
    document.querySelector('.login-form').style.display = "none"
    document.querySelector('.register-form').style.display = "flex"
})

closeRegister.addEventListener("click", function(){
    document.querySelector('.register-form').style.display = "none"
})

loginbtn.addEventListener("click", function(){
    document.querySelector('.login-form').style.display = "flex"
    document.querySelector('.register-form').style.display = "none"
})

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
        document.getElementById("register-passwordError").style.display = "block";
        document.getElementById("register-passwordError").innerHTML = "Xác nhận mật khẩu chưa được nhập";
        return false;
    } else if (password1Input.value.trim() !== password2Input.value.trim()) {
        password2Input.classList.add('invalid');
        document.getElementById("register-passwordError").style.display = "block";
        document.getElementById("register-passwordError").innerHTML = "Xác nhận mật khẩu không đúng";
        return false;
    } else {
        document.getElementById("register-passwordError").style.display = "none";
        password2Input.classList.remove('invalid');
    }

    // All fields are valid
    return true;
}

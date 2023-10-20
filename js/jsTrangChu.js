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

/* */


function phuKien_BaoHanh_Gia_loai1(){
    document.getElementById("panel_loai1").style.display = "block";
    document.getElementById("panel_loai2").style.display = "none";
    document.getElementById("panel_loai3").style.display = "none";
    document.getElementById("panel_loai4").style.display = "none";
}
function phuKien_BaoHanh_Gia_loai2(){
    document.getElementById("panel_loai1").style.display = "none";
    document.getElementById("panel_loai2").style.display = "block";
    document.getElementById("panel_loai3").style.display = "none";
    document.getElementById("panel_loai4").style.display = "none";
}
function phuKien_BaoHanh_Gia_loai3(){
    document.getElementById("panel_loai1").style.display = "none";
    document.getElementById("panel_loai2").style.display = "none";
    document.getElementById("panel_loai3").style.display = "block";
    document.getElementById("panel_loai4").style.display = "none";
}
function phuKien_BaoHanh_Gia_loai4(){
    document.getElementById("panel_loai1").style.display = "none";
    document.getElementById("panel_loai2").style.display = "none";
    document.getElementById("panel_loai3").style.display = "none";
    document.getElementById("panel_loai4").style.display = "block";
}
function gia(){
    document.getElementById("panel1_gia").style.display = "block";
    document.getElementById("panel2_gia").style.display = "none";
}
function gia1(){
    document.getElementById("panel1_gia").style.display = "none";
    document.getElementById("panel2_gia").style.display = "block";
}

function xemThem(){
    var a = document.getElementById("xemthem").style.display = "block";
    var b = document.getElementById("none-chu").style.display = "none";
    var c = document.getElementById("none-chu1").style.display = "flex";
}

function xemThem1(){
    var a = document.getElementById("xemthem1").style.display = "block";
    var b = document.getElementById("none-chu1").style.display = "none";
}

// function phuKien_BaoHanh_Gia_loai1(){
//     let loai_1 = document.getElementsByClassName("panel_loai1");
//     loai_1.map((val, index) => {
//         val.style.display = "block";
//     });
//     let loai_2 = document.getElementsByClassName("panel_loai2");
//     loai_2.map((val, index) => {
//         val.style.display = "none";
//     });

//     let loai_3 = document.getElementsByClassName("panel_loai3");
//     loai_3.map((val, index) => {
//         val.style.display = "none";
//     });

//     let loai_4 = document.getElementsByClassName("panel_loai4");
//     loai_4.map((val, index) => {
//         val.style.display = "none";
//     });
// }
// function phuKien_BaoHanh_Gia_loai2(){
//     let loai_1 = document.getElementsByClassName("panel_loai1");
//     loai_2.map((val, index) =>{
//         val.style.display = "none";
//     });
//     let loai_3 = document.getElementsByClassName("panel_loai3");
//     loai_2.map((val, index) =>{
//         val.style.display = "none";
//     });
//     let loai_4 = document.getElementsByClassName("panel_loai4");
//     loai_2.map((val, index) =>{
//         val.style.display = "none";
//     });
//     let loai_2 = document.getElementsByClassName("panel_loai2");
//     loai_2.map((val, index) =>{
//         val.style.display = "block";
//     });
// }
// function phuKien_BaoHanh_Gia_loai3(){
//     let loai_1 = document.getElementsByClassName("panel_loai1");
//     loai_3.map((val, index) =>{
//         val.style.display = "none";
//     });
//     let loai_2 = document.getElementsByClassName("panel_loai2");
//     loai_3.map((val, index) =>{
//         val.style.display = "none";
//     });
//     let loai_4 = document.getElementsByClassName("panel_loai4");
//     loai_3.map((val, index) =>{
//         val.style.display = "none";
//     });
//     let loai_3 = document.getElementsByClassName("panel_loai3");
//     loai_3.map((val, index) =>{
//         val.style.display = "block";
//     });
// }
// function phuKien_BaoHanh_Gia_loai4(){
//     let loai_1 = document.getElementsByClassName("panel_loai1");
//     loai_4.map((val, index) =>{
//         val.style.display = "none";
//     });
//     let loai_2 = document.getElementsByClassName("panel_loai2");
//     loai_4.map((val, index) =>{
//         val.style.display = "none";
//     });
//     let loai_3 = document.getElementsByClassName("panel_loai3");
//     loai_4.map((val, index) =>{
//         val.style.display = "none";
//     });
//     let loai_4 = document.getElementsByClassName("panel_loai4");
//     loai_4.map((val, index) =>{
//         val.style.display = "block";
//     });
// }
// function gia(){
//     let gia_1 =  document.getElementsByClassName("panel1_gia");
//     gia_1.map((val, index) =>{
//         val.style.display = "block";
//     });
//     let gia_2 =  document.getElementsByClassName("panel2_gia");
//     gia_1.map((val, index) =>{
//         val.style.display = "none";
//     });
    
// }
// function gia1(){
//     let gia_1 =  document.getElementsByClassName("panel1_gia");
//     gia_2.map((val, index) =>{
//         val.style.display = "none";
//     });
//     let gia_2 =  document.getElementsByClassName("panel2_gia");
//     gia_2.map((val, index) =>{
//         val.style.display = "block";
//     });
// }


function changeTypePassword(){
    document.getElementById('password').type = document.getElementById('password').type == 'text' ? 'password' : 'text';
}

function changeTypePassword2() {
    document.getElementById('register-password1').type = document.getElementById('register-password1').type == 'text' ? 'password' : 'text';
}
function changeTypePassword3() {
    document.getElementById('register-password2').type = document.getElementById('register-password2').type == 'text' ? 'password' : 'text';
}
        // kiểm tra MK mạnh yếu
const indicator = document.querySelector(".indicator");
const input = document.querySelector("input");
const weak = document.querySelector(".yeu");
const medium = document.querySelector(".binh-thuong");
const strong = document.querySelector(".manh");
const text = document.querySelector(".text");
const showBtn = document.querySelector(".showBtn");
let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
function trigger(){
    if(input.value != ""){
        indicator.style.display = "block";
        indicator.style.display = "flex";
        if(input.value.length <= 3 && (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong)))no=1;
        if(input.value.length >= 6 && ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) || (input.value.match(regExpMedium) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong))))no=2;
        if(input.value.length >= 6 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong))no=3;
        if(no==1){
        weak.classList.add("active");
        text.style.display = "block";
        text.textContent = "Mật Khẩu Bạn Yếu";
        text.classList.add("weak");
        }
        if(no==2){
        medium.classList.add("active");
        text.textContent = "Mật Khẩu Bạn Bình Thường";
        text.classList.add("medium");
        }else{
        medium.classList.remove("active");
        text.classList.remove("medium");
        }
        if(no==3){
        weak.classList.add("active");
        medium.classList.add("active");
        strong.classList.add("active");
        text.textContent = "Mật Khẩu Bạn  Mạnh";
        text.classList.add("strong");
        }else{
        strong.classList.remove("active");
        text.classList.remove("strong");
        }
    }
}


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
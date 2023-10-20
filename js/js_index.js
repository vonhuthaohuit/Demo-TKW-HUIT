
//document.getElementById("showcart").style.display = "none";


// Lấy phần tử HTML đại diện cho sản phẩm


// Iphone


// Chuyển Trang Iphone


function chuyenTrang_SP_Iphone() {
    const Elements = Array.from(document.querySelectorAll('.iphone'));

    // Chuyển đổi các phần tử thành một mảng đối tượng
    const Objects = Elements.map((element) => {
        const a_href = element.querySelector('a').getAttribute('href');
        const title = element.querySelector('.product-title').textContent.replace(/\s+/g, ' ').replace(/\n/g, '').trim();
        const price = element.querySelector('.gia').textContent.replace(/\s+/g, ' ').replace(/\n/g, '').trim();
        const giam_gia = element.querySelector('s').textContent.replace(/\n/g, '').trim();
        var danh_gia;
        if (element.querySelector('.danh-gia') != null) {
            danh_gia = element.querySelector('.danh-gia').textContent;
        }
        else {
            danh_gia = '0 đánh giá';
        }
        const imageUrl = element.querySelector('.img-fluid').getAttribute('src');
        const dem = element.querySelectorAll('.sao-vang').length;
        const rating = (element.querySelector('.sao-vang, .sao-trang').getAttribute('src'));
        const rating1 = element.querySelector('.sao-trang').getAttribute('src');
        const saleOff = element.querySelector('.giam-gia').textContent.replace(/\s+/g, ' ').replace(/\n/g, '').trim();
        return { a_href, title, price, giam_gia, danh_gia, imageUrl, rating, rating1, dem, saleOff };
    });
    // Chuyển đổi mảng đối tượng thành chuỗi JSON
    const jsonString = JSON.stringify(Objects);
    console.log(jsonString)
    window.localStorage.setItem('hello', jsonString);
    window.location.assign("san_pham_iphone.html");
}


// Chuyển Trang Sam Sung



function chuyenTrang_SP_SamSung() {
    const Elements = Array.from(document.querySelectorAll('.samsung'));

    // Chuyển đổi các phần tử thành một mảng đối tượng
    const Objects = Elements.map((element) => {
        const a_href = element.querySelector('a').getAttribute('href');
        const title = element.querySelector('.product-title').textContent.replace(/\s+/g, ' ').replace(/\n/g, '').trim();
        const price = element.querySelector('.gia').textContent.replace(/\s+/g, ' ').replace(/\n/g, '').trim();
        const giam_gia = element.querySelector('s').textContent.replace(/\n/g, '').trim();
        var danh_gia;
        if (element.querySelector('.danh-gia') != null) {
            danh_gia = element.querySelector('.danh-gia').textContent;
        }
        else {
            danh_gia = '0 đánh giá';
        }
        const imageUrl = element.querySelector('.img-fluid').getAttribute('src');
        const dem = element.querySelectorAll('.sao-vang').length;
        const rating = (element.querySelector('.sao-vang, .sao-trang').getAttribute('src'));
        const rating1 = element.querySelector('.sao-trang').getAttribute('src');
        const saleOff = element.querySelector('.giam-gia').textContent.replace(/\s+/g, ' ').replace(/\n/g, '').trim();
        return { a_href, title, price, giam_gia, danh_gia, imageUrl, rating, rating1, dem, saleOff };
    });
    // Chuyển đổi mảng đối tượng thành chuỗi JSON
    const jsonString = JSON.stringify(Objects);
    console.log(jsonString)
    window.localStorage.setItem('hello', jsonString);
    window.location.assign("san_pham_samsung.html");
}


// Chuyển Trang Xiaomi


function chuyenTrang_SP_Xiaomi() {
    const Elements = Array.from(document.querySelectorAll('.xiaomi'));

    // Chuyển đổi các phần tử thành một mảng đối tượng
    const Objects = Elements.map((element) => {
        const a_href = element.querySelector('a').getAttribute('href');
        const title = element.querySelector('.product-title').textContent.replace(/\s+/g, ' ').replace(/\n/g, '').trim();
        const price = element.querySelector('.gia').textContent.replace(/\s+/g, ' ').replace(/\n/g, '').trim();
        const giam_gia = element.querySelector('s').textContent.replace(/\n/g, '').trim();
        var danh_gia;
        if (element.querySelector('.danh-gia') != null) {
            danh_gia = element.querySelector('.danh-gia').textContent;
        }
        else {
            danh_gia = '0 đánh giá';
        }
        const imageUrl = element.querySelector('.img-fluid').getAttribute('src');
        const dem = element.querySelectorAll('.sao-vang').length;
        const rating = (element.querySelector('.sao-vang, .sao-trang').getAttribute('src'));
        const rating1 = element.querySelector('.sao-trang').getAttribute('src');
        const saleOff = element.querySelector('.giam-gia').textContent.replace(/\s+/g, ' ').replace(/\n/g, '').trim();
        return { a_href, title, price, giam_gia, danh_gia, imageUrl, rating, rating1, dem, saleOff };
    });
    // Chuyển đổi mảng đối tượng thành chuỗi JSON
    const jsonString = JSON.stringify(Objects);
    console.log(jsonString)
    window.localStorage.setItem('hello', jsonString);
    window.location.assign("san_pham_xiaomi.html");
}


// Chuyển Trang Realme


function chuyenTrang_SP_Realme() {
    const Elements = Array.from(document.querySelectorAll('.realme'));

    // Chuyển đổi các phần tử thành một mảng đối tượng
    const Objects = Elements.map((element) => {
        const a_href = element.querySelector('a').getAttribute('href');
        const title = element.querySelector('.product-title').textContent.replace(/\s+/g, ' ').replace(/\n/g, '').trim();
        const price = element.querySelector('.gia').textContent.replace(/\s+/g, ' ').replace(/\n/g, '').trim();
        const giam_gia = element.querySelector('s').textContent.replace(/\n/g, '').trim();
        var danh_gia;
        if (element.querySelector('.danh-gia') != null) {
            danh_gia = element.querySelector('.danh-gia').textContent;
        }
        else {
            danh_gia = '0 đánh giá';
        }
        const imageUrl = element.querySelector('.img-fluid').getAttribute('src');
        const dem = element.querySelectorAll('.sao-vang').length;
        const rating = (element.querySelector('.sao-vang, .sao-trang').getAttribute('src'));
        const rating1 = element.querySelector('.sao-trang').getAttribute('src');
        const saleOff = element.querySelector('.giam-gia').textContent.replace(/\s+/g, ' ').replace(/\n/g, '').trim();
        return { a_href, title, price, giam_gia, danh_gia, imageUrl, rating, rating1, dem, saleOff };
    });
    // Chuyển đổi mảng đối tượng thành chuỗi JSON
    const jsonString = JSON.stringify(Objects);
    console.log(jsonString)
    window.localStorage.setItem('hello', jsonString);
    window.location.assign("san_pham_realme.html");
}


// Chuyển Trang Oppo


function chuyenTrang_SP_Oppo() {
    const Elements = Array.from(document.querySelectorAll('.oppo'));

    // Chuyển đổi các phần tử thành một mảng đối tượng
    const Objects = Elements.map((element) => {
        const a_href = element.querySelector('a').getAttribute('href');
        const title = element.querySelector('.product-title').textContent.replace(/\s+/g, ' ').replace(/\n/g, '').trim();
        const price = element.querySelector('.gia').textContent.replace(/\s+/g, ' ').replace(/\n/g, '').trim();
        const giam_gia = element.querySelector('s').textContent.replace(/\n/g, '').trim();
        var danh_gia;
        if (element.querySelector('.danh-gia') != null) {
            danh_gia = element.querySelector('.danh-gia').textContent;
        }
        else {
            danh_gia = '0 đánh giá';
        }
        const imageUrl = element.querySelector('.img-fluid').getAttribute('src');
        const dem = element.querySelectorAll('.sao-vang').length;
        const rating = (element.querySelector('.sao-vang, .sao-trang').getAttribute('src'));
        const rating1 = element.querySelector('.sao-trang').getAttribute('src');
        const saleOff = element.querySelector('.giam-gia').textContent.replace(/\s+/g, ' ').replace(/\n/g, '').trim();
        return { a_href, title, price, giam_gia, danh_gia, imageUrl, rating, rating1, dem, saleOff };
    });
    // Chuyển đổi mảng đối tượng thành chuỗi JSON
    const jsonString = JSON.stringify(Objects);
    console.log(jsonString)
    window.localStorage.setItem('hello', jsonString);
    window.location.assign("san_pham_oppo.html");
}


// Chuyển Trang Vivo


function chuyenTrang_SP_Vivo() {
    const Elements = Array.from(document.querySelectorAll('.vivo'));

    // Chuyển đổi các phần tử thành một mảng đối tượng
    const Objects = Elements.map((element) => {
        const a_href = element.querySelector('a').getAttribute('href');
        const title = element.querySelector('.product-title').textContent.replace(/\s+/g, ' ').replace(/\n/g, '').trim();
        const price = element.querySelector('.gia').textContent.replace(/\s+/g, ' ').replace(/\n/g, '').trim();
        const giam_gia = element.querySelector('s').textContent.replace(/\n/g, '').trim();
        var danh_gia;
        if (element.querySelector('.danh-gia') != null) {
            danh_gia = element.querySelector('.danh-gia').textContent;
        }
        else {
            danh_gia = '0 đánh giá';
        }
        const imageUrl = element.querySelector('.img-fluid').getAttribute('src');
        const dem = element.querySelectorAll('.sao-vang').length;
        const rating = (element.querySelector('.sao-vang, .sao-trang').getAttribute('src'));
        const rating1 = element.querySelector('.sao-trang').getAttribute('src');
        const saleOff = element.querySelector('.giam-gia').textContent.replace(/\s+/g, ' ').replace(/\n/g, '').trim();
        return { a_href, title, price, giam_gia, danh_gia, imageUrl, rating, rating1, dem, saleOff };
    });
    // Chuyển đổi mảng đối tượng thành chuỗi JSON
    const jsonString = JSON.stringify(Objects);
    console.log(jsonString)
    window.localStorage.setItem('hello', jsonString);
    window.location.assign("san_pham_vivo.html");
}


// Chuyển Trang Nokia


function chuyenTrang_SP_Nokia() {
    const Elements = Array.from(document.querySelectorAll('.nokia'));

    // Chuyển đổi các phần tử thành một mảng đối tượng
    const Objects = Elements.map((element) => {
        const a_href = element.querySelector('a').getAttribute('href');
        const title = element.querySelector('.product-title').textContent.replace(/\s+/g, ' ').replace(/\n/g, '').trim();
        const price = element.querySelector('.gia').textContent.replace(/\s+/g, ' ').replace(/\n/g, '').trim();
        const giam_gia = element.querySelector('s').textContent.replace(/\n/g, '').trim();
        var danh_gia;
        if (element.querySelector('.danh-gia') != null) {
            danh_gia = element.querySelector('.danh-gia').textContent;
        }
        else {
            danh_gia = '0 đánh giá';
        }
        const imageUrl = element.querySelector('.img-fluid').getAttribute('src');
        const dem = element.querySelectorAll('.sao-vang').length;
        const rating = (element.querySelector('.sao-vang, .sao-trang').getAttribute('src'));
        const rating1 = element.querySelector('.sao-trang').getAttribute('src');
        const saleOff = element.querySelector('.giam-gia').textContent.replace(/\s+/g, ' ').replace(/\n/g, '').trim();
        return { a_href, title, price, giam_gia, danh_gia, imageUrl, rating, rating1, dem, saleOff };
    });
    // Chuyển đổi mảng đối tượng thành chuỗi JSON
    const jsonString = JSON.stringify(Objects);
    console.log(jsonString)
    window.localStorage.setItem('hello', jsonString);
    window.location.assign("san_pham_nokia.html");
}



//





function sortTheoGiaTangDan_Iphone() {
    const sanPham = Array.from(document.querySelectorAll('.iphone'));
    sanPham.sort(function (a, b) {
        const giaA = parseInt(a.querySelector('.gia').textContent.replace(/[^\d]/g, ""));
        const giaB = parseInt(b.querySelector('.gia').textContent.replace(/[^\d]/g, ""));
        return giaA - giaB;
    });
    const danhSachSanPham = document.querySelector('#danh-sach-san-pham');
    sanPham.forEach(function (sp) {
        danhSachSanPham.appendChild(sp);
    });
    const check = Array.from(document.querySelectorAll('.col-6,col-md-3'));
    console.log(check);
    for (let i = 0; i < check.length; i++) {
        if (!check[i].classList.contains("iphone")) {
            check[i].style.display = "none";
        }
        else {
            check[i].style.display = "block";
        }
    }
    //console.log(document.querySelector('#danh-sach-san-pham').querySelectorAll(":not(.iphone)"))

}

function sortTangDan_Iphone() {
    document.getElementById("sanpham").style.display = "none";
    sortTheoGiaTangDan_Iphone();
    document.getElementById("danh-sach-san-pham").style.display = "flex";
}


function sortTheoGiaGiamDan_Iphone() {
    const sanPham = Array.from(document.querySelectorAll('.iphone'));
    sanPham.sort(function (a, b) {
        const giaA = parseInt(a.querySelector('.gia').textContent.replace(/[^\d]/g, ""));
        const giaB = parseInt(b.querySelector('.gia').textContent.replace(/[^\d]/g, ""));
        return giaB - giaA;
    });
    const danhSachSanPham = document.querySelector('#danh-sach-san-pham');
    sanPham.forEach(function (sp) {
        danhSachSanPham.appendChild(sp);
    });
    const check = Array.from(document.querySelectorAll('.col-6,col-md-3'));
    console.log(check);
    for (let i = 0; i < check.length; i++) {
        if (!check[i].classList.contains("iphone")) {
            check[i].style.display = "none";
        }
        else {
            check[i].style.display = "block";
        }
    }
}

function sortGiamDan_Iphone() {
    document.getElementById("sanpham").style.display = "none";
    sortTheoGiaGiamDan_Iphone();
    document.getElementById("danh-sach-san-pham").style.display = "flex";
}


// Sam Sung

function sortTheoGiaTangDan_SamSung() {
    const sanPham = Array.from(document.querySelectorAll('.samsung'));
    sanPham.sort(function (a, b) {
        const giaA = parseInt(a.querySelector('.gia').textContent.replace(/[^\d]/g, ""));
        const giaB = parseInt(b.querySelector('.gia').textContent.replace(/[^\d]/g, ""));
        return giaA - giaB;
    });
    const danhSachSanPham = document.querySelector('#danh-sach-san-pham');
    sanPham.forEach(function (sp) {
        danhSachSanPham.appendChild(sp);
    });
    const check = Array.from(document.querySelectorAll('.col-6,col-md-3'));
    console.log(check);
    for (let i = 0; i < check.length; i++) {
        if (!check[i].classList.contains("samsung")) {
            check[i].style.display = "none";
        }
        else {
            check[i].style.display = "block";
        }
    }
}

function sortTangDan_SamSung() {
    document.getElementById("sanpham").style.display = "none";
    sortTheoGiaTangDan_SamSung();
    document.getElementById("danh-sach-san-pham").style.display = "flex";
}

function sortTheoGiaGiamDan_SamSung() {
    const sanPham = Array.from(document.querySelectorAll('.samsung'));
    sanPham.sort(function (a, b) {
        const giaA = parseInt(a.querySelector('.gia').textContent.replace(/[^\d]/g, ""));
        const giaB = parseInt(b.querySelector('.gia').textContent.replace(/[^\d]/g, ""));
        return giaB - giaA;
    });
    const danhSachSanPham = document.querySelector('#danh-sach-san-pham');
    sanPham.forEach(function (sp) {
        danhSachSanPham.appendChild(sp);
    });
    const check = Array.from(document.querySelectorAll('.col-6,col-md-3'));
    console.log(check);
    for (let i = 0; i < check.length; i++) {
        if (!check[i].classList.contains("samsung")) {
            check[i].style.display = "none";
        }
        else {
            check[i].style.display = "block";
        }
    }
}

function sortGiamDan_SamSung() {
    document.getElementById("sanpham").style.display = "none";
    sortTheoGiaGiamDan_SamSung();
    document.getElementById("danh-sach-san-pham").style.display = "flex";
}

// Xiaomi

function sortTheoGiaTangDan_Xiaomi() {
    const sanPham = Array.from(document.querySelectorAll('.xiaomi'));
    sanPham.sort(function (a, b) {
        const giaA = parseInt(a.querySelector('.gia').textContent.replace(/[^\d]/g, ""));
        const giaB = parseInt(b.querySelector('.gia').textContent.replace(/[^\d]/g, ""));
        return giaA - giaB;
    });
    const danhSachSanPham = document.querySelector('#danh-sach-san-pham');
    sanPham.forEach(function (sp) {
        danhSachSanPham.appendChild(sp);
    });
    const check = Array.from(document.querySelectorAll('.col-6,col-md-3'));
    console.log(check);
    var check2 = console.log(sanPham[0].classList.contains("xiaomi"));
    for (let i = 0; i < check.length; i++) {
        if (!check[i].classList.contains("xiaomi")) {
            check[i].style.display = "none";
        }
        else {
            check[i].style.display = "block";
        }
    }
}

function sortTangDan_Xiaomi() {
    document.getElementById("sanpham").style.display = "none";
    sortTheoGiaTangDan_Xiaomi();
    document.getElementById("danh-sach-san-pham").style.display = "flex";
}

function sortTheoGiaGiamDan_Xiaomi() {
    const sanPham = Array.from(document.querySelectorAll('.xiaomi'));
    sanPham.sort(function (a, b) {
        const giaA = parseInt(a.querySelector('.gia').textContent.replace(/[^\d]/g, ""));
        const giaB = parseInt(b.querySelector('.gia').textContent.replace(/[^\d]/g, ""));
        return giaB - giaA;
    });
    const danhSachSanPham = document.querySelector('#danh-sach-san-pham');
    sanPham.forEach(function (sp) {
        danhSachSanPham.appendChild(sp);
    });
    const check = Array.from(document.querySelectorAll('.col-6,col-md-3'));
    console.log(check);
    var check2 = console.log(sanPham[0].classList.contains("xiaomi"));
    for (let i = 0; i < check.length; i++) {
        if (!check[i].classList.contains("xiaomi")) {
            check[i].style.display = "none";
        }
        else {
            check[i].style.display = "block";
        }
    }
}

function sortGiamDan_Xiaomi() {
    document.getElementById("sanpham").style.display = "none";
    sortTheoGiaGiamDan_Xiaomi();
    document.getElementById("danh-sach-san-pham").style.display = "flex";
}

// Redmi


function sortTheoGiaTangDan_Realme() {
    const sanPham = Array.from(document.querySelectorAll('.realme'));
    sanPham.sort(function (a, b) {
        const giaA = parseInt(a.querySelector('.gia').textContent.replace(/[^\d]/g, ""));
        const giaB = parseInt(b.querySelector('.gia').textContent.replace(/[^\d]/g, ""));
        return giaA - giaB;
    });
    const danhSachSanPham = document.querySelector('#danh-sach-san-pham');
    sanPham.forEach(function (sp) {
        danhSachSanPham.appendChild(sp);
    });
    const check = Array.from(document.querySelectorAll('.col-6,col-md-3'));
    console.log(check);
    var check2 = console.log(sanPham[0].classList.contains("realme"));
    for (let i = 0; i < check.length; i++) {
        if (!check[i].classList.contains("realme")) {
            check[i].style.display = "none";
        }
        else {
            check[i].style.display = "block";
        }
    }
}

function sortTangDan_Realme() {
    document.getElementById("sanpham").style.display = "none";
    sortTheoGiaTangDan_Realme();
    document.getElementById("danh-sach-san-pham").style.display = "flex";
}

function sortTheoGiaGiamDan_Realme() {
    const sanPham = Array.from(document.querySelectorAll('.realme'));
    sanPham.sort(function (a, b) {
        const giaA = parseInt(a.querySelector('.gia').textContent.replace(/[^\d]/g, ""));
        const giaB = parseInt(b.querySelector('.gia').textContent.replace(/[^\d]/g, ""));
        return giaB - giaA;
    });
    const danhSachSanPham = document.querySelector('#danh-sach-san-pham');
    sanPham.forEach(function (sp) {
        danhSachSanPham.appendChild(sp);
    });
    const check = Array.from(document.querySelectorAll('.col-6,col-md-3'));
    console.log(check);
    var check2 = console.log(sanPham[0].classList.contains("realme"));
    for (let i = 0; i < check.length; i++) {
        if (!check[i].classList.contains("realme")) {
            check[i].style.display = "none";
        }
        else {
            check[i].style.display = "block";
        }
    }
}

function sortGiamDan_Realme() {
    document.getElementById("sanpham").style.display = "none";
    sortTheoGiaGiamDan_Realme();
    document.getElementById("danh-sach-san-pham").style.display = "flex";
}

// Vivo

function sortTheoGiaTangDan_Vivo() {
    const sanPham = Array.from(document.querySelectorAll('.vivo'));
    sanPham.sort(function (a, b) {
        const giaA = parseInt(a.querySelector('.gia').textContent.replace(/[^\d]/g, ""));
        const giaB = parseInt(b.querySelector('.gia').textContent.replace(/[^\d]/g, ""));
        return giaA - giaB;
    });
    const danhSachSanPham = document.querySelector('#danh-sach-san-pham');
    sanPham.forEach(function (sp) {
        danhSachSanPham.appendChild(sp);
    });
    const check = Array.from(document.querySelectorAll('.col-6,col-md-3'));
    console.log(check);
    var check2 = console.log(sanPham[0].classList.contains("vivo"));
    for (let i = 0; i < check.length; i++) {
        if (!check[i].classList.contains("vivo")) {
            check[i].style.display = "none";
        }
        else {
            check[i].style.display = "block";
        }
    }
}

function sortTangDan_Vivo() {
    document.getElementById("sanpham").style.display = "none";
    sortTheoGiaTangDan_Vivo();
    document.getElementById("danh-sach-san-pham").style.display = "flex";
}

function sortTheoGiaGiamDan_Vivo() {
    const sanPham = Array.from(document.querySelectorAll('.vivo'));
    sanPham.sort(function (a, b) {
        const giaA = parseInt(a.querySelector('.gia').textContent.replace(/[^\d]/g, ""));
        const giaB = parseInt(b.querySelector('.gia').textContent.replace(/[^\d]/g, ""));
        return giaB - giaA;
    });
    const danhSachSanPham = document.querySelector('#danh-sach-san-pham');
    sanPham.forEach(function (sp) {
        danhSachSanPham.appendChild(sp);
    });
    const check = Array.from(document.querySelectorAll('.col-6,col-md-3'));
    console.log(check);
    var check2 = console.log(sanPham[0].classList.contains("vivo"));
    for (let i = 0; i < check.length; i++) {
        if (!check[i].classList.contains("vivo")) {
            check[i].style.display = "none";
        }
        else {
            check[i].style.display = "block";
        }
    }
}

function sortGiamDan_Vivo() {
    document.getElementById("sanpham").style.display = "none";
    sortTheoGiaGiamDan_Vivo();
    document.getElementById("danh-sach-san-pham").style.display = "flex";
}

// Oppo


function sortTheoGiaTangDan_Oppo() {
    const sanPham = Array.from(document.querySelectorAll('.oppo'));
    sanPham.sort(function (a, b) {
        const giaA = parseInt(a.querySelector('.gia').textContent.replace(/[^\d]/g, ""));
        const giaB = parseInt(b.querySelector('.gia').textContent.replace(/[^\d]/g, ""));
        return giaA - giaB;
    });
    const danhSachSanPham = document.querySelector('#danh-sach-san-pham');
    sanPham.forEach(function (sp) {
        danhSachSanPham.appendChild(sp);
    });
    const check = Array.from(document.querySelectorAll('.col-6,col-md-3'));
    console.log(check);
    var check2 = console.log(sanPham[0].classList.contains("oppo"));
    for (let i = 0; i < check.length; i++) {
        if (!check[i].classList.contains("oppo")) {
            check[i].style.display = "none";
        }
        else {
            check[i].style.display = "block";
        }
    }
}

function sortTangDan_Oppo() {
    document.getElementById("sanpham").style.display = "none";
    sortTheoGiaTangDan_Oppo();
    document.getElementById("danh-sach-san-pham").style.display = "flex";
}

function sortTheoGiaGiamDan_Oppo() {
    const sanPham = Array.from(document.querySelectorAll('.oppo'));
    sanPham.sort(function (a, b) {
        const giaA = parseInt(a.querySelector('.gia').textContent.replace(/[^\d]/g, ""));
        const giaB = parseInt(b.querySelector('.gia').textContent.replace(/[^\d]/g, ""));
        return giaB - giaA;
    });
    const danhSachSanPham = document.querySelector('#danh-sach-san-pham');
    sanPham.forEach(function (sp) {
        danhSachSanPham.appendChild(sp);
    });
    const check = Array.from(document.querySelectorAll('.col-6,col-md-3'));
    console.log(check);
    var check2 = console.log(sanPham[0].classList.contains("oppo"));
    for (let i = 0; i < check.length; i++) {
        if (!check[i].classList.contains("oppo")) {
            check[i].style.display = "none";
        }
        else {
            check[i].style.display = "block";
        }
    }
}

function sortGiamDan_Oppo() {
    document.getElementById("sanpham").style.display = "none";
    sortTheoGiaGiamDan_Oppo();
    document.getElementById("danh-sach-san-pham").style.display = "flex";
}

// Nokia


function sortTheoGiaTangDan_Nokia() {
    const sanPham = Array.from(document.querySelectorAll('.nokia'));
    sanPham.sort(function (a, b) {
        const giaA = parseInt(a.querySelector('.gia').textContent.replace(/[^\d]/g, ""));
        const giaB = parseInt(b.querySelector('.gia').textContent.replace(/[^\d]/g, ""));
        return giaA - giaB;
    });
    const danhSachSanPham = document.querySelector('#danh-sach-san-pham');
    sanPham.forEach(function (sp) {
        danhSachSanPham.appendChild(sp);
    });
    const check = Array.from(document.querySelectorAll('.col-6,col-md-3'));
    console.log(check);
    var check2 = console.log(sanPham[0].classList.contains("nokia"));
    for (let i = 0; i < check.length; i++) {
        if (!check[i].classList.contains("nokia")) {
            check[i].style.display = "none";
        }
        else {
            check[i].style.display = "block";
        }
    }
}

function sortTangDan_Nokia() {
    document.getElementById("sanpham").style.display = "none";
    sortTheoGiaTangDan_Nokia();
    document.getElementById("danh-sach-san-pham").style.display = "flex";
}

function sortTheoGiaGiamDan_Nokia() {
    const sanPham = Array.from(document.querySelectorAll('.nokia'));
    sanPham.sort(function (a, b) {
        const giaA = parseInt(a.querySelector('.gia').textContent.replace(/[^\d]/g, ""));
        const giaB = parseInt(b.querySelector('.gia').textContent.replace(/[^\d]/g, ""));
        return giaB - giaA;
    });
    const danhSachSanPham = document.querySelector('#danh-sach-san-pham');
    sanPham.forEach(function (sp) {
        danhSachSanPham.appendChild(sp);
    });
    const check = Array.from(document.querySelectorAll('.col-6,col-md-3'));
    console.log(check);
    var check2 = console.log(sanPham[0].classList.contains("nokia"));
    for (let i = 0; i < check.length; i++) {
        if (!check[i].classList.contains("nokia")) {
            check[i].style.display = "none";
        }
        else {
            check[i].style.display = "block";
        }
    }
}
function sortGiamDan_Nokia() {
    document.getElementById("sanpham").style.display = "none";
    sortTheoGiaGiamDan_Nokia();
    document.getElementById("danh-sach-san-pham").style.display = "flex";
}

//=================//




var giohang = new Array();

function themvaogiohang(x) {
    var boxsp = x.parentElement.children;
    var hinh = (boxsp[0].children[0].src);
    var tensp = boxsp[0].children[2].innerText;
    var gia = boxsp[0].children[3].children[0].innerText;
    var soluong = boxsp[2].value;
    var sp = new Array(hinh, gia, tensp, soluong);
    console.log(sp);
    giohang.push(sp);

    //showcountsp();
    alert("Đặt hàng thành công " + soluong + " " + tensp + "\nVui lòng click vào thanh toán ở phía trên để xem giỏ hàng ạ!!!");
    sessionStorage.setItem("giohang", JSON.stringify(giohang));
}



function showcountsp() {
    document.getElementById("countsp").innerHTML = giohang.length;
}



function showgiohang_trangthanhtoan() {
    var gh = sessionStorage.getItem("giohang");
    var giohang = JSON.parse(gh);
    var ttgh = "";
    var tong = 0;
    for (let i = 0; i < giohang.length; i++) {
        let num = parseInt(giohang[i][1].replace(/[^\d]/g, ""));
        var tt = num * parseInt(giohang[i][3]);
        tong += tt;
        ttgh +=
            '<div class="row">' +
            '<div class="col-1 col-sm-1">' + (i + 1) + '</div>' +
            '<div class="col-3 col-sm-3"><img src="' + giohang[i][0] + '" alt="" class="img-fluid img-100px"></div>' +
            '<div class="col-4 col-sm-4">' + giohang[i][2] + '</div>' +
            '<div class="col-3 col-sm-3">' + giohang[i][1] + '</div>' +
            '<div class="col-1 col-sm-1">' + giohang[i][3] + '</div>' +
            '<div class="col-12">' +
            '<hr>' +
            '</div>' +
            '</div>';

    }
    let formattedNumber = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tong);
    console.log(formattedNumber);
    ttgh +=
        '<div class="row p-3">' +
        '<div class="col-6"></div>' +
        '<div class="col-6">Thành tiền:  ' + formattedNumber + ' (VNĐ)</div>' +
        '</div>';
    document.getElementById("mycart").innerHTML = ttgh;
}

function dongydathang() {
    var ttnh = document.getElementById("thongtinnhanhang").children;
    var hoten = ttnh[0].children[2].children[0].children[0].value;
    var dienthoai = ttnh[0].children[2].children[0].children[2].value;
    var email = ttnh[0].children[2].children[0].children[4].value;
    var diachi = ttnh[0].children[2].children[0].children[6].value;

    var nguoinhan = new Array(hoten, dienthoai, email, diachi);

    console.log(nguoinhan);
    sessionStorage.setItem("nguoinhan", JSON.stringify(nguoinhan));
    if (validateform() == true) {
        window.location.assign("dathang_thanhcong.html");
    }
    // else {
    //     alert("Vui lòng quý khách kiểm tra đã điền thông tin chưa hay điền sai ạ !!!");
    // }
}

function showthongtinnguoinhan() {
    var nguoinhan = sessionStorage.getItem("nguoinhan");
    var thongtin = JSON.parse(nguoinhan);
    console.log(thongtin);
    var tt =
        '<div class="row pt-2">' +
        '<div class="mb-2">Họ tên: ' + thongtin[0] + '</div>' +
        '<div class="mb-2">Số điện thoại: ' + thongtin[1] + '</div>' +
        '<div class="mb-2">Email: ' + thongtin[2] + '</div>' +
        '<div class="mb-2">Địa chỉ: ' + thongtin[3] + '</div>' +
        '</div>';


    document.getElementById("thongtinnhanhang").innerHTML = tt;
    console.log(tt);
    alert("Đặt hàng thành công chúng tôi sẽ liên hệ với bạn trong vài giây !!!");
}

// function validateform() {
//     // Lấy tham chiếu đến các phần tử trong biểu mẫu
//     const form = document.getElementById('myForm');
//     const nameInput = document.getElementById('hoten');
//     const phoneInput = document.getElementById('phone');
//     const emailInput = document.getElementById('email');
//     const diachiInput = document.getElementById('diachi');

//     // Biểu thức chính quy kiểm tra họ tên
//     const nameRegex = /^[a-zA-Z\sàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệđìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵ]+$/;

//     // Biểu thức chính quy kiểm tra số điện thoại
//     const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

//     // Kiểm tra tính hợp lệ của họ tên
//     nameInput.addEventListener('blur', function () {
//         if (nameInput.value.trim() === '') {
//             nameInput.classList.add('invalid');
//             document.getElementById("hotenError").style.display = "block";
//             document.getElementById("hotenError").innerHTML = "Họ tên chưa được nhập";
//             return false;
//         } else if (!nameRegex.test(nameInput.value)) {
//             nameInput.classList.add('invalid');
//             document.getElementById("hotenError").style.display = "block";
//             document.getElementById("hotenError").innerHTML = "Họ tên không hợp lệ";
//             return false;
//         } else {
//             console.log("1");
//             document.getElementById("hotenError").style.display = "none";
//             nameInput.classList.remove('invalid');
//         }
//     });

//     // Kiểm tra tính hợp lệ của số điện thoại
//     phoneInput.addEventListener('blur', function () {
//         if (phoneInput.value.trim() === '') {
//             phoneInput.classList.add('invalid');
//             document.getElementById("sdtError").style.display = "block";
//             document.getElementById("sdtError").innerHTML = "Số điện thoại chưa được nhập";
//             return false;
//         } else if (!isPhone(phoneInput.value)) {
//             phoneInput.classList.add('invalid');
//             document.getElementById("sdtError").style.display = "block";
//             document.getElementById("sdtError").innerHTML = "Số điện thoại không hợp lệ";
//             return false;
//         } else {
//             document.getElementById("sdtError").style.display = "none";
//             phoneInput.classList.remove('invalid');
//         }
//     });


//     // Kiểm tra tính hợp lệ của email (nếu được nhập)
//     emailInput.addEventListener('blur', function () {
//         if (emailInput.value.trim() === '') {
//             emailInput.classList.add('invalid');
//             document.getElementById("emailError").style.display = "block";
//             document.getElementById("emailError").innerHTML = "Email chưa được nhập";
//             return false;
//         } else if (!isEmail(emailInput.value)) {
//             emailInput.classList.add('invalid');
//             document.getElementById("emailError").style.display = "block";
//             document.getElementById("emailError").innerHTML = "Email nhập sai định dạng";
//             return false;
//         } else {
//             document.getElementById("emailError").style.display = "none";
//             emailInput.classList.remove('invalid');
//         }
//     });

//     diachiInput.addEventListener('blur', function () {
//         if (diachiInput.value.trim() === '') {
//             diachiInput.classList.add('invalid');
//             document.getElementById("diachiError").style.display = "block";
//             document.getElementById("diachiError").innerHTML = "Địa chỉ chưa được nhập";
//             return false
//         }
//         else {
//             document.getElementById("diachiError").style.display = "none";
//             emailInput.classList.remove('invalid');
//         }
//     });
//     // Nếu đến đây, có nghĩa là tất cả các trường đã được nhập đúng định dạng
//     return true;
// }

function validateform() {
    // Lấy tham chiếu đến các phần tử trong biểu mẫu
    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('hoten');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const diachiInput = document.getElementById('diachi');

    // Biểu thức chính quy kiểm tra họ tên
    const nameRegex = /^[a-zA-Z\sàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệđìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵ]+$/;

    // Biểu thức chính quy kiểm tra số điện thoại
    const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

    // Kiểm tra tính hợp lệ của họ tên
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

    // Kiểm tra tính hợp lệ của số điện thoại
    if (phoneInput.value.trim() === '') {
        phoneInput.classList.add('invalid');
        document.getElementById("sdtError").style.display = "block";
        document.getElementById("sdtError").innerHTML = "Số điện thoại chưa được nhập";
        return false;
    } else if (!isPhone(phoneInput.value)) {
        phoneInput.classList.add('invalid');
        document.getElementById("sdtError").style.display = "block";
        document.getElementById("sdtError").innerHTML = "Số điện thoại không hợp lệ";
        return false;
    } else {
        document.getElementById("sdtError").style.display = "none";
        phoneInput.classList.remove('invalid');
    }

    // Kiểm tra tính hợp lệ của email (nếu được nhập)
    if (emailInput.value.trim() !== '' && !isEmail(emailInput.value)) {
        emailInput.classList.add('invalid');
        document.getElementById("emailError").style.display = "block";
        document.getElementById("emailError").innerHTML = "Email nhập sai định dạng";
        return false;
    } else {
        document.getElementById("emailError").style.display = "none";
        emailInput.classList.remove('invalid');
    }

    if (diachiInput.value.trim() === '') {
        diachiInput.classList.add('invalid');
        document.getElementById("diachiError").style.display = "block";
        document.getElementById("diachiError").innerHTML = "Địa chỉ chưa được nhập";
        return false
    }
    else {
        document.getElementById("diachiError").style.display = "none";
        emailInput.classList.remove('invalid');
    }

    // Nếu đến đây, có nghĩa là tất cả các trường đã được nhập đúng định dạng
    return true;
}


function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}
function isPhone(number) {
    return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
}






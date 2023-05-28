// function ganGiaTriChoInput (taiKhoanNv,tenNV,emailNV,ngayNV,luongCbNV,chucVuNV,gioLamNV) {
//      // reset input khi người dùng thêm thành công
//     // khi bấm nút edit thì các nội dung đã đc ghi sẽ reset
//     document.getElementById("tknv").value = taiKhoanNv; 

//     document.getElementById("name").value = tenNV; 

//     document.getElementById("email").value = emailNV; 

//     document.getElementById("datepicker").value = ngayNV; 

//     document.getElementById("luongCB").value = luongCbNV; 

//     document.getElementById("chucvu").value  = chucVuNV; 

//     document.getElementById("gioLam").value  = gioLamNV; 
// }

// function layGiaTriInput() {
//     var taiKhoanNV = document.getElementById("tknv").value;
//     var tenNV = document.getElementById("name").value;
//     var emailNV = document.getElementById("email").value;
//     var ngayNV = document.getElementById("datepicker").value;
//     var luongCbNV = document.getElementById("luongCB").value * 1;
//     var chucVuNV = document.getElementById("chucvu").value;
//     var gioLamNV = document.getElementById("gioLam").value * 1;

//     var dienThongTin = new NhanVien();

//     dienThongTin.taikhoan = taiKhoanNV;
//     dienThongTin.hoTen = tenNV;
//     dienThongTin.email = emailNV;
//     dienThongTin.ngayLam = ngayNV;
//     dienThongTin.luongCoBan = luongCbNV;
//     dienThongTin.chucVu = chucVuNV;
//     dienThongTin.gioLamTrongThang = gioLamNV;

//     return dienThongTin;
// }

// // hàm lưu dữ liệu xuống local
// function saveStorage(arrNhanVien) {
//     localStorage.setItem("arrNhanVien", JSON.stringify(arrNhanVien));
// }

// // hàm lấy dữ liệu từ local 
// function getStorage() {
//     // check đk, nếu key đc gọi ko có dưới local
//     var arrNhanVienLocal = JSON.parse(localStorage.getItem("arrNhanVien"));
//     if (arrNhanVienLocal != null) {
//         // Nếu như arrNhanVienLocal có giá trị sẽ lấy giá trị đó gắn mới vào cho mảng arrNhanVien đang có 
//         arrNhanVien = arrNhanVienLocal;
//     }
// }

function danhSachNv () {

    this.DSNV = [];
    
// Thêm NV
    this.ThemNv = function (nvThem) {
        this.DSNV.push(nvThem);
    }

// Xóa NV
    this.XoaNv = function (listSvXoa) {

    }

// Sửa NV
    this.SuaNv = function (svCapNhat) {

    }

// Tìm kiếm NV
    this.TimKiemNv = function (keyWord) {

    }
}
console.log("ayo!");

var danhSachNhanVien = new danhSachNv();

var validate = new kiemtraDauVao();

function domID(id) 
{
    var element = document.getElementById(id);
    return element;
    
    // hàm này có tác dụng rút gắn việc viết cú pháp document.getElementById
}

function themNv() 
{
    // các bước xử lý
// Lấy dữ liệu từ người dùng nhập vào 
    var soTk = domID("tknv").value;
    var hoVaTen = domID("name").value;
    var email = domID("email").value;
    var mkNv = domID("password").value;
    var numDay = domID("datepicker").value;
    var salary = domID("luongCB").value;
    var jobTitle = domID("chucvu").value;
    var numHour = domID("gioLam").value;

    var loi = 0;
// Sau khi lấy xong thì mình kiểm tra validation
        // đặt biến lỗi tại đây để nếu giá trị là true thì nó sẽ đi tiếp
        // nếu để return ở đây thì nếu gặp lỗi nó sẽ dừng lại tại chỗ
        // nhưng vì ta muốn ktra hết các biến nên ko nên dùng return
    
    // soTk
    if(validate.KiemTraDoDai(soTk))
    {
        domID("tknv").style.borderColor = "green";
    }
    else
    {
        domID("tknv").style.borderColor = "red";
        loi++;
    }

    // HoVaTen
    if(validate.KiemTraTen(hoVaTen) && kiemtraDauVaoRong("name",hoVaTen) == false)
    {
        domID("name").style.borderColor = "green";
    }
    else
    {
        domID("name").style.borderColor = "red";
        loi++;
    }

    // email
    if(validate.KiemTraEmail(email))
    {
        domID("email").style.borderColor = "green";
    }
    else
    {
        domID("email").style.borderColor = "red";
        loi++;
    }

    // password
    if(validate.KiemTraDoDaiPass(mkNv) && validate.KiemTraPass(mkNv))
    {
        domID("password").style.borderColor = "green";
    }
    else
    {
        domID("password").style.borderColor = "red";
        loi++;
    }

    // luongCB
    if(validate.KiemTraNum(salary) && validate.KiemTraLuong(salary))
    {
        domID("luongCB").style.borderColor = "green";
    }
    else
    {
        domID("luongCB").style.borderColor = "red";
        loi++;
    }

    // gioLam
    if(validate.KiemTraNum(numHour) && validate.KiemTraGioLam(numHour))
    {
        domID("gioLam").style.borderColor = "green";
    }
    else
    {
        domID("gioLam").style.borderColor = "red";
        loi++;
    }
    if(loi != 0)
    {
        return;
    }

// sau khi các dữ liệu được nhập vào đã hợp lệ 
// việc tiếp theo ta làm sẽ là thêm nhân viên 
    var nhanVien = new NhanVien(soTk,hoVaTen,email,mkNv,numDay,salary,jobTitle,numHour);
    
    danhSachNhanVien.ThemNv(nhanVien);
    console.log(danhSachNhanVien);
}

// tác dụng của hàm này để đỡ phải viết lại cho tất cả các biến
function kiemtraDauVaoRong(id, value)  
{
    if(validate.KiemTraRong(value) == true)
    {
        domID(id).style.borderColor = "red";
        return true;
    }
    else 
    {
        domID(id).style.borderColor = "green";
        return false;
    }
}

function capNhatDanhSachNv (danhSachNv)
{
    var listTableNv = domID("tableDanhSach");
    listTableNv.innerHTML = "";
    for(var i = 0; i < danhSachNv.DSNV.length; i++ )
    {
        // lấy thông tin nhân viên từ trong mảng nhân viên
        var nV = danhSachNv.DSNV[i];
        var trNhanVien = document.createElement("tr");
    }
}
function kiemtraDauVao() {


// 1. Kiểm tra rỗng
    this.KiemTraRong = function (value) 
    {
        
        if(value.trim("") === "")
        {
            return true;
        }
        return false;
    }

// 2. Kiểm tra độ dài của tài khoản 
    this.KiemTraDoDai = function (value)
    {
        if(value.length >= 4 && value.length <= 6)
        {
            return true;
        }
        return false; 
    }

// 3. Kiểm tra tên nv dạng chữ only
    this.KiemTraTen = function (value)
    {
        var nameReg = /^[A-Za-z\s]*$/;
        return nameReg.test(value);
    }

// 4. Kiểm tra điều kiện password (6-10 ký tự,ít nhất 1 ký tự số, 1 in hoa, 1 đặc biệt)
    // 6-10 ký tự
    this.KiemTraDoDaiPass = function (value)
    {
        if(value.length >= 6 && value.length <= 10)
        {
            return true;
        }
        return false; 
    }
    // đặc tính các ký tự
    this.KiemTraPass = function (value)
    {
        var passReg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        return passReg.test(value);
    }

// 5. Kiểm tra email
    this.KiemTraEmail = function (value)
    {
        var re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return re.test(value.toLowerCase());
        
        // tại đây để lowerCase nhằm trường hợp người dùng hay viết hoa chữ cái đầu
    }

// 6. Kiểm tra giá trị với định dạng num
    this.KiemTraNum = function (value)
    {
        var reg = /^\d+$/;
        return reg.test(value);
    }

// 7. Kiểm tra lương cơ bản (1e6 tới 20e6)
    this.KiemTraLuong = function (value)
    {
        if(value >= 1e6 && value <= 2e7)
        {
            return true;
        }
        return false; 
    }

// 8. Kiểm tra số giờ làm trong tháng (80 tới 200 giờ)
    this.KiemTraGioLam = function (value)
    {
        if(value >= 80 && value <= 200)
        {
            return true;
        }
        return false;
    }
}
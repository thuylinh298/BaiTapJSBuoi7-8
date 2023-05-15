var arr = [];

function getEle(n) {
    return document.getElementById(n)
}

function themSo() {
    so = getEle('so').value * 1;
    arr.push(so);
    getEle('mangNguoiDungNhap').innerHTML = `Mảng [ ${arr} ]`
    getEle('mangNguoiDungNhap').style.display = 'block'
}

function xoaSo() {
    arr.splice(0);
    getEle('mangNguoiDungNhap').innerHTML = `Mảng [ ${arr} ]`
}

// function demSoDuong() {
//     var demSoDuong = 0;
//     for (var i = 0; i < arr.length; i++){
//         if(arr[i] > 0){
//             demSoDuong++
//         }
//     }
//     getEle('demSoDuong').innerHTML = `Có ${demSoDuong} số dương trong mảng`
// }

function demSoDuong() {

    var demSoDuong = 0;

    arr.forEach(function (value) {
        if (value > 0) {
            demSoDuong++
        }
    })
    getEle('demSoDuong').innerHTML = `Có ${demSoDuong} số dương trong mảng`
    getEle('demSoDuong').style.display = 'block'
}

// function tongSoDuong() {
//     var tongSoDuong = 0;
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] > 0){
//             tongSoDuong += arr[i]
//         }
//     }
//     getEle('tongSoDuong').innerHTML = `Tổng các số dương là: ${tongSoDuong}`
// }

// function tongSoDuong() {
//     var tongSoDuong = 0;
//     arr.forEach(function(value){
//         if (value > 0){
//             tongSoDuong += value
//         }
//     })

//     getEle('tongSoDuong').innerHTML = `Tổng các số dương là: ${tongSoDuong}`
// }

function tongSoDuong() {
    var tongSoDuong = arr.reduce(function (tongSoDuong, currentValue) {
        if (currentValue > 0) {
            return tongSoDuong + currentValue;
        } else {
            return tongSoDuong
        }
    }, 0)

    getEle('tongSoDuong').innerHTML = `Tổng các số dương là: ${tongSoDuong}`
    getEle('tongSoDuong').style.display = 'block'
}

function soNhoNhat() {
    var min = arr[0];
    arr.forEach(function (value) {
        if (value < min) {
            min = value
        }
    })
    getEle('soNhoNhat').innerHTML = `Số nhỏ nhất là: ${min}`
    getEle('soNhoNhat').style.display = 'block'
}

function soDuongNhoNhat() {
    var soDuongArr = arr.filter(function (value) {
        return (value > 0)
    })

    var min = soDuongArr[0];
    soDuongArr.forEach(function (value) {
        if (value < min) {
            min = value
        }
    })

    getEle('soDuongNhoNhat').innerHTML = `Số dương nhỏ nhất là: ${min}`
    getEle('soDuongNhoNhat').style.display = 'block'
}

// function soChanCuoiCung() {
//     var soChanArr = arr.filter(function(value){
//         if (value % 2 == 0){
//             return true
//         }
//         return false
//     });

//     var soChanCuoiCung = soChanArr[soChanArr.length - 1];
//     console.log(soChanCuoiCung)
// }

function soChanCuoiCung() {
    var soChanCuoiCung = -1;
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 == 0) {
            soChanCuoiCung = arr[i];
            break;
        }
    }
    getEle('soChanCuoiCung').innerHTML = `Số chẵn cuối cùng là: ${soChanCuoiCung}`
    getEle('soChanCuoiCung').style.display = 'block'
}

function sapXepTangDan() {
    var sapXep = arr.sort((a, b) => a - b);

    getEle('sapXepTangDan').innerHTML = `Mảng tăng dần: [${sapXep}] `
    getEle('sapXepTangDan').style.display = 'block'
}

function isPrime(number) {
    var isPrime = true;
    if (number < 2) {
        isPrime = false
    }
    else {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}

function sntDauTien() {
    var sntDauTien = -1;
    for (i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            sntDauTien = arr[i];
            break;
        } 
    }
    getEle('sntDauTien').innerHTML = `Số nguyên tố đầu tiên là: ${sntDauTien}` 
    getEle('sntDauTien').style.display = 'block'
}


function doiCho() {
    var index1 = getEle('index1').value*1,
        index2 = getEle('index2').value*1;

        arr[index1] += arr[index2];

        arr[index2] = arr[index1] - arr[index2];

        arr[index1] -= arr[index2];

        getEle('doiCho').innerHTML = `Mảng mới là: [${arr}]`
        getEle('doiCho').style.display = 'block'
}

var arr1 = [];
function themSoA() {
    soA = getEle('soA').value*1;
    arr1.push(soA);
    getEle('mangSoThuc').innerHTML = `Mảng số thực: [${arr1}]`
    getEle('mangSoThuc').style.display = 'block'
}

function xoaSoA() {
    arr1.splice(0);
    getEle('mangSoThuc').innerHTML = `Mảng số thực: [${arr1}]`
}

function demSoNguyen() {
    var soNguyen = 0;

    for(var i = 0; i < arr1.length; i++){
        if(Number.isInteger(arr1[i])){
            soNguyen++
        }
    }
    getEle('demSoNguyen').innerHTML = `Có ${soNguyen} số nguyên trong mảng.`
    getEle('demSoNguyen').style.display = 'block'
}

function soSanhAmDuong(){
    var soAm = 0,
        soDuong = 0;

        arr1.forEach(function(value){
            if(value > 0){
                soDuong++
            }
            else{
                soAm++
            }
        })

        if(soDuong > soAm){
            getEle('soSanh').innerHTML = `Số dương > số âm`
            getEle('soSanh').style.display = 'block'
        }
        else if(soDuong < soAm) {
            getEle('soSanh').innerHTML = `Số dương < số âm`
            getEle('soSanh').style.display = 'block'
        }
        else{
            getEle('soSanh').innerHTML = `Số dương = số âm`
            getEle('soSanh').style.display = 'block'
        }
}
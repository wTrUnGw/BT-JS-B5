function diemTong() {
  var sumOfScoree = 0;
  var mark1 = document.getElementById("mark1").value * 1;
  var mark2 = document.getElementById("mark2").value * 1;
  var mark3 = document.getElementById("mark3").value * 1;
  var mark = document.getElementById("mark").value * 1;
  // if (!isNaN(mark)) {
  //   alert("VUI LÒNG NHẬP ĐIỂM CHUẨN");
  //   document.getElementById("mark").value * 1;
  //   return;
  // }

  if (mark1 < 0 || mark1 > 10) {
    alert("vui lòng nhập lại");
  } else if (mark2 < 0 || mark2 > 10) {
    alert("vui lòng nhập lại ");
  } else if (mark3 < 0 || mark3 > 10) {
    alert("vui lòng nhập lại");
  }
  //chọn khu vực
  var area = document.getElementById("area").value;

  if (area === "X") {
    sumOfScoree += 0;
  } else if (area === "A") {
    sumOfScoree += 2;
    console.log(sumOfScoree);
  } else if (area === "B") {
    sumOfScoree += 1;
    console.log(sumOfScoree);
  } else if (area === "C") {
    sumOfScoree += 0.5;
    console.log(sumOfScoree);
  } else {
    alert("vui lòng nhập lại khu vực X, A, B, C");
  }

  // chọn đối tượng
  var priority = document.getElementById("priority").value * 1;
  if (priority === 0) {
    sumOfScoree += 0;
    console.log(sumOfScoree);
  } else if (priority === 1) {
    sumOfScoree += 2.5;
    console.log(sumOfScoree);
  } else if (priority === 2) {
    sumOfScoree += 1.5;
    console.log(sumOfScoree);
  } else if (priority === 3) {
    sumOfScoree += 1;
    console.log(sumOfScoree);
  } else {
    alert("vui lòng nhập lại điểm ưu tiên trong khoảng 0 1 2 3");
  }

  var tong = mark1 + mark2 + mark3 + sumOfScoree;
  content = "Tổng: " + tong;

  if (mark1 === 0 || mark2 === 0 || mark3 === 0) {
    content += " " + "Bạn đã gãy do có điểm zero";
  } else if (mark <= tong) {
    // console.log("Đậu");
    content += " " + "Bạn đã đậu";
  } else {
    // console.log("rớt");
    content += "" + "Bạn đã rớt";
  }

  document.getElementById("result1").innerText = content;
}

// ------------------------------- Bài 2 -------------------------------//
// xài 50kw đầu = 500, 50kw kế = 650, 100kw kế = 850, 150kw kế =1100 còn lại 1300
const soKw1 = 500;
const sokw2 = 650;
const sokw3 = 850;
const sokw4 = 1100;
const sokw5 = 1300;

var tienkw1 = 0;
var tienkw2 = 0;
var tienkw3 = 0;
var tienkw4 = 0;
var tienkw5 = 0;

var tong = 0;
function tinhkw1(kw, soTienKw1) {
  return kw * soTienKw1;
}

function tinhkw2(kw, soTienKw2) {
  return (kw - 50) * soTienKw2;
}

function tinhkw3(kw, soTienKw3) {
  return (kw - 100) * soTienKw3;
}
function tinhkw4(kw, soTienKw4) {
  return (kw - 200) * soTienKw4;
}
function tinhkw5(kw, soTienKw5) {
  return (kw - 350) * soTienKw5;
}

function elecBill() {
  var fullName = document.getElementById("fullName").value;
  var kw = document.getElementById("kw").value * 1;

  if (!isNaN(fullName)) {
    alert("VUI LÒNG NHẬP TÊN KHÁCH HÀNG");
    document.getElementById("fullName").value = "";
    return;
  }

  if (kw > 0 && kw <= 50) {
    //kw1
    tienkw1 = tinhkw1(kw, soKw1);
    tong = tienkw1;
  } else if (kw > 50 && kw <= 100) {
    //kw2
    tienkw1 = tinhkw1(50, soKw1);
    tienkw2 = tinhkw2(kw, sokw2);
    tong = tienkw1 + tienkw2;
  } else if (kw > 100 && kw <= 200) {
    //kw3
    tienkw1 = tinhkw1(50, soKw1);
    tienkw2 = tinhkw2(100, sokw2);
    tienkw3 = tinhkw3(kw, sokw3);
    tong = tienkw1 + tienkw2 + tienkw3;
  } else if (kw > 200 && kw <= 350) {
    //kw4
    tienkw1 = tinhkw1(50, soKw1);
    tienkw2 = tinhkw2(100, sokw2);
    tienkw3 = tinhkw3(200, sokw3);
    tienkw4 = tinhkw4(kw, sokw4);
    tong = tienkw1 + tienkw2 + tienkw3 + tienkw4;
  } else if (kw > 350) {
    //kw5
    tienkw1 = tinhkw1(50, soKw1);
    tienkw2 = tinhkw2(100, sokw2);
    tienkw3 = tinhkw3(200, sokw3);
    tienkw4 = tinhkw4(350, sokw4);
    tienkw5 = tinhkw5(kw, sokw5);
    tong = tienkw1 + tienkw2 + tienkw3 + tienkw4 + tienkw5;
  } else {
    alert("Vui lòng nhập lại");
  }
  document.getElementById("result2").innerText =
    "Họ tên: " + fullName + " ; " + " " + "Tiền điện: " + tong.toLocaleString();
}

// ------------------------------- Bài 3 -------------------------------//
// n  <= 60: 5% , 60<n<=120: 10%, 120<n<=210: 15%, 210<n<=384: 20%, 384<n<=624: 25%, 624<n<=960: 30%, n>960: 35%

var moneyTax1 = 0;
var moneyTax2 = 0;
var moneyTax3 = 0;
var moneyTax4 = 0;
var moneyTax5 = 0;
var moneyTax6 = 0;
var moneyTax7 = 0;
var sumTax = 0;
function caseTax1(salary, peoleDependent) {
  return (salary - 4e6 - peoleDependent * 16e5) * 0.05;
}
function caseTax2(salary, peoleDependent) {
  return (salary - 4e6 - peoleDependent * 16e5) * 0.1;
}
function caseTax3(salary, peoleDependent) {
  return (salary - 4e6 - peoleDependent * 16e5) * 0.15;
}
function caseTax4(salary, peoleDependent) {
  return (salary - 4e6 - peoleDependent * 16e5) * 0.2;
}
function caseTax5(salary, peoleDependent) {
  return (salary - 4e6 - peoleDependent * 16e5) * 0.25;
}
function caseTax6(salary, peoleDependent) {
  return (salary - 4e6 - peoleDependent * 16e5) * 0.3;
}
function caseTax7(salary, peoleDependent) {
  return (salary - 4e6 - peoleDependent * 16e5) * 0.35;
}

function taxP() {
  var employeeName = document.getElementById("employeeName").value;
  var sumOfMonth = document.getElementById("sumOfMonth").value * 1;
  var dependent = document.getElementById("dependent").value * 1;

  if (!isNaN(employeeName)) {
    alert("VUI LÒNG NHẬP TÊN KHÁCH HÀNG");
    document.getElementById("employeeName").value = "";
    return;
  }
  if (sumOfMonth >= 0 || sumOfMonth <= 6e7) {
    moneyTax1 = caseTax1(sumOfMonth, dependent);
    sumTax = moneyTax1;
  } else if (sumOfMonth > 6e7 || sumOfMonth <= 12e7) {
    moneyTax2 = caseTax2(sumOfMonth, dependent);
    sumTax = moneyTax2;
  } else if (sumOfMonth > 12e7 || sumOfMonth <= 21e7) {
    moneyTax3 = caseTax3(sumOfMonth, dependent);
    sumTax = moneyTax3;
  } else if (sumOfMonth > 21e7 || sumOfMonth <= 384e6) {
    moneyTax4 = caseTax4(sumOfMonth, dependent);
    sumTax = moneyTax4;
  } else if (sumOfMonth > 384e6 || sumOfMonth <= 624e6) {
    moneyTax5 = caseTax5(sumOfMonth, dependent);
    sumTax = moneyTax5;
  } else if (sumOfMonth > 624e6 || sumOfMonth <= 960e6) {
    moneyTax6 = caseTax6(sumOfMonth, dependent);
    sumTax = moneyTax6;
  } else if (sumOfMonth > 960e6) {
    moneyTax7 = caseTax7(sumOfMonth, dependent);
    sumTax = moneyTax7;
  }

  document.getElementById("result3").innerText =
    "Họ tên: " +
    employeeName +
    " ; " +
    "Tiền thuế:" +
    " " +
    sumTax.toLocaleString() +
    " " +
    "VND";
}

// ------------------------------- Bài 4 -------------------------------//
let DoanhNghiep = document.getElementById("DN");
let NhaDan = document.getElementById("ND");

function showConnect() {
  if (DoanhNghiep.checked) {
    document.getElementById("soKetNoi").classList.remove("d-none");
  }
}

function hideConnect() {
  if (NhaDan.checked) {
    document.getElementById("soKetNoi").classList.add("d-none");
  }
}

function mCable() {
  let cusID = document.getElementById("cusID").value;
  let processingFee = 4.5;
  let basicService = 20.5;
  let advanceChannel = 7.5;
  let channels = document.getElementById("channel").value;
  let connects = document.getElementById("connects").value;
  let total = 0;

  if (NhaDan.checked) {
    total = processingFee + basicService + advanceChannel * channels;
  } else {
    processingFee = 15;
    basicService = 75;
    advanceChannel = 50;
    if (connects <= 10) {
      total = processingFee + basicService + advanceChannel * channels;
    } else {
      total =
        processingFee +
        basicService +
        advanceChannel * channels +
        (connects - 10) * 5;
    }
  }
  document.getElementById("result4").innerText =
    "Mã Khách Hàng: " +
    cusID +
    " ; " +
    " " +
    "Tiền cáp: " +
    "$" +
    total.toLocaleString();
}

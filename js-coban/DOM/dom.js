//Truy cập phần tử DOM
//----------------------------------------------------------------
//1.Truy xuất theo id
let id = document.getElementById("myId");
console.log(id);
//2.Truy xuất theo tên thẻ
let element2 = document.querySelector("h1");
console.log(element2);
//3.Truy xuất theo class
let element3 = document.getElementsByClassName("myClass");
console.log(element3[0]);
//4.Truy xuất theo tên thẻ và id
let element4 = document.querySelector("#myId h1");
console.log(element4);
//5.Truy xuất bằng querySelector
let element5 = document.querySelector(".myClass"); // Chọn phần tử đầu tiên khớp với class
let element5s = document.querySelectorAll(".myClass"); // Chọn tất cả phần tử khớp

//Thay đổi nội dung thuộc tính
//----------------------------------------------------------------
//1.Thay đổi nội dung(innerHTML,textContent)
let element6 = document.getElementById("myId");
element6.innerHTML = "Hello";
element6.textContent = "Hello";
//2.Thay đổi thuộc tính (setAttribute, getAttribute)
let element7 = document.getElementById("myId");
element7.setAttribute("class", "myClass");
console.log(element7.getAttribute("class"));
//3. Thay dôi stype
let element8 = document.getElementById("myId");
element8.style.color = "red";
//4.Thay đổi thuộc tính style
let element9 = document.getElementById("myId");
element9.style.color = "red";
element9.style.fontSize = "20px";

//Thêm, xóa phần tử vào DOM
//----------------------------------------------------------------
//1.Thêm phần tử vào DOM
let element10 = document.getElementById("myId");
let newElement = document.createElement("p");
newElement.textContent = "Hello";
element10.appendChild(newElement);
//2.Xóa phần tử trong DOM
let element11 = document.getElementById("myId");
element11.remove();
//3.Thêm phần tử vào đầu DOM
let element12 = document.getElementById("myId");
let newElement2 = document.createElement("p");
newElement2.textContent = "Hello";
element12.prepend(newElement2);
//4.Chèn vào vị trí cụ thể
let element13 = document.getElementById("myId");
let newElement3 = document.createElement("p");
newElement3.textContent = "Hello";
element13.before(newElement3);
//5.Chèn sau phần tử
let element14 = document.getElementById("myId");
let newElement4 = document.createElement("p");
newElement4.textContent = "Hello";
element14.after(newElement4);

//Thêm, xóa class trong DOM
//----------------------------------------------------------------
let element15 = document.getElementById("myId");
element15.classList.add("myClass");
element15.classList.remove("myClass");

//Tìm phần tử trong DOM
//----------------------------------------------------------------
let element16 = document.getElementById("myId");
let element17 = document.querySelector(".myClass"); // Chọn phần tử đầu tiên khớp với class
let element18 = document.querySelectorAll(".myClass"); // Chọn tất cả phần tử khóp

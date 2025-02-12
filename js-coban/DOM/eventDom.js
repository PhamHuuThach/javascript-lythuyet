// Sự kiện của DOM
// Gán sự kiện trực tiếp
/* <button onclick="alert('Xin chào!')">Bấm vào đây</button> */

// Gán sự kiện điều kiện js
document.getElementById("myButton").onclick = function () {
  alert("Bạn vừa bấm nút!");
};

// Gán sự kiện điều kiện js
document.getElementById("myButton").addEventListener("click", function () {
  alert("VMLINUX");
});

//Ngăn chặn hành động mặc định
document.getElementById("myLink").addEventListener("click", function (event) {
  event.preventDefault(); // Ngăn chặn chuyển trang
  console.log("Chặn hành động mặc định!");
});

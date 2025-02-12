// 1. Tạo phần tử tiêu đề
let title = document.createElement("h1");
title.textContent = "Quản lý danh sách";
title.style.textAlign = "center";

// 2. Tạo ô nhập liệu
let input = document.createElement("input");
input.type = "text";
input.placeholder = "Nhập mục...";
input.style.padding = "5px";
input.style.marginRight = "10px";

// 3. Tạo nút Thêm
let addButton = document.createElement("button");
addButton.textContent = "Thêm";
addButton.style.padding = "5px 10px";
addButton.style.cursor = "pointer";

// 4. Tạo danh sách
let list = document.createElement("ul");

// 5. Xử lý khi nhấn nút Thêm
addButton.addEventListener("click", function () {
  let text = input.value.trim();
  if (text !== "") {
    let listItem = document.createElement("li");
    listItem.textContent = text;

    // Tạo nút Xóa
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Xóa";
    deleteButton.style.marginLeft = "10px";
    deleteButton.style.cursor = "pointer";

    // Xử lý khi nhấn nút Xóa
    deleteButton.addEventListener("click", function () {
      list.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
    input.value = ""; // Xóa nội dung ô nhập sau khi thêm
  }
});

// 6. Thêm các phần tử vào trang
document.body.appendChild(title);
document.body.appendChild(input);
document.body.appendChild(addButton);
document.body.appendChild(list);

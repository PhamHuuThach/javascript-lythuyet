//Callback là một hàm được truyền vào một hàm khác và được thực thi sau khi hàm chính hoàn thành.
//Callback được sử dụng để xử lý dữ liệu sau khi dữ liệu được lấy từ cơ sở dữ liệu.
//Callback là một hàm được truyền vào một hàm khác và được thực thi sau khi hàm chính hoàn
function fetchData(callback) {
  setTimeout(() => {
    console.log("Dữ liệu đã tải xong");
    callback("Dữ liệu từ server");
  }, 2000);
}

function handleData(data) {
  console.log("Xử lý:", data);
}

// Gọi hàm với callback
fetchData(handleData);

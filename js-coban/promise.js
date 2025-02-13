//Promise giúp quản lý bất đồng bộ dễ hơn, tránh callback hell.
//Promise giúp chính trị dữ liệu bằng cơ sở dữ liệu.
//Promise giúp xử lý lỗi dễ hơn, tránh lỗi không mong đợi.
//Promise giúp xử lý dữ liệu dễ hơn, tránh lỗi không mong đợi.

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = false; // Thử đổi thành false để test lỗi
      if (success) {
        resolve("Dữ liệu từ server");
      } else {
        reject("Lỗi kết nối!");
      }
    }, 2000);
  });
}

// Xử lý Promise với `.then()`
fetchData()
  .then((data) => {
    console.log("Xử lý:", data);
  })
  .catch((error) => {
    console.error("Lỗi:", error);
  });

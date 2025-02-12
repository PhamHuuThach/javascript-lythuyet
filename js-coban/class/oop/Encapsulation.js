//Đóng gói
//Dữ liệu bên trong đối tượng chỉ có thể truy cập thông qua phương thức.
// Trong JavaScript, dùng # để tạo thuộc tính private (chỉ dùng được bên trong class).
class BankAccount {
  #balance; // Thuộc tính private

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

let account = new BankAccount("Alice", 1000);
account.deposit(500);
console.log(account.getBalance()); // 1500

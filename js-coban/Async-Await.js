//Async/Await giúp viết code bất đồng bộ dễ đọc hơn, giống code đồng bộ.
// Cách dùng async/await với try...catch
async function myFunction() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
myFunction();

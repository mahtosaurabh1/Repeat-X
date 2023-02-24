function savetolocalstorage(event) {
  event.preventDefault();

  const price = event.target.price.value;
  const product = event.target.product.value;

  const obj = {
    price,
    product,
  };
  axios
    .post(
      "https://crudcrud.com/api/137c5ee1f15a478e87d8e0864840d773/Orderdata",
      obj
    )
    .then((response) => {
      showUserOnScreen(response.data);
      //console.log(response)
    })
    .catch((err) => {
      document.body.innerHTML =
        document.body.innerHTML + "<h4>Something Went wrong </h4>";
    });
}

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("https://crudcrud.com/api/137c5ee1f15a478e87d8e0864840d773/Orderdata")
    .then((response) => {
      console.log(response);

      for (var i = 0; i < response.data.length; i++) {
        showUserOnScreen(response.data[i]);
      }
    })
    .catch((err) => console.log(err));
});

function showUserOnScreen(obj) {
  var parentElement = document.getElementById("listofitems");

  var childElement = `<li id =${obj._id}> ${obj.price} - ${obj.product} 
      <button onclick = deleteuser('${obj._id}')>Delete</button></li>`;
 let t=0;
  for (let i in obj){
    t += parseInt(obj.price)
  }
  console.log(t)
  parentElement.innerHTML = parentElement.innerHTML + childElement;

  var paren = document.getElementById("amount");
  paren.innerHTML = paren.innerHTML + total;
}

function deleteuser(objId) {
  axios
    .delete(
      `https://crudcrud.com/api/fa722c8771114296a5c5e291b32cddd6/Orderdata/${objId}`
    )
    .then((response) => {
      removeUserfromScreen(objId);
    })
    .catch((err) => {
      console.log(err);
    });
}

function removeUserfromScreen(objId) {
  const parentElement = document.getElementById("listofitems");
  const childNodeTobeDeleted = document.getElementById(objId);
  if (childNodeTobeDeleted) {
    //parentElement.removeChild(childNodeTobeDeleted)
    childNodeTobeDeleted.remove();
  }
}

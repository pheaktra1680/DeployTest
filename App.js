const Item = [
  {
    Img: "/Coffee/coffee1.jpg",
    Name: "Amazon",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, reiciendis.",
  },
  {
    Img: "/Coffee/coffee2.jpg",
    Name: "Amazon",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, reiciendis.",
  },
  {
    Img: "/Coffee/coffee3.jpg",
    Name: "Amazon",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, reiciendis.",
  },
  {
    Img: "/Coffee/coffee4.jpg",
    Name: "Amazon",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, reiciendis.",
  },
  {
    Img: "/Coffee/coffee5.jpg",
    Name: "Amazon",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, reiciendis.",
  },
  {
    Img: "/Coffee/coffee6.jpg",
    Name: "Amazon",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, reiciendis.",
  },
  {
    Img: "/Coffee/coffee7.jpg",
    Name: "Amazon",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, reiciendis.",
  },
  {
    Img: "/Coffee/coffee8.jpg",
    Name: "Amazon",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, reiciendis.",
  },
];
GetAllProduct();
function GetAllProduct() {
  var data = "";
  for (const i of Item) {
    data += `
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
          <div class="item-box">
            <div class="box">
              <div class="boximg">
                <img src="${i.Img}" alt="">
              </div>
              <div class="boxtitle">
                <h1>Coffee one</h1>
                <p>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, voluptatem?</p>
                <button class="btn btn-success btnadd btn-delete">Add cart</button>
              </div>
            </div>
          </div>
        </div>
        `;
  }
  document.getElementById("store-data").innerHTML = data;
}
var table = document.querySelector(".table-item");
var btn_close = document.getElementById("closed");
var add = document.querySelectorAll(".btnadd");
var count = document.querySelector(".count");
document.getElementById("cart").addEventListener("click", function () {
  table.style.display = "block";
});
btn_close.addEventListener("click", function () {
  table.style.display = "none";
});
var data="";
var index=1;
add.forEach((el,i) => {
  el.addEventListener("click",function(){
    count.innerHTML=index;
    index++;
    data+=`
    <tr>
      <td><img src="${Item[i].Img}" alt="" width="80px" height="80px" object-fit="cover"></td>
      <td>${Item[i].Name}</td>
      <td><button class="btn btn-danger btn-delete"">Delete</button></td>
    </tr>
    `
    document.getElementById("tbl_body").innerHTML=data;
    attachDeleteButtonListener();
  })
});
function attachDeleteButtonListener() {
  var deleteButtons = document.querySelectorAll(".btn-delete");
  deleteButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Find the parent row and remove it
      var row = button.closest("tr");
      row.remove();
    });
  });
}
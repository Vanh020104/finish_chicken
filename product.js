$(document).ready(function() {
    $('.ttc1').click(function() {
        $(this).parent().children('.ttct1').slideToggle();
    });
});
$(document).ready(function() {
    $('.ttc2').click(function() {
        $(this).parent().children('.ttct2').slideToggle();
    });
});
$(document).ready(function() {
    $('.ttc3').click(function() {
        $(this).parent().children('.ttct3').slideToggle();
    });
});
$(document).ready(function() {
    $('.ttc4').click(function() {
        $(this).parent().children('.ttct4').slideToggle();
    });
});
$(document).ready(function() {
    $('.ttc5').click(function() {
        $(this).parent().children('.ttct5').slideToggle();
    });
});

var luaChonDaChon1 = 0;

function chonCai1(luaChon1) {
    // Đặt lại kiểu dáng của các nút bấm
    if (luaChonDaChon1 !== 0) {
        var nutDaChon1 = document.getElementById("chonCai1" + luaChonDaChon1);
        nutDaChon1.classList.remove("button-selected");
    }

    // Lấy nội dung của lựa chọn đã chọn
    var thongTinLuaChon1 = "";
    if (luaChon1 === 1) {
        thongTinLuaChon1 = "";
    } else if (luaChon1 === 2) {
        thongTinLuaChon1 = "";
    }

    // Hiển thị thông tin của lựa chọn và cập nhật trạng thái lựa chọn đã chọn
    var thongTinElement1 = document.getElementById("thongTinLuaChon1");
    thongTinElement1.innerHTML = thongTinLuaChon1;
    luaChonDaChon1 = luaChon1;

    // Đặt kiểu dáng cho nút bấm được chọn
    var nutChonMoi1 = document.getElementById("chonCai1" + luaChon1);
    nutChonMoi1.classList.add("button-selected");
}



var luaChonDaChon = 0;

function chonCai(luaChon) {
    // Đặt lại kiểu dáng của các nút bấm
    if (luaChonDaChon !== 0) {
        var nutDaChon = document.getElementById("chonCai" + luaChonDaChon);
        nutDaChon.classList.remove("button-selected");
    }
    // Lấy nội dung của lựa chọn đã chọn
    var thongTinLuaChon = "";
    if (luaChon === 3) {
        thongTinLuaChon = "";
    } else if (luaChon === 4) {
        thongTinLuaChon = "";
    }
    // Hiển thị thông tin của lựa chọn và cập nhật trạng thái lựa chọn đã chọn
    var thongTinElement = document.getElementById("thongTinLuaChon");
    thongTinElement.innerHTML = thongTinLuaChon;
    luaChonDaChon = luaChon;

    // Đặt kiểu dáng cho nút bấm được chọn
    var nutChonMoi = document.getElementById("chonCai" + luaChon);
    nutChonMoi.classList.add("button-selected");
}
// js comment

const form = document.querySelector("#comment-form");
    
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const commentInput = document.querySelector("#comment-input");
  const usernameInput = document.querySelector("#username-input");
  const ratingInput = document.querySelector("#rating-input");

  if (commentInput.value === "" || usernameInput.value === "" || ratingInput.value === "") {
    alert("Please fill out all fields!");
  } else {
    const commentContainer = document.querySelector(".comment-container");
    const comment = document.createElement("div");
    comment.classList.add("comment");
    const userIcon = document.createElement("i");
    userIcon.classList.add("fa", "fa-user", "user-icon");
    const commentInfo = document.createElement("div");
    commentInfo.classList.add("comment-info");
    const username = document.createElement("span");
    username.classList.add("username");
    username.textContent = usernameInput.value;
    const commentText = document.createElement("span");
    commentText.classList.add("comment-text");
    commentText.textContent = commentInput.value;
    const rating = document.createElement("div");
    rating.classList.add("rating");

    for (let i = 0; i < ratingInput.value; i++) {
      const starIcon = document.createElement("i");
      starIcon.classList.add("fa", "fa-star");
      rating.appendChild(starIcon);
    }

    for (let i = ratingInput.value; i < 5; i++) {
      const starIcon = document.createElement("i");
      starIcon.classList.add("fa", "fa-star-o");
      rating.appendChild(starIcon);
    }

    commentInfo.appendChild(username);
    commentInfo.appendChild(commentText);
    commentInfo.appendChild(rating);
    comment.appendChild(userIcon);
    comment.appendChild(commentInfo);
    commentContainer.appendChild(comment);

    commentInput.value = "";
    usernameInput.value = "";
    ratingInput.value = "";
  }
});
function send() {
    var arr = document.getElementsByTagName('input');
    var qty = arr[4].value;
    if ( luaChonDaChon1 == 0) {
        alert('Please choose size');
        return;
    }
    if(luaChonDaChon == 0) {
        alert('Please select the type of pot');
        return;
    }
    if(qty == "") {
        alert("Please enter quantity");
        return;
    }   else{ 
        window.location.href = "http://127.0.0.1:5501/html/customer.html";
        alert('Add to cart successfully')  ;
    }
}
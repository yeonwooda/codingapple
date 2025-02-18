// 반복문
// for (let i = 0; i < 3; i++) {
//   $(".tab-button")
//     .eq(i)
//     .on("click", function () {
//       탭열기(i);
//     });
// }

document.querySelector(".list").addEventListener("click", function (e) {
  // 지금 누른게 버튼 0이면 탭열기 (0)

  if (e.target == document.querySelectorAll(".tab-button")[0]) {
    탭열기(0);
  }
});

function 탭열기(구멍) {
  $(".tab-button").removeClass("orange");
  $(".tab-button").eq(구멍).addClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(구멍).addClass("show");
}

// 버튼 0 누르면
// 모든 버튼에 붙은 orange 클래스명 제거
// 버튼 0에 orange 클래스명 추가
// 모든 div에 붙은 show 클래스명 제거
// div0에 show 클래스명 추가

// var 버튼 = document.querySelectorAll(".tab-button");

// 버튼[0].addEventListener("click", function () {
//   document.querySelector(".orange")?.classList.remove("orange");
//   document.querySelector(".show")?.classList.remove("show");

//   버튼[0].classList.add("orange");
//   document.querySelectorAll(".tab-content")[0].classList.add("show");
// });

// document
//   .querySelectorAll(".tab-button")[1]
//   .addEventListener("click", function () {
//     document.querySelector(".orange")?.classList.remove("orange");
//     document.querySelector(".show")?.classList.remove("show");

//     document.querySelectorAll(".tab-button")[1].classList.add("orange");
//     document.querySelectorAll(".tab-content")[1].classList.add("show");
//   });

// document
//   .querySelectorAll(".tab-button")[2]
//   .addEventListener("click", function () {
//     document.querySelector(".orange")?.classList.remove("orange");
//     document.querySelector(".show")?.classList.remove("show");

//     document.querySelectorAll(".tab-button")[2].classList.add("orange");
//     document.querySelectorAll(".tab-content")[2].classList.add("show");
//   });

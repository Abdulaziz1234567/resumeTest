const btn = document.querySelector(".w-icon-nav-menu"),
  modal = document.querySelector(".w-nav-menu");

// function openModal() {
//   modal.classList.add("show");
//   modal.style.transform = "translateX(0%)";
//   modal.style.transition = "0.5s";
// }

// function closeModal() {
//   modal.classList.add("hide");
//   modal.classList.remove("show");
//   document.body.style.overflow = "";
// }

// modal.addEventListener("click", (e) => {
//   if (e.target === modal || e.target.getAttribute("data-close") === "") {
//     closeModal();
//   }
// });

$(".w-icon-nav-menu").click(function () {
  $(".w-nav-menu").css({
    display: "block",
    transform: "translateX(0%) translateY(0px)",
    transition: "transform 600ms ease 0s",
  });
  $(".w-icon-nav-menu").css({
    opacity: "0",
  });
});
$(".nav-link-2.mobile").click(function () {
  $(".w-nav-menu").css({
    display: "block",
    transform: "translateX(-100%) translateY(0px)",
    transition: "transform 600ms ease 0s",
  });
  $(".w-icon-nav-menu").css({
    opacity: "1",
  });
});

const menuBtn = document.querySelector(".w-icon-nav-menu");
const menuList = document.querySelector(".w-nav-menu");
menuBtn.addEventListener("click", () => {
  menuList.classList.add = ".show";
  // menuList.classList.add("show");
  //   menuList.style.display = "block";
  //   document.body.style.overflow = "";
});

// menuBtn.addEventListener("click", showModal);

// function showModal() {
//   menuList.classList.add(".show");
//   menuList.classList.add("show");
//   menuList.style.display = "block";
//}

// $(function () {
//   // menu link start
//   let link = $(".header-menu-box-li-link");
//   link.on("click", function (e) {
//     e.preventDefault();
//     link.removeClass("active");
//     let selector = $(this).addClass("active").attr("href");
//     let target = $(selector);

//     $("html, body").animate(
//       {
//         scrollTop: target.offset().top - 70,
//       },
//       500
//     );
//   });

//   $(window).scroll(function () {
//     let scroll = $(window).scrollTop();
//     link.each(function () {
//       let selector = $(this).attr("href");
//       let target = $(selector);

//       if (scroll >= target.offset().top - 200) {
//         link.removeClass("active");
//         $(this).addClass("active");
//       }
//     });
//   });

//   $(".top").click(function () {
//     $("html, body").animate(
//       {
//         scrollTop: 0,
//       },
//       500
//     );
//   });
//   // menu link end
//   ////////////////////////////////////////////////////////////////////////////
//   // preloader start
//   function loadData() {
//     return new Promise((resolve, reject) => {
//       $("body").css({
//         overflow: "hidden",
//       });
//       $(".preloader").css({
//         display: "block",
//       });
//       setTimeout(resolve, 4000);
//     });
//   }
//   loadData().then(() => {
//     $(".preloader").css({
//       display: "none",
//     });
//     $("body").css({
//       overflow: "auto",
//     });
//   });
//   // preloader end
//   //////////////////////////////////////////////////////////////////////////////
//   //mouse btn start
//   $(".mouse").on("click", function (e) {
//     var anchor = $(this).attr("href");
//     $("html, body")
//       .stop()
//       .animate(
//         {
//           scrollTop: $(anchor).offset().top,
//         },
//         800
//       );
//     return false;
//   });
//   //mouse btn end
//   // /////////////////////////////////////////////////////////////////////////////
//   // menu btn start

//   function menuBtn() {
//     $(".menu-toggle").click(function () {
//       $(".header-menu-nav").toggleClass("active");
//       $(".menu-toggle").toggleClass("active");
//     });

//     $(".header-menu-box-li-link").click(function () {
//       $(".header-menu-nav").removeClass("active");
//       $(".menu-toggle").removeClass("active");
//     });

//     $(window).resize(function () {
//       if ($(window).width() < 600) {
//         $(".header-menu-nav").removeClass("active");
//       }
//     });
//   }
//   menuBtn();
//   // menu btn end
//   ///////////////////////////////////////////////////////////////////////////////////
//   // workModal start
//   $(".main_work-inner-more").hide();
//   $("#more").click(function () {
//     $(".main_work-inner-more").slideToggle();
//     if ($("#more").text() == "Show more") {
//       $("#more").text("Less more");
//     } else {
//       $("#more").text("Show more");
//     }
//   });
//   // workModal end
//   ///////////////////////////////////////////////////////////////////////////////////
//   //проверка заполнения обяз-х полей
//   $(".form-group-text").blur(function () {
//     if ($(this).val() == "") {
//       $(this).css({
//         border: "1px solid red",
//       });
//       $(this).addClass("red");
//     } else {
//       $(this).css({
//         border: "1px solid #50C8EE",
//         color: "#000",
//       });
//       $(this).removeClass("red");
//     }
//   });
// });

// //scrollbar js code start
// let progress = document.getElementById("progressbar");
// let totalHeight = document.body.scrollHeight - window.innerHeight;

// window.onscroll = function () {
//   let progressHeight = (window.pageYOffset / totalHeight) * 100;
//   progress.style.height = progressHeight + "%";
// };
// //scrollbar js code end
// // ////////////////////////////////////////////////////////////////////////////////
// // progress bar start
// const skillsBox = document.getElementById("skills");
// const skillProgressBar = document.querySelectorAll(".progress-bar");

// function showProgress() {
//   skillProgressBar.forEach((progressBar) => {
//     const value = progressBar.dataset.progress;
//     progressBar.style.opacity = 1;
//     progressBar.style.width = `${value}%`;
//   });
// }

// function hideProgress() {
//   skillProgressBar.forEach((p) => {
//     p.style.opacity = 0;
//     p.style.width = 0;
//   });
// }
// window.addEventListener("scroll", () => {
//   const sectionPos = skillsBox.getBoundingClientRect().top;
//   const screenPas = window.innerHeight / 2;
//   if (sectionPos < screenPas) {
//     showProgress();
//   } else {
//     hideProgress();
//   }
// });

// // new code added

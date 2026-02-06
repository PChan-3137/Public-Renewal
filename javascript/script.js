
// 문화마당

let programBtn = document.querySelectorAll('.left-menu')
programBtn.forEach(function (i) {
  i.addEventListener("click", function () {
    programBtn.forEach(function (a) {
      a.classList.remove('active');
    })
    this.classList.add('active')
    // 기존 swiper 제거
    if (programSwiper) {
      programSwiper.destroy(true, true);
    }
    document.querySelectorAll('.programSwiper').forEach(swiper => {
      swiper.classList.remove("active");
    })
    const targetSwiper = document.querySelector(`.programSwiper[data-menu="${i.id}"]`);
    targetSwiper.classList.add("active");
    programSwiper = createSwiper(targetSwiper);
  })
})

let programSwiper = null;
const swiperOption = {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".slide-button-prev",
    prevEl: ".slide-button-next",
  },
  breakpoints: {
    1024: { slidesPerView: 4 },
    768: { slidesPerView: 3 },
    400: { slidesPerView: 1 }
  }
};
function createSwiper(target) { return new Swiper(target, swiperOption); }
const initSwiperEl = document.querySelector(".programSwiper.active");
programSwiper = createSwiper(initSwiperEl);

// 이달의 책

let bookBtn = document.querySelectorAll('.book-menu')
const bookSwipers = document.querySelectorAll('.bookSwiper')
bookBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    bookBtn.forEach(function (a) {
      a.classList.remove('active');
    })
    btn.classList.add('active');
    const targetBSwiper = btn.id;
    bookSwipers.forEach(function (e) {
      if (e.dataset.menu === targetBSwiper) {
        e.classList.add('active');
        // e.swiper.update();
      } else {
        e.classList.remove('active');
      }
    })
  })
})
const bookSwiper = new Swiper(".bookSwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  breakpoints: {
    1024: { slidesPerView: 4 },
    768: { slidesPerView: 3 },
    200: { slidesPerView: 2 }
  }
});

// 공지사항

const noticeBtn = document.querySelectorAll('.notice-tab')
const noticeLists = document.querySelectorAll('.notice-list')
noticeBtn.forEach(tab => {
  tab.addEventListener("click", function () {
    const menu = tab.dataset.menu
    noticeBtn.forEach(function (a) { a.classList.remove('active'); })
    noticeLists.forEach(function (b) { b.classList.remove('active'); })
    tab.classList.add('active')
    let nlist = document.querySelector(`.notice-list[data-menu="${menu}"]`)
    nlist.classList.add('active')
  })
})

// 팝업

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.popup-close');
closeBtn.addEventListener('click', () => {
  popup.classList.add('hide');
  document.body.classList.remove('body-lock');
});
function openPopup(){
  popup.classList.remove('hide');
  document.body.classList.add('body-lock');
}
openPopup()
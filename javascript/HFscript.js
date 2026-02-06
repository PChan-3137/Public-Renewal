
let menuItems = document.querySelectorAll('.menu-item');
let submenus = document.getElementById('sub-wrap')
let header = document.getElementById('header')
let subPannels = document.querySelectorAll('.sub-panel')
menuItems.forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    const targetId = this.dataset.target;
    console.log(targetId)
    menuItems.forEach(function (i) {
      i.classList.remove('active');
    })
    subPannels.forEach(function (i) {
      i.classList.remove('active')
    })
    submenus.classList.add('active')
    header.classList.add('active')
    this.classList.add('active')
    const target = document.getElementById(targetId);
    if (target) { target.classList.add('active') }
  })
});

submenus.addEventListener('mouseleave', function () {
  submenus.classList.remove('active')
  header.classList.remove('active')
  menuItems.forEach(function (i) {
    i.classList.remove('active');
  })
})

// 모바일메뉴

let mobileBtn = document.getElementById('MmenuBtn');
let mobileWrap = document.getElementById('M-wrapper');
let mobileClose = document.getElementById('MmenuClose')
mobileBtn.addEventListener('click', function (i) {
  mobileWrap.classList.add('active');
  console.log('hi')
})
mobileClose.addEventListener('click', function (i) {
  mobileWrap.classList.remove('active');
  console.log('bye')
})

let mobileMenu = document.querySelectorAll('.M-menu')
mobileMenu.forEach(i => {
  let title = i.querySelector('.M-title')
  let content = i.querySelector('.M-content')
  title.addEventListener('click', function () {
    let isActive = i.classList.contains('active');
    mobileMenu.forEach(ii => {
      ii.classList.remove('active')
      ii.querySelector('.M-title').classList.remove('active')
      ii.querySelector('.M-content').classList.remove('active')
    })
    if (!isActive) {
      i.classList.add('active')
      title.classList.add('active')
      content.classList.add('active')
    }
  })
})


const otherSiteBtn = document.querySelector('.other-site');
const otherSiteNav = document.querySelector('.other-site-nav');
const navItems = document.querySelectorAll('.other-site-nav .nav-item');

otherSiteBtn.addEventListener('click', () => {
  const width = otherSiteBtn.offsetWidth;
  otherSiteNav.style.width = width + 'px';
  otherSiteNav.classList.toggle('active');
  if(!otherSiteNav.classList.contains('active')){
    navItems.forEach(i => i.classList.remove('active'));
  }

});

navItems.forEach(item => {
  const title = item.querySelector('.nav-title');

  title.addEventListener('click', (e) => {
    e.preventDefault();

    navItems.forEach(i => {
      if (i !== item) i.classList.remove('active');
    });

    item.classList.toggle('active');
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.footer-sub')) {
    otherSiteNav.classList.remove('active');
    closeOSNav();
  }
});

function closeOSNav(){
  otherSiteNav.classList.remove('active');
  navItems.forEach(i => i.classList.remove('active'))
}

const TBtn = document.querySelector('#topBtn');
TBtn.addEventListener('click',()=>{
  window.scrollTo({
    top: 0, behavior: 'smooth'
  })
})
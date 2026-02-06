const cards = document.querySelectorAll('.program-card');
const targetFilters = document.querySelectorAll('.filter-target');
const methodFilters = document.querySelectorAll('.filter-method');
const typeFilters = document.querySelectorAll('.filter-type');
const searchInput = document.querySelector('.program-input');
const searchBtn = document.querySelector('.program-search-btn');

let pagenation = document.querySelector('.pagenation');
let empty = document.querySelector('.empty');
let numbers = document.querySelector('#numbers');
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');

let rowsPerPage = 9;
let currentPage = 0;

let visibleRows = [];


// 필터 적용
function applyFilters() {
  let selectedTargets = [];
  let selectedMethods = [];
  let selectedTypes = [];
  let searchTxt = searchInput.value.trim().toLowerCase();

  targetFilters.forEach(cb => {
    if (cb.checked) {
      selectedTargets.push(cb.value);
    }
  });
  methodFilters.forEach(cb => {
    if (cb.checked) {
      selectedMethods.push(cb.value);
    }
  });
  typeFilters.forEach(cb => {
    if (cb.checked) {
      selectedTypes.push(cb.value);
    }
  });

  cards.forEach(function (card) {
    let cardTarget = card.dataset.target || "";
    let cardMethod = card.dataset.method || "";
    let cardType = card.dataset.type || "";
    let cardTitle = (card.dataset.title || "").toLowerCase();

    const targetPass = selectedTargets.length === 0 || selectedTargets.some(v => cardTarget.includes(v));
    const methodPass = selectedMethods.length === 0 || selectedMethods.some(v => cardMethod.includes(v));
    const typePass = selectedTypes.length === 0 || selectedTypes.some(v => cardType.includes(v));
    const titlePass = searchTxt === "" || cardTitle.includes(searchTxt);

    if (targetPass && methodPass && typePass && titlePass) {
      card.style.display = "";
    } else{
      card.style.display = "none";
    }
  });

  visibleRows = [];
  cards.forEach(function (card) {
    if (card.style.display !== "none") {
      visibleRows.push(card);
    }
  });

  if (visibleRows.length === 0) {

    pagenation.style.display = "none";
    empty.style.display = "flex";
  }else{
    pagenation.style.display = "flex";
    empty.style.display = "none";
  }

  buildPagination();
  displayRow(0);
}

// 페이지 버튼 생성
function buildPagination() {
  numbers.innerHTML = "";
  let pageCount = Math.ceil(visibleRows.length / rowsPerPage);
  for (let i = 0; i < pageCount; i++) {
    numbers.innerHTML += `<li><a class="page-btn" href="#">${i + 1}</a></li>`;
  }
  let numberBtns = numbers.querySelectorAll('a');

  numberBtns.forEach(function (btn, idx) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      displayRow(idx);
    });
  });

  prevBtn.onclick = function () {
    if (currentPage > 0) {
      displayRow(currentPage - 1);
    }
  };

  nextBtn.onclick = function () {
    let pageCount = Math.ceil(visibleRows.length / rowsPerPage);
    if (currentPage < pageCount - 1) {
      displayRow(currentPage + 1);
    }
  };
}


// 화면에 카드 표시
function displayRow(pageIdx) {

  let start = pageIdx * rowsPerPage;
  let end = start + rowsPerPage;
  cards.forEach(function (card) {
    card.style.display = "none";
  });
  visibleRows.slice(start, end).forEach(function (card) {
    card.style.display = "";
  });
  let numberBtns = numbers.querySelectorAll('a');
  numberBtns.forEach(function (btn) {
    btn.classList.remove('active');
  });
  if (numberBtns[pageIdx]) {
    numberBtns[pageIdx].classList.add('active');
  }
  currentPage = pageIdx;
  updateButtons()
}

function updateButtons(){
  const pageCount = Math.ceil(visibleRows.length / rowsPerPage);
  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = (currentPage >= pageCount - 1);
}

searchBtn.addEventListener('click', applyFilters);
searchInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    applyFilters();
  }
});


visibleRows = Array.from(cards);
buildPagination();
displayRow(0);
let rowsPerPage = 10;
let rows = document.querySelectorAll('.n-item');
let rowsCount = rows.length;
let pageCount = Math.ceil(rowsCount / rowsPerPage);
let numbers = document.querySelector('#numbers');

let firstBtn = document.querySelector('.prevs');
let prevBtn  = document.querySelector('.prev');
let nextBtn  = document.querySelector('.next');
let lastBtn  = document.querySelector('.nexts');

let currentPage = 0;

for (let i = 1; i <= pageCount; i++) {
  numbers.innerHTML += `<li><a class="page-btn" href="#">${i}</a></li>`;
}

let numberBtns = numbers.querySelectorAll('a');

function displayRow(pageIdx) {
  let start = pageIdx * rowsPerPage;
  let end = start + rowsPerPage;
  let rowsArray = [...rows];
  for(ra of rowsArray){
    ra.style.display='none'
  }
  let newRows = rowsArray.slice(start, end);
  for(nr of newRows){
    nr.style.display=''
  }
  numberBtns.forEach(btn => btn.classList.remove('active'));
  numberBtns[pageIdx].classList.add('active');
  currentPage = pageIdx;
  updateButtons()
}

function updateButtons(){
  prevBtn.disabled = currentPage === 0;
  firstBtn.disabled = (currentPage <= 1);
  nextBtn.disabled = (currentPage >= pageCount - 1);
  lastBtn.disabled = (currentPage >= pageCount - 2);
}

displayRow(0);

numberBtns.forEach((btn, idx) => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    displayRow(idx);
  });
});


firstBtn.addEventListener('click', () => displayRow(0));
prevBtn.addEventListener('click', () => {
  if (currentPage > 0) displayRow(currentPage - 1);
});
nextBtn.addEventListener('click', () => {
  if (currentPage < pageCount - 1) displayRow(currentPage + 1);
});
lastBtn.addEventListener('click', () => displayRow(pageCount - 1));

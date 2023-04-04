const searchEl = document.querySelector('.search');
// document는 하나의 요소, html이라고 보면 됨
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  //search라는 div 클래스를 요소클릭하면 함수가 시작하는데 이벤트를 추가
  //Logic..
  searchInputEl.focus();
});
// 돋보기를 누르면 글자 작성하는 칸이 움직임

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
// searchInputEl에 포커스가 되면 두번째 인수 함수가 실행이 됨
// searchInputEl에 어떤 html속성을 지정할때 쓰는 메소드

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});
// blur은 input요소에 focus가 해제됐을 때

// TIME
// 올해가 몇 년도인지 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2023 현재 년도가 나옴

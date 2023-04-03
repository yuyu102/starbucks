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


// 페이지 스크롤에 영향을 받는 요소들을 검색
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// 페이지 스크롤 이벤트 추가
// 스크롤이 지나치게 자주 발생하는 것을 조절(throttle, 일부러 부하를 줌)
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기(500 이상이면)
    // badgeEl.style.display = 'none';
      // gsap.to(요소, 지속시간, 옵션);
      gsap.to(badgeEl, .6, {
        opacity: 0,
        display: 'none'
      });
    // badgeEl이라는 요소 안에 css의 style 속성인 display를 none 하겠다.
    // 문자로 입력해야하는 것은 ''사이에 넣어야 함. 숫자는 그냥 써도 됨

    // 버튼 보이기!
    gsap.to('#to-top', .2, {
      x: 0
    });
  } else {
    // 배지 보이기 (500 이하면)
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1,
      dispaly: 'block'
    });
    // 버튼 숨기기!
    gsap.to('#to-top', .2, {
      x: 100
    }); 
  }
}, 300));
// _.throttle(함수, 시간)

// TO-TOP
// 상단으로 스크롤 버튼을 클릭하면,
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7후에 첫번째 요소, 1.4후에 두번째 요소, 2.1후에 세번째 요소, 2.7 ..
    opacity: 1
  });
  // .7후에 애니메이션 효과가 나옴
  // 반복적 처리 기능
  
});

// new SWIPER(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});
// css 선택자, 띄어쓰기는 후손 선택자. container에 있는 요소를 슬라이드 하겠단 의미
// direction: 'horizontal' // 수평 슬라이드

// PROMOTION
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true, // 반복 재생 여부
  // autoplay: {
  //   delay: 5000
  // }
  pagination: {  // 페이지 번호 사용 여부
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자,
    clickable: true  // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
    nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
  }
});

// AWARDS
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});



// 슬라이드 영역 요소 검색
const promotionEl = document.querySelector('.promotion');
// 슬라이드 영역을 토글하는 버튼 검색
const promotionToggleBtn = document.querySelector('.toggle-promotion');
// 슬라이드 영역 숨김 여부 기본값!
let isHidePromotion = false;
// isHidePromotion => promotion영역이 숨겨져 있니? 라는 뜻
// 처음에는 안 숨겨져 있음
// 토글 버튼을 클릭하면,
promotionToggleBtn.addEventListener('click', function () {
  // 슬라이드 영역 숨김 여부를 반댓값으로 할당
  isHidePromotion = !isHidePromotion
  // ! => 중요함. 값의 반대의 값을 반환한다는 뜻
  // 요소를 숨겨야 하면,
  if (isHidePromotion) {
    // true면 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    // false면 보임 처리!
    promotionEl.classList.remove('hide');
  }
});

// YOUTUBE VIDEO
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  // random()은 위에 복붙한 함수 가져옴
  gsap.to(
    selector,  // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
      y: size, // 'transform: translateY(수치); 와 같음. 수직으로 얼마나 움직일지 설정.
      repeat: -1, // 몇 번 반복하는지를 설정, '-1'은 무한 반복.
      yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생. 왔다갔다
      ease: Power1.easeInOut, // 타이밍 함수, 구글에 gsap easing 검색해서 나온 거 복붙
      delay: random(0, delay) // random하게 delay
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// ScrollMagic
// Els의 s는 복수를 의미
// 관리할 요소를 검색
const spyEls = document.querySelectorAll('section.scroll-spy');
// 요소들 반복 처리
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수)
});


// TIME
// 올해가 몇 년도인지 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2023 현재 년도가 나옴

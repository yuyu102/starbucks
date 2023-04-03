// 구글에서 youtube iframe api 를 검색해서 복붙
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
// onYouTubeIframeAPIReady의 함수 이름은 외부에서 가져오는 라이브러리가 찾는 함수임. 실행해줘서 절대 바꾸면 안됨
function onYouTubeIframeAPIReady() {
  //<div id="player"></div> 의 player을 뜻함
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // 영상이 준비되었을 때,
      onReady: function (event) {
        event.target.mute() // 음소거
      }
      // 이 동영상 플레이어가 준비가 되면 그때 함수 실행 해줌
    }

  });
}

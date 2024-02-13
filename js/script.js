// $('.mv').slick()　この時点でスライド式になる。
// $('.mv').slick({}) あとは{}の中にスライドの仕方などの追加したい機能を記述。
$('.mv').slick({ 
    fade: true, //これでドラックした時に画像のスライドされる様子がフェイド式になる。
    autoplay: true, //これは自動で何秒後にスライドしてくれる。
    autoplaySpeed: 4000, //これでスライドするスピードを4秒後にする。
    speed: 1200, //切り替えを1.2秒にする。
    arrows: false, //これはユーザ向けのスライドさせるボタンをfalseで無しにする。
    swipe: false, //これはドラックした時にも画像がスライドされる機能をfalseで無しにする。
  })
  
  window.addEventListener('load', () => {
    AOS.init()
  })
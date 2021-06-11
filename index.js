$(".sun").click(function(){
  document.querySelector(".top-contianer").style.backgroundColor = "black";
  document.querySelector(".sun").src = 'image/moon.png';
  document.querySelector(".back").src = 'image/star.png';
  document.querySelector(".back").classList.add("star");
  document.querySelector(".navbar").classList.remove("navbar-light");
  document.querySelector(".navbar").classList.add("navbar-dark");


  setTimeout(function(){
    document.querySelector(".top-contianer").style.backgroundColor = "#e3f5f9";
    document.querySelector(".sun").src = 'image/sun.png';
    document.querySelector(".back").src = '';
    document.querySelector(".back").classList.remove("star");
    document.querySelector(".navbar").classList.add("navbar-light");
    document.querySelector(".navbar").classList.remove("navbar-dark");
  },1500);
});

$(".top-cloud").click(function(){
  var audio = new Audio('sound/thunder.mp3');
  audio.play();
});

$(".bottom-cloud").click(function(){
  var audio = new Audio('sound/thunder.mp3');
  audio.play();
});

$(".college1").mouseover(function () {
  $(this).attr('src', 'image/nsit.jpg');
}).mouseout(function () {
  $(this).attr('src', 'image/nsut.png');
});

$(".college2").mouseover(function () {
  $(this).attr('src', 'image/cro.jpg');
}).mouseout(function () {
  $(this).attr('src', 'image/fiitjee.png');
});

$(".college3").mouseover(function () {
  $(this).attr('src', 'image/dps.jpg');
}).mouseout(function () {
  $(this).attr('src', 'image/dps.png');
});

$(".college4").mouseover(function () {
  $(this).attr('src', 'image/river.jpg');
}).mouseout(function () {
  $(this).attr('src', 'image/riverdale.jpg');
});

$(".github").click(function (){
  fetch("https://api.github.com/users/Abhi-webd")
  .then((result) => result.json())
  .then((data) => {
    console.log(data)
    document.querySelector(".githubcontent").innerHTML = `
      <a href="https://github.com/Abhi-webd" target="_blank"><img class = "githubimage" src = "${data.avatar_url}"/></a>
      <p class="githubtext">Username : "${data.login}" <br>User id : "${data.id}"<br>Public Repos : "${data.public_repos}"<br> Click on image to see Github profile<p>
    `
  })
});

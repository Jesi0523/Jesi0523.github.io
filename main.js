let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #78b8f7;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #78b8f7;">Programadora Junior.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();

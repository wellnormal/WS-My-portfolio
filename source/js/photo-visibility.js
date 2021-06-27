// let image = document.getElementById("image");
let popup = document.querySelector('.about__name');
let list = document.querySelector('.foto__item');

popup.addEventListener("mouseover",function(){
  // image.style.visibility = "visible"
  let item = `<li id = "deletes"><img src = "/img/foto.jpg">`
  list.insertAdjacentHTML("beforeend",item);
  
})
popup.addEventListener("mouseout",function(){
document.querySelector("#deletes").remove()
})
// --------------------------------
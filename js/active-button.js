
document.addEventListener("DOMContentLoaded", function(){
  addActiveClass()
});

const addActiveClass = ()=>{

  const header = document.getElementById("related-topics");
  const btns = header.getElementsByClassName("topic-btn");  
  
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("topic-active");
    current[0].className = current[0].className.replace(" topic-active", "");
    this.className += " topic-active";
    });
  }
}
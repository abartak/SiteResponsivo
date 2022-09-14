// Smoothing scrolling
$("#navbar a, .btn").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault()
    const hash = this.hash

    $("html, body").animate({
      scrollTop: $(hash).offset().top - 100
    }, 800)

  }
})

//Sticky menu background
window.addEventListener("scroll", function(){
  if(window.scrollY > 150){
    this.document.querySelector("#navbar").style.opacity = 0.9;
  }else{
    document.querySelector("#navbar").style.opacity =1
  }
})
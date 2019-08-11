var prevScrollpos = window.pageYOffset;

window.onload = function() {
  console.log(window);
  document.getElementById("page-content").classList.add('show');
  document.getElementById("page-content").classList.remove('hide');
}

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}
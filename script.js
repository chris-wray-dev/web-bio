function showPage(e) {
  const aboutPage = document.getElementById('about');
  const portfolioPage = document.getElementById("portfolio");
  const contactPage = document.getElementById("contact");
  const aboutButton = document.getElementById('about-button');
  const portfolioButton = document.getElementById('portfolio-button');
  const contactButton = document.getElementById('contact-button');
  
  if (e.target.className === "nav-link about-button") {

    aboutPage.classList.remove('hidden');
    portfolioPage.classList.add('hidden');
    contactPage.classList.add('hidden');
    aboutButton.classList.add('current');
    portfolioButton.classList.remove('current');
    contactButton.classList.remove('current');

  } else if (e.target.className === "nav-link portfolio-button") {

    aboutPage.classList.add('hidden');
    portfolioPage.classList.remove('hidden');
    contactPage.classList.add('hidden');
    aboutButton.classList.remove('current');
    portfolioButton.classList.add('current');
    contactButton.classList.remove('current');

    
  } else if (e.target.className === "nav-link contact-button") {

    aboutPage.classList.add('hidden');
    portfolioPage.classList.add('hidden');
    contactPage.classList.remove('hidden');
    aboutButton.classList.remove('current');
    portfolioButton.classList.remove('current');
    contactButton.classList.add('current');
    
  }

}

window.addEventListener('click', showPage);
let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  console.log(window.pageXOffset)
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}
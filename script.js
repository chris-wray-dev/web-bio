// function showPage(e) {
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//   if (!audio) return;
//   audio.currentTime = 0;
//   audio.play();
//   key.classList.add('playing');
// }

// function removeTransition(e) {
//   if (e.propertyName !== 'transform') return;
//   this.classList.remove('playing');
// }

// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// window.addEventListener('keydown', playSound);





function showPage(e) {
  const aboutPage = document.getElementById("about");
  const portfolioPage = document.getElementById("portfolio");
  const contactPage = document.getElementById("contact");
  console.log(e.target.className);

  if (e.target.className === "nav-link about-button") {

    aboutPage.style.display = 'inherit';
    aboutPage.classList.add('show');
    aboutPage.classList.remove('hide');

    portfolioPage.style.display = 'none';
    portfolioPage.classList.add('hide');
    portfolioPage.classList.remove('show');

    contactPage.style.display = 'none';
    contactPage.classList.add('hide');
    contactPage.classList.remove('show');

  } else if (e.target.className === "nav-link portfolio-button") {

    aboutPage.style.display = 'none';
    aboutPage.classList.add('hide');
    aboutPage.classList.remove('show');

    portfolioPage.style.display = 'inherit';
    portfolioPage.classList.add('show');
    portfolioPage.classList.remove('hide');

    contactPage.style.display = 'none';
    contactPage.classList.add('hide');
    contactPage.classList.remove('show');

    console.log(aboutPage);
    console.log(portfolioPage);
    console.log(contactPage);
  }

}

const buttons = document.querySelectorAll("button");

window.addEventListener('click', showPage);

//   aboutPage.style.display = true;
//   aboutPage.classList.add('show');
//   aboutPage.classList.remove('hide');

//   portfolioPage.style.display = false;
//   portfolioPage.classList.add('hide');
//   portfolioPage.classList.remove('show');

//   contactPage.style.display = false;
//   contactPage.classList.add('hide');
//   contactPage.classList.remove('show');
// });

// portfolioButton.addEventListener("click", function() {
//   aboutPage.style.display = false;
//   aboutPage.classList.add('hide');
//   aboutPage.classList.remove('show');

//   portfolioPage.style.display = true;
//   portfolioPage.classList.add('show');
//   portfolioPage.classList.remove('hide');

//   contactPage.style.display = false;
//   contactPage.classList.add('hide');
//   contactPage.classList.remove('show');
// });

// contactButton.addEventListener("click", showContact);

window.onload = function () {
  document.getElementById("about").classList.add('show');
  document.getElementById("about").classList.remove('hide');
}

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}
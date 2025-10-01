document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.nav-links a').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      // e.preventDefault();
      document.getElementsByClassName('nav-links')[0].classList.toggle('active');
    });

  });

  document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementsByClassName('nav-links')[0].classList.toggle('active');
  })

  document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const darktheme = this.body.classList.contains('dark-mode')
    localStorage.setItem('darkmode', darktheme ? "on" : '')
    document.getElementById('dark-mode-toggle').textContent = darktheme ? '☀️' : '🌙';
  })

  if (localStorage.getItem('darkmode') == 'on') {
    document.body.classList.add('dark-mode');
    document.getElementById('dark-mode-toggle').textContent = '☀️';
  }
  
  const text = document.getElementById("typed-text");
  words = ["Glad to see you here 💙", "Welcome to my portfolio"];
  let wordindex = 0;
  let letterindex = 0;
  let isdeleting = false;
  function type() {
    let currenttext = words[wordindex];
    text.textContent = currenttext.substring(0, letterindex);
    letterindex++;
    if (letterindex > currenttext.length) {
      isdeleting = true;
      setTimeout(function () {
        letterindex = currenttext.length;
        backspace();
      }, 1000);
    }
    else {
      setTimeout(type, 200)

    }

  }
  function backspace() {
    let currenttext = words[wordindex];
    text.textContent = currenttext.substring(0, letterindex);
    letterindex--;
    if (letterindex < 0) {
      isdeleting = false;
      wordindex = (wordindex + 1) % words.length;
      setTimeout(type, 500);
    }
    else {
      setTimeout(backspace, 100);
    }
  }

  setTimeout(type, 500);

  var contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = new FormData(contactForm);

    fetch('https://formspree.io/f/xoqooppj', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'

      }
    })
      .then(response => response.json())
      .then(data => {

        contactForm.reset();
        console.log('Formspree response:', data);
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.navbar a').forEach(function(anchor) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); 
        if (targetId === 'home') {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          } else {
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop -40, 
            behavior: 'smooth'
          });
        }
    }
      }); 
    
    });
    const text=document.getElementById("typed-text");
    words=["Glad to see you here 💙","Welcome to my portfolio"];
    let wordindex=0;
    let letterindex=0;
    let isdeleting=false;
    function type(){
      let currenttext=words[wordindex];
      text.textContent=currenttext.substring(0,letterindex);
      letterindex++;
      if(letterindex>currenttext.length){
        isdeleting=true;
        setTimeout(function(){
          letterindex=currenttext.length;
          backspace();
        },1000);
      }
        else{
          setTimeout(type,200)

        }
      
    } 
    function backspace(){
      let currenttext=words[wordindex];
      text.textContent=currenttext.substring(0,letterindex);
      letterindex--;
      if(letterindex<0){
        isdeleting=false;
        wordindex=(wordindex+1)%words.length;
        setTimeout(type,500);
      }
      else{
        setTimeout(backspace,100);
      }
    }

    setTimeout(type,500); 

    var contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get form data
        var formData = new FormData(contactForm);

        // Reset the form
        
   
    var formData = new FormData(contactForm);

    fetch('https://formspree.io/f/xoqooppj', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
            // Add any additional headers if needed
        }
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response data if needed
        contactForm.reset();
        console.log('Formspree response:', data);
    })
    .catch(error => {
        console.error('Error submitting form:', error);
    });
  });
  });
  
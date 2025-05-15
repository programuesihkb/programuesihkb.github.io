$(document).ready(function () {

  console.log("Hello World!");
  $('#tekst1').css('display', 'none');
  $('#tekst1').fadeIn(2000);

  $('#cloud1').css({"position":"absolute","opacity": 0, "left":"0"});
  $('#cloud1').animate({left:100, opacity:1},4000);

  $('#cloud2').css({"position":"absolute","opacity": 0, "left":"1050"});
  $('#cloud2').animate({left:950, opacity:1},4000);
  /*
  $('#cloud2').css('display', 'none');
  $('#cloud2').delay( 1000 ).fadeIn(4000); 
  */
      
});
  


async function typeSentence(sentence, eleRef, delay = 80) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
}
  
  
function waitForMs(ms) {
return new Promise(resolve => setTimeout(resolve, ms))
}




async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(50);
      letters.pop();
      $(eleRef).html(letters.join(""));
    }
  }


const carouselList = [
    {text: "web developer"},
    {text: "full-stack developer"},
    {text: "graphic designer"}
    ]
  
  async function carousel(carouselList, eleRef) {
      var i = 0;
      await waitForMs(1500);
      while(true) {
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(300);
        i++
        if(i >= carouselList.length) {i = 0;}
      }
  }
  
  carousel(carouselList, "#sentence")



  // Form handling with Formspree
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('homepageform');
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const formData = new FormData(form);
      const formAction = form.getAttribute('action');
      
      fetch(formAction, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        // Handle success
        document.getElementById('form-status').innerHTML = 
          '<div class="alert alert-success mt-3">Thanks for your submission!</div>';
        form.reset();
      })
      .catch(error => {
        // Handle error
        document.getElementById('form-status').innerHTML = 
          '<div class="alert alert-danger mt-3">Oops! There was a problem submitting your form.</div>';
        console.error(error);
      });
    });
  }
});

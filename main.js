// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener('DOMContentLoaded', () => {
  const likeButtons = document.querySelectorAll('.like');

  likeButtons.forEach(button => {
    button.addEventListener('click', () => {
      mimicServerCall()
        .then(() => {
          button.classList.toggle('activated-heart');
          button.querySelector('.like-glyph').textContent = '♥';
        })
        .catch(() => {
          const modal = document.querySelector('#modal');
          const modalMessage = document.querySelector('#modal-message');
          modal.classList.remove('hidden');
          modalMessage.textContent = 'Random server error. Please try again later.';

          setTimeout(() => {
            modal.classList.add('hidden');
          }, 3000);
        });
    });
  });
});





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

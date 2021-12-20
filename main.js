// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

FULL_HEART.class = `activated-heart`
console.log(FULL_HEART)

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  const hearts = document.querySelectorAll('span.like-glyph')
  console.log(hearts.target)
  // document.getElementById('modal').className = 'hidden'

  hearts.forEach(hearts => hearts.addEventListener('click', likeCallBack))

  function likeCallBack(hearts) {
    console.log(hearts.target.innerText)
    mimicServerCall()
      .then(() => {
        if (hearts.target.innerText === EMPTY_HEART) {
          hearts.target.innerText = FULL_HEART
        }
        else {
          hearts.target.innerText = EMPTY_HEART
          console.log(hearts.target.innerText)
        }
      })


      .catch(() => {
        const erMsg = document.getElementById('modal')
        erMsg.className = 'show'
        console.log(erMsg)


        setTimeout(() => {
          const erMsg = document.getElementById('modal')
          console.log(erMsg)
          erMsg.className = 'hidden'
        }, 3000)
      })
    }
  })


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
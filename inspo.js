const inspo = fetch("affirmations.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const quotes = data
    console.log(quotes)
 
function randomize () {

  const keys = Object.keys(quotes);
  const randomIndex = keys[Math.floor(Math.random() * keys.length)];
  const randomQ = quotes[randomIndex];
  console.log(randomQ.Quote);

  const quotetext= document.getElementById('quote')
  quotetext.innerHTML = `<p>${randomQ.Quote}<span>💖</span></p>`
}

  const btn = document.createElement('button')
  btn.innerHTML = "CLICK ME";
  document.body.append(btn)
  btn.addEventListener('click', randomize)

})
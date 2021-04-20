// star creation

const animatedSection = document.querySelector(".animated-area");


// star creation
function createStars() {
  let i;
  for(i = 0; i < 70; ++i)
  {
      // creation of stars using --> span.star
      const star = document.createElement("span");
      star.classList.add("star");

      var 
      x = Math.floor(Math.random() * window.innerWidth), 
      y = Math.floor(Math.random() * window.innerHeight),
      duration = Math.random() * 10,
      size = Math.random() * 2,
      z = Math.floor(Math.random() * 1) + 2;

      star.style.left = x + 'px';
      star.style.top = y + 'px';
      star.style.width = z + size + 'px';
      star.style.height = z  + size + 'px';

      star.style.animationDuration = 5 + duration + 's'; 
      star.style.animationDelay = duration + 's'; 

      animatedSection.append(star);
  }
}

createStars();
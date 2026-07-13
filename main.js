
const container = document.querySelector(".container");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const btnGrp = document.querySelector(".btn-group");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I'm sorry na babu, please maaf kr do yrr";
  gif.src = "images/sorry.png";
  gif.style.height = "300px"; 
gif.style.width = "400px"; 
  noBtn.innerHTML = "No";
  yesBtn.innerHTML = "Accha thik hai";

  yesBtn.addEventListener("click", () => {
    question.innerHTML = "I love you babuu, please call kro na ab yrr pleaseeeeee";
    gif.src = "images/love.gif";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
  })

  noBtn.addEventListener("click", () => {
    question.innerHTML = "Soch lo yrr acche se please!";
    gif.src = "images/download.gif";
    yesBtn.innerHTML = "Accha thik hai";
    noBtn.innerHTML = "Nahi Sochna";

    yesBtn.addEventListener("click", () => {
      question.innerHTML = "I love you babuu, please call kro na ab yrr pleaseeeeee";
      gif.src = "images/love.gif";
      yesBtn.style.display = "none";
      noBtn.style.display = "none";
    })

    noBtn.addEventListener("click", () => {
      question.innerHTML = "ek baar aur soch lo pleaseeee";
      gif.src = "images/sadlife.gif";
      yesBtn.innerHTML = "Chalo maan gayi";
      noBtn.innerHTML = "Final no";

      yesBtn.addEventListener("click", () => {
        question.innerHTML = "I love you babuu, please call kro na ab yrr pleaseeeeee";
        gif.src = "images/love.gif";
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
      });

      noBtn.addEventListener("click", () => {
        question.innerHTML = "Please yrr, maan jao na aap toh meri devi ho";
        gif.src = "images/run.gif";
        yesBtn.innerHTML = "No";
        noBtn.innerHTML = "Yes";

        noBtn.addEventListener("click", () => {
          question.innerHTML = "I love you babuu, please call kro na ab yrr peaseeeeee!";
          gif.src = "images/love.gif";
          yesBtn.style.display = "none";
          noBtn.style.display = "none";
        })
        // Hover effect for the "yes" button
        yesBtn.addEventListener("mouseover", () => {
          const yesBtnRect = yesBtn.getBoundingClientRect();
          const screenWidth = window.innerWidth;
          const screenHeight = window.innerHeight;
          const margin = 50; // Margin from each side
        
          // Calculate maximum available space for the button
          const maxX = screenWidth - yesBtnRect.width - margin * 2; // Considering margin on both sides
          const maxY = screenHeight - yesBtnRect.height - margin * 2; // Considering margin on both sides
        
          // Generate random position within the available space
          const randomX = Math.max(margin, Math.floor(Math.random() * maxX)) + margin; // Add margin to X position
          const randomY = Math.max(margin, Math.floor(Math.random() * maxY)) + margin; // Add margin to Y position
        
          yesBtn.style.left = randomX + "px";
          yesBtn.style.top = randomY + "px";
        });
        
        
      });
    });
  });
});





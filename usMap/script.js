// Select Dom elemnts from HTML
const voteButton = document.querySelector("#vote-button");
const voteAlert = document.querySelector(".vote-alert");
const counter = document.querySelectorAll(".counter");
const select = document.getElementById("states");

const candidates = document.querySelectorAll(".candidates");

// Progress Bar Animation
const restartAnimation = () => {
  const progressBar = document.querySelector("#progress-bar");
  progressBar.style.animationName = "none";

  requestAnimationFrame(() => {
    progressBar.style.animationName = "";
  });
};
voteButton.addEventListener("click", restartAnimation, false);
// Progress Bar Animation Ends

// Counter up logic and add value: +1 to progress bar
var voteCount = 0;
select.addEventListener("input", function () {
  voteCount = 0;
});

// Greying out image on click

candidates.forEach((candidate) => {
  candidate.addEventListener("click", function () {
    candidates.forEach((candidate) => {
      candidate.classList.add("add-grey");
      candidate.classList.remove("grey");
    });

    candidate.classList.remove("add-grey");
    candidate.classList.add("grey");
  });
});
// Greying image out ends

// If vote button is clicked
voteButton.addEventListener("click", function () {
  candidates.forEach((candidate) => {
    // disables counter up and adding to map if a candidate is not selected
    if (candidate.classList.contains("grey")) {
      voteCount++;
      // user gets to vote for a candidate 10 times in a state
      if (voteCount <= 10) {
        // Counter up logic using data target attribute
        counter.forEach((counter) => {
          // Set counter to 0
          counter.innerText = "0";
          // Convert data-target to a number using the "+" shorthand
          let target = +counter.getAttribute("data-target");

          const updateCounter = () => {
            let target = +counter.getAttribute("data-target");

            // Convert counter value to a number using the "+" shorthand
            const c = +counter.innerText;

            // Increment the counter by 5
            const increment = 5;

            // If counter value is less than the data-target
            if (c < target) {
              counter.innerText = `${Math.ceil(c + increment)}`;

              setTimeout(updateCounter, 1);
            }
          };
          updateCounter();
          // Connect candidate selected to their respective total vote counter up
          candidates.forEach((candidate) => {
            if (candidate.classList.contains("grey")) {
              if (candidate.classList.contains("edward")) {
                if (counter.classList.contains("first-vote")) {
                  counter.setAttribute("data-target", target + 1);
                  counter.innerText = counter.getAttribute("data-target");
                }
              }
            }

            if (candidate.classList.contains("grey")) {
              if (candidate.classList.contains("elon")) {
                if (counter.classList.contains("second-vote")) {
                  counter.setAttribute("data-target", target + 1);
                  counter.innerText = counter.getAttribute("data-target");
                }
              }
            }
          });
        });
      } else {
        // counter.innerText = counter.getAttribute("data-target")
      }
    }
  });
});

// <GROUP 3 VOTING SYSTEM PROJECT />

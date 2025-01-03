// btn
const btn = document.querySelector(".btn");
// close-icon
const closeIcon = document.querySelector(".close-icon");
// trailer-container-content
const trailerContainerContent = document.querySelector(
  ".trailer-container-content"
);

// Video
const video = document.querySelector("video");

// console.log(btn);
// console.log(closeIcon);
// console.log(trailerContainerContent);
// console.log(video);

btn.addEventListener("click", () => {
  trailerContainerContent.classList.remove("active");
});

closeIcon.addEventListener("click", () => {
  trailerContainerContent.classList.add("active");
  video.pause();
  video.currentTime = 0;
});

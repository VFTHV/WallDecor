window.addEventListener("load", () => {
  "use strict";

  const slideCount = document.querySelectorAll("#slider-wrapper ul li").length;

  const slideWidth = document.querySelector("#slider-wrapper").offsetWidth;
  console.log(slideWidth);
  const totalWidth = slideCount * slideWidth + "px";

  const next = document.getElementById("next");
  const prev = document.getElementById("prev");

  let leftPosition = 0;
  let counter = 0;
  document.querySelector("#slider-wrapper ul").style.width = totalWidth;

  next.addEventListener("click", (event) => {
    event.preventDefault();
    counter = counter + 1;

    if (counter === slideCount) {
      document.getElementById("slider-wrapper").appendChild(createSlides());
      document.querySelector("#slider-wrapper ul:first-child").style.left = `-${
        slideCount * slideWidth
      }px`;
      document.querySelector("#slider-wrapper ul:last-child").style.left =
        slideWidth + "px";
      setTimeout(() => {
        document.querySelector("#slider-wrapper ul:last-child").style.left =
          "0px";
      }, 0);
      document
        .querySelector("#slider-wrapper ul:first-child")
        .addEventListener("transitionend", () => {
          document.querySelector("#slider-wrapper ul:first-child").remove();
        });
      counter = 0;
    } else {
      leftPosition = `-${counter * slideWidth}px`;
      document.querySelector("#slider-wrapper ul").style.left = leftPosition;
    }
  });

  prev.addEventListener("click", (event) => {
    event.preventDefault();
    counter--;

    if (counter < 0) {
      document.getElementById("slider-wrapper").appendChild(createSlides());
      document.querySelector("#slider-wrapper ul:first-child").style.left =
        slideWidth + "px";
      document.querySelector("#slider-wrapper ul:last-child").style.left = `-${
        slideCount * slideWidth
      }px`;
      setTimeout(() => {
        document.querySelector(
          "#slider-wrapper ul:last-child"
        ).style.left = `-${slideWidth * (slideCount - 1)}px`;
      }, 0);
      document
        .querySelector("#slider-wrapper ul:first-child")
        .addEventListener("transitionend", () => {
          document.querySelector("#slider-wrapper ul:first-child").remove();
        });
      counter = slideCount - 1;
    } else {
      document.querySelector("#slider-wrapper ul").style.left = `-${
        counter * slideWidth
      }px`;
    }
  });

  const createSlides = () => {
    const para = document.createElement("p");
    para.setAttribute("class", "h3");
    para.innerText =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi?";
    const anchor = document.createElement("a");
    anchor.setAttribute("class", "primary-cta");
    anchor.innerText = "HOME DECOR";
    const li = document.createElement("li");
    li.appendChild(para);
    li.appendChild(anchor);
    const ul = document.createElement("ul");
    ul.appendChild(li);
    const li2 = li.cloneNode(true);
    ul.appendChild(li2);
    const li3 = li.cloneNode(true);
    ul.appendChild(li3);
    const li4 = li.cloneNode(true);
    ul.appendChild(li4);
    const li5 = li.cloneNode(true);
    ul.appendChild(li5);
    ul.style.width = "4340px";

    return ul;
  };
});

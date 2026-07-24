import { data } from "./data.js";

const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector("#close-btn");

const tl = gsap.timeline({
  paused: true,
  overwrite: "auto",
});

tl.to(overlay, {
  duration: 0.9,
  bottom: "0px",
  rotation: 0,
  transformOrigin: "bottom center",
  ease: "power3.inOut",
});

const items = document.querySelectorAll(".item");
items.forEach((item, index) => {
  item.addEventListener("click", () => {
    updateOverlay(data[index]);
    tl.play();
  });
});

closeBtn.addEventListener("click", () => {
  tl.reverse();
});

function updateOverlay(dataItem) {
  const itemName = document.querySelector("#item-name");
  const itemCategory = document.querySelector("#item-category");
  const itemLink = document.querySelector("#item-link");
  const itemCopy = document.querySelector("#item-copy");
  const itemImg = document.querySelector("#item-img");
  const itemImg2 = document.querySelector("#item-img2");

  itemName.textContent = dataItem.itemName;
  itemCategory.textContent = dataItem.itemCategory;
  itemCopy.textContent = dataItem.itemCopy;
  itemLink.href = dataItem.itemLink;
  itemImg.src = dataItem.itemImg;
  itemImg2.src = dataItem.itemImg2;
}

document.addEventListener("click", (e) => {
  if (!overlay.contains(e.target) && !isItem(e.target)) {
    tl.reverse();
  }
});

function isItem(target) {
  return target.closest(".item");
}

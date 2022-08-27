window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight > scrollHeight - 5) {
    setTimeout(createPost, 0);
  }
});
function post() {
  let sec = document.querySelector("section");
  for (i = 1; i <= 9; i++) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let p = document.createElement("p");
    img.src = `https://picsum.photos/300/300?random=${random()}`;

    p.classList.add("centered");

    // p.innerText = "jhgfdxcvb"
    div.appendChild(img);
    div.appendChild(p);
    sec.appendChild(div);
  }
}
post();

function createPost() {
  post();
}
function random() {
  let r = Math.ceil(Math.random() * 200);
  return r;
}

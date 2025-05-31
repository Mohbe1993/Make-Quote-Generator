const api = "http://api.quotable.io/random";
const q = document.getElementById("q");
const a = document.getElementById("a");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

async function getDAta(url) {
  const res = await fetch(url);
  var data = await res.json();

  q.innerHTML = data.content;

  a.innerHTML = data.author;
}

getDAta(api);

btn1.addEventListener("click", () => {
  getDAta(api);
});

function x() {
  window.open(
    "https://twitter.com/intent/tweet?text=" + q.innerHTML,
    "xWindow",
    "width=600,height=300,top=300,left=300"
  );
}

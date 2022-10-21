params = new URLSearchParams(window.location.search);
setTimeout(() => {
  var sc = document.createElement("meta");
  sc.setAttribute("property", "og:title");
  sc.setAttribute("content", "og title");
  document.head.appendChild(sc);
  alert(1);
}, params.get("sleep"));

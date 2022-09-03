
const collapse = document.querySelector(".collapse-btn");
const navMenu = document.querySelector("#nav-menu");

collapse.addEventListener("click", () => {
  collapse.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    collapse.classList.remove("active");
    navMenu.classList.remove("active");
  })
);


function service(event, serviceName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(serviceName).style.display = "block";
  event.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

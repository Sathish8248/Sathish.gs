function showInfo() {
  const info = `
    Cloud computing is the delivery of computing services like storage,
    servers, databases, networking, and software over the internet.
    It allows for flexible resources and faster innovation.
  `;
  const box = document.getElementById("infoBox");
  box.innerText = info;
  box.style.display = "block";
}

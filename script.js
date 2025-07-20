const data = {
  aws: {
    title: "Amazon Web Services (AWS)",
    description: "AWS provides servers, storage, networking, remote computing, and more."
  },
  azure: {
    title: "Microsoft Azure",
    description: "Azure offers cloud solutions for app hosting, databases, AI, and analytics."
  },
  gcp: {
    title: "Google Cloud Platform (GCP)",
    description: "GCP includes cloud computing, storage, Kubernetes, and ML tools by Google."
  }
};

function showInfo(service) {
  document.getElementById("info-box").classList.remove("hidden");
  document.getElementById("service-title").innerText = data[service].title;
  document.getElementById("service-description").innerText = data[service].description;
}

function toggleMode() {
  const body = document.body;
  const isDark = body.style.background === "white";
  body.style.background = isDark ? "#121212" : "white";
  body.style.color = isDark ? "#fff" : "#000";
}

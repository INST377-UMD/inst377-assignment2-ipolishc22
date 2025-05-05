function startAudio() {
  if (annyang) {
    const commands = {
      "change the color to *color": (color) => {
        document.body.style.backgroundColor = color;
      },
      "navigate to *page": (page) => {
        const lower = page.toLowerCase();
        if (lower.includes("home"))
          location.href = "INST377_Assigment2_Home.html";
        else if (lower.includes("stocks"))
          location.href = "INST377_Assignment2_Stocks.html";
        else if (lower.includes("dogs"))
          location.href = "INST377_Assignment2_Dogs.html";
      },
    };
    annyang.addCommands(commands);
    annyang.start();
  }
}

function stopAudio() {
  if (annyang) annyang.abort();
}

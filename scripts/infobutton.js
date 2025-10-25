document.addEventListener("DOMContentLoaded", () => {
  const infoText = document.getElementById("info-text");
  const buttons = document.querySelectorAll(".info");

  // Define which text belongs to which button
  const infoData = {
    "01": "The Sword of Damocles is an ancient Greek moral anecdote, an allusion to the imminent and ever-present peril faced by those in positions of power. The sword of Damocles is frequently used in allusion to this tale, epitomizing the imminent and ever-present peril faced by those in positions of power. More generally, it is used to denote the sense of foreboding engendered by a precarious situation, especially one in which the onset of tragedy is restrained only by a delicate trigger or chance.[01]",
    "02": "Memento mori (Latin for 'remember (that you have) to die') is an artistic symbol or trope acting as a reminder of the inevitability of death. The concept has its roots in the philosophers of classical antiquity and Christianity, and appeared in funerary art and architecture from the medieval period onwards.[02]",
    "03": "The Archives of the Planet (French: Les archives de la planète) was a project undertaken from 1908 to 1931 to photograph human cultures around the world. It was sponsored by French banker Albert Kahn and resulted in 183,000 meters of film and 72,000 color photographs from 50 countries. Beginning on a round-the-world trip that Kahn took with his chauffeur, the project grew to encompass expeditions to Brazil, rural Scandinavia, the Balkans, North America, the Middle East, Asia, and West Africa, among other destinations, and documented historical events such as the aftermath of the Second Balkan War, World War I in France, and the Turkish War of Independence. It was inspired by Kahn's internationalist and pacifist beliefs. The project was halted in 1931 after Kahn lost most of his fortune in the stock market crash of 1929. Since 1990, the collection has been administered by the Musée Albert-Kahn, and most of the images are available online",
    "04": "Info 04 — The notion of downloading as a form of preservation and personal archiving in digital culture.",
    "05": "Info 05 — The disappearance of independent websites and the ephemerality of the handmade web.",
    "06": "Info 06 — Exploring the physical infrastructure of the digital: cables, data centers, and server farms.",
    "07": "Info 07 — Measuring the internet: dimensions, complexity, and ungraspable scale."
  };

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const key = button.id || button.textContent.trim();
      const newText = infoData[key] || `No info text defined for ${key}.`;

      // Create the small visual tag
      const visualTag = document.createElement("span");
      visualTag.classList.add("info-visual");
      visualTag.textContent = key; // no brackets

      // Fade out old text
      infoText.style.opacity = 0;
      infoText.style.transition = "opacity 0.4s ease";

      setTimeout(() => {
        // Replace content
        infoText.innerHTML = "";
        infoText.appendChild(visualTag);
        infoText.append(" " + newText);
        // Fade in
        infoText.style.opacity = 1;
      }, 400);
    });
  });
});

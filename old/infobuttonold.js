// document.addEventListener("DOMContentLoaded", () => {
//   const infoText = document.getElementById("info-text");
//   const buttons = document.querySelectorAll(".info");

//   // Define which text belongs to which button
//   const infoData = {
//     "01": "The Horse in Motion is a series of cabinet cards by Eadweard Muybridge, including six cards that each show a series of six to twelve 'automatic electro-photographs' depicting successive phases in the movement of a horse, shot in June 1878. An additional card reprinted the single image of the horse 'Occident' trotting at high speed, which had already been published in 1877.The series became the first example of chronophotography, an early method to photographically record the passing of time, mainly used to document the different phases of locomotion for scientific study.",
//     "02": "The Sword of Damocles is an ancient Greek moral anecdote, an allusion to the imminent and ever-present peril faced by those in positions of power. The sword of Damocles is frequently used in allusion to this tale, epitomizing the imminent and ever-present peril faced by those in positions of power. More generally, it is used to denote the sense of foreboding engendered by a precarious situation, especially one in which the onset of tragedy is restrained only by a delicate trigger or chance.[01]",
//     "03": "Memento mori (Latin for 'remember (that you have) to die') is an artistic symbol or trope acting as a reminder of the inevitability of death. The concept has its roots in the philosophers of classical antiquity and Christianity, and appeared in funerary art and architecture from the medieval period onwards.[02]",
//     "04": "The Archives of the Planet (French: Les archives de la planète) was a project undertaken from 1908 to 1931 to photograph human cultures around the world. It was sponsored by French banker Albert Kahn and resulted in 183,000 meters of film and 72,000 color photographs from 50 countries. Beginning on a round-the-world trip that Kahn took with his chauffeur, the project grew to encompass expeditions to Brazil, rural Scandinavia, the Balkans, North America, the Middle East, Asia, and West Africa, among other destinations, and documented historical events such as the aftermath of the Second Balkan War, World War I in France, and the Turkish War of Independence. It was inspired by Kahn's internationalist and pacifist beliefs. The project was halted in 1931 after Kahn lost most of his fortune in the stock market crash of 1929. Since 1990, the collection has been administered by the Musée Albert-Kahn, and most of the images are available online",
//     "05": "The notion of downloading as a form of preservation and personal archiving in digital culture.",
//     "06": "The disappearance of independent websites and the ephemerality of the handmade web.",
//     "07": "Exploring the physical infrastructure of the digital: cables, data centers, and server farms.",
//     "08": "Measuring the internet: dimensions, complexity, and ungraspable scale."
//   };

//   buttons.forEach(button => {
//     button.addEventListener("click", () => {
//       const key = button.id || button.textContent.trim();
//       const newText = infoData[key] || `No info text defined for ${key}.`;

//       // Create the small visual tag
//       const visualTag = document.createElement("span");
//       visualTag.classList.add("info-visual");
//       visualTag.textContent = key; // no brackets

//       // Fade out old text
//       infoText.style.opacity = 0;
//       infoText.style.transition = "opacity 0.4s ease";

//       setTimeout(() => {
//         // Replace content
//         infoText.innerHTML = "";
//         infoText.appendChild(visualTag);
//         infoText.append(" " + newText);
//         // Fade in
//         infoText.style.opacity = 1;
//       }, 400);
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const infoText = document.getElementById("info-text");
  const buttons = document.querySelectorAll(".info");

  if (!infoText) {
    console.error("No element with id #info-text found.");
    return;
  }

  // set transition once
  infoText.style.transition = "opacity 0.4s ease";

  const infoData = {

    "01": "The Horse in Motion is a series of cabinet cards by Eadweard Muybridge, including six cards that each show a series of six to twelve 'automatic electro-photographs' depicting successive phases in the movement of a horse, shot in June 1878. An additional card reprinted the single image of the horse 'Occident' trotting at high speed, which had already been published in 1877.The series became the first example of chronophotography, an early method to photographically record the passing of time, mainly used to document the different phases of locomotion for scientific study.",

    "02": "The Sword of Damocles is an ancient Greek moral anecdote, an allusion to the imminent and ever-present peril faced by those in positions of power. The sword of Damocles is frequently used in allusion to this tale, epitomizing the imminent and ever-present peril faced by those in positions of power. More generally, it is used to denote the sense of foreboding engendered by a precarious situation, especially one in which the onset of tragedy is restrained only by a delicate trigger or chance.[02]",

    "03": "Memento mori (Latin for 'remember (that you have) to die') is an artistic symbol or trope acting as a reminder of the inevitability of death. The concept has its roots in the philosophers of classical antiquity and Christianity, and appeared in funerary art and architecture from the medieval period onwards.[02]",

    "04": "The Internet Archive is a 1996 founded project to catalogue and archive the internet",

    "05": "The Archives of the Planet (French: Les archives de la planète) was a project undertaken from 1908 to 1931 to photograph human cultures around the world. It was sponsored by French banker Albert Kahn and resulted in 183,000 meters of film and 72,000 color photographs from 50 countries. Beginning on a round-the-world trip that Kahn took with his chauffeur, the project grew to encompass expeditions to Brazil, rural Scandinavia, the Balkans, North America, the Middle East, Asia, and West Africa, among other destinations, and documented historical events such as the aftermath of the Second Balkan War, World War I in France, and the Turkish War of Independence. It was inspired by Kahn's internationalist and pacifist beliefs. The project was halted in 1931 after Kahn lost most of his fortune in the stock market crash of 1929. Since 1990, the collection has been administered by the Musée Albert-Kahn, and most of the images are available online",

    "06": "On are.na each user can catalogue content under 'Channels', it's given a name, a description and can be linked/connected to other channels, this in a way one could say mimics how the world wide web started out, as a giant web of interconnected individual sites",

    "07": "The wayback machine is a service by the Internet Archive, where snapshots from websites are saved and stored, as backups of websites, in the case that they might change or go offline in the future",

    "08": "Starlink is one of many suppliers for satellite internet access.",

    "09": "Sir Timothy John Berners-Lee, 1955, is an English computer scientist and inventor of the world wide web",

    "10": "The function to save content from another computer e.g. server connected to the web onto a local machine ",

    "11": "!!! Walter Benjamin Aura",

    "12": "!!! Internet Broad or tall?"
  };

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // Preferred: set data-key="01" on the HTML for each button.
      // Fallback: extract the first run of digits from dataset/id/text (preserves leading zeros).
      const fromData = button.getAttribute("data-key");
      const fromIdOrText =
        (button.id && button.id.match(/\d+/)?.[0]) ||
        (button.textContent && button.textContent.match(/\d+/)?.[0]) ||
        null;

      const key = fromData ?? fromIdOrText ?? null;

      if (!key) {
        console.warn("Could not determine a key for button:", button);
        return;
      }

      const newText = infoData[key] || `No info text defined for ${key}.`;

      // Create the small visual tag
      const visualTag = document.createElement("span");
      visualTag.classList.add("info-visual");
      visualTag.textContent = key; // no brackets

      // Fade out old text
      infoText.style.opacity = 0;

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


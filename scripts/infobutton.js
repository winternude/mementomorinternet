document.addEventListener("DOMContentLoaded", () => {
  const infoText = document.getElementById("info-text");
  const container = document.querySelector(".content");

  function walk(node) {
    if (node.nodeType === 3) { // text node
      const parent = node.parentNode;

      // Skip headings inside <pre>
      if (parent.closest && parent.closest("pre") && /^H[1-6]$/.test(parent.nodeName)) return;

      // Skip footnotes only if inside a container with class 'footnote' or 'footnotes'
      if (parent.closest && parent.closest(".footnote, .footnotes")) return;

      let text = node.nodeValue;
      Object.keys(infoData).forEach(keyword => {
        const regex = new RegExp(`\\b(${keyword})\\b`, "g");
        if (regex.test(text)) {
          const span = document.createElement("span");
          span.className = "info";
          span.setAttribute("data-key", keyword);
          span.textContent = keyword;

          const parts = text.split(regex);
          const fragment = document.createDocumentFragment();
          parts.forEach(part => {
            if (part === keyword) {
              fragment.appendChild(span.cloneNode(true));
            } else {
              fragment.appendChild(document.createTextNode(part));
            }
          });
          node.replaceWith(fragment);
        }
      });
    } else if (node.nodeType === 1 && node.nodeName !== "SCRIPT" && node.nodeName !== "STYLE") {
      // Skip <h1>-<h6> inside <pre>
      if (node.closest && node.closest("pre") && /^H[1-6]$/.test(node.nodeName)) return;

      Array.from(node.childNodes).forEach(walk);
    }
  }

  walk(container);

  container.addEventListener("click", e => {
    const target = e.target;
    if (target.classList.contains("info")) {
      const key = target.getAttribute("data-key");
      const newText = infoData[key] || `No info defined for "${key}"`;

      infoText.style.opacity = 0;
      setTimeout(() => {
        infoText.innerHTML = `<span class="info-visual">${key}</span> ${newText}`;
        infoText.style.opacity = 1;
      }, 300);
    }
  });
});

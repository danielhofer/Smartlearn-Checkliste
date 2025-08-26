// include.js




async function loadIncludes() {
  const elements = document.querySelectorAll('[include-html]');
  for (const el of elements) {
    const file = el.getAttribute('include-html');
    try {
      const response = await fetch(file);
      if (response.ok) {
        el.innerHTML = await response.text();
      } else {
        el.innerHTML = `<p style="color:red">Fehler beim Laden von ${file}</p>`;
      }
    } catch (err) {
      el.innerHTML = `<p style="color:red">Verbindungsfehler bei ${file}</p>`;
    }
  }
}

document.addEventListener("DOMContentLoaded", loadIncludes);

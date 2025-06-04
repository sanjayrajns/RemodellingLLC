function loadComponent(selector, filePath, callback) {
    fetch(filePath)
      .then(response => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.text();
      })
      .then(html => {
        const container = document.querySelector(selector);
        if (container) {
          container.innerHTML = html;
          if (typeof callback === 'function') callback();
        } else {
          console.warn(`Selector "${selector}" not found in DOM.`);
        }
      })
      .catch(error => {
        console.error(`Could not load component from ${filePath}:`, error);
      });
  }
  
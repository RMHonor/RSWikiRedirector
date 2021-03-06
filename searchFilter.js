(function() {
  const storage = window.storage || chrome.storage;

  storage.local.get(['hideWikia'], (result) => {
    if (result && result.hideWikia) {
      const wikiaLinks = document.querySelectorAll('[href*="runescape.fandom"], [href*="runescape.wikia"]');

      // recursively go up through tree until getting relevant div to remove
      function getParent(element, maxDepth = 10) {
        if (element.parentElement) {
          if (element.parentElement.className === 'g') {
            element.remove();
          } else {
            getParent(element.parentElement, maxDepth - 1);
          }
        }
      }

      wikiaLinks.forEach((e) => getParent(e));
    }
  });
})();

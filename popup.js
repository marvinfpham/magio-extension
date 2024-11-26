function resizePopup(width, height) {
  chrome.windows.getCurrent(window => {
    chrome.windows.update(window.id, { width, height });
  });
}

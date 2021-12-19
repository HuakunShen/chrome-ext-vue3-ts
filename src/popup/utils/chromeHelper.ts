export const sendTestMsg = (callback?: (bool) => void) => {
  chrome?.tabs?.query({ currentWindow: true, active: true }, (tabs) => {
    if (tabs.length && tabs[0].id) {
      chrome.tabs.sendMessage(tabs[0].id, 'test', (result: boolean) => {
        if (callback) callback(result);
      });
    }
  });
};

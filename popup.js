document.getElementById('start-extraction').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0].id;
        chrome.runtime.sendMessage({
            action: 'startExtraction',
            data: {
                tabId: activeTab
            }
        });
    });
});

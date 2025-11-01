browser.commands.getAll().then(console.log);

browser.commands.onCommand.addListener(async (command) => {
    const [tab] = await browser.tabs.query({active: true, currentWindow: true});
    switch (command) {
    case "next-line":
	if (tab.id) {
	    try {
		await browser.scripting.executeScript({
		    target: {tabId: tab.id, allFrames: false},
		    func: () => window.scrollBy({top: 40, left: 0, behavior: "instant"})
		});
	    } catch (e) {
		console.error("injection failed:", e);
	    }
	}
	break;
    case "previous-line":
	if (tab.id) {
	    try {
		await browser.scripting.executeScript({
		    target: {tabId: tab.id, allFrames: false},
		    func: () => window.scrollBy({top: -40, left: 0, behavior: "instant"})
		});
	    } catch (e) {
		console.error("injection failed:", e);
	    }
	}
	break;
    }
});

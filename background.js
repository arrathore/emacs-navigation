browser.commands.onCommand.addListener(async (command) => {
    const [tab] = await browser.tabs.query({active: true, currentWindow: true});
    switch (command) {
    case "next-line": // C-n
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
	
    case "previous-line": // C-p
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
	
    case "scroll-up-command": // C-v
	if (tab.id) {
	    try {
		await browser.scripting.executeScript({
		    target: {tabId: tab.id, allFrames: false},
		    func: () => window.scrollBy({top: window.innerHeight - 40, left: 0, behavior: "instant"})
		});
	    } catch (e) {
		console.error("injection failed:", e);
	    }
	}
	break;

    case "scroll-down-command": // M-v
	if (tab.id) {
	    try {
		await browser.scripting.executeScript({
		    target: {tabId: tab.id, allFrames: false},
		    func: () => window.scrollBy({top: -window.innerHeight + 40, left: 0, behavior: "instant"})
		});
	    } catch (e) {
		console.error("injection failed:", e);
	    }
	}
	break;
	
    case "forward-char": // C-f
	if (tab.id) {
	    console.log("forward-char");
	    try {
		await browser.scripting.executeScript({
		    target: {tabId: tab.id, allFrames: false},
		    func: () => window.scrollBy({top: 0, left: 40, behavior: "instant"})
		});
	    } catch (e) {
		console.error("injection failed:", e);
	    }
	}
	break;

    case "backward-char": // C-b
	if (tab.id) {
	    try {
		await browser.scripting.executeScript({
		    target: {tabId: tab.id, allFrames: false},
		    func: () => window.scrollBy({top: 0, left: -40, behavior: "instant"})
		});
	    } catch (e) {
		console.error("injection failed:", e);
	    }
	}
	break;
	
    }
});

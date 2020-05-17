// Update the relevant fields with the new data.
const setDOMInfo = info => {
    console.log('1234');
    document.getElementById('total').textContent = info.total;
    document.getElementById('inputs').textContent = info.inputs;
    document.getElementById('buttons').textContent = info.buttons;
};

// Once the DOM is ready...
window.addEventListener('DOMContentLoaded', () => {
    // ...query for the active tab...
    /*chrome.tabs.query({
        active: true,
        currentWindow: true
    }, tabs => {
        // ...and send a request for the DOM info...
        chrome.tabs.sendMessage(
            tabs[0].id,
            {from: 'popup', subject: 'DOMInfo'},
            // ...also specifying a callback to be called
            //    from the receiving end (content script).
            setDOMInfo);
    });*/
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            switch (request.action) {
                case "add":
                    addToList(request.data);
                    break;
                default:
                    break;
            }
            console.log(request);
            console.log(sender);
            console.log(sendResponse);
            return true;
        });

    function addToList(data) {
        console.log(data);
        const list = document.getElementById("added-movie");
        const item_template = document.getElementById("list-element-template");
        const item_list = document.createElement(item_template.getAttribute("data-tag"));
        item_list.classList.add(item_template.getAttribute("data-class"));
        item_list.innerText = data.title;
        list.append(item_list);
    }
});
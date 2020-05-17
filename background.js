chrome.runtime.onInstalled.addListener(function(details) {
    var rule_show = {
        conditions: [
            new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { /*hostEquals: 'www.kinopoisk.ru', */schemes: ['https'] },
                css: [".moviename-title-wrapper"]
            })
        ],
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
    };
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([rule_show]);
    });
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            switch (request.action) {
                case "add":
                    //addToList(request.data);
                    break;
                default:
                    break;
            }
            //console.log(request);
            //console.log(sender);
            //console.log(sendResponse);
            return true;
        });
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
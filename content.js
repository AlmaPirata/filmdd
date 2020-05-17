console.log('321');
console.log(chrome.runtime);
const title = document.getElementsByClassName("moviename-title-wrapper");
const button = document.createElement('button');
const { href: link } = location;
if(title && title.length){
    button.innerText = 'Добавить в FilmDD';
    button.addEventListener('click', function () {
        //передаём данные в background.js
        console.log(link);
        chrome.runtime.sendMessage({
                action: "add",
                data: {
                    title: title[0].textContent,
                    link,
                }
            },
            function(response) {
            console.log(response);
        });
    });
    title[0].parentNode.appendChild(button);
}
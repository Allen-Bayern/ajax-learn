const addStyle = document.getElementById('addStyle');
const addNewJs = document.getElementById('addNewJs');

addStyle.onclick = () =>{
    const ajax = new XMLHttpRequest();

    ajax.open('GET', '/style.css');

    ajax.onload = () =>{
        const style = document.createElement('style');

        style.innerHTML = ajax.response;

        document.head.appendChild(style);
    };

    ajax.onerror = () => {
        console.log('failed');
    }

    ajax.send();
};

addNewJs.onclick = () =>{
    const request = new XMLHttpRequest();

    request.open('GET', '/two.js');

    request.onload = () =>{
        const newJs = document.createElement('script');

        newJs.innerHTML = request.response;

        document.body.appendChild(newJs);
    };

    request.onerror = () => {
        console.log('failed');
    }

    request.send();
};
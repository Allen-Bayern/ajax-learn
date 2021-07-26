addStyle = document.getElementById('addStyle');

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
}
;

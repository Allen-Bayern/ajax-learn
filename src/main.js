// 不要下面的写法
// const addStyle = document.getElementById('addStyle');
// const addNewJs = document.getElementById('addNewJs');

const $addhtml = $('#addHTML');

// from mdn
const done = XMLHttpRequest.DONE;

addStyle.onclick = () =>{
    const ajax = new XMLHttpRequest();

    ajax.onreadystatechange = () => {
        if(ajax.readyState === done && ajax.status === 200){
            const style = document.createElement('style');
            style.innerHTML = ajax.response;
            document.head.appendChild(style);
        }
    };

    ajax.open('GET', '/style.css');

    // ajax.onload = () =>{
    //     const style = document.createElement('style');

    //     style.innerHTML = ajax.response;

    //     document.head.appendChild(style);
    // };

    // ajax.onerror = () => {
    //     console.log('failed');
    // }

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

$addhtml.on('click', () => {
    const request = new XMLHttpRequest();

    request.open('GET', '/three.html');

    request.onload = () =>{
        const newhtml = document.createElement('div');

        newhtml.innerHTML = request.response;

        document.body.appendChild(newhtml);
    };

    request.onerror = () => {
        console.log('failed');
    }

    request.send();
});

addJSON.onclick = () =>{
    const request = new XMLHttpRequest();

    request.open('GET', '/five.json');

    request.onreadystatechange = () =>{
        if(request.readyState === done && request.status === 200){
            const obj = JSON.parse(request.response);
            let links = document.createElement('div');
            links.id = 'frontsites';
            // console.log(obj);
            obj.forEach(item => {
                let a = '<a></a>';
                $('frontsites').append(a);
                console.log(links);
                let $a = $('a');
                console.log($a);
                $a.prop('href', item.url);
                $a.text(item.site);
            });

            document.body.appendChild(links);
        }
    };

    request.onerror = () => {
        console.log('failed');
    }

    request.send();
}
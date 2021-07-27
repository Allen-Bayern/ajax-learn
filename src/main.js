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

// add xml
addXML.onclick = () => {
    const request = new XMLHttpRequest();

    request.open('GET', '/four.xml');

    request.onreadystatechange = () => {
        if(request.readyState === done && request.status === 200){
            const dom = request.response;
            let parser = new DOMParser();
            let xmldoc = parser.parseFromString(dom, 'text/xml');
            console.log(xmldoc);
            const text = xmldoc.getElementsByTagName("warning")[0].textContent;

            console.log(text.trim());
        }
    };


    request.send();
};


// add json
addJSON.onclick = () =>{
    const request = new XMLHttpRequest();

    request.open('GET', '/five.json');

    request.onreadystatechange = () =>{
        if(request.readyState === done && request.status === 200){
            const obj = JSON.parse(request.response);
            let links = document.createElement('ul');
            links.id = 'frontsites';
            // console.log(obj);
            obj.forEach(item => {
                // console.log(item);
                // let a = document.createElement('a');
                // console.log(a);
                // a.href = item.url;
                // a.innerText = item.site;
                // links.appendChild(a);
                let li = document.createElement('li');
                li.innerHTML = `<a href=${item.url}>${item.site}</a>`;
                console.log(li);
                links.appendChild(li);
            });

            document.body.appendChild(links);
        }
    };

    request.onerror = () => {
        console.log('failed');
    }

    request.send();
}
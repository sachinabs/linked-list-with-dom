const sendRequest = () => {

    let httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'http://localhost:3000/show-post');
    httpRequest.send();
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var res = JSON.parse(httpRequest.responseText);
                const body = document.querySelector('body');
                const h1 = document.createElement('h1');
                console.log(res);
                h1.innerHTML = res.data;
                body.appendChild(h1);

               
                if(res.head ===null)
                {
                    const a3 = document.createElement('a');
                    a3.setAttribute('href', `http://localhost:3000/next-post?tail=${res.tail}`);
                    a3.innerHTML = 'Next Post';
                    body.appendChild(a3);
                }

                if(res.tail ===null)
                {
                    const a4 = document.createElement('a');
                    a4.setAttribute('href', `http://localhost:3000/previous-post?head=${res.head}`);
                    a4.innerHTML = 'Previous Post';
                    body.appendChild(a4);
                }

                if(res.head !==null && res.tail !==null)
                {
                    const a2 = document.createElement('a');
                    a2.setAttribute('href', `http://localhost:3000/previous-post?head=${res.head}`);
                    a2.innerHTML = 'Previous Post';
                    body.appendChild(a2);
                    
                    const a1 = document.createElement('a');
                    a1.setAttribute('href', `http://localhost:3000/next-post?tail=${res.tail}`);
                    a1.innerHTML = '|| Next Post';
                    body.appendChild(a1);

                   
                }



            }
        }
    }
    // create a h1 element in body


}

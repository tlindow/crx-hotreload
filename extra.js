// console.log(this.document.getElementById('injected'));
// console.log('browser window ', document.body.querySelectorAll('script').length)
// this.document.getElementById('injected').setAttribute('data-hello', 'world');

window.postMessage({ type: "FROM_PAGE", text: "Hello from the webpage!" }, "*");
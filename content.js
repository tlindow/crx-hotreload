function inject() {
  // const config = { attributes: true, childList: true, subtree: true };
  // const observer = new MutationObserver(() => {
  //   console.log('something changed');
  //   console.log('content window again', document.body.querySelectorAll('script').length);
  //   console.log($script.dataset.hello)
  // });
  console.log('content window ', document.body.querySelectorAll('script').length)
  let $script = document.createElement('script');
  $script.setAttribute('src', chrome.runtime.getURL('extra.js'));
  $script.setAttribute('id', 'injected');
  // observer.observe($script, config);
  document.body.append($script);
}

inject();

// var port = chrome.runtime.connect();

window.addEventListener("message", function(event) {
  // We only accept messages from ourselves
  if (event.source != window)
  return;
  
  if (event.data.type && (event.data.type == "FROM_PAGE")) {
    console.log("Content script received: " + event.data.text);
  }
}, false);


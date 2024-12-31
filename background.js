const defaultUserAgent = navigator.userAgent;

function USER_AGENT(e) {
  const newHeaders = e.requestHeaders.map(header => {
    if (header.name.toLowerCase() === "user-agent") {
      header.value = localStorage.getItem('userAgent') || defaultUserAgent;
    }
    return header;
  });
  return { requestHeaders: newHeaders };
}

const browserAPI = typeof browser !== 'undefined' ? browser : chrome;

browserAPI.webRequest.onBeforeSendHeaders.addListener(
  USER_AGENT,
  { urls: ["<all_urls>"] },
  ["blocking", "requestHeaders"]
);
// MARSANARYAS - www.marsanaryas.com - © MARSANARYAS

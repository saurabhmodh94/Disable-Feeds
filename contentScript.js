
'use strict';

var flag = false;
var domLoading = setInterval(function () {
  chrome.storage.sync.get('nodeIDs', function (data) {
    if (data.nodeIDs && data.nodeIDs != "") {
      data.nodeIDs.map((nodeID) => {
        var nodeElem = document.querySelector('div[id^="' + nodeID + '"]');
        if (nodeElem) {
          nodeElem.remove();
          flag = true;
        }
      })
    } else {
      flag = true;
    }
  });
  if (flag || document.readyState === 'complete') clearInterval(domLoading);
  console.info("STATUS:", document.readyState, flag);
}, 1000);
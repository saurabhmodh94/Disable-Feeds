
'use strict';



chrome.storage.sync.get('nodeIDs', function (data) {
  document.getElementById("disable_ids").value = data.nodeIDs;
});

document.getElementById("save_btn").addEventListener("click", function () {
  var nodeArray = document.getElementById("disable_ids").value.split(",").map(function (nodeID) {
    return nodeID.trim();
  });
  chrome.storage.sync.set({ nodeIDs: nodeArray }, function () { })
  alert("Entry Saved:\n" + nodeArray);
});
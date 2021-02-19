// Remove #, split at & and split again at =
export function createListFromHash(hash) {
  const list = hash.substring(1).split("&").map(value => {
    return value.split("=")
  });
  return list;
}

// Create hash from hash list (opposite of createListFromHash)
export function createHashFromList(list) {
  if (list.length > 0) {
    let hash = "#";
    for (const [index, item] of list.entries()) {
      hash += item.join("=");
      if (list[index + 1]) {
        hash += "&";
      }
    }
    return hash;
  }
  return null;
}

// Remove hash values from hash list according to removeList
export function removeHashValues(list, removeList) {
  const filteredList = list.filter(value => {
    if (removeList.includes(value[0])) {
      return false;
    } return true;
  })
  return filteredList;
}

// Gets value from hash
export function getHashValue(value) {
  const hashList = createListFromHash(window.location.hash);
  for (const item of hashList) {
    if (item[0] === value) {
      return item[1];
    }
  }
  return null;
}

// Get window location without hash
export function getLocationWithoutHash() {
  // https://stackoverflow.com/questions/5818269/javascript-window-location-href-without-hash/5818284
  return location.href.replace(location.hash,"");
}

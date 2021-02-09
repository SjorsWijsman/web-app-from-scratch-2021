// Remove #, split at & and split again at =
export function createListFromHash(hash) {
  const list = hash.substring(1).split("&").map(value => {
    return value.split("=")
  });
  return list;
}

// Create hash from hash list (opposite of createListFromHash)
export function createHashFromList(list) {
  let hash = "#";
  for (const [index, item] of list.entries()) {
    hash += item.join("=");
    if (list[index + 1]) {
      hash += "&";
    }
  }
  return hash;
}

export function removeHashValues(list, removeList) {
  const filteredList = list.filter(value => {
    if (removeList.includes(value[0])) {
      return false;
    } return true;
  })
  return filteredList;
}

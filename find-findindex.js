function findUserByUsername(arr, username) {
  return arr.find(function(i){
    return i.username === username;
  })
}

function removeUser(arr, username) {
  let rmUser =  arr.findIndex(function(i){
    return i.username === username;
  })
  if(rmUser === -1){
    return
  }
  return arr.splice(rmUser, 1)[0];
}
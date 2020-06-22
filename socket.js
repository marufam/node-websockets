var users = [];
const addUserWatching=(id, video)=>{
  console.log("addUserWatching", users, id, video)
  return users.push({
    id,
    video,
  });
}

const getWatchingViewer=(video)=>{
  console.log("getWatchingViewer", users, video)
  uniqueArray = a => [...new Set(a.map(o => JSON.stringify(o)))].map(s => JSON.parse(s));
  var unique = uniqueArray(users);
  users=unique;
  return unique.filter((user) => user.video === video).length;
}

const removeUserWatching=(id)=>{
  console.log("removeUserWatching", id)

  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users.splice(index, 1)[0];
  }
};

module.exports = {
  addUserWatching,
  getWatchingViewer,
  removeUserWatching
};
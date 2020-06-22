let users = [];
const addUserWatching=(id, video)=>{
  return users.push({
    id,
    video,
  });
}

const getWatchingViewer=(video)=>{
  return users.filter((user) => user.video === video).length;
}

const removeUserWatching=(id)=>{
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
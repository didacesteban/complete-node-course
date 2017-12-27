var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Didac'
  };

  setTimeout(() => {{
    callback(user);
  }}, 3000);
};

getUser(4, (userObj) => {
  console.log(userObj);
});


//https://maps.googleapis.com/maps/api/geocode/json?address=91 rambla sant nebridi terrassa

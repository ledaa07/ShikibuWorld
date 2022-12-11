var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://nftarrowlistsystem-default-rtdb.asia-southeast1.firebasedatabase.app/892238873533497344/allowList/${wallet}.json',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

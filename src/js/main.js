import $ from 'jquery';

import token from './githubtoken';
// console.log(token);

$.ajaxSetup({
  headers: {
    Authorization: "token " + token
  }
});

var url = 'https://api.github.com/users/boyzielee';

$.getJSON(url, function (res){
  console.log(res);

});

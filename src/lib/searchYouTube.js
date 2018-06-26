var searchYouTube = (options, callback) => {
  let url = 'https://www.googleapis.com/youtube/v3/search';
  let data = {
        type: 'video',
        key: options.key,
        q: options.query,
        maxResults: options.max,
        part: 'snippet',
        videoEmbeddable: true
      };
  url =  new URL(url);
  url.search = new URLSearchParams(data);
  
  let myHeaders = new Headers({
    'Content-Type': 'json',
  })
  fetch(url,{
    method: 'GET',
    //data: JSON.stringify(data),
    headers: myHeaders,
    part: 'snippet',
  }).then(function(response){
    return response.json();
  }).then(function(data){
    callback(data.items)
  })
  // $.ajax({
  //   type: 'GET',
  //   url: 'https://www.googleapis.com/youtube/v3/search',
  //   cache: false,
  //   dataType: 'json',
  //   timeout: 2000,
  //   data: {
  //     type: 'video',
  //     key: options.key,
  //     q: options.query,
  //     maxResults: options.max,
  //     part: 'snippet',
  //     videoEmbeddable: true
  //   },
  //   success: function(data){
  //     console.log('success')
  //   },
  //   error: function(error){
  //     console.log('error')
  //   }
  // }).done(function(data){
  //   callback(data.items)
  // })
};

window.searchYouTube = searchYouTube;

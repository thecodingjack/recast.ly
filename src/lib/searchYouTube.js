var searchYouTube = (options, callback) => {
  console.log(options)
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    cache: false,
    dataType: 'json',
    timeout: 2000,
    data: {
      type: 'video',
      key: options.key,
      q: options.query,
      maxResults: options.max,
      part: 'snippet',
      videoEmbeddable: true
    },
    success: function(data){
      console.log('success')
    },
    error: function(error){
      console.log('error')
    }
  }).done(function(data){
    callback(data.items)
  })
};

window.searchYouTube = searchYouTube;

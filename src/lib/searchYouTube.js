var searchYouTube = ({key, query, max = 5}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
  .done((items) => {
    //console.log(items.items);
    if (callback) {
      callback(items.items);
    }
  })
  .fail((responseJSON) => {
    responseJSON.error.errors.forEach((err) =>
      console.error(err)
    );
  });
};

window.searchYouTube = searchYouTube;
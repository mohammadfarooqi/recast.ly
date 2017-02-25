class App extends React.Component {
  constructor (props) {
    super(props);

    props.searchYouTube({
      key: YOUTUBE_API_KEY,
      query: 'test',
      max: 5
    }, this.onInit.bind(this));

    this.state = {
      videos: [],
      currentVideo: exampleVideoData[0] || ''
    };
  }

  onInit (videos) {
    this.setState({
      videos: videos,
      currentVideo: videos[0]
    });
  }

  componentDidMount () {
    searchYouTube({
      key: YOUTUBE_API_KEY,
      query: 'test',
      max: 5
    }, this.onInit.bind(this));
  }

  setCurrentVideo (v) {
    this.setState({
      currentVideo: v
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} setCurrentVideo={this.setCurrentVideo.bind(this)}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

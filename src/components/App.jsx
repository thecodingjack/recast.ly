class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {videos: [],
                  currentlyPlaying: {
                    etag: '',
                    id: {videoId: ''},
                    snippet: {
                      title: '',
                      description: '',
                      thumbnails: {default: {url: '',}}
                    }
                  }
                };
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.searchCallBack = this.searchCallBack.bind(this);
  }

  handleClick(video){
    this.setState({
      currentlyPlaying: video
    })
  }

  handleSearch(input){
    this.props.searchYouTube({
      key: window.YOUTUBE_API_KEY,
      query: input,
      max: 5,
    },this.searchCallBack)
  }

  searchCallBack(dataItems){
    this.setState({videos: dataItems,
                  currentlyPlaying: dataItems[0]
                })
  }

  componentDidMount(){
    this.handleSearch('')
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearch={this.handleSearch}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentlyPlaying}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} handleClick={this.handleClick}/>
          </div>
        </div>
      </div>
    )
  }
}

window.App = App;
ReactDOM.render(<App searchYouTube={window.searchYouTube}/>, document.getElementById('app'));

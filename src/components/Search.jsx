var Search = ({handleSearch}) => (
  <form className="search-bar form-inline" onSubmit={(event)=>{
    let inputElement = document.getElementById('searchInput')
    event.preventDefault();
    handleSearch(inputElement.value)
    inputElement.value = ""}
    }>
    <input id='searchInput' className="form-control" type="text" onChange={(event)=>handleSearch(event.target.value)}/>
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </form> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;

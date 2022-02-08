import React from "react";

function Search({search, setSearch}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value={search} 
        onChange={(e)=>setSearch(e.target.value)}
        className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;

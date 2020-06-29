import React from "react";
import { connect } from "react-redux";
import { PageLayout } from "../../components/page-layout/page-layout";
import { SearchBar } from "../../components/search-bar/search-bar";
import { Tile } from "../../components/tile/tile";
import { fetchShows } from "../../actions/actions";

import "./search-page.scss";

class SearchPage extends React.Component {
  render() {
    const { shows, onSearchSubmit } = this.props;
    return (
      <PageLayout className="search">
        <h1 className="search__title">Search your favourite tv shows!</h1>
        <div className="search__field">
          <SearchBar
            placeholder={"Search TV Shows..."}
            onSearch={onSearchSubmit}
          ></SearchBar>
        </div>
        <div className="search__results">{this.renderShows(shows)}</div>
      </PageLayout>
    );
  }

  renderShows(shows) {
    return shows.map((show) => {
      const { image, name, genres } = show;
      const props = {
        url: image ? image.medium : "https://www.fillmurray.com/210/295",
        title: name,
        subtitle: genres.join(", "),
      };
      return <Tile key={show.id} {...props}></Tile>;
    });
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps", state);
  return {
    shows: state.search.shows,
    isFetching: state.search.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSearchSubmit: (query) => {
      dispatch(fetchShows(query));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);

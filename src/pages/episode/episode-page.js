import React from "react";
import { connect } from "react-redux";

import { fetchEpisodes, fetchShow } from "../../actions/actions";
import { PageLayout } from "../../components/page-layout/page-layout";

import "./episode-page.scss";

class EpisodePage extends React.Component {
  componentDidMount() {
    console.log("EpisodePage", this.props);
    const { match, getShowInfo, getShowEpisodes } = this.props;
    getShowInfo(match.params.id);
    getShowEpisodes(match.params.id);
  }

  render() {
    const { episodes, show, isFetchingShow, isFetchingEpisodes } = this.props;

    if (!show || isFetchingShow || isFetchingEpisodes) {
      return <p>Loading</p>;
    }

    const hero = {
      heading: show.name,
      subtext: show.summary,
      imageUrl: show.image
        ? show.image.original
        : "https://www.fillmurray.com/400/500",
    };
    return (
      <PageLayout className="episodes" hero={hero}>
        {this.renderEpisodes(episodes)}
      </PageLayout>
    );
  }

  renderEpisodes(episodes) {
    if (!episodes) {
      return null;
    }

    // group episodes by season as I have no idea in which order they come (although they seem to come sorted)
    // if I had the guarantee this is always sorted all this logic could be removed.
    const seasons = episodes.reduce((acc, episode) => {
      acc[episode.season] = [].concat(acc[episode.season]).concat([episode]);
      return acc;
    }, []);

    console.log(seasons);

    return episodes.map((episode) => {
      const { image, name, season, id } = episode;
      const props = {
        url: image ? image.medium : "https://www.fillmurray.com/210/295",
        title: name,
      };
      return <div key={id}>{name}</div>;
    });
  }
}

function mapStateToProps(state) {
  return {
    episodes: state.episodes.list,
    isFetchingEpisodes: state.episodes.isFetching,
    show: state.show.info,
    isFetchingShow: state.show.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getShowEpisodes: (showId) => {
      dispatch(fetchEpisodes(showId));
    },
    getShowInfo: (showId) => {
      dispatch(fetchShow(showId));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EpisodePage);

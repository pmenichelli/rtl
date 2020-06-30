import React from "react";
import { connect } from "react-redux";

import { fetchEpisodes, fetchShow } from "../../actions/actions";
import { PageLayout } from "../../components/page-layout/page-layout";
import { Item } from "../../components/item/item";

import "./episode-page.scss";

class EpisodePage extends React.Component {
  componentDidMount() {
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
      headline: show.name,
      subtext: show.summary,
      imageUrl: show.image
        ? show.image.original
        : "https://www.fillmurray.com/400/500",
    };

    return (
      <PageLayout className="episodes" hero={hero}>
        <div className="episodes__container">
          {this.renderEpisodesList(episodes)}
        </div>
      </PageLayout>
    );
  }

  renderEpisodesList(episodes) {
    if (!episodes) {
      return null;
    }

    // group episodes by season and I sort them as I have no idea in which order they
    // come (although they seem to come sorted in the correct order).
    // If I had the guarantee this is always sorted all this logic could be removed.
    const seasons = this.sortEpisodesBySeason(episodes);

    return seasons.map((season) => this.renderSeason(season));
  }

  /**
   * Renders a whole season with it heading a list
   */
  renderSeason(season) {
    const seasonNumber = season[0].season;

    return (
      <div key={Math.random()} className="episodes__season">
        <h1 className="episodes__season-title">{`Season ${seasonNumber}`}</h1>
        <ul className="episodes__list">
          {season.map((episode) => this.renderEpisode(episode))}
        </ul>
      </div>
    );
  }

  /**
   * Renders a single episode
   */
  renderEpisode(episode) {
    const { image, name, number, id, summary } = episode;
    const props = {
      url: image ? image.medium : "https://www.fillmurray.com/210/295",
      title: `${number} - ${name}`,
      description: summary,
    };
    return (
      <li key={id}>
        <Item {...props}></Item>
      </li>
    );
  }

  /**
   * Returns an array that contains an array for each season with the episodes sorted by number.
   */
  sortEpisodesBySeason(episodes) {
    // group by season
    const seasons = episodes.reduce((acc, episode) => {
      acc[episode.season] = []
        .concat(acc[episode.season] || [])
        .concat([episode]);
      return acc;
    }, []);

    // sort episodes in a season
    seasons.forEach((season) => {
      season.sort((a, b) => a.number - b.number);
    });

    return seasons;
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

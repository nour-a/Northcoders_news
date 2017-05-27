import React from 'react';
import NavBar from './NavBar';
import * as actions from '../actions/actions';
import {connect} from 'react-redux';

const App = React.createClass({

  componentDidMount () {
    // console.log('App.componentDidMount')
    this.props.fetchArticles(this.props.params.topic);
  },
  render: function () {
    // console.log('App.render');
    return (
      <div>
        <NavBar/>
        <h1>Articles</h1>
        {this.props.children}
      </div>
    );
  }
});

function mapDispatchToProps (dispatch) {
  return {
    fetchArticles: (topic) => {
      dispatch(actions.fetchArticles(topic));
    }
  };
}
export default connect(null, mapDispatchToProps)(App);

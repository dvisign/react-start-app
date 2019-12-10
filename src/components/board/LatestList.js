import React, { Component } from 'react'
import * as board from 'service/board';

class LatestList extends Component {
  state = {
    newsLatest : []
  }
  componentDidMount() {
    this.getLatestList(window.location.host ,"latest", "news", "wr_datetime", 5);
  }
  getLatestList = async (server, status, bo_table, sort, leng) => {
    var listData = await Promise.all([
      board.latestList(server, status, bo_table, sort, leng)
    ])
    this.setState(prevState => ({
      ...prevState,
      newsLatest : listData[0]
    }));
  }
}

export default LatestList;
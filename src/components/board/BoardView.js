import React, { Component } from 'react'
import * as board from'service/board';

class BoardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wr_subject : "",
      wr_content : ""
    }
  }
  componentDidUpdate(prevProps, prevState){
    if (this.props !== prevProps) {
      this.getViewData(window.location.host ,"view", this.props.bo_table, this.props.wr_id);
    }
  }
  componentDidMount() {
    this.getViewData(window.location.host ,"view", this.props.bo_table, this.props.wr_id);
  }
  getViewData = async (server,status, bo_table, wr_id) => {
    var viewData = await Promise.all([
      board.getViewData(server, status, bo_table, wr_id)
    ])
    this.setState(prevState => ({
      wr_subject : viewData[0][0]["wr_subject"],
      wr_content : viewData[0][0]["wr_content"]
    }));
  }
  render() {
    return (
      <div id="boardView">
        <div id="boardProducts">
          <h2 className="sectionSubTitles">{this.state.wr_subject}</h2>
          <div id="productImg">
            <div dangerouslySetInnerHTML={{__html: this.state.wr_content}}></div>
          </div>
          <div id="productOptions">
            <div id="categoryTitle" className="clear">
              <div className="optionCategory">구분</div>
              <div className="optionText">세부사항</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BoardView;
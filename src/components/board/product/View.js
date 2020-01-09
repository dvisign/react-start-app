import React, { Component } from 'react'
import * as board from'service/board';

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wr_subject : "",
      wr_content : "",
      wr_option : "",
      wr_optionText:"",
      wr_youtube : ""
    }
  }
  componentDidUpdate(prevProps, prevState){
    if (this.props !== prevProps) {
      this.getViewData(window.location.host ,"view", this.props.match.params.board, this.props.match.params.id);
    }
  }
  componentDidMount() {
    this.getViewData(window.location.host ,"view", this.props.match.params.board, this.props.match.params.id);
  }
  getViewData = async (server,status, bo_table, wr_id) => {
    var viewData = await Promise.all([
      board.getViewData(server, status, bo_table, wr_id)
    ])
    this.setState(prevState => ({
      wr_subject : viewData[0][0]["wr_subject"],
      wr_content : viewData[0][0]["wr_content"],
      wr_option : viewData[0][0]["wr_option"],
      wr_optionText :  viewData[0][0]["wr_option_text"],
      wr_youtube : viewData[0][0]["wr_youtube"]
    }));
  }
  render() {
    const option = this.state.wr_option.split("|");
    const optionText = this.state.wr_optionText.split("|");
    return (
      <div id="boardProductView">
        <div id="boardProducts">
          <h2 className="sectionSubTitles">{this.state.wr_subject}</h2>
          <div id="productImg">
            <div dangerouslySetInnerHTML={{__html: this.state.wr_content}} />
          </div>
          <div id="productOptions">
            <div id="categoryTitle" className="clear">
              <div className="optionCategory">구분</div>
              <div className="optionText">세부사항</div>
            </div>
            <div id="categoryConts" className="clear">
              <div id="optionTitles">
              {option.map((options, i)=>(
                <div className="productOption" key={i}>{options}</div>
              ))}
              </div>
              <div id="optionText">
              {optionText.map((optionTexts, i)=>(
                <div className="productOption" key={i}>{optionTexts}</div>
              ))}
              </div>
            </div>
          </div>
          <div id="">
          {this.state.wr_youtube !== "" ?
            <div id="productYoutube">
              <iframe title={this.state.wr_subject} src={"https://www.youtube.com/embed/"+this.state.wr_youtube} />
            </div>
          :
            ""
          }
          </div>
        </div>
      </div>
    )
  }
}

export default View;
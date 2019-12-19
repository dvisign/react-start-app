import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import {MDBAnimation} from 'mdbreact';
import * as board from'service/board';

class List extends Component {
  state = {
    boardList:[]
  }
  componentDidUpdate(prevProps, prevState){
    if (this.props !== prevProps) {
      this.getListData(window.location.host ,"list", this.props.match.params.board, this.props.match.params.category, 1);
    }
  }
  componentDidMount() {
    this.getListData(window.location.host ,"list", this.props.match.params.board, this.props.match.params.category, 1);
  }
  getListData = async (server,status, bo_table, category, leng) => {
    var listData = await Promise.all([
      board.getList(server, status, bo_table, category, leng)
    ])
    this.setState(prevState => ({
      ...prevState,
      boardList : listData[0]
    }));
  }
  render() {
    return(
      <div>
        {
          this.state.boardList.length === 0 ? (
            <div className="boardLists" id="emptyList">
              게시글 없음
            </div>
          ) : (
            <div className="boardLists clear">
            {this.state.boardList.map((lists, i)=>(
              <div className="boardItems" key={i}>
                <MDBAnimation reveal type="fadeInUp" delay={i*0.1+"s"}>
                  <Link to={this.props.match.url+"/"+lists.wr_id}>
                    <div className="boardListThumbs">
                      <img src={lists.wr_img} alt={"프린티스 "+lists.wr_subject} title={"프린티스 "+lists.wr_subject} />
                    </div>
                    <div>
                      <p>{lists.wr_subject}</p>
                    </div>
                  </Link>
                </MDBAnimation>
              </div>
            ))}
            </div>
          )
        }
      </div>
    )
  }
}

export default List;
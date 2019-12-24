import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import * as board from'service/board';
import Pager from './Pager';
import './style.scss';

class List extends Component {
  state = {
    boardList:[],
    pager : []
  }
  componentDidUpdate(prevProps, prevState){
    if (this.props !== prevProps) {
      this.getListData(window.location.host ,"list", this.props.match.params.board, this.props.match.params.category, this.props.match.params.pager, "wr_id");
    }
  }
  componentDidMount() {
    this.getListData(window.location.host ,"list", this.props.match.params.board, this.props.match.params.category, this.props.match.params.pager, "wr_id");
  }
  getListData = async (server,status, bo_table, category, leng, sort) => {
    var listData = await Promise.all([
      board.getList(server, status, bo_table, category, leng, sort)
    ])
    this.setState(prevState => ({
      ...prevState,
      boardList : listData[0][1]["list"],
      pager : listData[0][0]["pager"]
    }));
  }
  render() {
    return(
      <div>
        {
          this.state.boardList.length === 0 ? (
            <div className="boardLists" id="emptyList">
              작성글 또는 제품이 없습니다.
            </div>
          ) : (
            <div>
              <div className="boardLists clear">
              {this.state.boardList.map((lists, i)=>(
                <div className="boardItems" key={i}>
                  <div>
                    <Link to={this.props.match.url+"/"+lists.wr_id}>
                      <div className="boardListThumbs">
                      {
                        lists.wr_img !== null ?
                        (
                          <img src={lists.wr_img} alt={"프린티스 "+lists.wr_subject} title={"프린티스 "+lists.wr_subject} />
                        )
                        :
                        (
                          <img src="http://printis.co.kr/gnu/img/no_img2.jpg" alt="이미지 없음" title="이미지 없음" />
                        )
                      } 
                      </div>
                      <div>
                        <p>
                          <span>{lists.wr_subject}</span>{lists.wr_todays === true ? (<span className="newLists"><img src="http://printis.co.kr/gnu/skin/board/basic/img/icon_new.gif" alt="새로운 글" /></span>) : "" }
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
              </div>
              <Pager 
                total_page={this.state.pager.total_page}
                prev_page={this.state.pager.prev_page}
                next_page={this.state.pager.next_page}
                first_page={this.state.pager.first_page}
                last_page={this.state.pager.last_page}
                block={this.state.pager.block}
                board={this.props.match.params.board}
                page={this.props.match.params.page}
                pager={this.props.match.params.pager}
              />
            </div>
          )
        }
      </div>
    )
  }
}
export default List;
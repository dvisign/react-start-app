import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import ScrollAnimation from 'react-animate-on-scroll';
import * as board from'service/board';

class List extends Component {
  state = {
    boardList:[]
  }
  componentDidUpdate(prevProps, prevState){
    if (this.props !== prevProps) {
      this.getListData(window.location.host ,"list", this.props.match.params.board, this.props.match.params.category, 0);
    }
  }
  componentDidMount() {
    this.getListData(window.location.host ,"list", this.props.match.params.board, this.props.match.params.category, 0);
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
              작성글 또는 제품이 없습니다.
            </div>
          ) : (
            <div className="boardLists clear">
            {this.state.boardList.map((lists, i)=>(
              <div className="boardItems" key={i}>
                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={i*100}>
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
                      <p>{lists.wr_subject}</p>
                    </div>
                  </Link>
                </ScrollAnimation>
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
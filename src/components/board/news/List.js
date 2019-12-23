import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import ScrollAnimation from 'react-animate-on-scroll';
import * as board from'service/board';

class List extends Component {
  state = {
    boardList:[],
    pager : []
  }
  componentDidUpdate(prevProps, prevState){
    if (this.props !== prevProps) {
      this.getListData(window.location.host ,"list", this.props.match.params.board, this.props.match.params.category, this.props.match.params.pager);
    }
  }
  componentDidMount() {
    this.getListData(window.location.host ,"list", this.props.match.params.board, this.props.match.params.category, this.props.match.params.pager);
  }
  getListData = async (server,status, bo_table, category, leng) => {
    var listData = await Promise.all([
      board.getList(server, status, bo_table, category, leng)
    ])
    this.setState(prevState => ({
      ...prevState,
      boardList : listData[0][1]["list"],
      pager : listData[0][0]["pager"]
    }));
  }
  render() {
    const page = [];
    for (let i = Number(this.state.pager.first_page); i <= this.state.pager.last_page; i++) {
      page.push(i);
    }
    console.log(page)
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
        <div className="pager">
        {page.map((pager,i)=>(
          <Link key={i} to={"/"+this.props.match.params.page+"/"+this.props.match.params.board+"/"+pager}>
            {pager}
          </Link>
        ))}
        </div>
      </div>
    )
  }
}
export default List;
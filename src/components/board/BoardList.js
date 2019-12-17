import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import {MDBAnimation} from 'mdbreact';

class BoardList extends Component {
  state = {
    page : "",
    category : "",
    list : []
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps !== prevState) {
      return {
        page : nextProps.page,
        category : nextProps.list.category,
        list : nextProps.list.boardList
      }
    }
  }
  render() {
    return (
      <div>
        {
          this.state.list.length === 0 ? (
            <div className="boardLists" id="emptyList">
              게시글 없음
            </div>
          ) : (
            <div className="boardLists clear">
            {this.state.list.map((lists, i)=>(
              <div className="boardItems" key={i}>
                <MDBAnimation reveal type="fadeInUp" delay={i*0.1+"s"}>
                  <Link to={"/printis/"+this.state.page+"/"+this.state.category+"/?wr_id="+lists.wr_id}>
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

export default BoardList;
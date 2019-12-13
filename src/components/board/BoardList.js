import React, { Component } from 'react'
import { Link } from 'react-router-dom' 

class BoardList extends Component {
  state = {
    category : "",
    list : []
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps !== prevState) {
      return {
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
            <div>
              게시글 없음
            </div>
          ) : (
            this.state.list.map((lists, i)=>(
              <div key={i}>
                <Link to={"/printis/Print/"+this.state.category+"/"+lists.wr_id}>{lists.wr_subject}</Link>
              </div>
            ))
          )
        }
      </div>
    )
  }
}

export default BoardList;
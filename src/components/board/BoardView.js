import React, { Component } from 'react'

class BoardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <div>
        {this.props.bo_table}게시판
        {this.props.category}카테고리 게시글 보기
      </div>
    )
  }
}

export default BoardList;
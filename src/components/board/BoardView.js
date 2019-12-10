import React, { Component } from 'react'

class BoardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    console.log(this.props.match)
    return (
      <div>
        <div>
          {this.props.bo_table}게시판
        </div>
        <div>
          {this.props.category}카테고리
        </div>
      </div>
    )
  }
}

export default BoardList;
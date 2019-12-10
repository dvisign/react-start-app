import React, { Component } from 'react'

class BoardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    console.log(this.props)
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

export default BoardView;
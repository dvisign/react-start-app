import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

class BoardList extends Component {
  state = {
    category : "",
    list : [],
    test : ""
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.category !== nextProps.category) {
      // console.log("update this props=> "+this.props.category)
      // console.log("update next => " + nextProps.category)
      this.getDataList(nextProps.category);
      console.log("true")
      return true
    } else {
      if (this.state.test === "") {
        this.getDataList(nextProps.category);
        console.log("true")
        return true
      } else {
        console.log("false")
        return false
      }
    }
  }
  componentDidMount() {
    console.log("did mount")
    this.getDataList(this.props.category);
  }
  getDataList = (dataCate) => {
    if (dataCate === "print") {
      this.setState({
        ...this.state,
        test : "print"
      })
    } else {
      this.setState({
        ...this.state,
        test : "order"
      })
    }
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <div>
          {this.props.bo_table}게시판
        </div>
        <div>
          {this.props.category}카테고리
        </div>
        {this.state.list.map((lists,i)=>(
          <div key={i}>
            <Link to={"/printice/Print/"+this.props.category+"/"+lists.wr_id}>{lists.wr_subject}</Link>
          </div>
        ))}
      </div>
    )
  }
}

export default BoardList;
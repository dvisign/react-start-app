import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

class Pager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total_page : "",
      prev_page : "",
      next_page : "",
      first_page : "",
      last_page : "",
      block : "",
      board : "",
      page : "",
      pager : ""
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps !== prevState) {
      return {
        total_page : nextProps.total_page,
        prev_page : nextProps.prev_page,
        next_page : nextProps.next_page,
        first_page : nextProps.first_page,
        last_page : nextProps.last_page,
        block : nextProps.block,
        board : nextProps.board,
        page : nextProps.page,
        pager : nextProps.pager
      }
    } else {
      return null;
    }
  }
  render() {
    const page = [];
    for (let i = Number(this.state.first_page); i <= this.state.last_page; i++) {
      page.push(i);
    }
    return (
      <div className="pager">
      {this.state.prev_page > 0 ? (
        <Link to={"/"+this.state.page+"/"+this.state.board+"/"+this.state.prev_page}><IoIosArrowBack /></Link>
      ) : (
        <button className="notPage" onClick={(e) => alert("첫번째 페이지입니다.")}><IoIosArrowBack /></button>
      )}
      <div className="pagerLists">
      {page.map((pager,i)=>(
        <div className="pagerItmes" key={i}>
        {pager === Number(this.state.pager) ? (
          <span className="pagerActive">{pager}</span>
        ) : (
          <Link to={"/"+this.state.page+"/"+this.state.board+"/"+pager}>{pager}</Link>
        )}
        </div>
      ))}
      </div>
      {this.state.next_page <= this.state.total_page ? (
        <Link to={"/"+this.state.page+"/"+this.state.board+"/"+this.state.next_page}><IoIosArrowForward /></Link>
      ) : (
        <button className="notPage" onClick={(e) => alert("마지막 페이지입니다.")}><IoIosArrowForward /></button>
      )}
      </div>
    )
  }
}

export default Pager;
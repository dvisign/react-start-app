import React, { Component } from 'react';
import {MDBAnimation} from 'mdbreact';

class PageHeader extends Component {
  state = {
    "page" : "",
    "pagebg" : "",
    "pageText" : ""
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps !== prevState) {
      return {
        "page":nextProps.page,
        "pagebg":nextProps.pagebg,
        "pageText":nextProps.pageText
      } 
    }
  }
  render() {
    var headerBg = {
      backgroundImage: 'url(' + this.state.pagebg + ')'
    }
    return(
      <div id={"ph_"+this.state.page} className="pageHeader" style={headerBg}>
        <MDBAnimation reveal type="fadeInUp">
          <h2 className="sectionSubTitles">{this.state.pageText}</h2>
        </MDBAnimation>
      </div>
    )
  }
}

export default PageHeader;
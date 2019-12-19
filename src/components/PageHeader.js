import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

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
  componentDidMount() {
    document.title = this.props.title;
  }
  render() {
    var headerBg = {
      backgroundImage: 'url(' + this.state.pagebg + ')'
    }
    return(
      <div id={"ph_"+this.state.page} className="pageHeader" style={headerBg}>
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
          <h2 className="sectionSubTitles">{this.state.pageText}</h2>
        </ScrollAnimation>
      </div>
    )
  }
}

export default PageHeader;
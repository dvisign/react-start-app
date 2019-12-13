import React, { Component } from 'react'
import PageHeader from 'components/PageHeader'
//img
import headerImg from 'img/about/pageheader.jpg'

class News extends Component {
  render() {
    return (
      <div>
        <PageHeader 
          page="news"
          pagebg={headerImg}
          pageText="뉴스"
        />
        뉴스
      </div>
    )
  }
}

export default News;
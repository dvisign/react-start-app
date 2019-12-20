import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import List from 'components/board/List';
import View from 'components/board/View';
import PageHeader from 'components/PageHeader';
import {MDBContainer} from 'mdbreact';
import * as event from'service/event';
// css, scss
import "css/news.scss";
//img
import headerImg from 'img/about/pageheader.jpg'

class News extends Component {
  componentDidMount() {
    event.pagenations("News", "4")
    event.pageIn("#newPage")
  }
  componentWillUnmount() {
    event.pageOut("#newPage")
  }
  render() {
    return (
      <main id="newPage">
        <PageHeader 
          page="news"
          pagebg={headerImg}
          pageText="뉴스"
          title="PRINTIS 뉴스"
        />
        <section>
          <div id="newsConts" className="boardListConts">
            <MDBContainer>
              <Switch>
                <Route 
                  exact
                  path={`/:page?/:board`}
                  component={List}
                />
                <Route 
                  path={`/:page?/:board?/:id`}
                  component={View}
                />
              </Switch>
            </MDBContainer>
          </div>
        </section>
      </main>
    )
  }
}

export default News;
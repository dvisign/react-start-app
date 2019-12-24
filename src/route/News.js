import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import List from 'components/board/news/List';
import View from 'components/board/news/View';
import PageHeader from 'components/PageHeader';
import {MDBContainer} from 'mdbreact';
import * as event from'service/event';
// css, scss
import "css/news.scss";

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
          pagebg="http://printis.cdn3.cafe24.com/about/pageheader.jpg"
          pageText="뉴스"
          title="PRINTIS 뉴스"
        />
        <section>
          <div id="newsConts" className="boardListConts">
            <MDBContainer>
              <Switch>
                <Route 
                  exact
                  path={`/:page?/:board/:pager`}
                  component={List}
                />
                <Route 
                  path={`/:page?/:board?/:pager?/:id`}
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
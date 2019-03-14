import React, { Component } from 'react';
import data from './data.json'
import NewsRelated from './NewsRelated.js';


class NewsDetail extends Component {
    render() {
        var countNews = 1;
        console.log(this.props);
        return (
            <div>
            <header className="masthead tintuc">
              <div className="container h-100">
                <div className="row h-100">
                  <div className="col-lg-12 my-auto">
                    <div className="header-content mx-auto">
                      <h1 className="mb-1 text-center">Tin tức</h1>
                      {/* <a href="/download" class="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </header>
            {/* Begin tintuc */}
            {
                data.map((value,index) => {
                    var newsId = parseInt(this.props.match.params.id)
                    if(value.id === newsId){
                        return(
                          <div key={index}>
                          <div className="jumbotron jumbotron-fluid">
                          <div className="container">
                            <img src={value.image} className="img-fluid" alt="true" />
                            <p className="lead">{value.title}</p>
                            <hr className="my-2" />
                            <p>{value.content}</p>
                          
                          </div>
                        </div>   
                        <div className="container">
                          <h4 className="text-center">Tin lien quan</h4>
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="card-deck">
                                  {
                                      data.map( (value,index) => {
                                          if(countNews <=4 && value.id !== parseInt(this.props.match.params.id)){
                                              countNews++;
                                              return(
                                                  <NewsRelated key={index} tinId={value.id} title={value.title} excerpt={value.excerpt} image={value.image}></NewsRelated>
                                              )
                                              
                                          }
                                          else {return true;}
                                      } )
                                  }
                              
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                      )
                    }
                  else {return true ;}
                })
            }
            
          </div>
          
        );
    }
}

export default NewsDetail;
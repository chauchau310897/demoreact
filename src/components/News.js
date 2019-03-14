import React, { Component } from 'react';
import NewsItem from './NewsItem.js'
import data from './data.json'

class News extends Component {
    render() {
        console.log(data);
        return (
            <div>
            <header className="masthead tintuc">
              <div className="container h-100">
                <div className="row h-100">
                  <div className="col-lg-12 my-auto">
                    <div className="header-content mx-auto">
                      <h1 className="mb-1 text-center">Tin tức</h1>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            {/* Begin tintuc */}
            <div className="container">
              <div className="row mt-4">
                {data.map((value,index) => {
                    return (
                        <NewsItem key={index} tinId={value.id} title={value.title} excerpt={value.excerpt} image={value.image}></NewsItem>
                    )
                }
                
                )
            }
              
                
              </div>
            </div>
            {/* End tintuc */}
          </div>
          
        );
    }
}

export default News;
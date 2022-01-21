import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import Dropdown from './Dropdown';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
    
    static defaultProps = {
        country : 'in',
        pageSize : 6,
        category : 'general',
        totalResults : 0
    }

    static defaultPropTypes = {
        country: PropTypes.string,
        pageSize : PropTypes.number,
        category : PropTypes.string,
        totalResults : PropTypes.number
    }
    constructor()
    {
        super();
        this.state = {
            articles : [],
            loading : false,
            page : 1,
            pageSize : 3,
            country : 'in'
        }
    }

    async componentDidMount(){
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pagesize=${this.state.pageSize}&page=1`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState ({articles : parsedData.articles, loading : false});
        this.props.setProgress(100);
    }


    handleNextClick = async () =>{
        if(Math.ceil(this.state.totalResults/6) === this.state.page)
        {
            console.log('No next page')
            return;
        }
        this.setState({
            page : this.state.page + 1
        })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fba42a59edf14ee8b4e0bf2362a5de28&pagesize=${this.state.pageSize}&page=` + this.state.page.toString();
        this.setState({loading : true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState ({articles : parsedData.articles, totalResults : parsedData.totalResults, loading : false});

    }

    handlePreviousClick = async () =>{
        this.setState({
            page : this.state.page - 1
        })
        console.log("Previous" + this.state.page.toString());
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fba42a59edf14ee8b4e0bf2362a5de28&pagesize=${this.state.pageSize}&page=` + this.state.page.toString();
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState ({articles : parsedData.articles});
    }

    fetchMoreData = async () => {
        this.setState({
            page : this.state.page + 1
        })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fba42a59edf14ee8b4e0bf2362a5de28&pagesize=${this.state.pageSize}&page=` + this.state.page.toString();
        this.setState({loading : true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState ({articles : this.state.articles.concat(parsedData.articles), totalResults : parsedData.totalResults, loading : false});
        this.props.setProgress(20);
      };
    render() {
        return (  
            <div className="container my-3">
                <h1 className="text-center">India News - Top Headline</h1>
                {this.state.loading && <Spinner/>}
                <div className='container d-flex flex-row-reverse bd-highlight'>
                    <Dropdown />
                </div>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                    >
                <div className="container">
                <div className="row my-2">
                    {this.state.articles.map((element) => {
                        return(
                            <div className="col-md-4 my-2" key={element.url}>
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsurl={element.url} author={element.author}  publishDate={element.publishedAt} source={element.source.name}/>   
                            </div>
                            )
                    })}  
                </div>
                </div>
                </InfiniteScroll> 
               {/*} <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page <=1} type="button" className="btn btn-sm btn-primary" onClick={this.handlePreviousClick}>&#x2190;&nbsp;Previous</button>
                    <button disabled={Math.ceil(this.state.totalResults/6) === this.state.page}type="button" className="btn btn-sm btn-primary" onClick={this.handleNextClick}>Next&nbsp;&#x2192;</button>
                </div> */}
            </div>
        )
    }
}

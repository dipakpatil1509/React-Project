import React from 'react'
import { Carousel } from 'react-bootstrap'
class Home extends React.Component {
    state = {
        NewsImgUrl: [],
        NewsLinks : ['https://newsapi.org/v2/top-headlines?country=us&apiKey=a37eb51fc6db489f859a65597f2a5fe4', 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=a37eb51fc6db489f859a65597f2a5fe4',
                        'https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=a37eb51fc6db489f859a65597f2a5fe4', 'https://newsapi.org/v2/top-headlines?q=trump&apiKey=a37eb51fc6db489f859a65597f2a5fe4'],
        NewsHeading : ['Top headlines in the US','Top headlines from BBC News',
                        'Top business headlines from Germany','Top headlines about Trump'],
        index: 0,
        totalItems: 4 
    }

    componentDidMount(){
        this.state.NewsLinks.forEach((link, index) => {
            fetch(link)
            .then(response => response.json())
            .then(data => {
                let ImgUrl = this.state.NewsImgUrl
                ImgUrl[index] = data.articles
                this.setState({
                    NewsImgUrl : ImgUrl
                })
            })  
        });
    }

    handleChange = () => {
        let index = this.state.index
        const max = this.state.totalItems - 1

        index += 1

        if (index > max) {
          index = 0
        }
        this.setState({
          index : index
        })
        document.documentElement.scrollTop = 0
    }
        
    render(){
        let { NewsImgUrl } = this.state
        let NewsImg = NewsImgUrl !== [] ? (
            NewsImgUrl.map((news, index) =>{
                let TempImages = news.map(newsImg =>{
                    return (
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-6 NewsImg" key={(Math.random())}>
                            <figure>
                                <img src={newsImg.urlToImage} alt={newsImg.title.slice(0, 50) + '...'}></img>
                            </figure>
                        </div>
                    )
                })
                return (
                    <Carousel.Item className="carouselDiv" key={index}>
                        <div className="Heading">
                            <h1 style={{display:'table'}}>{this.state.NewsHeading[index]}</h1>
                            <button className="btn btn-primary changeButton" onClick={this.handleChange}>Change</button>
                        </div>
                        <div className="ImagesGrid container" align="center">  
                            <div className="row">
                                {TempImages}
                            </div>
                        </div>
                    </Carousel.Item> 
                )
                
            })
        ) : (
            <h1>Loading Data...</h1>
        )
        
        return(
            <div className="container">
                <Carousel activeIndex={this.state.index} slide={false} interval={null} controls={false} indicators={false} touch={false}>                  
                    {NewsImg}
                </Carousel>
            </div>
        )
    }
}

export default Home


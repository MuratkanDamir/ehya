import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import styles from "./Feedbacks.module.css"
import quotesImage from "./FeedbacksImages/quotes.png"
import starImage from "./FeedbacksImages/star.png"
function Feedback() {
    const quotes = [
        {
        text: '"With Ehya, we’re able to easily track our performance in full detail. It’s become an essential tool for us to grow and engage with our audience."',
        author: "Автор 1",
        authorPosition: "Director",
        },
        {
        text: '"With Ehya, we’re able to easily track our performance in full detail. It’s become an essential tool for us to grow and engage with our audience."',
        author: "Автор 2",
        authorPosition: "Manager",
        },
        {
        text: '"With Ehya, we’re able to easily track our performance in full detail. It’s become an essential tool for us to grow and engage with our audience."',
        author: "Автор 3",
        authorPosition: "Producer",
        },
    ];

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
    <div className="container pt-5 pb-5">
        <div className="row">
            <div className="col-12 col-md-5 d-flex flex-column justify-content-center">
                <h1>Powering the growth of 100+ business & retailers in Indonesia.</h1>
                <p>From single store, startups, to large multi-store brands.</p>
            </div>
            <div className="col-12 col-md-7">
                <Carousel activeIndex={index} onSelect={handleSelect} className="carousel carousel-dark slide">
                    {quotes.map((quote, i) => (
                        <Carousel.Item key={i}>
                        <div className={styles.quotesPart}>
                            <img src={quotesImage} style={{position: 'absolute',left: '4%'}}/>
                            <img src={starImage}/>
                            <img src={starImage}/>
                            <img src={starImage}/>
                            <img src={starImage}/>
                            <img src={starImage}/>
                            <p style={{paddingTop: '10px'}}>{quote.text}</p>
                            <div style={{height: '50px', display: 'flex', alignItems: 'center'}}>
                               <img style={{ width: '50px', height: '50px', borderRadius: '50%'}} src="https://picsum.photos/200/300"/>
                                <div style={{ paddingLeft: '15px', paddingTop:'10px',height: '100%',display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                    <p><b>{quote.author}</b><br/>{quote.authorPosition}</p> 
                                </div>
                            
                            </div>
                            
                        </div>
                            
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    </div>
  );
}
export default Feedback;

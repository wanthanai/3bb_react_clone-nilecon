//! React
import React from 'react'
//! Styles
import { NewsAndActWrap } from './newAndActStyles'
//! PropTypes 
import PropTypes from 'prop-types';
//! Contents
import contents from '../../../assets/contents/news&csr.json'


//! Component
function NewsAndAct({ swapHeader }) {
    //! Return Component
    return (
        <NewsAndActWrap>
            {/* (Grid Container) 3BB News & Activities */}
            <div className={swapHeader ? "news_act-grid close" : "news_act-grid"}>
                {/* Items */}
                {contents['3bb_news'].map(item => (
                    // Content Item
                    <div 
                        key={item.id}
                        className="news_act-item"
                    >
                        <div className="news-act-item-left">
                            {/* (Left) Image */}
                            <img src={require(`../../../assets/images/3bb_news-csr/${item.img_name}`)} alt="3bb news" />
                        </div>
                        {/* (Right) Content */}
                        <div className="news-act-item-right">
                            {/* Title */}
                            <h3 className="news-act-item-right_header">
                                {item.title}
                            </h3>
                            {/* Date time */}
                            <p className="news-act-item-right_date">
                                {item.date_time}
                            </p>
                            {/* Description */}
                            <p className="news-act-item-right_desc">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </NewsAndActWrap>
    )
}

//! PropTypes
NewsAndAct.propTypes = {
    swapHeader: PropTypes.bool.isRequired
}


export default NewsAndAct
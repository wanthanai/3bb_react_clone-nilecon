//! React
import React from 'react'
//! Styles
import { CSRWrap } from './CSRStyles'
//! PropTypes 
import PropTypes from 'prop-types';
//! Contents
import contents from '../../../assets/contents/news&csr.json'


//! Component
function CSR({ swapHeader }) {
    //! Return Component
    return (
        <CSRWrap>
            {/* (Grid Container) CSR Contents */}
            <div className={!swapHeader ? "csr-grid close" : "csr-grid"}>
                {/* Items */}
                {contents['3bb_csr'].map(item => (
                    // Content Item
                    <div 
                        key={item.id}
                        className="csr-item"
                    >
                        <div className="csr-item-left">
                            {/* (Left) Image */}
                            <img src={require(`../../../assets/images/3bb_news-csr/${item.img_name}`)} alt="3bb news" />
                        </div>
                        {/* (Right) Content */}
                        <div className="csr-item-right">
                            {/* Title */}
                            <h3 className="csr-item-right_header">
                                {item.title}
                            </h3>
                            {/* Date time */}
                            <p className="csr-item-right_date">
                                {item.date_time}
                            </p>
                            {/* Description */}
                            <p className="csr-item-right_desc">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </CSRWrap>
    )
}

//! PropTypes
CSR.propTypes = {
    swapHeader: PropTypes.bool.isRequired
}


export default CSR;
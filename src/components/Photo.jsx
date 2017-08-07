import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Photo.css';

class Photo extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <a href="images/fulls/01.jpg">
                    <img src="images/thumbs/01.jpg" alt="" />
                    <h3>Lorem ipsum dolor sit amet</h3>
                </a>

                <a href="images/fulls/02.jpg">
                    <img src="images/thumbs/02.jpg" alt="" />
                    <h3>Lorem ipsum dolor sit amet</h3>
                </a>

                <a href="images/fulls/03.jpg">
                    <img src="images/thumbs/03.jpg" alt="" />
                    <h3>Lorem ipsum dolor sit amet</h3>
                </a>

                <a href="images/fulls/04.jpg">
                    <img src="images/thumbs/04.jpg" alt="" />
                    <h3>Lorem ipsum dolor sit amet</h3>
                </a>

                <a href="images/fulls/05.jpg">
                    <img src="images/thumbs/05.jpg" alt="" />
                    <h3>Lorem ipsum dolor sit amet</h3>
                </a>

                <a href="images/fulls/06.jpg">
                    <img src="images/thumbs/06.jpg" alt="" />
                    <h3>Lorem ipsum dolor sit amet</h3>
                </a>

                <a href="images/fulls/07.jpg">
                    <img src="images/thumbs/07.jpg" alt="" />
                    <h3>Lorem ipsum dolor sit amet</h3>
                </a>
            </div>
        );
    }
}

export default connect(state => ({

}))(Photo);

import PropTypes from 'prop-types'
import React from "react";

class InfoDisplayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div>
                <div className='display-container'>
                    {!this.props.info ?
                        <h3 style={{marginTop: '20px'}}>{this.props.placeholder}</h3>
                        : <h1 style={{marginTop: '20px'}}>{this.props.info}</h1>}
                </div>
            </div>
        );
    }
}

InfoDisplayer.propTypes = {
    info: PropTypes.string,
    placeholder: PropTypes.string
};

export default InfoDisplayer;
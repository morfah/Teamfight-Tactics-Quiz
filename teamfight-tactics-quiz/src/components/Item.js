import React from 'react';

class Item extends React.Component {
    render() {
        return (
            <div>
                <p>{ this.props.data.name }</p>
                <p>{ this.props.data.description }</p>
            </div>
        );
    };
}

export default Item;

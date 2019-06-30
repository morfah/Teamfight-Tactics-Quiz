import React from 'react';
import Item from './Item';

class Items extends React.Component {
    render() {
        return (
            this.props.items.map((item) =>
                <Item key={item.id} item={item} />
            )
        );
    };
}

export default Items;

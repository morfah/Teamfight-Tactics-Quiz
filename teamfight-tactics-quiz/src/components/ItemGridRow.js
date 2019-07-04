import React from 'react';
import ItemGridItem from './ItemGridItem';

class ItemGridRow extends React.Component {
    render() {
        return (
            this.props.row.map((item, index) =>
                <ItemGridItem key={index} item={item} />
            )
        )
    };
}

export default ItemGridRow;

import React from 'react';
import ItemListItem from './ItemListItem';

class ItemList extends React.Component {
    render() {
        return (
            this.props.items.map((item) =>
                <ItemListItem key={item.id} item={item} />
            )
        );
    };
}

export default ItemList;

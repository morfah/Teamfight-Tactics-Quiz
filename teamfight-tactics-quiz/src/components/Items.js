import React from 'react';
import Item from './Item';

class Items extends React.Component {
    render() {
        return (
            this.props.data.baseItems.map(function(baseItem, i){
                return <Item data={baseItem} />;
            }),
            this.props.data.combinedItems.map(function(combinedItem, i){
                return <Item data={combinedItem} />;
            })
        );
    };
}

export default Items;

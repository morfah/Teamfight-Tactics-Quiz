import React from 'react';
import ItemGridItem from './ItemGridItem';

var _getCombinedItem = (firstItem, secondItem, combinedItems) => {
    var combinedItem = combinedItems.find(item => {
        return (item.combinedFrom[0].itemId === firstItem.id && item.combinedFrom[1].itemId === secondItem.id) ||
            (item.combinedFrom[1].itemId === firstItem.id && item.combinedFrom[0].itemId === secondItem.id);
    });

    console.log(`${firstItem.name} + ${secondItem.name} = ${combinedItem.name}`);
    return [combinedItem, firstItem, secondItem];
};

var _getCombinedItemArray = (baseItems, combinedItems) => {
    var itemsArray = [];
    baseItems.forEach((firstItem) => {
        var itemRow = [];
        baseItems.forEach((secondItem) => {
            itemRow.push(_getCombinedItem(firstItem, secondItem, combinedItems));
        });
        itemsArray.push(itemRow);
    });

    return itemsArray;
};

class ItemGrid extends React.Component {
    constructor(props) {
        super(props);

        this.itemArray = _getCombinedItemArray(props.baseItems, props.combinedItems);
    };

    render() {
        return (
            <div className="item-grid">
                {this.itemArray.map((row) =>
                    row.map((item, index) =>
                        <ItemGridItem
                            key={index}
                            item={item[0]}
                            firstBaseItem={item[1]}
                            secondBaseItem={item[2]} />
                    )
                )}
            </div>
        );
    };
}

export default ItemGrid;

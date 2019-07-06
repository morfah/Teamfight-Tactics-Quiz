import React from 'react';
// import ItemGridRow from './ItemGridRow';
import ItemGridItem from './ItemGridItem';

var _getCombinedItem = function (firstItem, secondItem, combinedItems) {
    var combinedItem = combinedItems.find(item => {
        return (item.combinedFrom[0].itemId === firstItem.id && item.combinedFrom[1].itemId === secondItem.id) ||
            (item.combinedFrom[1].itemId === firstItem.id && item.combinedFrom[0].itemId === secondItem.id);
    });

    console.log(`${firstItem.name} + ${secondItem.name} = ${combinedItem.name}`);
    return combinedItem;
};

var _getCombinedItemArray = function (baseItems, combinedItems) {
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
                    // <ItemGridRow style={{ display: "block" }} key={index} row={row} />
                    row.map((item, index) =>
                        <ItemGridItem key={index} item={item} />
                    )
                )}
            </div>
        );
    };
}

export default ItemGrid;

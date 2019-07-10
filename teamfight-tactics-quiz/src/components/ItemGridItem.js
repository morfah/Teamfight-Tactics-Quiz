import React from 'react';

var _imageUrl = function(imageId) {
    return `/images/items/${imageId}.png`;
};

class ItemGridItem extends React.Component {
    constructor(props) {
        super(props);
        this.combinedItemImage = _imageUrl(this.props.item.id);
        this.firstBaseItemImage = _imageUrl(this.props.firstBaseItem.id);
        this.secondBaseItemImage = _imageUrl(this.props.secondBaseItem.id);
    }

    render() {
        return (
            <div className="item-grid-item">
                <img src={this.combinedItemImage} alt={this.props.item.name} title={this.props.item.description} />
                <img src={this.firstBaseItemImage} alt={this.props.firstBaseItem.name} title={this.props.firstBaseItem.description} />
                <img src={this.secondBaseItemImage} alt={this.props.secondBaseItem.name} title={this.props.secondBaseItem.description} />
            </div>
        )
    };
}

export default ItemGridItem;

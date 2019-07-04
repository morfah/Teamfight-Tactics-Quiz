import React from 'react';

class ItemListItem extends React.Component {
    constructor(props) {
        super(props);
        this.imageSrc = "/images/items/" + this.props.item.id + ".png";
    }

    render() {
        return (
            <div>
                <p>{this.props.item.name}</p>
                <p>{this.props.item.description}</p>
                <img src={this.imageSrc} alt={this.props.item.name} />
            </div>
        );
    };
}

export default ItemListItem;

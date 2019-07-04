import React from 'react';

class ItemGridItem extends React.Component {
    constructor(props) {
        super(props);
        this.imageSrc = "/images/items/" + this.props.item.id + ".png";
    }

    render() {
        return (
            <img src={this.imageSrc} alt={this.props.item.name} title={this.props.item.name} />
        )
    };
}

export default ItemGridItem;

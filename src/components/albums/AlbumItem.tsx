import React, { FC } from 'react';
import './AlbumItem.scss';

const AlbumItem: FC<{ item: any }> = ({ item }) => {
    return (
        <div className="col-md-3 col-6" id="album-item">
            {item.images[0]?.url && (
                <img src={item.images[0].url} alt="Album sin foto" />
            )}
            <label>{item.name}</label>
        </div>
    );
}

export default AlbumItem;

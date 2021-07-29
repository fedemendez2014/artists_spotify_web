import React, { FC } from 'react';
import { useQueryClient } from 'react-query';
import AlbumItem from './AlbumItem';
import './Albums.scss';

const Albums: FC = () => {
    const queryClient = useQueryClient()
    const albums: any = queryClient.getQueryData(['albums']);


    return (
        <div className="container" id="albums">
            <div className="row">
                {
                    albums?.map((item: any) =>
                        <AlbumItem item={item} />
                    )
                }
            </div>
        </div>
    );
}

export default Albums;

import React, { FC } from 'react';
import './ArtistInfo.scss';
import { useQueryClient } from 'react-query';

const ArtistInfo: FC = () => {
    const queryClient = useQueryClient()
    const artist: any = queryClient.getQueryData(['artist']);

    return (
        <div className="container" id="artist-info">
            <div className="row">
                <div className="col-12">
                    {artist?.images[0]?.url && (
                        <img src={artist?.images[0]?.url} alt="Artista sin imagen" />
                    )}
                    <label>{artist?.name}</label>
                </div>
            </div>
        </div>
    );
}

export default ArtistInfo;

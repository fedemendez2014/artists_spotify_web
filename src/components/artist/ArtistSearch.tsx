import React, { FC, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import spotifyLogoType from '../../assets/spotify-logotype.jpg';
import { getAlbums } from '../../services/Albums';
import Albums from '../albums/Albums';
import ArtistInfo from './ArtistInfo';
import './ArtistSearch.scss';

const ArtistSearch: FC = () => {
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const queryClient = useQueryClient()

    const { isLoading, mutate } = useMutation(getAlbums, {
        onSuccess: (data: any) => {
            queryClient.setQueryData(['albums'], data.albums)
            queryClient.setQueryData(['artist'], data.artist)
            setName('');
            setError('');
        },
        onError: (error: any) => {
            let msg = 'Ocurrió un error al procesar la solicitud, reintentar';
            if (error.response.data?.error) {
                msg = error.response.data.error;
            }
            setError(msg);
        }
    });

    return (
        <div className="container" id="search-artist">
            <div className="row">
                <div className="col-12 text-center">
                    <div>
                        <img src={spotifyLogoType} width="250" />
                    </div>
                    <div className="search-box">
                        <input type="text" placeholder="Ingrese nombre del artista" value={name} onChange={(e) => {
                            setName(e.target.value);
                        }} />
                        <button onClick={() => { mutate(name) }}>Buscar</button>
                        {error !== '' && (
                            <label className="label-error">{error}</label>
                        )}
                    </div>
                    <div>
                        <ArtistInfo />
                    </div>
                    <div>
                        <Albums />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArtistSearch;

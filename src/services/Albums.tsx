import axios from 'axios';
import { Constants } from '../Constants';

export const getAlbums = async (artistName: String) => {
    try {
        const resp = await axios.get(`${Constants.BASE_URL}/albums/${artistName}`);
        return resp.data;
    } catch (err: any) {
        throw err;
    }
}
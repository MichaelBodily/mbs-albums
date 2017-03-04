import axios from 'axios';
import { BASE_URL } from '../configuration';

const myInitGet = {
            method: 'GET',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            mode: 'cors',
            cache: 'default',
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            }
        };

export function getAlbums() {
    const response = axios.get(`${BASE_URL}/Albums`, myInitGet)
        
    return {
        type: "GET_ALBUMS",
        payload: response
    }
};


export function getAlbum(id) {
    //const response = axios.get('http://www.mikebodilyillustration.com/mbi/api/Albums/' + id , myInitGet)
    const response = axios.get(`${BASE_URL}/Albums/${id}`, myInitGet)

    return {
        type: "GET_ALBUM",
        payload: response
    }
}

export function createAlbum(props) {
    const myInitPost = {
            method: 'POST',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            mode: 'cors',
            cache: 'default',
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            }
        };
        
    //const response = axios.post('http://www.mikebodilyillustration.com/mbi/api/Albums', props, myInitPost)
    const response = axios.post(`${BASE_URL}/Albums`, props, myInitPost)

    return {
        type: "CREATE_ALBUM",
        payload: response
    }
}

export function deleteAlbum(id) {
    const myInitDelete = {
            method: 'POST',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            mode: 'cors',
            cache: 'default',
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            }
        };
        
    //const response = axios.post('http://www.mikebodilyillustration.com/mbi/api/Album/Delete/' + id, myInitDelete)
    const response = axios.post(`${BASE_URL}/Album/Delete/${id}`, myInitDelete)
    return {
        type: "DELETE_ALBUM",
        payload: response
    }
}

// http://localhost:58034/api/Albums
/**
 * Created by qtj929 on 17/03/2017.
 */
import axios from 'axios';
import config from '../config/config'

/*
export const api = (config) => {
    return new Promise((resolve, reject) => {
        try {
            request(config)
                .on('response', function(response) {
                    console.log(response) // 200
                    resolve(response);
                })
                .on('error', function(err) {
                    debugger;
                    reject(err);
                });
        }
        catch (er) {
            reject(er);
        }
    })
}*/

export const post = (config, data) => {
    return new Promise((resolve, reject) => {
        try {
            const axiosInstance = axios.create({});
            axiosInstance.post(config.uri, data, config)
                .then((response) => {
                    resolve(response);
                })
                .catch((err) => {
                    reject(err.response || err);
                });
        }
        catch (er) {
            reject(er);
        }
    });
};

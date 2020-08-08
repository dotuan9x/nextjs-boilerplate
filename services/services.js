import axios from 'axios';

axios.interceptors.request.use(function (config) {
    console.log('config', config)

    return config;
});

export const services = {
    get: function get(params) {
        if (typeof params.API_HOST !== 'undefined' && typeof params.id !== 'undefined') {
            const API_HOST = params.API_HOST;

            delete params.API_HOST;

            return axios.get(API_HOST + '/' + params.id, {
                params: params
            });
        } else {
            return false;
        }
    },
    getList: function getList(params) {
        if (typeof params.API_HOST !== 'undefined') {
            const API_HOST = params.API_HOST;

            delete params.API_HOST;

            return axios.get(API_HOST, {
                params: params
            });
        } else {
            return false;
        }
    },
    create: function create(params) {
        if (params.API_HOST !== 'undefined') {
            const API_HOST = params.API_HOST;

            delete params.API_HOST;

            return axios.post(API_HOST, params);
        } else {
            return false;
        }
    },
    update: function update(params) {
        if (typeof params.API_HOST !== 'undefined' && typeof params.id !== 'undefined') {
            const API_HOST = params.API_HOST;

            delete params.API_HOST;

            return axios.put(API_HOST + '/' + params.id, params);
        } else {
            return false;
        }
    },
    del: function del(params) {
        if (typeof params.API_HOST !== 'undefined' && typeof params.id !== 'undefined') {
            const API_HOST = params.API_HOST;

            delete params.API_HOST;

            return axios.delete(API_HOST + '/' + params.id, {
                params: params
            });
        } else {
            return false;
        }
    }
};

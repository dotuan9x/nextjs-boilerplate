import {services} from 'Services/services';
import Constant from 'Config/constant';

export function get(params) {
    return services.get({
        ...params,
        API_HOST: Constant.API_HOST + 'post/info'});
}

export function getList(params) {
    return services.getList({
        ...params,
        API_HOST: Constant.API_HOST + 'post/info'});
}

export function create(params) {
    return services.create({
        ...params,
        API_HOST: Constant.API_HOST + 'post/info'});
}
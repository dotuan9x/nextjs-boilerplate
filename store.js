import {createStore, applyMiddleware} from 'redux';

const initialState = {
    headerMenu: [],
    document: {
        defaultTitle: 'Tin nhanh, đọc báo, tin tức online 24h - www.google.com',
        defaultDescription: 'Tin nhanh, đọc báo, tin tức online 24h. Tin tức Việt Nam &amp; thế giới về xã hội, thời trang, video ngôi sao, phim ảnh, tình yêu, học đường, các chuyển động xã hội.',
        title: 'Tin nhanh, đọc báo, tin tức online 24h - www.google.com'
    }
};

// Action type
export const actionTypes = {
    SET_HEADER_MENU: 'SET_HEADER_MENU',
    UPDATE_DOCUMENT: 'UPDATE_DOCUMENT'
};

// Actions
export const setHeaderMenu = (payload) => {
    return {
        type: actionTypes.SET_HEADER_MENU,
        payload
    };
};

export const updateDocument = (payload) => {
    return {
        type: actionTypes.UPDATE_DOCUMENT,
        payload
    };
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_HEADER_MENU:
            if (action.payload) {
                return Object.assign({}, state, {
                    headerMenu: action.payload
                });
            }
            return state;
        case actionTypes.UPDATE_DOCUMENT:
            if (action.payload) {
                return Object.assign({}, state, {
                    document: {
                        ...state.document,
                        ...action.payload
                    }
                });
            }
            return state;
        default:
            return state;
    }
};

export function initializeStore (initialState) {
    return createStore(
        reducer,
        initialState,
        applyMiddleware()
    );
}

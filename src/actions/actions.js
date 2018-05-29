import actionTypes from '../constants/actionTypes';

function sampleActionFunction(sampleData){
    return {
        type: actionTypes.NEWS_RECEIVED,
        sampleData: sampleData
    }
}
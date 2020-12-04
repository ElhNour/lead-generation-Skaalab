import requestOffers from './requestOffers'
import receiveOffers from './receiveOffers'
import setOffers from './setOffers'
import Axios from 'axios'

const fetchOffers = (filtre = {
    source:0,
    contrat:'',
    travail:'',
    technologie:'',
}) => {
    return (dispatch) => {
     
        dispatch(requestOffers())
        Axios.get('/api/:startupname/offers?remote=' + filtre.travail + '&source=' + filtre.source + '&contrat=' + filtre.contrat + '&tech=' + filtre.technologie)
            .then(
            res => {
                console.log(res)
                dispatch(setOffers(res.data))
            }
        ).then(dispatch(receiveOffers()))
            .catch(err => console.log(err))
    }
}

export default fetchOffers
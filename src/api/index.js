import axios from 'axios';
import {GET_FLIGHTS} from './api_endpoints';
import Store from '../redux/store';
import {setData} from '../redux/slices/flightsSlice';

export const GetFlights = async () => {
  axios
    .get(GET_FLIGHTS)
    .then(response => {
      Store.dispatch(setData(response.data.data.result));
    })
    .catch(error => {
      console.log(error);
    });
};

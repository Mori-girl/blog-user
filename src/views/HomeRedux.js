import {combineReducers} from 'redux';
import categoryist from '../components/Home/CatalogListRedux';

const home=combineReducers({
    categoryist,
});
export default home;

export * as catalogListAction from '../components/Home/CatalogListRedux';
import { LOAD_LISTINGS, SAVE_PROPERTY, REMOVE_PROPERTY } from './constants';
import { mockedListings } from '../../mocked-listings';
import { loadListings } from './actions'

const initialState = loadListings(mockedListings).listings;

export default function listingsReducer(state = initialState, action) {
	switch(action.type) {
		case LOAD_LISTINGS :
		  return Object.assign({}, state, action.listings);

		case SAVE_PROPERTY :
		  if (state.saved.indexOf(action.listing) >= 0) {
		  	return state;
		  }else{
		  	action.listing.isSaved = true;
		  	state.saved.push(action.listing);
				return Object.assign({}, state);
		  }

		case REMOVE_PROPERTY :
			const at = state.saved.indexOf(action.listing);
			state.saved.splice(at, 1);
			return Object.assign({}, state);

		default :
			return state;
	}
}

import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			//important not to use .push because we don't want to manipulate the state, we want to make a new one
			return state.concat([action.payload.data]);
			//or you can use
			return [ action.payload.data, ...state ];
	}

	return state;
}
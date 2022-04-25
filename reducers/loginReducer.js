import { GET_LOGIN } from '../actions/userLoginActions'
import produce from 'immer';

const initialState = {
	status: 'void',
	data: null,
	error: null
};

const FETCHING = 'LOGIN_FETCHING';
const RESOLVED = 'LOGIN_RESOLVED';
const REJECTED = 'LOGIN_REJECTED';

const loginFetching = () => ({ type: FETCHING })
const loginResolved = (data) => ({ type: RESOLVED, payload: data })
const loginRejected = (error) => ({ type: RESOLVED, payload: error })

export const loginReducer = (state = initialState, action) => {
	return produce(state, draft => {
		switch(action.type) {
			case FETCHING: {
				if(draft.status === "void") {
					draft.status = 'pending';
					return;
				}
				if(draft.status === "rejected") {
					draft.error = null;
					draft.status = 'pending';
					return;
				}
				if(draft.status === "resolved") {
					draft.status = 'updating';
					return;
				}
				return;
			}

			case RESOLVED : {
				if(draft.status === "pending" || draft.status === 'updating') {
					draft.data = action.payload;
					draft.status = 'resolved';
					return;
				}
				return;
			}
			
			case REJECTED: {
				if(draft.status === "pending" || draft.status === 'updating') {
					draft.error = action.payload;
					draft.data = null;
					draft.status = 'rejected';
					return;
				}
				return;
			}
			default: 
				return;
		}
	})
}
import {SET_NOTES, SET_NOTE_ID} from './actions';

const initialState = {
  notes: [],
  noteID: 1,
};

function noteReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NOTES:
      return {...state, notes: action.payload};
    case SET_NOTE_ID:
      return {...state, noteID: action.payload};
    default:
      return state;
  }
}

export default noteReducer;

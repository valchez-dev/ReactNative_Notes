export const SET_NOTES = "set_notes";
export const SET_NOTE_ID = "set_note_id";


export const setNotes = notes => dispatch => {
    dispatch({
        type: SET_NOTES,
        payload: notes
    })
}

export const setNoteID = noteId => dispatch => {
    dispatch({
        type: SET_NOTE_ID,
        payload: noteId,
    })
}




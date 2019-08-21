import produce from "immer";
import invariant from "invariant";
// constants.js
export const ADD_FORM = "app/forms/add_form";
export const CHANGE_FORM_VALUE = "app/forms/change_value";
export const REMOVE_FORM = "app/forms/remove_form";

//actions.js
export const addForm = ({ key, initialState }) => ({
  type: ADD_FORM,
  payload: { key, initialState }
});
export const changeFormValue = ({ key, name, value }) => ({
  type: CHANGE_FORM_VALUE,
  payload: { key, name, value }
});
export const removeForm = ({ key }) => ({
  type: REMOVE_FORM,
  payload: { key }
});

// reducer.js
export const initialFormsState = {};

/* eslint-disable default-case */
export const formsReducer = produce((draft, action) => {
  switch (action.type) {
    case ADD_FORM: {
      const { key, initialState } = action.payload;
      // let's say: We add only if not exists
      if (!draft[key]) {
        draft[key] = initialState;
      }
      break;
    }
    case CHANGE_FORM_VALUE: {
      const { key, name, value } = action.payload;
      invariant(!!draft[key], `No such form : '${key}'`);
      invariant(
        Object.keys(draft[key]).includes(name),
        `'${key}' form does not initially contain '${name}' key! Have you forgot to add it ?`
      );
      draft[key][name] = value;
      break;
    }
    case REMOVE_FORM: {
      const { key } = action.payload;
      delete draft[key];
      break;
    }
  }
}, initialFormsState);

// selectors.js
export const selectFormByKey = key => state => state.forms[key];

import produce from "immer";

const INITIAL_STATE = {
  token: null,
  user: "",
  id: "",
  name: "",
  image: "",
  signed: false,
  loading: false
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@auth/SIGN_IN_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@auth/SIGN_IN_SUCCESS": {
        draft.token = action.payload.token;
        draft.user = action.payload.user;
        draft.id = action.payload.id;
        draft.name = action.payload.name;
        draft.image = action.payload.image;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case "@auth/SIGN_FAILURE": {
        draft.loading = false;
        break;
      }
      case "@auth/SIGN_OUT": {
        draft.token = null;
        draft.id = "";
        draft.name = "";
        draft.user = "";
        draft.image = "";
        draft.signed = false;
        break;
      }
      default:
        return state;
    }
  });
}

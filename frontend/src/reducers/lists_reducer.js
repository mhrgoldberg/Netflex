import { RECEIVE_LIST, RECEIVE_NEW_ITEM, REMOVE_ITEM } from "../actions/list_actions";


const ListsReducer = (state = { items: {}, new: undefined }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_LIST:
      const listItems = {};
      action.list.data.forEach( listItem => listItems[listItem._id] = listItem);
      newState.items = listItems;
      return newState;
    case RECEIVE_NEW_ITEM:
      newState.new = action.item.data
      return newState;
    case REMOVE_ITEM:
      delete newState['items'][action.movieId];
      return newState;
    default:
      return state;
  }
};

export default ListsReducer;
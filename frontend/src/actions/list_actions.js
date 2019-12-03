import { getList, addListItem, deleteListItem } from "../util/list_api_util";

export const RECEIVE_LIST = "RECEIVE_LIST";
export const RECEIVE_NEW_ITEM = "RECEIVE_NEW_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const receiveList = list => ({
  type: RECEIVE_LIST,
  list
});

export const reciveNewItem = item => ({
  type: RECEIVE_NEW_ITEM,
  item
});

export const removeItem = movieId => ({
  type: REMOVE_ITEM,
  movieId
});

export const fetchList = userId => dispatch =>
  getList(userId)
    .then(list => dispatch(receiveList(list)))
    .catch(err => console.log(err));

export const addNewItem = (item) => dispatch => {
  return addListItem(item)
    .then(item => dispatch(reciveNewItem(item)))
    .catch(err => console.log(err));
}
export const deleteItem = (movieId) => dispatch => {
  return deleteListItem(movieId)
    .then(() => {
      return dispatch(removeItem(movieId));
    })
    .catch(err => console.log(err));
};


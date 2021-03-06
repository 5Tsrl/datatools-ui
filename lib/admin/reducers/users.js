import update from 'react-addons-update'

const users = (state = {
  isFetching: false,
  data: null,
  userCount: 0,
  page: 0,
  perPage: 10,
  userQueryString: null
}, action) => {
  switch (action.type) {
    case 'REQUESTING_USERS':
      return update(state, {isFetching: { $set: true }})
    case 'RECEIVE_USERS':
      return update(state, {
        isFetching: { $set: false },
        data: { $set: action.users },
        userCount: { $set: action.totalUserCount }
      })
    case 'CREATED_USER':
      if (state.data) {
        return update(state, {data: { $push: [action.profile] }})
      }
      break
    case 'SET_USER_PAGE':
      return update(state, {page: { $set: action.page }})
    case 'SET_USER_QUERY_STRING':
      return update(state, {userQueryString: { $set: action.queryString }})
    default:
      return state
  }
}

export default users

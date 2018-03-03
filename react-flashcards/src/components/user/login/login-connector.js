import {
  inputUserEmail,
  inputUserPassword,
  loginUser
} from '../../../store/ducks/user/actions'

const getUser = data => data.user
const getEmail = data => data.user.email

export const mapDispatchToProps = (dispatch, state) => (
  {
    inputUserEmail: (value) => (
      dispatch(inputUserEmail(value))
    ),
    inputUserPassword: (value) => (
      dispatch(inputUserPassword(value))
    ),
    loginUser: () => dispatch(loginUser(state.user)),
  }
)

export const mapStateToProps = (state, props) => (
  {
    user: getUser(state),
    email: getEmail(state)
  }
)

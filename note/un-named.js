// Before
const WithAuth = (WrappedComponent) => {
  return (props) => (
    ...code
  )
}
export default WithAuth;

// After
const WithAuth = (WrappedComponent) => {
  // return 컴포넌트의 이름 정의
  const AuthComponent = (props) => {
    return (
      ...code
    )
  }
}
export default WithAuth;
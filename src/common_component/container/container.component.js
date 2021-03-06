import { use100vh } from 'react-div-100vh'
 
const Container = (props) => {
  const height = use100vh();
  return <div className={props.className} style={Object.assign({ height: height },props.style)}>{props.children}</div>
}

export default Container;
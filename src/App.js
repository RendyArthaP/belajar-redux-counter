import './App.css';
import { connect } from 'react-redux'
import { decrease, increase } from './redux/Actions/Counter.Actions';

function App(props) {
  return (
    <div className="App">
      <h1>
        Counter: {props.counter}
      </h1>
      <button onClick={() => props.increase()}>+</button>
      <button onClick={() => props.decrease()}>-</button>
    </div>
  );
}

const mapStateToProps = (props) => {
  console.log(props.counter)
  return {
    counter: props.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);

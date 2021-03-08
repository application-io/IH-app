mport React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
// import * as actionsTypes from "../../store/actions/actions";
import * as actionCreators from "../../store/actions/index";

class Counter extends Component {
  // state = {
  //   counter: 0
  // };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState(prevState => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState(prevState => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState(prevState => {
          return { counter: prevState.counter - value };
        });
        break;
      default:
        this.setState(prevState => {
          return { counter: 0 };
        });
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl
          label="Add 5"
          clicked={() => this.props.onAddCounter(5)}
        />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.props.onSubtractCounter(5)}
        />
        <hr />
        <button
          style={{ margin: "0 40%" }}
          onClick={() => this.props.onStoreResult(this.props.ctr)}
        >
          STORE RESULT
        </button>
        <ul style={{ textAlign: "center" }}>
          {this.props.storedResults.map(result => {
            return (
              <li
                key={result.id}
                onClick={() => this.props.onDeleteResult(result.id)}
              >
                {result.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
//
const mapStateToProps = state => {
  // map redux state to props
  // the name mapStateToProps is totally up to u
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
};
//
const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddCounter: val => dispatch(actionCreators.add(val)),
    onSubtractCounter: val => dispatch(actionCreators.subtract(val)),
    onStoreResult: res => dispatch(actionCreators.storeResult(res)),
    onDeleteResult: i => dispatch(actionCreators.deleteResult(i))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
// export default connect(null, mapDispatchToProps)(Counter); if you are only dispatching actions

// connect(stateToGet, actionToDispatch)
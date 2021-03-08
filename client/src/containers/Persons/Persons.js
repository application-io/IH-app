import React, { Component } from "react";
import { connect } from "react-redux";

import Person from "../../components/Person/Person";
import AddPerson from "../../components/AddPerson/AddPerson";
import * as actionCreators from "../../store/actions/index";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAddedPerson} />
        {this.props.prs.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onRemovedPerson(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    prs: state.prsn.persons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddedPerson: (name, age) => dispatch(actionCreators.addPerson(name, age)),
    onRemovedPerson: id => dispatch(actionCreators.removePerson(id))
  };
};
//
// export default Persons;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Persons);
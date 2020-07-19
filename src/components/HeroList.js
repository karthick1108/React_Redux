import React, { Component } from "react";
import { connect } from "react-redux";
import { removeCharacterById } from "../actions";

class HeroList extends Component {
  render() {
    return (
      <div className="App">
        <h3>Your Hero Squad</h3>
        <ul className="list-group">
          {this.props.heroes.map((hero) => {
            return (
              <li key={hero.id} className="list-group-item">
                <div className="list-item">{hero.name}</div>
                <div
                  className="list-item right-button"
                  onClick={() => this.props.removeCharacterById(hero.id)}
                >
                  x
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

//function to take the redux state and map it to props objects within our component
function mapStateToProps(state) {
  return {
    heroes: state.heroes,
  };
}

export default connect(mapStateToProps, { removeCharacterById })(HeroList);

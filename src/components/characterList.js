import React, { Component } from "react";
import { connect } from "react-redux";
import characters from "../reducers/character_reducer";

class CharacterList extends Component {
  render() {
    return (
      <div>
        <h4>Characters</h4>
        <ul>
          {this.props.characters.map((character) => {
            return (
              <li key={character.id}>
                <div>{character.name}</div>
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
    characters: state.characters,
  };
}

export default connect(mapStateToProps, null)(CharacterList);

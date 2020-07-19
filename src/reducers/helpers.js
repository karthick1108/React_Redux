import characters_json from "../data/characters.json";

// function to return the matching id
export function createCharacter(id) {
  let character = characters_json.find((c) => c.id === id);
  return character;
}

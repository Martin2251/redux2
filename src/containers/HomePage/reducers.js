// takes care of the state
// sedn it request to update the state
// it needs a deafualt state
const defaultState = {
  user: ["No User!"],
};

export default function homePageReducer(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

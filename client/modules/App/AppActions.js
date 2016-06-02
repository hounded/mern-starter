// Export Constants
export const TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
export const TOGGLE_DRAW = 'TOGGLE_DRAW';
// Export Actions
export function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST,
  };
}

export function handleDrawPosition() {
    return {
      type: TOGGLE_DRAW,
    };
}

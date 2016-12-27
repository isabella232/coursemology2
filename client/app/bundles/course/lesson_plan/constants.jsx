import mirrorCreator from 'mirror-creator';

const actionTypes = mirrorCreator([
  'TOGGLE_LESSON_PLAN_ITEM_TYPE_VISIBILITY',
  'SET_ITEM_FIELD',
  'SET_MILESTONE_FIELD',
]);

export default actionTypes;

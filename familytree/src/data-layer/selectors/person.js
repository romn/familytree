import { createSelector } from "reselect";

const selectPersons = state => state.person.list;
const selectPersonId = (state, props) => props["personId"];

export const selectImmediateMembers = createSelector(
    selectPersons,
    selectPersonId,
    (persons, id) => [persons.filter(person => (person.id == id))["parentId1"]]
);

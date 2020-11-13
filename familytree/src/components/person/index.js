import React from "react";
import {useSelector} from "react-redux";
import {selectImmediateMembers} from "../../data-layer/selectors/person";

export default function () {
    const immediateMembers = useSelector(selectImmediateMembers);
    return (
        <section>
            <h1>Person's immediate family members</h1>
            <ul>
                {immediateMembers.map(immediateMember => <li>{immediateMember}</li>)}
            </ul>
        </section>
    );
}

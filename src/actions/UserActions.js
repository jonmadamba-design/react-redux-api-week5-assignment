// JM Workflow for AddUser Workshop:
// 6. 
import { DELETE_USER, ADD_USER} from './ActionTypes';

export function deleteUser(id) {
    console.log("in the UserActions deleteUsers");
    return function (dispatch) {
        dispatch({
            type: DELETE_USER,
            payload: id,
        });
    };
}

// JM Workflow for AddUser Workshop:
// 3. added addUser action function
// 4. Go to UserReduction component
export function addUser(data) {
    console.log("in the userActions addusers");
    return function (dispatch) {
        dispatch({
            type: ADD_USER,
            payload: {data}
        });
    };
} 


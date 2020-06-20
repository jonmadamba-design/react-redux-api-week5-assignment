// JM Workflow for AddUser Workshop:
// 4. import ADD_USER from ActionTypes
// 5. Go to switch case for ADD_USER below

import {DELETE_USER, ADD_USER} from '../actions/ActionTypes';
// jm add fetch users
import {FETCH_USERS} from '../actions/ActionTypes';
import {CREATE_USER} from '../actions/ActionTypes';

const initialState = {
    // users: [
    //   {
    //     name: "Aaron",
    //     id: 1,
    //   },
    //   {
    //     name: "Jamie",
    //     id: 2,
    //   },
    // ],
    users: [],
  };


export default function(state=initialState, action) {
    console.log("In the Reducer");
    switch(action.type) {
        case DELETE_USER: 
            console.log("In the reducer for DELETE_USER");

            let filteredArray = state.users.filter((user) => {
                if (user.id !== action.payload) {
                    return user; //if no match, return current user state
                }
            });

            return {
                ...state,
                users: filteredArray,
            }
        // JM Workflow for AddUser Workshop:
        // 5. added ADD_USER function to reducer -- create new users array and update redux state with new user object
        // 6. Go to AddUsers component to import and connect new actions creator and reducer function
        case ADD_USER: 
            console.log("In the ADD_USER UserReducer");
            console.log(action); // see payload for action
              
            let newUsersArray = [...state.users, action.payload.data ]

            return {
                ...state,
                users: newUsersArray,
            }
        case FETCH_USERS:
            console.log(action);
            return {
                ...state,
                users: action.payload,
            }
        case CREATE_USER:
            console.log("In the CREATE_USER UserReducer");
            console.log(action); // see payload for action
              
        //    let newCreateUsersArray = [...state.users, action.payload.data ]

        //    return {
        //        ...state,
        //        users: newCreateUsersArray,
        //    }
    
        default:
            return state;

    }
}
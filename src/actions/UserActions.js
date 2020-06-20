// JM Workflow for AddUser Workshop:
// 6. 
import { DELETE_USER, ADD_USER} from './ActionTypes';
// jm 2 import new action type
import { FETCH_USERS } from './ActionTypes';
import axios from 'axios';
import { CREATE_USER } from './ActionTypes';

const baseURL = "https://reqres.in/api/users";

// jm 3 create function
export function fetchUsers(){

    console.log("Inside the UserActions -> fetchUsers");
    //use axios to do http request
    return function(dispatch) {
        // create async function (that branches processing)
        console.log("inside UserActions>fetchUsers>return function");
        const getData = async () => {
            try {
                let responseData = await axios.get(baseURL);
                console.log("calling api: fetchUsers");
                console.log(responseData);
                console.log("log only data payload")
                console.log(responseData.data.data);
                console.log("end call: fetchUsers");

                // do something with the data
                dispatch({
                    type: FETCH_USERS,
                    payload: responseData.data.data,
                })
            } catch (error) {
                console.log(error);
            }

        }
        getData();
    }
}

export function deleteUser(id) {
    console.log("in the UserActions deleteUsers");
    return function (dispatch) {

        // add server api call here
        const deleteData = async () => {

            let targetUser = baseURL+"/"+id;
            console.log(targetUser);
            let responseData = await axios.delete(targetUser);
            console.log("calling api: deleteUser");
            console.log(responseData);
            console.log("log only data payload")
            console.log(responseData.data.data);
            console.log("end call: deleteUser");
            dispatch({
                type: DELETE_USER,
                payload: id,
            });
    
        }
        deleteData();
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

// create user uses API call before dispatch
export function createUser(userData) {
    console.log("In the userActions");
    console.log(userData);
    return function(dispatch){
        const postData = async () => {
            try {
          
                let responseData = await axios.post(baseURL, userData);
                console.log("userData: ");
                console.log(userData);
                console.log("calling api: createUser");
                console.log(responseData);
                console.log("log only data payload: post")
                console.log(responseData.data);
                console.log("end call: createUser");

                //update the local app state
                dispatch({
                     type: ADD_USER,
                     payload: {userData},
                });
        
            }        
            catch (error) {
                console.log(error)            
            }
        }
        postData();

    }
}

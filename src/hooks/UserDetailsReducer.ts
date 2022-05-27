export interface IUserDetails {            //particular user type
  email: string;
  id: number;
  first_name: string;
  last_name: string;
}

export interface IUserState{        //this is the type of state in which users and isLogin info will be stored
  users: IUserDetails[];
  isUserLogin?: boolean;
}

export enum UserStateReducerConstant {
  USER_DETAILS = "USER_DETAILS",
  USER_LOGIN = "USER_LOGIN"
}

export interface IAction<T, P>{
  type: T,
  payload?: Partial<P>;
}

export type IActionType = IAction<UserStateReducerConstant, IUserState>;   //action object type

export type IUserStateReducerDispatchType = (value: IActionType)=>void;   //dispatch function type

export const initialUserState:IUserState = {
  users: [],
  isUserLogin: false
}

export const userStateReducer = (state: IUserState, action: IActionType)=>{
  switch(action.type){
    case UserStateReducerConstant.USER_DETAILS: return {...state, users: action.payload?.users || []}
    case UserStateReducerConstant.USER_LOGIN: return {...state, isUserLogin: action.payload?.isUserLogin}
    default: return state
  }
}

const fetchUsers = async()=>{
  const resp = await fetch("https://reqres.in/api/users?page=2");
  const result = await resp.json()
  return result.data;
}

export const fetchUserDetails = async(dispatch: IUserStateReducerDispatchType)=>{
  const users = await fetchUsers();
  dispatch({type: UserStateReducerConstant.USER_DETAILS, payload: {users: users}})
}

export const updateUser = (dispatch: IUserStateReducerDispatchType, isLogin: boolean)=>{
  dispatch({type: UserStateReducerConstant.USER_LOGIN, payload: {isUserLogin: isLogin}})
}
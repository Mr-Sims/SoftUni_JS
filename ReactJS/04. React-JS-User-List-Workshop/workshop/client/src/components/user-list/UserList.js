import { Fragment, useState } from "react";
import { UserItem } from "./user-item/UserItem";
import { UserDetails } from './user-details/UserDetails';
import { UserActions } from "./UserListConstants";
import * as userService from '../../services/userService';
import { UserEdit } from "./user-edit/UserEdit";
import { UserDelete } from "./user-delete/UserDelete";
import { UserCreate } from "./user-create/UserCreate";



export const UserList = ({
    users,

}) => {

    const [userAction, setUserAction] = useState({ user: null, action: null });

    const userActionClickHandler = (id, actionType) => {
        userService.getOne(id)
            .then(user => {
                setUserAction({
                    user,
                    action: actionType
                })
            })
    }

    const createUserOpenHandler = () => {
        setUserAction({
            action: UserActions.Add
        })
    }


    const userCreateHandler = (userData) => {
        
        // console.log(JSON.stringify(userData))
        userService.create(userData)
            .then(user => {
                console.log(user)
                onCloseHandler()
            })

    }



    const onCloseHandler = () => {
        setUserAction({ user: null, action: null })
    }

    return (
        // Table component
        <Fragment>
            <div className="table-wrapper">

                {/* Overlap components go here! TODO!  */}

                {userAction.action === UserActions.Details && <UserDetails user={userAction.user} onClose={onCloseHandler} />}
                {userAction.action === UserActions.Edit && <UserEdit user={userAction.user} onClose={onCloseHandler} />}
                {userAction.action === UserActions.Delete && <UserDelete user={userAction.user} onClose={onCloseHandler} />}
                {userAction.action === UserActions.Add && <UserCreate onUserCreate={userCreateHandler} onClose={onCloseHandler} />}

                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                Image
                            </th>
                            <th>
                                First name<svg aria-hidden="true" focusable="false" data-prefix="fas"
                                    data-icon="arrow-down" className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Last name<svg aria-hidden="true" focusable="false" data-prefix="fas"
                                    data-icon="arrow-down" className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Email<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Phone<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Created
                                <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                    data-icon="arrow-down" className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Table row component */}
                        {users.map(user =>
                            <tr key={user._id}>
                                <UserItem
                                    user={user}
                                    onActionClick={() => userActionClickHandler}
                                />
                            </tr>)}


                    </tbody>
                </table>
            </div>
            <button onClick={createUserOpenHandler} className="btn-add btn">Add new user</button>
        </Fragment>
    );
}
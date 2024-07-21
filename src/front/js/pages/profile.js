import React, {useEffect, useContext} from "react";
import { Context } from "../store/appContext";

const Profile = () => {

    const token = localStorage.getItem("access-token")
    const {store, actions} = useContext(Context)

    useEffect(() => {
        if (token)actions.getUser()
    }, [])



    return(
        <div className="mt-5 pt-5">
            <h1 className="text-center">
                {token ? `Este es el perfeil de  ${store.user?.email}`
                : "Debe de logiarse o actualice la página para ver el profile."}
            </h1>
        </div>
    )
}

export default Profile
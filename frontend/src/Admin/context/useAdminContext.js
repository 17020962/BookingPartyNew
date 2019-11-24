import { useContext, useEffect } from "react";
import { AdminContext } from "./context";
import { postAPI, getAPI } from '../../Normal/shared/APICaller';

const useAdminContext = () => {
    const [state, dispatch] = useContext(AdminContext);

    useEffect(() => {

        getAPI('/users', function (res) {
            dispatch((draft) => {
                draft.allUser = res.data;
            })
        })

        getAPI('/restaurant-owners', function (res) {
            console.log(res.data);
            dispatch((draft) => {
                draft.allRestaurantOwer = res.data;
            })
        })

    }, [])

    function updateIsLogin(value) {
        dispatch((draft) => {
            draft.isLogin = value;
        })
    }

    function updateNavigationConfig(role) {

    }

    function updateTitleContent(title) {
        dispatch((draft) => {
            draft.titleContent = title;
        })
    }

    function updateAllUser(data) {
        dispatch((draft) => {
            draft.allUser = data;
        })
    }

    function updateAllRestaurantOwer(data) {
        dispatch((draft) => {
            draft.allRestaurantOwer = data
        })
    }

    function updateMapPicker(data){
        dispatch((draft)=>{
            draft.mapPicker = data;
        })
    }

    return {
        ...state,
        updateNavigationConfig,
        updateIsLogin,
        updateTitleContent,
        updateAllUser,
        updateAllRestaurantOwer,
        updateMapPicker
    };
};

export { useAdminContext };
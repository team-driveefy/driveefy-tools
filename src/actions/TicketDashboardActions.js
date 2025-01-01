import axios from 'axios';

export const getAllCustomerTickets = () => async (dispatch) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/admin/panel/ticketlist`, {
            headers: {
                "Content-type": "application/json",
            }
        });

        if(response.status===200){
            console.log(response.data);
            dispatch({ type: 'GET_USER_WITH_WILLS_SUCCESS', payload: response.data });
        }
        
    } catch (error) {
        dispatch({ 
            type: 'GET_USER_WITH_WILLS_FAILURE',
            payload: error.message,
         });
    }
};
import axios from 'axios';

export const getAllCustomerTickets = () => async (dispatch) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/admin/panel/ticketlist`, {
            headers: {
                "Content-type": "application/json",
            }
        });

        if(response.status===200){
            dispatch({ type: 'GET_USER_WITH_WILLS_SUCCESS', payload: response.data.data });
        }
        
    } catch (error) {
        dispatch({ 
            type: 'GET_USER_WITH_WILLS_FAILURE',
            payload: error.message,
         });
    }
};


export const updateTicketStatus = (ticketId) => async (dispatch) => {
    try {
        const response = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/admin/panel/ticketstatus/${ticketId}`,{},
        {
            headers: {
                "Content-type": "application/json",
            }
        });

        if(response.status===200){
            dispatch({ type: 'UPDATE_TICKET_STATUS_SUCCESS', payload: response.data.data });
        }
        
    } catch (error) {
        dispatch({
            type: 'UPDATE_TICKET_STATUS_FAILURE',
            payload: error.message,
         });
    }
}
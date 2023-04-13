import * as api from '../../api';

export const signInAction = (signInData, navigate) => async (dispatch) => {
    console.log(signInData)
    try {
        const { data } = await api.signIn(signInData);


        dispatch({ type: 'AUTH', data });
        navigate('/dashboard');
    } catch (error) {
        console.log(error);
    }
};
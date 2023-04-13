import * as api from '../../api';

export const signUpAction = (signUpData, navigate) => async(dispatch) => {
    //do something
    console.log(signUpData);
    try {
        const { data } = await api.signUp(signUpData);

        dispatch({ type: 'AUTH', data});
        navigate('/dashboard') //navigate to user dashboard
    } catch (error) {
        console.log(error);
    }
}
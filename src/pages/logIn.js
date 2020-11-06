import Header from '../components/header';
import FormBackground from '../components/formBackground';
import Form from '../components/form';

function LogIn() {
    return(
        <>
            <Header />
            <FormBackground />
            <Form title="Sign in to ChatApp" button="Sign In" fields={[['Email', 'email', 'email'], ['Password', 'password', 'password']]}/>
        </>
    )
}

export default LogIn;
import Header from '../components/header';
import FormBackground from '../components/formBackground';
import Form from '../components/form';

function SignUp() {
    return(
        <>
            <Header />
            <FormBackground />
            <Form title="Create your account" button="Create Account" fields={[['Name', 'name', 'text'], ['Email', 'email', 'email'], ['Password', 'password', 'password'], ['Repeat Password', 'rpassword', 'password']]}/>
        </>
    )
}

export default SignUp;
import Card from '../components/UI/Card/Card';

const RegisterPage = () => {

    return (
        <div  style={{backgroundColor:'#E5E4E2', height: '100vh',  justifyContent: 'center', textAlign:'center', display: 'flex'}}>
            <Card login={false} />
        </div>
    );
};

export default RegisterPage;
import Card from '../components/UI/Card/Card';

const LoginPage = () => {


    return (
        <div  style={{backgroundColor:'#E5E4E2', height: '100vh',  justifyContent: 'center', textAlign:'center', display: 'flex'}}>
            <Card login={true} />
        </div>
    );
};

export default LoginPage;
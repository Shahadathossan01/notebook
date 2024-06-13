import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
const GetTouch = () => {
    return (
        <div style={{textAlign:'center',color:'white',backgroundColor:'#696969',padding:'10px'}}>
            <h1>Get in Touch</h1>
            <p>Got any questions? Feel free to get in touch with us. We would love to hear from you.</p>
            <form>
                <div>
                    <input style={{padding:'5px 5px',fontSize:'20px',width:'40%',marginBottom:'5px'}} placeholder="name"  type="text" name="name" id="name" />
                </div>
                <div>
                    <input style={{padding:'5px 5px',fontSize:'20px',width:'40%',marginBottom:'5px'}} placeholder="email" type="email" name="email" id="email" />
                </div>
                <div>
                    <textarea style={{padding:'5px 5px',fontSize:'20px',width:'40%',marginBottom:'5px'}}placeholder="message"></textarea>
                </div>
            </form>
            <div>
                <TwitterIcon></TwitterIcon>
                <FacebookIcon></FacebookIcon>
                <GoogleIcon></GoogleIcon>
            </div>
        </div>
    );
};

export default GetTouch;
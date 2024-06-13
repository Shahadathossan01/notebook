
import imag1 from '../../../../images/nootbook.jpg'
import { Button } from '@mui/material';
const BestIdeaSection = () => {
    return (
        <div>
            <div style={{         
                backgroundImage:`url(${imag1})`,
                height:'60vh',
                width:'100%',
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center',
                position:'relative',
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
                }}>
                <div style={{position:'absolute',color:'#9ACD32',display:'flex',justifyContent:'center',alignItems:'center',height:'300px'}}>
                    <div style={{textAlign:'center'}}>
                        <h1>Best Ideas Starts On Project</h1>
                        <p>When you work a project first you need to do the ToDo list.That is the main work for starting a new project.</p>
                        <Button variant='contained'>Order Now</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestIdeaSection;
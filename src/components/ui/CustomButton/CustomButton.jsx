
import Button from '@mui/material/Button';

const CustomButton=({content,btnColor})=>{
  return (

      <Button  style={{width:'100%',backgroundColor:`${btnColor}`}} variant="contained">
        {content}
      </Button>
      
  );
}
export default CustomButton;

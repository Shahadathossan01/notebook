import CustomButton from "../../ui/CustomButton/CustomButton";


const PricingCard = ({item}) => {
    console.log(item)
    const {bodyColor}=item
    console.log(bodyColor)
    return (
        <div style={{width:'30%',minWidth:'200px'}}>
            <div>
                <CustomButton btnColor={item.titleBackgroud} content={item.title}></CustomButton>
                <div style={{backgroundColor:`${bodyColor}`,marginTop:'-12px'}}>
                    <h5>{item.duration}</h5>
                    <h5>{item.quantity}</h5>
                    <h5>{item.user}</h5>
                    <h5>{item.shares}</h5>
                </div>
                <CustomButton btnColor={item.titleBackgroud} content={item.buttonContent}></CustomButton>
            </div>

        </div>
    );
};

export default PricingCard;
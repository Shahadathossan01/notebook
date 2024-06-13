import PricingCard from "../PricingCard/PricingCard";


const FlexiblePricing = () => {
    const pricingData=[
        {
            id:'1',
            title:'Forever Free',
            titleBackgroud:'#808080',
            bodyColor:'#F8F8FF',
            duration:'$0/month',
            quantity:'1 Notebook',
            user:'3 Users',
            shares:'100 Shares',
            buttonContent:'Sign Up'
        },
        {
            id:'2',
            title:'Professional',
            subTitle:'Most popular',
            titleBackgroud:'#228B22',
            bodyColor:'#DCDCDC',
            duration:'$20/month',
            quantity:'20 Notebook',
            user:'100 Users',
            shares:'Unlimited Shares',
            buttonContent:'Buy Now'
        },
        {
            id:'3',
            title:'Enterprice',
            titleBackgroud:'#20B2AA',
            bodyColor:'#FFF5EE',
            duration:'$100/month',
            quantity:'100 Notebook',
            user:'Unlimited Users',
            shares:'Unlimited Shares',
            buttonContent:'Buy Now'
        },

    ]
    return (
        <div style={{textAlign:'center'}}>
            <h1>Flexible pricing plans to fulfil your needs and solve your problems</h1>
            <p>Revolutionary noteboke with eco-friendly paper. Advanced surface technology and digital sharing integration</p>
            <div style={{display:'flex',gap:'20px',justifyContent:'center',flexWrap:'wrap'}}>
            {
                pricingData.map((item=><PricingCard key={item.id} item={item}></PricingCard>))
            }
            </div>
            <p>If you have got any questions related to pricing please get in touch with us using the form below.</p>
        </div>
    );
};

export default FlexiblePricing;
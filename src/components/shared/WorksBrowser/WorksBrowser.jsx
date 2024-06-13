import img from '../../../../images/browser.jpg'
const WorksBrowser = () => {
    return (
        <div style={{textAlign:'center',backgroundColor:'#20B2AA'}}>
            <h1>Works on any browser</h1>
            <p>Our product works on any drowser.This is the main theme of our team.</p>
            <img style={{width:'50%'}} src={img} alt="" />
        </div>
    );
};

export default WorksBrowser;
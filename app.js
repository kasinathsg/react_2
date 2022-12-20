const container = document.getElementById("react-container");

// Functional component
const Container = ()=>{
    return (
        <div>
            Hello! Welcome to Kalvium
            <div>Let's rock and roll - this is babel</div>
        </div>
    )
}
// ReactDOM.render(<Container />,container)

//Class component
class ReactContainer extends React.Component{
    render(){
        return (
            <div>
                Hello! Welcome to Kalvium
                <div>Let's rock and roll - this is babel</div>
            </div>
        );
    }
}
ReactDOM.render(<ReactContainer />,container)
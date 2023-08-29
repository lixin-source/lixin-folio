import loader from "../assets/imgs/spin1.gif";

const Loading = () => {
    return (
      <div className="loading">
        <img src={loader}/>
        <h1>Loading...</h1>
      </div>
    );
  };
  
  export default Loading;
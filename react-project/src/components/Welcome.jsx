//function Welcome(props) { either use props or name
function Welcome({name}){
return (
    <div>
      <h1>Welcome to my React App!</h1>
     { /*<p> <h3>{props.name}</h3>*/} 
      <h3>{name}</h3>
    </div>
  );
}
export default Welcome;
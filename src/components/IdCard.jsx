export default function IdCard(props) {
   return <div>
     <div className="idCards">
    
     <img height={140} src={props.info.picture}></img>
   
      <div>
      <p><b>First name: </b>{props.info.lastName}</p>
      <p><b>Last name: </b>{props.info.firstName}</p>
      <p><b>Gender: </b>{props.info.gender}</p>
      <p><b>Height: </b> {props.info.height}</p>
      <p><b>Birth: </b>{props.info.birth}</p>
      </div>

     </div>
   
   
   
   
   
   
   
   </div>;



}

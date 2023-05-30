export default function Greetings(props){

    return (
        props.lang === "de" && <p>Hallo {props.children}</p> ||
        props.lang ==="fr" && <p>Bonjour {props.children}</p>
    )
}
   
   
   

  
    

      

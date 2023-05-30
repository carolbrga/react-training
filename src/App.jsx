import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";


function App() {
const arrayPeople = [
   {
  lastName:'Doe',
  firstName:'John',
  gender:'male',
  height: 1.78,
  birth: "1992-07-14",
  picture: "https://randomuser.me/api/portraits/men/44.jpg",
   },
   {
   lastName:'Delores ',
  firstName:'Obrien',
  gender:'female',
  height: 1.72,
  birth: "1988-05-11",
  picture: "https://randomuser.me/api/portraits/women/44.jpg",
   }];

 

 return (
      <div>
         <h1>React Training</h1>
         
         <IdCard info={arrayPeople[0]} />
         <IdCard info={arrayPeople[1]} /> 
                 

<div className="greetings">
 <Greetings className="greetings" lang="de">Ludwig</Greetings>
</div>
 <div className="greetings">
   <Greetings className="greetings"lang="fr">François</Greetings>  
</div>
   
<Random min={1} max={6}/>
<Random min={1} max={100}/>
















      </div>
   );
}

export default App;

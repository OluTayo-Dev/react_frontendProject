import { useState } from "react";
import '../App.css'


 function Home() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) =>{
      if(selected===i){
        return setSelected(null)
      }
      setSelected(i)
  }
  return (
        <div className="wrapper">
       <div className="accordion">
        {data.map((item,i) =>(
        <div className="item">
              <div className="title" onClick={()=> toggle(i)}>
                <h4 className="quest">{item.question}</h4>
                <span>{selected === i ?  '-' : '+'}</span>
                 <div className=
                 {selected === i ? 'contentShow' : 'content'}
                 >
                  <div className="answer">
                  {item.answer}
                  </div>
                  </div>
              </div>
           </div>
        ))};
       </div>
      </div>
    );
}


const data =[
 { 
  question:"Question1",
  answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
 },

{
  question:"Question2",
  answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
},
{
  question:"Question3",
  answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
},

{ 
  question:"Question4",
  answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"

},

]


export default Home;

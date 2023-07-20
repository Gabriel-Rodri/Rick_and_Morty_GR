import Card from "../card/Card";
import './Cards.css'

export default function Cards({characters, onClose, seteandoTitle}) {
   console.log(characters)
  return (
    <div className="cards">
      {
         characters?.map((char)=>{
            return <Card  key={char.id} char={char} onClose={onClose} seteandoTitle={seteandoTitle}/>
         })
      }
    </div>
  );
}

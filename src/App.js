import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [filter, setFilter] = useState("");
  const [selectedRunes, setSelectedRunes] = useState(JSON.parse(localStorage.getItem("runes")) || []);

  useEffect(() => {
    localStorage.setItem("runes", JSON.stringify(selectedRunes));
  }, [selectedRunes])

  const changeFilter = (e) => {
    setFilter(e.target.value);
  }

  const changeRunes = (rune) => {
    if(selectedRunes.includes(rune))
      setSelectedRunes(selectedRunes.filter(r => r !== rune))
    else
      setSelectedRunes([...selectedRunes, rune])
  }

  let words = [{
    "word": "Ros Ros Mer Ami Dom",
    "description": "8% physical damage"
  }, {
    "word": "Gil Gil Sex Zer Vte",
    "description": "8% holy damage"
  }, {
    "word": "Gal Gal Ask Sev Ral",
    "description": "8% death damage"
  }, {
    "word": "Ela Ela Kir Ger Ist",
    "description": "8% energy damage"
  }, {
    "word": "The The Eli Kar Bur",
    "description": "8% earth damage"
  }, {
    "word": "Xar Xar Der Bas Say",
    "description": "8% fire damage"
  }, {
    "word": "Imr Imr Fuk Vsi Dev",
    "description": "8% ice damage"
  }, {
    "word": "Ami Ami Mer Ros Dom",
    "description": "4% physical abosrb"
  }, {
    "word": "Zer Zer Sex Gil Vte",
    "description": "4% holy absorb"
  }, {
    "word": "Sev Sev Ask Gal Ral",
    "description": "4% death absorb"
  }, {
    "word": "Ger Ger Kir Ela Ist",
    "description": "4% energy absorb"
  }, {
    "word": "Kar Kar The Eli Bur",
    "description": "4% eath absorb"
  }, {
    "word": "Bas Bas Der Xar Say",
    "description": "4% fire absorb"
  }, {
    "word": "Vsi Vsi Fuk Imr Dev",
    "description": "4% ice absorb"
  }, {
    "word": "Dom Dom Mer Ros Ami",
    "description": "4% to reflect 100% physical dmg"
  }, {
    "word": "Vte Vte Sex Gil Zer",
    "description": "4% to reflect 100% holy dmg"
  }, {
    "word": "Ral Ral Ask Gal Sev",
    "description": "4% to reflect 100% death damage"
  }, {
    "word": "Ist Ist Kir Ela Ger",
    "description": "4% to reflect 100% energy dmg"
  }, {
    "word": "Say Say Der Xar Bas",
    "description": "4% to reflect 100% fire dmg"
  }, {
    "word": "Dev Dev Fuk Imr Vsi",
    "description": "4% to reflect 100% ice damage"
  }, {
    "word": "Mer Ros Ami Dom Vol",
    "description": "2% phys dmg, 2% phys absorb, 2% to reflect 100% phys dmg"
  }, {
    "word": "Kir Ela Ger Ist Gol",
    "description": "2% energy dmg, 2% energy absorb, 2% to reflect 100% energy dmg"
  }, {
    "word": "Der Xar Bas Say Zua",
    "description": "2% fire dmg, 2% fire absorb, 2% to reflect 100% fire dmg"
  }, {
    "word": "Vol Szu Zua Gol Imr",
    "description": "10% Dmg dragons"
  }, {
    "word": "Vol Szu Zua Gol Xar",
    "description": "10% Dmg  animals"
  }, {
    "word": "Vol Szu Zua Gol Eli",
    "description": "10% Dmg  minos"
  }, {
    "word": "Vol Szu Zua Gol Gal",
    "description": "10% Dmg orcs"
  }, {
    "word": "Vol Szu Zua Gol Ela",
    "description": "10% Dmg giants"
  }, {
    "word": "Vol Szu Zua Gol Hil",
    "description": "10% Dmg Demons"
  }, {
    "word": "Vol Szu Zua Gol Gil",
    "description": "10% Dmg undead"
  }, {
    "word": "Vol Szu Zua Gol Mer",
    "description": "10% Dmg humans"
  }, {
    "word": "Vol Ger Hal Gol Zua",
    "description": "20 armor"
  }, {
    "word": "Vol Vol Gar Gar Zua",
    "description": "40 armor"
  }, {
    "word": "Vol Gar Hal Gol Hil",
    "description": "+20 speed"
  }, {
    "word":"Vol Vir Vir Hil Hil",
    "description": "+40 speed"
  }, {
    "word": "Vol Vol Vir Vir Szu",
    "description": "5% crit"
  }, {
    "word": "Vir Zua Zua Gol Gol",
    "description": "+50 hp and mana"
  }, {
    "word":"Ant Vir Gol Gol Hil",
    "description": "+100 mana"
  }]
  words.forEach(v => v.word = v.word.toLocaleLowerCase());
  const runes = ["ami","ant","ask","bas","bur","der","dev","dom","ela","eli","fuk","gal","gar","ger","gil","gol","hal","hil","imr","ist","kar","kir","mer","ral","ros","say","sev","sex","szu","the","vir","vol","vsi","vte","xar","zer","zua"];

  return (
    <div className="App">
      <input type="text" value={filter} onChange={changeFilter}/>
      <div className="wrapper">
        <div className="inputs">
            { runes.filter(rune => rune.includes(filter)).map(rune => 
                <div className="select" onClick={() => changeRunes(rune)}>
                  <input type="checkbox" checked={selectedRunes.includes(rune)}/> {rune}
                </div>
              ) 
            }
        </div>
        <div className="words">
            {
              words.map(word => ({...word, missingWords: word.word.split(" ").filter(r => selectedRunes.includes(r))})).sort((word1, word2) => word2.missingWords.length - word1.missingWords.length).map(word => 
                <div style={{display: "flex"}}>
                  <div style={{width: "200px", textTransform: "capitalize"}}>
                    { word.word.split(" ").map(r => word.missingWords.includes(r)? r+" " : <span className="red">{r} </span>) }
                  </div>
                  <div style={{}}>{ word.description }</div>
                </div>
              )
            }
        </div>
      </div>
    </div>
  );
}

export default App;

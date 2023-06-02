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
  let words = [
    {
        "word": "Xar Xar Der Bas Say",
        "description": "8% fire increment"
    },
    {
        "word": "Bas Bas Der Xar Say",
        "description": "4% fire absorb"
    },
    {
        "word": "Say Say Der Xar Bas",
        "description": "4% fire reflect"
    },
    {
        "word": "Der Xar Bas Say Zua",
        "description": "2% fire increment, 2% fire absorb, 2% fire reflect"
    },
    {
        "word": "Der Der Xar Bas Say",
        "description": "6% fire convert"
    },
    {
        "word": "Ros Ros Mer Ami Dom",
        "description": "8% physical increment"
    },
    {
        "word": "Ami Ami Mer Ros Dom",
        "description": "4% physical absorb"
    },
    {
        "word": "Dom Dom Mer Ros Ami",
        "description": "4% physical reflect"
    },
    {
        "word": "Mer Ros Ami Dom Vol",
        "description": "2% physical increment, 2% physical absorb, 2% physical reflect"
    },
    {
        "word": "Mer Mer Ros Ami Dom",
        "description": "6% physical convert"
    },
    {
        "word": "Eli Eli The Kar Bur",
        "description": "8% earth increment"
    },
    {
        "word": "Kar Kar The Eli Bur",
        "description": "4% earth absorb"
    },
    {
        "word": "Bur Bur The Kar Bur",
        "description": "4% earth reflect"
    },
    {
        "word": "The Eli Kar Bur Vir",
        "description": "2% earth increment, 2% earth absorb, 2% earth reflect"
    },
    {
        "word": "The The Eli Kar Bur",
        "description": "6% earth convert"
    },
    {
        "word": "Ela Ela Kir Ger Ist",
        "description": "8% energy increment"
    },
    {
        "word": "Ger Ger Kir Ela Ist",
        "description": "4% energy absorb"
    },
    {
        "word": "Ist Ist Kir Ela Ger",
        "description": "4% energy reflect"
    },
    {
        "word": "Kir Ela Ger Ist Gol",
        "description": "2% energy increment, 2% energy absorb, 2% energy reflect"
    },
    {
        "word": "Kir Kir Ela Ger Ist",
        "description": "6% energy convert"
    },
    {
        "word": "Gil Gil Sex Zer Vte",
        "description": "8% holy increment"
    },
    {
        "word": "Zer Zer Sex Gil Vte",
        "description": "4% holy absorb"
    },
    {
        "word": "Vte Vte Sex Gil Zer",
        "description": "4% holy reflect"
    },
    {
        "word": "Sex Gil Zer Vte Ant",
        "description": "2% holy increment, 2% holy absorb, 2% holy reflect"
    },
    {
        "word": "Sex Sex Gil Zer Vte",
        "description": "6% holy convert"
    },
    {
        "word": "Imr Imr Fuk Vsi Dev",
        "description": "8% ice increment"
    },
    {
        "word": "Vsi Vsi Fuk Imr Dev",
        "description": "4% ice absorb"
    },
    {
        "word": "Dev Dev Fuk Imr Vsi",
        "description": "4% ice reflect"
    },
    {
        "word": "Fuk Imr Vsi Dev Gar",
        "description": "2% ice increment, 2% ice absorb, 2% ice reflect"
    },
    {
        "word": "Fuk Fuk Imr Vsi Dev",
        "description": "6% ice convert"
    },
    {
        "word": "Gal Gal Ask Sev Ral",
        "description": "8% death increment"
    },
    {
        "word": "Sev Sev Ask Gal Ral",
        "description": "4% death absorb"
    },
    {
        "word": "Ral Ral Ask Gal Sev",
        "description": "4% death reflect"
    },
    {
        "word": "Ask Gal Sev Ral Hil",
        "description": "2% death increment, 2% death absorb, 2% death reflect"
    },
    {
        "word": "Ask Ask Gal Sev Ral",
        "description": "6% death convert"
    },
    {
        "word": "Vol Hal Hal Zua Zua",
        "description": "10% healing increment"
    },
    {
        "word": "Vol Szu Zua Gol Imr",
        "description": "10% dragon damage"
    },
    {
        "word": "Vol Szu Zua Gol Xar",
        "description": "10% animal damage"
    },
    {
        "word": "Vol Szu Zua Gol Eli",
        "description": "10% minotaur damage"
    },
    {
        "word": "Vol Szu Zua Gol Gal",
        "description": "10% orc damage"
    },
    {
        "word": "Vol Szu Zua Gol Ela",
        "description": "10% giant damage"
    },
    {
        "word": "Vol Szu Zua Gol Hil",
        "description": "10% demon damage"
    },
    {
        "word": "Vol Szu Zua Gol Gil",
        "description": "10% undead damage"
    },
    {
        "word": "Vol Szu Zua Gol Mer",
        "description": "10% human damage"
    },
    {
        "word": "Ant Vir Zua Zua Gol",
        "description": "+100 health stat"
    },
    {
        "word": "Ant Vir Gol Gol Hil",
        "description": "+100 mana stat"
    },
    {
        "word": "Vir Zua Zua Gol Gol",
        "description": "+50 health stat, +50 mana stat"
    },
    {
        "word": "El The Zer Ter Hil",
        "description": "+80 health stat, 10 speed"
    },
    {
        "word": "Ger Bas Ami Dom Hal",
        "description": "+25 health stat, +25 mana stat, 10 speed, 5 luck"
    },
    {
        "word": "Dev Ral Fuk Ela Say",
        "description": "+15 health stat, +45 mana stat, 3 strength skill, 3 wisdom skill"
    },
    {
        "word": "Zer Ant Gar Hal Gol",
        "description": "+35 health stat, +20 mana stat, 2 strength skill, 2 dexterity skill, 2 condition skill, 2 wisdom skill, 2 vigor skill"
    },
    {
        "word": "Ami Ral Gil Dom Vir",
        "description": "+60 health stat, 2 strength skill, 2 dexterity skill, 2 condition skill, 2 wisdom skill, 2 vigor skill"
    },
    {
        "word": "Dev Sev Zua Gol Ger",
        "description": "+10 health stat, 5 strength skill, 5 dexterity skill, 5 condition skill, 5 wisdom skill, 5 vigor skill, -25 speed"
    },
    {
        "word": "Ant Ral Vol Gar Imr",
        "description": "-100 health stat, 30 criticalhitchance, 8 criticalhitmulti, 3 doublehit, true decreasearmor"
    },
    {
        "word": "El El Szu Bur Kar",
        "description": "+10 strength skill"
    },
    {
        "word": "Vol Vir Vir Hil Hil",
        "description": "40 speed"
    },
    {
        "word": "Vol Gar Hal Gol Hil",
        "description": "20 speed"
    },
    {
        "word": "Vol Ger Hal Gol Zua",
        "description": "20 armor (?)"
    },
    {
        "word": "Vol Vol Gar Gar Zua",
        "description": "20 armor (40?)"
    },
    {
        "word": "Vol Gar Hal Gol Zua",
        "description": "10 armor"
    },
    {
      "word": "Vol Vol Vir Vir Szu",
      "description": "3 critical hit chance"
    },
    {
        "word": "Vol Vol Ter Vir Szu",
        "description": "2 critical hit chance"
    },
    {
        "word": "Szu Szu Vol Vir Vir",
        "description": "20 critical hit multi"
    },
    {
        "word": "Vol Gil Ral The Bur",
        "description": "1 lifesteal"
    },
    {
        "word": "Szu Ant Gol Ros Vir",
        "description": "1 manasteal"
    },
    {
      "word": "Ni Ni The Kar Bur",
      "description": "8% turrets damage"
    },
  ];
  words.forEach(v => v.word = v.word.toLocaleLowerCase());
  const runes = ["ami","ant","ask","bas","bur","der","dev","dom","ela","eli","fuk","gal","gar","ger","gil","gol","hal","hil","imr","ist","kar","kir","mer","ni","ral","ros","say","sev","sex","szu","the","vir","vol","vsi","vte","xar","zer","zua"];

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

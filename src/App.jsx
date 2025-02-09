import { useState } from 'react'
import './App.css'

const phrases = [
  "No 🙉",
  "Are you sure?",
  "Really Sure😢",
  "I'll be very sad😕",
  "Pookie Please🥺",
  "Don't do this to me🫤",
  "You are breaking my heart😭💔",
  "Pookie, you're my last hope😟",
  "Can't we find a compromise?😖",
  "Think of all the good times we've had👫",
  "Isn't there anything I can say to change your mind?🗣️",
  "I promise to make it up to you, whatever it takes!🤲",
  "Just give me one more chance, please?🙏",
  "I don't know what I'd do without you😞",
  "This means everything to me🌍💔",
  "Say something, don't leave me hanging...😔",
  "Remember our promises to each other?💑",
  "Is there really no way to make this work?💭",
  "I'll do anything, just don't say it's over...🆘",
  "Please... I'm begging you...😢🙏.",
  "I'm gonna cry..😭"
]

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;


  function handleYesClick() {
    setYesPressed(true)
  }
  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className='valentine-container'>
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="bear-Kissing" />
          <div className='text'>Yayyy !!!</div>
        </>
      ) : (
        <>
          <img className='kiss' src="https://media1.tenor.com/m/al4a1pG1f8YAAAAC/jump-bear.gif" alt="bear with heart" />
          <div className='text'>Will you be my valentine 🌹?</div>
          <div className='both-Button'>
            <button className='yesButton'
              style={{ fontSize: yesButtonSize, backgroundColor: 'rgb(248, 229, 89)' }}
              onClick={handleYesClick}
            >
              Yes 🙈
            </button>
            <button
              className='NoButton'
              style={{}}
              onClick={handleNoClick}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

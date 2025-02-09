
import { useReducer, useEffect } from 'react';
import { reducer } from './reducer/reducer.js';
import Title from './components/title/Title';
import Rows from './components/rows/Rows';
import ColorPick from './components/colorpick/ColorPick';
import Credits from './components/credits/Credits'
import Buttons from './components/buttons/Buttons';
import Rules from './components/rules/Rules';
import GameEnds from './components/gameEnds/GameEnds';
import { initGameState, checkGameState } from './helper.js';
import './App.css';
import AppContext  from './components/contexts/Context';
import { setGameState } from './reducer/actions.js';

const App = () => {

  const [appState,dispatch] = useReducer(reducer, initGameState())

  useEffect(() => {
    const gameState = checkGameState(appState.hints, appState.currentRow-1)
    
    if (gameState === appState.gameState)
      return
    else
      dispatch(setGameState(gameState))

  }, [appState.currentRow])

  return <AppContext.Provider value={[appState, dispatch]}>
    <div className = 'app'>
      <Title/>
      <div className = 'board'>
        <Rows/>
        <ColorPick/>
        <Buttons/> 
        <GameEnds/>
      </div>
      <Rules/>
      <Credits/>
    </div>
  </AppContext.Provider>
  
}

export default App

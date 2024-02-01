import {Component} from 'react'
import {
  AppContainer,
  MainScoreBoard,
  MainScoreHeading,
  ScoreContainer,
  ScoreText,
  ScoreCount,
  GamePlayingView,
  ResultView,
  PlayerContainer,
  PlayersItem,
  PlayerText,
  PlayerSelectSymbol,
  ResultTest,
  PlayAgain,
} from './styledComponents'

import GameButtonItem from '../GameButtonItem'
import RulesPopUpButton from '../RulesPopupButton'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RockPaperScissors extends Component {
  state = {
    score: 0,
    isGameOver: false,
    opponentSelected: choicesList[Math.floor(Math.random() * 3)],
    playerSelected: {},
    matchResult: '',
  }

  playerSelection = selectedItem => {
    const {opponentSelected} = this.state
    if (selectedItem.id === opponentSelected.id) {
      this.setState({
        playerSelected: selectedItem,
        isGameOver: true,
        matchResult: 'IT IS DRAW',
      })
    } else if (
      (selectedItem.id === 'ROCK' && opponentSelected.id === 'SCISSORS') ||
      (selectedItem.id === 'PAPER' && opponentSelected.id === 'ROCK') ||
      (selectedItem.id === 'SCISSORS' && opponentSelected.id === 'PAPER')
    ) {
      this.setState(prevState => ({
        playerSelected: selectedItem,
        isGameOver: true,
        matchResult: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else {
      this.setState(prevState => ({
        playerSelected: selectedItem,
        isGameOver: true,
        matchResult: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    }
  }

  renderGameView = () => (
    <GamePlayingView>
      {choicesList.map(eachItem => (
        <GameButtonItem
          key={eachItem.id}
          gameButtonDetails={eachItem}
          playerSelection={this.playerSelection}
        />
      ))}
    </GamePlayingView>
  )

  onPlayAgain = () => {
    this.setState({
      isGameOver: false,
      playerSelected: {},
      opponentSelected: choicesList[Math.floor(Math.random() * 3)],
      matchResult: '',
    })
  }

  renderResultView = () => {
    const {playerSelected, opponentSelected, matchResult} = this.state
    return (
      <ResultView>
        <PlayerContainer>
          <PlayersItem>
            <PlayerText>YOU</PlayerText>
            <PlayerSelectSymbol
              src={playerSelected.imageUrl}
              alt="your choice"
            />
          </PlayersItem>
          <PlayersItem>
            <PlayerText>OPPONENT</PlayerText>
            <PlayerSelectSymbol
              src={opponentSelected.imageUrl}
              alt="opponent choice"
            />
          </PlayersItem>
          <ResultTest>{matchResult}</ResultTest>
          <PlayAgain type="button" onClick={this.onPlayAgain}>
            Play Again
          </PlayAgain>
        </PlayerContainer>
      </ResultView>
    )
  }

  render() {
    const {score, isGameOver, opponentSelected} = this.state
    console.log(opponentSelected)
    return (
      <AppContainer>
        <MainScoreBoard>
          <MainScoreHeading>
            ROCK
            <br />
            PAPER
            <br />
            SCISSORS
          </MainScoreHeading>
          <ScoreContainer>
            <ScoreText>Score</ScoreText>
            <ScoreCount>{score}</ScoreCount>
          </ScoreContainer>
        </MainScoreBoard>
        {isGameOver ? this.renderResultView() : this.renderGameView()}
        <RulesPopUpButton />
      </AppContainer>
    )
  }
}

export default RockPaperScissors

import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #223a5f;
  height: 100vh;
  padding: 5px;
`
export const MainScoreBoard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 13px 25px;
  border-radius: 10px;
  border: 2px solid #ffffff;
`
export const MainScoreHeading = styled.h1`
  font-size: 25px;
  color: #ffffff;
  font-weight: 100;
  font-family: Bree Serif;
`
export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 1px 20px;
`
export const ScoreText = styled.p`
  font-size: 30px;
  color: #223a5f;
  margin: 0;
  font-family: Bree Serif;
`

export const ScoreCount = styled.p`
  font-size: 55px;
  color: #223a5f;
  margin: 0;
  font-family: 'Roboto';
`
export const GamePlayingView = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 65px;
  width: 400px;
  padding: 0px;
`
export const ResultView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 25px;
`
export const PlayersItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const PlayerText = styled.div`
  color: #ffffff;
`
export const PlayerSelectSymbol = styled.img`
  width: 150px;
`

export const ResultTest = styled.p`
  color: #ffffff;
`
export const PlayAgain = styled.button`
  color: #223a5f;
  background-color: #ffffff;
  font-family: Bree Serif;
  border: none;
  border-radius: 5px;
`

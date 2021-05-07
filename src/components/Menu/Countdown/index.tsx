import React, { useContext } from 'react'
import styled from 'styled-components'

const Alert = styled.div`
  position: absolute;
  top: 84px;
  left: 328px;
  right: 88px;
  width: calc(100vw - 416px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 64px 16px 64px;
  box-sizing: border-box;
  z-index: 1000;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 25px;
`;

const CountdonwTypography = styled.div`
  font-weight: 900;
  font-size: 2rem;
  margin-bottom: 16px;
`;

const SubTitle = styled.div`
  font-size: 1.4rem;
`;

const Title = styled.div`
  font-weight: 900;
  font-size: 2rem;
  margin-bottom: 16px
`;

const Message = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
`;

const SETTLE_TIME = 1620475681;

const getTimeFormat = seconds => {
  const hour = Math.floor(seconds / 3600);
  const min = Math.floor((seconds - (hour * 3600)) / 60);
  const sec = seconds - (hour * 3600) - (min * 60);

  return `${hour > 9 ? hour : `0${hour}`} : ${min > 9 ? min : `0${min}`} : ${sec > 9 ? sec : `0${sec}`}`;
}

const Countdown = () => {
  const [countdown, setCountdown] = React.useState(SETTLE_TIME - Math.floor(new Date().getTime() / 1000));
  const [started, setStarted] = React.useState(false);

  const countDownTime = React.useCallback(() => {
    if (started) return

    setInterval(() => {
      setCountdown(prev => prev === 0 ? prev : prev - 1)
    }, 1000)
  }, [started])

  React.useEffect(() => {
    setStarted(true);
    countDownTime()
  }, [countDownTime])

  return (
    <Alert>
      <Title>
        FARMING ONLINE ON
      </Title>
      <CountdonwTypography>{getTimeFormat(countdown)}</CountdonwTypography>
      <Message>THANKS TO BEEFY WE HAVE SOLVED</Message>
    </Alert>
  )
}

export default Countdown;

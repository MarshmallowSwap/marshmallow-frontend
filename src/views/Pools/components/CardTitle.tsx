import styled from 'styled-components'

interface StyledTitleProps {
  isFinished?: boolean
  isApe?: boolean
}

const CardTitle = styled.div<StyledTitleProps>`
  color: ${({ isFinished, theme }) => theme.colors[isFinished ? 'textDisabled' : 'text']};
  font-weight: 600;
  font-size: 24px;
  line-height: 1.1;
  padding-left: ${({ isApe }) => isApe ? '28px' : 0};
  margin-bottom: 14px;
`

export default CardTitle

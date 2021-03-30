import React from 'react'
import styled from 'styled-components'
import { BorderRad } from '../constants'
import { AvatarPlaceholder } from '../assets/images/Members/AvatarPlaceholder'

interface Props {
  avatarUri?: string | null
  className?: any
}

export const Avatar = React.memo(({ avatarUri, className }: Props) => {
  return avatarUri ? <AvatarImg src={avatarUri} className={className} /> : <AvatarPlaceholderImage />
})

export const AvatarImg = styled.img`
  border-radius: ${BorderRad.round};
  overflow: hidden;
`

export const AvatarPlaceholderImage = styled(AvatarPlaceholder)`
  width: 100%;
  height: 100%;
`

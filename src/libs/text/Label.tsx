import { View, Text } from 'react-native'
import React from 'react'
import AppText from './AppText'
import { heightPixel } from '@libs/styles/spaces'
import { fontSize } from '@libs/styles/fonts'
import { LabelType } from './types'

export default function Label(props:LabelType) {
  return (
    <AppText
        style={[{
            fontSize:fontSize.title,
            fontWeight:'400',
            marginBottom:heightPixel(3),
            marginTop:heightPixel(10),
        }, props.style]}
    >
        {props.label}
    </AppText>
  )
}
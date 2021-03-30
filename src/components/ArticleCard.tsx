import React from 'react'
import { ICardData } from '../interfaces/index'
import {
  CardsImage,
  CardsItemInfo,
  CardsItemLink,
  CardsPicWrap,
  CardsItemText
} from '../styles/pages/article/ArticleCardItems'

type Props = {
  item: ICardData
}

const ArticleCard: React.FC<Props> = ({ item }) => {
  return (
    <CardsItemLink href={item.path} target="_blank" rel="noopener noreferrer">
      <CardsPicWrap data-category={item.label}>
        <CardsImage src={item.src} />
      </CardsPicWrap>
      <CardsItemInfo>
        <CardsItemText>{item.text}</CardsItemText>
      </CardsItemInfo>
    </CardsItemLink>
  )
}

export default ArticleCard

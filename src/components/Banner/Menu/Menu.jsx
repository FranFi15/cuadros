import React from "react";
import { Arts } from "../../../data/data";
import {
  MenuStyled,
  ArtGrid,
  TitleStyled,
  SubtitleStyled,
  ArtImage,
  ArtLabel,
  Art,
} from "../Menu/MenuElements";
import { formatPrice } from "../../../utils/formatPrice";

export const Menu = () => {
  return (
    <MenuStyled>
      {Object.entries(Arts).map(([sectionName, arts]) => {
        return (
          <>
            <SubtitleStyled>{sectionName}</SubtitleStyled>
            <ArtGrid>
              {arts.map((art) => (
                <Art>
                  <ArtImage src={art.img} />
                  <ArtLabel>
                    <div>{art.name}</div>
                    <div>{formatPrice(art.price)}</div>
                  </ArtLabel>
                </Art>
              ))}
            </ArtGrid>
          </>
        );
      })}
    </MenuStyled>
  );
};

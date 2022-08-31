import React from 'react';
import { Grid } from '@material-ui/core';
// import smartGridPT from './productCard/SmartGridPtTile';
import Illustration from './Illustration';
import SmartUnorderedList from './SmartUnorderedList';
import VideoEmbed from './VideoEmbed';
import ButtonJumpLink from '../../buttons/ButtonJumpLink';
import ButtonAffiliate from '../../buttons/ButtonAffiliate';
import ButtonExternal from '../../buttons/ButtonExternal';
import ButtonInternalGlobal from '../../buttons/ButtonInternalGlobal';
import ButtonInternalLocal from '../../buttons/ButtonInternalLocal';
import { mapMuiBtnToProps } from '../../../lib/mapToProps';

function SmartGrid({ layout, tiles, tileOption }) {
  // number of tiles desktop/table/mobile: '6/4/2' -> {lg: 2, md: 3, xs: 6}
  const colCalculate = (value) => {
    const valueArrStr = value.split('/');
    const valueArrNum = valueArrStr.map((el) => parseInt(el, 10));
    const colObj = { lg: 12 / valueArrNum[0], md: 12 / valueArrNum[1], xs: 12 / valueArrNum[2] };
    return colObj;
  };

  const col = colCalculate(layout);

  return (
    <>
      <Grid container spacing={3}>
        {tiles.map((tile) => {
          const { _key } = tile;
          const tileSelector = (key) => {
            switch (key) {
              // case 'productCardSection':
              //   return <ProductCardFlexSegment />;
              case 'illustration':
                return <Illustration />;
              case 'smartUnorderedList':
                return <SmartUnorderedList />;
              case 'videoEmbed':
                return <VideoEmbed />;
              case key === 'btnBlockMui' && tile.link[0]._type === 'jumpLink':
                return <ButtonJumpLink key={_key} {...mapMuiBtnToProps(tile)} />;
              case key === 'btnBlockMui' && tile.link[0]._type === 'affiliateLink':
                return <ButtonAffiliate key={_key} {...mapMuiBtnToProps(tile)} />;
              case key === 'btnBlockMui' && tile.link[0]._type === 'externalLink':
                return <ButtonExternal key={_key} {...mapMuiBtnToProps(tile)} />;
              case key === 'btnBlockMui' && tile.link[0]._type === 'internalGlobal':
                return <ButtonInternalGlobal key={_key} {...mapMuiBtnToProps(tile)} />;
              case key === 'btnBlockMui' && tile.link[0]._type === 'internalLocal':
                return <ButtonInternalLocal key={_key} {...mapMuiBtnToProps(tile)} />;
              case 'clickableImage':
                return <div>This is a clickable image</div>;
              default:
                return <div> Tile still under development</div>;
            }
          };

          return (
            <Grid item key={tile._key} {...col}>
              {tileSelector(tileOption)}
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default SmartGrid;

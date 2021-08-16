import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Tile1 from './tiles/TileImageRecSqr';
import Tile2 from './tiles/TileImageCircle';
import { mapFluidImgToProps } from '../lib/mapToProps';

function GridFlex({ layout, tiles, tileOption }) {
  // number of tiles desktop/table/moble: '6/4/2' -> {lg: 2, md: 3, xs: 6}
  const calCalculate = (value) => {
    const valueArrStr = value.split('/');
    const valueArrNum = valueArrStr.map((el) => parseInt(el, 10));
    const colObj = { lg: 12 / valueArrNum[0], md: 12 / valueArrNum[1], xs: 12 / valueArrNum[2] };
    return colObj;
  };

  // const colCalculator = (value) => {
  //   switch (value) {
  //     case '6/4/2':
  //       return {
  //         xs: 6,
  //         md: 3,
  //         lg: 2,
  //       };
  //     case '4/2/1':
  //       return {
  //         xs: 12,
  //         md: 6,
  //         lg: 3,
  //       };
  //     case '3/2/1':
  //       return {
  //         xs: 12,
  //         md: 6,
  //         lg: 4,
  //       };
  //     case '2/2/1':
  //       return {
  //         xs: 12,
  //         md: 6,
  //         lg: 6,
  //       };
  //     default:
  //       console.log('calculator missing');
  //       return null;
  //   }
  // };

  const col = calCalculate(layout);

  console.log(layout);
  console.log(tiles);

  return (
    <Grid container spacing={3}>
      {tiles.map((tile) => {
        const tileSelector = (key) => {
          switch (key) {
            case '1':
              return <Tile1 {...mapFluidImgToProps(tile.tileImage)} link={tile.link[0]} />;
            case '2':
              return <Tile2 {...mapFluidImgToProps(tile.tileImage)} link={tile.link[0]} />;
            case '3':
              return <p>image title border</p>;
            case '4':
              return <p>image title text base</p>;
            default:
              return <div key="default-inner-block"> Tile still under development</div>;
          }
        };

        return (
          <Grid item key={tile._key} {...col}>
            {tileSelector(tileOption)}
          </Grid>
        );
      })}
    </Grid>
  );
}

export default GridFlex;

/* eslint-disable no-underscore-dangle */
import React from 'react';
import ViewState from '../utility/ViewState';
import DataCard from './DataCard';

const DisplayDataContent = ({ jsonInfo, currentDataState }) => {
  switch (currentDataState) {
    case (ViewState.NO_DATA):
      return <div className="CardWrapper"><DataCard title="No data loaded..." /></div>;

    case (ViewState.ERROR):
      return <div className="CardWrapper"><DataCard title="ERROR: something went wrong" /></div>;

    case (ViewState.LOADING):
      return <div className="CardWrapper"><DataCard title="Loading..." /></div>;

    case (ViewState.SUCCESS):
      return (
        <ul className="CardWrapper">
          {jsonInfo.products?.map((element) => (
            <li key={element.id}>
              <DataCard title={element.name} score={element._meta.score} />
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
};

export default DisplayDataContent;

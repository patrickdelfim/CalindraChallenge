import React, { useEffect, useState, useRef } from 'react';
import Searcher from './Searcher';
import DisplayDataContent from './DisplayDataContent';
import ViewState from '../utility/ViewState';
import handlerErrors from '../utility/handlerErrors';

const MainContent = () => {
  const firstRender = useRef(true);
  const [FetchTerm, setFetchTerm] = useState('');
  const [requestedData, setRequestedData] = useState();
  const [currentDataState, setCurrentDataState] = useState(ViewState.NO_DATA);
  useEffect(() => {
    if (!firstRender.current) {
      setCurrentDataState(ViewState.LOADING);
      fetch(`https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=${FetchTerm}&source=nanook`)
        .then((res) => handlerErrors(res))
        .then((result) => {
          setRequestedData(result);
          if (result.products.length > 0) {
            setCurrentDataState(ViewState.SUCCESS);
          } else {
            setCurrentDataState(ViewState.NO_DATA);
          }
        }).catch((Error) => {
          setCurrentDataState(ViewState.ERROR);
          console.error(Error);
        });
    } else {
      firstRender.current = false;
    }
  }, [FetchTerm]);

  return (
    <div className="MainContent">
      <Searcher submitSearchTerm={setFetchTerm} />
      <DisplayDataContent jsonInfo={requestedData} currentDataState={currentDataState} />
    </div>
  );
};

export default MainContent;

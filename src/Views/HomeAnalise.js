import React from 'react';
import '../App.css';
import { isConfigured as ComputerVisionIsConfigured } from '../Components/azure-cognitiveservices-computervision';
import Analyze from './Anilyze';

function HomeAnalyse(props) {
  
  const ready = ComputerVisionIsConfigured();

  const CantAnalyze = () => {
    return (
      <div>Key and/or endpoint not configured</div>
    )
  }

  return (
    <div>
      {ready &&
        <Analyze image={props.imageUrl}/>
      }
      {!ready && <CantAnalyze />}
    </div>
  );
}

export default HomeAnalyse;
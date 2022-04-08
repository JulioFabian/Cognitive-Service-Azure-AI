import React, { useState } from 'react';
import '../App.css';
import { computerVision } from '../Components/azure-cognitiveservices-computervision';

function Analyze(props) {
  const [analysis, setAnalysis] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [showProcessing, setShowProcessing] = useState(false);

  const onFileUrlEntered = (url) => {
    setAnalysis(null);
    setProcessing(true);

    computerVision(url || null).then((item) => {
      setAnalysis(item);
      setShowProcessing(true);
    });
  };

  const printMultiplerOptions = (data, opt) =>
    data.length > 0 ?
        data.map((categorie, indx) => {
            return (
                <p key={indx}>&emsp;{"- " + opt(categorie)}</p>
            )
    }) : <p>&emsp;- not found </p>

const printSingleOption = (title, opt) =>
    <>
        <h5>&emsp;{title} :</h5>
        {opt !== "" ? <p>&emsp;&emsp;{"- " + opt}</p>: <p>&emsp;- not found</p>}
    </>

  const PrettyPrintJson = (data) => {
    // console.log(data.URL);
    // console.log(data.adult.isAdultContent);
    // console.log(data.adult.isRacyContent);
    // console.log(data.adult.isGoryContent);
    // console.log(data.brands);
    // console.log(data.categories);
    // console.log(data.color.dominantColorForeground);
    // console.log(data.color.dominantColorBackground);
    // console.log(data.description.captions);
    // console.log(data.description.tags[2]);
    // console.log(data.faces);
    // console.log(data.text.readResults[0].lines);
    // console.log(data.text.readResults[0]);
    return (
        <div className='container'>
            <hr />
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <h4><b>Content:</b></h4>
                {printSingleOption("Is Adult Content", "" + data.adult.isAdultContent)}
                {printSingleOption("Is Racy Content", "" + data.adult.isRacyContent)}
                {printSingleOption("Is Gory Content", "" + data.adult.isGoryContent)}
            <hr />
            <h4><b>Brands:</b> </h4>
            {printMultiplerOptions(data.brands, c=>c.name)}
            <hr />
            <h4><b>Categories:</b> </h4>
            {printMultiplerOptions(data.categories, c=>c.name)}
            <hr />
            <h4><b>Dominants Colors:</b> </h4>
            {printSingleOption("Foreground", "" + data.color.dominantColorForeground)}
            {printSingleOption("Background", "" + data.color.dominantColorBackground)}
            <hr />
            <h4><b>Captions:</b> </h4>
            {printMultiplerOptions(data.description.captions, c=>c.text)}
            <hr />
            <h4><b>Tags:</b> </h4>
            {data.description.tags.length > 0 ?
                data.description.tags.map((tag, indx) => {
                    return(
                        <p key={indx}>&emsp;{"- " + tag}</p>
                    )
                }) : <p>&emsp;- not found </p>}
            <hr />
            <h4><b>Faces:</b> </h4>
            {data.faces.length > 0 ?
                data.faces.map((face, indx) => {
                    return(
                        <div key={indx}>
                            <h5>&emsp;Face {indx+1}: </h5>
                            <p>&emsp;&emsp;{"- Age: " + face.age}</p>
                            <p>&emsp;&emsp;{"- Gender:  " + face.gender}</p>
                        </div>
                    )
                }) : <p>&emsp;- not found </p>}
            <hr />
            <h4><b>Text:</b> </h4>
            {data.text.readResults[0].lines.length > 0 ?
                data.text.readResults[0].lines.map((line, indx) => {
                    return(
                        <div key={indx}>
                            <p>&emsp;{"- Line "} {indx+1} : "{line.text}"</p>
                        </div>
                    )
                }) : <p>&emsp;- not found </p>}
            <hr />
        </div>
    );
  }

  const DisplayResults = (p) => {
    return (
      <div>
        <div className='d-flex justify-content-center'><img src={analysis.URL} className="img-fluid" border="3" alt={(analysis.description && analysis.description.captions && analysis.description.captions[0].text ? analysis.description.captions[0].text : "can't find caption")} /></div>
        {PrettyPrintJson(analysis)}
      </div>
    )
  };

  return (
    <div>
        {!processing &&
          <div>
            {onFileUrlEntered(props.image)}
          </div>
        }
        {!showProcessing && <h4>Processing...</h4>}
        {analysis && DisplayResults()}
    </div>
  );
}

export default Analyze;
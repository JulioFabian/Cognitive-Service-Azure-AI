// import React, { useState } from 'react';
// import '../App.css';
// import { computerVision, isConfigured as ComputerVisionIsConfigured } from '../Components/azure-cognitiveservices-computervision';

// function HomeAnalyse(props) {
//   const [fileSelected, setFileSelected] = useState(null);
//   const [analysis, setAnalysis] = useState(null);
//   const [processing, setProcessing] = useState(false);

//   const handleChange = (e) => {
//     // console.log(e);
//     // console.log(e.target.value);
//     setFileSelected(e.target.value)
//   }
//   const onFileUrlEntered = (e) => {
//     setProcessing(true);
//     setAnalysis(null);
//     // console.log(fileSelected);

//     computerVision(fileSelected || null).then((item) => {
//       console.log(item);
//       setAnalysis(item);
//       setFileSelected(null);
//       setProcessing(false);
//     });
//   };

//   const PrettyPrintJson = (data) => {
//     return (<div><pre>{JSON.stringify(data, null, 2)}</pre></div>);
//   }

//   const DisplayResults = (p) => {
//     const analysis = props.imageUrl;
//     return (
//       <div>
//         <h2>Computer Vision Analysis</h2>
//         <div><img src={analysis} height="200" border="1" alt={(analysis.description && analysis.description.captions && analysis.description.captions[0].text ? analysis.description.captions[0].text : "can't find caption")}/></div>
//         {/* {PrettyPrintJson(p.image)} */}
//       </div>
//     )
//   };

//   const Analyze = (p) => {
//     return (
//       <div>
//         {DisplayResults(p.image)}
//       </div>
//     )
//   }

//   const CantAnalyze = () => {
//     return (
//       <div>Key and/or endpoint not configured</div>
//     )
//   }

//   function Render() {
//     const ready = ComputerVisionIsConfigured();
//     if (ready) {
//       return <Analyze image={props.imageUrl}/>;
//       // return <Analyze />;
//     }
//     return <CantAnalyze />;
//   }

//   return (
//     <div>
//       {Render()}
//     </div>

//   );
// }

// export default HomeAnalyse;



// import React, { useState } from 'react';
// import '../App.css';
// import { computerVision, isConfigured as ComputerVisionIsConfigured } from '../Components/azure-cognitiveservices-computervision';

// function HomeAnalyse(props) {
//   const [fileSelected, setFileSelected] = useState(null);
//   const [analysis, setAnalysis] = useState(null);
//   const [processing, setProcessing] = useState(false);

//   const handleChange = (e) => {
//     // console.log(e);
//     // console.log(e.target.value);
//     setFileSelected(e.target.value)
//   }
//   const onFileUrlEntered = (e) => {
//     setProcessing(true);
//     setAnalysis(null);
//     // console.log(fileSelected);

//     computerVision(fileSelected || null).then((item) => {
//       console.log(item);
//       setAnalysis(item);
//       setFileSelected(null);
//       setProcessing(false);
//     });
//   };

//   const PrettyPrintJson = (data) => {
//     return (<div><pre>{JSON.stringify(data, null, 2)}</pre></div>);
//   }

//   const DisplayResults = (p) => {
//     // console.log(analysis);
//     return (
//       <div>
//         <h2>Computer Vision Analysis</h2>
//         <div><img src={analysis.URL} height="200" border="1" alt={(analysis.description && analysis.description.captions && analysis.description.captions[0].text ? analysis.description.captions[0].text : "can't find caption")} /></div>
//         {PrettyPrintJson(analysis)}
//       </div>
//     )
//   };

//   const Analyze = (p) => {
//     return (
//       <div>
//         {!processing &&
//           <div>
//             <div>
//               <label>URL</label>
//               <input 
//                 type="text" 
//                 placeholder="Enter URL or leave empty for random image from collection" 
//                 size="52"
//                 onChange={handleChange}
//                 value={fileSelected}
//               ></input>
//             </div>
//             <button onClick={onFileUrlEntered}>Analyze</button>
//           </div>

//           // <div>
//           //   {handleChange(p.imageUrl)}
//           //   {/* {setFileSelected(p.imageUrl)} */}
//           //   {/* {onFileUrlEntered} */}
//           // </div>
//         }
//         {processing && <div>Processing</div>}
//         <hr />
//         {analysis && DisplayResults()}
//       </div>
//     )
//   }

//   const CantAnalyze = () => {
//     return (
//       <div>Key and/or endpoint not configured</div>
//     )
//   }

//   function Render() {
//     const ready = ComputerVisionIsConfigured();
//     if (ready) {
//       return <Analyze />;
//     }
//     return <CantAnalyze />;
//   }

//   return (
//     <div>
//       {Render()}
//     </div>

//   );
// }

// export default HomeAnalyse;






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
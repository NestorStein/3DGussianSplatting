import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as GaussianSplats3D from '@mkkellogg/gaussian-splats-3d';

const viewer = new GaussianSplats3D.Viewer({
  'sharedMemoryForWorkers': false,
  'cameraUp': [0, -1, -0.6],
  'initialCameraPosition': [-1, -4, 6],
  'initialCameraLookAt': [0, 4, 0]
});
viewer.addSplatScene('/sample.ksplat', {
    'splatAlphaRemovalThreshold': 5,
    'showLoadingUI': true,
    'position': [0, 1, 0],
    'rotation': [0, 0, 0, 1],
    'scale': [1.5, 1.5, 1.5]
})
.then(() => {
    viewer.start();
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

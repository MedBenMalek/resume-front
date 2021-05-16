import Rive from 'rive-canvas';

/* eslint-disable no-undef */
let RiveModule: any = null;
let isLoadingModule = false;
const callbacks: Function[] = [];

function loadRiveModule(cb: Function) {
  if (isLoadingModule) {
    callbacks.push(cb);
  } else if (RiveModule) {
    cb(RiveModule);
  } else {
    console.log('loading module');
    isLoadingModule = true;

    Rive({
      locateFile: (file: string) => `https://unpkg.com/rive-canvas@0.6.10/rive.wasm`,
    }).then((module: any) => {
      isLoadingModule = false;
      RiveModule = module;
      cb(RiveModule);
      for (let cb of callbacks) {
        cb(RiveModule);
      }
    });
  }
}

export default function loadRive(url: string): any {
  return new Promise((resolve, reject) => {
    loadRiveModule((rive: any) => {
      const { load } = rive;
      const assetRequest = new Request(url);
      fetch(assetRequest)
        .then((response) => {
          return response.arrayBuffer();
        })
        .then((buffer) => {
          // Load Rive file from buffer.
          const file = load(new Uint8Array(buffer));
          resolve({ rive, file });
        });
    });
  });
}

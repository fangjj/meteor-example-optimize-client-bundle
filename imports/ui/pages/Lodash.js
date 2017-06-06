import React from 'react';
import cloneDeep from 'lodash/cloneDeep';
// import cloneDeep from 'lodash.cloneDeep';

const LodashPage = () => (
  <div>
    <div className="text-center">
      <h2>Lodash Experiment</h2>
    </div>
    <p>This is the only code in the application importing lodash.</p>
    <p>
      `import cloneDeep from 'lodash/cloneDeep';` results in the whole lodash package.
      = `19.5kb`
      {/*
      <img src="https://puu.sh/wc2KD/c333e1834e.png" alt="ss"/>
      <img src="https://puu.sh/wc2Lq/88f9db3c45.png" alt="ss"/>
      */}
    </p>
    <p>
      `import cloneDeep from 'lodash.cloneDeep';` results in only the component being loaded.
      = `8.9kb`
      {/*
      <img src="https://puu.sh/wc2Gs/f694dacc7b.png" alt="ss"/>
      */}
    </p>
  </div>
);
export default LodashPage;


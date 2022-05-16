// import React from 'react';

// interface IProps {
//   name: string;
//   age: number;
// }

// function App(props: IProps) {
//   const { name, age } = props;
//   return (
//     <div className="app">
//       <span>{`Hello! I'm ${name}, ${age} years old.`}</span>
//     </div>
//   );
// }

// export default App;

import React, { Suspense, useState } from 'react';

const ComputedOne = React.lazy(
  () => import('Components/ComputedOne'),
);
const ComputedTwo = React.lazy(
  () => import('Components/ComputedTwo'),
);

function App() {
  const [showTwo, setShowTwo] = useState<boolean>(false);

  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <ComputedOne a={4} b={2} />
        {showTwo && <ComputedTwo a={3} b={4} />}
        <button
          type="button"
          onClick={() => setShowTwo(true)}
        >
          显示Two
        </button>
      </Suspense>
    </div>
  );
}

export default App;

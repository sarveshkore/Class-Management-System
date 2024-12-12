// // import React from 'react'
// // import Student from './Students/Student'
// // import Navbar from './Navbar'

// // const Body = () => {
// //   return (
// //     <div>
// //       <Navbar/>

// //       <Student/>
// //     </div>
// //   )
// // }

// // export default Body
// import React from 'react'
// import Student from './Students/Student'
// import Navbar from './Navbar'

// const Body = () => {
//   return (
//     <div>
//       <Navbar/>

//       <Student/>
//     </div>
//   )
// }

// export default Body
import React from 'react';
import Student from './Students/Student';
import Navbar from './Navbar';

const Body = () => {
  return (
    <div className="d-flex">
      {/* Navbar on the left */}
      <div className="bg-dark text-white" style={{ width: '250px', minHeight: '100vh' }}>
        <Navbar />
      </div>

      {/* Main content on the right */}
      <div className="flex-grow-1 p-4">
        <Student />
      </div>
    </div>
  );
};

export default Body;

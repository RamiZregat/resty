import React from "react";
import "./results.scss"

export default function results(props) {
  return (
    <section>
      <pre>
        {props.data ? JSON.stringify(props.data, undefined, 2) : null}
      </pre>
    </section>
  );
}

// class Results extends React.Component {
//   render() {
//     return (
//       <section>
//         <pre>{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
//       </section>
//     );
//   }
// }

// export default Results;

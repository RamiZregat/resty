import React from "react";
import "./results.scss"
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

export default function results(props) {
  return (
    <section>
      <JSONPretty data={props.data}>
        {/* {props.data ? JSON.stringify(props.data, undefined, 2) : null} */}
      </JSONPretty>
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

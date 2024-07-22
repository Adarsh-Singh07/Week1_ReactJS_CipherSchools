import React from "react";
const Test = {{ name = " ", setName }} => {
    return {
    <>
      <h1>The name is : {name}</h1>
      <input
        type = "text"
        value = "name"
        onChange = {(e) => setName (e.target.value)}
      />
      </>
    };
}
export default Test;

_____________________________________________________________________________

import React from "react";
import Proptypes from "props-types";
const Test = {{ name = " ", setName }} => {
    return {
    <>
      <h1>The name is : {name}</h1>
      <input
        type = "text"
        value = "name"
        onChange = {(e) => setName (e.target.value)}
      />
      </>
    };
}
Test.PropsTypes = {
    name: PropsTypes.string,
    setName: PropsTypes, 
};
export default Test;
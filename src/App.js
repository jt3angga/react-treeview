import React, { Component } from 'react';
import Tree from './Tree';
import TreeCollapse from './TreeCollapse';

const tree_data = [
  {
      "name": "Root Tree",
      "children": [{
          "name": "Tree A",
          "children": [{
              "name": "Child A1",
              "children": []
          }, {
              "name": "Child A2",
              "children": []
          }]
      }, {
          "name": "Tree D",
          "children": []
      }, {
          "name": "Tree B",
          "children": [{
              "name": "Child B1",
              "children": []
          }]
      }, {
          "name": "Tree B",
          "children": [{
              "name": "Child C1",
              "children": []
          }, {
              "name": "Child C2",
              "children": []
          }, {
              "name": "Child C3",
              "children": []
          }]
      }]
  }
]


class App extends Component {
  render() {
    return (
      <div className="App">
        <Tree tree_data={tree_data} />
        <TreeCollapse style={{marginTop: 50}} tree_data={tree_data} />
      </div>
    );
  }
}

export default App;

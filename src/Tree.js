import React from 'react'

class Tree extends React.Component {
  static get defaultProps() {
    return {
      indent: 0
    }
  }
  render () {
    const { tree_data, indent } = this.props
    return (
      tree_data.map((item, index) => {
        return (
          <div key={index}>
            <div className="tree">{this.renderIndent(indent)}~{'\u00A0'}{item.name}</div>
            <Tree indent={(indent + 2)} tree_data={item.children} />
          </div>
        )
      })
    )
  }
  renderIndent () {
    const { indent } = this.props
    return [...Array(indent)].map((_) => '\u00A0');
  }
}

export default Tree;
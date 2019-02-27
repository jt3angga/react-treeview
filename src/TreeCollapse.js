import React from 'react'
import ReactDOM from 'react-dom'

class TreeCollapse extends React.Component {
  static get defaultProps() {
    return {
      indent: 0
    }
  }
  constructor (props) {
    super(props)
    this.icon = []
    this.btn = []
  }
  render () {
    const { tree_data, indent } = this.props
    return (
      <div style={{...this.props.style}}>
      {
        tree_data.map((item, index) => {
          return (
            <div key={index}>
              <div>
                {this.renderIndent(indent)}
                {
                  item.children.length > 0 ? 
                  <span style={{cursor: 'pointer'}} className="navigation active" ref={(ref) => this.btn[item.name.replace(' ','_')+'_'+index] = ref} onClick={() => this.collapse(item.name.replace(' ','_')+'_'+index)}></span>
                  : <span><i className="fas fa-minus"></i></span>
                }
                {'\u00A0'}{item.name}
              </div>
              <div className="tree show" ref={(ref) => this.icon[item.name.replace(' ','_')+'_'+index] = ref}>                
                <TreeCollapse indent={(indent + 2)} tree_data={item.children} />                
              </div>             
            </div>
          )
        })
      }
      </div>
    )
  }
  collapse = (index) => {
    let node = ReactDOM.findDOMNode(this.icon[index]);
    node.classList.toggle('show');
    node.classList.toggle('hide');

    let btn = ReactDOM.findDOMNode(this.btn[index]);
    btn.classList.toggle('active');
  }
  renderIndent () {
    const { indent } = this.props
    return [...Array(indent)].map((_, i) => '\u00A0');
  }
}

export default TreeCollapse;
import React,{Component} from 'react'

class FailInfoView extends Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    searchText: "",
    addFunc: () => {}
  }

  render() {

    return (
      <div style={{display: "flex",marginTop: 50}}>
        <div style={{height: 30,fontSize: 20,color: 'white'}}>Failed to find related information. Do you want to</div>
        <button
          onClick={this.props.addFunc}
          style={{height: 30,backgroundColor: 'gray'}}>ADD</button>
        <div style={{height: 30,fontSize: 20,color: 'white'}}> infromation for "{this.props.searchText}"?</div>
      </div>
    )
  }
}

export default FailInfoView

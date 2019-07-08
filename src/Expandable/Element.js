import React from 'react';

import { View, TouchableOpacity } from 'react-native';

class Element extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expand: false,
    };
  }

  /**
   * This function toggles the element state to be expanded or not
   * 
   * It will call the container __willToggle methods before toggling,
   * and __didExpand / __didCollapse depending uppon the element state.
   * 
   */
  _toggle = () => {
    const {
      __willToggle, namespace, __didExpand, __didCollapse,
    } = this.props;
    const { expand } = this.state;

    __willToggle(namespace);
    this.setState({ expand: !expand }, () => {
      this.state.expand ? __didExpand(namespace) : __didCollapse(namespace);
    });
  }

  /**
   * This function collapses the element and calls container __didCollapse 
   * with the collapsed namespace
   */
  collapse = () => {
    const { expand } = this.state;
    const { __didCollapse, namespace } = this.props;

    if (!expand) {
      return;
    }

    this.setState({
      expand: false,
    }, () => __didCollapse(namespace));
  }

  render() {
    const { expand } = this.state;
    const { renderHeader, renderContent, style } = this.props;
    return (
      <View style={style} >
        <TouchableOpacity onPress={this._toggle}>
          {renderHeader(this._toggle, expand)}
        </TouchableOpacity>
        {expand && (
          <View>
            {renderContent()}
          </View>
        )}
      </View>
    );
  }
}

Element.defaultProps = {
  namespace: undefined,
  style: undefined,
  renderHeader: () => { },
  renderContent: () => { },
  __willToggle: () => { },
  __didExpand: () => { },
  __didCollapse: () => { },
}

export default Element;

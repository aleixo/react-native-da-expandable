import React from 'react';
import { FlatList, } from 'react-native';
import Context from './context';

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.scrollPosition = 0;
    this.expandablesActions = {};
    this.layouts = {};
  }


  /**
   * Method to scroll to one index of the FlatList
   */
  scrollToIndex = (index) => {
    this.listReference.scrollToIndex({ animated: true, index, });
  }

  /**
   * Register the element actions on the container.
   * 
   * With this actions the container will be able to control the children.
   * 
   * @param {string} namespace - The element namespace 
   * @param {Object} actions - The actions to be registered. 
   */
  _registerExpandableActions = (namespace, actions) => {
    if (!namespace) {
      return;
    }

    this.expandablesActions = {
      ...this.expandablesActions,
      [namespace]: {
        ...this.expandablesActions[namespace],
        [`${Math.random()}`]: actions
      }
    };
  }

  /**
   * THis function is used to collapse all the elements in the given 
   * namespace before toggling other.
   * 
   * It will be invoked by the children.
   * 
   * @param {string} namespace - The element namespace.
   */
  _willToggle = (namespace) => {
    if (!namespace) {
      return;
    }

    Object.keys(this.expandablesActions[namespace]).forEach(
      key => this.expandablesActions[namespace]
        && this.expandablesActions[namespace][key]
        && this.expandablesActions[namespace][key].collapse()
    );
  }

  /**
   * This function just returns all the methods to be exposed to container childs.
   * 
   * @returns {Object} - All the actions to be used by the children
   */
  _contextValue = () => ({
    registerExpandableActions: this._registerExpandableActions,
    __willToggle: this._willToggle,
    __didExpand: this.props.onExpandElement,
    __didCollapse: this.props.onCollapseElement,
  })

  /**
   * This function stores the reference of the flatlist.
   * 
   * @param {Object} - The flatlist reference. 
   */
  _storeReference = (ref) => {
    this.listReference = ref;
  }

  render() {
    const { elements, footer } = this.props;
    return (
      <Context.Provider value={this._contextValue()}>
        <FlatList
          ref={this._storeReference}
          data={elements}
          renderItem={child => child.item()}
          keyExtractor={(item, index) => item + index}
          ListFooterComponent={() => footer}
        />
      </Context.Provider>
    );
  }
}

Container.defaultProps = {
  footer: null,
  style: {}
}

export default Container;
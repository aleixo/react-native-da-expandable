import React from 'react';
import ExpandableContext from './context';

export default WrappedComponent => props => (
  <ExpandableContext.Consumer>
    {context => (
      <WrappedComponent
        ref={(ref) => {
          if (!ref) {
            return;
          }
          context.registerExpandableActions(props.namespace, {
            collapse: ref.collapse,
          });
        }}
        key={`${Math.random()}`}
        {...context}
        {...props}
      />
    )}
  </ExpandableContext.Consumer>
);

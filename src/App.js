import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Expandable from './Expandable';

class App extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      this.r.scrollToIndex(15)
    }, 5000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Expandable.Container
          onCollapseElement={(namespace) => { console.log('COLLAPSE', namespace) }}
          onExpandElement={(namespace) => { console.log('EXPAND', namespace) }}
          footer={() => <View style={{ backgroundColor: 'yellow', height: 10 }} />}
          separator={() => <View style={{ backgroundColor: 'pink', height: 5 }} />}
          ref={r => this.r = r}
          elements={[
            () => <Expandable.Element
              style={{
                marginTop: 10
              }}
              namespace="group"
              renderHeader={() => <View style={{ backgroundColor: 'red', height: 30 }}><Text>HEADER</Text></View>}
              renderContent={() => <View style={{ backgroundColor: 'blue', height: 60 }}><Text>CONTENT</Text></View>}
            />,
            () => <Expandable.Element
              style={{
                marginTop: 10
              }}
              namespace="group"
              renderHeader={() => <View style={{ backgroundColor: 'red', height: 30 }}><Text>HEADER</Text></View>}
              renderContent={() => <View style={{ backgroundColor: 'blue', height: 60 }}><Text>CONTENT</Text></View>}
            />,
            () => <Expandable.Element
              style={{
                marginTop: 10
              }}
              namespace="group"
              renderHeader={() => <View style={{ backgroundColor: 'red', height: 30 }}><Text>HEADER</Text></View>}
              renderContent={() => <View style={{ backgroundColor: 'blue', height: 60 }}><Text>CONTENT</Text></View>}
            />,
            () => <Expandable.Element
              style={{
                marginTop: 10
              }}
              namespace="group"
              renderHeader={() => <View style={{ backgroundColor: 'red', height: 30 }}><Text>HEADER</Text></View>}
              renderContent={() => <View style={{ backgroundColor: 'blue', height: 60 }}><Text>CONTENT</Text></View>}
            />,
            () => <Expandable.Element
              style={{
                marginTop: 10
              }}
              namespace="group"
              renderHeader={() => <View style={{ backgroundColor: 'red', height: 30 }}><Text>HEADER</Text></View>}
              renderContent={() => <View style={{ backgroundColor: 'blue', height: 60 }}><Text>CONTENT</Text></View>}
            />,
            () => <Expandable.Element
              style={{
                marginTop: 10
              }}
              namespace="group"
              renderHeader={() => <View style={{ backgroundColor: 'red', height: 30 }}><Text>HEADER</Text></View>}
              renderContent={() => <View style={{ backgroundColor: 'blue', height: 60 }}><Text>CONTENT</Text></View>}
            />,
            () => <Expandable.Element
              style={{
                marginTop: 10
              }}
              namespace="group"
              renderHeader={() => <View style={{ backgroundColor: 'red', height: 30 }}><Text>HEADER</Text></View>}
              renderContent={() => <View style={{ backgroundColor: 'blue', height: 60 }}><Text>CONTENT</Text></View>}
            />,
            () => <Expandable.Element
              style={{
                marginTop: 10
              }}
              namespace="group"
              renderHeader={() => <View style={{ backgroundColor: 'red', height: 30 }}><Text>HEADER</Text></View>}
              renderContent={() => <View style={{ backgroundColor: 'blue', height: 60 }}><Text>CONTENT</Text></View>}
            />,
            () => <Expandable.Element
              style={{
                marginTop: 10
              }}
              namespace="group"
              renderHeader={() => <View style={{ backgroundColor: 'red', height: 30 }}><Text>HEADER</Text></View>}
              renderContent={() => <View style={{ backgroundColor: 'blue', height: 60 }}><Text>CONTENT</Text></View>}
            />,
            () => <Expandable.Element
              style={{
                marginTop: 10
              }}
              namespace="group"
              renderHeader={() => <View style={{ backgroundColor: 'red', height: 30 }}><Text>HEADER</Text></View>}
              renderContent={() => <View style={{ backgroundColor: 'blue', height: 60 }}><Text>CONTENT</Text></View>}
            />,
            () => <Expandable.Element
              style={{
                marginTop: 10
              }}
              namespace="group"
              renderHeader={() => <View style={{ backgroundColor: 'red', height: 30 }}><Text>HEADER</Text></View>}
              renderContent={() => <View style={{ backgroundColor: 'blue', height: 60 }}><Text>CONTENT</Text></View>}
            />,
            () => <Expandable.Element
              style={{
                marginTop: 10
              }}
              namespace="group"
              renderHeader={() => <View style={{ backgroundColor: 'red', height: 30 }}><Text>HEADER</Text></View>}
              renderContent={() => <View style={{ backgroundColor: 'blue', height: 60 }}><Text>CONTENT</Text></View>}
            />,
            () => <Expandable.Element
              style={{
                marginTop: 10
              }}
              namespace="group"
              renderHeader={() => <View style={{ backgroundColor: 'red', height: 30 }}><Text>HEADER</Text></View>}
              renderContent={() => <View style={{ backgroundColor: 'blue', height: 60 }}><Text>CONTENT</Text></View>}
            />,
            () => <Expandable.Element
              style={{
                marginTop: 10
              }}
              namespace="group"
              renderHeader={() => <View style={{ backgroundColor: 'red', height: 30 }}><Text>HEADER</Text></View>}
              renderContent={() => <View style={{ backgroundColor: 'blue', height: 60 }}><Text>CONTENT</Text></View>}
            />,
            () => <Expandable.Element
              style={{
                marginTop: 10
              }}
              namespace="group"
              renderHeader={() => <View style={{ backgroundColor: 'red', height: 30 }}><Text>HEADER</Text></View>}
              renderContent={() => <View style={{ backgroundColor: 'blue', height: 60 }}><Text>CONTENT</Text></View>}
            />,
            () => <Expandable.Element
              style={{
                marginTop: 10
              }}
              namespace="group"
              renderHeader={() => <View style={{ backgroundColor: 'red', height: 30 }}><Text>HEADER</Text></View>}
              renderContent={() => <View style={{ backgroundColor: 'blue', height: 60 }}><Text>CONTENT</Text></View>}
            />,
            () => <Expandable.Element
              style={{
                marginTop: 10
              }}
              namespace="group"
              renderHeader={() => <View style={{ backgroundColor: 'red', height: 30 }}><Text>HEADER</Text></View>}
              renderContent={() => <View style={{ backgroundColor: 'blue', height: 60 }}><Text>CONTENT</Text></View>}
            />,
            () => <Expandable.Element
              style={{
                marginTop: 10
              }}
              namespace="group"
              renderHeader={() => <View style={{ backgroundColor: 'red', height: 30 }}><Text>HEADER</Text></View>}
              renderContent={() => <View style={{ backgroundColor: 'blue', height: 60 }}><Text>CONTENT</Text></View>}
            />,
            () => <Expandable.Element
              style={{
                marginTop: 10
              }}
              namespace="group"
              renderHeader={() => <View style={{ backgroundColor: 'red', height: 30 }}><Text>HEADER</Text></View>}
              renderContent={() => <View style={{ backgroundColor: 'blue', height: 60 }}><Text>CONTENT</Text></View>}
            />,
            () => <Expandable.Element
              style={{
                marginTop: 10
              }}
              namespace="group"
              renderHeader={() => <View style={{ backgroundColor: 'red', height: 30 }}><Text>HEADER</Text></View>}
              renderContent={() => <View style={{ backgroundColor: 'blue', height: 60 }}><Text>CONTENT</Text></View>}
            />,
            () => <Expandable.Element
              style={{
                marginTop: 10
              }}
              namespace="group"
              renderHeader={() => <View style={{ backgroundColor: 'red', height: 30 }}><Text>HEADER</Text></View>}
              renderContent={() => <View style={{ backgroundColor: 'blue', height: 60 }}><Text>CONTENT</Text></View>}
            />,
            () => <Expandable.Element
              style={{
                marginTop: 10
              }}
              namespace="group2"
              renderHeader={() => <View style={{ backgroundColor: 'red', height: 30 }}><Text>HEADER 2</Text></View>}
              renderContent={() => <View style={{ backgroundColor: 'blue', height: 60 }}><Text>CONTENT</Text></View>}
            />,
            () => <Expandable.Element
              style={{
                marginTop: 10
              }}
              namespace="group2"
              renderHeader={() => <View style={{ backgroundColor: 'red', height: 30 }}><Text>HEADER 2</Text></View>}
              renderContent={() => <View style={{ backgroundColor: 'blue', height: 60 }}><Text>CONTENT</Text></View>}
            />,
            () => <Expandable.Element
              style={{
                marginTop: 10
              }}
              namespace="group2"
              renderHeader={() => <View style={{ backgroundColor: 'red', height: 30 }}><Text>HEADER 2</Text></View>}
              renderContent={() => <View style={{ backgroundColor: 'blue', height: 60 }}><Text>CONTENT</Text></View>}
            />,
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
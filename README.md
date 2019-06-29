# react-native-da-expandable

You have two main elements

- CONTAINER

The container goal is for you to wrapp the collapsible elements inside of it. THis element allows you to scroll and collapse 
its children

- COLLAPSIBLE

The collapsible element itself

## Properties

### Container

|      prop      | default | type   | isRequired |                                                            description                                                            |                      example                     |
|:--------------:|---------|--------|------------|:---------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------:|
| separator      | null    | Object | false      | One react component to use as separator between the container childs                                                              | () => <View style={{marginVertical: 10}}></View> |
| footer         | Object  | Object | false      | One react component to use as the container footer                                                                                | () => <View><Text>FOOTER</Text></View>           |
| listRef        | null    | Object | false      | You can get the reference for the Container in order to scroll for ex                                                             | ref => this.containerRef = ref                   |
| changedLayouts | Object  | Object | false      | This property lets you get all the layouts of the container childs.  Then you can perform your logic and scroll to where you want |                                                  |

### Collapsible

| prop          | default   | type   | isRequired |                                                                                                                                        description | example                                     |
|---------------|-----------|--------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------:|---------------------------------------------|
| id            | null      | Object | false      | One react component to use as separator between the container childs                                                                               | 'myid'                                      |
| namespace     | undefined | string | false      | The collapsible element can have one namespace.  The container will then make sure only one element on the same namespace is  expanded             | 'expandall'                                 |
| renderHeader  |           | Object | true       | One component to be rendered has the header. Here you will get toggle one function to toggle manually and one boolean indicating if it is expanded | (toggle, isExpanded) => <Text>HEADER</Text> |
| renderContent |           | Object | true       | One component to be rendered has the content.                                                                                                      | () => HEADER                                |

## TODO
- Animate the while toggling expandable state
- Add JSDOcs

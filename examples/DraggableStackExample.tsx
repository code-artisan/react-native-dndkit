import React, {type FunctionComponent} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  DndProvider,
  type ObjectWithId,
  Draggable,
  DraggableStack,
  type DraggableStackProps,
} from 'react-native-dndkit';

const items = ['🤓', '🤖🤖', '👻👻👻', '👾👾👾👾'];
const data = items.map((letter, index) => ({
  value: letter,
  id: `${index}-${letter}`,
})) satisfies ObjectWithId[];

export const DraggableStackExample: FunctionComponent = () => {
  const onStackOrderChange: DraggableStackProps['onOrderChange'] = value => {
    console.log('onStackOrderChange', value);
  };
  const onStackOrderUpdate: DraggableStackProps['onOrderUpdate'] = value => {
    console.log('onStackOrderUpdate', value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DraggableStack Example</Text>
      <DndProvider>
        <DraggableStack
          direction="row"
          gap={10}
          style={styles.stack}
          onOrderChange={onStackOrderChange}
          onOrderUpdate={onStackOrderUpdate}>
          {data.map(letter => (
            <Draggable
              key={letter.id}
              id={letter.id}
              style={[styles.draggable]}>
              <Text style={styles.text}>{letter.value}</Text>
            </Draggable>
          ))}
        </DraggableStack>
      </DndProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: 'rgba(0, 0, 0, .1)',
  },
  stack: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  title: {
    color: '#555',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  draggable: {
    backgroundColor: 'seagreen',
    height: 100,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
    padding: 16,
  },
});

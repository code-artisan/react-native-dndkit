import {
  DndProvider,
  type ObjectWithId,
  Draggable,
  DraggableGrid,
  DraggableGridProps,
} from 'react-native-dndkit';
import React, {type FunctionComponent} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const GRID_SIZE = 3;
const items: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const data = items.map((letter, index) => ({
  id: `${index}-${letter}`,
  value: letter,
})) satisfies ObjectWithId[];

export const DraggableGridExample: FunctionComponent = () => {
  const onGridOrderChange: DraggableGridProps['onOrderChange'] = value => {
    console.log('onGridOrderChange', value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DraggableGrid Example</Text>
      <View style={styles.body}>
        <DndProvider>
          <DraggableGrid
            direction="row"
            size={GRID_SIZE}
            style={styles.grid}
            onOrderChange={onGridOrderChange}>
            {data.map(item => (
              <Draggable key={item.id} id={item.id} style={styles.draggable}>
                <Text style={styles.text}>{item.value}</Text>
              </Draggable>
            ))}
          </DraggableGrid>
        </DndProvider>
      </View>
    </View>
  );
};

const LETTER_WIDTH = 100;
const LETTER_HEIGHT = 100;
const LETTER_GAP = 10;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 12,
    backgroundColor: 'rgba(0, 0, 0, .1)',
  },
  body: {
    alignItems: 'center'
  },
  grid: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: LETTER_WIDTH * GRID_SIZE + LETTER_GAP * (GRID_SIZE - 1),
    gap: LETTER_GAP,
  },
  title: {
    color: '#555',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  draggable: {
    backgroundColor: 'seagreen',
    width: LETTER_WIDTH,
    height: LETTER_HEIGHT,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
  },
});

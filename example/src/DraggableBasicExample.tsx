import {
  DndProvider,
  DndProviderProps,
  Draggable,
  DraggableProps,
  Droppable,
  DroppableProps,
  useDraggableStyle,
  useDroppableStyle,
} from 'react-native-dndkit';
import React, {useState, type FunctionComponent} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated, {
  runOnJS,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export const DraggableBasicExample: FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const dynamicData = useSharedValue({count: 0});

  const onDragEnd = () => {
    setCount(count => count + 1);
  };

  const handleDragEnd: DndProviderProps['onDragEnd'] = ({active, over}) => {
    'worklet';
    if (over) {
      const {count} = dynamicData.value;
      console.log(`Current count is ${count}`);
      Object.assign(dynamicData.value, {count});
      runOnJS(onDragEnd)();
    }
  };

  const handleBegin: DndProviderProps['onBegin'] = () => {
    'worklet';
    console.log('onBegin');
  };

  const handleFinalize: DndProviderProps['onFinalize'] = () => {
    'worklet';
    console.log('onFinalize');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DraggableStack Example</Text>
      <View style={styles.body}>
        <DndProvider
          onBegin={handleBegin}
          onFinalize={handleFinalize}
          onDragEnd={handleDragEnd}>
          <MyDroppable id="drop">
            <Text style={styles.text}>DROP</Text>
          </MyDroppable>
          <MyDraggable id="drag" data={dynamicData}>
            DRAG
          </MyDraggable>
          <Text style={styles.count} testID="button">count is {count}</Text>
        </DndProvider>
      </View>
    </View>
  );
};

const MyDraggable: FunctionComponent<DraggableProps> = ({
  id,
  ...otherProps
}) => {
  const animatedStyle = useDraggableStyle(id, ({isActive, isActing}: {isActive: boolean, isActing: boolean}) => {
    'worklet';
    return {
      opacity: isActing ? 0.5 : 1,
      backgroundColor: isActive ? 'lightseagreen' : 'seagreen',
      transform: [{scale: withSpring(isActive ? 1.1 : 1)}],
    };
  });

  return (
    <Draggable id={id} {...otherProps}>
      <Animated.View style={[styles.box, animatedStyle]}>
        <Text style={styles.text}>DRAG</Text>
      </Animated.View>
    </Draggable>
  );
};

const MyDroppable: FunctionComponent<DroppableProps> = ({
  id,
  ...otherProps
}) => {
  const animatedStyle = useDroppableStyle(id, ({isActive}: {isActive: boolean}) => {
    'worklet';
    return {
      opacity: isActive ? 0.9 : 1,
      backgroundColor: isActive ? 'steelblue' : 'teal',
      transform: [{rotate: withSpring(isActive ? `-20deg` : `0deg`)}],
    };
  });

  return (
    <Droppable id={id} {...otherProps}>
      <Animated.View style={[styles.box, animatedStyle]}>
        <Text style={styles.text}>DROP</Text>
      </Animated.View>
    </Droppable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: 'rgba(0, 0, 0, .1)',
  },
  body: {
    alignItems: 'center'
  },
  title: {
    color: '#555',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  box: {
    margin: 12,
    padding: 12,
    height: 96,
    width: 96,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, .4)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 14,
    padding: 12,
  },
  count: {
    textAlign: 'center'
  }
});

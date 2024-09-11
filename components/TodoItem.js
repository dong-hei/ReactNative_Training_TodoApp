import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import D from '../assets/delete-svgrepo-com (1).svg';
import CU from '../assets/checkbox-unchecked-svgrepo-com (1).svg';
import CC from '../assets/checkbox-check-svgrepo-com (1).svg';
import { useDispatch } from 'react-redux';
import { updateTodo, deleteTodo } from '../redux/slice/todoSlice';

const TodoItem = (props) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.itemContainer}>
      <Pressable
        style={styles.itemCheckBox}
        hitSlop={10}
        onPress={() => dispatch(updateTodo(props.id))}
      >
        {props.state === 'todo' ? (
          <CU />
        ) : (
          <CC style={styles.itemCheckboxCheckedIcon} />
        )}
      </Pressable>
      <Text
        style={[
          styles.itemTxt,
          props.state === 'done' ? styles.itemTxtChecked : '',
        ]}
      >
        {props.text}
      </Text>
      <Pressable
        style={[
          styles.deleteBtn,
          props.state === 'done' ? styles.deleteBtnDone : '',
        ]}
        hitSlop={10}
        onPress={() => dispatch(deleteTodo(props.id))}
      >
        <D />
      </Pressable>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: '#f7f8fa',
  },
  itemCheckBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    marginRight: 13,
    borderRadius: 6,
  },

  itemCheckboxCheckedIcon: {
    shadowColor: '#000000',
    shadowOpacity: 0.14,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  itemTxt: {
    marginRight: 'auto',
    paddingRight: 25,
    fontSize: 15,
    lineHeight: 20,
    color: '#737373',
  },
  itemTxtChecked: {
    opacity: 0.3,
    textDecorationLine: 'line-through',
  },
  deleteBtn: { opacity: 0.8 },
  deleteBtnDone: { opacity: 0.8 },
});

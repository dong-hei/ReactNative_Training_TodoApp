import {
  View,
  Text,
  Pressable,
  Platform,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
} from 'react-native';

import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { addTodo } from '../redux/slice/todoSlice';
const InputForm = () => {
  const [currentValue, setCurrentValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (currentValue !== '') {
      dispatch(addTodo(currentValue));
      setCurrentValue('');
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.addFormContainer}
    >
      <TextInput
        style={styles.inputField}
        placeHolder="할 일을 작성해주세요."
        value={currentValue}
        onChangeText={setCurrentValue} //값 입력시 콜백함수 호출
        onSubmitEditing={handleSubmit} //버튼 클릭 이외에 엔터키로 Todo 생성하기 위함
      />
      <Pressable style={styles.addBtn} onPress={handleSubmit}>
        <Text style={styles.addBtnTxt}>*</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  addFormContainer: {
    flexDirection: 'row',
    marginTop: 'auto',
    marginBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: '#f7f8fa',
  },
  inputField: {
    flex: 1,
    height: 41,
    borderRadius: 4,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 1,
    color: '#000000',
    fontSize: 15,
    textAlignVertical: 'center',
    padding: 5,
    marginRight: 25,
  },
  addBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 42,
    height: 42,
    borderRadius: 4,
    backgroundColor: 'rgba(0,0,0,0.7)',
    shadowColor: '#000000',
    shadowOpacity: 0.14,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    addBtnTxt: { color: 'white', fontSize: 25 },
  },
});

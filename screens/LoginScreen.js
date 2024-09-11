import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import LoginIcon from '../assets/login-3-svgrepo-com.svg';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.replace('Main');
      }
    });
  }, []);
  const handleSignUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log('user', user);
      Toast.show({
        type: 'success',
        text1: '회원가입 성공',
        text2: `${email} 이메일로 가입에 성공했습니다.`,
      });
    } catch (error) {
      Alert.alert('회원가입 도중 문제가 발생했습니다', error.message, [
        { text: '닫기', onPress: () => console.log('닫기') },
      ]),
        { cancelable: true };
    }
  };

  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      Alert.alert('로그인 도중 문제가 발생했습니다.', error.message, [
        { text: '닫기', onPress: () => console.log('닫기') },
        { cancelable: true },
      ]);
    }
  };
  return (
    <View style={styles.container}>
      <LoginIcon />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="이메일"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="비밀번호"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={handleLogin}>
            <Text style={styles.btnTxt}>로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.btnOutline]}
            onPress={handleSignUp}
          >
            <Text style={styles.btnTxtOutlineTxt}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
    marginTop: 15,
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  btnContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  btn: {
    backgroundColor: 'black',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
  btnTxt: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
  btnTxtOutlineTxt: {
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
  },
});

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import InputButton from '../components/InputButton';
// import {} from '../components/auth';
// import {signup, signout, signin} from '../components/auth';

const BgImg = require('../assets/images/bg.png');
const Logo = require('../assets/images/logo.png');
const chatplus = require('../assets/images/chatplus.png');

const {width, height} = Dimensions.get('screen');

const Register = ({navigation}) => {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValidation, setEmailValidation] = useState(false);

  // const handleSignUp = async () => {
  //   if (emailValidation && email !== '') {
  //     await createUserWithEmailAndPassword(firebaseAuth, email, password)
  //       .then(userCredential => {
  //         console.log(userCredential);
  //         const data = {
  //           _id: userCredential?.user.uid,
  //           fullName: name,
  //           providerData: userCredential.user.providerData[0],
  //         };
  //         console.log(data);

  //         setDoc(
  //           doc(firestoreDB, 'users', userCredential?.user.uid),
  //           data,
  //         ).then(() => {
  //           navigation.navigate('Sign In');
  //         });
  //       })
  //       .catch(error => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         console.log('err0r code', errorCode);
  //         console.log('err sms', errorMessage);
  //         // ..
  //       });
  //   }
  // };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            backgroundColor: '#fff',
            borderTopLeftRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              color: '#000',
              fontWeight: '700',
              marginTop: 20,
            }}>
            Join With Us
          </Text>
        </View>
        <Image
          source={chatplus}
          resizeMode="cover"
          style={{
            height: 60,
            width: 60,
            borderRadius: 20,
            backgroundColor: '#422561',
            alignSelf: 'center',
            marginVertical: 20,
          }}
        />

        <TextInput
          placeholder={'Name'}
          placeholderTextColor={'grey'}
          value={fullname}
          onChangeText={e => setFullName(e)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={false}
          style={{
            borderWidth: 1,
            height: 50,
            width: 280,
            alignSelf: 'center',
            borderRadius: 10,
            paddingLeft: 20,
            margin: 20,
          }}
        />

        <TextInput
          placeholder={'Email'}
          placeholderTextColor={'grey'}
          value={email}
          onChangeText={e => setEmail(e)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={false}
          style={{
            borderWidth: 1,
            height: 50,
            width: 280,
            alignSelf: 'center',
            borderRadius: 10,
            paddingLeft: 20,
            margin: 20,
          }}
        />

        <TextInput
          placeholder={'Password'}
          placeholderTextColor={'grey'}
          value={password}
          onChangeText={e => setPassword(e)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          style={{
            borderWidth: 1,
            height: 50,
            width: 280,
            alignSelf: 'center',
            borderRadius: 10,
            paddingLeft: 20,
            margin: 20,
          }}
        />

        <TouchableOpacity
          style={styles.btnContainer}
          // onPress={() => signup(fullname, email, password)}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.btnTitle}>Register</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Text style={{fontSize: 14, color: '#000000', marginLeft: 5}}>
            Already have an account !
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{fontSize: 14, color: '#42C561', marginLeft: 5}}>
              Login here
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  btnContainer: {
    backgroundColor: '#42C561',
    marginVertical: 20,
    height: 50,
    width: 280,
    alignSelf: 'center',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

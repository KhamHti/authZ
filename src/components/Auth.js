import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

export const SignUp = (fullname, email, password) => {
  if (!fullname || !email || !password) {
    return Alert.alert('Enter Data');
  } else {
    return auth()
      .createUserWithEmailAndPassword(email.trim(), password)
      .then(cred => {
        const {uid} = cred.user;
        auth().currentUser.updateProfile({
          displayName: fullname,
        });
        return uid;
      })
      .catch(err => {
        Alert.alert(err.message);
      });
  }
};

export const signin = (email, password) => {
  if (!email || !password) {
    return auth()
      .signInWithEmailAndPassword(email.trim(), password)
      .then(() => {
        console.log(auth().currentUser.uid);
      })
      .catch(err => Alert.alert(err.message));
  }
};

export const signout = () => {
  return auth().signOut;
};

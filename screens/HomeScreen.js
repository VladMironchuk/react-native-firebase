import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  Modal,
} from 'react-native';
import { gStyles } from '../styles/gStyles';
import { Ionicons } from '@expo/vector-icons';
import Form from '../components/Form';
import { useDispatch, useSelector } from 'react-redux';
import { newsActions } from '../redux/slices/news';
import { modalActions } from '../redux/slices/modal';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default function HomeScreen({ navigation }) {
  const news = useSelector((state) => state.news.news);
  const modalIsVisible = useSelector((state) => state.modal.modalIsVisible);
  const dispatch = useDispatch();

  const onAddArticle = (article) => {
    dispatch(newsActions.addArticle(article));
    dispatch(modalActions.disableModal());
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigation.replace('Login');
    });
  };

  return (
    <View style={gStyles.main}>
      <Modal visible={modalIsVisible}>
        <View style={gStyles.main}>
          <Ionicons
            name="close-circle"
            size={24}
            color="black"
            onPress={() => dispatch(modalActions.disableModal())}
          />
          <Text style={styles.title}>Add Articles Form</Text>
          <Form onAddArticle={onAddArticle} />
        </View>
      </Modal>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Ionicons
          name="add-circle"
          size={24}
          color="black"
          onPress={() => dispatch(modalActions.showModal())}
        />
        <TouchableOpacity
          onPress={handleSignOut}
          style={{
            backgroundColor: 'blue',
            color: 'white',
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 10,
            width: '30%',
          }}
        >
          <Text
            style={{
              flex: 1,
              justifyContent: 'center',
              textAlign: 'center',
              color: 'white',
            }}
          >
            Sign out
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={[gStyles.title, styles.header]}>Main Page</Text>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('FullInfo', item)}
            key={item.id}
            style={styles.item}
          >
            <Image
              source={{
                width: '100%',
                height: 300,
                uri: item.img,
              }}
            />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.anons}>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    marginBottom: 30,
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 600,
    textAlign: 'center',
    marginTop: 20,
    color: '#474747',
  },
  anons: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color: '#474747',
  },
});

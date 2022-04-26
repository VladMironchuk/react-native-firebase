import { View, StyleSheet, Button, TextInput } from 'react-native';
import { Formik } from 'formik';

export default function Form({ onAddArticle }) {
  return (
    <View>
      <Formik
        initialValues={{
          name: '',
          anons: '',
          fullText: '',
          img: '',
        }}
        onSubmit={(values, action) => {
          onAddArticle(values);
          action.resetForm();
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              value={props.values.name}
              placeholder="Enter a name"
              onChangeText={props.handleChange('name')}
            />
            <TextInput
              style={styles.input}
              value={props.values.anons}
              placeholder="Enter a anons"
              onChangeText={props.handleChange('anons')}
              multiline
            />
            <TextInput
              style={styles.input}
              value={props.values.fullText}
              placeholder="Enter an article"
              onChangeText={props.handleChange('fullText')}
              multiline
            />
            <TextInput
              style={styles.input}
              value={props.values.img}
              placeholder="Enter image uri"
              onChangeText={props.handleChange('img')}
            />
            <Button title="Add article" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
    borderColor: 'silver',
    borderRadius: 5,
  },
});

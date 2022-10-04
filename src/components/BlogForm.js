import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const BlogForm = ({ onSubmit, initialValues = { title: "", content: "" } }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.text}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        autoCapitalize={false}
        onChangeText={(newTitle) => setTitle(newTitle)}
      />
      <Text style={styles.text}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        autoCapitalize={false}
        onChangeText={(newContent) => setContent(newContent)}
      />
      <Button title="Save" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 10,
    marginVertical: 5,
    fontSize: 18,
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    marginHorizontal: 10,
    marginBottom: 15,
    padding: 5,
  },
});

export default BlogForm;

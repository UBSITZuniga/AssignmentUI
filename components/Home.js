import React from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();

    const AddAssign = () => {
        navigation.navigate('AddAssignment');
    };

  return (
    <View style={styles.pageSizingContainer}>
      {/* Start of top divider */}
      <View style={styles.pageHeader}>
        <Text style={styles.headerGreeting}>Hi there,</Text>
        <Text style={styles.headerTitle}>Check on all your Assignments</Text>
      </View>
      {/* End of divider */}
      <View style={styles.pageBody}>
        {/* Start of Active and Archived Buttons */}
        <View style={styles.activeAndArchived}>
          <Pressable style={styles.buttonActive}>
            <Text style={styles.aButtonProps}>ACTIVE</Text>
          </Pressable>
          <Pressable style={styles.buttonArchived}>
            <Text style={styles.aButtonProps}>ARCHIVED</Text>
          </Pressable>
        </View>
        {/* End of Active and Archived Button */}
        {/* Start of list items */}
        <View style={styles.items}>
          {/* Items go here */}
          <Text>Item 1</Text>
        </View>
        {/* End of list items */}
        {/* Start of Add Button */}
        <View style={styles.bottomAddButton}>
          <Pressable style={styles.bottomButton} onPress={AddAssign}>
            <Text style={styles.bottomText}>+</Text>
          </Pressable>
        </View>
        {/* End of Add Button */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '808080',
    
  },
  pageSizingContainer: {
    height: '100%',
    width: '100%',
  },
  pageHeader: {
    height: '30%',
    width: '100%',
    backgroundColor: '#3546A0',
    paddingTop: '30%',
    paddingLeft: '10%',
    
  },
  headerGreeting:{
    color: '#FFF',
    opacity: 0.5,
    
  },
  headerTitle:{
    fontSize: 30,
    color: '#FFF',
    fontWeight: 'bold',
    fontFamily: 'arial',
    width: '80%',
    
  },
  // All Body Elements Below
  pageBody: {
    height: '70%',
    backgroundColor: 'FFF',
  },
  activeAndArchived:{
    paddingTop: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '20%',
    paddingRight: '20%',
    
  },
  buttonActive:{
    backgroundColor: '#808080',
    borderRadius: 50,
    width: '23%',
    height: '120%',
  },
  buttonArchived:{
    backgroundColor: '#808080',
    borderRadius: 50,
    width: '30%',
    height: '120%',
  },
  aButtonProps:{
    fontWeight: 'bold',
    fontSize: 12,
    paddingLeft: '10%',
  },
  items: {
    paddingLeft: 25,
    paddingTop: 15,
  },
  bottomAddButton: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    paddingLeft: '80%',
    paddingRight: '5%',
  },
  bottomButton:{
    width: 60,
    height: 60,
    backgroundColor: '#3546A0',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    paddingBottom: 10,
  },
  bottomText: {
    fontSize: 35,
  },

});

export default Home;

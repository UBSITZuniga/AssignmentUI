import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, TextInput, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddAssignment = () => {
    const navigation = useNavigation();

    const [isModalVisible, setIsModalVisible] = useState(false);

    const goBack = () => {
        navigation.goBack(); // Navigates back to the previous screen
    };

    const openModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerForm}>
                <View style={styles.backAndAddHeader}>
                    <Pressable style={styles.backBtn} onPress={goBack}>
                        <Text style={styles.backBtnText}>Back</Text>
                    </Pressable>
                    <Text>ADD AN ASSIGNMENT</Text>
                </View>
                {/* START OF TEXT INPUT */}
                <View style={styles.bodyForm}>
                    <Text style={styles.titleText}>Title</Text>
                    <TextInput style={styles.inputTitle} maxLength={50} />
                    <Text style={styles.descriptionTitle}> Description</Text>
                    <TextInput
                        multiline
                        style={styles.inputDescription}
                        numberOfLines={5}
                        maxLength={200}
                    />
                    <Pressable style={styles.addAssignmentBtn} onPress={openModal}>
                        <Text style={styles.addAssignmentText}>
                            Add Assignment
                        </Text>
                    </Pressable>
                </View>
                {/* END OF TEXT INPUT */}
            </View>
            <Modal
                visible={isModalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={closeModal}
            >
                {/* MODAL CONTENT */}
                <View style={styles.modalContainer}>
                    <Text style={styles.modalText}>Assignment Added!</Text>
                    <Pressable style={styles.closeModalBtn} onPress={closeModal}>
                        <Text style={styles.closeModalText}>Close</Text>
                    </Pressable>
                </View>
            </Modal>
        </View>
    );
};

export default AddAssignment;

const styles = StyleSheet.create({
   
    container: {
        height: '100%',
    },
    containerForm: {
        backgroundColor: '#FFF',
        height: '95%',
        width: '90%',
        position: 'absolute',
        marginLeft: 20,
        marginTop: 20,
        borderRadius: 20,

    },
    backAndAddHeader: {
        height: '25%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
    },
    backBtn: {
        backgroundColor: '#3546A0',
        height: 20,
        width: 40,
    },
    backBtnText: {

    },
    bodyForm: {
        height: '75%',
        paddingLeft: 20,
    },
    titleText: {
        fontSize: 10,
        fontWeight: 'bold',
        paddingBottom: 5,

    },
    inputTitle: {
        backgroundColor: '#ECECEC',
        marginRight: 20,
        borderRadius: 5,
        height: 25,
    },
    descriptionTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 5,
    },
    inputDescription:{
        backgroundColor: '#ECECEC',
        marginRight: 20,
        borderRadius: 5,
    },
    addAssignmentBtn: {
        position: 'absolute',
        marginTop: '60%',
        marginLeft: '20%',
        backgroundColor: '#3546A0',
        width: 160,
        height: 20,
        borderRadius: 40,

    },
    addAssignmentText: {
        paddingLeft: '28%',
        paddingTop: '2%',
        fontSize: 10,
        color: 'white',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
    },
    closeModalBtn: {
        backgroundColor: '#3546A0',
        padding: 10,
        borderRadius: 5,
    },
    closeModalText: {
        color: 'white',
        fontWeight: 'bold',
    },
});



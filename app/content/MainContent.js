import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, Dimensions, TouchableNativeFeedback } from 'react-native';

function MainContent(props) {
    return (
        <View style={{
            width: '100%',
            paddingTop: 30,
            paddingLeft: '5%',
            paddingRight: '5%',
            paddingBottom: 300,
        }}>
            <Text style={styles.headerText}>Top Rated</Text>
            <Text style={styles.stdText}>Rated By User</Text>
            <View style={styles.wrapperBox}>
                <TouchableNativeFeedback>
                    <View style={styles.contentBox}>
                        <Image source={require('../assets/menu/menu1.jpg')} style={{
                            width: '100%',
                            height: 150,
                            borderRadius: 8
                        }} />
                        <View style={styles.descrtptionMenu}>
                            <Text style={styles.headerText}>
                                Title Menu
                            </Text>
                            <Text style={styles.stdText}>
                                Title Menu
                            </Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback>
                    <View style={styles.contentBox}>
                        <Image source={require('../assets/menu/menu1.jpg')} style={{
                            width: '100%',
                            height: 150,
                            borderRadius: 8
                        }} />
                        <View style={styles.descrtptionMenu}>
                            <Text style={styles.headerText}>
                                Title Menu
                            </Text>
                            <Text style={styles.stdText}>
                                Title Menu
                            </Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback>
                    <View style={styles.contentBox}>
                        <Image source={require('../assets/menu/menu1.jpg')} style={{
                            width: '100%',
                            height: 150,
                            borderRadius: 8
                        }} />
                        <View style={styles.descrtptionMenu}>
                            <Text style={styles.headerText}>
                                Title Menu
                            </Text>
                            <Text style={styles.stdText}>
                                Title Menu
                            </Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback>
                    <View style={styles.contentBox}>
                        <Image source={require('../assets/menu/menu1.jpg')} style={{
                            width: '100%',
                            height: 150,
                            borderRadius: 8
                        }} />
                        <View style={styles.descrtptionMenu}>
                            <Text style={styles.headerText}>
                                Title Menu
                            </Text>
                            <Text style={styles.stdText}>
                                Title Menu
                            </Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    stdText: {
        fontSize: 14
    },
    wrapperBox: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        flexWrap: 'wrap'
    },
    contentBox: {
        width: '48%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: 20,
        justifyContent: 'space-between',
    },
    descrtptionMenu:{
        padding: 10,
    }
})

export default MainContent;
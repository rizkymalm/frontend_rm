import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, Dimensions, TouchableNativeFeedback } from 'react-native';

function MainContent(props) {
    const menu = [
        {rating: 4.7, title: "Title Menu"},
        {rating: 4.5, title: "Title Menu"},
        {rating: 4.2, title: "Title Menu"},
        {rating: 4.2, title: "Title Menu"},
    ]
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

                {
                    menu.map((menu, index) => (
                        <TouchableNativeFeedback>
                            <View style={styles.contentBox}>
                                <Image source={{uri: 'https://rizkymalm.com/assets/images/test/menu1.jpg'}} style={{
                                    width: '100%',
                                    height: 150,
                                    borderRadius: 8
                                }} />
                                <View style={styles.descrtptionMenu}>
                                    <Text style={styles.headerText}>
                                        {menu.title}
                                    </Text>
                                    <View style={{
                                        width: "100%",
                                        flexDirection: 'row',
                                        marginTop: 10
                                    }}>
                                        <Text style={styles.stdText}>{menu.rating}</Text>
                                        <Image source={{uri: 'https://rizkymalm.com/assets/images/test/star_filled.png'}} style={{
                                            width: 20,
                                            height: 20,
                                            marginLeft: 5
                                        }} />
                                    </View>
                                </View>
                            </View>
                        </TouchableNativeFeedback>
                    ))
                }
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
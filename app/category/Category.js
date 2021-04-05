import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, Dimensions, TouchableNativeFeedback } from 'react-native';


function Category(props) {
    return (
        <View style={styles.wrapperCategory}>
            <TouchableNativeFeedback>
                <View style={styles.contentCategory}>
                    <Image source={require('../assets/icon/bestseller.png')} style={{
                                width: "80%",
                            }} />
                    <Text style={{fontSize: 14}}>Best Seller</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
                <View style={styles.contentCategory}>
                    <Image source={require('../assets/icon/nearme.png')} style={{
                                width: "80%",
                            }} />
                    <Text style={{fontSize: 14}}>Near Me</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
                <View style={styles.contentCategory}>
                    <Image source={require('../assets/icon/sale.png')} style={{
                                width: "80%",
                            }} />
                    <Text style={{fontSize: 14}}>Big Deals</Text>
                </View>
            </TouchableNativeFeedback>
            
        </View>
    );
}


const styles = StyleSheet.create({
    wrapperCategory: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        paddingTop: 15,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    contentCategory:{
        flex: 1,
        width: "30%",
        margin: "3%",
        borderColor: "#CCCCCC",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10
    }
});

export default Category;
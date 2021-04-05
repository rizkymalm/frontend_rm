import React from 'react';
import { StyleSheet, Text, View, Image, TouchableNativeFeedback } from 'react-native';

function BottomMenu(props) {
    const heightMenu = 100

    return (
        <View style={styles.wrapperMenu}>
            {/* <View style={{
                position: 'absolute',
                top: 5,
                width: '100%',
                height: 30,
                alignItems: 'center'
            }}>
                <TouchableNativeFeedback>
                    <View style={{
                        width: '30%',
                        height: 30,
                        alignItems: 'center'
                    }}>
                        <Image source={require('../assets/icon/stripes.png')} style={{
                            width: '50%',
                            height: 5
                        }} />
                    </View>
                </TouchableNativeFeedback>
            </View> */}
            <TouchableNativeFeedback>
                <View style={styles.wrapperButton}>
                    <View style={styles.buttonMenuImg}>
                        <Image source={require('../assets/icon/ride.png')} style={{
                            width: 35,
                            height: 35
                        }} />
                    </View>
                    <Text style={{
                        fontSize: 12,
                        color: "#ffffff"
                    }}>Let's Ride</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
                <View style={styles.wrapperButton}>
                    <View style={styles.buttonMenuImg}>
                    <Image source={require('../assets/icon/food.png')} style={{
                            width: 35,
                            height: 35
                        }} />
                    </View>
                    <Text style={{
                        fontSize: 12,
                        color: "#ffffff"
                    }}>Let's Eat</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
                <View style={styles.wrapperButton}>
                    <View style={styles.buttonMenuImg}>
                    <Image source={require('../assets/icon/shop.png')} style={{
                            width: 35,
                            height: 35
                        }} />
                    </View>
                    <Text style={{
                        fontSize: 12,
                        color: "#ffffff"
                    }}>Let's Shop</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
                <View style={styles.wrapperButton}>
                    <View style={styles.buttonMenuImg}>
                    <Image source={require('../assets/icon/play.png')} style={{
                            width: 35,
                            height: 35
                        }} />
                    </View>
                    <Text style={{
                        fontSize: 12,
                        color: "#ffffff"
                    }}>Let's play</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapperMenu: {
      flex: 1,
      flexDirection: 'row',
      position:'absolute',
      bottom: 0,
      width: '100%',
      height: 100,
      backgroundColor: '#70A143',
      justifyContent: 'space-evenly',
      paddingLeft: "10%",
      paddingRight: "10%",
      paddingTop: 20,
      paddingBottom: 10,
      zIndex: 101
    },
    wrapperButton:{
        height: "100%",
        alignItems: 'center',
    },
    buttonMenuImg:{
        width: 50,
        height: 50,
        backgroundColor: "#ffffff",
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    }
  });

export default BottomMenu;
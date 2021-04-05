import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TextInput } from 'react-native';

function HeaderPage(props) {
    return (
        <View style={styles.wrapperHeader}>
            <View style={styles.contentHeader}>
                <View style={styles.roudedProfilePic}>
                    <Image source={require('../assets/icon/profile-blue.png')} style={{
                        width: "70%",
                        height: "70%"
                    }} />
                </View>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#70A143",
                    marginLeft: 10
                }}>Hi, Rizki</Text>
            </View>
            <View style={{
                flex: 1,
                width: "100%",
                alignItems: 'center',
                paddingTop: 20,
                paddingBottom: 20,
                backgroundColor: "#ffffff"
            }}>
                <TextInput style={{
                    height: 40,
                    width: "90%",
                    borderRadius: 5,
                    paddingLeft: 20,
                    paddingRight: 20,
                    backgroundColor: "#f5f5f5",
                    borderColor: "#CCCCCC",
                    borderWidth: StyleSheet.hairlineWidth
                }} placeholder="Search">

                </TextInput>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapperHeader: {
      flex: 1,
      flexDirection: 'column',
      position:'absolute',
      top: 0,
      width: '100%',
      marginBottom: 20,
      backgroundColor: '#70A143',
      justifyContent: 'space-evenly',
      paddingTop: StatusBar.currentHeight,
    },
    contentHeader:{
        flex: 1,
        width: "100%",
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingTop: 20,
        backgroundColor: "#ffffff",
        flexDirection: 'row',
        alignItems: 'center',
    },
    roudedProfilePic:{
        width: 50,
        height: 50,
        backgroundColor: "#70A143",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40
    }
  });



export default HeaderPage;
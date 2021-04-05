import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, Dimensions } from 'react-native';

function ContentSlider(props) {
    const colors = [
        {
            colour: "#2FCC71",
            img: 'https://rizkymalm.com/assets/images/test/food1.jpg',
            text: "Desert"
        },
        {
            colour: "#FECD01",
            img: 'https://rizkymalm.com/assets/images/test/food2.jpg',
            text: "Snacks"
        },
        {
            colour: "#B8C9F1",
            img: 'https://rizkymalm.com/assets/images/test/food3.jpg',
            text: "Sweets"
        }
    ]
    const { width } = Dimensions.get("window")
    const percentWidth = (5/100) * width
    const wi = percentWidth * 2
    return (
        <View style={styles.wrapperSlider}>
            <ScrollView
                pagingEnabled
                horizontal
                style={{
                    width: "100%",
                    height: 200,
                    shadowColor: "#000"
                }}
            >
                {
                    colors.map((color, index) => (
                        <View 
                            style={{
                                position: 'relative',
                                width: width - wi,
                                marginLeft: 20,
                                marginRight: 20,
                                height: "100%",
                                backgroundColor: color.colour,
                                borderRadius: 10
                            }}>
                                <Image source={{ uri: color.img}} style={{width: "100%", height: "100%", borderRadius: 10}} />
                                <View style={{
                                    width: "100%",
                                    height: 50,
                                    backgroundColor: "black",
                                    position: 'absolute',
                                    bottom: 0,
                                    opacity: 0.5,
                                    alignItems:'center',
                                    justifyContent: 'center',
                                    borderRadius: 10

                                }}>
                                    <Text style={{
                                        fontSize: 18,
                                        color: "#ffffff",
                                    }}>{color.text}</Text>
                                </View>
                            </View>
                    ))
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapperSlider: {
        width: '100%',
        height: 250,
        paddingTop: 15,
        paddingBottom: 10,
        borderRadius: 10,
    }
});

export default ContentSlider;
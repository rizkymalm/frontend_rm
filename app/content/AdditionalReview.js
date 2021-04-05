import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, StatusBar, Dimensions, TextComponent, TouchableOpacity, TouchableNativeFeedback, } from 'react-native';


function AdditionalReview(props) {
    const [defaultRating, setDefaultRating] = useState(0)
    const [maxRating, setmaxRating] = useState([1,2,3,4,5])
    const starImgFilled = 'https://rizkymalm.com/assets/images/test/star_filled.png'
    const starImgCorner = 'https://rizkymalm.com/assets/images/test/star_corner.png'
    const CustomRatingBar = () => {
        return(
            <View style={styles.CustomRatingBarStyle}>
                {
                    maxRating.map((item, key) => {
                        return(
                            <TouchableOpacity
                                activeOpacity = {0.7}
                                key={item}
                                onPress={() => setDefaultRating(item)}
                            >
                                <Image
                                    style={styles.starImgStyle}
                                    source={
                                        item <= defaultRating
                                        ? {uri: starImgFilled}
                                        : {uri: starImgCorner}
                                    }
                                />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }
    return (
        <View style={styles.wrapperAddtionalReview}>
            <TouchableNativeFeedback>
            <View style={styles.contentAdditionalReview}>
                <Image source={require('../assets/icon/rating.png')} style={{
                    width: 100,
                    height: 100
                }} />
                <View style={{
                    flex: 1,
                    paddingLeft: 10,
                    paddingRight: 10
                }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold'
                    }}>How was your food</Text>
                    <Text style={{
                        fontSize: 12
                    }}>Warung Makan Sederhana</Text>
                    <View style={{
                        width: "100%",
                        paddingTop: 10,
                        paddingBottom: 10,
                    }}>
                        <CustomRatingBar />
                    </View>
                </View>
            </View>
            </TouchableNativeFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapperAddtionalReview: {
        width: "100%",
        paddingLeft: "5%",
        paddingRight: "5%"
    },
    contentAdditionalReview: {
        flexDirection: 'row',
        width: "100%",
        shadowColor: "#000",
        padding: 15,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
        borderRadius: 10,
        backgroundColor: "white"
    },
    CustomRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    starImgStyle: {
        width: 30,
        height: 30,
        resizeMode: 'cover'
    }
})

export default AdditionalReview;
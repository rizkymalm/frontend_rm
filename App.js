import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Platform, ScrollView } from 'react-native';
import BottomMenu from './app/menu/BottomMenu'
import HeaderPage from './app/header/HeaderPage'
import ContentSlider from './app/slider/ContentSlider'
import Category from './app/category/Category'
import AdditionalReview from "./app/content/AdditionalReview";
import MainContent from './app/content/MainContent'

export default function App() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <HeaderPage />
          <ScrollView style={styles.content}>
            <ContentSlider />
            <Category />
            <AdditionalReview />
            <MainContent />
          </ScrollView>
        <BottomMenu />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: Platform.OS === "web" ? 700 : "100%"
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    top: 170,
    zIndex: 100,
    width: Platform.OS === "web" ? 700 : "100%"
  }
});

import React, { Component, PropTypes } from 'react';
import { StyleSheet , Platform } from 'react-native';
import { COLOR_PRIMARY,COLOR_SECONDARY,COLOR_RED,COLOR_GRAY,COLOR_ORANGE,S21,S14 } from './common';
import { width, height, totalSize } from 'react-native-dimension';
const buttonTxt = 1.8;
const paragraphTxt = 1.5;
const headingTxt = 1.6;
const smallButtons = 1.2;
const titles = 1.8;
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    backgroundColor:'#ffffff'
  },
  bgImg: {
    height:height(30),
    width:width(100)
  },
  imgConView: {
    height:height(30),
    width:width(100),
    backgroundColor:'rgba(0,0,0,0.7)',
    alignItems:'center',
    justifyContent:'flex-end'
  },
  imgSubConView: {
    height:height(15),
    width:width(90),
    marginVertical:5,
    marginHorizontal:10,
    marginBottom: 0,
  },
  featureBtn: {
    height:height(3),
    width:width(18),
    backgroundColor: COLOR_RED,
    borderRadius: 4,
    justifyContent: 'center'
  },
  featureBtnTxt: {
    fontSize:totalSize(smallButtons),
    // fontFamily: FONT_NORMAL,
    color: COLOR_PRIMARY,
    textAlign:'center',
    color: COLOR_PRIMARY  
  },
  title: {
    fontSize:totalSize(S21),
    fontWeight:'bold',
    color: COLOR_PRIMARY,
  },
  dateRatingCon: {
    height:height(3),
    width:width(90),
    flexDirection:'row',
    alignItems:'center'
  },
  date: {
    fontSize:totalSize(S14),
    // fontFamily: FONT_NORMAL,
    color: COLOR_PRIMARY,
  },
  rateTxt: {
    fontSize:totalSize(1.3),
    // fontFamily: FONT_BOLD,
    fontWeight:'bold',
    color: COLOR_ORANGE,
  },
  gradingCon: {
    width:width(25.5),
    justifyContent:'center'
  },
  btnSaveReport: {
    height:height(5),
    width:width(50),
    flexDirection:'row',
    alignItems:'center',
  },
  btn: {
    height:height(3.5),
    // width:width(19),
    backgroundColor:'rgba(211,211,211,0.3)',
    borderRadius:3,
    flexDirection:'row',
    justifyContent:'center',
    textAlignVertical: 'center'
  },
  btnIcon: {
    height:height(2),
    width:width(5),
    resizeMode:'contain',
    marginTop:5
  },
  saveBtnTxt: {
    height:height(3),
    marginHorizontal: 4,
    fontSize:totalSize(1.4),
    // fontFamily: FONT_NORMAL,
    color: COLOR_PRIMARY,
    textAlign:'center',
    ...Platform.select({
      ios: { paddingTop: 2},
      android: { textAlignVertical:'center' }
    }),
    alignSelf: 'center'
  },
  saperationLine: {
    height:height(2),
    width:width(2),
    // borderWidth:1,
    // marginVertical:2,
    // borderColor: COLOR_PRIMARY,
    // marginHorizontal:5
  },
  repBtnTxt: {
    height:height(3),
    marginHorizontal: 4,
    fontSize:totalSize(1.4),
    // fontFamily: FONT_NORMAL,
    color: COLOR_PRIMARY,
    textAlign:'center',
    ...Platform.select({
      ios: { paddingTop: 2},
      android: { textAlignVertical:'center' }
    }),
    alignSelf: 'center'
  },

});

export default styles;

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginScreen from './src/screens/LoginScreen';

export default class App extends React.Component {
  render() {
    return (

      // <LoginScreen />
      <View style={styles.container}>

        <View style={styles.appbar}>
          <Text style={styles.appbarTitle}>KOTOBA</Text>
        </View>

        <View style={styles.memoList}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>人はお金ではなく夢を追うべきである</Text>
            <Text style={styles.memoDate}>2020/02/20</Text>
          </View>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>金儲けのために会社を始めて成功した人なんていない</Text>
            <Text style={styles.memoDate}>2020/02/20</Text>
          </View>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>気に入らないものを作るくらいなら発売を遅らせる方がマシだ</Text>
            <Text style={styles.memoDate}>2020/02/20</Text>
          </View>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>何をしないのかを決めるのは、何をするかを決めるのと同じくらい大切だ</Text>
            <Text style={styles.memoDate}>2020/02/20</Text>
          </View>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>大事なのは量より質</Text>
            <Text style={styles.memoDate}>2020/02/20</Text>
          </View>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>波の先端でサーフィンするのは凄く気持ちいいだろう</Text>
            <Text style={styles.memoDate}>2020/02/20</Text>
          </View>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>10秒早く起動できるようにすれば何十人もの命を救えるんだ</Text>
            <Text style={styles.memoDate}>2020/02/20</Text>
          </View>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>優れた芸術家は真似る。偉大な芸術家は盗む</Text>
            <Text style={styles.memoDate}>2020/02/20</Text>
          </View>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>創造性は何気ない会話から、行き当たりばったりの議論から生まれる</Text>
            <Text style={styles.memoDate}>2020/02/20</Text>
          </View>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>出来る限り美しくあって欲しい、箱の中にあってもだ</Text>
            <Text style={styles.memoDate}>2020/02/20</Text>
          </View>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>我々のデザインは直感的に物事を分かりやすくする</Text>
            <Text style={styles.memoDate}>2020/02/20</Text>
          </View>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>アーティストは作品にサインを入れるんだ</Text>
            <Text style={styles.memoDate}>2020/02/20</Text>
          </View>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },


  memoList: {
    width: '100%',
    flex: 1,
  },

  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',

  },
  memoTitle: {
    fontSize: 14,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2'
  },

  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 78,
    backgroundColor: '#A1DDB9',
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    zIndex: 10,
  },
  appbarTitle: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Hiragino Mincho ProN',
    marginTop: 10,
    fontWeight: 'bold',
  },
});

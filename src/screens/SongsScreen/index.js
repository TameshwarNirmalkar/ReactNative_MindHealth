import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlatList, SafeAreaView, StyleSheet, Text, View, ScrollView, StatusBar, Image, ActivityIndicator } from 'react-native';

import { fetchSongs } from "../../store/reducers/songs/song_reducer"

 const SongScreen = () => {
    const dispatch = useDispatch();
    const { songList, isLoading } = useSelector((state) => ({
      songList: state.songs.songList,
      isLoading: state.songs.isLoading
    }));

    useEffect(() => {
        dispatch(fetchSongs("a"));
        return () => {
            console.log("💫 Songs Screen Unmount");
        };
    }, []);

    const Item = ({artistName, collectionName, collectionPrice}) => (
      <View style={styles.itemContainer}>
          <View style={styles.imgPan}>
            <Image source={require('../../images/1.png')} style={{ width: 40, height: 40, marginRight: 10 }} />
          </View>
          <View style={styles.contentPan}>
              <Text style={styles.headingTitle}>{collectionName}</Text>
              <Text style={styles.title}>{artistName} - {collectionPrice}</Text>
          </View>
        </View>
    );

    return (
      <SafeAreaView style={styles.container}>
        { isLoading ? (
          <ActivityIndicator
            animating={true}
            color="#307ecc"
            size="large"
            style={styles.activityIndicator}
          />
        ) : (
              <ScrollView style={styles.scrollView}>
                <FlatList
                  data={songList}
                  renderItem={({ item }) => <Item artistName={item.artistName} collectionName={item.collectionName} collectionPrice={item.collectionPrice} />}
                  keyExtractor={(item, index) => index.toString()}
                  ItemSeparatorComponent={() => <View style={styles.separator}/>}
              />
              </ScrollView>
          )}
        
        </SafeAreaView>
    )
}

export default SongScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  scrollView: {

  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    padding: 10
  },
  headingTitle: {
    fontSize: 16,
    color: "#307ecc",
    fontWeight: 500
  },
  separator: { height: 1, backgroundColor: "#307ecc" },
  imgPan: {
    width: 50,
    display: "flex"
  },
  contentPan: {
    width: "fit-content",
    display: "flex",
    flex: 1
  },

  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  
});
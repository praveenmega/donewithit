import React, {useEffect, useState} from 'react';
import Screen from '../components/Screen/Screen';
import {View, StyleSheet, FlatList} from 'react-native';
import ListItemSeparator from '../components/ListItem/ListItemSeparator';
import colors from '../config/colors';
import Card from '../components/Card/Card';
import routes from '../navigation/routes';
import ListingApi from '../api/listings';
import AppText from '../components/AppText/AppText';
import AppButton from '../components/AppButton/AppButton';
import LoadingSpin from '../components/LoadingSpin/LoadingSpin';
import useApi from '../hooks/useApi';

function ListingScreen({navigation}) {
  const getListings = useApi(ListingApi.getListings);

  useEffect(() => {
    getListings.request();
  }, []);

  return (
    <>
      <LoadingSpin visible={getListings.loading} />
      <Screen style={styles.screen}>
        {getListings.error && (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <AppButton title="Retry" onPress={getListings.request} />
          </>
        )}
        <View>
          <FlatList
            data={getListings.data}
            keyExtractor={item => item._id}
            renderItem={({item}) => (
              <Card
                url={item.images[0].url}
                title={item.title}
                subTitle={'$' + item.price}
                onPress={() =>
                  navigation.navigate(routes.LISTING_DETAILS, item)
                }
              />
            )}
            ItemSeparatorComponent={ListItemSeparator}
            refreshing={getListings.loading}
            onRefresh={() => {
              getListings.request();
            }}
          />
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingScreen;

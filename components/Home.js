import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/colors';

const Home = ({navigation}) => {
  const RenderItem = ({item}) => {
    return (
      <View
        style={[
          styles.itemContainer,
          {
            backgroundColor: item.selected ? colors.primary : colors.white,
            marginLeft: item.id === 1 ? 20 : 0,
          },
        ]}>
        <Image style={styles.itemImg} source={item.image} />
        <Text style={styles.itemTitle}>{item.title}</Text>

        <View
          style={[
            styles.itemActionContainer,
            {backgroundColor: item.selected ? colors.white : colors.secondary},
          ]}>
          <Feather
            style={styles.itemActionIcon}
            name="chevron-right"
            size={8}
            color={item.selected ? colors.black : colors.white}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <Image
              source={require('../assets/images/profile.png')}
              style={styles.profileImage}
            />
            <Feather name="menu" size={24} color={colors.textDark} />
          </View>
        </SafeAreaView>

        {/* titles */}
        <View style={styles.titleWrapper}>
          <Text style={styles.titleSub}>Food</Text>
          <Text style={styles.titleMain}>Delivery</Text>
        </View>

        {/* Search */}
        <View style={styles.searchContainer}>
          <Feather name="search" size={16} color={colors.textDark} />
          <View style={styles.search}>
            <Text style={styles.searchText}>Search</Text>
          </View>
        </View>

        {/* Categories */}
        <View style={styles.categoriesContainer}>
          <Text style={styles.categoriesTitle}>Categories</Text>
          <View style={styles.categoryListItem}>
            <FlatList
              data={categoriesData}
              renderItem={RenderItem}
              keyExtractor={item => item.id}
              horizontal={true}
            />
          </View>
        </View>

        {/* Popular */}
        <View style={styles.popularContainer}>
          <Text style={styles.popularHeading}>Popular</Text>

          <View>
            {popularData.map(item => (
              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  navigation.navigate('Details', {
                    item: item,
                  })
                }>
                <View
                  style={[
                    styles.popularCardContainer,
                    {marginTop: item.id === 1 ? 10 : 20},
                  ]}>
                  <View>
                    <View>
                      <View style={[styles.populartItemTopWrapper]}>
                        <MaterialCommunityIcons
                          name="crown"
                          size={12}
                          color={colors.primary}
                        />
                        <Text style={styles.popularItemTitle}>
                          Top of the week
                        </Text>
                      </View>
                      <View style={styles.popularProductInfo}>
                        <Text style={styles.popularProductTitle}>
                          {item.title}
                        </Text>
                        <Text style={styles.popularProductWieght}>
                          Weight {item.weight}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.popularCardBottom}>
                      <View style={styles.popularAddBtn}>
                        <Feather
                          name="plus"
                          size={10}
                          color={colors.textDark}
                        />
                      </View>
                      <View style={styles.popularRatingWrapper}>
                        <MaterialCommunityIcons
                          name="star"
                          size={10}
                          color={colors.textDark}
                        />
                        <Text style={styles.popularRating}>{item.rating}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.popularImgWrapper}>
                    <Image source={item.image} style={styles.popularImg} />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  titleWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  titleSub: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: colors.textDark,
  },
  titleMain: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    marginTop: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
  },
  searchText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    marginBottom: 5,
    color: colors.textLight,
  },
  categoriesContainer: {
    marginTop: 30,
  },
  categoriesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    paddingHorizontal: 20,
  },
  categoryListItem: {paddingTop: 15, paddingBottom: 20},
  itemContainer: {
    backgroundColor: '#F5CA4B',
    marginRight: 20,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  itemImg: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  itemTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    marginTop: 10,
  },
  itemActionContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    height: 26,
    width: 26,
    borderRadius: 26,
    marginBottom: 20,
  },
  itemActionIcon: {
    alignSelf: 'center',
  },
  popularContainer: {
    paddingHorizontal: 20,
  },
  popularHeading: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
  popularCardContainer: {
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  populartItemTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularItemTitle: {
    marginLeft: 10,
    fontFamily: 'Montserrat-SemiBold',
  },

  popularProductInfo: {marginTop: 20},
  popularProductTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: colors.textDark,
  },
  popularProductWieght: {
    color: colors.textLight,
  },
  popularCardBottom: {
    marginTop: 10,
    marginLeft: -20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularAddBtn: {
    backgroundColor: colors.primary,
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderTopEndRadius: 20,
    borderBottomLeftRadius: 20,
  },
  popularRatingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  popularRating: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: colors.textDark,
    marginLeft: 5,
  },

  popularImgWrapper: {
    marginLeft: 40,
  },
  popularImg: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
  },
});

export default Home;

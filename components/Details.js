import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';

const Details = ({route}) => {
  const {item} = route.params;

  const RenderItem = props => {
    const {item, index} = props;
    return (
      <View
        key={item.id}
        style={[
          styles.itemContainer,
          {
            marginRight:
              route.params.item.ingredients.length === index ? 0 : 15,
          },
        ]}>
        <Image style={styles.itemImg} source={item.image} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <View style={styles.headerLeft}>
            <Feather name="chevron-left" size={12} color={colors.textDark} />
          </View>
          <View style={styles.headerRight}>
            <MaterialCommunityIcons
              name="star"
              size={12}
              color={colors.white}
            />
          </View>
        </View>
      </SafeAreaView>

      <View style={styles.titleContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.price}>${item.price}</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <View style={styles.sizeContainer}>
            <Text style={styles.infoTitle}>size</Text>
            <Text style={styles.infoValue}>
              {item.size} {item.sizeNumber}"
            </Text>
          </View>
          <View style={styles.crustContainer}>
            <Text style={styles.infoTitle}>Crust</Text>
            <Text style={styles.infoValue}>{item.crust}</Text>
          </View>
          <View style={styles.deliveryContainer}>
            <Text style={styles.infoTitle}>Delivery in</Text>
            <Text style={styles.infoValue}>{item.deliveryTime} min</Text>
          </View>
        </View>
        <View style={styles.infoImg}>
          <Image source={item.image} />
        </View>
      </View>

      <View style={styles.ingredientsContainer}>
        <Text style={styles.sectionTitle}>Ingredients</Text>
        <View style={styles.ingredientsList}>
          <FlatList
            data={item.ingredients}
            renderItem={RenderItem}
            keyExtractor={item => item.id}
            horizontal={true}
          />
          {/* {item.ingredients.map((ingredient, idx) => (
            <View
              key={idx}
              style={[
                styles.itemContainer,
                {marginRight: item.ingredients.length === idx ? 0 : 15},
              ]}>
              <Image style={styles.itemImg} source={ingredient.image} />
            </View>
          ))} */}
        </View>
      </View>
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
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerLeft: {
    borderColor: colors.textLight,
    borderWidth: 2,
    borderRadius: 10,
    padding: 16,
  },
  headerRight: {
    borderColor: colors.textLight,
    borderWidth: 2,
    borderRadius: 10,
    padding: 16,
    backgroundColor: colors.primary,
  },
  titleContainer: {
    width: '60%',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  itemTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    lineHeight: 39,
  },
  priceContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  price: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 32,
    lineHeight: 39,
    color: colors.price,
  },
  infoContainer: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    overflow: 'hidden',
  },
  info: {
    width: '40%',
  },
  infoImg: {
    // width: 210,
    // height: 125,
    resizeMode: 'contain',
  },
  infoTitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    lineHeight: 17,
    color: colors.textLight,
    marginBottom: 5,
  },
  infoValue: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    lineHeight: 20,
    color: colors.black,
  },
  sizeContainer: {paddingBottom: 20},
  crustContainer: {paddingBottom: 20},
  deliveryContainer: {},
  ingredientsContainer: {
    marginTop: 60,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    lineHeight: 20,
    color: colors.black,
  },
  ingredientsList: {
    flexDirection: 'row',
    marginTop: 20,
  },
  itemContainer: {
    backgroundColor: colors.white,
    alignItems: 'center',
    borderRadius: 15,
    padding: 10,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  itemImg: {},
});

export default Details;

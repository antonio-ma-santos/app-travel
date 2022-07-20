import { StyleSheet, Dimensions } from 'react-native';

import COLORS  from '../../config/COLORS';

const WIDTH = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  categoryTitle: {
    fontSize: 20,
    color: COLORS.dark,
  },
  categories: {
    width: WIDTH * 0.7, 
    height: WIDTH * 0.8,
    overflow: 'hidden', 
    borderRadius: 20,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  categoryImage: {
    width: '100%', 
    height: '100%',
  },
  categoriesText: {
    fontSize: 20, 
    color: COLORS.dark,
  },
  favoriteWrapper: {
    position: 'absolute',
    zIndex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.transparent,
    justifyContent: 'space-between',
    padding: 10,
  },
  favoriteIcon: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(255,255,255, 0.85)',
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesTitle: {
    fontSize: 20,
    color: COLORS.white,
    fontWeight: '700',
    marginLeft: 10,
  },
  adventureImage: {
    height: 30, 
    width: 30, 
    marginBottom: 10, 
    alignSelf: 'center'
  }
});
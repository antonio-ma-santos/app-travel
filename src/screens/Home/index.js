import { useState } from 'react';
import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { styles } from './styles';

import Ionicons from '@expo/vector-icons/Ionicons';

import CATEGORIES from '../../config/CATEGORIES.js';
import COLORS from '../../config/COLORS.js';
import ADVANTURES from '../../config/ADVANTURES.js';

const WIDTH = Dimensions.get('screen').width;

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Discover</Text>
          <Image 
            source={{ uri: 'https://github.com/antonio-ma-santos.png' }}
            style={styles.avatar}
          />
        </View>

        <ScrollView style={{ marginVertical: 20 }} horizontal >
          {CATEGORIES.map((category, index) => (
            <TouchableOpacity 
              key={category.id}
              onPress={() => setActiveCategory(index)}
              style={{ marginRight: 10 }}  
            >
              <Text 
                style={[styles.categoryTitle, activeCategory === index && { color: COLORS.primary }]}
              >
                {category.title}
              </Text>

              {activeCategory === index && 
                <View 
                  style={{ 
                    height:8, 
                    width: 8, 
                    borderRadius: 4, 
                    backgroundColor: COLORS.primary,
                    alignSelf: 'center',
                    marginTop: 4,
                  }} 
                /> 
              }
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.categoriesText}>
            {CATEGORIES[activeCategory].tours.length}
          </Text>

          <Text style={[styles.categoriesText, { marginLeft: 10 }]}>
            {CATEGORIES[activeCategory].title}
          </Text>
        </View>

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          // snapToInterval={WIDTH * 0.7}
          // decelerationRate="fast"
          // pagingEnabled
        >
          {CATEGORIES[activeCategory].tours.map((tour, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.categories} 
              activeOpacity={0.8}
            >
              <View style={styles.favoriteWrapper}>
                <TouchableOpacity style={styles.favoriteIcon}>
                  <Ionicons name='heart-outline' size={25} color={COLORS.primary} />
                </TouchableOpacity>
                <Text style={styles.categoriesTitle}>{tour.title}</Text>
              </View>
              <Image source={tour.image} style={styles.categoryImage} />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View 
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        > 
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            Feelinng Adventurous?
          </Text>

          <TouchableOpacity>
            <Text style={{ fontSize: 15, fontWeight: '500', color: COLORS.primary }}>
              Show all
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={{ marginVertical: 20 }}
        >
          {ADVANTURES.map((adventure) => (
            <TouchableOpacity 
              key={adventure.id}
              style={{ marginRight: 30, padding: 10 }}
            >
              <View style={styles.adventureImage}>
                <Image 
                  source={adventure.image}
                  resizeMode='contain'
                  style={{ width: '100%', height: '100%' }}
                />
              </View>
              <Text style={{ textTransform: 'uppercase' }}>{adventure.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
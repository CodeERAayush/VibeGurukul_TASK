import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Fonts } from '../assets/Fonts';

const TabNavigation = ({activeTab,setActiveTab}) => {
 

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {['Lessons', 'Description'].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={styles.tabButton}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
            {activeTab === tab && <View style={styles.activeIndicator} />}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    gap: 24,
  },
  tabButton: {
    position: 'relative',
    paddingVertical: 8,
  },
  tabText: {
    fontSize: 16,
    color: '#9CA3AF',
    fontFamily:Fonts?.Bold,
    fontWeight:'600'
  },
  activeTabText: {
    color: '#3B82F6',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#3B82F6',
    borderRadius: 1,
  },
});

export default TabNavigation;
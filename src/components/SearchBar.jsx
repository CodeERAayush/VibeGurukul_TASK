import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Using Feather icons pack
import { useTheme } from '../context/Theme';
import { hp } from '../utils';

const SearchBar = ({ onSearch, placeholder = "Search now..." }) => {

    const {theme, isDarkMode, toggleTheme} = useTheme();
      const styles = createStyles(theme);
    

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#9CA3AF" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
        />
      </View>
      <TouchableOpacity style={styles.filterButton}>
        <Icon name="sliders" size={20} color={theme?.bright} />
      </TouchableOpacity>
    </View>
  );
};

const createStyles= theme => StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom:hp(2)
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme?.lightGray,
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 50,
    marginTop:10
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: theme?.softGray,
    padding: 0, 
  },
  filterButton: {
    backgroundColor: theme?.royalBlue,
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10
  },
});

export default SearchBar;
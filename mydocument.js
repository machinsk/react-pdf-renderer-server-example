import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Font, } from '@react-pdf/renderer';
import Map from './images/map.png';
import Trebuchet from './fonts/Trebuchet/trebuchet-ms.ttf'

Font.register({
  family: 'Trebuchet MS',
  src: Trebuchet,
})

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  title: {
    fontFamily: 'Trebuchet MS',
    fontWeight: "900",
    color: "blue",
    fontSize: 16,
    textDecoration: "underline",
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Section #1</Text>
      </View>
      <Image src={Map}/>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument

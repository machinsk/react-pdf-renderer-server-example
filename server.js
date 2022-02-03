import React from 'react';
import ReactPDF from '@react-pdf/renderer';
import MyDocument from './mydocument.js'

ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);

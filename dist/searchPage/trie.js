'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _trieSearch = require('trie-search');

var _trieSearch2 = _interopRequireDefault(_trieSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefill = {
  Density: {
    type: 'numericProperty',
    value: 'Density',
    min: 0,
    max: 1499,
    units: 'g/cm3'
  },
  'Unit cell volume': {
    type: 'numericProperty',
    value: 'Unit cell volume',
    min: 11.382,
    max: 701860.313,
    units: 'A3'
  },
  InChI: {
    type: 'categoricalProperty',
    value: 'InChI',
    options: []
  },
  SMILES: {
    type: 'categoricalProperty',
    value: 'SMILES',
    options: []
  },
  'Space group': {
    type: 'categoricalProperty',
    value: 'Space group',
    options: []
  },
  'Lattice parameter (a)': {
    type: 'numericProperty',
    value: 'Lattice parameter (a)',
    min: 2.015,
    max: 189.8,
    units: 'A'
  },
  'Lattice parameter (c)': {
    type: 'numericProperty',
    value: 'Lattice parameter (c)',
    min: 2.16642,
    max: 370.0198,
    units: 'A'
  },
  'Lattice parameter (b)': {
    type: 'numericProperty',
    value: 'Lattice parameter (b)',
    min: 2.015,
    max: 149.1,
    units: 'A'
  },
  'Cell angle (\u03B3)': {
    type: 'numericProperty',
    value: 'Cell angle (\u03B3)',
    min: 13.93,
    max: 149.9,
    units: '\xB0'
  },
  'Cell angle (\u03B2)': {
    type: 'numericProperty',
    value: 'Cell angle (\u03B2)',
    min: 11.93,
    max: 173.894521,
    units: '\xB0'
  },
  'Cell angle (\u03B1)': {
    type: 'numericProperty',
    value: 'Cell angle (\u03B1)',
    min: 13.93,
    max: 138.5,
    units: '\xB0'
  },
  'Space group number': {
    type: 'categoricalProperty',
    value: 'Space group number',
    options: []
  },
  'Molar mass': {
    type: 'numericProperty',
    value: 'Molar mass',
    min: 0,
    max: 195221,
    units: 'g/mol'
  },
  'Crystal color': {
    type: 'categoricalProperty',
    value: 'Crystal color',
    options: []
  },
  'Crystal system': {
    type: 'categoricalProperty',
    value: 'Crystal system',
    options: []
  },
  'internal energy': {
    type: 'numericProperty',
    value: 'internal energy',
    min: -714.5680610000001,
    max: -40.476062,
    units: 'Ha'
  },
  Volume: {
    type: 'numericProperty',
    value: 'Volume',
    min: -74.06,
    max: 2616.76,
    units: 'A3'
  },
  'Space Group': {
    type: 'categoricalProperty',
    value: 'Space Group',
    options: []
  },
  'Band Gap': {
    type: 'numericProperty',
    value: 'Band Gap',
    min: 0,
    max: 18.437,
    units: 'eV'
  },
  'Total Magnetization': {
    type: 'numericProperty',
    value: 'Total Magnetization',
    min: -5.70511,
    max: 25.0367,
    units: '\u03BCB/atom'
  },
  'dipole moment': {
    type: 'numericProperty',
    value: 'dipole moment',
    min: 0,
    max: 29.5564,
    units: 'D'
  },
  'electronic spatial extent': {
    type: 'numericProperty',
    value: 'electronic spatial extent',
    min: 19.0002,
    max: 3374.7532,
    units: 'A2'
  },
  'energy gap': {
    type: 'numericProperty',
    value: 'energy gap',
    min: 0.0246,
    max: 0.6221,
    units: 'Ha'
  },
  'energy of HOMO': {
    type: 'numericProperty',
    value: 'energy of HOMO',
    min: -0.4286,
    max: -0.1017,
    units: 'Ha'
  },
  'energy of LUMO': {
    type: 'numericProperty',
    value: 'energy of LUMO',
    min: -0.175,
    max: 0.1935,
    units: 'Ha'
  },
  enthalpy: {
    type: 'numericProperty',
    value: 'enthalpy',
    min: -714.559209,
    max: -40.475117,
    units: 'Ha'
  },
  'free energy': {
    type: 'numericProperty',
    value: 'free energy',
    min: -714.602138,
    max: -40.498597,
    units: 'Ha'
  },
  'heat capacity': {
    type: 'numericProperty',
    value: 'heat capacity',
    min: 6.002000000000001,
    max: 46.968999999999994,
    units: 'cal / (mol K)'
  },
  'isotropic polarizability': {
    type: 'numericProperty',
    value: 'isotropic polarizability',
    min: 6.31,
    max: 196.62,
    units: 'A3'
  },
  'number of atoms': {
    type: 'categoricalProperty',
    value: 'number of atoms',
    options: []
  },
  'rotational constant A': {
    type: 'numericProperty',
    value: 'rotational constant A',
    min: 0,
    max: 619867.68314,
    units: 'GHz'
  },
  'rotational constant B': {
    type: 'numericProperty',
    value: 'rotational constant B',
    min: 0.33712,
    max: 437.90385999999995,
    units: 'GHz'
  },
  'rotational constant C': {
    type: 'numericProperty',
    value: 'rotational constant C',
    min: 0.33118000000000003,
    max: 282.94545,
    units: 'GHz'
  },
  'zero point vibrational energy': {
    type: 'numericProperty',
    value: 'zero point vibrational energy',
    min: 0.015951,
    max: 0.273944,
    units: 'Ha'
  },
  'Volume fraction': {
    type: 'categoricalProperty',
    value: 'Volume fraction',
    options: []
  },
  'Mean radius': {
    type: 'categoricalProperty',
    value: 'Mean radius',
    options: []
  },
  'Enthalpy of Formation': {
    type: 'numericProperty',
    value: 'Enthalpy of Formation',
    min: -12.0614,
    max: 1126.321181,
    units: 'eV/atom'
  },
  Intensity: {
    type: 'numericProperty',
    value: 'Intensity',
    min: 1,
    max: 100,
    units: 'Arb. units'
  },
  'Dipole moment': {
    type: 'numericProperty',
    value: 'Dipole moment',
    min: 0,
    max: 5621.951,
    units: 'D'
  },
  Image: {
    type: 'categoricalProperty',
    value: 'Image',
    options: []
  },
  'HOMO energy': {
    type: 'numericProperty',
    value: 'HOMO energy',
    min: -16.085,
    max: 6.423,
    units: 'eV'
  },
  'Heat of formation': {
    type: 'numericProperty',
    value: 'Heat of formation',
    min: -9677.45684,
    max: 6268662.5408,
    units: 'kJ.mol-1'
  },
  'LUMO energy': {
    type: 'numericProperty',
    value: 'LUMO energy',
    min: -8.165,
    max: 18.791,
    units: 'eV'
  },
  'Point group symmetry': {
    type: 'categoricalProperty',
    value: 'Point group symmetry',
    options: []
  },
  'Surface area': {
    type: 'numericProperty',
    value: 'Surface area',
    min: 8.98,
    max: 2363.35,
    units: 'A2'
  },
  'Molecular mass': {
    type: 'numericProperty',
    value: 'Molecular mass',
    min: 2.0159,
    max: 2857.1433,
    units: 'g.mol-1'
  },
  'Specific heat capacity': {
    type: 'numericProperty',
    value: 'Specific heat capacity',
    min: 0,
    max: 1123.115,
    units: 'J/K\xB7mol'
  },
  'Relative standard enthalpy': {
    type: 'numericProperty',
    value: 'Relative standard enthalpy',
    min: -107.821,
    max: 3034.707,
    units: 'kJ/mol'
  },
  'Standard entropy': {
    type: 'numericProperty',
    value: 'Standard entropy',
    min: 0,
    max: 2417.277,
    units: 'J/K\xB7mol'
  },
  'Standard enthalpy of formation': {
    type: 'numericProperty',
    value: 'Standard enthalpy of formation',
    min: -8613.882,
    max: 2497.04,
    units: 'kJ/mol'
  },
  'Standard Gibbs free energy of formation': {
    type: 'numericProperty',
    value: 'Standard Gibbs free energy of formation',
    min: -7554.692,
    max: 7145.758,
    units: 'kJ/mol'
  },
  'Log of formation reaction rate constant': {
    type: 'categoricalProperty',
    value: 'Log of formation reaction rate constant',
    options: []
  },
  'Crystal System': {
    type: 'categoricalProperty',
    value: 'Crystal System',
    options: []
  },
  'Point Group': {
    type: 'categoricalProperty',
    value: 'Point Group',
    options: []
  },
  'CIF File': {
    type: 'categoricalProperty',
    value: 'CIF File',
    options: []
  },
  'Energy Above Convex Hull': {
    type: 'numericProperty',
    value: 'Energy Above Convex Hull',
    min: 0,
    max: 5.891889305208339,
    units: 'eV/atom'
  },
  'Full Formula': {
    type: 'categoricalProperty',
    value: 'Full Formula',
    options: []
  },
  'Number of Elements': {
    type: 'categoricalProperty',
    value: 'Number of Elements',
    options: []
  },
  'Oxide Type': {
    type: 'categoricalProperty',
    value: 'Oxide Type',
    options: []
  },
  'Space Group Number': {
    type: 'categoricalProperty',
    value: 'Space Group Number',
    options: []
  },
  'Unit Cell Volume': {
    type: 'numericProperty',
    value: 'Unit Cell Volume',
    min: 5.5529593094598635,
    max: 7697.812542566868,
    units: 'A3'
  },
  'VASP Energy for Structure': {
    type: 'numericProperty',
    value: 'VASP Energy for Structure',
    min: -1834.877179,
    max: -0.01610048,
    units: 'eV'
  },
  Prototype: {
    type: 'categoricalProperty',
    value: 'Prototype',
    options: []
  },
  'Bravais Lattice': {
    type: 'categoricalProperty',
    value: 'Bravais Lattice',
    options: []
  },
  POSCAR: {
    type: 'categoricalProperty',
    value: 'POSCAR',
    options: []
  },
  E: {
    type: 'categoricalProperty',
    value: 'E',
    options: []
  },
  Eat: {
    type: 'categoricalProperty',
    value: 'Eat',
    options: []
  },
  Id: {
    type: 'categoricalProperty',
    value: 'Id',
    options: []
  },
  'Materials Project ID': {
    type: 'categoricalProperty',
    value: 'Materials Project ID',
    options: []
  },
  Crystallinity: {
    type: 'categoricalProperty',
    value: 'Crystallinity',
    options: []
  },
  'Band gap': {
    type: 'numericProperty',
    value: 'Band gap',
    min: 0,
    max: 14.5,
    units: 'eV'
  },
  'Melting Point': {
    type: 'numericProperty',
    value: 'Melting Point',
    min: -259.14,
    max: 4215,
    units: '\xB0C'
  },
  'Thermal Conductivity': {
    type: 'numericProperty',
    value: 'Thermal Conductivity',
    min: 0,
    max: 832,
    units: 'W/cm\xB7K'
  },
  'Poisson\'s Ratio': {
    type: 'categoricalProperty',
    value: 'Poisson\'s Ratio',
    options: []
  },
  'Chemical Family': {
    type: 'categoricalProperty',
    value: 'Chemical Family',
    options: []
  },
  'Specific Heat': {
    type: 'numericProperty',
    value: 'Specific Heat',
    min: 0,
    max: 12200,
    units: 'J kg-1 K-1'
  },
  Resistivity: {
    type: 'numericProperty',
    value: 'Resistivity',
    min: 0,
    max: 84000,
    units: 'm\u03A9\xB7cm'
  },
  'Degree of order': {
    type: 'categoricalProperty',
    value: 'Degree of order',
    options: []
  },
  'Surface facet': {
    type: 'categoricalProperty',
    value: 'Surface facet',
    options: []
  },
  'Logarithm of crack growth distance per fatigue cycle (log10(da/dN))': {
    type: 'categoricalProperty',
    value: 'Logarithm of crack growth distance per fatigue cycle (log10(da/dN))',
    options: []
  },
  'Wyckoff sites': {
    type: 'categoricalProperty',
    value: 'Wyckoff sites',
    options: []
  },
  'Bulk Modulus, Reuss': {
    type: 'numericProperty',
    value: 'Bulk Modulus, Reuss',
    min: -215,
    max: 765,
    units: 'GPa'
  },
  'Bulk Modulus, Voigt': {
    type: 'numericProperty',
    value: 'Bulk Modulus, Voigt',
    min: -340,
    max: 803,
    units: 'GPa'
  },
  'Bulk Modulus, Voigt-Reuss-Hill': {
    type: 'numericProperty',
    value: 'Bulk Modulus, Voigt-Reuss-Hill',
    min: -210,
    max: 784,
    units: 'GPa'
  },
  'Compliance Tensor': {
    type: 'numericProperty',
    value: 'Compliance Tensor',
    units: '10-12Pa-1'
  },
  'Elastic Anisotropy': {
    type: 'categoricalProperty',
    value: 'Elastic Anisotropy',
    options: []
  },
  'Shear Modulus, Reuss': {
    type: 'numericProperty',
    value: 'Shear Modulus, Reuss',
    min: -3378,
    max: 2564,
    units: 'GPa'
  },
  'Shear Modulus, Voigt': {
    type: 'numericProperty',
    value: 'Shear Modulus, Voigt',
    min: -402,
    max: 525,
    units: 'GPa'
  },
  'Shear Modulus, Voigt-Reuss-Hill': {
    type: 'numericProperty',
    value: 'Shear Modulus, Voigt-Reuss-Hill',
    min: -1676,
    max: 1289,
    units: 'GPa'
  },
  'Stiffness Tensor': {
    type: 'numericProperty',
    value: 'Stiffness Tensor',
    units: 'GPa'
  },
  'Molar Mass': {
    type: 'numericProperty',
    value: 'Molar Mass',
    min: 7.95,
    max: 4091.86,
    units: 'g/mol'
  },
  'Internal Transmission': {
    type: 'categoricalProperty',
    value: 'Internal Transmission',
    options: []
  },
  Elongation: {
    type: 'numericProperty',
    value: 'Elongation',
    min: 0.5,
    max: 42163,
    units: '%'
  },
  '\u03C3(converted from log)': {
    type: 'numericProperty',
    value: '\u03C3(converted from log)',
    min: 1.9929e-8,
    max: 4.253690995695569,
    units: 'S/cm'
  },
  Logσ: {
    type: 'numericProperty',
    value: 'Log\u03C3',
    min: -7.700505031769838,
    max: 0.6287659379083795,
    units: 'S/cm'
  },
  'Product form': {
    type: 'categoricalProperty',
    value: 'Product form',
    options: []
  },
  'Flexural Strength': {
    type: 'numericProperty',
    value: 'Flexural Strength',
    min: 0,
    max: 15600,
    units: 'MPa'
  },
  Transmittance: {
    type: 'categoricalProperty',
    value: 'Transmittance',
    options: []
  },
  Temperature: {
    type: 'numericProperty',
    value: 'Temperature',
    min: -271.313145,
    max: 1493.953633,
    units: 'deg C'
  },
  'Type of melting': {
    type: 'categoricalProperty',
    value: 'Type of melting',
    options: []
  },
  'Elastic Modulus': {
    type: 'numericProperty',
    value: 'Elastic Modulus',
    min: 0.288,
    max: 1055,
    units: 'GPa'
  },
  'Training ln(\u03C3T)': {
    type: 'categoricalProperty',
    value: 'Training ln(\u03C3T)',
    options: []
  },
  'Crystal structure': {
    type: 'categoricalProperty',
    value: 'Crystal structure',
    options: []
  },
  'Magnetic Susceptibility': {
    type: 'numericProperty',
    value: 'Magnetic Susceptibility',
    min: -45.4,
    max: 24.6,
    units: 'arb units'
  },
  Appearance: {
    type: 'categoricalProperty',
    value: 'Appearance',
    options: []
  },
  'All energies': {
    type: 'numericProperty',
    value: 'All energies',
    min: -359.37677,
    max: -294.99142,
    units: 'eV'
  },
  'log conductivity': {
    type: 'categoricalProperty',
    value: 'log conductivity',
    options: []
  },
  'Thermal Expansion': {
    type: 'numericProperty',
    value: 'Thermal Expansion',
    min: -16.1,
    max: 78.64,
    units: 'x10-6'
  },
  'Refractive Index': {
    type: 'categoricalProperty',
    value: 'Refractive Index',
    options: []
  },
  'Molecular Mass': {
    type: 'numericProperty',
    value: 'Molecular Mass',
    min: 75.0666,
    max: 148634.914,
    units: 'g/mol'
  },
  'Product 1 (A)': {
    type: 'categoricalProperty',
    value: 'Product 1 (A)',
    options: []
  },
  'Reactant (AB)': {
    type: 'categoricalProperty',
    value: 'Reactant (AB)',
    options: []
  },
  'Fracture Toughness': {
    type: 'numericProperty',
    value: 'Fracture Toughness',
    min: 0.55,
    max: 107,
    units: 'MPa m1/2'
  },
  'Solubility in water': {
    type: 'numericProperty',
    value: 'Solubility in water',
    min: 0.0001,
    max: 4531,
    units: 'g/100g'
  },
  'Ultimate tensile strength': {
    type: 'numericProperty',
    value: 'Ultimate tensile strength',
    min: 47,
    max: 1151,
    units: 'MPa'
  },
  'Yield strength': {
    type: 'numericProperty',
    value: 'Yield strength',
    min: 0,
    max: 920,
    units: 'MPa'
  },
  'IUPAC name': {
    type: 'categoricalProperty',
    value: 'IUPAC name',
    options: []
  },
  'Boltztrap Seebeck effective mass, m*S': {
    type: 'numericProperty',
    value: 'Boltztrap Seebeck effective mass, m*S',
    min: 0,
    max: 43.6,
    units: '1E20 cm-3'
  },
  'Boltztrap Seebeck effective mass, m*S (at max PF)': {
    type: 'numericProperty',
    value: 'Boltztrap Seebeck effective mass, m*S (at max PF)',
    min: 0.02,
    max: 104.31,
    units: '1E20 cm-3'
  },
  'Boltztrap Seebeck effective mass, m*S (at max zT)': {
    type: 'numericProperty',
    value: 'Boltztrap Seebeck effective mass, m*S (at max zT)',
    min: 0.02,
    max: 156.63,
    units: '1E20 cm-3'
  },
  'Boltztrap conductivity effective mass, m*c': {
    type: 'numericProperty',
    value: 'Boltztrap conductivity effective mass, m*c',
    min: 0,
    max: 27012.8,
    units: '1E20 cm-3'
  },
  'Boltztrap conductivity effective mass, m*c (at max PF)': {
    type: 'numericProperty',
    value: 'Boltztrap conductivity effective mass, m*c (at max PF)',
    min: 0,
    max: 3091.04,
    units: '1E20 cm-3'
  },
  'Boltztrap conductivity effective mass, m*c (at max zT)': {
    type: 'numericProperty',
    value: 'Boltztrap conductivity effective mass, m*c (at max zT)',
    min: 0,
    max: 3059.88,
    units: '1E20 cm-3'
  },
  'Carrier concentration, n (at max PF)': {
    type: 'numericProperty',
    value: 'Carrier concentration, n (at max PF)',
    min: 24000000000000000000,
    max: 4e+23,
    units: 'cm-3'
  },
  'Carrier concentration, n (at max zT)': {
    type: 'numericProperty',
    value: 'Carrier concentration, n (at max zT)',
    min: -3.95e+23,
    max: 1.82e+23,
    units: 'cm-3'
  },
  'Fermi surface complexity factor, N*VK*': {
    type: 'numericProperty',
    value: 'Fermi surface complexity factor, N*VK*',
    min: 0,
    max: 134,
    units: '1E20'
  },
  'Fermi surface complexity factor, N*VK* (at max PF)': {
    type: 'numericProperty',
    value: 'Fermi surface complexity factor, N*VK* (at max PF)',
    min: 0,
    max: 91.92,
    units: '1E20'
  },
  'Fermi surface complexity factor, N*VK* (at max zT)': {
    type: 'numericProperty',
    value: 'Fermi surface complexity factor, N*VK* (at max zT)',
    min: 0,
    max: 76.72,
    units: '1E20'
  },
  'Maximum Power Factor (max PF)': {
    type: 'categoricalProperty',
    value: 'Maximum Power Factor (max PF)',
    options: []
  },
  'Maximum figure of merit, zT (max zT)': {
    type: 'categoricalProperty',
    value: 'Maximum figure of merit, zT (max zT)',
    options: []
  },
  'Type of thermoelectric material': {
    type: 'categoricalProperty',
    value: 'Type of thermoelectric material',
    options: []
  },
  'Area under heat treatment curve': {
    type: 'numericProperty',
    value: 'Area under heat treatment curve',
    min: 0,
    max: 1743038,
    units: '\xB0C * hours'
  },
  'Heat treatment 1 Temperature': {
    type: 'numericProperty',
    value: 'Heat treatment 1 Temperature',
    min: 0,
    max: 3812.4,
    units: '\xB0C'
  },
  'Heat treatment 2 Temperature': {
    type: 'numericProperty',
    value: 'Heat treatment 2 Temperature',
    min: 0,
    max: 7600,
    units: '\xB0C'
  },
  'Heat treatment 3 Temperature': {
    type: 'numericProperty',
    value: 'Heat treatment 3 Temperature',
    min: 0,
    max: 2012.4,
    units: '\xB0C'
  },
  'Heat treatment 3 Time': {
    type: 'numericProperty',
    value: 'Heat treatment 3 Time',
    min: 0,
    max: 1000,
    units: 'hours'
  },
  'Heat treatment 4 Temperature': {
    type: 'numericProperty',
    value: 'Heat treatment 4 Temperature',
    min: 0,
    max: 871,
    units: '\xB0C'
  },
  'Heat treatment 4 Time': {
    type: 'numericProperty',
    value: 'Heat treatment 4 Time',
    min: 0,
    max: 1500,
    units: 'hours'
  },
  'Heat treatment 5 Temperature': {
    type: 'numericProperty',
    value: 'Heat treatment 5 Temperature',
    min: 0,
    max: 760,
    units: '\xB0C'
  },
  'Heat treatment 5 Time': {
    type: 'numericProperty',
    value: 'Heat treatment 5 Time',
    min: 0,
    max: 8,
    units: 'hours'
  },
  'Max Heat Treatment Temperature': {
    type: 'numericProperty',
    value: 'Max Heat Treatment Temperature',
    min: 0,
    max: 7600,
    units: '\xB0C'
  },
  'Powder processed': {
    type: 'categoricalProperty',
    value: 'Powder processed',
    options: []
  },
  'Pressure treated': {
    type: 'categoricalProperty',
    value: 'Pressure treated',
    options: []
  },
  'Pressure treatment Pressure': {
    type: 'numericProperty',
    value: 'Pressure treatment Pressure',
    min: 0,
    max: 172,
    units: 'MPa'
  },
  'Pressure treatment Temperature': {
    type: 'numericProperty',
    value: 'Pressure treatment Temperature',
    min: 0,
    max: 1230,
    units: '\xB0C'
  },
  'Pressure treatment Time': {
    type: 'numericProperty',
    value: 'Pressure treatment Time',
    min: 0,
    max: 4,
    units: 'hours'
  },
  'Test Temperature': {
    type: 'numericProperty',
    value: 'Test Temperature',
    min: 20,
    max: 1250,
    units: '\xB0C'
  },
  'Total heat treatment time': {
    type: 'numericProperty',
    value: 'Total heat treatment time',
    min: 0,
    max: 2278,
    units: 'hours'
  },
  'Heat treatment 1 Time': {
    type: 'numericProperty',
    value: 'Heat treatment 1 Time',
    min: 0,
    max: 1175,
    units: 'hours'
  },
  Structure: {
    type: 'categoricalProperty',
    value: 'Structure',
    options: []
  },
  'Heat treatment 2 Time': {
    type: 'numericProperty',
    value: 'Heat treatment 2 Time',
    min: 0,
    max: 2000,
    units: 'hours'
  },
  'Thermal conductivity': {
    type: 'numericProperty',
    value: 'Thermal conductivity',
    min: 0.2,
    max: 14.65,
    units: 'W/m.K'
  },
  Irel: {
    type: 'categoricalProperty',
    value: 'Irel',
    options: []
  },
  Conductivity: {
    type: 'numericProperty',
    value: 'Conductivity',
    min: 2.1e-8,
    max: 110000,
    units: 'S/cm'
  },
  'Maximum hydrogen content': {
    type: 'numericProperty',
    value: 'Maximum hydrogen content',
    min: 0,
    max: 92.1,
    units: 'wt%'
  },
  Mass: {
    type: 'categoricalProperty',
    value: 'Mass',
    options: []
  },
  Solubility: {
    type: 'categoricalProperty',
    value: 'Solubility',
    options: []
  },
  Grains: {
    type: 'numericProperty',
    value: 'Grains',
    min: 0,
    max: 1024,
    units: 'mm2'
  },
  'Bulk modulus (B)': {
    type: 'numericProperty',
    value: 'Bulk modulus (B)',
    min: 0.3,
    max: 442,
    units: 'GPa'
  },
  'Maximum hydrogen/metal ratio': {
    type: 'categoricalProperty',
    value: 'Maximum hydrogen/metal ratio',
    options: []
  },
  Hardness: {
    type: 'numericProperty',
    value: 'Hardness',
    min: 0.3,
    max: 1725,
    units: 'GPa'
  },
  LogσT: {
    type: 'numericProperty',
    value: 'Log\u03C3T',
    min: -6.0813543503059195,
    max: 3.6537903142175687,
    units: 'S\xB7K/cm'
  },
  '\u03C3T(converted from log)': {
    type: 'numericProperty',
    value: '\u03C3T(converted from log)',
    min: 8.29174e-7,
    max: 4505.990940476278,
    units: 'S\xB7K/cm'
  },
  'Band degeneracy (Nb (CB))': {
    type: 'numericProperty',
    value: 'Band degeneracy (Nb (CB))',
    min: 0.5,
    max: 27,
    units: 'bands'
  },
  'Band degeneracy (Nb (VB))': {
    type: 'numericProperty',
    value: 'Band degeneracy (Nb (VB))',
    min: 0.5,
    max: 24,
    units: 'bands'
  },
  'Band effective mass (m*band (me)-CB)': {
    type: 'numericProperty',
    value: 'Band effective mass (m*band (me)-CB)',
    min: 0.007,
    max: 25.563,
    units: 'm0'
  },
  'Band effective mass (m*band (me)-VB)': {
    type: 'numericProperty',
    value: 'Band effective mass (m*band (me)-VB)',
    min: 0.016,
    max: 18.982,
    units: 'm0'
  },
  'Density of states effective mass (m*DOS (me)-CB)': {
    type: 'numericProperty',
    value: 'Density of states effective mass (m*DOS (me)-CB)',
    min: 0.007,
    max: 44.362,
    units: 'm0'
  },
  'Density of states effective mass (m*DOS (me)-VB)': {
    type: 'numericProperty',
    value: 'Density of states effective mass (m*DOS (me)-VB)',
    min: 0.041,
    max: 31.563,
    units: 'm0'
  },
  'Electron mobility (\u03BCe)': {
    type: 'numericProperty',
    value: 'Electron mobility (\u03BCe)',
    min: 0.01,
    max: 13077.95,
    units: 'cm2V-1s-1'
  },
  'Hole mobility (\u03BCh)': {
    type: 'numericProperty',
    value: 'Hole mobility (\u03BCh)',
    min: 0.01,
    max: 2343.32,
    units: 'cm2V-1s-1'
  },
  'Lattice thermal conductivity, acoustic (\u03BAL, acoustic)': {
    type: 'numericProperty',
    value: 'Lattice thermal conductivity, acoustic (\u03BAL, acoustic)',
    min: 0,
    max: 184.41,
    units: 'Wm-1K-1'
  },
  'Lattice thermal conductivity, optical (\u03BAL, optical)': {
    type: 'numericProperty',
    value: 'Lattice thermal conductivity, optical (\u03BAL, optical)',
    min: 0.02,
    max: 3.74,
    units: 'Wm-1K-1'
  },
  'Material-dependent parameter \u03B2SE (n-type)': {
    type: 'categoricalProperty',
    value: 'Material-dependent parameter \u03B2SE (n-type)',
    options: []
  },
  'Material-dependent parameter \u03B2SE (p-type)': {
    type: 'categoricalProperty',
    value: 'Material-dependent parameter \u03B2SE (p-type)',
    options: []
  },
  'Number of atoms': {
    type: 'categoricalProperty',
    value: 'Number of atoms',
    options: []
  },
  'Total lattice thermal conductivity (\u03BAL, total)': {
    type: 'numericProperty',
    value: 'Total lattice thermal conductivity (\u03BAL, total)',
    min: 0.02,
    max: 186.34,
    units: 'Wm-1K-1'
  },
  'Volume per atom': {
    type: 'numericProperty',
    value: 'Volume per atom',
    min: 5.63,
    max: 53.1,
    units: 'A3'
  },
  'Critical Current Density': {
    type: 'numericProperty',
    value: 'Critical Current Density',
    min: 0,
    max: 41800,
    units: 'kA/cm2'
  },
  'Boiling Point': {
    type: 'numericProperty',
    value: 'Boiling Point',
    min: -269,
    max: 6000,
    units: '\xB0C'
  },
  '0.2% Proof stress': {
    type: 'numericProperty',
    value: '0.2% Proof stress',
    min: 35,
    max: 341.27142,
    units: 'MPa'
  },
  'Power factor': {
    type: 'numericProperty',
    value: 'Power factor',
    min: 1.7655e-10,
    max: 0.006728,
    units: 'W/m\xB7K2'
  },
  'SEM Image': {
    type: 'categoricalProperty',
    value: 'SEM Image',
    options: []
  },
  'Seebeck coefficient': {
    type: 'numericProperty',
    value: 'Seebeck coefficient',
    min: -752.2,
    max: 1235.43,
    units: '\u03BCV/K'
  },
  State: {
    type: 'categoricalProperty',
    value: 'State',
    options: []
  },
  'Creep rupture lifetime': {
    type: 'numericProperty',
    value: 'Creep rupture lifetime',
    min: 0.6,
    max: 192607,
    units: 'hours'
  },
  'Rupture stress': {
    type: 'numericProperty',
    value: 'Rupture stress',
    min: 18,
    max: 530,
    units: 'MPa'
  },
  'Particle Distribution Label': {
    type: 'categoricalProperty',
    value: 'Particle Distribution Label',
    options: []
  },
  'Activation energy': {
    type: 'numericProperty',
    value: 'Activation energy',
    min: 62,
    max: 422.25,
    units: 'kJ/mol'
  },
  'Neutral oxygen vacancy formation energies (Ev)': {
    type: 'numericProperty',
    value: 'Neutral oxygen vacancy formation energies (Ev)',
    min: 1.6,
    max: 7.3,
    units: 'eV/V0'
  },
  Thickness: {
    type: 'numericProperty',
    value: 'Thickness',
    min: 0.3,
    max: 5.5,
    units: 'mm'
  },
  'Grain size': {
    type: 'numericProperty',
    value: 'Grain size',
    min: 0.20959065567686608,
    max: 5000,
    units: '\u03BCm'
  },
  'Specific gravity': {
    type: 'categoricalProperty',
    value: 'Specific gravity',
    options: []
  },
  'Critical Temperature': {
    type: 'numericProperty',
    value: 'Critical Temperature',
    min: 0,
    max: 164,
    units: 'K'
  },
  'Crack growth': {
    type: 'categoricalProperty',
    value: 'Crack growth',
    options: []
  },
  'Crack growth distance per fatigue cycle (da/dN)': {
    type: 'categoricalProperty',
    value: 'Crack growth distance per fatigue cycle (da/dN)',
    options: []
  },
  'Difference in grain size between major and minor phase': {
    type: 'numericProperty',
    value: 'Difference in grain size between major and minor phase',
    min: -35,
    max: 0,
    units: '\u03BCm'
  },
  'Axis Length': {
    type: 'numericProperty',
    value: 'Axis Length',
    min: 2.474,
    max: 60.49,
    units: 'A'
  },
  'Average atomic electronegativity differences between O and its first-nearest neighbours (\u0394X)': {
    type: 'categoricalProperty',
    value: 'Average atomic electronegativity differences between O and its first-nearest neighbours (\u0394X)',
    options: []
  },
  'Band gap energy (EgDFT+U)': {
    type: 'numericProperty',
    value: 'Band gap energy (EgDFT+U)',
    min: 0,
    max: 6.1,
    units: 'eV'
  },
  'Enthalpy of formation (\u0394Hf)': {
    type: 'numericProperty',
    value: 'Enthalpy of formation (\u0394Hf)',
    min: -4,
    max: -0.1,
    units: 'eV/atom'
  },
  'O-2p band center energies (EO2p)': {
    type: 'numericProperty',
    value: 'O-2p band center energies (EO2p)',
    min: 0.3,
    max: 6.1,
    units: 'eV'
  },
  '\u03C3 (electronic)(converted from log)': {
    type: 'numericProperty',
    value: '\u03C3 (electronic)(converted from log)',
    min: 2.62121e-7,
    max: 81223144.80747977,
    units: 'S/cm'
  },
  'Magnetic configuration': {
    type: 'categoricalProperty',
    value: 'Magnetic configuration',
    options: []
  },
  'XRD Intensity': {
    type: 'categoricalProperty',
    value: 'XRD Intensity',
    options: []
  },
  'Shear Modulus': {
    type: 'numericProperty',
    value: 'Shear Modulus',
    min: 0.003,
    max: 259,
    units: 'GPa'
  },
  SEM: {
    type: 'categoricalProperty',
    value: 'SEM',
    options: []
  },
  'primary microconstituent': {
    type: 'categoricalProperty',
    value: 'primary microconstituent',
    options: []
  },
  'Hydrogen partial pressure': {
    type: 'numericProperty',
    value: 'Hydrogen partial pressure',
    min: 0.0001,
    max: 5500,
    units: 'atm'
  },
  'Thermal Diffusivity': {
    type: 'numericProperty',
    value: 'Thermal Diffusivity',
    min: 0.0045,
    max: 4500,
    units: 'cm2 s-1'
  },
  'Melting point': {
    type: 'numericProperty',
    value: 'Melting point',
    min: -259,
    max: 4373,
    units: '\xB0C'
  },
  'Bravais lattice type': {
    type: 'categoricalProperty',
    value: 'Bravais lattice type',
    options: []
  },
  'Creep Rate': {
    type: 'numericProperty',
    value: 'Creep Rate',
    min: 0,
    max: 3900000,
    units: '10-9 s-1'
  },
  '(\u03C3T)(converted from log)': {
    type: 'numericProperty',
    value: '(\u03C3T)(converted from log)',
    min: 0.000002042219,
    max: 1383.9920104540604,
    units: 'S\xB7K/cm'
  },
  'Product 2 (B)': {
    type: 'categoricalProperty',
    value: 'Product 2 (B)',
    options: []
  },
  magnification: {
    type: 'categoricalProperty',
    value: 'magnification',
    options: []
  },
  'Refractive index (n)': {
    type: 'categoricalProperty',
    value: 'Refractive index (n)',
    options: []
  },
  'Yield Strength': {
    type: 'numericProperty',
    value: 'Yield Strength',
    min: 40,
    max: 1670,
    units: 'MPa'
  },
  'Thermoelectric Power': {
    type: 'numericProperty',
    value: 'Thermoelectric Power',
    min: -24.6,
    max: 889,
    units: '\u03BCV/K'
  },
  Phase: {
    type: 'categoricalProperty',
    value: 'Phase',
    options: []
  },
  'Surface energy': {
    type: 'numericProperty',
    value: 'Surface energy',
    min: -0.019800563689331415,
    max: 7.169599574717568,
    units: 'J/m^2'
  },
  'Enthalpy (\u0394Hf\xB0)': {
    type: 'numericProperty',
    value: 'Enthalpy (\u0394Hf\xB0)',
    min: -121.8,
    max: 38,
    units: 'kJ/mol'
  },
  'Density of states': {
    type: 'categoricalProperty',
    value: 'Density of states',
    options: []
  },
  'Density of states (d)': {
    type: 'categoricalProperty',
    value: 'Density of states (d)',
    options: []
  },
  'Density of states (p)': {
    type: 'categoricalProperty',
    value: 'Density of states (p)',
    options: []
  },
  'Density of states (s)': {
    type: 'categoricalProperty',
    value: 'Density of states (s)',
    options: []
  },
  'Lattice parameter (\u03B1)': {
    type: 'numericProperty',
    value: 'Lattice parameter (\u03B1)',
    min: 14.023928701250506,
    max: 162.1771573276409,
    units: '\xB0'
  },
  'Lattice parameter (\u03B2)': {
    type: 'numericProperty',
    value: 'Lattice parameter (\u03B2)',
    min: 14.023928701250506,
    max: 162.1771573276409,
    units: '\xB0'
  },
  'Lattice parameter (\u03B3)': {
    type: 'numericProperty',
    value: 'Lattice parameter (\u03B3)',
    min: 12.182504309392993,
    max: 169.34256596178628,
    units: '\xB0'
  },
  Manufacturer: {
    type: 'categoricalProperty',
    value: 'Manufacturer',
    options: []
  },
  'First sharp diffraction peak (FSDP) position': {
    type: 'categoricalProperty',
    value: 'First sharp diffraction peak (FSDP) position',
    options: []
  },
  'Full width half maximum (FWHM) of FSDP': {
    type: 'categoricalProperty',
    value: 'Full width half maximum (FWHM) of FSDP',
    options: []
  },
  'Maximum intensity/average intensity': {
    type: 'categoricalProperty',
    value: 'Maximum intensity/average intensity',
    options: []
  },
  Qchi: {
    type: 'categoricalProperty',
    value: 'Qchi',
    options: []
  },
  Texture: {
    type: 'categoricalProperty',
    value: 'Texture',
    options: []
  },
  'Log(\u03C3T)': {
    type: 'numericProperty',
    value: 'Log(\u03C3T)',
    min: -5.689897783087744,
    max: 3.1411335830212233,
    units: 'S\xB7K/cm'
  },
  'Cell Parameter (c)': {
    type: 'numericProperty',
    value: 'Cell Parameter (c)',
    min: 3.35,
    max: 60.6054,
    units: 'A'
  },
  Color: {
    type: 'categoricalProperty',
    value: 'Color',
    options: []
  },
  'Formation energy': {
    type: 'numericProperty',
    value: 'Formation energy',
    min: -1.9375,
    max: -0.0021,
    units: 'eV/atom'
  },
  'Structure designation': {
    type: 'categoricalProperty',
    value: 'Structure designation',
    options: []
  },
  'Boiling point': {
    type: 'numericProperty',
    value: 'Boiling point',
    min: -253,
    max: 892,
    units: '\xB0C'
  },
  'Area fraction in Wulff construction': {
    type: 'categoricalProperty',
    value: 'Area fraction in Wulff construction',
    options: []
  },
  'CIF file': {
    type: 'categoricalProperty',
    value: 'CIF file',
    options: []
  },
  'Energy above convex hull': {
    type: 'numericProperty',
    value: 'Energy above convex hull',
    min: 0,
    max: 0.42628380999999926,
    units: 'eV/atom'
  },
  'Surface reconstruction': {
    type: 'categoricalProperty',
    value: 'Surface reconstruction',
    options: []
  },
  Type: {
    type: 'categoricalProperty',
    value: 'Type',
    options: []
  },
  'Bulk modulus VRH average, KVRH': {
    type: 'numericProperty',
    value: 'Bulk modulus VRH average, KVRH',
    min: 6.47613489793,
    max: 435.661487298,
    units: 'GPa'
  },
  'Bulk modulus, Reuss KR': {
    type: 'numericProperty',
    value: 'Bulk modulus, Reuss KR',
    min: 4.7149759767,
    max: 435.658754308,
    units: 'GPa'
  },
  'Bulk modulus, Voigt KV': {
    type: 'numericProperty',
    value: 'Bulk modulus, Voigt KV',
    min: 6.47613845551,
    max: 435.664220288,
    units: 'GPa'
  },
  'Compliance tensor, sij': {
    type: 'numericProperty',
    value: 'Compliance tensor, sij',
    units: 'GPa-1'
  },
  'Elastic tensor, Cij': {
    type: 'numericProperty',
    value: 'Elastic tensor, Cij',
    units: 'GPa'
  },
  'Isotropic Poisson ratio, \u03BC': {
    type: 'categoricalProperty',
    value: 'Isotropic Poisson ratio, \u03BC',
    options: []
  },
  'Shear modulus VRH average, GVRH': {
    type: 'numericProperty',
    value: 'Shear modulus VRH average, GVRH',
    min: 2.72217516753,
    max: 522.92122535,
    units: 'GPa'
  },
  'Shear modulus, Reuss GR': {
    type: 'numericProperty',
    value: 'Shear modulus, Reuss GR',
    min: 1.87027033506,
    max: 520.845926404,
    units: 'GPa'
  },
  'Shear modulus, Voigt GV': {
    type: 'numericProperty',
    value: 'Shear modulus, Voigt GV',
    min: 3.57408,
    max: 524.996524295,
    units: 'GPa'
  },
  'Universal elastic anisotropy, AU': {
    type: 'categoricalProperty',
    value: 'Universal elastic anisotropy, AU',
    options: []
  },
  'Biological half-life': {
    type: 'categoricalProperty',
    value: 'Biological half-life',
    options: []
  },
  σ: {
    type: 'numericProperty',
    value: '\u03C3',
    min: 6.5e-8,
    max: 0.6842517727380715,
    units: 'S/cm'
  },
  'Heusler Type': {
    type: 'categoricalProperty',
    value: 'Heusler Type',
    options: []
  },
  'Lattice Constant': {
    type: 'numericProperty',
    value: 'Lattice Constant',
    min: -3.8992,
    max: 6.56,
    units: '\u212B'
  },
  'Magnetic Moment': {
    type: 'numericProperty',
    value: 'Magnetic Moment',
    min: 0,
    max: 8.1582,
    units: '\xB5B'
  },
  'No. of electrons per formula unit': {
    type: 'categoricalProperty',
    value: 'No. of electrons per formula unit',
    options: []
  },
  Stable: {
    type: 'categoricalProperty',
    value: 'Stable',
    options: []
  },
  Tetragonality: {
    type: 'numericProperty',
    value: 'Tetragonality',
    min: -0.5396,
    max: 7.09,
    units: 'c/a'
  },
  'Electrical resistivity': {
    type: 'numericProperty',
    value: 'Electrical resistivity',
    min: 0.0000645796,
    max: 14500,
    units: '\u03A9 \xB7cm'
  },
  'Backwards barrier from final': {
    type: 'numericProperty',
    value: 'Backwards barrier from final',
    min: 0.1113,
    max: 1.92756,
    units: 'eV'
  },
  'Barrier from initial': {
    type: 'numericProperty',
    value: 'Barrier from initial',
    min: 0.21835,
    max: 1.9268,
    units: 'eV'
  },
  'Center B-site cation': {
    type: 'categoricalProperty',
    value: 'Center B-site cation',
    options: []
  },
  'Difference between initial and final energies': {
    type: 'numericProperty',
    value: 'Difference between initial and final energies',
    min: -0.37344,
    max: 0.26164,
    units: 'eV'
  },
  'Energy pattern': {
    type: 'categoricalProperty',
    value: 'Energy pattern',
    options: []
  },
  'Final energy': {
    type: 'numericProperty',
    value: 'Final energy',
    min: -359.36041,
    max: -295.20982,
    units: 'eV'
  },
  'Initial energy': {
    type: 'numericProperty',
    value: 'Initial energy',
    min: -359.37677,
    max: -295.21878,
    units: 'eV'
  },
  'Max energy': {
    type: 'numericProperty',
    value: 'Max energy',
    min: -357.76239,
    max: -294.99142,
    units: 'eV'
  },
  'Maximum barrier': {
    type: 'numericProperty',
    value: 'Maximum barrier',
    min: 0.22736,
    max: 1.92756,
    units: 'eV'
  },
  'Plane status with respect to strain': {
    type: 'categoricalProperty',
    value: 'Plane status with respect to strain',
    options: []
  },
  'Strain in lattice parameter b': {
    type: 'categoricalProperty',
    value: 'Strain in lattice parameter b',
    options: []
  },
  'Strain in lattice parameter c': {
    type: 'categoricalProperty',
    value: 'Strain in lattice parameter c',
    options: []
  },
  'Vacancy hop label': {
    type: 'categoricalProperty',
    value: 'Vacancy hop label',
    options: []
  },
  'Atomic Coordinates (c)': {
    type: 'categoricalProperty',
    value: 'Atomic Coordinates (c)',
    options: []
  },
  'Tensile Strength': {
    type: 'numericProperty',
    value: 'Tensile Strength',
    min: 1,
    max: 59000,
    units: 'MPa'
  },
  'Electrical conductivity': {
    type: 'numericProperty',
    value: 'Electrical conductivity',
    min: 0.000068966,
    max: 173720,
    units: 'S/cm'
  },
  'Exact Mass': {
    type: 'numericProperty',
    value: 'Exact Mass',
    min: 84.051596,
    max: 4201420314,
    units: 'u'
  },
  'anneal temperature': {
    type: 'numericProperty',
    value: 'anneal temperature',
    min: 700,
    max: 1100,
    units: 'Celsius'
  },
  'anneal time': {
    type: 'numericProperty',
    value: 'anneal time',
    min: 5,
    max: 5100,
    units: 'min'
  },
  'cool method': {
    type: 'categoricalProperty',
    value: 'cool method',
    options: []
  },
  'Preparation method': {
    type: 'categoricalProperty',
    value: 'Preparation method',
    options: []
  },
  'Formation Energy': {
    type: 'numericProperty',
    value: 'Formation Energy',
    min: -1.109,
    max: 1.054,
    units: 'eV/atom'
  },
  'Polarization at Fermi level': {
    type: 'numericProperty',
    value: 'Polarization at Fermi level',
    min: 0,
    max: 100,
    units: '%'
  },
  'Saturation Magnetization': {
    type: 'numericProperty',
    value: 'Saturation Magnetization',
    min: 0,
    max: 1400.83,
    units: 'emu/cc'
  },
  Category: {
    type: 'categoricalProperty',
    value: 'Category',
    options: []
  },
  'Gap Width': {
    type: 'numericProperty',
    value: 'Gap Width',
    min: 0.004,
    max: 1.392,
    units: 'eV'
  },
  'Crystal structure in Crystallographic Information File (CIF) format': {
    type: 'categoricalProperty',
    value: 'Crystal structure in Crystallographic Information File (CIF) format',
    options: []
  },
  'Crystal structure in the VASP-specific POSCAR format': {
    type: 'categoricalProperty',
    value: 'Crystal structure in the VASP-specific POSCAR format',
    options: []
  },
  'Dielectric tensor (electronic contribution) \u03B5\u221Eij': {
    type: 'categoricalProperty',
    value: 'Dielectric tensor (electronic contribution) \u03B5\u221Eij',
    options: []
  },
  'Number of atoms in the primitive cell': {
    type: 'categoricalProperty',
    value: 'Number of atoms in the primitive cell',
    options: []
  },
  'Number of k-points in the first Brillouin zone per reciprocal atom': {
    type: 'categoricalProperty',
    value: 'Number of k-points in the first Brillouin zone per reciprocal atom',
    options: []
  },
  'Point group in Hermann-Mauguin notation': {
    type: 'categoricalProperty',
    value: 'Point group in Hermann-Mauguin notation',
    options: []
  },
  'Polycrystalline dielectric constant estimate (electronic contribution) \u03B5\u221Epoly': {
    type: 'categoricalProperty',
    value: 'Polycrystalline dielectric constant estimate (electronic contribution) \u03B5\u221Epoly',
    options: []
  },
  'Polycrystalline dielectric constant estimate (total)\u03B5poly': {
    type: 'categoricalProperty',
    value: 'Polycrystalline dielectric constant estimate (total)\u03B5poly',
    options: []
  },
  'Potential ferroelectric compound': {
    type: 'categoricalProperty',
    value: 'Potential ferroelectric compound',
    options: []
  },
  'Remnant interatomic forces larger than 0.01 eV/A': {
    type: 'categoricalProperty',
    value: 'Remnant interatomic forces larger than 0.01 eV/A',
    options: []
  },
  'Space group number as defined by the International Union of Crystallography': {
    type: 'categoricalProperty',
    value: 'Space group number as defined by the International Union of Crystallography',
    options: []
  },
  'Total dielectric tensor \u03B5ij': {
    type: 'categoricalProperty',
    value: 'Total dielectric tensor \u03B5ij',
    options: []
  },
  'names of the VASP pseudopotentials used for each element': {
    type: 'categoricalProperty',
    value: 'names of the VASP pseudopotentials used for each element',
    options: []
  },
  'simulation parameters definition file in the VASP-specific INCAR format': {
    type: 'categoricalProperty',
    value: 'simulation parameters definition file in the VASP-specific INCAR format',
    options: []
  },
  'Specific Heat Capacity': {
    type: 'numericProperty',
    value: 'Specific Heat Capacity',
    min: 120,
    max: 2350,
    units: 'J/kg-K'
  },
  'Heat treatment 1 Cooling': {
    type: 'categoricalProperty',
    value: 'Heat treatment 1 Cooling',
    options: []
  },
  'Heat treatment 2 Cooling': {
    type: 'categoricalProperty',
    value: 'Heat treatment 2 Cooling',
    options: []
  },
  'Heat treatment 3 Cooling': {
    type: 'categoricalProperty',
    value: 'Heat treatment 3 Cooling',
    options: []
  },
  'Heat treatment 4 Cooling': {
    type: 'categoricalProperty',
    value: 'Heat treatment 4 Cooling',
    options: []
  },
  'Heat treatment 5 Cooling': {
    type: 'categoricalProperty',
    value: 'Heat treatment 5 Cooling',
    options: []
  },
  'Strengthening Precipitate Phase': {
    type: 'categoricalProperty',
    value: 'Strengthening Precipitate Phase',
    options: []
  },
  'Material type': {
    type: 'categoricalProperty',
    value: 'Material type',
    options: []
  },
  'Elastic (Young\'s, Tensile) Modulus': {
    type: 'numericProperty',
    value: 'Elastic (Young\'s, Tensile) Modulus',
    min: 0.005,
    max: 1050,
    units: 'GPa'
  },
  'Tensile Strength: Ultimate (UTS)': {
    type: 'numericProperty',
    value: 'Tensile Strength: Ultimate (UTS)',
    min: 0.016,
    max: 2810,
    units: 'MPa'
  },
  'Thermal conductivity, \u03BB': {
    type: 'numericProperty',
    value: 'Thermal conductivity, \u03BB',
    min: 0.024,
    max: 17004900,
    units: 'Wm-1K-1'
  },
  'Strength to Weight Ratio': {
    type: 'numericProperty',
    value: 'Strength to Weight Ratio',
    min: 0.16,
    max: 360,
    units: 'kN-m/kg'
  },
  'Temperature coefficient of refractive index (C\')': {
    type: 'numericProperty',
    value: 'Temperature coefficient of refractive index (C\')',
    min: -7.5,
    max: 25,
    units: '10-6/0C'
  },
  'Temperature coefficient of refractive index (D)': {
    type: 'numericProperty',
    value: 'Temperature coefficient of refractive index (D)',
    min: -7.4,
    max: 27.7,
    units: '10-6/0C'
  },
  'Temperature coefficient of refractive index (F\')': {
    type: 'numericProperty',
    value: 'Temperature coefficient of refractive index (F\')',
    min: -7.2,
    max: 39.5,
    units: '10-6/0C'
  },
  'Temperature coefficient of refractive index (e)': {
    type: 'numericProperty',
    value: 'Temperature coefficient of refractive index (e)',
    min: -7.4,
    max: 30.9,
    units: '10-6/0C'
  },
  'Temperature coefficient of refractive index (g)': {
    type: 'numericProperty',
    value: 'Temperature coefficient of refractive index (g)',
    min: -7,
    max: 50.7,
    units: '10-6/0C'
  },
  'Strunz classification': {
    type: 'categoricalProperty',
    value: 'Strunz classification',
    options: []
  },
  'General Solubility': {
    type: 'categoricalProperty',
    value: 'General Solubility',
    options: []
  },
  'Deep Learning Texture Vector': {
    type: 'categoricalProperty',
    value: 'Deep Learning Texture Vector',
    options: []
  },
  'Mohs scale hardness': {
    type: 'categoricalProperty',
    value: 'Mohs scale hardness',
    options: []
  },
  'Density (\u03C1)': {
    type: 'numericProperty',
    value: 'Density (\u03C1)',
    min: 0.01081,
    max: 13595,
    units: 'kg/m3'
  },
  Luster: {
    type: 'categoricalProperty',
    value: 'Luster',
    options: []
  },
  'Point group': {
    type: 'categoricalProperty',
    value: 'Point group',
    options: []
  },
  'Temperature coefficient of refractive index (t)': {
    type: 'numericProperty',
    value: 'Temperature coefficient of refractive index (t)',
    min: -7.7,
    max: 18.5,
    units: '10-6/0C'
  },
  'Stacking fault energy': {
    type: 'numericProperty',
    value: 'Stacking fault energy',
    min: 3.26,
    max: 131,
    units: 'mJ/m^2'
  },
  'fraction Al': {
    type: 'categoricalProperty',
    value: 'fraction Al',
    options: []
  },
  'fraction C': {
    type: 'categoricalProperty',
    value: 'fraction C',
    options: []
  },
  'fraction Co': {
    type: 'categoricalProperty',
    value: 'fraction Co',
    options: []
  },
  'fraction Cr': {
    type: 'categoricalProperty',
    value: 'fraction Cr',
    options: []
  },
  'fraction Cu': {
    type: 'categoricalProperty',
    value: 'fraction Cu',
    options: []
  },
  'fraction Fe': {
    type: 'categoricalProperty',
    value: 'fraction Fe',
    options: []
  },
  'fraction Hf': {
    type: 'categoricalProperty',
    value: 'fraction Hf',
    options: []
  },
  'fraction Mn': {
    type: 'categoricalProperty',
    value: 'fraction Mn',
    options: []
  },
  'fraction Mo': {
    type: 'categoricalProperty',
    value: 'fraction Mo',
    options: []
  },
  'fraction N': {
    type: 'categoricalProperty',
    value: 'fraction N',
    options: []
  },
  'fraction Nb': {
    type: 'categoricalProperty',
    value: 'fraction Nb',
    options: []
  },
  'fraction Ni': {
    type: 'categoricalProperty',
    value: 'fraction Ni',
    options: []
  },
  'fraction P': {
    type: 'categoricalProperty',
    value: 'fraction P',
    options: []
  },
  'fraction S': {
    type: 'categoricalProperty',
    value: 'fraction S',
    options: []
  },
  'fraction Si': {
    type: 'categoricalProperty',
    value: 'fraction Si',
    options: []
  },
  'fraction Ti': {
    type: 'categoricalProperty',
    value: 'fraction Ti',
    options: []
  },
  'Density of k-points in the first Brillouin zone per reciprocal atom': {
    type: 'categoricalProperty',
    value: 'Density of k-points in the first Brillouin zone per reciprocal atom',
    options: []
  },
  'Number of atoms per conventional cell': {
    type: 'categoricalProperty',
    value: 'Number of atoms per conventional cell',
    options: []
  },
  'Piezoelectric Modulus': {
    type: 'numericProperty',
    value: 'Piezoelectric Modulus',
    min: 0.000006,
    max: 46.192855,
    units: 'C/m2'
  },
  'Piezoelectric Tensor': {
    type: 'numericProperty',
    value: 'Piezoelectric Tensor',
    units: 'C/m2'
  },
  'Piezoelectric modulus (||eij||max)': {
    type: 'numericProperty',
    value: 'Piezoelectric modulus (||eij||max)',
    min: 0.000006,
    max: 46.192855,
    units: 'C/m2'
  },
  'Piezoelectric tensor (eij)': {
    type: 'numericProperty',
    value: 'Piezoelectric tensor (eij)',
    units: 'C/m2'
  },
  'fraction V': {
    type: 'categoricalProperty',
    value: 'fraction V',
    options: []
  },
  detector: {
    type: 'categoricalProperty',
    value: 'detector',
    options: []
  },
  Metabolism: {
    type: 'categoricalProperty',
    value: 'Metabolism',
    options: []
  },
  Excretion: {
    type: 'categoricalProperty',
    value: 'Excretion',
    options: []
  },
  'log \u03C3 (electronic)': {
    type: 'numericProperty',
    value: 'log \u03C3 (electronic)',
    min: -5.632679738562085,
    max: 7.909679800545482,
    units: 'S/cm'
  },
  Symmetry: {
    type: 'categoricalProperty',
    value: 'Symmetry',
    options: []
  },
  'Ultimate Tensile Strength': {
    type: 'numericProperty',
    value: 'Ultimate Tensile Strength',
    min: 54,
    max: 1857,
    units: 'MPa'
  },
  'Elongation at Break': {
    type: 'numericProperty',
    value: 'Elongation at Break',
    min: 0.5,
    max: 800,
    units: '%'
  },
  'Poissons Ratio': {
    type: 'categoricalProperty',
    value: 'Poissons Ratio',
    options: []
  },
  '[Original] log\u03C3': {
    type: 'numericProperty',
    value: '[Original] log\u03C3',
    min: -7.557979179006216,
    max: -0.3695716548003771,
    units: 'S/cm'
  },
  ZT: {
    type: 'categoricalProperty',
    value: 'ZT',
    options: []
  },
  'Bulk modulus': {
    type: 'numericProperty',
    value: 'Bulk modulus',
    min: 0.01,
    max: 1155,
    units: 'GPa'
  },
  'Stress Rupture Stress': {
    type: 'numericProperty',
    value: 'Stress Rupture Stress',
    min: 0.1,
    max: 4998,
    units: 'MPa'
  },
  'Stress Rupture Time': {
    type: 'numericProperty',
    value: 'Stress Rupture Time',
    min: 0.005,
    max: 23640,
    units: 'hours'
  },
  'log Resistivity': {
    type: 'categoricalProperty',
    value: 'log Resistivity',
    options: []
  },
  'Crystal habit': {
    type: 'categoricalProperty',
    value: 'Crystal habit',
    options: []
  },
  'Yield strength, YS': {
    type: 'numericProperty',
    value: 'Yield strength, YS',
    min: 1005.9,
    max: 2576.9,
    units: 'MPa'
  },
  Cleavage: {
    type: 'categoricalProperty',
    value: 'Cleavage',
    options: []
  },
  'Material Type': {
    type: 'categoricalProperty',
    value: 'Material Type',
    options: []
  },
  'Specific heat (Cp)': {
    type: 'numericProperty',
    value: 'Specific heat (Cp)',
    min: 0.141,
    max: 17400,
    units: 'J/kg.K'
  },
  'Thermal conductivity (k)': {
    type: 'numericProperty',
    value: 'Thermal conductivity (k)',
    min: 0.000017,
    max: 9110,
    units: 'W/m.K'
  },
  'Temperature coefficient of refractive index (He-Ne)': {
    type: 'numericProperty',
    value: 'Temperature coefficient of refractive index (He-Ne)',
    min: -7.5,
    max: 25.4,
    units: '10-6/0C'
  },
  'Tensile Strength: Yield (Proof)': {
    type: 'numericProperty',
    value: 'Tensile Strength: Yield (Proof)',
    min: 23,
    max: 1240,
    units: 'MPa'
  },
  'Sound Velocity': {
    type: 'numericProperty',
    value: 'Sound Velocity',
    min: 1.293,
    max: 18.65,
    units: 'km/s'
  },
  Streak: {
    type: 'categoricalProperty',
    value: 'Streak',
    options: []
  },
  'Tensile strength': {
    type: 'numericProperty',
    value: 'Tensile strength',
    min: 0.0542,
    max: 147000,
    units: 'psi'
  },
  'Modulus of Resilience (Unit Resilience)': {
    type: 'numericProperty',
    value: 'Modulus of Resilience (Unit Resilience)',
    min: 8.5,
    max: 4100,
    units: 'kJ/m3'
  },
  'Ultimate tensile strength, UTS': {
    type: 'numericProperty',
    value: 'Ultimate tensile strength, UTS',
    min: 1019,
    max: 2625.1,
    units: 'MPa'
  },
  Condition: {
    type: 'categoricalProperty',
    value: 'Condition',
    options: []
  },
  'Unit Rupture Work (Ultimate Resilience)': {
    type: 'numericProperty',
    value: 'Unit Rupture Work (Ultimate Resilience)',
    min: 1.4,
    max: 400,
    units: 'MJ/m3'
  },
  'Dehydrogenation enthalpy': {
    type: 'numericProperty',
    value: 'Dehydrogenation enthalpy',
    min: 1.03,
    max: 413,
    units: 'kJ/mol(H2)'
  },
  'Energy per atom': {
    type: 'numericProperty',
    value: 'Energy per atom',
    min: -9.066,
    max: -1.187,
    units: 'Energy per atom'
  },
  'Relative Atomic Coordinate': {
    type: 'categoricalProperty',
    value: 'Relative Atomic Coordinate',
    options: []
  },
  'Thermoelectric figure of merit (zT)': {
    type: 'categoricalProperty',
    value: 'Thermoelectric figure of merit (zT)',
    options: []
  },
  Bioavailability: {
    type: 'categoricalProperty',
    value: 'Bioavailability',
    options: []
  },
  'Base Metal Price': {
    type: 'numericProperty',
    value: 'Base Metal Price',
    min: 2.9,
    max: 100,
    units: '% rel'
  },
  'Corrosion Rate': {
    type: 'numericProperty',
    value: 'Corrosion Rate',
    min: -1280,
    max: 86,
    units: 'mg cm-2 h-1'
  },
  'Surface Resistance': {
    type: 'numericProperty',
    value: 'Surface Resistance',
    min: 0,
    max: 15000,
    units: 'm\u03A9'
  },
  'Conductivity(converted from log)': {
    type: 'numericProperty',
    value: 'Conductivity(converted from log)',
    min: 1.894e-9,
    max: 0.7704103491941716,
    units: 'S/cm'
  },
  'log\u03C3 (electronic)': {
    type: 'numericProperty',
    value: 'log\u03C3 (electronic)',
    min: -6.581497797356831,
    max: 3.808832759849148,
    units: 'S/cm'
  },
  'Dielectric function (\u03B51)': {
    type: 'categoricalProperty',
    value: 'Dielectric function (\u03B51)',
    options: []
  },
  'Dielectric function (\u03B52)': {
    type: 'categoricalProperty',
    value: 'Dielectric function (\u03B52)',
    options: []
  },
  'Hall Coefficient': {
    type: 'numericProperty',
    value: 'Hall Coefficient',
    min: -14.2,
    max: 1000,
    units: 'mm3 /C'
  },
  'Reduction of area': {
    type: 'numericProperty',
    value: 'Reduction of area',
    min: 17,
    max: 83,
    units: '%'
  },
  'Unit cell (a)': {
    type: 'numericProperty',
    value: 'Unit cell (a)',
    min: 2.461,
    max: 31.34,
    units: 'A'
  },
  'Grain Size': {
    type: 'numericProperty',
    value: 'Grain Size',
    min: 0.05,
    max: 2500,
    units: '\u03BCm'
  },
  'Area reduction': {
    type: 'numericProperty',
    value: 'Area reduction',
    min: 14,
    max: 97,
    units: '%'
  },
  'Bulk Modulus': {
    type: 'numericProperty',
    value: 'Bulk Modulus',
    min: 1.58,
    max: 515,
    units: 'GPa'
  },
  'Protein binding': {
    type: 'categoricalProperty',
    value: 'Protein binding',
    options: []
  },
  '[Original] log\u03C3T': {
    type: 'numericProperty',
    value: '[Original] log\u03C3T',
    min: -4.3366583541147135,
    max: 2.7874014206933078,
    units: 'S\xB7K/cm'
  },
  Resistance: {
    type: 'numericProperty',
    value: 'Resistance',
    min: 0,
    max: 25400,
    units: 'm\u03A9'
  },
  'Activation energy of C* to C (graphene)': {
    type: 'numericProperty',
    value: 'Activation energy of C* to C (graphene)',
    min: -3.91727,
    max: 2.39047,
    units: 'eV'
  },
  'Reaction enthalpy of C* to C (graphene)': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of C* to C (graphene)',
    min: -3.91727,
    max: 2.39047,
    units: 'eV'
  },
  'Crystal Structure': {
    type: 'categoricalProperty',
    value: 'Crystal Structure',
    options: []
  },
  'Activation energy of O* to 1/2 O2': {
    type: 'numericProperty',
    value: 'Activation energy of O* to 1/2 O2',
    min: 0.07569,
    max: 6.35646,
    units: 'eV'
  },
  'Reaction enthalpy of O* to 1/2 O2': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of O* to 1/2 O2',
    min: 0.07569,
    max: 6.35646,
    units: 'eV'
  },
  Odor: {
    type: 'categoricalProperty',
    value: 'Odor',
    options: []
  },
  'Unit cell (Z)': {
    type: 'categoricalProperty',
    value: 'Unit cell (Z)',
    options: []
  },
  'Flexural strength': {
    type: 'numericProperty',
    value: 'Flexural strength',
    min: 0,
    max: 80000,
    units: 'psi'
  },
  'Unit cell (c)': {
    type: 'numericProperty',
    value: 'Unit cell (c)',
    min: 2.82,
    max: 95.05,
    units: 'A'
  },
  'Superconducting critical temperature (Tc)': {
    type: 'numericProperty',
    value: 'Superconducting critical temperature (Tc)',
    min: 0.006467345,
    max: 134,
    units: 'K'
  },
  '\u03C3 (ionic)(converted from log)': {
    type: 'numericProperty',
    value: '\u03C3 (ionic)(converted from log)',
    min: 3.3899e-8,
    max: 0.4727411748663341,
    units: 'S/cm'
  },
  Fracture: {
    type: 'categoricalProperty',
    value: 'Fracture',
    options: []
  },
  'Tensile modulus': {
    type: 'numericProperty',
    value: 'Tensile modulus',
    min: 65,
    max: 1000018000,
    units: 'psi'
  },
  Birefringence: {
    type: 'categoricalProperty',
    value: 'Birefringence',
    options: []
  },
  'Flash point': {
    type: 'numericProperty',
    value: 'Flash point',
    min: -135,
    max: 355,
    units: '\xB0C'
  },
  'Work function': {
    type: 'numericProperty',
    value: 'Work function',
    min: 2.03,
    max: 7.05,
    units: 'eV'
  },
  'Log conductivity': {
    type: 'numericProperty',
    value: 'Log conductivity',
    min: -8.722573340904827,
    max: -0.11327789181325709,
    units: 'S/cm'
  },
  'Direct band gap': {
    type: 'categoricalProperty',
    value: 'Direct band gap',
    options: []
  },
  'Flexural modulus': {
    type: 'numericProperty',
    value: 'Flexural modulus',
    min: 120,
    max: 1300014000,
    units: 'psi'
  },
  'Melting point (Tm)': {
    type: 'numericProperty',
    value: 'Melting point (Tm)',
    min: 190.65,
    max: 512.15,
    units: 'K'
  },
  '#C': {
    type: 'categoricalProperty',
    value: '#C',
    options: []
  },
  '#H': {
    type: 'categoricalProperty',
    value: '#H',
    options: []
  },
  'Class of hydrocarbon': {
    type: 'categoricalProperty',
    value: 'Class of hydrocarbon',
    options: []
  },
  'Mol weight': {
    type: 'numericProperty',
    value: 'Mol weight',
    min: 16.04,
    max: 1404.6,
    units: 'g/mol'
  },
  'Tensile elongation': {
    type: 'numericProperty',
    value: 'Tensile elongation',
    min: 0,
    max: 2800000,
    units: '%'
  },
  'Pauling electronegativity': {
    type: 'categoricalProperty',
    value: 'Pauling electronegativity',
    options: []
  },
  'Irreversibility Field': {
    type: 'numericProperty',
    value: 'Irreversibility Field',
    min: 0,
    max: 143,
    units: 'T'
  },
  'Average atomic number': {
    type: 'categoricalProperty',
    value: 'Average atomic number',
    options: []
  },
  'Heat of formation \u0394Hf': {
    type: 'numericProperty',
    value: 'Heat of formation \u0394Hf',
    min: -3440,
    max: 1134.6,
    units: 'kJ/mol'
  },
  'Elongation At Break': {
    type: 'numericProperty',
    value: 'Elongation At Break',
    min: 0.04,
    max: 390,
    units: '%'
  },
  'Tensile Modulus': {
    type: 'numericProperty',
    value: 'Tensile Modulus',
    min: 1.1,
    max: 221000,
    units: 'MPa'
  },
  pKa: {
    type: 'categoricalProperty',
    value: 'pKa',
    options: []
  },
  'Group symmetry': {
    type: 'categoricalProperty',
    value: 'Group symmetry',
    options: []
  },
  'Dynamic viscosity (\u03BC)': {
    type: 'numericProperty',
    value: 'Dynamic viscosity (\u03BC)',
    min: 0.00000255,
    max: 10.49,
    units: 'kg/m.s'
  },
  'Prandtl Number (Pr)': {
    type: 'categoricalProperty',
    value: 'Prandtl Number (Pr)',
    options: []
  },
  'Vapor density': {
    type: 'categoricalProperty',
    value: 'Vapor density',
    options: []
  },
  'Vapor Pressure': {
    type: 'numericProperty',
    value: 'Vapor Pressure',
    min: 0,
    max: 5990,
    units: 'mm Hg'
  },
  'Critical Magnetic Flux Density Hc2': {
    type: 'numericProperty',
    value: 'Critical Magnetic Flux Density Hc2',
    min: 0,
    max: 125,
    units: 'T'
  },
  'Fatigue Strength': {
    type: 'numericProperty',
    value: 'Fatigue Strength',
    min: 225,
    max: 1190,
    units: 'MPa'
  },
  'Area Proportion of Inclusions Deformed by Plastic Work': {
    type: 'categoricalProperty',
    value: 'Area Proportion of Inclusions Deformed by Plastic Work',
    options: []
  },
  'Area Proportion of Inclusions Occurring in Discontinuous Array': {
    type: 'categoricalProperty',
    value: 'Area Proportion of Inclusions Occurring in Discontinuous Array',
    options: []
  },
  'Area Proportion of Isolated Inclusions': {
    type: 'categoricalProperty',
    value: 'Area Proportion of Isolated Inclusions',
    options: []
  },
  'Carburization Temperature': {
    type: 'numericProperty',
    value: 'Carburization Temperature',
    min: 30,
    max: 930,
    units: '\xB0C'
  },
  'Carburization Time': {
    type: 'numericProperty',
    value: 'Carburization Time',
    min: 0,
    max: 540,
    units: 'min'
  },
  'Cooling Rate for Tempering': {
    type: 'numericProperty',
    value: 'Cooling Rate for Tempering',
    min: 0,
    max: 24,
    units: '\xB0C/hr'
  },
  'Cooling Rate for Through Hardening': {
    type: 'numericProperty',
    value: 'Cooling Rate for Through Hardening',
    min: 0,
    max: 24,
    units: '\xB0C/hr'
  },
  'Diffusion Temperature': {
    type: 'numericProperty',
    value: 'Diffusion Temperature',
    min: 30,
    max: 903.3330000000001,
    units: '\xB0C'
  },
  'Diffusion time': {
    type: 'numericProperty',
    value: 'Diffusion time',
    min: 0,
    max: 70.2,
    units: 'min'
  },
  'Normalizing Temperature': {
    type: 'numericProperty',
    value: 'Normalizing Temperature',
    min: 825,
    max: 930,
    units: '\xB0C'
  },
  'Quenching Media Temperature (for Carburization)': {
    type: 'numericProperty',
    value: 'Quenching Media Temperature (for Carburization)',
    min: 30,
    max: 140,
    units: '\xB0C'
  },
  'Reduction Ratio (Ingot to Bar)': {
    type: 'categoricalProperty',
    value: 'Reduction Ratio (Ingot to Bar)',
    options: []
  },
  'Sample Number': {
    type: 'categoricalProperty',
    value: 'Sample Number',
    options: []
  },
  'Tempering Temperature': {
    type: 'numericProperty',
    value: 'Tempering Temperature',
    min: 30,
    max: 680,
    units: '\xB0C'
  },
  'Tempering Time': {
    type: 'numericProperty',
    value: 'Tempering Time',
    min: 0,
    max: 120,
    units: 'min'
  },
  'Through Hardening Temperature': {
    type: 'numericProperty',
    value: 'Through Hardening Temperature',
    min: 30,
    max: 865,
    units: '\xB0C'
  },
  'Through Hardening Time': {
    type: 'numericProperty',
    value: 'Through Hardening Time',
    min: 0,
    max: 30,
    units: 'min'
  },
  Tenacity: {
    type: 'categoricalProperty',
    value: 'Tenacity',
    options: []
  },
  'Continuous service temperature in air': {
    type: 'numericProperty',
    value: 'Continuous service temperature in air',
    min: 110,
    max: 650,
    units: '\xB0F'
  },
  'Unit cell (b)': {
    type: 'numericProperty',
    value: 'Unit cell (b)',
    min: 2.8705,
    max: 45.3,
    units: 'A'
  },
  'Water absorption (24 hours)': {
    type: 'numericProperty',
    value: 'Water absorption (24 hours)',
    min: 0,
    max: 3,
    units: '%'
  },
  'Refractive index (n\u03B1)': {
    type: 'categoricalProperty',
    value: 'Refractive index (n\u03B1)',
    options: []
  },
  'Coefficient of thermal expansion': {
    type: 'numericProperty',
    value: 'Coefficient of thermal expansion',
    min: 54,
    max: 169,
    units: '10-7/0C'
  },
  'Commercial Name': {
    type: 'categoricalProperty',
    value: 'Commercial Name',
    options: []
  },
  'Dielectric constant': {
    type: 'numericProperty',
    value: 'Dielectric constant',
    min: 0,
    max: 830,
    units: '106 Hz'
  },
  'Refractive index (n\u03B3)': {
    type: 'categoricalProperty',
    value: 'Refractive index (n\u03B3)',
    options: []
  },
  'Embrittlement temperature': {
    type: 'numericProperty',
    value: 'Embrittlement temperature',
    min: -400,
    max: 105,
    units: '\xB0F'
  },
  'Water absorption (saturation)': {
    type: 'numericProperty',
    value: 'Water absorption (saturation)',
    min: 0,
    max: 8.5,
    units: '%'
  },
  'Flexural Modulus': {
    type: 'numericProperty',
    value: 'Flexural Modulus',
    min: 3,
    max: 54000,
    units: 'MPa'
  },
  'Electrical Resistivity Order of Magnitude': {
    type: 'numericProperty',
    value: 'Electrical Resistivity Order of Magnitude',
    min: -8,
    max: 17,
    units: '10x\u03A9-m'
  },
  'Elasticity tensor': {
    type: 'numericProperty',
    value: 'Elasticity tensor',
    units: 'GPa'
  },
  'Refractive index (n\u03B2)': {
    type: 'categoricalProperty',
    value: 'Refractive index (n\u03B2)',
    options: []
  },
  'Conductivity (\u03C3)': {
    type: 'numericProperty',
    value: 'Conductivity (\u03C3)',
    min: 0.000002337503,
    max: 316,
    units: 'S/cm'
  },
  '[Original] log(\u03C3T)': {
    type: 'numericProperty',
    value: '[Original] log(\u03C3T)',
    min: -4.930333817126285,
    max: 3.1411335830212233,
    units: 'S\xB7K/cm'
  },
  'Difference between Fermi Level and conduction band edge': {
    type: 'numericProperty',
    value: 'Difference between Fermi Level and conduction band edge',
    min: 0.0007,
    max: 1.8398,
    units: 'eV'
  },
  Ea: {
    type: 'numericProperty',
    value: 'Ea',
    min: -2.5631067961165046,
    max: 1.82,
    units: 'eV'
  },
  'Production Form': {
    type: 'categoricalProperty',
    value: 'Production Form',
    options: []
  },
  Pleochroism: {
    type: 'categoricalProperty',
    value: 'Pleochroism',
    options: []
  },
  'Short term service temperature': {
    type: 'numericProperty',
    value: 'Short term service temperature',
    min: 110,
    max: 750,
    units: '\xB0F'
  },
  'Heat Deflection Temperature': {
    type: 'numericProperty',
    value: 'Heat Deflection Temperature',
    min: 33,
    max: 269,
    units: '\xB0C'
  },
  'Shear strength': {
    type: 'numericProperty',
    value: 'Shear strength',
    min: 2,
    max: 8500001050000,
    units: 'psi'
  },
  'Ln(\u03C3T)': {
    type: 'numericProperty',
    value: 'Ln(\u03C3T)',
    min: -11.91516885171978,
    max: 5.763231197771586,
    units: 'S\xB7K/cm'
  },
  'Absorption Cross Section for 2200 m/s Neutrons': {
    type: 'numericProperty',
    value: 'Absorption Cross Section for 2200 m/s Neutrons',
    min: 0,
    max: 259000,
    units: 'barn'
  },
  Synonyms: {
    type: 'categoricalProperty',
    value: 'Synonyms',
    options: []
  },
  'Bound Incoherent Neutron Scattering Cross Section': {
    type: 'numericProperty',
    value: 'Bound Incoherent Neutron Scattering Cross Section',
    min: 0,
    max: 394,
    units: 'barn'
  },
  'H-M symbol': {
    type: 'categoricalProperty',
    value: 'H-M symbol',
    options: []
  },
  'Reaction enthalpy of CO* to CO': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of CO* to CO',
    min: -1.25,
    max: 27.246524751,
    units: 'eV'
  },
  'Relative Atomic Mass': {
    type: 'categoricalProperty',
    value: 'Relative Atomic Mass',
    options: []
  },
  'Bulk modulus K0': {
    type: 'numericProperty',
    value: 'Bulk modulus K0',
    min: 16.4,
    max: 318.9,
    units: 'GPa'
  },
  'Shear modulus G0': {
    type: 'numericProperty',
    value: 'Shear modulus G0',
    min: 10.3,
    max: 229,
    units: 'GPa'
  },
  Stucture: {
    type: 'categoricalProperty',
    value: 'Stucture',
    options: []
  },
  'Weibull Modulus': {
    type: 'categoricalProperty',
    value: 'Weibull Modulus',
    options: []
  },
  'Melting Onset (Solidus)': {
    type: 'numericProperty',
    value: 'Melting Onset (Solidus)',
    min: 60,
    max: 2900,
    units: '\xB0C'
  },
  'Standard Molar Entropy S \xB0': {
    type: 'numericProperty',
    value: 'Standard Molar Entropy S \xB0',
    min: 37.75,
    max: 652.24,
    units: 'J K-1 mol-1'
  },
  'Atomic radius': {
    type: 'numericProperty',
    value: 'Atomic radius',
    min: 1.38,
    max: 1.59,
    units: 'A'
  },
  'Charpy impact energy': {
    type: 'numericProperty',
    value: 'Charpy impact energy',
    min: 2.7,
    max: 234.6,
    units: 'J'
  },
  'Austenising temperature (Taust)': {
    type: 'numericProperty',
    value: 'Austenising temperature (Taust)',
    min: 0,
    max: 1393,
    units: 'K'
  },
  'Martensite start temperature (Ms)': {
    type: 'numericProperty',
    value: 'Martensite start temperature (Ms)',
    min: 342,
    max: 769,
    units: 'K'
  },
  'Temperature at which ferrite to austenite transformation is complete (Ac3)': {
    type: 'numericProperty',
    value: 'Temperature at which ferrite to austenite transformation is complete (Ac3)',
    min: 0,
    max: 1156,
    units: 'K'
  },
  'Bound Coherent Neutron Scattering Cross Section': {
    type: 'numericProperty',
    value: 'Bound Coherent Neutron Scattering Cross Section',
    min: 0,
    max: 650,
    units: 'barn'
  },
  'Fracture Energy': {
    type: 'numericProperty',
    value: 'Fracture Energy',
    min: 0.14,
    max: 95,
    units: 'J/m2'
  },
  'Total Bound Neutron Scattering Cross Section': {
    type: 'numericProperty',
    value: 'Total Bound Neutron Scattering Cross Section',
    min: 0.017,
    max: 1044,
    units: 'barn'
  },
  'Color Code Wavelength': {
    type: 'numericProperty',
    value: 'Color Code Wavelength',
    min: 37,
    max: 470,
    units: 'nm'
  },
  'ABBE number (nud)': {
    type: 'categoricalProperty',
    value: 'ABBE number (nud)',
    options: []
  },
  'ABBE number (nue)': {
    type: 'categoricalProperty',
    value: 'ABBE number (nue)',
    options: []
  },
  'Bound Coherent Neutron Scattering Length': {
    type: 'numericProperty',
    value: 'Bound Coherent Neutron Scattering Length',
    min: -8.7,
    max: 30.3,
    units: 'fm'
  },
  'Dispersion (nF-nC)': {
    type: 'categoricalProperty',
    value: 'Dispersion (nF-nC)',
    options: []
  },
  'Etch time': {
    type: 'numericProperty',
    value: 'Etch time',
    units: 'hr'
  },
  'log\u03C3 (ionic)': {
    type: 'numericProperty',
    value: 'log\u03C3 (ionic)',
    min: -7.469817015657424,
    max: -0.5185185185185179,
    units: 'S/cm'
  },
  'Lattice parameter': {
    type: 'numericProperty',
    value: 'Lattice parameter',
    min: 3.578748615364566,
    max: 15.467230147309087,
    units: 'A'
  },
  'ln\u03C3T (ionic)': {
    type: 'numericProperty',
    value: 'ln\u03C3T (ionic)',
    min: 1.9870129870129958,
    max: 96.87372906422154,
    units: 'Sm-1K'
  },
  Coordination: {
    type: 'categoricalProperty',
    value: 'Coordination',
    options: []
  },
  Z: {
    type: 'categoricalProperty',
    value: 'Z',
    options: []
  },
  Reagent: {
    type: 'categoricalProperty',
    value: 'Reagent',
    options: []
  },
  'Electrical Conductivity': {
    type: 'numericProperty',
    value: 'Electrical Conductivity',
    min: 0.09,
    max: 170,
    units: '% IACS'
  },
  Twinning: {
    type: 'categoricalProperty',
    value: 'Twinning',
    options: []
  },
  'Electron affinity': {
    type: 'numericProperty',
    value: 'Electron affinity',
    min: 0.56,
    max: 4.9,
    units: 'eV'
  },
  'Heat deflection temperature': {
    type: 'numericProperty',
    value: 'Heat deflection temperature',
    min: 0,
    max: 800,
    units: '\xB0F'
  },
  '[Original] Conductivity': {
    type: 'numericProperty',
    value: '[Original] Conductivity',
    min: 0.000011495173,
    max: 40.406492071971485,
    units: 'S/cm'
  },
  'Ignition temperature': {
    type: 'numericProperty',
    value: 'Ignition temperature',
    min: 30,
    max: 770,
    units: '\xB0C'
  },
  'Reaction enthalpy of CHO* to CO* + 1/2 H2': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of CHO* to CO* + 1/2 H2',
    min: -1.87475,
    max: 3.45525,
    units: 'eV'
  },
  'Reaction enthalpy of H2O to OH* + 1/2 H2': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of H2O to OH* + 1/2 H2',
    min: -26.20385,
    max: 1.30615,
    units: 'eV'
  },
  'Compressive strength to laminate (modulus)': {
    type: 'numericProperty',
    value: 'Compressive strength to laminate (modulus)',
    min: 0,
    max: 750000,
    units: 'psi'
  },
  'Maximum static bearing load': {
    type: 'categoricalProperty',
    value: 'Maximum static bearing load',
    options: []
  },
  'Izod impact': {
    type: 'numericProperty',
    value: 'Izod impact',
    min: 1,
    max: 115,
    units: 'ft.lbs/in'
  },
  'DFT band gap': {
    type: 'numericProperty',
    value: 'DFT band gap',
    min: 0,
    max: 2.3355,
    units: 'eV'
  },
  'Decomposes to phases': {
    type: 'categoricalProperty',
    value: 'Decomposes to phases',
    options: []
  },
  'Electron effective mass': {
    type: 'categoricalProperty',
    value: 'Electron effective mass',
    options: []
  },
  'Energy above hull': {
    type: 'numericProperty',
    value: 'Energy above hull',
    min: 0.001138908,
    max: 1.160408014,
    units: 'eV/atom'
  },
  'Hole effective mass': {
    type: 'categoricalProperty',
    value: 'Hole effective mass',
    options: []
  },
  'Lattice parameter, a': {
    type: 'numericProperty',
    value: 'Lattice parameter, a',
    min: 4.90508316,
    max: 11.47740505,
    units: 'A'
  },
  'Lattice parameter, b': {
    type: 'numericProperty',
    value: 'Lattice parameter, b',
    min: 6.52648399,
    max: 13.30202204,
    units: 'A'
  },
  'Lattice parameter, c': {
    type: 'numericProperty',
    value: 'Lattice parameter, c',
    min: 5.98566147,
    max: 13.7701673,
    units: 'A'
  },
  'Metal? (based on DFT band gap)': {
    type: 'categoricalProperty',
    value: 'Metal? (based on DFT band gap)',
    options: []
  },
  'Space group symbol': {
    type: 'categoricalProperty',
    value: 'Space group symbol',
    options: []
  },
  'n-type Power factor (AMSET)': {
    type: 'numericProperty',
    value: 'n-type Power factor (AMSET)',
    min: 0,
    max: 117.59,
    units: '\u03BCW cm-1K-2'
  },
  'n-type Power factor (BoltzTrap)': {
    type: 'numericProperty',
    value: 'n-type Power factor (BoltzTrap)',
    min: 0,
    max: 29.27,
    units: '\u03BCW cm-1K-2'
  },
  'n-type Seebeck coefficient (AMSET)': {
    type: 'numericProperty',
    value: 'n-type Seebeck coefficient (AMSET)',
    min: -343.46,
    max: 0,
    units: '\u03BCV/K'
  },
  'n-type Seebeck coefficient (BoltzTrap)': {
    type: 'numericProperty',
    value: 'n-type Seebeck coefficient (BoltzTrap)',
    min: -520.93,
    max: 54.04,
    units: '\u03BCV/K'
  },
  'n-type electrical conductivity (AMSET)': {
    type: 'numericProperty',
    value: 'n-type electrical conductivity (AMSET)',
    min: 0,
    max: 7578.95,
    units: 'Scm-1'
  },
  'n-type electrical conductivity (BoltzTrap)': {
    type: 'numericProperty',
    value: 'n-type electrical conductivity (BoltzTrap)',
    min: 3.05,
    max: 7489.52,
    units: 'S/cm'
  },
  'n-type mobility (AMSET)': {
    type: 'numericProperty',
    value: 'n-type mobility (AMSET)',
    min: 0,
    max: 468.48,
    units: 'cm2V-1s-1'
  },
  'p-type Power factor (AMSET)': {
    type: 'numericProperty',
    value: 'p-type Power factor (AMSET)',
    min: 0,
    max: 100.29,
    units: '\u03BCW cm-1K-2'
  },
  'p-type Power factor (BoltzTrap)': {
    type: 'numericProperty',
    value: 'p-type Power factor (BoltzTrap)',
    min: 0,
    max: 28.71,
    units: '\u03BCW cm-1K-2'
  },
  'p-type Seebeck coefficient (AMSET)': {
    type: 'numericProperty',
    value: 'p-type Seebeck coefficient (AMSET)',
    min: -216.08,
    max: 295.37,
    units: '\u03BCV/K'
  },
  'p-type Seebeck coefficient (BoltzTrap)': {
    type: 'numericProperty',
    value: 'p-type Seebeck coefficient (BoltzTrap)',
    min: -164.12,
    max: 596.15,
    units: '\u03BCV/K'
  },
  'p-type electrical conductivity (AMSET)': {
    type: 'numericProperty',
    value: 'p-type electrical conductivity (AMSET)',
    min: 0,
    max: 4341.48,
    units: 'Scm-1'
  },
  'p-type electrical conductivity (BoltzTrap)': {
    type: 'numericProperty',
    value: 'p-type electrical conductivity (BoltzTrap)',
    min: 2.04,
    max: 7487.06,
    units: 'S/cm'
  },
  'p-type mobility (AMSET)': {
    type: 'numericProperty',
    value: 'p-type mobility (AMSET)',
    min: 0,
    max: 268.92,
    units: 'cm2V-1s-1'
  },
  'Brinell Hardness': {
    type: 'categoricalProperty',
    value: 'Brinell Hardness',
    options: []
  },
  σT: {
    type: 'numericProperty',
    value: '\u03C3T',
    min: 0.000002848617,
    max: 496.0668027889001,
    units: 'S\xB7K/cm'
  },
  'Flammibility @ 3.1mm UL 94': {
    type: 'categoricalProperty',
    value: 'Flammibility @ 3.1mm UL 94',
    options: []
  },
  'Dielectric strength': {
    type: 'numericProperty',
    value: 'Dielectric strength',
    min: 0,
    max: 490540860,
    units: 'V/ml'
  },
  'Density of States': {
    type: 'numericProperty',
    value: 'Density of States',
    min: -0.093,
    max: 2.659,
    units: 'number of states per unit cell'
  },
  'Coefficient of linear thermal expansion': {
    type: 'numericProperty',
    value: 'Coefficient of linear thermal expansion',
    min: 0,
    max: 35,
    units: 'in/in/\xB0F E-5'
  },
  Isotope: {
    type: 'categoricalProperty',
    value: 'Isotope',
    options: []
  },
  'log \u03C3 (ionic)': {
    type: 'numericProperty',
    value: 'log \u03C3 (ionic)',
    min: -6.663661045657208,
    max: -0.3253765698179357,
    units: 'S/cm'
  },
  'Isotopic Composition': {
    type: 'categoricalProperty',
    value: 'Isotopic Composition',
    options: []
  },
  'Vapor pressure': {
    type: 'numericProperty',
    value: 'Vapor pressure',
    min: 0.02,
    max: 3876,
    units: 'mm Hg'
  },
  'Ionization potential': {
    type: 'numericProperty',
    value: 'Ionization potential',
    min: 7.58,
    max: 239,
    units: 'eV'
  },
  'Static dipole polarizability (\u03B1D)': {
    type: 'numericProperty',
    value: 'Static dipole polarizability (\u03B1D)',
    min: 1.383191,
    max: 399.9,
    units: 'atomic units'
  },
  '\u03C3T (electronic)': {
    type: 'numericProperty',
    value: '\u03C3T (electronic)',
    min: -22.13267326732668,
    max: 167.51577061403236,
    units: 'S\xB7K/cm'
  },
  'Adsorbate-metal interatomic d coupling matrix element squared': {
    type: 'categoricalProperty',
    value: 'Adsorbate-metal interatomic d coupling matrix element squared',
    options: []
  },
  'Binding energy of adsorbed CO on a metal surface': {
    type: 'numericProperty',
    value: 'Binding energy of adsorbed CO on a metal surface',
    min: -1.87,
    max: -0.02,
    units: 'eV'
  },
  'Bulk formula': {
    type: 'categoricalProperty',
    value: 'Bulk formula',
    options: []
  },
  'Center of a d-band': {
    type: 'numericProperty',
    value: 'Center of a d-band',
    min: -4.49,
    max: -0.75,
    units: 'eV'
  },
  'Filling of a d-band': {
    type: 'categoricalProperty',
    value: 'Filling of a d-band',
    options: []
  },
  'Kurtosis of a d-band': {
    type: 'categoricalProperty',
    value: 'Kurtosis of a d-band',
    options: []
  },
  'Local Pauling electronegativity': {
    type: 'categoricalProperty',
    value: 'Local Pauling electronegativity',
    options: []
  },
  'Skewness of a d-band': {
    type: 'categoricalProperty',
    value: 'Skewness of a d-band',
    options: []
  },
  'Spatial extent of d-orbitals': {
    type: 'numericProperty',
    value: 'Spatial extent of d-orbitals',
    min: 0.67,
    max: 1.04,
    units: 'A'
  },
  'Top monolayer formula': {
    type: 'categoricalProperty',
    value: 'Top monolayer formula',
    options: []
  },
  Viscosity: {
    type: 'numericProperty',
    value: 'Viscosity',
    min: 0.224,
    max: 1400,
    units: 'cP'
  },
  'Width of a d-band': {
    type: 'numericProperty',
    value: 'Width of a d-band',
    min: 0.86,
    max: 2.16,
    units: 'eV'
  },
  'Gibbs free energy G': {
    type: 'numericProperty',
    value: 'Gibbs free energy G',
    min: -62838.610108,
    max: -25729.483283,
    units: 'J/mol'
  },
  'Isotope Abundance': {
    type: 'numericProperty',
    value: 'Isotope Abundance',
    min: 0.00014,
    max: 100,
    units: '%'
  },
  'Thermal diffusivity (\u03B1)': {
    type: 'numericProperty',
    value: 'Thermal diffusivity (\u03B1)',
    min: 3.423e-8,
    max: 232000000,
    units: 'm2/s'
  },
  'Density of states (O)': {
    type: 'categoricalProperty',
    value: 'Density of states (O)',
    options: []
  },
  'Penetration Depth': {
    type: 'numericProperty',
    value: 'Penetration Depth',
    min: 2,
    max: 72000,
    units: '\u03C3'
  },
  'Substrate diameter': {
    type: 'numericProperty',
    value: 'Substrate diameter',
    min: 3,
    max: 3,
    units: 'inches'
  },
  'Substrate material': {
    type: 'categoricalProperty',
    value: 'Substrate material',
    options: []
  },
  'Substrate orientation': {
    type: 'categoricalProperty',
    value: 'Substrate orientation',
    options: []
  },
  'Heat Capacity': {
    type: 'numericProperty',
    value: 'Heat Capacity',
    min: 36.71,
    max: 1342.8,
    units: 'J/mol\xB7K'
  },
  'Bound Incoherent Neutron Scattering Length': {
    type: 'numericProperty',
    value: 'Bound Incoherent Neutron Scattering Length',
    min: -6.2,
    max: 25.274,
    units: 'fm'
  },
  'Lattice constant': {
    type: 'numericProperty',
    value: 'Lattice constant',
    min: 0.5358031948782497,
    max: 0.5538114307025314,
    units: 'nm'
  },
  SFE: {
    type: 'numericProperty',
    value: 'SFE',
    min: 3.26,
    max: 94,
    units: 'mJ.m-2'
  },
  'ln(\u03C3T) (ionic)': {
    type: 'numericProperty',
    value: 'ln(\u03C3T) (ionic)',
    min: -15.6029759745593,
    max: 5.296845662433441,
    units: 'S\xB7K/cm'
  },
  Composition: {
    type: 'categoricalProperty',
    value: 'Composition',
    options: []
  },
  'Melting temperature': {
    type: 'numericProperty',
    value: 'Melting temperature',
    min: 1,
    max: 4762,
    units: 'K'
  },
  'Shear modulus': {
    type: 'numericProperty',
    value: 'Shear modulus',
    min: 230,
    max: 489,
    units: '108 N/m2'
  },
  'Flammable limits': {
    type: 'numericProperty',
    value: 'Flammable limits',
    min: -84,
    max: 1.7,
    units: '%'
  },
  'Quick Facts': {
    type: 'categoricalProperty',
    value: 'Quick Facts',
    options: []
  },
  'Specific heat (cp)': {
    type: 'numericProperty',
    value: 'Specific heat (cp)',
    min: 748.6,
    max: 8785,
    units: 'J/kg.K'
  },
  'Log\u03B5\'': {
    type: 'categoricalProperty',
    value: 'Log\u03B5\'',
    options: []
  },
  Mobility: {
    type: 'numericProperty',
    value: 'Mobility',
    min: 0.31,
    max: 4853,
    units: 'cm2V-1s-1'
  },
  'k (Cp/Cv)': {
    type: 'numericProperty',
    value: 'k (Cp/Cv)',
    min: 7.04,
    max: 990,
    units: 'W/m.K'
  },
  'Dana classification': {
    type: 'categoricalProperty',
    value: 'Dana classification',
    options: []
  },
  'Lattice thermal conductivity (\u03BAAGL)': {
    type: 'numericProperty',
    value: 'Lattice thermal conductivity (\u03BAAGL)',
    min: 0.51,
    max: 169.1,
    units: 'W/(m.K)'
  },
  'Unit cell (\u03B2)': {
    type: 'numericProperty',
    value: 'Unit cell (\u03B2)',
    min: 1.472,
    max: 143.81,
    units: '\xB0'
  },
  'Viscosity (\u03B7/cp)': {
    type: 'categoricalProperty',
    value: 'Viscosity (\u03B7/cp)',
    options: []
  },
  '\u03C3 (electronic)': {
    type: 'numericProperty',
    value: '\u03C3 (electronic)',
    min: 1.1253e-8,
    max: 2.562871223312843,
    units: 'S/cm'
  },
  'Comp. density': {
    type: 'numericProperty',
    value: 'Comp. density',
    min: 1.48,
    max: 97.47,
    units: 'g/cm3'
  },
  'Fiber class': {
    type: 'categoricalProperty',
    value: 'Fiber class',
    options: []
  },
  'Fiber volume': {
    type: 'numericProperty',
    value: 'Fiber volume',
    min: 45.7,
    max: 70,
    units: 'vol %'
  },
  'Ionic activation energy': {
    type: 'numericProperty',
    value: 'Ionic activation energy',
    min: 0.27162905675061283,
    max: 2.131820310171016,
    units: 'eV'
  },
  'Matrix class': {
    type: 'categoricalProperty',
    value: 'Matrix class',
    options: []
  },
  'Ply thickness': {
    type: 'numericProperty',
    value: 'Ply thickness',
    min: 0.0012,
    max: 0.07650000000000001,
    units: 'in.'
  },
  'Resin content': {
    type: 'numericProperty',
    value: 'Resin content',
    min: 23.200000000000003,
    max: 45,
    units: 'wt %'
  },
  'Void content': {
    type: 'numericProperty',
    value: 'Void content',
    min: 0,
    max: 32,
    units: '%'
  },
  'ln(\u03C30)': {
    type: 'categoricalProperty',
    value: 'ln(\u03C30)',
    options: []
  },
  'Indirect band gap': {
    type: 'numericProperty',
    value: 'Indirect band gap',
    min: 0.194,
    max: 4.792,
    units: 'eV'
  },
  Layup: {
    type: 'categoricalProperty',
    value: 'Layup',
    options: []
  },
  Size: {
    type: 'numericProperty',
    value: 'Size',
    min: -150,
    max: 11,
    units: '\u03BCm'
  },
  'Debye temperature (\u03B8aAGL)': {
    type: 'numericProperty',
    value: 'Debye temperature (\u03B8aAGL)',
    min: 85,
    max: 1219,
    units: 'K'
  },
  'Debye temperature (\u03B8DAGL)': {
    type: 'numericProperty',
    value: 'Debye temperature (\u03B8DAGL)',
    min: 109,
    max: 1536,
    units: 'K'
  },
  Et1: {
    type: 'numericProperty',
    value: 'Et1',
    min: 3.16,
    max: 47.7,
    units: 'Msi'
  },
  'Friction Coefficient': {
    type: 'categoricalProperty',
    value: 'Friction Coefficient',
    options: []
  },
  'Gruneisen parameter (\u03B3AGL)': {
    type: 'categoricalProperty',
    value: 'Gruneisen parameter (\u03B3AGL)',
    options: []
  },
  Notes: {
    type: 'categoricalProperty',
    value: 'Notes',
    options: []
  },
  γAGL: {
    type: 'categoricalProperty',
    value: '\u03B3AGL',
    options: []
  },
  θaAGL: {
    type: 'numericProperty',
    value: '\u03B8aAGL',
    min: 85,
    max: 1219,
    units: 'K'
  },
  θdAGL: {
    type: 'numericProperty',
    value: '\u03B8dAGL',
    min: 109,
    max: 1536,
    units: 'K'
  },
  Ftu1: {
    type: 'numericProperty',
    value: 'Ftu1',
    min: 15.7,
    max: 398,
    units: 'ksi'
  },
  'Debye Temperature': {
    type: 'numericProperty',
    value: 'Debye Temperature',
    min: 192,
    max: 1880,
    units: 'K'
  },
  'Log P': {
    type: 'categoricalProperty',
    value: 'Log P',
    options: []
  },
  'Current Density': {
    type: 'numericProperty',
    value: 'Current Density',
    min: -0.15033701200000002,
    max: 0.372636669,
    units: 'mA/cm2'
  },
  'Potential (vs. VRHE)': {
    type: 'numericProperty',
    value: 'Potential (vs. VRHE)',
    min: 1.2296974999999999,
    max: 1.2335975,
    units: 'V'
  },
  Description: {
    type: 'categoricalProperty',
    value: 'Description',
    options: []
  },
  'Ferrite with carbide aggregate': {
    type: 'numericProperty',
    value: 'Ferrite with carbide aggregate',
    min: 0,
    max: 8,
    units: '%'
  },
  'Conductivity (ionic)': {
    type: 'numericProperty',
    value: 'Conductivity (ionic)',
    min: 0.000004046674,
    max: 1.7099711539152995,
    units: 'S/cm'
  },
  Dipole: {
    type: 'numericProperty',
    value: 'Dipole',
    min: 0,
    max: 10.41,
    units: 'D'
  },
  'Material Designation': {
    type: 'categoricalProperty',
    value: 'Material Designation',
    options: []
  },
  'Temperature derivative of band gap': {
    type: 'numericProperty',
    value: 'Temperature derivative of band gap',
    min: -0.0024,
    max: 0.002,
    units: 'eV/K'
  },
  '-log conductivity': {
    type: 'numericProperty',
    value: '-log conductivity',
    min: 0.9313454228772567,
    max: 5.2455259651662764,
    units: 'S/cm'
  },
  'Volume resistivity': {
    type: 'numericProperty',
    value: 'Volume resistivity',
    min: 1e-15,
    max: 8000000000000000000,
    units: 'ohm-cm'
  },
  '[Original] Conductivity (\u03C3)': {
    type: 'numericProperty',
    value: '[Original] Conductivity (\u03C3)',
    min: 0.000017222828,
    max: 1.0950567327768557,
    units: 'S/cm'
  },
  Other: {
    type: 'categoricalProperty',
    value: 'Other',
    options: []
  },
  'Atomic number': {
    type: 'categoricalProperty',
    value: 'Atomic number',
    options: []
  },
  'Weathering Resistance': {
    type: 'categoricalProperty',
    value: 'Weathering Resistance',
    options: []
  },
  Fcu1: {
    type: 'numericProperty',
    value: 'Fcu1',
    min: 11,
    max: 988,
    units: 'ksi'
  },
  'Glass transition temperature': {
    type: 'numericProperty',
    value: 'Glass transition temperature',
    min: 347,
    max: 738,
    units: '0C'
  },
  'Bulk conductivity': {
    type: 'numericProperty',
    value: 'Bulk conductivity',
    min: 0.006,
    max: 0.166,
    units: 'S/cm'
  },
  'Kinematic viscosity (\u03BD)': {
    type: 'numericProperty',
    value: 'Kinematic viscosity (\u03BD)',
    min: 7.252e-8,
    max: 0.008219,
    units: 'm2/s'
  },
  Morphology: {
    type: 'categoricalProperty',
    value: 'Morphology',
    options: []
  },
  'Rockwell hardness': {
    type: 'categoricalProperty',
    value: 'Rockwell hardness',
    options: []
  },
  'Deformation under load': {
    type: 'categoricalProperty',
    value: 'Deformation under load',
    options: []
  },
  'Refractive index': {
    type: 'categoricalProperty',
    value: 'Refractive index',
    options: []
  },
  'Compressive strength to laminate (yield)': {
    type: 'numericProperty',
    value: 'Compressive strength to laminate (yield)',
    min: 0,
    max: 7100000,
    units: 'psi'
  },
  Ec1: {
    type: 'numericProperty',
    value: 'Ec1',
    min: 3.06,
    max: 45.6,
    units: 'Msi'
  },
  'Glass transition point (Tg)': {
    type: 'numericProperty',
    value: 'Glass transition point (Tg)',
    min: 162.15,
    max: 294.65,
    units: 'K'
  },
  'Isochoric specific heat (Cp)': {
    type: 'numericProperty',
    value: 'Isochoric specific heat (Cp)',
    min: 6.4,
    max: 102.7,
    units: 'Jmol-1K-1'
  },
  'Lattice thermal conductivity (\u03BALBTE)': {
    type: 'numericProperty',
    value: 'Lattice thermal conductivity (\u03BALBTE)',
    min: 1.02,
    max: 5610,
    units: 'W/m.K'
  },
  'Lattice thermal conductivity (\u03BARTA)': {
    type: 'numericProperty',
    value: 'Lattice thermal conductivity (\u03BARTA)',
    min: 0.995,
    max: 1590,
    units: 'W/m.K'
  },
  '1-(\u03C3/\u03C30)': {
    type: 'categoricalProperty',
    value: '1-(\u03C3/\u03C30)',
    options: []
  },
  κAGL: {
    type: 'numericProperty',
    value: '\u03BAAGL',
    min: 0.52,
    max: 169.1,
    units: 'W/(m\xB7K)'
  },
  'Acicular ferrite content': {
    type: 'numericProperty',
    value: 'Acicular ferrite content',
    min: 11,
    max: 81,
    units: '%'
  },
  'Allotriomorphic ferrite content': {
    type: 'numericProperty',
    value: 'Allotriomorphic ferrite content',
    min: 16,
    max: 62,
    units: '%'
  },
  'Charpy toughness': {
    type: 'numericProperty',
    value: 'Charpy toughness',
    min: 4,
    max: 238,
    units: 'J'
  },
  'Primary microstructure content': {
    type: 'numericProperty',
    value: 'Primary microstructure content',
    min: 0,
    max: 91,
    units: '%'
  },
  'Secondary microstructure content': {
    type: 'numericProperty',
    value: 'Secondary microstructure content',
    min: 9,
    max: 100,
    units: '%'
  },
  'Widmanstatten ferrite content': {
    type: 'numericProperty',
    value: 'Widmanstatten ferrite content',
    min: 0,
    max: 35,
    units: '%'
  },
  'Hardness Bhn': {
    type: 'categoricalProperty',
    value: 'Hardness Bhn',
    options: []
  },
  'Reduction in Area': {
    type: 'numericProperty',
    value: 'Reduction in Area',
    min: 13.5,
    max: 70,
    units: '%'
  },
  'Boiling temperature': {
    type: 'numericProperty',
    value: 'Boiling temperature',
    min: 4.215,
    max: 6173,
    units: 'K'
  },
  x0: {
    type: 'categoricalProperty',
    value: 'x0',
    options: []
  },
  x1: {
    type: 'categoricalProperty',
    value: 'x1',
    options: []
  },
  x2: {
    type: 'categoricalProperty',
    value: 'x2',
    options: []
  },
  y: {
    type: 'categoricalProperty',
    value: 'y',
    options: []
  },
  'Conductivity (electronic)(converted from log)': {
    type: 'numericProperty',
    value: 'Conductivity (electronic)(converted from log)',
    min: 1.965e-9,
    max: 0.8979904699991936,
    units: 'S/cm'
  },
  'Elastic modulus': {
    type: 'numericProperty',
    value: 'Elastic modulus',
    min: 571,
    max: 1271,
    units: '108 N/m2'
  },
  'log conductivity (electronic)': {
    type: 'numericProperty',
    value: 'log conductivity (electronic)',
    min: -8.706743591139169,
    max: -0.04672827229564047,
    units: 'S/cm'
  },
  '-log10\u03C3': {
    type: 'numericProperty',
    value: '-log10\u03C3',
    min: 1.5745165020669118,
    max: 3.2559670781893026,
    units: 'S/cm'
  },
  'Relative density': {
    type: 'numericProperty',
    value: 'Relative density',
    min: 81.24633431085044,
    max: 100,
    units: '%'
  },
  'Surface tension': {
    type: 'numericProperty',
    value: 'Surface tension',
    min: 11.91,
    max: 425.41,
    units: 'mN/m'
  },
  'Band gap energy': {
    type: 'numericProperty',
    value: 'Band gap energy',
    min: 0,
    max: 1.38,
    units: 'eV'
  },
  'Hall carrier concentration': {
    type: 'numericProperty',
    value: 'Hall carrier concentration',
    min: -266000000000000000000,
    max: 2e+21,
    units: 'cm-3'
  },
  '[Original] \u03C3': {
    type: 'numericProperty',
    value: '[Original] \u03C3',
    min: 0.000008053548,
    max: 0.008304418966003351,
    units: 'S/cm'
  },
  'Molecular Shape': {
    type: 'categoricalProperty',
    value: 'Molecular Shape',
    options: []
  },
  'Product of Ionic charges': {
    type: 'categoricalProperty',
    value: 'Product of Ionic charges',
    options: []
  },
  'Electronic conductivity': {
    type: 'numericProperty',
    value: 'Electronic conductivity',
    min: -0.07139648208975458,
    max: 4.3328160855211175,
    units: 'S/cm'
  },
  'Total dielectric tensors (\u03B5total)': {
    type: 'categoricalProperty',
    value: 'Total dielectric tensors (\u03B5total)',
    options: []
  },
  Tion: {
    type: 'categoricalProperty',
    value: 'Tion',
    options: []
  },
  'Log10(\u03C3T)': {
    type: 'numericProperty',
    value: 'Log10(\u03C3T)',
    min: -5.2471897850049105,
    max: 3.0831202046035804,
    units: 'S\xB7K/cm'
  },
  '[Original] ln(\u03C3T)': {
    type: 'numericProperty',
    value: '[Original] ln(\u03C3T)',
    min: -11.91516885171978,
    max: 5.763231197771586,
    units: 'S\xB7K/cm'
  },
  'Electronic polarizability (\u03B1)': {
    type: 'numericProperty',
    value: 'Electronic polarizability (\u03B1)',
    min: 5.04,
    max: 26.68,
    units: 'A3'
  },
  'Yield Point': {
    type: 'numericProperty',
    value: 'Yield Point',
    min: 378,
    max: 765,
    units: '0C'
  },
  Abrasion: {
    type: 'categoricalProperty',
    value: 'Abrasion',
    options: []
  },
  'Acid Resistance Weight Loss': {
    type: 'categoricalProperty',
    value: 'Acid Resistance Weight Loss',
    options: []
  },
  'Constant of Dispersion Formula (A1)': {
    type: 'categoricalProperty',
    value: 'Constant of Dispersion Formula (A1)',
    options: []
  },
  'Constant of Dispersion Formula (A2)': {
    type: 'categoricalProperty',
    value: 'Constant of Dispersion Formula (A2)',
    options: []
  },
  'Constant of Dispersion Formula (A3)': {
    type: 'categoricalProperty',
    value: 'Constant of Dispersion Formula (A3)',
    options: []
  },
  'Constant of Dispersion Formula (B1)': {
    type: 'categoricalProperty',
    value: 'Constant of Dispersion Formula (B1)',
    options: []
  },
  'Constant of Dispersion Formula (B2)': {
    type: 'categoricalProperty',
    value: 'Constant of Dispersion Formula (B2)',
    options: []
  },
  'Constant of Dispersion Formula (B3)': {
    type: 'categoricalProperty',
    value: 'Constant of Dispersion Formula (B3)',
    options: []
  },
  'Deviation of Relative Partial Dispersion (\u0394\u03B8C,A\')': {
    type: 'categoricalProperty',
    value: 'Deviation of Relative Partial Dispersion (\u0394\u03B8C,A\')',
    options: []
  },
  'Deviation of Relative Partial Dispersion (\u0394\u03B8C,t)': {
    type: 'categoricalProperty',
    value: 'Deviation of Relative Partial Dispersion (\u0394\u03B8C,t)',
    options: []
  },
  'Deviation of Relative Partial Dispersion (\u0394\u03B8g,F)': {
    type: 'categoricalProperty',
    value: 'Deviation of Relative Partial Dispersion (\u0394\u03B8g,F)',
    options: []
  },
  'Deviation of Relative Partial Dispersion (\u0394\u03B8g,d)': {
    type: 'categoricalProperty',
    value: 'Deviation of Relative Partial Dispersion (\u0394\u03B8g,d)',
    options: []
  },
  'Dispersion (nC-nA\')': {
    type: 'categoricalProperty',
    value: 'Dispersion (nC-nA\')',
    options: []
  },
  'Dispersion (nC-nt)': {
    type: 'categoricalProperty',
    value: 'Dispersion (nC-nt)',
    options: []
  },
  'Dispersion (nF\'-nC\')': {
    type: 'categoricalProperty',
    value: 'Dispersion (nF\'-nC\')',
    options: []
  },
  'Dispersion (nd-nC)': {
    type: 'categoricalProperty',
    value: 'Dispersion (nd-nC)',
    options: []
  },
  'Dispersion (ne-nC)': {
    type: 'categoricalProperty',
    value: 'Dispersion (ne-nC)',
    options: []
  },
  'Dispersion (ng-nF)': {
    type: 'categoricalProperty',
    value: 'Dispersion (ng-nF)',
    options: []
  },
  'Dispersion (ng-nd)': {
    type: 'categoricalProperty',
    value: 'Dispersion (ng-nd)',
    options: []
  },
  'Partial Dispersion (nC\'-nt)': {
    type: 'categoricalProperty',
    value: 'Partial Dispersion (nC\'-nt)',
    options: []
  },
  'Partial Dispersion (nF\'-ne)': {
    type: 'categoricalProperty',
    value: 'Partial Dispersion (nF\'-ne)',
    options: []
  },
  'Partial Dispersion (ne-nC\')': {
    type: 'categoricalProperty',
    value: 'Partial Dispersion (ne-nC\')',
    options: []
  },
  'Poisson Ratio': {
    type: 'categoricalProperty',
    value: 'Poisson Ratio',
    options: []
  },
  'Refractive Index (nA)': {
    type: 'categoricalProperty',
    value: 'Refractive Index (nA)',
    options: []
  },
  'Refractive Index (nHe-Cd)': {
    type: 'categoricalProperty',
    value: 'Refractive Index (nHe-Cd)',
    options: []
  },
  'Refractive Index (nHe-Ne)': {
    type: 'categoricalProperty',
    value: 'Refractive Index (nHe-Ne)',
    options: []
  },
  'Relative Partial Dispersion (\u03B8\'C\',t)': {
    type: 'categoricalProperty',
    value: 'Relative Partial Dispersion (\u03B8\'C\',t)',
    options: []
  },
  'Relative Partial Dispersion (\u03B8\'F\',e)': {
    type: 'categoricalProperty',
    value: 'Relative Partial Dispersion (\u03B8\'F\',e)',
    options: []
  },
  'Relative Partial Dispersion (\u03B8\'e,C\')': {
    type: 'categoricalProperty',
    value: 'Relative Partial Dispersion (\u03B8\'e,C\')',
    options: []
  },
  'Relative Partial Dispersion (\u03B8C,A\')': {
    type: 'categoricalProperty',
    value: 'Relative Partial Dispersion (\u03B8C,A\')',
    options: []
  },
  'Relative Partial Dispersion (\u03B8C,t)': {
    type: 'categoricalProperty',
    value: 'Relative Partial Dispersion (\u03B8C,t)',
    options: []
  },
  'Relative Partial Dispersion (\u03B8d,C)': {
    type: 'categoricalProperty',
    value: 'Relative Partial Dispersion (\u03B8d,C)',
    options: []
  },
  'Relative Partial Dispersion (\u03B8e,C)': {
    type: 'categoricalProperty',
    value: 'Relative Partial Dispersion (\u03B8e,C)',
    options: []
  },
  'Relative Partial Dispersion (\u03B8g,d)': {
    type: 'categoricalProperty',
    value: 'Relative Partial Dispersion (\u03B8g,d)',
    options: []
  },
  'Water Resistance Weight Loss': {
    type: 'categoricalProperty',
    value: 'Water Resistance Weight Loss',
    options: []
  },
  'Curie temperature': {
    type: 'numericProperty',
    value: 'Curie temperature',
    min: 17,
    max: 1015,
    units: 'K'
  },
  'Electrical Resistivity Log': {
    type: 'numericProperty',
    value: 'Electrical Resistivity Log',
    min: -3,
    max: 14.26,
    units: 'Log10{\u03A9\xB7cm}'
  },
  'Energy of spin polarization': {
    type: 'numericProperty',
    value: 'Energy of spin polarization',
    min: -0.04,
    max: 0.56,
    units: 'eV/atom'
  },
  'Magnetic deformation': {
    type: 'numericProperty',
    value: 'Magnetic deformation',
    min: 0.01,
    max: 6.14,
    units: '%'
  },
  'Maximum ionic moment': {
    type: 'numericProperty',
    value: 'Maximum ionic moment',
    min: 0,
    max: 4.3,
    units: '\u03BCB'
  },
  'Molecular weight': {
    type: 'numericProperty',
    value: 'Molecular weight',
    min: 74.55,
    max: 4438.69,
    units: 'g'
  },
  'Percentage volume difference': {
    type: 'numericProperty',
    value: 'Percentage volume difference',
    min: -0.46,
    max: 22.67,
    units: '%'
  },
  'Saturation magnetization': {
    type: 'numericProperty',
    value: 'Saturation magnetization',
    min: 0,
    max: 232,
    units: 'emu/g'
  },
  'ratio vs S-BSL7': {
    type: 'categoricalProperty',
    value: 'ratio vs S-BSL7',
    options: []
  },
  'Log\u03C3 (electronic)': {
    type: 'numericProperty',
    value: 'Log\u03C3 (electronic)',
    min: -5.5626210730228305,
    max: -1.0449444116903908,
    units: 'S\xB7K/cm'
  },
  'Partial Dispersion (nh-ng)': {
    type: 'categoricalProperty',
    value: 'Partial Dispersion (nh-ng)',
    options: []
  },
  'Atomic mass': {
    type: 'categoricalProperty',
    value: 'Atomic mass',
    options: []
  },
  'Fracture toughness, KIC': {
    type: 'numericProperty',
    value: 'Fracture toughness, KIC',
    min: 28.2,
    max: 416.6,
    units: 'MPa m0.5'
  },
  'Gruneisen parameter (\u03B3)': {
    type: 'numericProperty',
    value: 'Gruneisen parameter (\u03B3)',
    min: 0.23,
    max: 3.28,
    units: '10-6K-1'
  },
  'Critical Magnetic Field Strength Hc1': {
    type: 'numericProperty',
    value: 'Critical Magnetic Field Strength Hc1',
    min: 0,
    max: 227,
    units: 'kA/m'
  },
  'Log Wear Rate': {
    type: 'numericProperty',
    value: 'Log Wear Rate',
    min: -10.7,
    max: 24.13,
    units: 'mm3 m-1 N-1'
  },
  'Average grain size': {
    type: 'numericProperty',
    value: 'Average grain size',
    min: 1.5,
    max: 30,
    units: '\u03BCm'
  },
  'Volume expansion coefficient (\u03B2)': {
    type: 'numericProperty',
    value: 'Volume expansion coefficient (\u03B2)',
    min: -0.000068,
    max: 0.10047,
    units: '1/K'
  },
  'Gruneisen Parameter': {
    type: 'categoricalProperty',
    value: 'Gruneisen Parameter',
    options: []
  },
  'PREN (Pitting Resistance)': {
    type: 'categoricalProperty',
    value: 'PREN (Pitting Resistance)',
    options: []
  },
  'Volumetric thermal expansion coefficient (\u03B1)': {
    type: 'categoricalProperty',
    value: 'Volumetric thermal expansion coefficient (\u03B1)',
    options: []
  },
  '10(\u03C3T) (electronic)(converted from log)': {
    type: 'numericProperty',
    value: '10(\u03C3T) (electronic)(converted from log)',
    min: 0.00001058148,
    max: 48.39171714577552,
    units: 'S\xB7K/m'
  },
  'Hardness (Rockwell C)': {
    type: 'categoricalProperty',
    value: 'Hardness (Rockwell C)',
    options: []
  },
  Logε: {
    type: 'categoricalProperty',
    value: 'Log\u03B5',
    options: []
  },
  'log10(\u03C3T) (electronic)': {
    type: 'numericProperty',
    value: 'log10(\u03C3T) (electronic)',
    min: -4.975453575240127,
    max: 1.6847710330138446,
    units: 'S\xB7K/m'
  },
  'Conductivity (\u03C3c)': {
    type: 'numericProperty',
    value: 'Conductivity (\u03C3c)',
    min: 0.002,
    max: 12,
    units: 'S/m'
  },
  'Coefficient of friction (dynamic)': {
    type: 'categoricalProperty',
    value: 'Coefficient of friction (dynamic)',
    options: []
  },
  'Compressive Strength': {
    type: 'numericProperty',
    value: 'Compressive Strength',
    min: 0.21,
    max: 784,
    units: 'GPa'
  },
  'Relative Partial Dispersion (\u03B8g,F)': {
    type: 'categoricalProperty',
    value: 'Relative Partial Dispersion (\u03B8g,F)',
    options: []
  },
  'Ultimate compressive strength': {
    type: 'numericProperty',
    value: 'Ultimate compressive strength',
    min: 9,
    max: 2030528,
    units: 'psi'
  },
  'Refractive index (n\u03B5)': {
    type: 'categoricalProperty',
    value: 'Refractive index (n\u03B5)',
    options: []
  },
  'Refractive index (n\u03C9)': {
    type: 'categoricalProperty',
    value: 'Refractive index (n\u03C9)',
    options: []
  },
  'Relative Partial Dispersion (\u03B8h,g)': {
    type: 'categoricalProperty',
    value: 'Relative Partial Dispersion (\u03B8h,g)',
    options: []
  },
  'Softening Point': {
    type: 'numericProperty',
    value: 'Softening Point',
    min: 408,
    max: 822,
    units: '0C'
  },
  'Thermal expansion coefficient (TEC)': {
    type: 'numericProperty',
    value: 'Thermal expansion coefficient (TEC)',
    units: 'K-1'
  },
  'Photoelastic constant': {
    type: 'numericProperty',
    value: 'Photoelastic constant',
    min: 0.51,
    max: 3.47,
    units: 'nm/cm/105Pa)'
  },
  Solvent: {
    type: 'categoricalProperty',
    value: 'Solvent',
    options: []
  },
  'maximum limiting PV (unlubricated)': {
    type: 'numericProperty',
    value: 'maximum limiting PV (unlubricated)',
    min: 0,
    max: 300000,
    units: 'psi-ft/min'
  },
  '(\u03C3.T) (electronic)(converted from log)': {
    type: 'numericProperty',
    value: '(\u03C3.T) (electronic)(converted from log)',
    min: 0.002523527885190215,
    max: 105.7848853961558,
    units: 'S\xB7K/cm'
  },
  'Dissapation factor': {
    type: 'numericProperty',
    value: 'Dissapation factor',
    min: 0.00001,
    max: 615103,
    units: '106 Hz'
  },
  'log(\u03C3.T) (electronic)': {
    type: 'numericProperty',
    value: 'log(\u03C3.T) (electronic)',
    min: -2.5979918919141167,
    max: 2.024423619892259,
    units: 'S\xB7K/cm'
  },
  'Ionic transference number': {
    type: 'numericProperty',
    value: 'Ionic transference number',
    min: 0.021236568049692206,
    max: 0.9976470588235294,
    units: 'tion'
  },
  'Constant of dn/dT (D0)': {
    type: 'categoricalProperty',
    value: 'Constant of dn/dT (D0)',
    options: []
  },
  'Constant of dn/dT (D1)': {
    type: 'categoricalProperty',
    value: 'Constant of dn/dT (D1)',
    options: []
  },
  'Constant of dn/dT (D2)': {
    type: 'categoricalProperty',
    value: 'Constant of dn/dT (D2)',
    options: []
  },
  'Constant of dn/dT (E0)': {
    type: 'categoricalProperty',
    value: 'Constant of dn/dT (E0)',
    options: []
  },
  'Constant of dn/dT (E1)': {
    type: 'categoricalProperty',
    value: 'Constant of dn/dT (E1)',
    options: []
  },
  'Constant of dn/dT (\u03BBTK)': {
    type: 'categoricalProperty',
    value: 'Constant of dn/dT (\u03BBTK)',
    options: []
  },
  Cracked: {
    type: 'categoricalProperty',
    value: 'Cracked',
    options: []
  },
  '[Original] ln\u03C3T (ionic)': {
    type: 'numericProperty',
    value: '[Original] ln\u03C3T (ionic)',
    min: -8.705927431679852,
    max: 5.3158500291795345,
    units: 'S\xB7K/cm'
  },
  'Annealing Point': {
    type: 'numericProperty',
    value: 'Annealing Point',
    min: 331,
    max: 714,
    units: '0C'
  },
  'Strain Point': {
    type: 'numericProperty',
    value: 'Strain Point',
    min: 308,
    max: 666,
    units: '0C'
  },
  'Synthesis method': {
    type: 'categoricalProperty',
    value: 'Synthesis method',
    options: []
  },
  'Density of states (f)': {
    type: 'categoricalProperty',
    value: 'Density of states (f)',
    options: []
  },
  'Hall Flow': {
    type: 'numericProperty',
    value: 'Hall Flow',
    min: 5,
    max: 53,
    units: 'sec'
  },
  'Grain ionic conductivity': {
    type: 'numericProperty',
    value: 'Grain ionic conductivity',
    min: 0.000006863193,
    max: 0.05424441684825794,
    units: 'S/cm'
  },
  'Creep Rate Exponent': {
    type: 'categoricalProperty',
    value: 'Creep Rate Exponent',
    options: []
  },
  'Surface resistivity': {
    type: 'numericProperty',
    value: 'Surface resistivity',
    min: 0,
    max: 1000000000000000000,
    units: 'ohm/square'
  },
  'Deviation of Relative Partial Dispersion (\u0394\u03B8i,g)': {
    type: 'categoricalProperty',
    value: 'Deviation of Relative Partial Dispersion (\u0394\u03B8i,g)',
    options: []
  },
  'Partial Dispersion (ni-nF\')': {
    type: 'categoricalProperty',
    value: 'Partial Dispersion (ni-nF\')',
    options: []
  },
  'Partial Dispersion (ni-ng)': {
    type: 'categoricalProperty',
    value: 'Partial Dispersion (ni-ng)',
    options: []
  },
  'Relative Partial Dispersion (\u03B8\'i,F\')': {
    type: 'categoricalProperty',
    value: 'Relative Partial Dispersion (\u03B8\'i,F\')',
    options: []
  },
  '\u03C3 (ionic)': {
    type: 'numericProperty',
    value: '\u03C3 (ionic)',
    min: -0.000033328325,
    max: 0.9920091533476232,
    units: 'S/cm'
  },
  'Melt frequency': {
    type: 'categoricalProperty',
    value: 'Melt frequency',
    options: []
  },
  Status: {
    type: 'categoricalProperty',
    value: 'Status',
    options: []
  },
  '#O': {
    type: 'categoricalProperty',
    value: '#O',
    options: []
  },
  'Young\'s modulus': {
    type: 'numericProperty',
    value: 'Young\'s modulus',
    min: 9.9,
    max: 915.1,
    units: 'GPa'
  },
  'Impact Strength': {
    type: 'numericProperty',
    value: 'Impact Strength',
    min: 1.1,
    max: 1486,
    units: 'J/m'
  },
  'Enthalpy of vaporization (hfg)': {
    type: 'numericProperty',
    value: 'Enthalpy of vaporization (hfg)',
    min: 0,
    max: 2501,
    units: 'kJ/kg'
  },
  'Saturation pressure (Psat)': {
    type: 'numericProperty',
    value: 'Saturation pressure (Psat)',
    min: 0.4053,
    max: 6257,
    units: 'kPa'
  },
  'Coefficient of friction (static)': {
    type: 'categoricalProperty',
    value: 'Coefficient of friction (static)',
    options: []
  },
  'Lattice thermal conductivity (\u03BAexp)': {
    type: 'numericProperty',
    value: 'Lattice thermal conductivity (\u03BAexp)',
    min: 0.4,
    max: 3000,
    units: 'W/(m.K)'
  },
  Synthesis: {
    type: 'categoricalProperty',
    value: 'Synthesis',
    options: []
  },
  Photoluminescence: {
    type: 'categoricalProperty',
    value: 'Photoluminescence',
    options: []
  },
  'Compressive strength': {
    type: 'numericProperty',
    value: 'Compressive strength',
    min: 1000,
    max: 70000,
    units: 'psi'
  },
  Impurity: {
    type: 'categoricalProperty',
    value: 'Impurity',
    options: []
  },
  T: {
    type: 'numericProperty',
    value: 'T',
    min: -3.889865821551025,
    max: 550.268586579464,
    units: '\xB0C'
  },
  logσ: {
    type: 'numericProperty',
    value: 'log\u03C3',
    min: -3.9909145070002987,
    max: -1.7046470062555854,
    units: 'S/cm'
  },
  σdcT: {
    type: 'numericProperty',
    value: '\u03C3dcT',
    min: 0.000035938137,
    max: 17.1310678356665,
    units: 'S\xB7K/cm-1'
  },
  'Austenite peak temperature, Ap': {
    type: 'numericProperty',
    value: 'Austenite peak temperature, Ap',
    min: 219.65,
    max: 615.2,
    units: 'K'
  },
  'Maximum static bearing load (P)': {
    type: 'numericProperty',
    value: 'Maximum static bearing load (P)',
    min: 50,
    max: 54400,
    units: 'psi'
  },
  'Maximum unlubricated no load bearing velocity': {
    type: 'numericProperty',
    value: 'Maximum unlubricated no load bearing velocity',
    min: 0,
    max: 2000,
    units: 'ft/min'
  },
  'Pressure derivative': {
    type: 'categoricalProperty',
    value: 'Pressure derivative',
    options: []
  },
  '\u03C3i (ionic)': {
    type: 'numericProperty',
    value: '\u03C3i (ionic)',
    min: 0.010830604209379974,
    max: 200.30829561898167,
    units: 'S\xB7K/cm'
  },
  'Delta Hc': {
    type: 'numericProperty',
    value: 'Delta Hc',
    min: -3.6936,
    max: -1.4604,
    units: 'MJ mol-1'
  },
  'Decomposition point (Td)': {
    type: 'numericProperty',
    value: 'Decomposition point (Td)',
    min: 423.15,
    max: 773.15,
    units: 'K'
  },
  Porosity: {
    type: 'numericProperty',
    value: 'Porosity',
    min: 0,
    max: 59,
    units: '%'
  },
  'ln(\u03C3T)': {
    type: 'numericProperty',
    value: 'ln(\u03C3T)',
    min: -11.118510386977682,
    max: 5.780491381051313,
    units: 'S\xB7K/cm'
  },
  'Conductivity (ionic)(converted from log)': {
    type: 'numericProperty',
    value: 'Conductivity (ionic)(converted from log)',
    min: 1.4e-9,
    max: 0.34913285013572815,
    units: 'S/cm'
  },
  'Relative Partial Dispersion (\u03B8i,g)': {
    type: 'categoricalProperty',
    value: 'Relative Partial Dispersion (\u03B8i,g)',
    options: []
  },
  'log conductivity (ionic)': {
    type: 'numericProperty',
    value: 'log conductivity (ionic)',
    min: -8.853741408790771,
    max: -0.45700928621453185,
    units: 'S/cm'
  },
  tanδ: {
    type: 'categoricalProperty',
    value: 'tan\u03B4',
    options: []
  },
  '(\u03C3T) (ionic)(converted from log)': {
    type: 'numericProperty',
    value: '(\u03C3T) (ionic)(converted from log)',
    min: 0.000002709987,
    max: 323.3391160180928,
    units: 'S\xB7K/cm'
  },
  '\u03C3i T (ionic)': {
    type: 'numericProperty',
    value: '\u03C3i T (ionic)',
    min: 0.012068221308777511,
    max: 208.09072825749237,
    units: 'S\xB7K/cm'
  },
  'Young\'s Modulus (E)': {
    type: 'numericProperty',
    value: 'Young\'s Modulus (E)',
    min: 0.0016,
    max: 550,
    units: 'GPa'
  },
  C: {
    type: 'chemicalFormula',
    value: 'C'
  },
  Et2: {
    type: 'numericProperty',
    value: 'Et2',
    min: 0.934,
    max: 11.8,
    units: 'Msi'
  },
  fluorescence: {
    type: 'categoricalProperty',
    value: 'fluorescence',
    options: []
  },
  'Density of states (P)': {
    type: 'categoricalProperty',
    value: 'Density of states (P)',
    options: []
  },
  'Density of states (Si)': {
    type: 'categoricalProperty',
    value: 'Density of states (Si)',
    options: []
  },
  'Density of states (S)': {
    type: 'categoricalProperty',
    value: 'Density of states (S)',
    options: []
  },
  'Emissivity (\u03B5)': {
    type: 'numericProperty',
    value: 'Emissivity (\u03B5)',
    min: 0.02,
    max: 0.96,
    units: 'm/s'
  },
  'Ln (\u03C3T) (electronic)': {
    type: 'numericProperty',
    value: 'Ln (\u03C3T) (electronic)',
    min: -6.343656615050251,
    max: 4.727979274611398,
    units: 'S\xB7K/cm'
  },
  'Second monolayer formula': {
    type: 'categoricalProperty',
    value: 'Second monolayer formula',
    options: []
  },
  'Average concentration of Clementi\'s atomic radii': {
    type: 'categoricalProperty',
    value: 'Average concentration of Clementi\'s atomic radii',
    options: []
  },
  'Average concentration of Pauling electronegativity': {
    type: 'categoricalProperty',
    value: 'Average concentration of Pauling electronegativity',
    options: []
  },
  'Average concentration of Pettifor chemical scale': {
    type: 'categoricalProperty',
    value: 'Average concentration of Pettifor chemical scale',
    options: []
  },
  'Average concentration of Waber-Cromer\'s pseudopotential radii': {
    type: 'categoricalProperty',
    value: 'Average concentration of Waber-Cromer\'s pseudopotential radii',
    options: []
  },
  'Average concentration of atomic mass': {
    type: 'categoricalProperty',
    value: 'Average concentration of atomic mass',
    options: []
  },
  'Average concentration of atomic number': {
    type: 'categoricalProperty',
    value: 'Average concentration of atomic number',
    options: []
  },
  'Average concentration of metallic radius': {
    type: 'categoricalProperty',
    value: 'Average concentration of metallic radius',
    options: []
  },
  'Average concentration of valence electron numbers': {
    type: 'categoricalProperty',
    value: 'Average concentration of valence electron numbers',
    options: []
  },
  'Clementi\'s atomic radii': {
    type: 'categoricalProperty',
    value: 'Clementi\'s atomic radii',
    options: []
  },
  'Compressive modulus': {
    type: 'categoricalProperty',
    value: 'Compressive modulus',
    options: []
  },
  'Elemental atomic volume': {
    type: 'categoricalProperty',
    value: 'Elemental atomic volume',
    options: []
  },
  'Elemental density': {
    type: 'numericProperty',
    value: 'Elemental density',
    min: 0.0899,
    max: 22590,
    units: 'kg/m^3'
  },
  'Elemental electron density': {
    type: 'categoricalProperty',
    value: 'Elemental electron density',
    options: []
  },
  'Elemental magnetic moment': {
    type: 'categoricalProperty',
    value: 'Elemental magnetic moment',
    options: []
  },
  'Elemental melting temperature': {
    type: 'categoricalProperty',
    value: 'Elemental melting temperature',
    options: []
  },
  'Elemental polarizability': {
    type: 'categoricalProperty',
    value: 'Elemental polarizability',
    options: []
  },
  'Elemental structure space group': {
    type: 'categoricalProperty',
    value: 'Elemental structure space group',
    options: []
  },
  'Elemental work function': {
    type: 'categoricalProperty',
    value: 'Elemental work function',
    options: []
  },
  'Mendeleev number': {
    type: 'categoricalProperty',
    value: 'Mendeleev number',
    options: []
  },
  'Metallic radius': {
    type: 'categoricalProperty',
    value: 'Metallic radius',
    options: []
  },
  'Number of d valence electrons': {
    type: 'categoricalProperty',
    value: 'Number of d valence electrons',
    options: []
  },
  'Number of elements': {
    type: 'categoricalProperty',
    value: 'Number of elements',
    options: []
  },
  'Number of f valence electrons': {
    type: 'categoricalProperty',
    value: 'Number of f valence electrons',
    options: []
  },
  'Number of p valence electrons': {
    type: 'categoricalProperty',
    value: 'Number of p valence electrons',
    options: []
  },
  'Number of s valence electrons': {
    type: 'categoricalProperty',
    value: 'Number of s valence electrons',
    options: []
  },
  'Number of unfilled f valence electrons': {
    type: 'categoricalProperty',
    value: 'Number of unfilled f valence electrons',
    options: []
  },
  'Number of unfilled p valence electrons': {
    type: 'categoricalProperty',
    value: 'Number of unfilled p valence electrons',
    options: []
  },
  'Number of unfilled s valence electrons': {
    type: 'categoricalProperty',
    value: 'Number of unfilled s valence electrons',
    options: []
  },
  'Pettifor chemical scale': {
    type: 'categoricalProperty',
    value: 'Pettifor chemical scale',
    options: []
  },
  'Radius of d orbitals': {
    type: 'categoricalProperty',
    value: 'Radius of d orbitals',
    options: []
  },
  'Radius of p orbitals': {
    type: 'categoricalProperty',
    value: 'Radius of p orbitals',
    options: []
  },
  'Radius of s orbitals': {
    type: 'categoricalProperty',
    value: 'Radius of s orbitals',
    options: []
  },
  'Row in periodic table': {
    type: 'categoricalProperty',
    value: 'Row in periodic table',
    options: []
  },
  'Total number of unfilled valence electrons': {
    type: 'categoricalProperty',
    value: 'Total number of unfilled valence electrons',
    options: []
  },
  'Total number of valence electrons': {
    type: 'categoricalProperty',
    value: 'Total number of valence electrons',
    options: []
  },
  'Valence electron numbers': {
    type: 'categoricalProperty',
    value: 'Valence electron numbers',
    options: []
  },
  'Waber-Cromer\'s pseudopotential radii': {
    type: 'categoricalProperty',
    value: 'Waber-Cromer\'s pseudopotential radii',
    options: []
  },
  'log(\u03C3T) (ionic)': {
    type: 'numericProperty',
    value: 'log(\u03C3T) (ionic)',
    min: -5.567032732700713,
    max: 2.5096582466567607,
    units: 'S\xB7K/cm'
  },
  'Density of states (Cu)': {
    type: 'categoricalProperty',
    value: 'Density of states (Cu)',
    options: []
  },
  Ftu2: {
    type: 'numericProperty',
    value: 'Ftu2',
    min: 3.27,
    max: 138,
    units: 'ksi'
  },
  'Theoretical density': {
    type: 'numericProperty',
    value: 'Theoretical density',
    min: 89,
    max: 89,
    units: '%'
  },
  Logσg: {
    type: 'numericProperty',
    value: 'Log\u03C3g',
    min: -6.0476726726726735,
    max: -2.7970479704797055,
    units: 'S/cm'
  },
  'Weibull Strength': {
    type: 'numericProperty',
    value: 'Weibull Strength',
    min: 125,
    max: 1261,
    units: 'MPa'
  },
  '\u03C3g(converted from log)': {
    type: 'numericProperty',
    value: '\u03C3g(converted from log)',
    min: 8.9604e-7,
    max: 0.0015957028823666921,
    units: 'S/cm'
  },
  'Density of states (Se)': {
    type: 'categoricalProperty',
    value: 'Density of states (Se)',
    options: []
  },
  'Optical electronegativity (\u0394X*)': {
    type: 'categoricalProperty',
    value: 'Optical electronegativity (\u0394X*)',
    options: []
  },
  'Sample thickness': {
    type: 'numericProperty',
    value: 'Sample thickness',
    min: 2,
    max: 4,
    units: 'mm'
  },
  x3: {
    type: 'categoricalProperty',
    value: 'x3',
    options: []
  },
  'Band gap (Eg)': {
    type: 'numericProperty',
    value: 'Band gap (Eg)',
    min: 0.4839,
    max: 10.3486,
    units: 'eV'
  },
  'DOS effective mass for electrons (me*/m0)': {
    type: 'categoricalProperty',
    value: 'DOS effective mass for electrons (me*/m0)',
    options: []
  },
  'DOS effective mass for holes (mh*/m0)': {
    type: 'categoricalProperty',
    value: 'DOS effective mass for holes (mh*/m0)',
    options: []
  },
  'Dielectric constant (\u03B5e (post-lopt))': {
    type: 'categoricalProperty',
    value: 'Dielectric constant (\u03B5e (post-lopt))',
    options: []
  },
  'Difference in conduction band minimum energy (\u0394Ecbm)': {
    type: 'numericProperty',
    value: 'Difference in conduction band minimum energy (\u0394Ecbm)',
    min: 1,
    max: 2,
    units: 'eV'
  },
  'Difference in valence band minimum energy (\u0394Evbm)': {
    type: 'numericProperty',
    value: 'Difference in valence band minimum energy (\u0394Evbm)',
    units: 'eV'
  },
  'Direct band gap (Eg)': {
    type: 'numericProperty',
    value: 'Direct band gap (Eg)',
    min: 0.4839,
    max: 11.4925,
    units: 'eV'
  },
  'Final space group': {
    type: 'categoricalProperty',
    value: 'Final space group',
    options: []
  },
  'Number of spin values': {
    type: 'categoricalProperty',
    value: 'Number of spin values',
    options: []
  },
  'Density of states (Ba)': {
    type: 'categoricalProperty',
    value: 'Density of states (Ba)',
    options: []
  },
  'Density of states (F)': {
    type: 'categoricalProperty',
    value: 'Density of states (F)',
    options: []
  },
  'Gibbs free energy of formation \u0394Gf': {
    type: 'numericProperty',
    value: 'Gibbs free energy of formation \u0394Gf',
    min: -3001,
    max: 287.4,
    units: 'kJ/mol'
  },
  'Density of states (Ge)': {
    type: 'categoricalProperty',
    value: 'Density of states (Ge)',
    options: []
  },
  'Dielectric Constant': {
    type: 'categoricalProperty',
    value: 'Dielectric Constant',
    options: []
  },
  'Izod Impact strength': {
    type: 'numericProperty',
    value: 'Izod Impact strength',
    min: 0.28,
    max: 18,
    units: 'ft-lbs/in'
  },
  LnσT: {
    type: 'numericProperty',
    value: 'Ln\u03C3T',
    min: -5.161956606237372,
    max: 6.004965416259523,
    units: 'S\xB7K/cm'
  },
  '#N': {
    type: 'categoricalProperty',
    value: '#N',
    options: []
  },
  'Compressive (Crushing) Strength': {
    type: 'numericProperty',
    value: 'Compressive (Crushing) Strength',
    min: 1,
    max: 4780,
    units: 'MPa'
  },
  'Log[\u03C3t\xB7T]': {
    type: 'numericProperty',
    value: 'Log[\u03C3t\xB7T]',
    min: -4.234185733512792,
    max: 1.2732166890982506,
    units: 'S\xB7K/cm'
  },
  'Q, normal': {
    type: 'numericProperty',
    value: 'Q, normal',
    min: 1,
    max: 2.88,
    units: 'eV'
  },
  'Temperature coefficient': {
    type: 'numericProperty',
    value: 'Temperature coefficient',
    min: -0.2049,
    max: -0.0365,
    units: 'mN/(m K)'
  },
  '[Original] log[\u03C3t\xB7T]': {
    type: 'numericProperty',
    value: '[Original] log[\u03C3t\xB7T]',
    min: -4.234185733512792,
    max: 1.2732166890982506,
    units: 'S\xB7K/cm'
  },
  '[\u03C3t\xB7T](converted from log)': {
    type: 'numericProperty',
    value: '[\u03C3t\xB7T](converted from log)',
    min: 0.000058319564,
    max: 18.75930260791407,
    units: 'S\xB7K/cm'
  },
  'Density of states (Al)': {
    type: 'categoricalProperty',
    value: 'Density of states (Al)',
    options: []
  },
  Logσ0: {
    type: 'numericProperty',
    value: 'Log\u03C30',
    min: 4.4,
    max: 8.11,
    units: 'S/m'
  },
  'Primary ferrite in microstructure': {
    type: 'numericProperty',
    value: 'Primary ferrite in microstructure',
    min: 1,
    max: 48,
    units: '%'
  },
  'Rockwell B Hardness': {
    type: 'categoricalProperty',
    value: 'Rockwell B Hardness',
    options: []
  },
  'Sample length': {
    type: 'numericProperty',
    value: 'Sample length',
    min: 8,
    max: 20,
    units: 'mm'
  },
  'Sample width': {
    type: 'numericProperty',
    value: 'Sample width',
    min: 3,
    max: 5,
    units: 'mm'
  },
  pKb: {
    type: 'categoricalProperty',
    value: 'pKb',
    options: []
  },
  'Critical Magnetic Flux Density Hc1': {
    type: 'numericProperty',
    value: 'Critical Magnetic Flux Density Hc1',
    min: 0,
    max: 204,
    units: 'mT'
  },
  'Density of states (Na)': {
    type: 'categoricalProperty',
    value: 'Density of states (Na)',
    options: []
  },
  'Ferrite with second phase': {
    type: 'numericProperty',
    value: 'Ferrite with second phase',
    min: 3,
    max: 100,
    units: '%'
  },
  'Ionic transport number': {
    type: 'categoricalProperty',
    value: 'Ionic transport number',
    options: []
  },
  'Acicular ferrite': {
    type: 'numericProperty',
    value: 'Acicular ferrite',
    min: 5,
    max: 88,
    units: '%'
  },
  '#S': {
    type: 'categoricalProperty',
    value: '#S',
    options: []
  },
  'Covalent radius': {
    type: 'numericProperty',
    value: 'Covalent radius',
    min: 28,
    max: 260,
    units: 'pm'
  },
  'Electronic dielectric tensors (\u03B5\u221E)': {
    type: 'categoricalProperty',
    value: 'Electronic dielectric tensors (\u03B5\u221E)',
    options: []
  },
  'First electron affinity': {
    type: 'numericProperty',
    value: 'First electron affinity',
    min: -1106,
    max: 349,
    units: 'kJ/mol'
  },
  'First ionization energy': {
    type: 'numericProperty',
    value: 'First ionization energy',
    min: 375.7,
    max: 2372.3,
    units: 'kJ/mol'
  },
  LogGT: {
    type: 'numericProperty',
    value: 'LogGT',
    min: -3.509335682500952,
    max: 2.577014218009479,
    units: 'S\xB7K/cm'
  },
  Tm: {
    type: 'chemicalFormula',
    value: 'Tm'
  },
  Fsbs31: {
    type: 'numericProperty',
    value: 'Fsbs31',
    min: 4.59,
    max: 23.1,
    units: 'ksi'
  },
  'Izod Impact': {
    type: 'numericProperty',
    value: 'Izod Impact',
    min: 0.46,
    max: 877,
    units: 'J/m'
  },
  '(\u03C3T) (electronic)(converted from log)': {
    type: 'numericProperty',
    value: '(\u03C3T) (electronic)(converted from log)',
    min: 23706.298557477567,
    max: 539060.2897370544,
    units: 'S\xB7K/cm'
  },
  'Electronegativity Pauling': {
    type: 'categoricalProperty',
    value: 'Electronegativity Pauling',
    options: []
  },
  Fcu2: {
    type: 'numericProperty',
    value: 'Fcu2',
    min: 13.4,
    max: 147,
    units: 'ksi'
  },
  'Lattice Constant a': {
    type: 'numericProperty',
    value: 'Lattice Constant a',
    min: 2.906,
    max: 59.88,
    units: 'A'
  },
  'Log(\u03C3T) (electronic)': {
    type: 'numericProperty',
    value: 'Log(\u03C3T) (electronic)',
    min: 4.3748637496107134,
    max: 5.7316373403924015,
    units: 'S\xB7K/cm'
  },
  'Terminal voltage': {
    type: 'numericProperty',
    value: 'Terminal voltage',
    min: 0.1821558099262668,
    max: 0.8052240941975347,
    units: 'V'
  },
  '(\u03C3T/S\xB7cm-1)\xB7K (ionic)(converted from log)': {
    type: 'categoricalProperty',
    value: '(\u03C3T/S\xB7cm-1)\xB7K (ionic)(converted from log)',
    options: []
  },
  'A-O bond distance from 8 NN': {
    type: 'numericProperty',
    value: 'A-O bond distance from 8 NN',
    min: 2.361,
    max: 2.967,
    units: 'Angstroms'
  },
  'A-site radius from A-O bond dinstance': {
    type: 'numericProperty',
    value: 'A-site radius from A-O bond dinstance',
    min: 1.101,
    max: 1.707,
    units: 'Angstroms'
  },
  'B-O bond distance from 6 NN': {
    type: 'numericProperty',
    value: 'B-O bond distance from 6 NN',
    min: 1.92,
    max: 2.3,
    units: 'Angstroms'
  },
  'B-O-B average bond angle': {
    type: 'numericProperty',
    value: 'B-O-B average bond angle',
    min: 136.376,
    max: 179.806,
    units: 'degrees'
  },
  'B-site Mendeleev number': {
    type: 'categoricalProperty',
    value: 'B-site Mendeleev number',
    options: []
  },
  'B-site atomic number': {
    type: 'categoricalProperty',
    value: 'B-site atomic number',
    options: []
  },
  'B-site magnetic moment': {
    type: 'categoricalProperty',
    value: 'B-site magnetic moment',
    options: []
  },
  'B-site neighbor grouping number': {
    type: 'categoricalProperty',
    value: 'B-site neighbor grouping number',
    options: []
  },
  'B-site radius': {
    type: 'categoricalProperty',
    value: 'B-site radius',
    options: []
  },
  'B-site radius from B-O bond distance': {
    type: 'numericProperty',
    value: 'B-site radius from B-O bond distance',
    min: 0.66,
    max: 1.04,
    units: 'Angstroms'
  },
  'Conductivity (electronic)': {
    type: 'numericProperty',
    value: 'Conductivity (electronic)',
    min: 0.00014841315690838225,
    max: 1.6307296171507044,
    units: 'S/cm'
  },
  'Crowding fractional length': {
    type: 'categoricalProperty',
    value: 'Crowding fractional length',
    options: []
  },
  Emig: {
    type: 'categoricalProperty',
    value: 'Emig',
    options: []
  },
  'Fermi energy': {
    type: 'numericProperty',
    value: 'Fermi energy',
    min: 1.821,
    max: 9.479,
    units: 'eV'
  },
  'Formula unit volume': {
    type: 'numericProperty',
    value: 'Formula unit volume',
    min: 51.4,
    max: 77.89,
    units: 'cubic Angstroms'
  },
  'Fractional path length': {
    type: 'categoricalProperty',
    value: 'Fractional path length',
    options: []
  },
  'Free volume per formula unit': {
    type: 'numericProperty',
    value: 'Free volume per formula unit',
    min: 15.01,
    max: 34.11,
    units: 'Angstroms'
  },
  'Goldschmidt tolerance factor': {
    type: 'categoricalProperty',
    value: 'Goldschmidt tolerance factor',
    options: []
  },
  'Goldschmidt tolerance ratio from A-O and B-O': {
    type: 'categoricalProperty',
    value: 'Goldschmidt tolerance ratio from A-O and B-O',
    options: []
  },
  'Idealized fractional path length': {
    type: 'categoricalProperty',
    value: 'Idealized fractional path length',
    options: []
  },
  'Kilner critical radius': {
    type: 'numericProperty',
    value: 'Kilner critical radius',
    min: 0.704,
    max: 0.982,
    units: 'Angstroms'
  },
  'Kilner critical radius from A-O and B-O': {
    type: 'numericProperty',
    value: 'Kilner critical radius from A-O and B-O',
    min: 0.803,
    max: 0.989,
    units: 'Angstroms'
  },
  'Log(\u03C3T/S\xB7cm-1)\xB7K (ionic)': {
    type: 'categoricalProperty',
    value: 'Log(\u03C3T/S\xB7cm-1)\xB7K (ionic)',
    options: []
  },
  'Oxygen p-band center energy': {
    type: 'numericProperty',
    value: 'Oxygen p-band center energy',
    min: -6.203,
    max: -1.451,
    units: 'eV'
  },
  'Oxygen vacancy formation energy': {
    type: 'numericProperty',
    value: 'Oxygen vacancy formation energy',
    min: -1.042,
    max: 5.594,
    units: 'eV'
  },
  'Percent free volume': {
    type: 'categoricalProperty',
    value: 'Percent free volume',
    options: []
  },
  'Reagent Concentration': {
    type: 'numericProperty',
    value: 'Reagent Concentration',
    min: 5,
    max: 100,
    units: '%'
  },
  'S (electronic)': {
    type: 'numericProperty',
    value: 'S (electronic)',
    min: 0.0000010365498674723925,
    max: 0.42185598202196917,
    units: 'S/cm'
  },
  'Spacegroup number': {
    type: 'categoricalProperty',
    value: 'Spacegroup number',
    options: []
  },
  'Spacegroup symbol': {
    type: 'categoricalProperty',
    value: 'Spacegroup symbol',
    options: []
  },
  'Water Absorption': {
    type: 'numericProperty',
    value: 'Water Absorption',
    min: 0,
    max: 9.5,
    units: '%'
  },
  'ln(\u03C3T) (electronic)': {
    type: 'numericProperty',
    value: 'ln(\u03C3T) (electronic)',
    min: -6.784120734908138,
    max: 5.115048118985129,
    units: 'S\xB7K/cm'
  },
  '\u03C3T (ionic)(converted from log)': {
    type: 'numericProperty',
    value: '\u03C3T (ionic)(converted from log)',
    min: 0.000033529241,
    max: 183.48619121640206,
    units: 'S\xB7K/cm'
  },
  'Density of states (K)': {
    type: 'categoricalProperty',
    value: 'Density of states (K)',
    options: []
  },
  'Cohesive energy': {
    type: 'numericProperty',
    value: 'Cohesive energy',
    min: -287.636,
    max: 13.6,
    units: 'eV'
  },
  'Dielectric Strength (Breakdown Potential)': {
    type: 'numericProperty',
    value: 'Dielectric Strength (Breakdown Potential)',
    min: 0.5,
    max: 49,
    units: 'kV/mm'
  },
  'Lattice thermal conductivity (\u03BAML)': {
    type: 'numericProperty',
    value: 'Lattice thermal conductivity (\u03BAML)',
    min: 1.24,
    max: 62.1,
    units: 'W/(m.K)'
  },
  'Standard Atomic Weight': {
    type: 'categoricalProperty',
    value: 'Standard Atomic Weight',
    options: []
  },
  'Wear factor (k)': {
    type: 'numericProperty',
    value: 'Wear factor (k)',
    min: 0,
    max: 2900,
    units: 'in3-min/ft.lbs.hr.'
  },
  ΔH: {
    type: 'numericProperty',
    value: '\u0394H',
    min: 0.6973005365479779,
    max: 14.9770914918821,
    units: 'J\xB7g-1'
  },
  κML: {
    type: 'numericProperty',
    value: '\u03BAML',
    min: 1.24,
    max: 62.1,
    units: 'W/(m\xB7K)'
  },
  'Density of states (B)': {
    type: 'categoricalProperty',
    value: 'Density of states (B)',
    options: []
  },
  'Creep Activatn Energy': {
    type: 'numericProperty',
    value: 'Creep Activatn Energy',
    min: 175,
    max: 2390,
    units: 'kJ mol-1'
  },
  'E/E0': {
    type: 'categoricalProperty',
    value: 'E/E0',
    options: []
  },
  Ec2: {
    type: 'numericProperty',
    value: 'Ec2',
    min: 1.09,
    max: 10.3,
    units: 'Msi'
  },
  'Ion conductivity (ionic)': {
    type: 'numericProperty',
    value: 'Ion conductivity (ionic)',
    min: -0.0013030017498990576,
    max: 0.41526921523758253,
    units: 'S/cm'
  },
  '(\u03C3T) (grain)(converted from log)': {
    type: 'numericProperty',
    value: '(\u03C3T) (grain)(converted from log)',
    min: 0.000033676461,
    max: 60.654857039730906,
    units: 'S\xB7K/cm'
  },
  'log(\u03C3T) (grain)': {
    type: 'numericProperty',
    value: 'log(\u03C3T) (grain)',
    min: -4.4726735598227485,
    max: 1.7828655834564247,
    units: 'S\xB7K/cm'
  },
  'log\u03C3tT (electronic)': {
    type: 'numericProperty',
    value: 'log\u03C3tT (electronic)',
    min: -6.5365974282888235,
    max: 1.1909000989119676,
    units: 'S\xB7K/cm'
  },
  '\u03C3tT (electronic)(converted from log)': {
    type: 'numericProperty',
    value: '\u03C3tT (electronic)(converted from log)',
    min: 2.90672e-7,
    max: 15.520299542689264,
    units: 'S\xB7K/cm'
  },
  '(\u03C3)(converted from log)': {
    type: 'numericProperty',
    value: '(\u03C3)(converted from log)',
    min: 8.31764e-7,
    max: 0.10471285480508996,
    units: 'S/cm'
  },
  'C.T.E.': {
    type: 'numericProperty',
    value: 'C.T.E.',
    min: 26.4,
    max: 187,
    units: '\u03BCm/m\xB0C'
  },
  'Change in Length': {
    type: 'numericProperty',
    value: 'Change in Length',
    min: -0.1,
    max: 2,
    units: '%'
  },
  'Change in Weight': {
    type: 'numericProperty',
    value: 'Change in Weight',
    min: -4.2,
    max: 9.5,
    units: '%'
  },
  'Freezing point (Tf)': {
    type: 'numericProperty',
    value: 'Freezing point (Tf)',
    min: 133.15,
    max: 466.15,
    units: 'K'
  },
  'Log(\u03C3)': {
    type: 'numericProperty',
    value: 'Log(\u03C3)',
    min: -6.08,
    max: -0.98,
    units: 'S/cm'
  },
  'Tensile Strength Retained': {
    type: 'numericProperty',
    value: 'Tensile Strength Retained',
    min: 0,
    max: 113,
    units: '%'
  },
  'Electron conductivity': {
    type: 'numericProperty',
    value: 'Electron conductivity',
    min: 0.000001137495,
    max: 7.128098953205373,
    units: 'S/cm'
  },
  '(\u03C3) (ionic)(converted from log)': {
    type: 'numericProperty',
    value: '(\u03C3) (ionic)(converted from log)',
    min: 0.0000029568775051091813,
    max: 0.018221321432324123,
    units: 'S/cm'
  },
  '1/Avg. Distance (1/dA-A)': {
    type: 'categoricalProperty',
    value: '1/Avg. Distance (1/dA-A)',
    options: []
  },
  '1/Avg. Distance (1/dA-B)': {
    type: 'categoricalProperty',
    value: '1/Avg. Distance (1/dA-B)',
    options: []
  },
  '1/Avg. Distance (1/dA-C)': {
    type: 'categoricalProperty',
    value: '1/Avg. Distance (1/dA-C)',
    options: []
  },
  '1/Avg. Distance (1/dA-X)': {
    type: 'categoricalProperty',
    value: '1/Avg. Distance (1/dA-X)',
    options: []
  },
  'Activation site multiplicity': {
    type: 'categoricalProperty',
    value: 'Activation site multiplicity',
    options: []
  },
  'Activation site symmetry': {
    type: 'categoricalProperty',
    value: 'Activation site symmetry',
    options: []
  },
  'Atomic number (NA)': {
    type: 'categoricalProperty',
    value: 'Atomic number (NA)',
    options: []
  },
  'Atomic number (NB)': {
    type: 'categoricalProperty',
    value: 'Atomic number (NB)',
    options: []
  },
  'Atomic number (NC)': {
    type: 'categoricalProperty',
    value: 'Atomic number (NC)',
    options: []
  },
  'Atomic number (NX)': {
    type: 'categoricalProperty',
    value: 'Atomic number (NX)',
    options: []
  },
  'Coordination number (CA-A)': {
    type: 'categoricalProperty',
    value: 'Coordination number (CA-A)',
    options: []
  },
  'Coordination number (CA-B)': {
    type: 'categoricalProperty',
    value: 'Coordination number (CA-B)',
    options: []
  },
  'Coordination number (CA-C)': {
    type: 'categoricalProperty',
    value: 'Coordination number (CA-C)',
    options: []
  },
  'Coordination number (CA-X)': {
    type: 'categoricalProperty',
    value: 'Coordination number (CA-X)',
    options: []
  },
  'Critical activator Concentration': {
    type: 'numericProperty',
    value: 'Critical activator Concentration',
    min: 25.4,
    max: 976,
    units: '/cm3'
  },
  'Density of states (Li)': {
    type: 'categoricalProperty',
    value: 'Density of states (Li)',
    options: []
  },
  'Electronegativity (EA)': {
    type: 'categoricalProperty',
    value: 'Electronegativity (EA)',
    options: []
  },
  'Electronegativity (EB)': {
    type: 'categoricalProperty',
    value: 'Electronegativity (EB)',
    options: []
  },
  'Electronegativity (EC)': {
    type: 'categoricalProperty',
    value: 'Electronegativity (EC)',
    options: []
  },
  'Electronegativity (EX)': {
    type: 'categoricalProperty',
    value: 'Electronegativity (EX)',
    options: []
  },
  'Full width at half maximum (fwhm)': {
    type: 'numericProperty',
    value: 'Full width at half maximum (fwhm)',
    min: 0.12086,
    max: 0.74,
    units: 'eV'
  },
  'IR of A': {
    type: 'categoricalProperty',
    value: 'IR of A',
    options: []
  },
  'IR of B': {
    type: 'categoricalProperty',
    value: 'IR of B',
    options: []
  },
  'IR of C': {
    type: 'categoricalProperty',
    value: 'IR of C',
    options: []
  },
  'IR of X': {
    type: 'categoricalProperty',
    value: 'IR of X',
    options: []
  },
  'Lattice angle (\u03B2)': {
    type: 'categoricalProperty',
    value: 'Lattice angle (\u03B2)',
    options: []
  },
  'Lattice angle (\u03B3)': {
    type: 'categoricalProperty',
    value: 'Lattice angle (\u03B3)',
    options: []
  },
  'Lattice anisotropy (b/a)': {
    type: 'categoricalProperty',
    value: 'Lattice anisotropy (b/a)',
    options: []
  },
  'Lattice anisotropy (c/a)': {
    type: 'categoricalProperty',
    value: 'Lattice anisotropy (c/a)',
    options: []
  },
  'Lattice volume (V)': {
    type: 'categoricalProperty',
    value: 'Lattice volume (V)',
    options: []
  },
  'Peak wavelength': {
    type: 'numericProperty',
    value: 'Peak wavelength',
    min: 1.7464,
    max: 3.3333,
    units: 'eV'
  },
  'Theoretical density (\u03C1)': {
    type: 'categoricalProperty',
    value: 'Theoretical density (\u03C1)',
    options: []
  },
  'log (\u03C3) (ionic)': {
    type: 'numericProperty',
    value: 'log (\u03C3) (ionic)',
    min: -5.529166666666668,
    max: -1.7394201306584955,
    units: 'S/cm'
  },
  'Elemental bulk modulus': {
    type: 'numericProperty',
    value: 'Elemental bulk modulus',
    min: 1.1,
    max: 462,
    units: 'Gpa'
  },
  Fsu12: {
    type: 'numericProperty',
    value: 'Fsu12',
    min: 4.49,
    max: 25.7,
    units: 'ksi'
  },
  'Sintering Aid': {
    type: 'categoricalProperty',
    value: 'Sintering Aid',
    options: []
  },
  'Critical Magnetic Field Strength Hc2': {
    type: 'numericProperty',
    value: 'Critical Magnetic Field Strength Hc2',
    min: 0,
    max: 12,
    units: 'MA/m'
  },
  'Recommended Machines': {
    type: 'categoricalProperty',
    value: 'Recommended Machines',
    options: []
  },
  'Density of states (Ni)': {
    type: 'categoricalProperty',
    value: 'Density of states (Ni)',
    options: []
  },
  'Magnetic Moment per Formula Unit': {
    type: 'numericProperty',
    value: 'Magnetic Moment per Formula Unit',
    min: 0,
    max: 6,
    units: '\u03BCB'
  },
  'ln(\u03C3)': {
    type: 'numericProperty',
    value: 'ln(\u03C3)',
    min: -11.062329541908506,
    max: -1.9517226972338366,
    units: 'S/cm'
  },
  'ln\u03C3 T (electronic)': {
    type: 'numericProperty',
    value: 'ln\u03C3 T (electronic)',
    min: -5.490560999157774,
    max: 4.5492902775210045,
    units: 'S\xB7K/cm'
  },
  '\u03C31\xB7T (ionic)': {
    type: 'numericProperty',
    value: '\u03C31\xB7T (ionic)',
    min: 0.01092810905608731,
    max: 350.0973498418854,
    units: 'S\xB7K/cm'
  },
  'Calculated bulk modulus': {
    type: 'numericProperty',
    value: 'Calculated bulk modulus',
    min: 1288.429,
    max: 1984.627,
    units: 'kbar'
  },
  Dataset: {
    type: 'categoricalProperty',
    value: 'Dataset',
    options: []
  },
  'Density of states (Te)': {
    type: 'categoricalProperty',
    value: 'Density of states (Te)',
    options: []
  },
  'Particle Size Distribution': {
    type: 'numericProperty',
    value: 'Particle Size Distribution',
    min: -35,
    max: 61.6,
    units: '\u03BCm'
  },
  '\u03C3i (ionic)(converted from log)': {
    type: 'numericProperty',
    value: '\u03C3i (ionic)(converted from log)',
    min: 2.5144e-8,
    max: 2.3450538469656323,
    units: 'S/cm'
  },
  'Density of states (Zn)': {
    type: 'categoricalProperty',
    value: 'Density of states (Zn)',
    options: []
  },
  'Fracture toughness': {
    type: 'numericProperty',
    value: 'Fracture toughness',
    units: 'Mpasqrtm'
  },
  'Henry Constant': {
    type: 'numericProperty',
    value: 'Henry Constant',
    min: 1.4,
    max: 890,
    units: 'nmol Pa-1 kg-1'
  },
  'Pellet diameter': {
    type: 'numericProperty',
    value: 'Pellet diameter',
    min: 6,
    max: 13,
    units: 'mm'
  },
  '(sigma\xB7T)(converted from log)': {
    type: 'numericProperty',
    value: '(sigma\xB7T)(converted from log)',
    min: 5.80403e-7,
    max: 0.6630479162940449,
    units: 'S\xB7K/cm'
  },
  'Debye temperature (\u03B8exp)': {
    type: 'numericProperty',
    value: 'Debye temperature (\u03B8exp)',
    min: 84,
    max: 1450,
    units: 'K'
  },
  'Glass Transition Temperature': {
    type: 'numericProperty',
    value: 'Glass Transition Temperature',
    min: -130,
    max: 680,
    units: '\xB0C'
  },
  'Log(sigma\xB7T)': {
    type: 'numericProperty',
    value: 'Log(sigma\xB7T)',
    min: -6.236270302427653,
    max: -0.17845508542606914,
    units: 'S\xB7K/cm'
  },
  'Volume ratio': {
    type: 'categoricalProperty',
    value: 'Volume ratio',
    options: []
  },
  'Bulk conductivity (\u03C3g)': {
    type: 'numericProperty',
    value: 'Bulk conductivity (\u03C3g)',
    min: 0.37,
    max: 9.91,
    units: 'Sm-1'
  },
  'Density of states (Pd)': {
    type: 'categoricalProperty',
    value: 'Density of states (Pd)',
    options: []
  },
  'Doping type': {
    type: 'categoricalProperty',
    value: 'Doping type',
    options: []
  },
  '[Original] log\u03C31T (ionic)': {
    type: 'numericProperty',
    value: '[Original] log\u03C31T (ionic)',
    min: -3.8388741134751783,
    max: 1.1921542553191498,
    units: 'S\xB7K/cm'
  },
  'log\u03C31T (ionic)': {
    type: 'numericProperty',
    value: 'log\u03C31T (ionic)',
    min: -3.8388741134751783,
    max: 1.1921542553191498,
    units: 'S\xB7K/cm'
  },
  'log\u03C3\xB7T (electronic)': {
    type: 'numericProperty',
    value: 'log\u03C3\xB7T (electronic)',
    min: -2.54254205516469,
    max: 2.0173819899213683,
    units: 'S\xB7K/cm'
  },
  '\u03C31T (ionic)(converted from log)': {
    type: 'numericProperty',
    value: '\u03C31T (ionic)(converted from log)',
    min: 0.0001449191861849999,
    max: 15.565183869710676,
    units: 'S\xB7K/cm'
  },
  '\u03C3T (electronic)(converted from log)': {
    type: 'numericProperty',
    value: '\u03C3T (electronic)(converted from log)',
    min: 0.000011533122,
    max: 9.154864429528846,
    units: 'S\xB7K/cm'
  },
  '\u03C3\xB7T (electronic)(converted from log)': {
    type: 'numericProperty',
    value: '\u03C3\xB7T (electronic)(converted from log)',
    min: 0.0028671997151465713,
    max: 104.0835244856761,
    units: 'S\xB7K/cm'
  },
  'Compressive strength at 2% deformation': {
    type: 'numericProperty',
    value: 'Compressive strength at 2% deformation',
    min: 1600,
    max: 4931283,
    units: 'psi'
  },
  'Gruneisen parameter (\u03B3exp)': {
    type: 'categoricalProperty',
    value: 'Gruneisen parameter (\u03B3exp)',
    options: []
  },
  'Coefficient Of Thermal Expansion': {
    type: 'numericProperty',
    value: 'Coefficient Of Thermal Expansion',
    min: 0.00000828,
    max: 0.0000882,
    units: 'mm/mm/\xB0C'
  },
  'Density of states (Mg)': {
    type: 'categoricalProperty',
    value: 'Density of states (Mg)',
    options: []
  },
  'Solubility in ethanol': {
    type: 'categoricalProperty',
    value: 'Solubility in ethanol',
    options: []
  },
  'log \u03C3g T (electronic)': {
    type: 'numericProperty',
    value: 'log \u03C3g T (electronic)',
    min: -5.660020449897751,
    max: 0.3403203817314253,
    units: 'S\xB7K/cm'
  },
  '\u03C3g T (electronic)(converted from log)': {
    type: 'numericProperty',
    value: '\u03C3g T (electronic)(converted from log)',
    min: 0.000002187659,
    max: 2.1893761447089073,
    units: 'S\xB7K/cm'
  },
  'Diffusion Coefficient': {
    type: 'numericProperty',
    value: 'Diffusion Coefficient',
    min: -16.4,
    max: -4.2,
    units: 'log10(cm2/s'
  },
  'Austenite finish temperature, Af': {
    type: 'numericProperty',
    value: 'Austenite finish temperature, Af',
    min: 236.5,
    max: 622.2,
    units: 'K'
  },
  'Austenite start temperature, As': {
    type: 'numericProperty',
    value: 'Austenite start temperature, As',
    min: 217.1,
    max: 595.8,
    units: 'K'
  },
  'Autoignition temp \xA0': {
    type: 'numericProperty',
    value: 'Autoignition temp \xA0',
    min: 0,
    max: 595,
    units: '\xB0C'
  },
  'Density (h\u03C1)': {
    type: 'numericProperty',
    value: 'Density (h\u03C1)',
    min: 1740,
    max: 9780,
    units: 'kg/m3'
  },
  'Density of states (Ga)': {
    type: 'categoricalProperty',
    value: 'Density of states (Ga)',
    options: []
  },
  'Density of states (Sb)': {
    type: 'categoricalProperty',
    value: 'Density of states (Sb)',
    options: []
  },
  'Heat of transformation (formation of austenite), \u0394HMA': {
    type: 'numericProperty',
    value: 'Heat of transformation (formation of austenite), \u0394HMA',
    min: -35.1,
    max: -10.1,
    units: 'J/g'
  },
  'Heat of transformation (formation of martensite), \u0394HAM': {
    type: 'numericProperty',
    value: 'Heat of transformation (formation of martensite), \u0394HAM',
    min: 8.5,
    max: 34.2,
    units: 'J/g'
  },
  'Martensite finish temperature, Mf': {
    type: 'numericProperty',
    value: 'Martensite finish temperature, Mf',
    min: 176.8,
    max: 548.3,
    units: 'K'
  },
  'Martensite peak temperature, Mp': {
    type: 'numericProperty',
    value: 'Martensite peak temperature, Mp',
    min: 187.5,
    max: 580,
    units: 'K'
  },
  'Martensite start temperature, Ms': {
    type: 'numericProperty',
    value: 'Martensite start temperature, Ms',
    min: 199.4,
    max: 597.6,
    units: 'K'
  },
  'Relative polarity': {
    type: 'categoricalProperty',
    value: 'Relative polarity',
    options: []
  },
  'Solubility in H2O': {
    type: 'numericProperty',
    value: 'Solubility in H2O',
    min: 0.0003,
    max: 30,
    units: 'g/100g'
  },
  'Solubility in other solvents': {
    type: 'categoricalProperty',
    value: 'Solubility in other solvents',
    options: []
  },
  'Fatigue Strength (Endurance Limit)': {
    type: 'numericProperty',
    value: 'Fatigue Strength (Endurance Limit)',
    min: 47,
    max: 690,
    units: 'MPa'
  },
  'log\u03C3\u03B8 (electronic)': {
    type: 'numericProperty',
    value: 'log\u03C3\u03B8 (electronic)',
    min: -5.670312500000001,
    max: -1.6906249999999998,
    units: 'S/cm'
  },
  '\u03C30(converted from log)': {
    type: 'numericProperty',
    value: '\u03C30(converted from log)',
    min: 49986.25204688643,
    max: 116241454.46816817,
    units: 'S/m'
  },
  '\u03C3\u03B8 (electronic)(converted from log)': {
    type: 'numericProperty',
    value: '\u03C3\u03B8 (electronic)(converted from log)',
    min: 0.000002136424,
    max: 0.020388017608333857,
    units: 'S/cm'
  },
  '(\u03C3 T/ S\xB7K/cm)(converted from log)': {
    type: 'categoricalProperty',
    value: '(\u03C3 T/ S\xB7K/cm)(converted from log)',
    options: []
  },
  '(\u03C3T) (grain ionic)(converted from log)': {
    type: 'numericProperty',
    value: '(\u03C3T) (grain ionic)(converted from log)',
    min: 0.003367229575211395,
    max: 52.443247934019276,
    units: 'S\xB7K/cm'
  },
  'Conductivity (converted from log)': {
    type: 'numericProperty',
    value: 'Conductivity (converted from log)',
    min: 0.000005681644,
    max: 0.0031396913301639357,
    units: 'S/cm'
  },
  'Density of states (Sr)': {
    type: 'categoricalProperty',
    value: 'Density of states (Sr)',
    options: []
  },
  'Density of states (Y)': {
    type: 'categoricalProperty',
    value: 'Density of states (Y)',
    options: []
  },
  Electroluminescence: {
    type: 'categoricalProperty',
    value: 'Electroluminescence',
    options: []
  },
  'Elongation at break': {
    type: 'numericProperty',
    value: 'Elongation at break',
    min: 0.6,
    max: 800,
    units: '%'
  },
  'Log(\u03C3 T/ S\xB7K/cm)': {
    type: 'categoricalProperty',
    value: 'Log(\u03C3 T/ S\xB7K/cm)',
    options: []
  },
  'Relative densities': {
    type: 'numericProperty',
    value: 'Relative densities',
    min: 97,
    max: 97,
    units: '%'
  },
  'log(\u03C3T) (grain ionic)': {
    type: 'numericProperty',
    value: 'log(\u03C3T) (grain ionic)',
    min: -2.472727272727276,
    max: 1.7196895807324175,
    units: 'S\xB7K/cm'
  },
  'Density of states (Sn)': {
    type: 'categoricalProperty',
    value: 'Density of states (Sn)',
    options: []
  },
  Dopant: {
    type: 'categoricalProperty',
    value: 'Dopant',
    options: []
  },
  Gs12: {
    type: 'numericProperty',
    value: 'Gs12',
    min: 0.141,
    max: 1.05,
    units: 'Msi'
  },
  'Liquid Density': {
    type: 'numericProperty',
    value: 'Liquid Density',
    min: 0.81,
    max: 1.7,
    units: 'g/cm3'
  },
  Logσi: {
    type: 'numericProperty',
    value: 'Log\u03C3i',
    min: -5.43829206587177,
    max: -1.330048913990736,
    units: 'S/cm'
  },
  'Peak isothermal entropy change': {
    type: 'numericProperty',
    value: 'Peak isothermal entropy change',
    min: -35,
    max: -0.29,
    units: 'Jkg-1K-1'
  },
  'Specific heat': {
    type: 'numericProperty',
    value: 'Specific heat',
    min: 447,
    max: 502,
    units: 'J/kg K'
  },
  '\u03C3i(converted from log)': {
    type: 'numericProperty',
    value: '\u03C3i(converted from log)',
    min: 0.000003645087,
    max: 0.04676824638874935,
    units: 'S/cm'
  },
  'Average weight loss': {
    type: 'numericProperty',
    value: 'Average weight loss',
    min: 0,
    max: 0.07,
    units: 'g'
  },
  'Calculated bandgap': {
    type: 'numericProperty',
    value: 'Calculated bandgap',
    min: 0,
    max: 5.803,
    units: 'eV'
  },
  'Calomel Potential': {
    type: 'numericProperty',
    value: 'Calomel Potential',
    min: -850,
    max: 250,
    units: 'mV'
  },
  'Density of states (Rb)': {
    type: 'categoricalProperty',
    value: 'Density of states (Rb)',
    options: []
  },
  'Log\u03C3T (electronic)': {
    type: 'numericProperty',
    value: 'Log\u03C3T (electronic)',
    min: -4.938053097345133,
    max: 0.9616519174041298,
    units: 'S\xB7K/cm'
  },
  'Log\u03C3Tc0.5 (ionic)': {
    type: 'numericProperty',
    value: 'Log\u03C3Tc0.5 (ionic)',
    min: -2.178658248891765,
    max: 1.1494931211760422,
    units: 'S\xB7K/cm0.5'
  },
  'Materials project energy above hull': {
    type: 'numericProperty',
    value: 'Materials project energy above hull',
    min: 0,
    max: 0.05,
    units: 'eV'
  },
  'Surface hardness': {
    type: 'categoricalProperty',
    value: 'Surface hardness',
    options: []
  },
  'Unit cell (\u03B1)': {
    type: 'numericProperty',
    value: 'Unit cell (\u03B1)',
    min: 74.24,
    max: 120.5,
    units: '\xB0'
  },
  '[Original] \u03C3\xB7T': {
    type: 'numericProperty',
    value: '[Original] \u03C3\xB7T',
    min: 0.10505340042170472,
    max: 341.07779874230306,
    units: 'S\xB7K/cm'
  },
  '\u03C3Tc0.5 (ionic)(converted from log)': {
    type: 'numericProperty',
    value: '\u03C3Tc0.5 (ionic)(converted from log)',
    min: 0.006627378142433654,
    max: 14.108898890868149,
    units: 'S\xB7K/cm0.5'
  },
  σ·T: {
    type: 'numericProperty',
    value: '\u03C3\xB7T',
    min: 0.10505340042170472,
    max: 341.07779874230306,
    units: 'S\xB7K/cm'
  },
  'Activation energy of N2 to N* + N*': {
    type: 'numericProperty',
    value: 'Activation energy of N2 to N* + N*',
    min: -1,
    max: 7.635,
    units: 'eV'
  },
  'Density of states (Ca)': {
    type: 'categoricalProperty',
    value: 'Density of states (Ca)',
    options: []
  },
  'Flexural modulus/ (modulus of elasticity)': {
    type: 'numericProperty',
    value: 'Flexural modulus/ (modulus of elasticity)',
    min: 0.003,
    max: 80,
    units: 'GPa'
  },
  'Log resistivity': {
    type: 'numericProperty',
    value: 'Log resistivity',
    min: 0.805158284958793,
    max: 4.345750333107706,
    units: '\u03A9 \xB7 cm'
  },
  'Reaction enthalpy of N2 to N* + N*': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of N2 to N* + N*',
    min: -3.89,
    max: 6.77,
    units: 'eV'
  },
  '(\u03C3IT)(converted from log)': {
    type: 'numericProperty',
    value: '(\u03C3IT)(converted from log)',
    min: 0.000065925242,
    max: 10.71117468464986,
    units: 'S\xB7K/cm'
  },
  'Dynamic coefficient of friction': {
    type: 'numericProperty',
    value: 'Dynamic coefficient of friction',
    min: 0.1,
    max: 0.6,
    units: '40 psi 50fpm'
  },
  'IL/S': {
    type: 'numericProperty',
    value: 'IL/S',
    min: -0.03468753613611959,
    max: 0.1091242669530024,
    units: 'ma\xB7cm-1'
  },
  'Impact Strength (Izod)': {
    type: 'numericProperty',
    value: 'Impact Strength (Izod)',
    min: 2,
    max: 91,
    units: 'ft-lb'
  },
  'Log(\u03C3IT)': {
    type: 'numericProperty',
    value: 'Log(\u03C3IT)',
    min: -4.180948269659688,
    max: 1.0298371021190686,
    units: 'S\xB7K/cm'
  },
  'Notched Izod impact strength': {
    type: 'numericProperty',
    value: 'Notched Izod impact strength',
    min: 0.02,
    max: 1.064,
    units: 'kJ/m'
  },
  'Strain at yield': {
    type: 'numericProperty',
    value: 'Strain at yield',
    min: 1.8,
    max: 85,
    units: '%'
  },
  'Density of states (Ir)': {
    type: 'categoricalProperty',
    value: 'Density of states (Ir)',
    options: []
  },
  'Dielectric Strength': {
    type: 'numericProperty',
    value: 'Dielectric Strength',
    min: 1.9,
    max: 374,
    units: 'kV/mm'
  },
  'Electrochemical window': {
    type: 'numericProperty',
    value: 'Electrochemical window',
    min: 1.95,
    max: 6.35,
    units: 'V'
  },
  'Log(GT)': {
    type: 'numericProperty',
    value: 'Log(GT)',
    min: -4.255562310860934,
    max: 1.2189811936852317,
    units: 'S\xB7K/cm'
  },
  'Shear Strength': {
    type: 'numericProperty',
    value: 'Shear Strength',
    min: 55,
    max: 320,
    units: 'MPa'
  },
  'Density of states (As)': {
    type: 'categoricalProperty',
    value: 'Density of states (As)',
    options: []
  },
  'Density of states (Au)': {
    type: 'categoricalProperty',
    value: 'Density of states (Au)',
    options: []
  },
  'Density of states (Cd)': {
    type: 'categoricalProperty',
    value: 'Density of states (Cd)',
    options: []
  },
  'Density of states (Nd)': {
    type: 'categoricalProperty',
    value: 'Density of states (Nd)',
    options: []
  },
  'Electronegativity Absolute': {
    type: 'categoricalProperty',
    value: 'Electronegativity Absolute',
    options: []
  },
  'Electronegativity Allred': {
    type: 'categoricalProperty',
    value: 'Electronegativity Allred',
    options: []
  },
  'log [ ]': {
    type: 'numericProperty',
    value: 'log [ ]',
    min: 10.94240837696335,
    max: 19.947643979057585,
    units: 'cm-3'
  },
  ε1tu: {
    type: 'numericProperty',
    value: '\u03B51tu',
    min: 5100,
    max: 35600,
    units: '\u03BC\u03B5'
  },
  'Density of states (Rh)': {
    type: 'categoricalProperty',
    value: 'Density of states (Rh)',
    options: []
  },
  'Density of states (Sc)': {
    type: 'categoricalProperty',
    value: 'Density of states (Sc)',
    options: []
  },
  'Figure of merit': {
    type: 'categoricalProperty',
    value: 'Figure of merit',
    options: []
  },
  'Formula Units per Cell': {
    type: 'categoricalProperty',
    value: 'Formula Units per Cell',
    options: []
  },
  'Ionic conductivity': {
    type: 'numericProperty',
    value: 'Ionic conductivity',
    min: 0.00000252,
    max: 0.2,
    units: 'S/cm'
  },
  'Solidification (Pattern Maker\'s) Shrinkage': {
    type: 'numericProperty',
    value: 'Solidification (Pattern Maker\'s) Shrinkage',
    min: 0.8,
    max: 5.5,
    units: '%'
  },
  'log[\u03C3]': {
    type: 'numericProperty',
    value: 'log[\u03C3]',
    min: -2.2451674589027535,
    max: -0.8528629431570609,
    units: 'S/cm'
  },
  '(\u03C3bT) (grain)(converted from log)': {
    type: 'numericProperty',
    value: '(\u03C3bT) (grain)(converted from log)',
    min: 0.11580552089270121,
    max: 73.76856511840539,
    units: 'S\xB7K/cm'
  },
  '(\u03C3tT)(converted from log)': {
    type: 'numericProperty',
    value: '(\u03C3tT)(converted from log)',
    min: 0.010013101605008169,
    max: 55.47364654128024,
    units: 'S\xB7K/cm'
  },
  'Activation energy of O2 to O* + O*': {
    type: 'numericProperty',
    value: 'Activation energy of O2 to O* + O*',
    min: -4.5,
    max: 2.49,
    units: 'eV'
  },
  'Band gap (EG)': {
    type: 'numericProperty',
    value: 'Band gap (EG)',
    min: 0.95,
    max: 3.5,
    units: 'eV'
  },
  'Density of states (Pt)': {
    type: 'categoricalProperty',
    value: 'Density of states (Pt)',
    options: []
  },
  'Dielectric Constant (Relative Permittivity) At 1 MHz': {
    type: 'categoricalProperty',
    value: 'Dielectric Constant (Relative Permittivity) At 1 MHz',
    options: []
  },
  'Endothermic peak temperature, Tp': {
    type: 'numericProperty',
    value: 'Endothermic peak temperature, Tp',
    min: -53.5,
    max: 182.9,
    units: '\xB0C'
  },
  'Log(\u03C3tT)': {
    type: 'numericProperty',
    value: 'Log(\u03C3tT)',
    min: -1.999431376936542,
    max: 1.744086715017177,
    units: 'S\xB7K/cm'
  },
  'Martensitic transformation temperature': {
    type: 'numericProperty',
    value: 'Martensitic transformation temperature',
    min: -53.5,
    max: 182.9,
    units: 'degC'
  },
  'Reaction enthalpy of O2 to O* + O*': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of O2 to O* + O*',
    min: -7.73,
    max: 0.49,
    units: 'eV'
  },
  'Sample name': {
    type: 'categoricalProperty',
    value: 'Sample name',
    options: []
  },
  'Unit cell (\u03B3)': {
    type: 'numericProperty',
    value: 'Unit cell (\u03B3)',
    min: 55.83,
    max: 120.08,
    units: '\xB0'
  },
  'log(\u03C3bT) (grain)': {
    type: 'numericProperty',
    value: 'log(\u03C3bT) (grain)',
    min: -0.9362707356337916,
    max: 1.867871336024202,
    units: 'S\xB7K/cm'
  },
  ΔE: {
    type: 'numericProperty',
    value: '\u0394E',
    min: 0.5718052853568671,
    max: 1.3084440729292992,
    units: 'eV'
  },
  σdc: {
    type: 'numericProperty',
    value: '\u03C3dc',
    min: 0.0004647587491067214,
    max: 2.54649513729133,
    units: 'S/cm'
  },
  '(\u03C3) (electronic)(converted from log)': {
    type: 'numericProperty',
    value: '(\u03C3) (electronic)(converted from log)',
    min: 0.000080862074,
    max: 0.28128369228961836,
    units: 'S/cm'
  },
  'Density of states (Pr)': {
    type: 'categoricalProperty',
    value: 'Density of states (Pr)',
    options: []
  },
  'Lattice Constant c': {
    type: 'numericProperty',
    value: 'Lattice Constant c',
    min: 2.837,
    max: 49.38,
    units: 'A'
  },
  Sample: {
    type: 'categoricalProperty',
    value: 'Sample',
    options: []
  },
  Thermoluminescence: {
    type: 'categoricalProperty',
    value: 'Thermoluminescence',
    options: []
  },
  V: {
    type: 'chemicalFormula',
    value: 'V'
  },
  'log(\u03C3) (electronic)': {
    type: 'numericProperty',
    value: 'log(\u03C3) (electronic)',
    min: -4.092255125284741,
    max: -0.5508554457726962,
    units: 'S/cm'
  },
  Carrier: {
    type: 'categoricalProperty',
    value: 'Carrier',
    options: []
  },
  'Dielectric Constant (Relative Permittivity) At 1 Hz': {
    type: 'categoricalProperty',
    value: 'Dielectric Constant (Relative Permittivity) At 1 Hz',
    options: []
  },
  'Dissipation factor': {
    type: 'categoricalProperty',
    value: 'Dissipation factor',
    options: []
  },
  Forces: {
    type: 'categoricalProperty',
    value: 'Forces',
    options: []
  },
  Positions: {
    type: 'categoricalProperty',
    value: 'Positions',
    options: []
  },
  '[Original] log conductivity': {
    type: 'numericProperty',
    value: '[Original] log conductivity',
    min: -7.9383120589771305,
    max: -4.134471744173336,
    units: 'S/cm'
  },
  'ln(\u03C3 T)': {
    type: 'numericProperty',
    value: 'ln(\u03C3 T)',
    min: -4.888274336283185,
    max: 4.310840707964601,
    units: 'S\xB7K/cm'
  },
  'log\u03C3T (ionic)': {
    type: 'numericProperty',
    value: 'log\u03C3T (ionic)',
    min: -4.474576271186441,
    max: 2.2636033857315607,
    units: 'S\xB7K/cm'
  },
  'Density of states (Ag)': {
    type: 'categoricalProperty',
    value: 'Density of states (Ag)',
    options: []
  },
  'Activation energy of NO to N* + O*': {
    type: 'numericProperty',
    value: 'Activation energy of NO to N* + O*',
    min: -4.188,
    max: 3.555,
    units: 'eV'
  },
  'Adsorption energy of CO': {
    type: 'numericProperty',
    value: 'Adsorption energy of CO',
    min: -2.54,
    max: 1.94,
    units: 'eV'
  },
  'Bulk modulus for dilute alloy': {
    type: 'numericProperty',
    value: 'Bulk modulus for dilute alloy',
    min: 36.7,
    max: 39.7,
    units: 'GPa'
  },
  'Dilute mixing energy': {
    type: 'numericProperty',
    value: 'Dilute mixing energy',
    min: -1.54,
    max: 2.29,
    units: 'eV/sol'
  },
  'Lattice constants of this sample': {
    type: 'categoricalProperty',
    value: 'Lattice constants of this sample',
    options: []
  },
  'Melting Temperature': {
    type: 'numericProperty',
    value: 'Melting Temperature',
    min: 130,
    max: 1149,
    units: '\xB0C'
  },
  'Reaction enthalpy of NO to N* + O*': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of NO to N* + O*',
    min: -6.715,
    max: 2.715,
    units: 'eV'
  },
  Solute: {
    type: 'categoricalProperty',
    value: 'Solute',
    options: []
  },
  'Solute migration barrier for solute-vacancy exchange, adjacent basal plane': {
    type: 'numericProperty',
    value: 'Solute migration barrier for solute-vacancy exchange, adjacent basal plane',
    min: 0,
    max: 1.86,
    units: 'eV'
  },
  'Solute migration barrier for solute-vacancy exchange, within basal plane': {
    type: 'numericProperty',
    value: 'Solute migration barrier for solute-vacancy exchange, within basal plane',
    min: 0,
    max: 1.91,
    units: 'eV'
  },
  'Solute-vacancy binding energy, basal': {
    type: 'numericProperty',
    value: 'Solute-vacancy binding energy, basal',
    min: -0.29,
    max: 0.67,
    units: 'eV'
  },
  'Solute-vacancy binding energy, normal': {
    type: 'numericProperty',
    value: 'Solute-vacancy binding energy, normal',
    min: -0.3,
    max: 0.57,
    units: 'eV'
  },
  'Volume change from solute': {
    type: 'numericProperty',
    value: 'Volume change from solute',
    min: -30,
    max: 34,
    units: 'A3'
  },
  'Activation energy of NO* to N* + O*': {
    type: 'numericProperty',
    value: 'Activation energy of NO* to N* + O*',
    min: -1.293,
    max: 3.6,
    units: 'eV'
  },
  'Activation energy of NO* to NO': {
    type: 'numericProperty',
    value: 'Activation energy of NO* to NO',
    min: 0,
    max: 0,
    units: 'eV'
  },
  'Lattice parameter (a,b)': {
    type: 'numericProperty',
    value: 'Lattice parameter (a,b)',
    min: 5.518131487889273,
    max: 15.24034188034188,
    units: 'A'
  },
  Logσe: {
    type: 'numericProperty',
    value: 'Log\u03C3e',
    min: -7.703831284803433,
    max: 2.926495290165338,
    units: 'S/cm'
  },
  'Reaction enthalpy of NO* to N* + O*': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of NO* to N* + O*',
    min: -3.76,
    max: 2.82,
    units: 'eV'
  },
  'Reaction enthalpy of NO* to NO': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of NO* to NO',
    min: 0.045,
    max: 3.235,
    units: 'eV'
  },
  '\u03C3e(converted from log)': {
    type: 'numericProperty',
    value: '\u03C3e(converted from log)',
    min: 1.9777e-8,
    max: 844.2970856304804,
    units: 'S/cm'
  },
  'D0, basal': {
    type: 'numericProperty',
    value: 'D0, basal',
    min: 0.00000166,
    max: 0.00891,
    units: 'm2/s'
  },
  'D0, normal': {
    type: 'numericProperty',
    value: 'D0, normal',
    min: 0.00000137,
    max: 0.00956,
    units: 'm2/s'
  },
  'Q, basal': {
    type: 'numericProperty',
    value: 'Q, basal',
    min: 99.3,
    max: 273,
    units: 'kJ/mol'
  },
  'Specimen thickness': {
    type: 'numericProperty',
    value: 'Specimen thickness',
    min: 1,
    max: 2,
    units: 'mm'
  },
  '[Original] \u03C3T': {
    type: 'numericProperty',
    value: '[Original] \u03C3T',
    min: 0.017179516659329562,
    max: 178.8613117008538,
    units: 'S/cm'
  },
  'ln\u03C3eT (electronic)': {
    type: 'numericProperty',
    value: 'ln\u03C3eT (electronic)',
    min: 0.7398655145296544,
    max: 4.926806884680506,
    units: 'S\xB7K/cm'
  },
  θexp: {
    type: 'numericProperty',
    value: '\u03B8exp',
    min: 34,
    max: 1450,
    units: 'K'
  },
  'Density of states (Er)': {
    type: 'categoricalProperty',
    value: 'Density of states (Er)',
    options: []
  },
  'Density of states (La)': {
    type: 'categoricalProperty',
    value: 'Density of states (La)',
    options: []
  },
  J: {
    type: 'numericProperty',
    value: 'J',
    min: -2.0286930894108592,
    max: 1.845120400579578,
    units: 'cm3(STP)min-1cm-2'
  },
  'Surface Roughness': {
    type: 'numericProperty',
    value: 'Surface Roughness',
    min: 4,
    max: 80,
    units: '\u03BCm'
  },
  '[Original] \u03C3i T (ionic)': {
    type: 'numericProperty',
    value: '[Original] \u03C3i T (ionic)',
    min: 0.014993293269002367,
    max: 208.09072825749237,
    units: 'S\xB7K/cm'
  },
  '(\u03C3/Scm-1) (electronic)(converted from log)': {
    type: 'categoricalProperty',
    value: '(\u03C3/Scm-1) (electronic)(converted from log)',
    options: []
  },
  'Band gap energy (EgGW)': {
    type: 'numericProperty',
    value: 'Band gap energy (EgGW)',
    min: 0.8,
    max: 9.1,
    units: 'eV'
  },
  'Density of states (N)': {
    type: 'categoricalProperty',
    value: 'Density of states (N)',
    options: []
  },
  'In\u03C3T (electronic)': {
    type: 'numericProperty',
    value: 'In\u03C3T (electronic)',
    min: -8.603155352748937,
    max: 3.544248832549954,
    units: 'S\xB7K/cm'
  },
  'Lattice thermal conductivity (\u03BAL)': {
    type: 'numericProperty',
    value: 'Lattice thermal conductivity (\u03BAL)',
    min: 1.2,
    max: 1000,
    units: 'W/mK'
  },
  'Limiting Oxygen Index (LOI)': {
    type: 'numericProperty',
    value: 'Limiting Oxygen Index (LOI)',
    min: 15,
    max: 90,
    units: '%'
  },
  'Magnetic Moment per Formula Unit (value used for regression)': {
    type: 'numericProperty',
    value: 'Magnetic Moment per Formula Unit (value used for regression)',
    min: 0.52,
    max: 6,
    units: '\u03BCB'
  },
  'Magnetic Ordering Temperature': {
    type: 'numericProperty',
    value: 'Magnetic Ordering Temperature',
    min: 95,
    max: 1100,
    units: 'K'
  },
  'Maximum Operating Temperature': {
    type: 'numericProperty',
    value: 'Maximum Operating Temperature',
    min: 100,
    max: 2000,
    units: '\xB0C'
  },
  'Rockwell C Hardness': {
    type: 'categoricalProperty',
    value: 'Rockwell C Hardness',
    options: []
  },
  'Seebeck coefficients': {
    type: 'numericProperty',
    value: 'Seebeck coefficients',
    min: -1470,
    max: 637,
    units: '\u03BCV K-1'
  },
  'Sieve Analysis': {
    type: 'numericProperty',
    value: 'Sieve Analysis',
    min: 1,
    max: 95,
    units: 'wt%'
  },
  '[Original] log(\u03C3tT)': {
    type: 'numericProperty',
    value: '[Original] log(\u03C3tT)',
    min: -1.999431376936542,
    max: 1.744086715017177,
    units: 'S\xB7K/cm'
  },
  '[Original] \u03C3dcT': {
    type: 'numericProperty',
    value: '[Original] \u03C3dcT',
    min: 0.000001684549,
    max: 0.45995544584748566,
    units: 'S\xB7K/cm'
  },
  'log(\u03C3/Scm-1) (electronic)': {
    type: 'categoricalProperty',
    value: 'log(\u03C3/Scm-1) (electronic)',
    options: []
  },
  'Band gap energy (Egexpt)': {
    type: 'numericProperty',
    value: 'Band gap energy (Egexpt)',
    min: 0.6,
    max: 8.9,
    units: 'eV'
  },
  'Density of states (Sm)': {
    type: 'categoricalProperty',
    value: 'Density of states (Sm)',
    options: []
  },
  'Log10[A]': {
    type: 'categoricalProperty',
    value: 'Log10[A]',
    options: []
  },
  'Volume Resistivity': {
    type: 'numericProperty',
    value: 'Volume Resistivity',
    units: 'ohm-cm'
  },
  '[Original] log \u03C3 (ionic)': {
    type: 'numericProperty',
    value: '[Original] log \u03C3 (ionic)',
    min: -5.085746734809769,
    max: -0.8372553463815262,
    units: 'S/cm'
  },
  '\u03C3ion (ionic)(converted from log)': {
    type: 'numericProperty',
    value: '\u03C3ion (ionic)(converted from log)',
    min: 2.6990723403432054e-7,
    max: 0.44877302792541307,
    units: 'S/cm'
  },
  Planet: {
    type: 'categoricalProperty',
    value: 'Planet',
    options: []
  },
  'Speed of sound (c)': {
    type: 'numericProperty',
    value: 'Speed of sound (c)',
    min: 295.1,
    max: 340.3,
    units: 'm/s'
  },
  'Viscosity (\u03BC)': {
    type: 'numericProperty',
    value: 'Viscosity (\u03BC)',
    min: 0.00001422,
    max: 0.00001789,
    units: 'kg/m.s'
  },
  'Abbe Number (vd)': {
    type: 'categoricalProperty',
    value: 'Abbe Number (vd)',
    options: []
  },
  'CAS registry no.': {
    type: 'categoricalProperty',
    value: 'CAS registry no.',
    options: []
  },
  'Coefficient of Thermal Expansion': {
    type: 'numericProperty',
    value: 'Coefficient of Thermal Expansion',
    min: 0.05,
    max: 18.85,
    units: '10-6/\xB0C'
  },
  'Conductivity, \u03C3 (electronic)': {
    type: 'numericProperty',
    value: 'Conductivity, \u03C3 (electronic)',
    min: 0.000010396437,
    max: 0.035553076963491,
    units: 'S/cm'
  },
  'Electronic conductivity \u03C3': {
    type: 'numericProperty',
    value: 'Electronic conductivity \u03C3',
    min: 0.0025,
    max: 0.0853,
    units: 'S/cm'
  },
  'Index of Refraction (nd)': {
    type: 'categoricalProperty',
    value: 'Index of Refraction (nd)',
    options: []
  },
  'Solubility of Mo in \u03B1': {
    type: 'numericProperty',
    value: 'Solubility of Mo in \u03B1',
    min: 0.000456,
    max: 0.894351,
    units: 'wt%'
  },
  'Bulk Density': {
    type: 'numericProperty',
    value: 'Bulk Density',
    min: 0.4,
    max: 1.05,
    units: 'g/cm3'
  },
  'Density of states (C)': {
    type: 'categoricalProperty',
    value: 'Density of states (C)',
    options: []
  },
  'Dielectric constant (\u03B5)': {
    type: 'categoricalProperty',
    value: 'Dielectric constant (\u03B5)',
    options: []
  },
  'Dipole moment (\u03BC)': {
    type: 'numericProperty',
    value: 'Dipole moment (\u03BC)',
    min: 0,
    max: 5.54,
    units: 'D'
  },
  'Molar refraction (RD)': {
    type: 'categoricalProperty',
    value: 'Molar refraction (RD)',
    options: []
  },
  'Refractive index (nD)': {
    type: 'categoricalProperty',
    value: 'Refractive index (nD)',
    options: []
  },
  'Shore D Hardness': {
    type: 'categoricalProperty',
    value: 'Shore D Hardness',
    options: []
  },
  'Transport number of oxide ion': {
    type: 'categoricalProperty',
    value: 'Transport number of oxide ion',
    options: []
  },
  'Binding energy of O': {
    type: 'numericProperty',
    value: 'Binding energy of O',
    min: -4.25,
    max: 7,
    units: 'eV'
  },
  'Conductivity \u03C3': {
    type: 'numericProperty',
    value: 'Conductivity \u03C3',
    min: 0.000149,
    max: 0.156,
    units: 'S/cm'
  },
  'Density of states (Cs)': {
    type: 'categoricalProperty',
    value: 'Density of states (Cs)',
    options: []
  },
  'Density of states (Ho)': {
    type: 'categoricalProperty',
    value: 'Density of states (Ho)',
    options: []
  },
  'Knoop Hardness': {
    type: 'categoricalProperty',
    value: 'Knoop Hardness',
    options: []
  },
  'Phases present': {
    type: 'categoricalProperty',
    value: 'Phases present',
    options: []
  },
  'Specific Gravity': {
    type: 'categoricalProperty',
    value: 'Specific Gravity',
    options: []
  },
  'Specimen length': {
    type: 'numericProperty',
    value: 'Specimen length',
    min: 10,
    max: 15,
    units: 'mm'
  },
  'Specimen width': {
    type: 'numericProperty',
    value: 'Specimen width',
    min: 1,
    max: 4,
    units: 'mm'
  },
  Tg: {
    type: 'numericProperty',
    value: 'Tg',
    min: -60,
    max: 350,
    units: '\xB0C'
  },
  '(\u03C30) (electronic)(converted from log)': {
    type: 'numericProperty',
    value: '(\u03C30) (electronic)(converted from log)',
    min: 9.70623e-7,
    max: 0.00029670533649307063,
    units: 'S/cm'
  },
  'Activation energy of CO* to CO': {
    type: 'numericProperty',
    value: 'Activation energy of CO* to CO',
    min: -1.25,
    max: 5.733,
    units: 'eV'
  },
  'Density of states (Yb)': {
    type: 'categoricalProperty',
    value: 'Density of states (Yb)',
    options: []
  },
  Fusibility: {
    type: 'categoricalProperty',
    value: 'Fusibility',
    options: []
  },
  'Glass transition temperature (Tg)': {
    type: 'numericProperty',
    value: 'Glass transition temperature (Tg)',
    min: 0,
    max: 750,
    units: '\xB0F'
  },
  'Solubility Product': {
    type: 'categoricalProperty',
    value: 'Solubility Product',
    options: []
  },
  '[Original] log\u03C3i': {
    type: 'numericProperty',
    value: '[Original] log\u03C3i',
    min: -5.43829206587177,
    max: -2.4031366394153055,
    units: 'S/cm'
  },
  'log(\u03C30) (electronic)': {
    type: 'numericProperty',
    value: 'log(\u03C30) (electronic)',
    min: -6.012949211587825,
    max: -3.5276746424642464,
    units: 'S/cm'
  },
  ε1cu: {
    type: 'numericProperty',
    value: '\u03B51cu',
    min: 7160,
    max: 19800,
    units: '\u03BC\u03B5'
  },
  'Activation energy (Ea)': {
    type: 'numericProperty',
    value: 'Activation energy (Ea)',
    min: 0.1567,
    max: 1.3,
    units: 'eV'
  },
  'Density of states (Hf)': {
    type: 'categoricalProperty',
    value: 'Density of states (Hf)',
    options: []
  },
  'Density of states (Ta)': {
    type: 'categoricalProperty',
    value: 'Density of states (Ta)',
    options: []
  },
  'Error in lattice parameter measurements': {
    type: 'numericProperty',
    value: 'Error in lattice parameter measurements',
    min: 0,
    max: 0.004,
    units: 'A'
  },
  ΔHt: {
    type: 'numericProperty',
    value: '\u0394Ht',
    min: 0.113,
    max: 0.338,
    units: 'eV'
  },
  ΔSm: {
    type: 'numericProperty',
    value: '\u0394Sm',
    min: -0.076,
    max: 5.7,
    units: 'k'
  },
  ΔSt: {
    type: 'numericProperty',
    value: '\u0394St',
    min: 1.502,
    max: 4.494,
    units: 'k'
  },
  'Heat Deflection Temperature At 1.82 MPa (264 psi)': {
    type: 'numericProperty',
    value: 'Heat Deflection Temperature At 1.82 MPa (264 psi)',
    min: 4,
    max: 430,
    units: '\xB0C'
  },
  'Impact Strength: Notched Izod': {
    type: 'numericProperty',
    value: 'Impact Strength: Notched Izod',
    min: 14,
    max: 530,
    units: 'J/m'
  },
  'Melting temperature (Tm)': {
    type: 'numericProperty',
    value: 'Melting temperature (Tm)',
    min: 692,
    max: 3820,
    units: 'K'
  },
  'Mischmetal type': {
    type: 'categoricalProperty',
    value: 'Mischmetal type',
    options: []
  },
  'Miscibility with Water': {
    type: 'categoricalProperty',
    value: 'Miscibility with Water',
    options: []
  },
  'Temp. Of Deflection Under Load': {
    type: 'numericProperty',
    value: 'Temp. Of Deflection Under Load',
    min: 46,
    max: 181,
    units: '\xB0C'
  },
  'Threshold limits': {
    type: 'numericProperty',
    value: 'Threshold limits',
    min: 0.5,
    max: 600,
    units: 'ppm'
  },
  'Water content': {
    type: 'numericProperty',
    value: 'Water content',
    min: 0,
    max: 100,
    units: '%'
  },
  Chemistry: {
    type: 'categoricalProperty',
    value: 'Chemistry',
    options: []
  },
  'Density of states (Tb)': {
    type: 'categoricalProperty',
    value: 'Density of states (Tb)',
    options: []
  },
  'Izod impact, notched': {
    type: 'numericProperty',
    value: 'Izod impact, notched',
    min: 30,
    max: 1065,
    units: 'J/m'
  },
  'Pellet length': {
    type: 'numericProperty',
    value: 'Pellet length',
    units: 'mm'
  },
  Ti: {
    type: 'chemicalFormula',
    value: 'Ti'
  },
  'ln[\u03C3n,1T] (ionic)': {
    type: 'numericProperty',
    value: 'ln[\u03C3n,1T] (ionic)',
    min: -9.057047791893538,
    max: 2.5485480943738645,
    units: 'S\xB7K/cm'
  },
  'log\u03C3i (ionic)': {
    type: 'numericProperty',
    value: 'log\u03C3i (ionic)',
    min: -7.599560234391694,
    max: -1.6281393753303863,
    units: 'S/cm'
  },
  '% of Theoretical density': {
    type: 'numericProperty',
    value: '% of Theoretical density',
    min: 86.5,
    max: 99,
    units: '\\%'
  },
  '(\u03C3*T)(converted from log)': {
    type: 'numericProperty',
    value: '(\u03C3*T)(converted from log)',
    min: 0.00022156727577851793,
    max: 4.484204325419169,
    units: 'S\xB7K/cm'
  },
  '(\u03C3*T/S\xB7K/cm)(converted from log)': {
    type: 'categoricalProperty',
    value: '(\u03C3*T/S\xB7K/cm)(converted from log)',
    options: []
  },
  '1000T': {
    type: 'numericProperty',
    value: '1000T',
    min: -4.783253369888051,
    max: -0.8068768562942658,
    units: 'K-1'
  },
  'Activation energy of H* to H': {
    type: 'numericProperty',
    value: 'Activation energy of H* to H',
    min: 0.330653474,
    max: 3.58,
    units: 'eV'
  },
  'Bulk modulus (K)': {
    type: 'numericProperty',
    value: 'Bulk modulus (K)',
    min: 17,
    max: 320,
    units: 'GPa'
  },
  'D.C. resistivity': {
    type: 'numericProperty',
    value: 'D.C. resistivity',
    min: 8.41,
    max: 10235,
    units: '\u03A9 cm'
  },
  'Lattice Constant b': {
    type: 'numericProperty',
    value: 'Lattice Constant b',
    min: 3.98,
    max: 41.714,
    units: 'A'
  },
  'Log(\u03C3*T)': {
    type: 'numericProperty',
    value: 'Log(\u03C3*T)',
    min: -3.6544943820224636,
    max: 0.6516853932584263,
    units: 'S\xB7K/cm'
  },
  'Log(\u03C3*T/S\xB7K/cm)': {
    type: 'categoricalProperty',
    value: 'Log(\u03C3*T/S\xB7K/cm)',
    options: []
  },
  'Log\u03C3ion (ionic)': {
    type: 'numericProperty',
    value: 'Log\u03C3ion (ionic)',
    min: -1.2765311556896852,
    max: -0.3479732528551984,
    units: 'S/cm'
  },
  'Mold temp': {
    type: 'numericProperty',
    value: 'Mold temp',
    min: 24016,
    max: 24016,
    units: '\xB0C'
  },
  'Processing temp': {
    type: 'numericProperty',
    value: 'Processing temp',
    units: '\xB0C'
  },
  'Reaction enthalpy of H* to H': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of H* to H',
    min: -0.470604782,
    max: 3.58,
    units: 'eV'
  },
  Shrink: {
    type: 'numericProperty',
    value: 'Shrink',
    units: '%'
  },
  'log \u03C3i (ionic)': {
    type: 'numericProperty',
    value: 'log \u03C3i (ionic)',
    min: -4.24415584415584,
    max: 0.37015281940570843,
    units: 'S/cm'
  },
  εtu2: {
    type: 'numericProperty',
    value: '\u03B5tu2',
    min: 2620,
    max: 12300,
    units: '\u03BC\u03B5'
  },
  σ0c: {
    type: 'numericProperty',
    value: '\u03C30c',
    min: 9.692169291248902,
    max: 977.5104461647276,
    units: 'S\xB7K/cm'
  },
  σgb: {
    type: 'numericProperty',
    value: '\u03C3gb',
    min: 0.014018691588784993,
    max: 1.7266355140186913,
    units: 'S/cm'
  },
  σgbT: {
    type: 'numericProperty',
    value: '\u03C3gbT',
    min: 5.78067e-7,
    max: 0.000011243295,
    units: 'S\xB7K/cm-1'
  },
  'Average Particle Size': {
    type: 'numericProperty',
    value: 'Average Particle Size',
    min: 40,
    max: 95,
    units: 'microns'
  },
  'Compatibility with Water (weight % of solvents)': {
    type: 'categoricalProperty',
    value: 'Compatibility with Water (weight % of solvents)',
    options: []
  },
  'Debye temperature': {
    type: 'numericProperty',
    value: 'Debye temperature',
    min: 160,
    max: 1860,
    units: 'K'
  },
  'Density of states (Zr)': {
    type: 'categoricalProperty',
    value: 'Density of states (Zr)',
    options: []
  },
  'Elongation At Yield': {
    type: 'numericProperty',
    value: 'Elongation At Yield',
    min: 1.4,
    max: 27,
    units: '%'
  },
  'Minimum thickness': {
    type: 'numericProperty',
    value: 'Minimum thickness',
    min: 0.75,
    max: 1.5,
    units: 'mm'
  },
  'Poisson\'s ratio (v)': {
    type: 'categoricalProperty',
    value: 'Poisson\'s ratio (v)',
    options: []
  },
  'Rockwell Hardness': {
    type: 'numericProperty',
    value: 'Rockwell Hardness',
    units: 'Scale M'
  },
  'Shear modulus (G)': {
    type: 'numericProperty',
    value: 'Shear modulus (G)',
    min: 6.1,
    max: 161,
    units: 'GPa'
  },
  'Thermal expansion coefficient': {
    type: 'numericProperty',
    value: 'Thermal expansion coefficient',
    min: 9.7,
    max: 11.4,
    units: '10-6 K-1'
  },
  'Water Absorption After 24 Hours': {
    type: 'numericProperty',
    value: 'Water Absorption After 24 Hours',
    min: 0,
    max: 2.3,
    units: '%'
  },
  'Young\'s modulus (E)': {
    type: 'numericProperty',
    value: 'Young\'s modulus (E)',
    min: 20,
    max: 411,
    units: 'GPa'
  },
  'Breaking strain (\u03B5f)': {
    type: 'numericProperty',
    value: 'Breaking strain (\u03B5f)',
    min: 0,
    max: 500,
    units: '%'
  },
  'Bulk density': {
    type: 'numericProperty',
    value: 'Bulk density',
    min: 80,
    max: 94,
    units: '%'
  },
  'Clearing point (Tc)': {
    type: 'numericProperty',
    value: 'Clearing point (Tc)',
    min: 311.65,
    max: 513.05,
    units: 'K'
  },
  Cost: {
    type: 'numericProperty',
    value: 'Cost',
    min: 0.05,
    max: 315,
    units: '/kg'
  },
  'Density of states (Ce)': {
    type: 'categoricalProperty',
    value: 'Density of states (Ce)',
    options: []
  },
  'Fracture toughness (Kc)': {
    type: 'numericProperty',
    value: 'Fracture toughness (Kc)',
    min: 0.074,
    max: 140,
    units: 'MN.m-3/2'
  },
  'Gas constant (R)': {
    type: 'numericProperty',
    value: 'Gas constant (R)',
    min: 0.05202,
    max: 4.124,
    units: 'kJ/kg.K'
  },
  Machinability: {
    type: 'categoricalProperty',
    value: 'Machinability',
    options: []
  },
  'Molar mass (M)': {
    type: 'numericProperty',
    value: 'Molar mass (M)',
    min: 2.016,
    max: 159.81,
    units: 'kg/kmol'
  },
  'Pellet density': {
    type: 'numericProperty',
    value: 'Pellet density',
    min: 98,
    max: 98,
    units: '%'
  },
  'Poissons ratio (v)': {
    type: 'categoricalProperty',
    value: 'Poissons ratio (v)',
    options: []
  },
  'Polarity [ET(30)]': {
    type: 'numericProperty',
    value: 'Polarity [ET(30)]',
    min: 47.7,
    max: 61.4,
    units: 'S/m'
  },
  'Shear Modulus (G)': {
    type: 'numericProperty',
    value: 'Shear Modulus (G)',
    min: 0.0005,
    max: 270,
    units: 'GPa'
  },
  'Specific heat (Cv)': {
    type: 'numericProperty',
    value: 'Specific heat (Cv)',
    min: 0.09499,
    max: 10.18,
    units: 'kJ/kg.K'
  },
  'Thermal expansion (\u03B1)': {
    type: 'numericProperty',
    value: 'Thermal expansion (\u03B1)',
    min: 0.000004,
    max: 0.000225,
    units: '/\xB0C'
  },
  'Ultimate tensile strength (\u03C3f)': {
    type: 'numericProperty',
    value: 'Ultimate tensile strength (\u03C3f)',
    min: 0.7,
    max: 1550,
    units: 'MPa'
  },
  'Water absorption': {
    type: 'numericProperty',
    value: 'Water absorption',
    min: 0,
    max: 1.4,
    units: '%'
  },
  'Yield stress (\u03C3y)': {
    type: 'numericProperty',
    value: 'Yield stress (\u03C3y)',
    min: 1.4,
    max: 9800,
    units: 'MPa'
  },
  ν12t: {
    type: 'categoricalProperty',
    value: '\u03BD12t',
    options: []
  },
  'Density of states (Lu)': {
    type: 'categoricalProperty',
    value: 'Density of states (Lu)',
    options: []
  },
  'Ea(Low temp/High temp)': {
    type: 'numericProperty',
    value: 'Ea(Low temp/High temp)',
    min: 0.62,
    max: 1.28,
    units: 'eV'
  },
  'Lattice thermal conductivity (\u03BAanh)': {
    type: 'numericProperty',
    value: 'Lattice thermal conductivity (\u03BAanh)',
    min: 0.508,
    max: 109,
    units: 'W/(m.K)'
  },
  'Log\u03C3T (ionic)': {
    type: 'numericProperty',
    value: 'Log\u03C3T (ionic)',
    min: -1.0253518370142927,
    max: 1.3188903296044623,
    units: 'S\xB7K/cm'
  },
  'Modulus of elasticity': {
    type: 'numericProperty',
    value: 'Modulus of elasticity',
    min: 0.29,
    max: 420,
    units: 'GPa'
  },
  'Open circuit potential': {
    type: 'numericProperty',
    value: 'Open circuit potential',
    min: 0.7472141158668395,
    max: 0.8603653264159099,
    units: 'V'
  },
  'R-factor': {
    type: 'categoricalProperty',
    value: 'R-factor',
    options: []
  },
  'Solubility in methanol': {
    type: 'numericProperty',
    value: 'Solubility in methanol',
    min: 1.8,
    max: 40.67,
    units: 'g/100g'
  },
  Surfactant: {
    type: 'categoricalProperty',
    value: 'Surfactant',
    options: []
  },
  T0: {
    type: 'categoricalProperty',
    value: 'T0',
    options: []
  },
  'Vicat Softening Temperature': {
    type: 'numericProperty',
    value: 'Vicat Softening Temperature',
    min: 50,
    max: 214,
    units: '\xB0C'
  },
  'Vicker\'s hardness (Hv)': {
    type: 'numericProperty',
    value: 'Vicker\'s hardness (Hv)',
    min: 1.67,
    max: 34.3,
    units: 'GPa'
  },
  anthophyllte: {
    type: 'categoricalProperty',
    value: 'anthophyllte',
    options: []
  },
  κanh: {
    type: 'numericProperty',
    value: '\u03BAanh',
    min: 0.508,
    max: 109,
    units: 'W/(m\xB7K)'
  },
  '\u03C3e (electronic)(converted from log)': {
    type: 'numericProperty',
    value: '\u03C3e (electronic)(converted from log)',
    min: 6.01415e-7,
    max: 0.00015278046266286634,
    units: 'S/cm'
  },
  'Activation energy of H* to 1/2 H2': {
    type: 'numericProperty',
    value: 'Activation energy of H* to 1/2 H2',
    min: -2.131,
    max: 1.256,
    units: 'eV'
  },
  'Coefficient of liner thermal expansion': {
    type: 'numericProperty',
    value: 'Coefficient of liner thermal expansion',
    min: 0.9,
    max: 11.1,
    units: 'in/in/\xB0F E-5'
  },
  'Density of states (Tl)': {
    type: 'categoricalProperty',
    value: 'Density of states (Tl)',
    options: []
  },
  'Density of states (Tm)': {
    type: 'categoricalProperty',
    value: 'Density of states (Tm)',
    options: []
  },
  'Hardness (Vickers)': {
    type: 'numericProperty',
    value: 'Hardness (Vickers)',
    min: 83,
    max: 436,
    units: 'HV0.5'
  },
  'Reaction enthalpy of H* to 1/2 H2': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of H* to 1/2 H2',
    min: -2.131,
    max: 1.256,
    units: 'eV'
  },
  κexp: {
    type: 'numericProperty',
    value: '\u03BAexp',
    min: 2.5,
    max: 3000,
    units: 'W/(m\xB7K)'
  },
  '\u03C3 at 500\xB0C': {
    type: 'numericProperty',
    value: '\u03C3 at 500\xB0C',
    min: 5.4e-7,
    max: 0.013,
    units: 'S/cm'
  },
  σh: {
    type: 'numericProperty',
    value: '\u03C3h',
    min: 4.2824e-8,
    max: 0.007564558221941298,
    units: '^bcm-1'
  },
  '50% FATT': {
    type: 'categoricalProperty',
    value: '50% FATT',
    options: []
  },
  'Activation energy of H*1 to *1 + H*': {
    type: 'numericProperty',
    value: 'Activation energy of H*1 to *1 + H*',
    min: 0,
    max: 0.38,
    units: 'eV'
  },
  'Activation energy of H*2 to *2 + H*1': {
    type: 'numericProperty',
    value: 'Activation energy of H*2 to *2 + H*1',
    min: 0.05,
    max: 1,
    units: 'eV'
  },
  'Activation energy of NH3* to NH3': {
    type: 'numericProperty',
    value: 'Activation energy of NH3* to NH3',
    min: 0,
    max: 0.86,
    units: 'eV'
  },
  'C/a ratio': {
    type: 'categoricalProperty',
    value: 'C/a ratio',
    options: []
  },
  'Cell Angle': {
    type: 'numericProperty',
    value: 'Cell Angle',
    min: 98.412,
    max: 99.307,
    units: '\xB0 (degree'
  },
  'Density of states (Co)': {
    type: 'categoricalProperty',
    value: 'Density of states (Co)',
    options: []
  },
  'Dispersion comp. of SFE': {
    type: 'numericProperty',
    value: 'Dispersion comp. of SFE',
    min: 27,
    max: 35,
    units: 'mN/m'
  },
  'Glass Transition (Tg)': {
    type: 'numericProperty',
    value: 'Glass Transition (Tg)',
    min: 51,
    max: 161,
    units: '\xB0C'
  },
  'Pellet thickness': {
    type: 'numericProperty',
    value: 'Pellet thickness',
    min: 1.6,
    max: 1.6,
    units: 'mm'
  },
  'Polar comp. of SFE': {
    type: 'numericProperty',
    value: 'Polar comp. of SFE',
    min: 0,
    max: 14,
    units: 'mN/m'
  },
  'Reaction enthalpy of H*1 to *1 + H*': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of H*1 to *1 + H*',
    min: -2.11,
    max: -0.3,
    units: 'eV'
  },
  'Reaction enthalpy of H*2 to *2 + H*1': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of H*2 to *2 + H*1',
    min: -0.83,
    max: 0.78,
    units: 'eV'
  },
  'Reaction enthalpy of NH3* to NH3': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of NH3* to NH3',
    min: 0.07,
    max: 1.45,
    units: 'eV'
  },
  'Resistance to transportation fluids': {
    type: 'categoricalProperty',
    value: 'Resistance to transportation fluids',
    options: []
  },
  'Surface Roughness (RA)': {
    type: 'numericProperty',
    value: 'Surface Roughness (RA)',
    units: '\u03BCm'
  },
  'Surface free energy (SFE)': {
    type: 'numericProperty',
    value: 'Surface free energy (SFE)',
    min: 20,
    max: 45,
    units: 'mN/m'
  },
  'Tear Resistance': {
    type: 'numericProperty',
    value: 'Tear Resistance',
    units: 'kN/m'
  },
  'Vicker\'s Hardness': {
    type: 'numericProperty',
    value: 'Vicker\'s Hardness',
    min: 7.2,
    max: 63,
    units: 'GPa'
  },
  'Activation energy (E)': {
    type: 'numericProperty',
    value: 'Activation energy (E)',
    min: 0.43,
    max: 2.08,
    units: 'eV'
  },
  'Adsorption energy of Benzene': {
    type: 'numericProperty',
    value: 'Adsorption energy of Benzene',
    min: -0.31,
    max: 2.88,
    units: 'eV'
  },
  'Adsorption energy of H': {
    type: 'numericProperty',
    value: 'Adsorption energy of H',
    min: -3.07,
    max: 3.05,
    units: 'eV'
  },
  'Brinell hardness': {
    type: 'categoricalProperty',
    value: 'Brinell hardness',
    options: []
  },
  'Coherence Length': {
    type: 'numericProperty',
    value: 'Coherence Length',
    min: 0.93,
    max: 8100,
    units: '\u03C3'
  },
  'Density of states (Ti)': {
    type: 'categoricalProperty',
    value: 'Density of states (Ti)',
    options: []
  },
  'Dopant concentration': {
    type: 'numericProperty',
    value: 'Dopant concentration',
    min: 0.05,
    max: 40,
    units: '%'
  },
  'Drying temp': {
    type: 'numericProperty',
    value: 'Drying temp',
    units: '\xB0C'
  },
  'Drying time': {
    type: 'numericProperty',
    value: 'Drying time',
    units: 'hours'
  },
  Logσdc: {
    type: 'numericProperty',
    value: 'Log\u03C3dc',
    min: -3.791183256290882,
    max: -0.10138180254529472,
    units: 'S\xB7K/cm'
  },
  '\u03C3dc(converted from log)': {
    type: 'numericProperty',
    value: '\u03C3dc(converted from log)',
    min: 0.0001617397411438428,
    max: 0.7918049226900974,
    units: 'S\xB7K/cm'
  },
  '(\u03C3gbT) (grainboundry)(converted from log)': {
    type: 'numericProperty',
    value: '(\u03C3gbT) (grainboundry)(converted from log)',
    min: 0.021393081126759576,
    max: 94.83153057805447,
    units: 'S\xB7K/cm'
  },
  'Density of states (Nb)': {
    type: 'categoricalProperty',
    value: 'Density of states (Nb)',
    options: []
  },
  'Electrical Dissipation At 1 MHz': {
    type: 'categoricalProperty',
    value: 'Electrical Dissipation At 1 MHz',
    options: []
  },
  'Eluant strength': {
    type: 'categoricalProperty',
    value: 'Eluant strength',
    options: []
  },
  'Izod Impact Strength': {
    type: 'numericProperty',
    value: 'Izod Impact Strength',
    min: 29,
    max: 440,
    units: 'J/m'
  },
  'Izod impact strength': {
    type: 'numericProperty',
    value: 'Izod impact strength',
    min: 2,
    max: 91,
    units: 'ft\xB7lb'
  },
  'Martensite finish temperature (B19), Mf': {
    type: 'numericProperty',
    value: 'Martensite finish temperature (B19), Mf',
    min: 207.2,
    max: 337.1,
    units: 'K'
  },
  'Martensite peak temperature (B19), Mp': {
    type: 'numericProperty',
    value: 'Martensite peak temperature (B19), Mp',
    min: 200.1,
    max: 343,
    units: 'K'
  },
  'Martensite start temperature (B19), Ms': {
    type: 'numericProperty',
    value: 'Martensite start temperature (B19), Ms',
    min: 196,
    max: 351.9,
    units: 'K'
  },
  'Optical phonon energy': {
    type: 'categoricalProperty',
    value: 'Optical phonon energy',
    options: []
  },
  'Ratio (\u03B1s/\u03B5)': {
    type: 'categoricalProperty',
    value: 'Ratio (\u03B1s/\u03B5)',
    options: []
  },
  'Reaction enthalpy of NH2* to H* + NH*': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of NH2* to H* + NH*',
    min: -0.964,
    max: 1.967,
    units: 'eV'
  },
  'Shore A Hardness': {
    type: 'categoricalProperty',
    value: 'Shore A Hardness',
    options: []
  },
  'Solar absorptivity (\u03B1s)': {
    type: 'categoricalProperty',
    value: 'Solar absorptivity (\u03B1s)',
    options: []
  },
  'Solid Density': {
    type: 'numericProperty',
    value: 'Solid Density',
    min: 1.12,
    max: 1.78,
    units: 'g/cm3'
  },
  'Solubility in acetone': {
    type: 'categoricalProperty',
    value: 'Solubility in acetone',
    options: []
  },
  'log(\u03C3gbT) (grain-boundry)': {
    type: 'numericProperty',
    value: 'log(\u03C3gbT) (grain-boundry)',
    min: -1.9769527601156995,
    max: 1.6697266618995161,
    units: 'S\xB7K/cm'
  },
  'Activation energy of H2O* to H2O': {
    type: 'numericProperty',
    value: 'Activation energy of H2O* to H2O',
    min: 0,
    max: 0,
    units: 'eV'
  },
  'Chemical Resistance': {
    type: 'categoricalProperty',
    value: 'Chemical Resistance',
    options: []
  },
  'Emission enhancement': {
    type: 'numericProperty',
    value: 'Emission enhancement',
    min: 0.2,
    max: 105,
    units: 'times'
  },
  'Enthalpy of Formation\xA0': {
    type: 'numericProperty',
    value: 'Enthalpy of Formation\xA0',
    min: -0.67,
    max: -0.05,
    units: 'eV/atom'
  },
  'Enthalpy of given compound is within 30meV per atom from that of its most favorable balanced decomposition (potentially decomposable)': {
    type: 'categoricalProperty',
    value: 'Enthalpy of given compound is within 30meV per atom from that of its most favorable balanced decomposition (potentially decomposable)',
    options: []
  },
  'Entropic Temperature\xA0': {
    type: 'numericProperty',
    value: 'Entropic Temperature\xA0',
    min: 529,
    max: 7474,
    units: 'K'
  },
  'La site': {
    type: 'categoricalProperty',
    value: 'La site',
    options: []
  },
  'Magnetic Ordering Temperature (value used for ML)': {
    type: 'numericProperty',
    value: 'Magnetic Ordering Temperature (value used for ML)',
    min: 95,
    max: 1100,
    units: 'K'
  },
  Oxygen: {
    type: 'categoricalProperty',
    value: 'Oxygen',
    options: []
  },
  'Plasmonic material': {
    type: 'categoricalProperty',
    value: 'Plasmonic material',
    options: []
  },
  'Reaction enthalpy of H2O* to H2O': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of H2O* to H2O',
    min: 0.026,
    max: 0.575,
    units: 'eV'
  },
  Shape: {
    type: 'categoricalProperty',
    value: 'Shape',
    options: []
  },
  'Spin Polarization at the Fermi Level': {
    type: 'categoricalProperty',
    value: 'Spin Polarization at the Fermi Level',
    options: []
  },
  'Unit cell parameter': {
    type: 'numericProperty',
    value: 'Unit cell parameter',
    min: 5.08,
    max: 5.143068592057762,
    units: 'A'
  },
  '[Original] Conductivity (ionic)': {
    type: 'numericProperty',
    value: '[Original] Conductivity (ionic)',
    min: 0.000006165883,
    max: 0.07412201222225842,
    units: 'S/cm'
  },
  'c/a Ratio for Tetragonal Cells\xA0': {
    type: 'numericProperty',
    value: 'c/a Ratio for Tetragonal Cells\xA0',
    min: 5.63,
    max: 6.37,
    units: 'A'
  },
  γexp: {
    type: 'categoricalProperty',
    value: '\u03B3exp',
    options: []
  },
  '\u03C3 (electrical)(converted from log)': {
    type: 'numericProperty',
    value: '\u03C3 (electrical)(converted from log)',
    min: 0.0000019063712878941333,
    max: 0.308952998918457,
    units: 'S/cm'
  },
  σ800a: {
    type: 'numericProperty',
    value: '\u03C3800a',
    min: -50,
    max: 88,
    units: 'mS/cm'
  },
  'Adsorption energy of H2O': {
    type: 'numericProperty',
    value: 'Adsorption energy of H2O',
    min: -0.44,
    max: 0.66,
    units: 'eV'
  },
  'Bending strength': {
    type: 'numericProperty',
    value: 'Bending strength',
    min: 80,
    max: 1200,
    units: 'MPa'
  },
  'Conductivity, \u03C3 (ionic)': {
    type: 'numericProperty',
    value: 'Conductivity, \u03C3 (ionic)',
    min: 0.0007505289844409637,
    max: 0.026320322343637563,
    units: 'S/cm'
  },
  'Crystallite sizes': {
    type: 'numericProperty',
    value: 'Crystallite sizes',
    units: 'A'
  },
  'Density of states (Dy)': {
    type: 'categoricalProperty',
    value: 'Density of states (Dy)',
    options: []
  },
  'Final purity': {
    type: 'numericProperty',
    value: 'Final purity',
    units: '%'
  },
  'Green density': {
    type: 'numericProperty',
    value: 'Green density',
    units: '% of theoretical density'
  },
  'Hardness (Shore D)': {
    type: 'categoricalProperty',
    value: 'Hardness (Shore D)',
    options: []
  },
  'Log(G/S/cm)': {
    type: 'categoricalProperty',
    value: 'Log(G/S/cm)',
    options: []
  },
  'Mobility (\u03BCexpe)': {
    type: 'numericProperty',
    value: 'Mobility (\u03BCexpe)',
    min: 5.5,
    max: 340,
    units: 'cm2V-1s-1'
  },
  'Mobility (\u03BCexph)': {
    type: 'numericProperty',
    value: 'Mobility (\u03BCexph)',
    min: 1,
    max: 200,
    units: 'cm2V-1s-1'
  },
  'Proof Strength': {
    type: 'numericProperty',
    value: 'Proof Strength',
    min: 92,
    max: 850,
    units: 'MPa'
  },
  Purity: {
    type: 'numericProperty',
    value: 'Purity',
    min: 97.5,
    max: 97.5,
    units: '%'
  },
  'Surface tension (\u03C3s)': {
    type: 'numericProperty',
    value: 'Surface tension (\u03C3s)',
    min: 2.36,
    max: 5.47,
    units: 'Pa.cm'
  },
  'van der Waals radius': {
    type: 'numericProperty',
    value: 'van der Waals radius',
    min: 120,
    max: 244,
    units: 'pm'
  },
  'Co-dopant': {
    type: 'categoricalProperty',
    value: 'Co-dopant',
    options: []
  },
  'Crystal form': {
    type: 'categoricalProperty',
    value: 'Crystal form',
    options: []
  },
  'Lambda Max': {
    type: 'numericProperty',
    value: 'Lambda Max',
    min: 192,
    max: 594,
    units: 'nm'
  },
  'LogPp and logPn': {
    type: 'numericProperty',
    value: 'LogPp and logPn',
    min: -24.871852949010954,
    max: 5.416575472386368,
    units: 'atm'
  },
  'Max continuous service temperature in air': {
    type: 'numericProperty',
    value: 'Max continuous service temperature in air',
    min: 140,
    max: 500,
    units: '\xB0F'
  },
  'Surface Finish': {
    type: 'numericProperty',
    value: 'Surface Finish',
    min: 1.25,
    max: 15,
    units: '\u03BCm Ra'
  },
  '[Original] ln\u03C3T': {
    type: 'numericProperty',
    value: '[Original] ln\u03C3T',
    min: -3.6434996442730965,
    max: 5.0594354225277955,
    units: 'S\xB7K/cm'
  },
  '[Original] log \u03C3i (ionic)': {
    type: 'numericProperty',
    value: '[Original] log \u03C3i (ionic)',
    min: -4.24415584415584,
    max: 0.37015281940570843,
    units: 'S/cm'
  },
  'ln (sT)': {
    type: 'numericProperty',
    value: 'ln (sT)',
    min: -1.8635170603674442,
    max: 4.787401574803151,
    units: 'S/cm'
  },
  '(\u03C3T) (grainboundary)(converted from log)': {
    type: 'numericProperty',
    value: '(\u03C3T) (grainboundary)(converted from log)',
    min: 26364.684649455103,
    max: 517038523.52416563,
    units: 'S\xB7K/cm'
  },
  'Activation energy of H2O* to H* + OH*': {
    type: 'numericProperty',
    value: 'Activation energy of H2O* to H* + OH*',
    min: 0,
    max: 2.023,
    units: 'eV'
  },
  'Binding energy of H': {
    type: 'numericProperty',
    value: 'Binding energy of H',
    min: -2.11,
    max: 293.6,
    units: 'eV'
  },
  Colour: {
    type: 'categoricalProperty',
    value: 'Colour',
    options: []
  },
  'Comments (the estimated amount of additional phases is in volume percentage which corresponds to the samples used for heat content measurement.)': {
    type: 'categoricalProperty',
    value: 'Comments (the estimated amount of additional phases is in volume percentage which corresponds to the samples used for heat content measurement.)',
    options: []
  },
  Dopants: {
    type: 'categoricalProperty',
    value: 'Dopants',
    options: []
  },
  'Electronic conductivity \u03C3t': {
    type: 'numericProperty',
    value: 'Electronic conductivity \u03C3t',
    min: 0.0087,
    max: 0.0788,
    units: 'S/cm'
  },
  Flammability: {
    type: 'categoricalProperty',
    value: 'Flammability',
    options: []
  },
  'Flexural Strain At Break': {
    type: 'numericProperty',
    value: 'Flexural Strain At Break',
    min: 1.1,
    max: 12,
    units: '%'
  },
  'Izod impact, Unnotched': {
    type: 'numericProperty',
    value: 'Izod impact, Unnotched',
    min: 345,
    max: 1105,
    units: 'J/m'
  },
  'Lattice Constant\u03B2': {
    type: 'categoricalProperty',
    value: 'Lattice Constant\u03B2',
    options: []
  },
  'Light Transmission Range': {
    type: 'numericProperty',
    value: 'Light Transmission Range',
    units: '\u03BCm'
  },
  'Ln\u03C3 T': {
    type: 'numericProperty',
    value: 'Ln\u03C3 T',
    min: -5.693811074918568,
    max: 4.674634981595869,
    units: 'S\xB7K/cm'
  },
  'Mold Shrinkage': {
    type: 'numericProperty',
    value: 'Mold Shrinkage',
    min: 0.2,
    max: 2.1,
    units: '%'
  },
  'Normalized conductivity': {
    type: 'numericProperty',
    value: 'Normalized conductivity',
    min: 24.863883847549886,
    max: 100.14545454545456,
    units: '%'
  },
  'Ordering or "association"enthalpy': {
    type: 'numericProperty',
    value: 'Ordering or "association"enthalpy',
    min: 0.32,
    max: 0.76,
    units: 'eV'
  },
  'Poisson\'s ratio': {
    type: 'categoricalProperty',
    value: 'Poisson\'s ratio',
    options: []
  },
  'Reaction enthalpy of H2O* to H* + OH*': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of H2O* to H* + OH*',
    min: -1.434,
    max: 1.584,
    units: 'eV'
  },
  'Reaction enthalpy of NH* to H* + N*': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of NH* to H* + N*',
    min: -0.566,
    max: 2.004,
    units: 'eV'
  },
  'Resistance (\u03A9)': {
    type: 'categoricalProperty',
    value: 'Resistance (\u03A9)',
    options: []
  },
  'Scale Thickness': {
    type: 'numericProperty',
    value: 'Scale Thickness',
    min: 0.615839,
    max: 1.782506,
    units: '\u03BCm'
  },
  'Softening point': {
    type: 'numericProperty',
    value: 'Softening point',
    min: 162,
    max: 426,
    units: '\xB0F'
  },
  'ln(\u03C3 T) (electronic)': {
    type: 'numericProperty',
    value: 'ln(\u03C3 T) (electronic)',
    min: 0.4734299516908198,
    max: 1.8685990338164251,
    units: 'S\xB7K/cm'
  },
  'log \u03C3*gb (electronic)': {
    type: 'numericProperty',
    value: 'log \u03C3*gb (electronic)',
    min: -8.989853438556935,
    max: -3.726042841037203,
    units: 'S\xB7K/cm'
  },
  'log(\u03C3T) (grain-boundary)': {
    type: 'numericProperty',
    value: 'log(\u03C3T) (grain-boundary)',
    min: -8.713522902727739,
    max: -4.421022581060217,
    units: 'S\xB7K/cm'
  },
  '\u0394fH0, This work': {
    type: 'numericProperty',
    value: '\u0394fH0, This work',
    min: -69.3,
    max: -12.5,
    units: 'kJ/mole of atoms'
  },
  '\u03C3*gb (electronic)(converted from log)': {
    type: 'numericProperty',
    value: '\u03C3*gb (electronic)(converted from log)',
    min: 1.024e-9,
    max: 0.00018791314404881238,
    units: 'S\xB7K/cm'
  },
  '(HT-H298), Neumann-Kopp': {
    type: 'numericProperty',
    value: '(HT-H298), Neumann-Kopp',
    min: 28.9,
    max: 42.9,
    units: 'kJ/mole of atoms'
  },
  '(HT-H298), This work': {
    type: 'numericProperty',
    value: '(HT-H298), This work',
    min: 23.8,
    max: 52.9,
    units: 'kJ/mole of atoms'
  },
  'Activation energy for ionic conduction': {
    type: 'numericProperty',
    value: 'Activation energy for ionic conduction',
    units: 'eV'
  },
  'Activation energy of H2O to H* + OH*': {
    type: 'numericProperty',
    value: 'Activation energy of H2O to H* + OH*',
    min: -0.25,
    max: 1.997,
    units: 'eV'
  },
  'Arc resistance': {
    type: 'numericProperty',
    value: 'Arc resistance',
    min: 10,
    max: 300,
    units: 's'
  },
  'Bottle Quantity': {
    type: 'numericProperty',
    value: 'Bottle Quantity',
    min: 1.4,
    max: 2,
    units: 'kg'
  },
  'Charpy Impact Strength': {
    type: 'numericProperty',
    value: 'Charpy Impact Strength',
    min: 5.5,
    max: 61.3,
    units: 'KJ/m2'
  },
  'Density of states (U)': {
    type: 'categoricalProperty',
    value: 'Density of states (U)',
    options: []
  },
  Formula: {
    type: 'categoricalProperty',
    value: 'Formula',
    options: []
  },
  'Grain boundary capacitances': {
    type: 'numericProperty',
    value: 'Grain boundary capacitances',
    units: 'nF cm-1'
  },
  'Latent heat of vaporization (hfg)': {
    type: 'numericProperty',
    value: 'Latent heat of vaporization (hfg)',
    min: 22.8,
    max: 2257,
    units: 'kJ/kg'
  },
  'Lattice parameter, this work': {
    type: 'numericProperty',
    value: 'Lattice parameter, this work',
    min: 0.2886,
    max: 0.6253,
    units: 'nm'
  },
  'Melting Point Temperature': {
    type: 'numericProperty',
    value: 'Melting Point Temperature',
    min: 1759,
    max: 3136,
    units: '\xB0C'
  },
  'Normal boiling point': {
    type: 'numericProperty',
    value: 'Normal boiling point',
    min: -268.9,
    max: 356.7,
    units: '\xB0C'
  },
  'Reaction enthalpy of H2O to H* + OH*': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of H2O to H* + OH*',
    min: -1.943,
    max: 1.558,
    units: 'eV'
  },
  ΔrH: {
    type: 'numericProperty',
    value: '\u0394rH',
    min: -45.1,
    max: 31.7,
    units: 'kJ/mole of atoms'
  },
  σ500: {
    type: 'numericProperty',
    value: '\u03C3500',
    min: 0.021,
    max: 14,
    units: 'mS/cm'
  },
  'Activation energy of NH2* to H* + NH*': {
    type: 'numericProperty',
    value: 'Activation energy of NH2* to H* + NH*',
    min: 0.43,
    max: 3.07,
    units: 'eV'
  },
  'Ash Content': {
    type: 'numericProperty',
    value: 'Ash Content',
    min: 0.008,
    max: 0.02,
    units: '%'
  },
  'Baliga figure of merit': {
    type: 'categoricalProperty',
    value: 'Baliga figure of merit',
    options: []
  },
  'Density of states (Be)': {
    type: 'categoricalProperty',
    value: 'Density of states (Be)',
    options: []
  },
  'Density of states (Ru)': {
    type: 'categoricalProperty',
    value: 'Density of states (Ru)',
    options: []
  },
  'Dopant site': {
    type: 'categoricalProperty',
    value: 'Dopant site',
    options: []
  },
  Ei: {
    type: 'numericProperty',
    value: 'Ei',
    min: 0.6277121463601475,
    max: 1.6127831500452177,
    units: 'eV'
  },
  'Electrical Dissipation At 1 Hz': {
    type: 'categoricalProperty',
    value: 'Electrical Dissipation At 1 Hz',
    options: []
  },
  'Film Thickness(tf)': {
    type: 'numericProperty',
    value: 'Film Thickness(tf)',
    min: 60,
    max: 370,
    units: 'nm'
  },
  'Freezing point': {
    type: 'numericProperty',
    value: 'Freezing point',
    min: -259.2,
    max: 18.9,
    units: '\xB0C'
  },
  'H\'\u03C3': {
    type: 'numericProperty',
    value: 'H\'\u03C3',
    min: 0.7630913424293354,
    max: 1.43,
    units: 'eV'
  },
  'Heat Deflection Temperature At 455 kPa (66 psi)': {
    type: 'numericProperty',
    value: 'Heat Deflection Temperature At 455 kPa (66 psi)',
    min: 65,
    max: 220,
    units: '\xB0C'
  },
  Lasing: {
    type: 'categoricalProperty',
    value: 'Lasing',
    options: []
  },
  'Ln(\u03C9\u03C1/Hz)': {
    type: 'categoricalProperty',
    value: 'Ln(\u03C9\u03C1/Hz)',
    options: []
  },
  'Particle size': {
    type: 'numericProperty',
    value: 'Particle size',
    min: 20,
    max: 140,
    units: 'nm'
  },
  'Polymerized Density': {
    type: 'numericProperty',
    value: 'Polymerized Density',
    units: 'g/cm3'
  },
  'Porosity (fv)': {
    type: 'numericProperty',
    value: 'Porosity (fv)',
    min: 0,
    max: 35
  },
  Process: {
    type: 'categoricalProperty',
    value: 'Process',
    options: []
  },
  'Sample density': {
    type: 'numericProperty',
    value: 'Sample density',
    min: 4.92,
    max: 5.24,
    units: 'g cm-3'
  },
  'Solubility in diethyl ether': {
    type: 'categoricalProperty',
    value: 'Solubility in diethyl ether',
    options: []
  },
  'Symmetry of perovskite lattice': {
    type: 'categoricalProperty',
    value: 'Symmetry of perovskite lattice',
    options: []
  },
  σ700: {
    type: 'numericProperty',
    value: '\u03C3700',
    min: 0.26,
    max: 51,
    units: 'mS/cm'
  },
  σt: {
    type: 'numericProperty',
    value: '\u03C3t',
    min: 0.001390557939914155,
    max: 0.07953833828145256,
    units: 'S/cm'
  },
  'Activation energy (Eg)': {
    type: 'numericProperty',
    value: 'Activation energy (Eg)',
    min: 0.73,
    max: 1.2630667128401938,
    units: 'eV'
  },
  'Activation energy of OH* to H* + O*': {
    type: 'numericProperty',
    value: 'Activation energy of OH* to H* + O*',
    min: 0.573,
    max: 2.422,
    units: 'eV'
  },
  'Adsorption energy of O': {
    type: 'numericProperty',
    value: 'Adsorption energy of O',
    min: -5.42,
    max: 4.57,
    units: 'eV'
  },
  By: {
    type: 'categoricalProperty',
    value: 'By',
    options: []
  },
  'Group of symmetry': {
    type: 'categoricalProperty',
    value: 'Group of symmetry',
    options: []
  },
  LogA: {
    type: 'categoricalProperty',
    value: 'LogA',
    options: []
  },
  'Magnetic Ordering Temperature\xA0': {
    type: 'numericProperty',
    value: 'Magnetic Ordering Temperature\xA0',
    min: 0,
    max: 940,
    units: 'K'
  },
  'Number of atoms in 1 cm': {
    type: 'categoricalProperty',
    value: 'Number of atoms in 1 cm',
    options: []
  },
  'Partition Coefficient, KMo\u03B2/\u03B1': {
    type: 'categoricalProperty',
    value: 'Partition Coefficient, KMo\u03B2/\u03B1',
    options: []
  },
  'Partition coefficient, KMo\u03B2/\u03B1': {
    type: 'categoricalProperty',
    value: 'Partition coefficient, KMo\u03B2/\u03B1',
    options: []
  },
  'Reaction enthalpy of NH3 to H* + NH2*': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of NH3 to H* + NH2*',
    min: -2.076,
    max: 0.857,
    units: 'eV'
  },
  'Reaction enthalpy of OH* to H* + O*': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of OH* to H* + O*',
    min: -1.327,
    max: 1.895,
    units: 'eV'
  },
  'Reduction in area': {
    type: 'numericProperty',
    value: 'Reduction in area',
    min: 13.5,
    max: 69.6,
    units: '%'
  },
  'Resistance to aqueous solutions': {
    type: 'categoricalProperty',
    value: 'Resistance to aqueous solutions',
    options: []
  },
  'Shore Hardness (D)': {
    type: 'numericProperty',
    value: 'Shore Hardness (D)',
    units: 'Scale D'
  },
  Specification: {
    type: 'categoricalProperty',
    value: 'Specification',
    options: []
  },
  'Static dielectric constant': {
    type: 'categoricalProperty',
    value: 'Static dielectric constant',
    options: []
  },
  'Surface Roughness, RZ': {
    type: 'numericProperty',
    value: 'Surface Roughness, RZ',
    min: 12.3,
    max: 70,
    units: '\u03BCm'
  },
  'Typical Application Examples': {
    type: 'categoricalProperty',
    value: 'Typical Application Examples',
    options: []
  },
  '[Original] log\u03C3dc': {
    type: 'numericProperty',
    value: '[Original] log\u03C3dc',
    min: -3.5842519164137636,
    max: -0.10138180254529472,
    units: 'S\xB7K/cm'
  },
  σ0: {
    type: 'numericProperty',
    value: '\u03C30',
    min: 10013055.086919107,
    max: 278699995.8287361,
    units: 'KS/m'
  },
  'Activation energy of CH2* to CH* + H*': {
    type: 'numericProperty',
    value: 'Activation energy of CH2* to CH* + H*',
    min: 0.07,
    max: 2.35,
    units: 'eV'
  },
  'Activation energy of CH3* to CH2* + H*': {
    type: 'numericProperty',
    value: 'Activation energy of CH3* to CH2* + H*',
    min: 0.41,
    max: 2.39,
    units: 'eV'
  },
  'Activation energy of CH4 to CH3* + H*': {
    type: 'numericProperty',
    value: 'Activation energy of CH4 to CH3* + H*',
    min: 0.49,
    max: 2.49,
    units: 'eV'
  },
  'Austenitic finish temperature, Af': {
    type: 'numericProperty',
    value: 'Austenitic finish temperature, Af',
    min: 451,
    max: 625,
    units: 'K'
  },
  'Austenitic start temperature, As': {
    type: 'numericProperty',
    value: 'Austenitic start temperature, As',
    min: 417,
    max: 536,
    units: 'K'
  },
  'Charpy Notched Impact Strength': {
    type: 'numericProperty',
    value: 'Charpy Notched Impact Strength',
    min: 2.1,
    max: 7.8,
    units: 'KJ/m2'
  },
  'Coefficient of thermal expansion // to laminates': {
    type: 'categoricalProperty',
    value: 'Coefficient of thermal expansion // to laminates',
    options: []
  },
  'Critical Exposure (Ec)': {
    type: 'numericProperty',
    value: 'Critical Exposure (Ec)',
    min: 6.9,
    max: 14.4,
    units: 'mJ/cm2'
  },
  'Cubic solution phase boundary': {
    type: 'numericProperty',
    value: 'Cubic solution phase boundary',
    units: 'mole %'
  },
  'Density of states (In)': {
    type: 'categoricalProperty',
    value: 'Density of states (In)',
    options: []
  },
  'Effective hole masses': {
    type: 'categoricalProperty',
    value: 'Effective hole masses',
    options: []
  },
  'Energy activation': {
    type: 'numericProperty',
    value: 'Energy activation',
    min: 0.61,
    max: 1.44,
    units: 'eV'
  },
  'Fluorites Ceria materials': {
    type: 'categoricalProperty',
    value: 'Fluorites Ceria materials',
    options: []
  },
  Fraction: {
    type: 'categoricalProperty',
    value: 'Fraction',
    options: []
  },
  Hysteresis: {
    type: 'numericProperty',
    value: 'Hysteresis',
    min: 75,
    max: 137,
    units: 'K'
  },
  'Ionic Conductivity log\u03C3i': {
    type: 'numericProperty',
    value: 'Ionic Conductivity log\u03C3i',
    min: -4.729995889779669,
    max: -2.116574567285137,
    units: 'S/cm'
  },
  'Ionic Conductivity \u03C3i(converted from log)': {
    type: 'numericProperty',
    value: 'Ionic Conductivity \u03C3i(converted from log)',
    min: 0.000018621048,
    max: 0.007645843999235291,
    units: 'S/cm'
  },
  'Isothermal bulk modulus': {
    type: 'numericProperty',
    value: 'Isothermal bulk modulus',
    min: 21.7,
    max: 253,
    units: 'GPa'
  },
  'Log\u03C3e (electronic)': {
    type: 'numericProperty',
    value: 'Log\u03C3e (electronic)',
    min: -6.220825583059092,
    max: -3.8159321791386467,
    units: 'S/cm'
  },
  Logσgb·T: {
    type: 'numericProperty',
    value: 'Log\u03C3gb\xB7T',
    min: -6.555676855895198,
    max: -3.7620087336244543,
    units: 'S\xB7K/cm'
  },
  Logσionic: {
    type: 'numericProperty',
    value: 'Log\u03C3ionic',
    min: -7.516164987478422,
    max: -1.8110821972809523,
    units: 'S/cm'
  },
  'Martensitic finish temperature, Mf': {
    type: 'numericProperty',
    value: 'Martensitic finish temperature, Mf',
    min: 325,
    max: 452,
    units: 'K'
  },
  'Martensitic start temperature, Ms': {
    type: 'numericProperty',
    value: 'Martensitic start temperature, Ms',
    min: 345,
    max: 508,
    units: 'K'
  },
  'Mn-Mn Bond Distance': {
    type: 'numericProperty',
    value: 'Mn-Mn Bond Distance',
    min: 2.87,
    max: 4.5,
    units: 'A'
  },
  PO2: {
    type: 'numericProperty',
    value: 'PO2',
    units: 'atm'
  },
  'Penetration Depth (Dp)': {
    type: 'numericProperty',
    value: 'Penetration Depth (Dp)',
    min: 2.9,
    max: 9.4,
    units: 'mils'
  },
  'Plastic strain': {
    type: 'categoricalProperty',
    value: 'Plastic strain',
    options: []
  },
  Polish: {
    type: 'categoricalProperty',
    value: 'Polish',
    options: []
  },
  'Reaction enthalpy of CH2* to CH* + H*': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of CH2* to CH* + H*',
    min: -0.836,
    max: 1.327,
    units: 'eV'
  },
  'Reaction enthalpy of CH3* to CH2* + H*': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of CH3* to CH2* + H*',
    min: -0.386,
    max: 1.757,
    units: 'eV'
  },
  'Reaction enthalpy of CH4 to CH3* + H*': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of CH4 to CH3* + H*',
    min: -0.816,
    max: 1.844,
    units: 'eV'
  },
  'Recovery ratio': {
    type: 'numericProperty',
    value: 'Recovery ratio',
    min: 60,
    max: 94,
    units: '%'
  },
  'Recovery strain': {
    type: 'categoricalProperty',
    value: 'Recovery strain',
    options: []
  },
  'Surface Resistivity': {
    type: 'numericProperty',
    value: 'Surface Resistivity',
    units: 'ohm'
  },
  'Tap Density': {
    type: 'numericProperty',
    value: 'Tap Density',
    min: 5.29,
    max: 5.73,
    units: 'g/cm3'
  },
  aged: {
    type: 'categoricalProperty',
    value: 'aged',
    options: []
  },
  'cc2 mode a': {
    type: 'categoricalProperty',
    value: 'cc2 mode a',
    options: []
  },
  'cc2 mode b': {
    type: 'categoricalProperty',
    value: 'cc2 mode b',
    options: []
  },
  'crystal structure': {
    type: 'categoricalProperty',
    value: 'crystal structure',
    options: []
  },
  hysteresis: {
    type: 'categoricalProperty',
    value: 'hysteresis',
    options: []
  },
  lambda: {
    type: 'categoricalProperty',
    value: 'lambda',
    options: []
  },
  'max axial reorientation strain mode a': {
    type: 'categoricalProperty',
    value: 'max axial reorientation strain mode a',
    options: []
  },
  'max axial reorientation strain mode b': {
    type: 'categoricalProperty',
    value: 'max axial reorientation strain mode b',
    options: []
  },
  'max compressive single variant transf strain': {
    type: 'categoricalProperty',
    value: 'max compressive single variant transf strain',
    options: []
  },
  'max shear single variant transf strain': {
    type: 'categoricalProperty',
    value: 'max shear single variant transf strain',
    options: []
  },
  'max tensile single variant transf strain': {
    type: 'categoricalProperty',
    value: 'max tensile single variant transf strain',
    options: []
  },
  'monoclinic angle': {
    type: 'categoricalProperty',
    value: 'monoclinic angle',
    options: []
  },
  '\u03C3gb\xB7T(converted from log)': {
    type: 'numericProperty',
    value: '\u03C3gb\xB7T(converted from log)',
    min: 2.78178e-7,
    max: 0.00017297815731075617,
    units: 'S\xB7K/cm'
  },
  σi: {
    type: 'numericProperty',
    value: '\u03C3i',
    min: 5.9e-8,
    max: 0.072,
    units: 'S/cm'
  },
  '\u03C3ionic(converted from log)': {
    type: 'numericProperty',
    value: '\u03C3ionic(converted from log)',
    min: 3.0467e-8,
    max: 0.015449620027254514,
    units: 'S/cm'
  },
  'Comparative tracking index': {
    type: 'numericProperty',
    value: 'Comparative tracking index',
    units: 'Volts'
  },
  'Density of states (Fe)': {
    type: 'categoricalProperty',
    value: 'Density of states (Fe)',
    options: []
  },
  'Density of states (Mo)': {
    type: 'categoricalProperty',
    value: 'Density of states (Mo)',
    options: []
  },
  'Dissociation barrier of O2': {
    type: 'numericProperty',
    value: 'Dissociation barrier of O2',
    min: 0.08,
    max: 2.44,
    units: 'eV'
  },
  'Energy Gap': {
    type: 'numericProperty',
    value: 'Energy Gap',
    min: 0,
    max: 96,
    units: 'meV'
  },
  'Ln A': {
    type: 'categoricalProperty',
    value: 'Ln A',
    options: []
  },
  'Melting Point F': {
    type: 'categoricalProperty',
    value: 'Melting Point F',
    options: []
  },
  'Moisture Absorption': {
    type: 'numericProperty',
    value: 'Moisture Absorption',
    min: 0.06,
    max: 1.12,
    units: '%'
  },
  'Thermal Shock Resistance': {
    type: 'numericProperty',
    value: 'Thermal Shock Resistance',
    min: 190,
    max: 750,
    units: '\xB0C'
  },
  'critical temperature': {
    type: 'categoricalProperty',
    value: 'critical temperature',
    options: []
  },
  'Activation energy for the volume resistivity': {
    type: 'numericProperty',
    value: 'Activation energy for the volume resistivity',
    min: 1.015672,
    max: 1.222952,
    units: 'eV (converted from kJ/mol)'
  },
  'Activation energy of NH* to H* + N*': {
    type: 'numericProperty',
    value: 'Activation energy of NH* to H* + N*',
    min: 0.67,
    max: 4.1,
    units: 'eV'
  },
  'Break Strain, A': {
    type: 'numericProperty',
    value: 'Break Strain, A',
    min: 3,
    max: 33,
    units: '%'
  },
  'Conductivity x 10-2': {
    type: 'numericProperty',
    value: 'Conductivity x 10-2',
    min: 1.8448519040902678,
    max: 5.483779971791256,
    units: 'S/cm'
  },
  'Density of states (Hg)': {
    type: 'categoricalProperty',
    value: 'Density of states (Hg)',
    options: []
  },
  'Dissipation Factor': {
    type: 'categoricalProperty',
    value: 'Dissipation Factor',
    options: []
  },
  'Ea(1)': {
    type: 'numericProperty',
    value: 'Ea(1)',
    min: 0.23,
    max: 0.71,
    units: 'eV'
  },
  'Ea(2)': {
    type: 'numericProperty',
    value: 'Ea(2)',
    min: 0.2,
    max: 0.56,
    units: 'eV'
  },
  'Elasticity Tensor': {
    type: 'numericProperty',
    value: 'Elasticity Tensor',
    units: 'GPa'
  },
  Enthalpy: {
    type: 'numericProperty',
    value: 'Enthalpy',
    min: 12.31481481481481,
    max: 83.24074074074075,
    units: 'KJ/mol'
  },
  'Heat Distortion Temp. (Hdt)': {
    type: 'numericProperty',
    value: 'Heat Distortion Temp. (Hdt)',
    min: 32,
    max: 110,
    units: '\xB0C'
  },
  'Heat Distortion Temperature': {
    type: 'numericProperty',
    value: 'Heat Distortion Temperature',
    min: 41,
    max: 88,
    units: '\xB0C'
  },
  'Latent heat of fusion (hif)': {
    type: 'numericProperty',
    value: 'Latent heat of fusion (hif)',
    min: 11.4,
    max: 333.7,
    units: 'kJ/kg'
  },
  'Ln(\u03C3g\xB7T)': {
    type: 'numericProperty',
    value: 'Ln(\u03C3g\xB7T)',
    min: -5.692541004345894,
    max: 4.6120536147636315,
    units: 'S\xB7K/cm'
  },
  Logσdc·T: {
    type: 'numericProperty',
    value: 'Log\u03C3dc\xB7T',
    min: -1.480252764612954,
    max: 0.6919431279620852,
    units: 'S\xB7K/cm'
  },
  'Magnetic Ordering Temperatre (value used for regression)': {
    type: 'numericProperty',
    value: 'Magnetic Ordering Temperatre (value used for regression)',
    min: 95,
    max: 603,
    units: 'K'
  },
  'Melt Flow Rate': {
    type: 'numericProperty',
    value: 'Melt Flow Rate',
    min: 9,
    max: 50,
    units: 'grams/10min'
  },
  'Number of Valence Electrons per Formula Unit': {
    type: 'categoricalProperty',
    value: 'Number of Valence Electrons per Formula Unit',
    options: []
  },
  Order: {
    type: 'categoricalProperty',
    value: 'Order',
    options: []
  },
  'Particle Size Range': {
    type: 'numericProperty',
    value: 'Particle Size Range',
    units: 'microns'
  },
  Polymorphism: {
    type: 'categoricalProperty',
    value: 'Polymorphism',
    options: []
  },
  'Pore Diameter (d) (nm)': {
    type: 'numericProperty',
    value: 'Pore Diameter (d) (nm)',
    units: 'nm'
  },
  'Relative Density': {
    type: 'numericProperty',
    value: 'Relative Density',
    min: 100,
    max: 100,
    units: '%'
  },
  'Thermal expansion (20 \xB0C)': {
    type: 'numericProperty',
    value: 'Thermal expansion (20 \xB0C)',
    units: '\xB0C-1'
  },
  'Wall Thickness (twall': {
    type: 'numericProperty',
    value: 'Wall Thickness (twall',
    units: 'nm'
  },
  '[Original] log10(\u03C3T)': {
    type: 'numericProperty',
    value: '[Original] log10(\u03C3T)',
    min: -3.1628532974427994,
    max: 0.6527590847913869,
    units: 'S\xB7K/cm'
  },
  '[Original] \u03C3 (ionic)': {
    type: 'numericProperty',
    value: '[Original] \u03C3 (ionic)',
    min: 0.01241871484502919,
    max: 0.12823717355851186,
    units: 'S/cm'
  },
  σ300: {
    type: 'numericProperty',
    value: '\u03C3300',
    min: 5.1e-7,
    max: 0.0000731,
    units: 'S/cm'
  },
  '\u03C3600\xB0C': {
    type: 'numericProperty',
    value: '\u03C3600\xB0C',
    units: 'S/cm'
  },
  '\u03C3T-\u03C3ion': {
    type: 'numericProperty',
    value: '\u03C3T-\u03C3ion',
    min: 0.000010746078,
    max: 0.003305451347573248,
    units: '^b cm-1'
  },
  '\u03C3dc\xB7T(converted from log)': {
    type: 'numericProperty',
    value: '\u03C3dc\xB7T(converted from log)',
    min: 0.033093845525890765,
    max: 4.9197510599115795,
    units: 'S\xB7K/cm'
  },
  'Activation energy of CO2 to CO* + O*': {
    type: 'numericProperty',
    value: 'Activation energy of CO2 to CO* + O*',
    min: -0.009,
    max: 3.38,
    units: 'eV'
  },
  'Activation energy of NH3* to H* + NH2*': {
    type: 'numericProperty',
    value: 'Activation energy of NH3* to H* + NH2*',
    min: 0.75,
    max: 2.53,
    units: 'eV'
  },
  'Activation enthalpy': {
    type: 'numericProperty',
    value: 'Activation enthalpy',
    min: -0.7167495158454635,
    max: 1.08,
    units: 'eV'
  },
  'Apparent density': {
    type: 'numericProperty',
    value: 'Apparent density',
    min: 495,
    max: 495,
    units: '%'
  },
  'BET Surface': {
    type: 'numericProperty',
    value: 'BET Surface',
    min: 457,
    max: 889,
    units: 'm2/g'
  },
  'Binding energy of CO': {
    type: 'numericProperty',
    value: 'Binding energy of CO',
    min: -2.08,
    max: 852.52,
    units: 'eV'
  },
  'Ceramic discs diameter': {
    type: 'numericProperty',
    value: 'Ceramic discs diameter',
    min: 20,
    max: 20,
    units: 'mm'
  },
  'Ceramic discs thickness': {
    type: 'numericProperty',
    value: 'Ceramic discs thickness',
    min: 2.5,
    max: 2.5,
    units: 'mm'
  },
  'Crystal size': {
    type: 'numericProperty',
    value: 'Crystal size',
    units: 'nm'
  },
  'Density, \u03C1': {
    type: 'numericProperty',
    value: 'Density, \u03C1',
    min: 2.28,
    max: 8.41888661414481,
    units: 'g/cm3'
  },
  'Electron Mobility': {
    type: 'numericProperty',
    value: 'Electron Mobility',
    min: 200,
    max: 40000,
    units: 'cm2/V\xB7s'
  },
  'Log\u03C3 at 150\xB0C': {
    type: 'numericProperty',
    value: 'Log\u03C3 at 150\xB0C',
    min: -7.4107792623813555,
    max: -4.513465277525172,
    units: 'S/cm'
  },
  'Micropore Surface': {
    type: 'numericProperty',
    value: 'Micropore Surface',
    min: 86,
    max: 457,
    units: 'm2/g'
  },
  'Micropore Volume': {
    type: 'numericProperty',
    value: 'Micropore Volume',
    min: 0.033,
    max: 0.19,
    units: 'cm3/g'
  },
  'Reaction enthalpy of CO2 to CO* + O*': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of CO2 to CO* + O*',
    min: -1.477,
    max: 3.29,
    units: 'eV'
  },
  'Reaction enthalpy of NH3* to H* + NH2*': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of NH3* to H* + NH2*',
    min: -1.096,
    max: 1.107,
    units: 'eV'
  },
  'Relative Crystalinity': {
    type: 'numericProperty',
    value: 'Relative Crystalinity',
    min: 23,
    max: 100,
    units: '%'
  },
  'Sample Orientation': {
    type: 'categoricalProperty',
    value: 'Sample Orientation',
    options: []
  },
  Superstructure: {
    type: 'categoricalProperty',
    value: 'Superstructure',
    options: []
  },
  'Tensile Elongation': {
    type: 'numericProperty',
    value: 'Tensile Elongation',
    min: 1,
    max: 45,
    units: '%'
  },
  Tolerances: {
    type: 'numericProperty',
    value: 'Tolerances',
    units: 'mm'
  },
  'Total Pore Volume': {
    type: 'numericProperty',
    value: 'Total Pore Volume',
    min: 0.19,
    max: 0.83,
    units: 'cm3/g'
  },
  'Typical Achievable Part Accuracy': {
    type: 'numericProperty',
    value: 'Typical Achievable Part Accuracy',
    units: '\u03BCm'
  },
  absorption: {
    type: 'categoricalProperty',
    value: 'absorption',
    options: []
  },
  'ln(\u03C3g\xB7T)': {
    type: 'numericProperty',
    value: 'ln(\u03C3g\xB7T)',
    min: -5.959469071894257,
    max: 4.505276022463076,
    units: 'S\xB7K/cm'
  },
  α: {
    type: 'numericProperty',
    value: '\u03B1',
    min: 870000,
    max: 1122000000,
    units: 'm2/s'
  },
  ε2tu: {
    type: 'numericProperty',
    value: '\u03B52tu',
    min: 8590,
    max: 24000,
    units: '\u03BC\u03B5'
  },
  '\u03C3 at 150\xB0C(converted from log)': {
    type: 'numericProperty',
    value: '\u03C3 at 150\xB0C(converted from log)',
    min: 3.8835e-8,
    max: 0.000030657358,
    units: 'S/cm'
  },
  '\u03C3 at 800\xB0C': {
    type: 'numericProperty',
    value: '\u03C3 at 800\xB0C',
    min: 0.000055,
    max: 0.16,
    units: 'S/cm'
  },
  'Activation Energy (\u0394)': {
    type: 'numericProperty',
    value: 'Activation Energy (\u0394)',
    min: 0.0073260073260073,
    max: 7.443223443223442,
    units: 'eV'
  },
  'Base Material': {
    type: 'categoricalProperty',
    value: 'Base Material',
    options: []
  },
  'Bubbles in glass': {
    type: 'categoricalProperty',
    value: 'Bubbles in glass',
    options: []
  },
  'Cell parameters': {
    type: 'numericProperty',
    value: 'Cell parameters',
    min: 7.138488372093023,
    max: 7.16186046511628,
    units: 'A'
  },
  'Density (calculated)': {
    type: 'categoricalProperty',
    value: 'Density (calculated)',
    options: []
  },
  'Density of states (Mn)': {
    type: 'categoricalProperty',
    value: 'Density of states (Mn)',
    options: []
  },
  'Density of states (Re)': {
    type: 'categoricalProperty',
    value: 'Density of states (Re)',
    options: []
  },
  'Density of states (Th)': {
    type: 'categoricalProperty',
    value: 'Density of states (Th)',
    options: []
  },
  'Dielectric constant (high frequency)': {
    type: 'categoricalProperty',
    value: 'Dielectric constant (high frequency)',
    options: []
  },
  'E-Modul, E': {
    type: 'numericProperty',
    value: 'E-Modul, E',
    min: 57,
    max: 195,
    units: 'GPa'
  },
  EMF: {
    type: 'numericProperty',
    value: 'EMF',
    min: 24.747488816615828,
    max: 140.311138348968,
    units: 'mV'
  },
  'Energy gap': {
    type: 'numericProperty',
    value: 'Energy gap',
    min: 0.17,
    max: 8,
    units: 'eV'
  },
  'Flame Classification': {
    type: 'categoricalProperty',
    value: 'Flame Classification',
    options: []
  },
  'Formula weight': {
    type: 'categoricalProperty',
    value: 'Formula weight',
    options: []
  },
  'Hardness By Vickers': {
    type: 'numericProperty',
    value: 'Hardness By Vickers',
    min: 110,
    max: 384,
    units: 'HV10'
  },
  'Log PO2': {
    type: 'numericProperty',
    value: 'Log PO2',
    min: -20.354582564201507,
    max: 8.440677135647618,
    units: 'atm'
  },
  'Offset Yield Stress, RP0,2': {
    type: 'numericProperty',
    value: 'Offset Yield Stress, RP0,2',
    min: 147,
    max: 1147,
    units: 'MPa'
  },
  'Peak temperature of the first reverse martensitic transformation, Ap1': {
    type: 'numericProperty',
    value: 'Peak temperature of the first reverse martensitic transformation, Ap1',
    min: 102.2,
    max: 547.8,
    units: '\xB0C'
  },
  'Peak temperature of the second reverse martensitic transformation, Ap2': {
    type: 'numericProperty',
    value: 'Peak temperature of the second reverse martensitic transformation, Ap2',
    min: 95.1,
    max: 527.9,
    units: '\xB0C'
  },
  'Relative Thermal Index (RTI)': {
    type: 'numericProperty',
    value: 'Relative Thermal Index (RTI)',
    min: 130,
    max: 140,
    units: '\xB0C'
  },
  'Reverse transformation peak temperature shift, \u0394TAp': {
    type: 'numericProperty',
    value: 'Reverse transformation peak temperature shift, \u0394TAp',
    min: 4.2,
    max: 51.4,
    units: '\xB0C'
  },
  'Sample description': {
    type: 'categoricalProperty',
    value: 'Sample description',
    options: []
  },
  'Shore D': {
    type: 'categoricalProperty',
    value: 'Shore D',
    options: []
  },
  'Sintered Part Density': {
    type: 'numericProperty',
    value: 'Sintered Part Density',
    min: 0.82,
    max: 1.49,
    units: 'grams/CC'
  },
  'Solubility limit of CaO': {
    type: 'numericProperty',
    value: 'Solubility limit of CaO',
    units: '%'
  },
  'Unit cell dimension': {
    type: 'categoricalProperty',
    value: 'Unit cell dimension',
    options: []
  },
  'Vacancy formation energy': {
    type: 'numericProperty',
    value: 'Vacancy formation energy',
    min: 0.15,
    max: 6.68,
    units: 'eV'
  },
  'log\u03C3 (electrical)': {
    type: 'numericProperty',
    value: 'log\u03C3 (electrical)',
    min: -5.71979251157801,
    max: -0.9575799994767,
    units: 'S/cm'
  },
  '\u03B2 angle': {
    type: 'numericProperty',
    value: '\u03B2 angle',
    min: 89.5664,
    max: 89.66535384615385,
    units: '\xB0'
  },
  '\u03C3 x 102 (ionic)': {
    type: 'numericProperty',
    value: '\u03C3 x 102 (ionic)',
    min: 0.014577259475218485,
    max: 0.9679300291545189,
    units: 'S/cm'
  },
  '\u03C3 x 103 (ionic)': {
    type: 'numericProperty',
    value: '\u03C3 x 103 (ionic)',
    min: 0.13186813186810653,
    max: 14.043956043956033,
    units: 'S/cm'
  },
  'Activation energy of CH* to C* + H*': {
    type: 'numericProperty',
    value: 'Activation energy of CH* to C* + H*',
    min: 0.68,
    max: 2.58,
    units: 'eV'
  },
  'Activation energy of H2 to H* + H*': {
    type: 'numericProperty',
    value: 'Activation energy of H2 to H* + H*',
    min: -1.1,
    max: 1.15,
    units: 'eV'
  },
  'Activation energy of NH3 to H* + NH2*': {
    type: 'numericProperty',
    value: 'Activation energy of NH3 to H* + NH2*',
    min: -0.02,
    max: 2.28,
    units: 'eV'
  },
  'Anion order parameters S': {
    type: 'categoricalProperty',
    value: 'Anion order parameters S',
    options: []
  },
  'Austenite finish temperature (B2), Af': {
    type: 'numericProperty',
    value: 'Austenite finish temperature (B2), Af',
    min: 271.6,
    max: 368.4,
    units: 'K'
  },
  'Austenite peak temperature (B2), Ap': {
    type: 'numericProperty',
    value: 'Austenite peak temperature (B2), Ap',
    min: 268.6,
    max: 365.4,
    units: 'K'
  },
  'Austenite start temperature (B2), As': {
    type: 'numericProperty',
    value: 'Austenite start temperature (B2), As',
    min: 262.2,
    max: 356.8,
    units: 'K'
  },
  'Coefficient Of Thermal Expansion (Cte)': {
    type: 'categoricalProperty',
    value: 'Coefficient Of Thermal Expansion (Cte)',
    options: []
  },
  'Compressive Modulus': {
    type: 'numericProperty',
    value: 'Compressive Modulus',
    units: 'MPa'
  },
  'Curie Temperature': {
    type: 'numericProperty',
    value: 'Curie Temperature',
    min: -200,
    max: 480,
    units: '\xB0C'
  },
  'Density Of Parts': {
    type: 'numericProperty',
    value: 'Density Of Parts',
    min: 0.95,
    max: 1.4,
    units: 'g/cm3'
  },
  'Effective electron mass': {
    type: 'categoricalProperty',
    value: 'Effective electron mass',
    options: []
  },
  'Half life': {
    type: 'numericProperty',
    value: 'Half life',
    min: 2.62,
    max: 2140000,
    units: 'years'
  },
  'Heat of transformation, \u0394HB19-B2': {
    type: 'numericProperty',
    value: 'Heat of transformation, \u0394HB19-B2',
    min: -17.4,
    max: -12.4,
    units: 'J/g'
  },
  'Heat of transformation, \u0394HB2-B19': {
    type: 'numericProperty',
    value: 'Heat of transformation, \u0394HB2-B19',
    min: 12.8,
    max: 17.7,
    units: 'J/g'
  },
  'Lattice Constant\u03B1': {
    type: 'categoricalProperty',
    value: 'Lattice Constant\u03B1',
    options: []
  },
  'Lattice constant, a': {
    type: 'numericProperty',
    value: 'Lattice constant, a',
    min: 0.4097,
    max: 4.0391,
    units: 'angstrom'
  },
  'Lattice parameter, literature': {
    type: 'numericProperty',
    value: 'Lattice parameter, literature',
    min: 0.57405,
    max: 0.62545,
    units: 'nm'
  },
  'Layer Thickness': {
    type: 'numericProperty',
    value: 'Layer Thickness',
    min: 20,
    max: 250,
    units: '\u03BCm'
  },
  'Maximum Thermal Shock': {
    type: 'numericProperty',
    value: 'Maximum Thermal Shock',
    min: 110,
    max: 300,
    units: '\xB0C'
  },
  'Melt Point': {
    type: 'categoricalProperty',
    value: 'Melt Point',
    options: []
  },
  'Powder Colour (Ac. To Safety Data Sheet)': {
    type: 'categoricalProperty',
    value: 'Powder Colour (Ac. To Safety Data Sheet)',
    options: []
  },
  'Prefactor \u03C30': {
    type: 'numericProperty',
    value: 'Prefactor \u03C30',
    min: 117,
    max: 9770000000000,
    units: 'S\xB7K/cm'
  },
  'Radiative recombination coefficient': {
    type: 'numericProperty',
    value: 'Radiative recombination coefficient',
    min: 1.1e-14,
    max: 900000,
    units: 'cm3s-1'
  },
  'Reaction enthalpy of CH* to C* + H*': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of CH* to C* + H*',
    min: -0.447,
    max: 1.858,
    units: 'eV'
  },
  'Reaction enthalpy of H2 to H* + H*': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of H2 to H* + H*',
    min: -1.1,
    max: 0.554,
    units: 'eV'
  },
  Reconstruction: {
    type: 'categoricalProperty',
    value: 'Reconstruction',
    options: []
  },
  'Surface Roughness, RA': {
    type: 'numericProperty',
    value: 'Surface Roughness, RA',
    min: 6,
    max: 12,
    units: '\u03BCm'
  },
  ΔEi: {
    type: 'numericProperty',
    value: '\u0394Ei',
    min: 0.48791285421464603,
    max: 1.8417260106079465,
    units: 'eV'
  },
  '\u0394fH0, OQMD': {
    type: 'numericProperty',
    value: '\u0394fH0, OQMD',
    min: -61,
    max: -10.3,
    units: 'kJ/mole of atoms'
  },
  εtu1: {
    type: 'numericProperty',
    value: '\u03B5tu1',
    min: 7830,
    max: 38000,
    units: '\u03BC\u03B5'
  },
  ν21t: {
    type: 'categoricalProperty',
    value: '\u03BD21t',
    options: []
  },
  σa: {
    type: 'numericProperty',
    value: '\u03C3a',
    min: 5.4e-7,
    max: 0.0066,
    units: 'S/cm'
  },
  'Apparent Density': {
    type: 'numericProperty',
    value: 'Apparent Density',
    min: 0.5,
    max: 4.28,
    units: 'g/cm3'
  },
  'Cell parameter': {
    type: 'numericProperty',
    value: 'Cell parameter',
    min: 7.1362,
    max: 7.2014,
    units: 'a/A'
  },
  'Coefficient of friction': {
    type: 'categoricalProperty',
    value: 'Coefficient of friction',
    options: []
  },
  'Density of states (Os)': {
    type: 'categoricalProperty',
    value: 'Density of states (Os)',
    options: []
  },
  'Density of states (V)': {
    type: 'categoricalProperty',
    value: 'Density of states (V)',
    options: []
  },
  'Dielectric constant (static)': {
    type: 'categoricalProperty',
    value: 'Dielectric constant (static)',
    options: []
  },
  'Ea of phase': {
    type: 'numericProperty',
    value: 'Ea of phase',
    min: 0.55,
    max: 2.08,
    units: 'eV'
  },
  'Ea total': {
    type: 'numericProperty',
    value: 'Ea total',
    min: 0.71,
    max: 1.28,
    units: 'eV'
  },
  Exohc: {
    type: 'numericProperty',
    value: 'Exohc',
    min: 6.1,
    max: 7.1,
    units: 'Msi'
  },
  'Film Thickness (tf)': {
    type: 'numericProperty',
    value: 'Film Thickness (tf)',
    min: 80,
    max: 540,
    units: 'nm'
  },
  Fxohcu: {
    type: 'numericProperty',
    value: 'Fxohcu',
    min: 27.1,
    max: 47.2,
    units: 'ksi'
  },
  'General chemical compatibility': {
    type: 'numericProperty',
    value: 'General chemical compatibility',
    units: 'Rating'
  },
  'High-voltage arc-tracking-rate': {
    type: 'numericProperty',
    value: 'High-voltage arc-tracking-rate',
    units: 'mm/min'
  },
  'Lattice constant, c': {
    type: 'numericProperty',
    value: 'Lattice constant, c',
    min: 5.1758,
    max: 5.1758,
    units: 'angstrom'
  },
  'Lattice parameter (a and b)': {
    type: 'numericProperty',
    value: 'Lattice parameter (a and b)',
    min: 0.5478311930958807,
    max: 0.5580770485482962,
    units: 'nm'
  },
  'Log(PO2)': {
    type: 'numericProperty',
    value: 'Log(PO2)',
    min: -29.583577712609976,
    max: -15.999999999999998,
    units: 'bar'
  },
  'Melting Range': {
    type: 'numericProperty',
    value: 'Melting Range',
    units: '\xB0C'
  },
  'Peak transformation temperature, AP': {
    type: 'numericProperty',
    value: 'Peak transformation temperature, AP',
    min: 92.3,
    max: 207,
    units: '\xB0C'
  },
  'Pore Diameter (d)': {
    type: 'numericProperty',
    value: 'Pore Diameter (d)',
    units: 'nm'
  },
  'Reduction Of Area': {
    type: 'numericProperty',
    value: 'Reduction Of Area',
    min: 20,
    max: 55,
    units: '%'
  },
  'Reduction Of Area, Z': {
    type: 'numericProperty',
    value: 'Reduction Of Area, Z',
    min: 8,
    max: 55,
    units: '%'
  },
  'Rockwell R Hardness': {
    type: 'categoricalProperty',
    value: 'Rockwell R Hardness',
    options: []
  },
  'Specific enthalpy of transformation, hM-A': {
    type: 'numericProperty',
    value: 'Specific enthalpy of transformation, hM-A',
    min: 0.4,
    max: 15.4,
    units: 'J/g'
  },
  'Thermal diffusivity': {
    type: 'numericProperty',
    value: 'Thermal diffusivity',
    min: 0.16,
    max: 1.47,
    units: 'cm2/s'
  },
  'Thermal expansion': {
    type: 'numericProperty',
    value: 'Thermal expansion',
    min: 8e-7,
    max: 4.65,
    units: '\xB0C-1'
  },
  'Total Energy': {
    type: 'numericProperty',
    value: 'Total Energy',
    min: 47,
    max: 64,
    units: 'J'
  },
  'Total activation energy': {
    type: 'categoricalProperty',
    value: 'Total activation energy',
    options: []
  },
  'Total conductivity': {
    type: 'numericProperty',
    value: 'Total conductivity',
    min: 0.00133,
    max: 0.1,
    units: 'S/cm'
  },
  'Transport number': {
    type: 'numericProperty',
    value: 'Transport number',
    min: 0.9207583696398771,
    max: 0.9972659737246852,
    units: 'Ti'
  },
  'Unit cell (V)': {
    type: 'categoricalProperty',
    value: 'Unit cell (V)',
    options: []
  },
  'Volume Rate': {
    type: 'numericProperty',
    value: 'Volume Rate',
    min: 2,
    max: 9,
    units: 'mm3/s'
  },
  'Wall Thickness (twall)': {
    type: 'numericProperty',
    value: 'Wall Thickness (twall)',
    units: 'nm'
  },
  '[Original] log(sigma\xB7T)': {
    type: 'numericProperty',
    value: '[Original] log(sigma\xB7T)',
    min: -2.5525622232942258,
    max: -0.8356425906645035,
    units: 'S\xB7K/cm'
  },
  'max axial transf twinning strain mode b': {
    type: 'categoricalProperty',
    value: 'max axial transf twinning strain mode b',
    options: []
  },
  ΔEht: {
    type: 'numericProperty',
    value: '\u0394Eht',
    min: 0.43,
    max: 0.73,
    units: 'eV'
  },
  νt21: {
    type: 'categoricalProperty',
    value: '\u03BDt21',
    options: []
  },
  σ0g: {
    type: 'numericProperty',
    value: '\u03C30g',
    min: 4559.002008413083,
    max: 2105648.6807506504,
    units: 'S\xB7K/cm'
  },
  '\u03C3200\xB0C': {
    type: 'numericProperty',
    value: '\u03C3200\xB0C',
    min: 2.2e-8,
    max: 0.0068,
    units: 'S/cm'
  },
  σ600: {
    type: 'numericProperty',
    value: '\u03C3600',
    min: 0.0000032,
    max: 117,
    units: 'S/cm'
  },
  'Activation energy of CO* to C* + O*': {
    type: 'numericProperty',
    value: 'Activation energy of CO* to C* + O*',
    min: 0.46,
    max: 5.61,
    units: 'eV'
  },
  'Appearance/Feature': {
    type: 'categoricalProperty',
    value: 'Appearance/Feature',
    options: []
  },
  'Charge Neutrality Level': {
    type: 'numericProperty',
    value: 'Charge Neutrality Level',
    min: -7.1,
    max: -1.7,
    units: 'eV'
  },
  'Coefficient of Linear Thermal Expansion, \u03B1l': {
    type: 'numericProperty',
    value: 'Coefficient of Linear Thermal Expansion, \u03B1l',
    min: 1.7,
    max: 11,
    units: 'm/m-\xB0C'
  },
  'Corrosion Activtn Energy': {
    type: 'numericProperty',
    value: 'Corrosion Activtn Energy',
    min: 64,
    max: 460,
    units: 'kJ/mol'
  },
  DP: {
    type: 'numericProperty',
    value: 'DP',
    min: 4.3,
    max: 6.5,
    units: 'mils'
  },
  Dp: {
    type: 'numericProperty',
    value: 'Dp',
    min: 0.15,
    max: 0.36,
    units: 'mm'
  },
  E10: {
    type: 'numericProperty',
    value: 'E10',
    min: 47,
    max: 96,
    units: 'mJ/cm2'
  },
  EC: {
    type: 'numericProperty',
    value: 'EC',
    min: 7.8,
    max: 15,
    units: 'mJ/cm2'
  },
  'Effective conduction band density of states': {
    type: 'numericProperty',
    value: 'Effective conduction band density of states',
    min: 42000000000000000,
    max: 32000000000000000000,
    units: 'cm-3'
  },
  'Effective valence band density of states': {
    type: 'numericProperty',
    value: 'Effective valence band density of states',
    min: 5000000000000000000,
    max: 480000000000000000000,
    units: 'cm-3'
  },
  Eγ: {
    type: 'numericProperty',
    value: 'E\u03B3',
    min: 0.16,
    max: 0.67,
    units: 'eV'
  },
  Fs12: {
    type: 'numericProperty',
    value: 'Fs12',
    min: 7.75,
    max: 15.4,
    units: 'ksi'
  },
  'Glass Transition, Tg': {
    type: 'numericProperty',
    value: 'Glass Transition, Tg',
    min: 52,
    max: 84,
    units: '\xB0C'
  },
  'Heat of transformation, \u0394HB19\'-B19': {
    type: 'numericProperty',
    value: 'Heat of transformation, \u0394HB19\'-B19',
    min: -4,
    max: -0.7,
    units: 'J/g'
  },
  'Heat of transformation, \u0394HB19-B19\'': {
    type: 'numericProperty',
    value: 'Heat of transformation, \u0394HB19-B19\'',
    min: 0.8,
    max: 3.8,
    units: 'J/g'
  },
  'Infrared refractive index n (\u03BB)': {
    type: 'categoricalProperty',
    value: 'Infrared refractive index n (\u03BB)',
    options: []
  },
  'Izot Impact Strength': {
    type: 'numericProperty',
    value: 'Izot Impact Strength',
    min: 25,
    max: 52,
    units: 'J/m'
  },
  'Lattice parameter a': {
    type: 'numericProperty',
    value: 'Lattice parameter a',
    min: 7.151,
    max: 7.231,
    units: 'A'
  },
  'MEL Particle Size': {
    type: 'numericProperty',
    value: 'MEL Particle Size',
    min: 55,
    max: 80,
    units: 'nm'
  },
  'Martensite finish temperature (B19\'), Mf': {
    type: 'numericProperty',
    value: 'Martensite finish temperature (B19\'), Mf',
    min: 172.2,
    max: 284.7,
    units: 'K'
  },
  'Martensite peak temperature (B19\'), Mp': {
    type: 'numericProperty',
    value: 'Martensite peak temperature (B19\'), Mp',
    min: 186.3,
    max: 297.9,
    units: 'K'
  },
  'Martensite start temperature (B19\'), Ms': {
    type: 'numericProperty',
    value: 'Martensite start temperature (B19\'), Ms',
    min: 191.9,
    max: 305.9,
    units: 'K'
  },
  Microstructure: {
    type: 'categoricalProperty',
    value: 'Microstructure',
    options: []
  },
  'Number of atoms in 1cm3': {
    type: 'categoricalProperty',
    value: 'Number of atoms in 1cm3',
    options: []
  },
  'Oxidation barrier of CO': {
    type: 'numericProperty',
    value: 'Oxidation barrier of CO',
    min: 0.18,
    max: 1.29,
    units: 'eV'
  },
  'Partitioning Coefficient, KO\u03B1/\u03B2': {
    type: 'categoricalProperty',
    value: 'Partitioning Coefficient, KO\u03B1/\u03B2',
    options: []
  },
  'Pre-exponential factor': {
    type: 'numericProperty',
    value: 'Pre-exponential factor',
    units: 'S\xB7K/cm'
  },
  'Reaction enthalpy of CO* to C* + O*': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of CO* to C* + O*',
    min: -1.87,
    max: 4.78,
    units: 'eV'
  },
  'Rockwell F Hardness': {
    type: 'categoricalProperty',
    value: 'Rockwell F Hardness',
    options: []
  },
  'Self-diffusion correction shift, Ashift': {
    type: 'categoricalProperty',
    value: 'Self-diffusion correction shift, Ashift',
    options: []
  },
  Solidus: {
    type: 'numericProperty',
    value: 'Solidus',
    min: 870,
    max: 1780,
    units: '\xB0C'
  },
  'Spec Rotation': {
    type: 'categoricalProperty',
    value: 'Spec Rotation',
    options: []
  },
  'Specific Heat, Cp': {
    type: 'numericProperty',
    value: 'Specific Heat, Cp',
    min: 0.1,
    max: 0.35,
    units: 'cal/g- \xB0C'
  },
  'Theoretical Density': {
    type: 'numericProperty',
    value: 'Theoretical Density',
    min: 85.82125603864736,
    max: 97.27053140096619,
    units: '%'
  },
  Viscostity: {
    type: 'numericProperty',
    value: 'Viscostity',
    min: 210,
    max: 9000,
    units: 'mPa\xB7s'
  },
  'Young\'s Modulus (E1)': {
    type: 'numericProperty',
    value: 'Young\'s Modulus (E1)',
    min: 25,
    max: 300,
    units: 'GPa'
  },
  'Young\'s Modulus (E2)': {
    type: 'numericProperty',
    value: 'Young\'s Modulus (E2)',
    min: 6,
    max: 207,
    units: 'GPa'
  },
  '\u0394fH0, First principles': {
    type: 'numericProperty',
    value: '\u0394fH0, First principles',
    min: -60.4,
    max: -9,
    units: 'kJ/mole of atoms'
  },
  εcu2: {
    type: 'numericProperty',
    value: '\u03B5cu2',
    min: 4540,
    max: 34800,
    units: '\u03BC\u03B5'
  },
  'Activation energy E': {
    type: 'numericProperty',
    value: 'Activation energy E',
    min: 0.9,
    max: 1.03,
    units: 'eV'
  },
  'Activation energy of C2H6 + H2 to 2CH4': {
    type: 'numericProperty',
    value: 'Activation energy of C2H6 + H2 to 2CH4',
    min: 75.3,
    max: 206.7,
    units: 'kJ/mol'
  },
  'Activation energy of CH3CH3 to CH3* + CH3*': {
    type: 'numericProperty',
    value: 'Activation energy of CH3CH3 to CH3* + CH3*',
    min: 1.01002,
    max: 3.73002,
    units: 'eV'
  },
  'Activation energy of CO to C* + O*': {
    type: 'numericProperty',
    value: 'Activation energy of CO to C* + O*',
    min: -1.727,
    max: 5.243,
    units: 'eV'
  },
  'Activation energy of COOH* to CO2 + H*': {
    type: 'numericProperty',
    value: 'Activation energy of COOH* to CO2 + H*',
    min: 0.39,
    max: 1.32,
    units: 'eV'
  },
  'Activation energy of OCH* to CH* + O*': {
    type: 'numericProperty',
    value: 'Activation energy of OCH* to CH* + O*',
    min: 1.092,
    max: 4.63,
    units: 'eV'
  },
  'Activation energy, total': {
    type: 'numericProperty',
    value: 'Activation energy, total',
    min: 0.79,
    max: 1.01,
    units: 'eV'
  },
  'Added elements': {
    type: 'categoricalProperty',
    value: 'Added elements',
    options: []
  },
  'Adsorption energy of NO': {
    type: 'numericProperty',
    value: 'Adsorption energy of NO',
    min: -3.05,
    max: 3.14,
    units: 'eV'
  },
  'Ag Diffusion attempt frequency, v2': {
    type: 'numericProperty',
    value: 'Ag Diffusion attempt frequency, v2',
    min: 0.1252,
    max: 3.7668,
    units: 'THz'
  },
  'Ag Diffusion attempt frequency, v3': {
    type: 'numericProperty',
    value: 'Ag Diffusion attempt frequency, v3',
    min: 1.4627,
    max: 4.9697,
    units: 'THz'
  },
  'Ag Diffusion attempt frequency, v4': {
    type: 'numericProperty',
    value: 'Ag Diffusion attempt frequency, v4',
    min: 1.4196,
    max: 4.6695,
    units: 'THz'
  },
  'Ag Diffusion barrier barrier, E2': {
    type: 'numericProperty',
    value: 'Ag Diffusion barrier barrier, E2',
    min: 0.4594,
    max: 1.0493,
    units: 'eV'
  },
  'Ag Diffusion barrier barrier, E3': {
    type: 'numericProperty',
    value: 'Ag Diffusion barrier barrier, E3',
    min: 0.4763,
    max: 2.5332,
    units: 'eV'
  },
  'Ag Diffusion barrier barrier, E4': {
    type: 'numericProperty',
    value: 'Ag Diffusion barrier barrier, E4',
    min: 0.2934,
    max: 2.3906,
    units: 'eV'
  },
  'Average grain size (D)': {
    type: 'numericProperty',
    value: 'Average grain size (D)',
    min: 11.9,
    max: 37.4,
    units: 'nm'
  },
  'Cd Diffusion attempt frequency, v2': {
    type: 'numericProperty',
    value: 'Cd Diffusion attempt frequency, v2',
    min: 0.5528,
    max: 3.5593,
    units: 'THz'
  },
  'Cd Diffusion attempt frequency, v3': {
    type: 'numericProperty',
    value: 'Cd Diffusion attempt frequency, v3',
    min: 1.404,
    max: 5.1699,
    units: 'THz'
  },
  'Cd Diffusion attempt frequency, v4': {
    type: 'numericProperty',
    value: 'Cd Diffusion attempt frequency, v4',
    min: 1.4218,
    max: 4.7644,
    units: 'THz'
  },
  'Cd Diffusion barrier barrier, E2': {
    type: 'numericProperty',
    value: 'Cd Diffusion barrier barrier, E2',
    min: 0.2916,
    max: 0.8184,
    units: 'eV'
  },
  'Cd Diffusion barrier barrier, E3': {
    type: 'numericProperty',
    value: 'Cd Diffusion barrier barrier, E3',
    min: 0.4761,
    max: 2.5298,
    units: 'eV'
  },
  'Cd Diffusion barrier barrier, E4': {
    type: 'numericProperty',
    value: 'Cd Diffusion barrier barrier, E4',
    min: 0.3724,
    max: 2.3447,
    units: 'eV'
  },
  'Cell Parameter (a)': {
    type: 'numericProperty',
    value: 'Cell Parameter (a)',
    min: 5.390474308300395,
    max: 5.4265744400527005,
    units: 'A'
  },
  Characteristics: {
    type: 'categoricalProperty',
    value: 'Characteristics',
    options: []
  },
  'Charpy - Impact Strength': {
    type: 'numericProperty',
    value: 'Charpy - Impact Strength',
    min: 5,
    max: 80,
    units: 'KJ/m2'
  },
  'Charpy impact': {
    type: 'numericProperty',
    value: 'Charpy impact',
    min: 3.4,
    max: 78,
    units: 'KJ/m2'
  },
  'Charpy impact, unnotched': {
    type: 'numericProperty',
    value: 'Charpy impact, unnotched',
    min: 29,
    max: 93,
    units: 'KJ/m2'
  },
  'Conductivity activation energy EA': {
    type: 'numericProperty',
    value: 'Conductivity activation energy EA',
    min: 0.19,
    max: 0.48,
    units: 'eV'
  },
  'Deflection temperature under load': {
    type: 'numericProperty',
    value: 'Deflection temperature under load',
    min: 109,
    max: 294,
    units: '\xB0C'
  },
  'Electrical Resistivity': {
    type: 'numericProperty',
    value: 'Electrical Resistivity',
    units: '\u03A9cm'
  },
  Exoht: {
    type: 'numericProperty',
    value: 'Exoht',
    min: 6.64,
    max: 7.77,
    units: 'Msi'
  },
  'Exposure time': {
    type: 'numericProperty',
    value: 'Exposure time',
    min: 0,
    max: 180,
    units: 'min'
  },
  Ext: {
    type: 'numericProperty',
    value: 'Ext',
    min: 2.87,
    max: 8.08,
    units: 'Msi'
  },
  'Final unit cell size area': {
    type: 'numericProperty',
    value: 'Final unit cell size area',
    min: 55,
    max: 55,
    units: 'cm2'
  },
  'Final unit cell size thickness': {
    type: 'numericProperty',
    value: 'Final unit cell size thickness',
    min: 1,
    max: 1,
    units: 'cm2'
  },
  'Flexural Strength (MOR)': {
    type: 'numericProperty',
    value: 'Flexural Strength (MOR)',
    min: 50,
    max: 900,
    units: 'MPa'
  },
  Fxohtu: {
    type: 'numericProperty',
    value: 'Fxohtu',
    min: 46.4,
    max: 49.9,
    units: 'ksi'
  },
  Fxtu: {
    type: 'numericProperty',
    value: 'Fxtu',
    min: 68.5,
    max: 107,
    units: 'ksi'
  },
  'In-plane Shear Modulus (G12)': {
    type: 'numericProperty',
    value: 'In-plane Shear Modulus (G12)',
    min: 2,
    max: 80,
    units: 'GPa'
  },
  'Ionic Conductivity (\u03C3)': {
    type: 'numericProperty',
    value: 'Ionic Conductivity (\u03C3)',
    min: 0.0004958449642679107,
    max: 0.20395548267840513,
    units: 'S/cm'
  },
  'Ionic transference number (ti)': {
    type: 'categoricalProperty',
    value: 'Ionic transference number (ti)',
    options: []
  },
  'Lattice parameter (a,b and c)': {
    type: 'numericProperty',
    value: 'Lattice parameter (a,b and c)',
    min: 3.8634538152610407,
    max: 15.52610441767068,
    units: 'A'
  },
  'Ln(\u03C3)': {
    type: 'numericProperty',
    value: 'Ln(\u03C3)',
    min: -3.134245910392698,
    max: -1.665030867086895,
    units: 'S/cm'
  },
  'Ln(\u03C3\xB7T)': {
    type: 'categoricalProperty',
    value: 'Ln(\u03C3\xB7T)',
    options: []
  },
  'Log an3}': {
    type: 'categoricalProperty',
    value: 'Log an3}',
    options: []
  },
  'Max. Use Temperature (in air)': {
    type: 'numericProperty',
    value: 'Max. Use Temperature (in air)',
    min: 500,
    max: 3650,
    units: '\xB0C'
  },
  'Maximum work temperature': {
    type: 'numericProperty',
    value: 'Maximum work temperature',
    min: 70,
    max: 380,
    units: '\xB0C'
  },
  'Modulus of Elasticity (Young\'s Modulus)': {
    type: 'numericProperty',
    value: 'Modulus of Elasticity (Young\'s Modulus)',
    min: 4.8,
    max: 675,
    units: 'GPa'
  },
  'Moisture absorption': {
    type: 'numericProperty',
    value: 'Moisture absorption',
    min: 0.1,
    max: 0.7,
    units: '%'
  },
  'Poissons ratio': {
    type: 'categoricalProperty',
    value: 'Poissons ratio',
    options: []
  },
  'Reaction enthalpy of CH3CH3 to CH3* + CH3*': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of CH3CH3 to CH3* + CH3*',
    min: -1.05598,
    max: 1.98402,
    units: 'eV'
  },
  'Reaction enthalpy of CO to C* + O*': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of CO to C* + O*',
    min: -4.057,
    max: 4.413,
    units: 'eV'
  },
  'Reaction enthalpy of COOH* to CO2 + H*': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of COOH* to CO2 + H*',
    min: -0.33,
    max: 0.64,
    units: 'eV'
  },
  'Reaction enthalpy of OCH* to CH* + O*': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of OCH* to CH* + O*',
    min: -0.878,
    max: 3.382,
    units: 'eV'
  },
  'Relativity density': {
    type: 'numericProperty',
    value: 'Relativity density',
    min: 73.83241,
    max: 91.93068,
    units: '\\%'
  },
  'Residual Ash Content': {
    type: 'categoricalProperty',
    value: 'Residual Ash Content',
    options: []
  },
  'Residual factor': {
    type: 'numericProperty',
    value: 'Residual factor',
    min: 0.0389,
    max: 0.1293,
    units: 'R'
  },
  'Specimen density': {
    type: 'numericProperty',
    value: 'Specimen density',
    min: 5.00835,
    max: 5.78987,
    units: 'g/cm3'
  },
  'Strain At Tensile Strength': {
    type: 'numericProperty',
    value: 'Strain At Tensile Strength',
    min: 3,
    max: 11,
    units: '%'
  },
  'Surface microhardness': {
    type: 'numericProperty',
    value: 'Surface microhardness',
    min: 220,
    max: 4500,
    units: 'kg.mm2'
  },
  'Tensile Strength At Yield': {
    type: 'numericProperty',
    value: 'Tensile Strength At Yield',
    min: 18.6,
    max: 53,
    units: 'MPa'
  },
  'Total conductivity (\u03C3t)': {
    type: 'numericProperty',
    value: 'Total conductivity (\u03C3t)',
    min: 0.0000171,
    max: 0.0166,
    units: 'S/cm'
  },
  'Transition Temperature': {
    type: 'numericProperty',
    value: 'Transition Temperature',
    min: 490.26483712651407,
    max: 665.2638269700383,
    units: '\xB0C'
  },
  'Turnover frequency of C2H6 + H2 to 2CH4': {
    type: 'numericProperty',
    value: 'Turnover frequency of C2H6 + H2 to 2CH4',
    units: 'CH4/site\xB7s'
  },
  'Ult. Tensile Strength (Xt)': {
    type: 'numericProperty',
    value: 'Ult. Tensile Strength (Xt)',
    min: 350,
    max: 1600,
    units: 'MPa'
  },
  'Unit cell parameter (cubic)': {
    type: 'numericProperty',
    value: 'Unit cell parameter (cubic)',
    min: 5.08125,
    max: 5.13029,
    units: 'A'
  },
  'Upper Facing': {
    type: 'numericProperty',
    value: 'Upper Facing',
    min: 1,
    max: 11,
    units: '\u03BCm'
  },
  'Usp Class Vi Certified': {
    type: 'categoricalProperty',
    value: 'Usp Class Vi Certified',
    options: []
  },
  'Vicat Softening temperature': {
    type: 'numericProperty',
    value: 'Vicat Softening temperature',
    min: 283,
    max: 314,
    units: '\xB0C'
  },
  'Water Absorption At Saturation': {
    type: 'numericProperty',
    value: 'Water Absorption At Saturation',
    min: 2.5,
    max: 3.6,
    units: '%'
  },
  'Zr Diffusion attempt frequency, v2': {
    type: 'numericProperty',
    value: 'Zr Diffusion attempt frequency, v2',
    min: 2.2566,
    max: 4.9013,
    units: 'THz'
  },
  'Zr Diffusion attempt frequency, v3': {
    type: 'numericProperty',
    value: 'Zr Diffusion attempt frequency, v3',
    min: 1.5514,
    max: 5.667,
    units: 'THz'
  },
  'Zr Diffusion attempt frequency, v4': {
    type: 'numericProperty',
    value: 'Zr Diffusion attempt frequency, v4',
    min: 1.4252,
    max: 5.7822,
    units: 'THz'
  },
  'Zr Diffusion barrier barrier, E2': {
    type: 'numericProperty',
    value: 'Zr Diffusion barrier barrier, E2',
    min: 0.0756,
    max: 1.4867,
    units: 'eV'
  },
  'Zr Diffusion barrier barrier, E3': {
    type: 'numericProperty',
    value: 'Zr Diffusion barrier barrier, E3',
    min: 0.4586,
    max: 2.4961,
    units: 'eV'
  },
  'Zr Diffusion barrier barrier, E4': {
    type: 'numericProperty',
    value: 'Zr Diffusion barrier barrier, E4',
    min: 0.4665,
    max: 2.5704,
    units: 'eV'
  },
  'ln (\u03C3n,1) (electronic)': {
    type: 'numericProperty',
    value: 'ln (\u03C3n,1) (electronic)',
    min: -7.556769147788567,
    max: -3.8402103559870544,
    units: 'S/cm'
  },
  'log \u03C31 (ionic)': {
    type: 'numericProperty',
    value: 'log \u03C31 (ionic)',
    min: -7.855845177039444,
    max: -2.6824762050066306,
    units: 'S/cm'
  },
  'log\u03C3e (electronic)': {
    type: 'numericProperty',
    value: 'log\u03C3e (electronic)',
    min: -5.641538461538462,
    max: -4.460000000000001,
    units: 'S/cm'
  },
  νt12: {
    type: 'categoricalProperty',
    value: '\u03BDt12',
    options: []
  },
  '\u03C31 (ionic)(converted from log)': {
    type: 'numericProperty',
    value: '\u03C31 (ionic)(converted from log)',
    min: 1.3937e-8,
    max: 0.002077417544155529,
    units: 'S/cm'
  },
  σi·102: {
    type: 'numericProperty',
    value: '\u03C3i\xB7102',
    min: 0.03,
    max: 9.45,
    units: 'S/cm'
  },
  'Activation energy at high temperature (\u0394EHT)': {
    type: 'numericProperty',
    value: 'Activation energy at high temperature (\u0394EHT)',
    min: 0.39,
    max: 1.12,
    units: 'eV'
  },
  'Activation energy at low temperature (\u0394ELT)': {
    type: 'numericProperty',
    value: 'Activation energy at low temperature (\u0394ELT)',
    min: 0.9,
    max: 1.19,
    units: 'eV'
  },
  'Activation energy of CH2O to CH2* + O*': {
    type: 'numericProperty',
    value: 'Activation energy of CH2O to CH2* + O*',
    min: -1.502,
    max: 3.831,
    units: 'eV'
  },
  'Adsorption energy of O2': {
    type: 'numericProperty',
    value: 'Adsorption energy of O2',
    min: -1.48,
    max: -0.16,
    units: 'eV'
  },
  'Adsorption enthalpy of CO': {
    type: 'numericProperty',
    value: 'Adsorption enthalpy of CO',
    min: 134,
    max: 225,
    units: 'kJ/mol'
  },
  'Ag Diffusion prefactor, D0': {
    type: 'numericProperty',
    value: 'Ag Diffusion prefactor, D0',
    min: 0.041398,
    max: 15.3,
    units: 'cm2/s'
  },
  'Brookfield Viscosity': {
    type: 'numericProperty',
    value: 'Brookfield Viscosity',
    units: 'Pa\xB7s'
  },
  'Cd Diffusion prefactor, D0': {
    type: 'numericProperty',
    value: 'Cd Diffusion prefactor, D0',
    min: 0.133,
    max: 17,
    units: 'cm2/s'
  },
  'Coeff. Of Thermal Expansion': {
    type: 'numericProperty',
    value: 'Coeff. Of Thermal Expansion',
    units: '/\xB0C'
  },
  'Coefficient of thermal expansion I to laminates': {
    type: 'categoricalProperty',
    value: 'Coefficient of thermal expansion I to laminates',
    options: []
  },
  'Crystal Size (nm)': {
    type: 'numericProperty',
    value: 'Crystal Size (nm)',
    min: 9,
    max: 30,
    units: 'nm'
  },
  'Density of states (Pb)': {
    type: 'categoricalProperty',
    value: 'Density of states (Pb)',
    options: []
  },
  'Dissociation barrier of NO': {
    type: 'numericProperty',
    value: 'Dissociation barrier of NO',
    min: 0.73,
    max: 3.11,
    units: 'eV'
  },
  'Elongation A': {
    type: 'numericProperty',
    value: 'Elongation A',
    min: 10,
    max: 10,
    units: '%'
  },
  'Energy spin-orbital splitting': {
    type: 'numericProperty',
    value: 'Energy spin-orbital splitting',
    min: 0.019,
    max: 6,
    units: 'eV'
  },
  'Lattice Constant\u03B3': {
    type: 'categoricalProperty',
    value: 'Lattice Constant\u03B3',
    options: []
  },
  'Lattice parameter (a0)': {
    type: 'numericProperty',
    value: 'Lattice parameter (a0)',
    min: 5.116489589739257,
    max: 5.149748432615739,
    units: 'A'
  },
  'LogA\'': {
    type: 'categoricalProperty',
    value: 'LogA\'',
    options: []
  },
  Logσ700: {
    type: 'numericProperty',
    value: 'Log\u03C3700',
    min: -6.074926276997341,
    max: -2.089006382741814,
    units: 'S/cm'
  },
  'Mo Diffusion attempt frequency, v2': {
    type: 'numericProperty',
    value: 'Mo Diffusion attempt frequency, v2',
    min: 3.5434,
    max: 5.4097,
    units: 'THz'
  },
  'Mo Diffusion attempt frequency, v3': {
    type: 'numericProperty',
    value: 'Mo Diffusion attempt frequency, v3',
    min: 1.6076,
    max: 5.6166,
    units: 'THz'
  },
  'Mo Diffusion attempt frequency, v4': {
    type: 'numericProperty',
    value: 'Mo Diffusion attempt frequency, v4',
    min: 1.3974,
    max: 4.7355,
    units: 'THz'
  },
  'Mo Diffusion barrier barrier, E2': {
    type: 'numericProperty',
    value: 'Mo Diffusion barrier barrier, E2',
    min: 0.5362,
    max: 2.7001,
    units: 'eV'
  },
  'Mo Diffusion barrier barrier, E3': {
    type: 'numericProperty',
    value: 'Mo Diffusion barrier barrier, E3',
    min: 0.5627,
    max: 2.5852,
    units: 'eV'
  },
  'Mo Diffusion barrier barrier, E4': {
    type: 'numericProperty',
    value: 'Mo Diffusion barrier barrier, E4',
    min: 0.6397,
    max: 2.836,
    units: 'eV'
  },
  'Pd Diffusion attempt frequency, v2': {
    type: 'numericProperty',
    value: 'Pd Diffusion attempt frequency, v2',
    min: 1.5073,
    max: 4.2946,
    units: 'THz'
  },
  'Pd Diffusion attempt frequency, v3': {
    type: 'numericProperty',
    value: 'Pd Diffusion attempt frequency, v3',
    min: 1.5246,
    max: 4.717,
    units: 'THz'
  },
  'Pd Diffusion attempt frequency, v4': {
    type: 'numericProperty',
    value: 'Pd Diffusion attempt frequency, v4',
    min: 1.4273,
    max: 4.7764,
    units: 'THz'
  },
  'Pd Diffusion barrier barrier, E2': {
    type: 'numericProperty',
    value: 'Pd Diffusion barrier barrier, E2',
    min: 0.573,
    max: 1.618,
    units: 'eV'
  },
  'Pd Diffusion barrier barrier, E3': {
    type: 'numericProperty',
    value: 'Pd Diffusion barrier barrier, E3',
    min: 0.5374,
    max: 2.5324,
    units: 'eV'
  },
  'Pd Diffusion barrier barrier, E4': {
    type: 'numericProperty',
    value: 'Pd Diffusion barrier barrier, E4',
    min: 0.5642,
    max: 2.4438,
    units: 'eV'
  },
  'Poisson\'s Ratio (\u03BD)': {
    type: 'categoricalProperty',
    value: 'Poisson\'s Ratio (\u03BD)',
    options: []
  },
  'Reaction enthalpy of CH2O to CH2* + O*': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of CH2O to CH2* + O*',
    min: -3.67,
    max: 2.6,
    units: 'eV'
  },
  'Refined structural parameter (a)': {
    type: 'numericProperty',
    value: 'Refined structural parameter (a)',
    min: 5.4653,
    max: 5.5564,
    units: 'A'
  },
  'Residual factors (R) for the oxygen vacancy model': {
    type: 'categoricalProperty',
    value: 'Residual factors (R) for the oxygen vacancy model',
    options: []
  },
  'Ru Diffusion attempt frequency, v2': {
    type: 'numericProperty',
    value: 'Ru Diffusion attempt frequency, v2',
    min: 3.1644,
    max: 5.5947,
    units: 'THz'
  },
  'Ru Diffusion attempt frequency, v3': {
    type: 'numericProperty',
    value: 'Ru Diffusion attempt frequency, v3',
    min: 1.6148,
    max: 5.3817,
    units: 'THz'
  },
  'Ru Diffusion attempt frequency, v4': {
    type: 'numericProperty',
    value: 'Ru Diffusion attempt frequency, v4',
    min: 1.4129,
    max: 4.9045,
    units: 'THz'
  },
  'Ru Diffusion barrier barrier, E2': {
    type: 'numericProperty',
    value: 'Ru Diffusion barrier barrier, E2',
    min: 0.7255,
    max: 2.6244,
    units: 'eV'
  },
  'Ru Diffusion barrier barrier, E3': {
    type: 'numericProperty',
    value: 'Ru Diffusion barrier barrier, E3',
    min: 0.5797,
    max: 2.5466,
    units: 'eV'
  },
  'Ru Diffusion barrier barrier, E4': {
    type: 'numericProperty',
    value: 'Ru Diffusion barrier barrier, E4',
    min: 0.66,
    max: 2.6804,
    units: 'eV'
  },
  'Tensile Strain At Break': {
    type: 'numericProperty',
    value: 'Tensile Strain At Break',
    min: 1.5,
    max: 260,
    units: '%'
  },
  'Testing Standard / Certification': {
    type: 'categoricalProperty',
    value: 'Testing Standard / Certification',
    options: []
  },
  'X-ray': {
    type: 'categoricalProperty',
    value: 'X-ray',
    options: []
  },
  'Zr Diffusion prefactor, D0': {
    type: 'numericProperty',
    value: 'Zr Diffusion prefactor, D0',
    min: 0.0741,
    max: 22.6,
    units: 'cm2/s'
  },
  'log \u03C3 (electrical)': {
    type: 'numericProperty',
    value: 'log \u03C3 (electrical)',
    min: -2.313388337702232,
    max: -0.5101075848565353,
    units: 'S/cm'
  },
  '\u03C3(S/cm) at 500\xB0C': {
    type: 'numericProperty',
    value: '\u03C3(S/cm) at 500\xB0C',
    min: 5.5e-7,
    max: 0.0024,
    units: 'eV'
  },
  '\u03C3/[Oxygen content - 5.12]': {
    type: 'numericProperty',
    value: '\u03C3/[Oxygen content - 5.12]',
    min: 0.06571428571428573,
    max: 0.3106122448979591,
    units: 'S/cm'
  },
  '\u03C3700(converted from log)': {
    type: 'numericProperty',
    value: '\u03C3700(converted from log)',
    min: 8.41538e-7,
    max: 0.008146923105578907,
    units: 'S/cm'
  },
  σ800C: {
    type: 'numericProperty',
    value: '\u03C3800C',
    min: 2,
    max: 140,
    units: 'mS/cm'
  },
  A: {
    type: 'numericProperty',
    value: 'A',
    min: 3.921933375500738,
    max: 10.107465993004274,
    units: 'A'
  },
  'Activation energy of HCN to CH* + N*': {
    type: 'numericProperty',
    value: 'Activation energy of HCN to CH* + N*',
    min: -2.46,
    max: 4.334,
    units: 'eV'
  },
  'Activation energy of OCH2* to CH2* + O*': {
    type: 'numericProperty',
    value: 'Activation energy of OCH2* to CH2* + O*',
    min: 1.737,
    max: 3.74,
    units: 'eV'
  },
  'Activation energy of OCH3* to CH3* + O*': {
    type: 'numericProperty',
    value: 'Activation energy of OCH3* to CH3* + O*',
    min: 1.302,
    max: 2.34,
    units: 'eV'
  },
  'Adsorption energy of Methane': {
    type: 'numericProperty',
    value: 'Adsorption energy of Methane',
    min: 25,
    max: 56,
    units: 'kJ/mol'
  },
  'Adsorption energy of N': {
    type: 'numericProperty',
    value: 'Adsorption energy of N',
    min: -0.61,
    max: 2.4,
    units: 'eV'
  },
  'Adsorption energy of Pyridine': {
    type: 'numericProperty',
    value: 'Adsorption energy of Pyridine',
    min: -0.61,
    max: 1.54,
    units: 'eV'
  },
  'Anisotropic T-factor coefficient of O(1)': {
    type: 'categoricalProperty',
    value: 'Anisotropic T-factor coefficient of O(1)',
    options: []
  },
  'Apparent porosity': {
    type: 'numericProperty',
    value: 'Apparent porosity',
    min: -0.003463634279214034,
    max: 46.307570723997145,
    units: '%'
  },
  'Av. Grain Size': {
    type: 'numericProperty',
    value: 'Av. Grain Size',
    min: 2.8113954984272604,
    max: 6.886568580920739,
    units: '\u03BCm'
  },
  'Average thermal expansion coefficient \u03B1\' \xB7 106': {
    type: 'numericProperty',
    value: 'Average thermal expansion coefficient \u03B1\' \xB7 106',
    min: 14.1,
    max: 19.4,
    units: 'K-1'
  },
  'Bulk resistivity': {
    type: 'numericProperty',
    value: 'Bulk resistivity',
    min: 81.2,
    max: 1947,
    units: 'k\u03A9cm'
  },
  'Compressive strength at 10% deformation': {
    type: 'numericProperty',
    value: 'Compressive strength at 10% deformation',
    min: 1000,
    max: 20500,
    units: 'psi'
  },
  'Conductivity (A.C. total)': {
    type: 'numericProperty',
    value: 'Conductivity (A.C. total)',
    min: 6.9e-7,
    max: 0.00963,
    units: 'S/cm'
  },
  'Density of states (Gd)': {
    type: 'categoricalProperty',
    value: 'Density of states (Gd)',
    options: []
  },
  Ea1000c: {
    type: 'numericProperty',
    value: 'Ea1000c',
    min: 0.6,
    max: 1,
    units: 'eV'
  },
  Ec: {
    type: 'numericProperty',
    value: 'Ec',
    min: 17,
    max: 136,
    units: 'mJ/cm2'
  },
  'Effective hole masses m': {
    type: 'categoricalProperty',
    value: 'Effective hole masses m',
    options: []
  },
  'Electric resistivity': {
    type: 'numericProperty',
    value: 'Electric resistivity',
    min: 106,
    max: 108,
    units: 'Ohm*m'
  },
  'Energy seperation (E\u0393 L)': {
    type: 'numericProperty',
    value: 'Energy seperation (E\u0393 L)',
    min: 0.084,
    max: 4.2,
    units: 'eV'
  },
  'Equipment Model': {
    type: 'categoricalProperty',
    value: 'Equipment Model',
    options: []
  },
  'Grain boundary resistivity': {
    type: 'numericProperty',
    value: 'Grain boundary resistivity',
    min: 22.4,
    max: 471,
    units: 'k\u03A9cm'
  },
  'High-current arc ignition': {
    type: 'numericProperty',
    value: 'High-current arc ignition',
    units: 'Sec'
  },
  'Intrinsic carrier concentration': {
    type: 'numericProperty',
    value: 'Intrinsic carrier concentration',
    min: 2,
    max: 20000000000000000,
    units: 'cm-3'
  },
  'Ion transference number (ti)': {
    type: 'categoricalProperty',
    value: 'Ion transference number (ti)',
    options: []
  },
  'Lap shear': {
    type: 'numericProperty',
    value: 'Lap shear',
    min: 0.96,
    max: 5.88,
    units: 'MPa'
  },
  Laser: {
    type: 'categoricalProperty',
    value: 'Laser',
    options: []
  },
  Lnσ0: {
    type: 'categoricalProperty',
    value: 'Ln\u03C30',
    options: []
  },
  'Log10 A': {
    type: 'categoricalProperty',
    value: 'Log10 A',
    options: []
  },
  'Major Poisson\'s Ratio (V12)': {
    type: 'categoricalProperty',
    value: 'Major Poisson\'s Ratio (V12)',
    options: []
  },
  Metallographic: {
    type: 'categoricalProperty',
    value: 'Metallographic',
    options: []
  },
  'Mo Diffusion prefactor, D0': {
    type: 'numericProperty',
    value: 'Mo Diffusion prefactor, D0',
    min: 0.080262,
    max: 8.24,
    units: 'cm2/s'
  },
  'Nb Diffusion attempt frequency, v2': {
    type: 'numericProperty',
    value: 'Nb Diffusion attempt frequency, v2',
    min: 2.4279,
    max: 5.3714,
    units: 'THz'
  },
  'Nb Diffusion attempt frequency, v3': {
    type: 'numericProperty',
    value: 'Nb Diffusion attempt frequency, v3',
    min: 1.599,
    max: 5.3324,
    units: 'THz'
  },
  'Nb Diffusion attempt frequency, v4': {
    type: 'numericProperty',
    value: 'Nb Diffusion attempt frequency, v4',
    min: 1.4043,
    max: 4.6689,
    units: 'THz'
  },
  'Nb Diffusion barrier barrier, E2': {
    type: 'numericProperty',
    value: 'Nb Diffusion barrier barrier, E2',
    min: 0.3275,
    max: 2.1622,
    units: 'eV'
  },
  'Nb Diffusion barrier barrier, E3': {
    type: 'numericProperty',
    value: 'Nb Diffusion barrier barrier, E3',
    min: 0.4668,
    max: 2.5566,
    units: 'eV'
  },
  'Nb Diffusion barrier barrier, E4': {
    type: 'numericProperty',
    value: 'Nb Diffusion barrier barrier, E4',
    min: 0.4641,
    max: 2.7872,
    units: 'eV'
  },
  'Partial pressure': {
    type: 'numericProperty',
    value: 'Partial pressure',
    units: 'atm'
  },
  'Particle Size': {
    type: 'numericProperty',
    value: 'Particle Size',
    units: '\u03BC-m'
  },
  'Pd Diffusion prefactor, D0': {
    type: 'numericProperty',
    value: 'Pd Diffusion prefactor, D0',
    min: 0.027156,
    max: 13.7,
    units: 'cm2/s'
  },
  'Penetration Depth: Dp': {
    type: 'numericProperty',
    value: 'Penetration Depth: Dp',
    min: 79,
    max: 191,
    units: '\u03BCm'
  },
  'Poisson-S Ratio': {
    type: 'categoricalProperty',
    value: 'Poisson-S Ratio',
    options: []
  },
  'Post-Cure': {
    type: 'categoricalProperty',
    value: 'Post-Cure',
    options: []
  },
  'Pre-exponential factor \u03C30': {
    type: 'categoricalProperty',
    value: 'Pre-exponential factor \u03C30',
    options: []
  },
  'Reaction enthalpy of HCN to CH* + N*': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of HCN to CH* + N*',
    min: -4.24,
    max: 4.36,
    units: 'eV'
  },
  'Reaction enthalpy of OCH2* to CH2* + O*': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of OCH2* to CH2* + O*',
    min: -0.373,
    max: 2.607,
    units: 'eV'
  },
  'Reaction enthalpy of OCH3* to CH3* + O*': {
    type: 'numericProperty',
    value: 'Reaction enthalpy of OCH3* to CH3* + O*',
    min: -0.378,
    max: 1.632,
    units: 'eV'
  },
  'Rh Diffusion attempt frequency, v2': {
    type: 'numericProperty',
    value: 'Rh Diffusion attempt frequency, v2',
    min: 2.1442,
    max: 4.714,
    units: 'THz'
  },
  'Rh Diffusion attempt frequency, v3': {
    type: 'numericProperty',
    value: 'Rh Diffusion attempt frequency, v3',
    min: 1.5713,
    max: 5.0125,
    units: 'THz'
  },
  'Rh Diffusion attempt frequency, v4': {
    type: 'numericProperty',
    value: 'Rh Diffusion attempt frequency, v4',
    min: 1.4198,
    max: 4.8194,
    units: 'THz'
  },
  'Rh Diffusion barrier barrier, E2': {
    type: 'numericProperty',
    value: 'Rh Diffusion barrier barrier, E2',
    min: 0.7344,
    max: 2.1711,
    units: 'eV'
  },
  'Rh Diffusion barrier barrier, E3': {
    type: 'numericProperty',
    value: 'Rh Diffusion barrier barrier, E3',
    min: 0.5633,
    max: 2.5304,
    units: 'eV'
  },
  'Rh Diffusion barrier barrier, E4': {
    type: 'numericProperty',
    value: 'Rh Diffusion barrier barrier, E4',
    min: 0.5918,
    max: 2.5579,
    units: 'eV'
  },
  'Ru Diffusion prefactor, D0': {
    type: 'numericProperty',
    value: 'Ru Diffusion prefactor, D0',
    min: 0.05286,
    max: 6.95,
    units: 'cm2/s'
  },
  'Solubility in chloroform': {
    type: 'categoricalProperty',
    value: 'Solubility in chloroform',
    options: []
  },
  'Surface Ra (S Ra)': {
    type: 'numericProperty',
    value: 'Surface Ra (S Ra)',
    min: 1,
    max: 10,
    units: '\u03BCm'
  },
  'Tc Diffusion attempt frequency, v2': {
    type: 'numericProperty',
    value: 'Tc Diffusion attempt frequency, v2',
    min: 3.4214,
    max: 5.933,
    units: 'THz'
  },
  'Tc Diffusion attempt frequency, v3': {
    type: 'numericProperty',
    value: 'Tc Diffusion attempt frequency, v3',
    min: 1.5982,
    max: 5.6033,
    units: 'THz'
  },
  'Tc Diffusion attempt frequency, v4': {
    type: 'numericProperty',
    value: 'Tc Diffusion attempt frequency, v4',
    min: 1.394,
    max: 4.8094,
    units: 'THz'
  },
  'Tc Diffusion barrier barrier, E2': {
    type: 'numericProperty',
    value: 'Tc Diffusion barrier barrier, E2',
    min: 0.6612,
    max: 2.8707,
    units: 'eV'
  },
  'Tc Diffusion barrier barrier, E3': {
    type: 'numericProperty',
    value: 'Tc Diffusion barrier barrier, E3',
    min: 0.5783,
    max: 2.5757,
    units: 'eV'
  },
  'Tc Diffusion barrier barrier, E4': {
    type: 'numericProperty',
    value: 'Tc Diffusion barrier barrier, E4',
    min: 0.6434,
    max: 2.7863,
    units: 'eV'
  },
  'Thermal Exp. Co-ef. (\u03B11)': {
    type: 'numericProperty',
    value: 'Thermal Exp. Co-ef. (\u03B11)',
    min: -0.3,
    max: 18,
    units: 'Strain/K'
  },
  'Thermal Exp. Co-ef. (\u03B12)': {
    type: 'numericProperty',
    value: 'Thermal Exp. Co-ef. (\u03B12)',
    min: 1.1,
    max: 40,
    units: 'Strain/K'
  },
  'Threshold Exposure: Ec': {
    type: 'numericProperty',
    value: 'Threshold Exposure: Ec',
    min: 5,
    max: 33,
    units: 'mJ/cm2'
  },
  'Total porosity': {
    type: 'numericProperty',
    value: 'Total porosity',
    units: '%'
  },
  'Total resistivity': {
    type: 'numericProperty',
    value: 'Total resistivity',
    min: 111.1,
    max: 2302,
    units: 'k\u03A9cm'
  },
  'Transition temperature': {
    type: 'numericProperty',
    value: 'Transition temperature',
    min: 446.87083888149164,
    max: 1100.9320905459388,
    units: '\xB0C'
  },
  C8OH12: {
    type: 'chemicalFormula',
    value: 'C8OH12'
  },
  C7O2H10: {
    type: 'chemicalFormula',
    value: 'C7O2H10'
  },
  C7O2H12: {
    type: 'chemicalFormula',
    value: 'C7O2H12'
  },
  C8OH14: {
    type: 'chemicalFormula',
    value: 'C8OH14'
  },
  C7NOH11: {
    type: 'chemicalFormula',
    value: 'C7NOH11'
  },
  C8OH10: {
    type: 'chemicalFormula',
    value: 'C8OH10'
  },
  C7ONH11: {
    type: 'chemicalFormula',
    value: 'C7ONH11'
  },
  C6O2NH9: {
    type: 'chemicalFormula',
    value: 'C6O2NH9'
  },
  O2C6NH7: {
    type: 'chemicalFormula',
    value: 'O2C6NH7'
  },
  C7ONH9: {
    type: 'chemicalFormula',
    value: 'C7ONH9'
  },
  O2C7H10: {
    type: 'chemicalFormula',
    value: 'O2C7H10'
  },
  C7NOH9: {
    type: 'chemicalFormula',
    value: 'C7NOH9'
  },
  O2C6NH9: {
    type: 'chemicalFormula',
    value: 'O2C6NH9'
  },
  C6N2OH10: {
    type: 'chemicalFormula',
    value: 'C6N2OH10'
  },
  C7O2H14: {
    type: 'chemicalFormula',
    value: 'C7O2H14'
  },
  C6O3H10: {
    type: 'chemicalFormula',
    value: 'C6O3H10'
  },
  C6O2NH11: {
    type: 'chemicalFormula',
    value: 'C6O2NH11'
  },
  C7O2H8: {
    type: 'chemicalFormula',
    value: 'C7O2H8'
  },
  O2C7H8: {
    type: 'chemicalFormula',
    value: 'O2C7H8'
  },
  C6N2OH8: {
    type: 'chemicalFormula',
    value: 'C6N2OH8'
  },
  O3C6H8: {
    type: 'chemicalFormula',
    value: 'O3C6H8'
  },
  OC7NH9: {
    type: 'chemicalFormula',
    value: 'OC7NH9'
  },
  C9H14: {
    type: 'chemicalFormula',
    value: 'C9H14'
  },
  C6NO2H9: {
    type: 'chemicalFormula',
    value: 'C6NO2H9'
  },
  C8NH11: {
    type: 'chemicalFormula',
    value: 'C8NH11'
  },
  C6O3H8: {
    type: 'chemicalFormula',
    value: 'C6O3H8'
  },
  C7NOH13: {
    type: 'chemicalFormula',
    value: 'C7NOH13'
  },
  C9H12: {
    type: 'chemicalFormula',
    value: 'C9H12'
  },
  C7ONH13: {
    type: 'chemicalFormula',
    value: 'C7ONH13'
  },
  C7N2H10: {
    type: 'chemicalFormula',
    value: 'C7N2H10'
  },
  C6O2NH7: {
    type: 'chemicalFormula',
    value: 'C6O2NH7'
  },
  C8NH13: {
    type: 'chemicalFormula',
    value: 'C8NH13'
  },
  C8NH9: {
    type: 'chemicalFormula',
    value: 'C8NH9'
  },
  C8OH16: {
    type: 'chemicalFormula',
    value: 'C8OH16'
  },
  C7N2H8: {
    type: 'chemicalFormula',
    value: 'C7N2H8'
  },
  C6NO2H11: {
    type: 'chemicalFormula',
    value: 'C6NO2H11'
  },
  C9H16: {
    type: 'chemicalFormula',
    value: 'C9H16'
  },
  OC7NH7: {
    type: 'chemicalFormula',
    value: 'OC7NH7'
  },
  C6O3H12: {
    type: 'chemicalFormula',
    value: 'C6O3H12'
  },
  O3C6H6: {
    type: 'chemicalFormula',
    value: 'O3C6H6'
  },
  C5N3OH7: {
    type: 'chemicalFormula',
    value: 'C5N3OH7'
  },
  C7OH12: {
    type: 'chemicalFormula',
    value: 'C7OH12'
  },
  OC6N2H8: {
    type: 'chemicalFormula',
    value: 'OC6N2H8'
  },
  C7OH10: {
    type: 'chemicalFormula',
    value: 'C7OH10'
  },
  C6O2H10: {
    type: 'chemicalFormula',
    value: 'C6O2H10'
  },
  O3C6H10: {
    type: 'chemicalFormula',
    value: 'O3C6H10'
  },
  'Fe.98C.02': {
    type: 'chemicalFormula',
    value: 'Fe.98C.02'
  },
  C7N2H12: {
    type: 'chemicalFormula',
    value: 'C7N2H12'
  },
  C6ON2H10: {
    type: 'chemicalFormula',
    value: 'C6ON2H10'
  },
  C8OH8: {
    type: 'chemicalFormula',
    value: 'C8OH8'
  },
  N2C6OH8: {
    type: 'chemicalFormula',
    value: 'N2C6OH8'
  },
  OC8H10: {
    type: 'chemicalFormula',
    value: 'OC8H10'
  },
  OC6N2H6: {
    type: 'chemicalFormula',
    value: 'OC6N2H6'
  },
  OC7NH11: {
    type: 'chemicalFormula',
    value: 'OC7NH11'
  },
  O2C6NH5: {
    type: 'chemicalFormula',
    value: 'O2C6NH5'
  },
  C5N3OH9: {
    type: 'chemicalFormula',
    value: 'C5N3OH9'
  },
  O3C5NH7: {
    type: 'chemicalFormula',
    value: 'O3C5NH7'
  },
  C6ON2H8: {
    type: 'chemicalFormula',
    value: 'C6ON2H8'
  },
  O2C7H12: {
    type: 'chemicalFormula',
    value: 'O2C7H12'
  },
  O2C5N2H6: {
    type: 'chemicalFormula',
    value: 'O2C5N2H6'
  },
  C6N3H9: {
    type: 'chemicalFormula',
    value: 'C6N3H9'
  },
  C5N2O2H8: {
    type: 'chemicalFormula',
    value: 'C5N2O2H8'
  },
  Pt: {
    type: 'chemicalFormula',
    value: 'Pt'
  },
  N2C5O2H6: {
    type: 'chemicalFormula',
    value: 'N2C5O2H6'
  },
  Si3N4: {
    type: 'chemicalFormula',
    value: 'Si3N4'
  },
  SiC: {
    type: 'chemicalFormula',
    value: 'SiC'
  },
  LaCrO3: {
    type: 'chemicalFormula',
    value: 'LaCrO3'
  },
  C6N3H7: {
    type: 'chemicalFormula',
    value: 'C6N3H7'
  },
  OC8H12: {
    type: 'chemicalFormula',
    value: 'OC8H12'
  },
  C6O2H8: {
    type: 'chemicalFormula',
    value: 'C6O2H8'
  },
  C7ONH7: {
    type: 'chemicalFormula',
    value: 'C7ONH7'
  },
  LaMnO3: {
    type: 'chemicalFormula',
    value: 'LaMnO3'
  },
  C6NOH9: {
    type: 'chemicalFormula',
    value: 'C6NOH9'
  },
  C5O2N2H8: {
    type: 'chemicalFormula',
    value: 'C5O2N2H8'
  },
  SiO2: {
    type: 'chemicalFormula',
    value: 'SiO2'
  },
  C6NO2H7: {
    type: 'chemicalFormula',
    value: 'C6NO2H7'
  },
  N3C5OH7: {
    type: 'chemicalFormula',
    value: 'N3C5OH7'
  },
  C7NOH7: {
    type: 'chemicalFormula',
    value: 'C7NOH7'
  },
  O3C5NH5: {
    type: 'chemicalFormula',
    value: 'O3C5NH5'
  },
  Al2O3: {
    type: 'chemicalFormula',
    value: 'Al2O3'
  },
  N2C6OH6: {
    type: 'chemicalFormula',
    value: 'N2C6OH6'
  },
  C6O2H12: {
    type: 'chemicalFormula',
    value: 'C6O2H12'
  },
  C9H10: {
    type: 'chemicalFormula',
    value: 'C9H10'
  },
  NC6O2H7: {
    type: 'chemicalFormula',
    value: 'NC6O2H7'
  },
  C6N2OH12: {
    type: 'chemicalFormula',
    value: 'C6N2OH12'
  },
  O2C7H6: {
    type: 'chemicalFormula',
    value: 'O2C7H6'
  },
  N2C5O2H8: {
    type: 'chemicalFormula',
    value: 'N2C5O2H8'
  },
  C6ONH9: {
    type: 'chemicalFormula',
    value: 'C6ONH9'
  },
  C6N2OH6: {
    type: 'chemicalFormula',
    value: 'C6N2OH6'
  },
  C6N3H11: {
    type: 'chemicalFormula',
    value: 'C6N3H11'
  },
  Cu: {
    type: 'chemicalFormula',
    value: 'Cu'
  },
  C10H18O: {
    type: 'chemicalFormula',
    value: 'C10H18O'
  },
  O2C6H8: {
    type: 'chemicalFormula',
    value: 'O2C6H8'
  },
  C6O2NH13: {
    type: 'chemicalFormula',
    value: 'C6O2NH13'
  },
  Ni: {
    type: 'chemicalFormula',
    value: 'Ni'
  },
  O2C6NH11: {
    type: 'chemicalFormula',
    value: 'O2C6NH11'
  },
  C5O3NH9: {
    type: 'chemicalFormula',
    value: 'C5O3NH9'
  },
  O2C5N2H8: {
    type: 'chemicalFormula',
    value: 'O2C5N2H8'
  },
  C5N2O2H6: {
    type: 'chemicalFormula',
    value: 'C5N2O2H6'
  },
  N3C5OH5: {
    type: 'chemicalFormula',
    value: 'N3C5OH5'
  },
  O2C5NH7: {
    type: 'chemicalFormula',
    value: 'O2C5NH7'
  },
  OC8H8: {
    type: 'chemicalFormula',
    value: 'OC8H8'
  },
  C11H20O: {
    type: 'chemicalFormula',
    value: 'C11H20O'
  },
  Au: {
    type: 'chemicalFormula',
    value: 'Au'
  },
  C12H22O: {
    type: 'chemicalFormula',
    value: 'C12H22O'
  },
  C5O2N2H6: {
    type: 'chemicalFormula',
    value: 'C5O2N2H6'
  },
  Co: {
    type: 'chemicalFormula',
    value: 'Co'
  },
  NC7OH9: {
    type: 'chemicalFormula',
    value: 'NC7OH9'
  },
  N2C7H8: {
    type: 'chemicalFormula',
    value: 'N2C7H8'
  },
  Fe: {
    type: 'chemicalFormula',
    value: 'Fe'
  },
  C7OH14: {
    type: 'chemicalFormula',
    value: 'C7OH14'
  },
  C5O3NH7: {
    type: 'chemicalFormula',
    value: 'C5O3NH7'
  },
  C6NOH11: {
    type: 'chemicalFormula',
    value: 'C6NOH11'
  },
  C5N4H8: {
    type: 'chemicalFormula',
    value: 'C5N4H8'
  },
  C8H14: {
    type: 'chemicalFormula',
    value: 'C8H14'
  },
  N3C4O2H5: {
    type: 'chemicalFormula',
    value: 'N3C4O2H5'
  },
  C5N2OH8: {
    type: 'chemicalFormula',
    value: 'C5N2OH8'
  },
  NC6O2H9: {
    type: 'chemicalFormula',
    value: 'NC6O2H9'
  },
  C8H12: {
    type: 'chemicalFormula',
    value: 'C8H12'
  },
  C9H18: {
    type: 'chemicalFormula',
    value: 'C9H18'
  },
  'O2 Si': {
    type: 'chemicalFormula',
    value: 'O2 Si'
  },
  Ag: {
    type: 'chemicalFormula',
    value: 'Ag'
  },
  C4N4OH6: {
    type: 'chemicalFormula',
    value: 'C4N4OH6'
  },
  N3C6H7: {
    type: 'chemicalFormula',
    value: 'N3C6H7'
  },
  C7NH11: {
    type: 'chemicalFormula',
    value: 'C7NH11'
  },
  NC7OH7: {
    type: 'chemicalFormula',
    value: 'NC7OH7'
  },
  C5O2NH9: {
    type: 'chemicalFormula',
    value: 'C5O2NH9'
  },
  C6ONH11: {
    type: 'chemicalFormula',
    value: 'C6ONH11'
  },
  O3C5NH9: {
    type: 'chemicalFormula',
    value: 'O3C5NH9'
  },
  C10H20O: {
    type: 'chemicalFormula',
    value: 'C10H20O'
  },
  N4C4OH6: {
    type: 'chemicalFormula',
    value: 'N4C4OH6'
  },
  O2C5N2H4: {
    type: 'chemicalFormula',
    value: 'O2C5N2H4'
  },
  C7O2H16: {
    type: 'chemicalFormula',
    value: 'C7O2H16'
  },
  O4C5H6: {
    type: 'chemicalFormula',
    value: 'O4C5H6'
  },
  C7OH8: {
    type: 'chemicalFormula',
    value: 'C7OH8'
  },
  C5O2NH7: {
    type: 'chemicalFormula',
    value: 'C5O2NH7'
  },
  C5N2O2H10: {
    type: 'chemicalFormula',
    value: 'C5N2O2H10'
  },
  OC6NH7: {
    type: 'chemicalFormula',
    value: 'OC6NH7'
  },
  C11H22O: {
    type: 'chemicalFormula',
    value: 'C11H22O'
  },
  C5ON3H7: {
    type: 'chemicalFormula',
    value: 'C5ON3H7'
  },
  OC6NH9: {
    type: 'chemicalFormula',
    value: 'OC6NH9'
  },
  Pd: {
    type: 'chemicalFormula',
    value: 'Pd'
  },
  C5N4H6: {
    type: 'chemicalFormula',
    value: 'C5N4H6'
  },
  OC6N2H10: {
    type: 'chemicalFormula',
    value: 'OC6N2H10'
  },
  C9H16O: {
    type: 'chemicalFormula',
    value: 'C9H16O'
  },
  O2C6H10: {
    type: 'chemicalFormula',
    value: 'O2C6H10'
  },
  C7NH9: {
    type: 'chemicalFormula',
    value: 'C7NH9'
  },
  C6O3H6: {
    type: 'chemicalFormula',
    value: 'C6O3H6'
  },
  Rh: {
    type: 'chemicalFormula',
    value: 'Rh'
  },
  C5ON3H9: {
    type: 'chemicalFormula',
    value: 'C5ON3H9'
  },
  W: {
    type: 'chemicalFormula',
    value: 'W'
  },
  C8NH7: {
    type: 'chemicalFormula',
    value: 'C8NH7'
  },
  C11H20: {
    type: 'chemicalFormula',
    value: 'C11H20'
  },
  C6N2H10: {
    type: 'chemicalFormula',
    value: 'C6N2H10'
  },
  C12H20O: {
    type: 'chemicalFormula',
    value: 'C12H20O'
  },
  ZrO2: {
    type: 'chemicalFormula',
    value: 'ZrO2'
  },
  C11H18O: {
    type: 'chemicalFormula',
    value: 'C11H18O'
  },
  C6ON2H6: {
    type: 'chemicalFormula',
    value: 'C6ON2H6'
  },
  'Mg O': {
    type: 'chemicalFormula',
    value: 'Mg O'
  },
  OC5N3H5: {
    type: 'chemicalFormula',
    value: 'OC5N3H5'
  },
  C9H18O: {
    type: 'chemicalFormula',
    value: 'C9H18O'
  },
  C5O2N2H10: {
    type: 'chemicalFormula',
    value: 'C5O2N2H10'
  },
  C8H16: {
    type: 'chemicalFormula',
    value: 'C8H16'
  },
  OC6N2H4: {
    type: 'chemicalFormula',
    value: 'OC6N2H4'
  },
  C13H24O: {
    type: 'chemicalFormula',
    value: 'C13H24O'
  },
  C7ONH15: {
    type: 'chemicalFormula',
    value: 'C7ONH15'
  },
  OC5N3H7: {
    type: 'chemicalFormula',
    value: 'OC5N3H7'
  },
  C5O3H8: {
    type: 'chemicalFormula',
    value: 'C5O3H8'
  },
  NC5O3H7: {
    type: 'chemicalFormula',
    value: 'NC5O3H7'
  },
  O3C5H6: {
    type: 'chemicalFormula',
    value: 'O3C5H6'
  },
  C10H18: {
    type: 'chemicalFormula',
    value: 'C10H18'
  },
  O4C5H8: {
    type: 'chemicalFormula',
    value: 'O4C5H8'
  },
  Ru: {
    type: 'chemicalFormula',
    value: 'Ru'
  },
  'Al2 Mg O4': {
    type: 'chemicalFormula',
    value: 'Al2 Mg O4'
  },
  C8H10: {
    type: 'chemicalFormula',
    value: 'C8H10'
  },
  O2C5NH5: {
    type: 'chemicalFormula',
    value: 'O2C5NH5'
  },
  C12H22: {
    type: 'chemicalFormula',
    value: 'C12H22'
  },
  N3C6H9: {
    type: 'chemicalFormula',
    value: 'N3C6H9'
  },
  C11H20OS: {
    type: 'chemicalFormula',
    value: 'C11H20OS'
  },
  C7NOH15: {
    type: 'chemicalFormula',
    value: 'C7NOH15'
  },
  C6OH10: {
    type: 'chemicalFormula',
    value: 'C6OH10'
  },
  O2C6H6: {
    type: 'chemicalFormula',
    value: 'O2C6H6'
  },
  C5N3OH5: {
    type: 'chemicalFormula',
    value: 'C5N3OH5'
  },
  N4C5H6: {
    type: 'chemicalFormula',
    value: 'N4C5H6'
  },
  C10H16O: {
    type: 'chemicalFormula',
    value: 'C10H16O'
  },
  C12H24O: {
    type: 'chemicalFormula',
    value: 'C12H24O'
  },
  C9H19P: {
    type: 'chemicalFormula',
    value: 'C9H19P'
  },
  C4N3O2H5: {
    type: 'chemicalFormula',
    value: 'C4N3O2H5'
  },
  OC7NH5: {
    type: 'chemicalFormula',
    value: 'OC7NH5'
  },
  O3C5H8: {
    type: 'chemicalFormula',
    value: 'O3C5H8'
  },
  C8NH15: {
    type: 'chemicalFormula',
    value: 'C8NH15'
  },
  C12H20O3: {
    type: 'chemicalFormula',
    value: 'C12H20O3'
  },
  C7N2H6: {
    type: 'chemicalFormula',
    value: 'C7N2H6'
  },
  N2C6OH10: {
    type: 'chemicalFormula',
    value: 'N2C6OH10'
  },
  C11H20O2: {
    type: 'chemicalFormula',
    value: 'C11H20O2'
  },
  'Mg O3 Si': {
    type: 'chemicalFormula',
    value: 'Mg O3 Si'
  },
  N3C6H5: {
    type: 'chemicalFormula',
    value: 'N3C6H5'
  },
  N4C4OH4: {
    type: 'chemicalFormula',
    value: 'N4C4OH4'
  },
  O2Si1: {
    type: 'chemicalFormula',
    value: 'O2Si1'
  },
  'ZrO2.xY2O3': {
    type: 'chemicalFormula',
    value: 'ZrO2.xY2O3'
  },
  C11H21NO: {
    type: 'chemicalFormula',
    value: 'C11H21NO'
  },
  C8OH18: {
    type: 'chemicalFormula',
    value: 'C8OH18'
  },
  C13H22O3: {
    type: 'chemicalFormula',
    value: 'C13H22O3'
  },
  TiB2: {
    type: 'chemicalFormula',
    value: 'TiB2'
  },
  C9H18N2: {
    type: 'chemicalFormula',
    value: 'C9H18N2'
  },
  C11H22OS: {
    type: 'chemicalFormula',
    value: 'C11H22OS'
  },
  OC7H10: {
    type: 'chemicalFormula',
    value: 'OC7H10'
  },
  C5N4H10: {
    type: 'chemicalFormula',
    value: 'C5N4H10'
  },
  C5NO2H9: {
    type: 'chemicalFormula',
    value: 'C5NO2H9'
  },
  C6ONH7: {
    type: 'chemicalFormula',
    value: 'C6ONH7'
  },
  N2C7H10: {
    type: 'chemicalFormula',
    value: 'N2C7H10'
  },
  C10H19NO: {
    type: 'chemicalFormula',
    value: 'C10H19NO'
  },
  C7O2H6: {
    type: 'chemicalFormula',
    value: 'C7O2H6'
  },
  C6N2H8: {
    type: 'chemicalFormula',
    value: 'C6N2H8'
  },
  C10H18O2: {
    type: 'chemicalFormula',
    value: 'C10H18O2'
  },
  C4N4OH8: {
    type: 'chemicalFormula',
    value: 'C4N4OH8'
  },
  O4Ti2: {
    type: 'chemicalFormula',
    value: 'O4Ti2'
  },
  N2C7H6: {
    type: 'chemicalFormula',
    value: 'N2C7H6'
  },
  CaCrO3: {
    type: 'chemicalFormula',
    value: 'CaCrO3'
  },
  C6NO2H13: {
    type: 'chemicalFormula',
    value: 'C6NO2H13'
  },
  C7H12: {
    type: 'chemicalFormula',
    value: 'C7H12'
  },
  TiO2: {
    type: 'chemicalFormula',
    value: 'TiO2'
  },
  C4N5H7: {
    type: 'chemicalFormula',
    value: 'C4N5H7'
  },
  O6Si3: {
    type: 'chemicalFormula',
    value: 'O6Si3'
  },
  O2C4N3H5: {
    type: 'chemicalFormula',
    value: 'O2C4N3H5'
  },
  N2C5O2H4: {
    type: 'chemicalFormula',
    value: 'N2C5O2H4'
  },
  Al: {
    type: 'chemicalFormula',
    value: 'Al'
  },
  C6NOH7: {
    type: 'chemicalFormula',
    value: 'C6NOH7'
  },
  AlN: {
    type: 'chemicalFormula',
    value: 'AlN'
  },
  C5N2OH6: {
    type: 'chemicalFormula',
    value: 'C5N2OH6'
  },
  C5O3NH5: {
    type: 'chemicalFormula',
    value: 'C5O3NH5'
  },
  C5O3H10: {
    type: 'chemicalFormula',
    value: 'C5O3H10'
  },
  C8H16O: {
    type: 'chemicalFormula',
    value: 'C8H16O'
  },
  Si: {
    type: 'chemicalFormula',
    value: 'Si'
  },
  C4N3OH7: {
    type: 'chemicalFormula',
    value: 'C4N3OH7'
  },
  O2C5NH9: {
    type: 'chemicalFormula',
    value: 'O2C5NH9'
  },
  C6ON2H12: {
    type: 'chemicalFormula',
    value: 'C6ON2H12'
  },
  ZnS: {
    type: 'chemicalFormula',
    value: 'ZnS'
  },
  CaMnO3: {
    type: 'chemicalFormula',
    value: 'CaMnO3'
  },
  MgO: {
    type: 'chemicalFormula',
    value: 'MgO'
  },
  Pb: {
    type: 'chemicalFormula',
    value: 'Pb'
  },
  C8H17P: {
    type: 'chemicalFormula',
    value: 'C8H17P'
  },
  Mg: {
    type: 'chemicalFormula',
    value: 'Mg'
  },
  N2C5OH6: {
    type: 'chemicalFormula',
    value: 'N2C5OH6'
  },
  OC5N2H6: {
    type: 'chemicalFormula',
    value: 'OC5N2H6'
  },
  C9H16OS: {
    type: 'chemicalFormula',
    value: 'C9H16OS'
  },
  C5ON2H8: {
    type: 'chemicalFormula',
    value: 'C5ON2H8'
  },
  C8H14O: {
    type: 'chemicalFormula',
    value: 'C8H14O'
  },
  N3C4OH5: {
    type: 'chemicalFormula',
    value: 'N3C4OH5'
  },
  SrMnO3: {
    type: 'chemicalFormula',
    value: 'SrMnO3'
  },
  O3C6H12: {
    type: 'chemicalFormula',
    value: 'O3C6H12'
  },
  C5NO3H7: {
    type: 'chemicalFormula',
    value: 'C5NO3H7'
  },
  CdI2: {
    type: 'chemicalFormula',
    value: 'CdI2'
  },
  NC5O3H5: {
    type: 'chemicalFormula',
    value: 'NC5O3H5'
  },
  C5N3H9: {
    type: 'chemicalFormula',
    value: 'C5N3H9'
  },
  C5O4H8: {
    type: 'chemicalFormula',
    value: 'C5O4H8'
  },
  C6O2NH5: {
    type: 'chemicalFormula',
    value: 'C6O2NH5'
  },
  C4N3O2H7: {
    type: 'chemicalFormula',
    value: 'C4N3O2H7'
  },
  C5O3NH11: {
    type: 'chemicalFormula',
    value: 'C5O3NH11'
  },
  C8H16OS: {
    type: 'chemicalFormula',
    value: 'C8H16OS'
  },
  C5N2OH10: {
    type: 'chemicalFormula',
    value: 'C5N2OH10'
  },
  C5NO2H7: {
    type: 'chemicalFormula',
    value: 'C5NO2H7'
  },
  LaTiO3: {
    type: 'chemicalFormula',
    value: 'LaTiO3'
  },
  N3C4O2H7: {
    type: 'chemicalFormula',
    value: 'N3C4O2H7'
  },
  NdNiO3: {
    type: 'chemicalFormula',
    value: 'NdNiO3'
  },
  OC7H8: {
    type: 'chemicalFormula',
    value: 'OC7H8'
  },
  C12H22O2: {
    type: 'chemicalFormula',
    value: 'C12H22O2'
  },
  C12H20: {
    type: 'chemicalFormula',
    value: 'C12H20'
  },
  C6O3H14: {
    type: 'chemicalFormula',
    value: 'C6O3H14'
  },
  'Fe2 Mg O4': {
    type: 'chemicalFormula',
    value: 'Fe2 Mg O4'
  },
  'O2 Si1': {
    type: 'chemicalFormula',
    value: 'O2 Si1'
  },
  SrCrO3: {
    type: 'chemicalFormula',
    value: 'SrCrO3'
  },
  N3C5OH9: {
    type: 'chemicalFormula',
    value: 'N3C5OH9'
  },
  '3Al2O3.2SiO2': {
    type: 'chemicalFormula',
    value: '3Al2O3.2SiO2'
  },
  C10H16: {
    type: 'chemicalFormula',
    value: 'C10H16'
  },
  C5O2H10: {
    type: 'chemicalFormula',
    value: 'C5O2H10'
  },
  C11H18O3: {
    type: 'chemicalFormula',
    value: 'C11H18O3'
  },
  C6OH8: {
    type: 'chemicalFormula',
    value: 'C6OH8'
  },
  N2C4O3H4: {
    type: 'chemicalFormula',
    value: 'N2C4O3H4'
  },
  'Pr0.9Ca0.1VO3': {
    type: 'chemicalFormula',
    value: 'Pr0.9Ca0.1VO3'
  },
  C10H20N2: {
    type: 'chemicalFormula',
    value: 'C10H20N2'
  },
  C5O2H8: {
    type: 'chemicalFormula',
    value: 'C5O2H8'
  },
  NC8H9: {
    type: 'chemicalFormula',
    value: 'NC8H9'
  },
  'YBa2C3O7-x': {
    type: 'chemicalFormula',
    value: 'YBa2C3O7-x'
  },
  C12H22OS: {
    type: 'chemicalFormula',
    value: 'C12H22OS'
  },
  C12H23NO: {
    type: 'chemicalFormula',
    value: 'C12H23NO'
  },
  C13H24: {
    type: 'chemicalFormula',
    value: 'C13H24'
  },
  O3C4N2H4: {
    type: 'chemicalFormula',
    value: 'O3C4N2H4'
  },
  OC8H14: {
    type: 'chemicalFormula',
    value: 'OC8H14'
  },
  B4C: {
    type: 'chemicalFormula',
    value: 'B4C'
  },
  N4C3O2H4: {
    type: 'chemicalFormula',
    value: 'N4C3O2H4'
  },
  ZnO: {
    type: 'chemicalFormula',
    value: 'ZnO'
  },
  C5NO3H9: {
    type: 'chemicalFormula',
    value: 'C5NO3H9'
  },
  C9H17NO: {
    type: 'chemicalFormula',
    value: 'C9H17NO'
  },
  C9H18S: {
    type: 'chemicalFormula',
    value: 'C9H18S'
  },
  Ga: {
    type: 'chemicalFormula',
    value: 'Ga'
  },
  Ir: {
    type: 'chemicalFormula',
    value: 'Ir'
  },
  C10H20: {
    type: 'chemicalFormula',
    value: 'C10H20'
  },
  C6OH12: {
    type: 'chemicalFormula',
    value: 'C6OH12'
  },
  C9H8: {
    type: 'chemicalFormula',
    value: 'C9H8'
  },
  NC6O2H5: {
    type: 'chemicalFormula',
    value: 'NC6O2H5'
  },
  O2C6NH3: {
    type: 'chemicalFormula',
    value: 'O2C6NH3'
  },
  C10H16O2: {
    type: 'chemicalFormula',
    value: 'C10H16O2'
  },
  C11H18: {
    type: 'chemicalFormula',
    value: 'C11H18'
  },
  N5C4H5: {
    type: 'chemicalFormula',
    value: 'N5C4H5'
  },
  C11H22: {
    type: 'chemicalFormula',
    value: 'C11H22'
  },
  'La0.9Sr0.1CoO3': {
    type: 'chemicalFormula',
    value: 'La0.9Sr0.1CoO3'
  },
  'Sr0.5Ca0.5CrO3': {
    type: 'chemicalFormula',
    value: 'Sr0.5Ca0.5CrO3'
  },
  C13H22O: {
    type: 'chemicalFormula',
    value: 'C13H22O'
  },
  C14H24O3: {
    type: 'chemicalFormula',
    value: 'C14H24O3'
  },
  C7N2H14: {
    type: 'chemicalFormula',
    value: 'C7N2H14'
  },
  Sr: {
    type: 'chemicalFormula',
    value: 'Sr'
  },
  C13H20O3: {
    type: 'chemicalFormula',
    value: 'C13H20O3'
  },
  'Sm0.9Ca0.1VO3': {
    type: 'chemicalFormula',
    value: 'Sm0.9Ca0.1VO3'
  },
  C8H16N2: {
    type: 'chemicalFormula',
    value: 'C8H16N2'
  },
  C9H16O2: {
    type: 'chemicalFormula',
    value: 'C9H16O2'
  },
  C9H19N: {
    type: 'chemicalFormula',
    value: 'C9H19N'
  },
  Ba1O3Ti1: {
    type: 'chemicalFormula',
    value: 'Ba1O3Ti1'
  },
  C7NH7: {
    type: 'chemicalFormula',
    value: 'C7NH7'
  },
  C5O2NH11: {
    type: 'chemicalFormula',
    value: 'C5O2NH11'
  },
  'Cd1 I2': {
    type: 'chemicalFormula',
    value: 'Cd1 I2'
  },
  LaVO3: {
    type: 'chemicalFormula',
    value: 'LaVO3'
  },
  N4C5H4: {
    type: 'chemicalFormula',
    value: 'N4C5H4'
  },
  Ba: {
    type: 'chemicalFormula',
    value: 'Ba'
  },
  C6NH9O2: {
    type: 'chemicalFormula',
    value: 'C6NH9O2'
  },
  O3C6H4: {
    type: 'chemicalFormula',
    value: 'O3C6H4'
  },
  C12H24: {
    type: 'chemicalFormula',
    value: 'C12H24'
  },
  Ca: {
    type: 'chemicalFormula',
    value: 'Ca'
  },
  NC7OH11: {
    type: 'chemicalFormula',
    value: 'NC7OH11'
  },
  Re: {
    type: 'chemicalFormula',
    value: 'Re'
  },
  C6NH11O2: {
    type: 'chemicalFormula',
    value: 'C6NH11O2'
  },
  C9H16S: {
    type: 'chemicalFormula',
    value: 'C9H16S'
  },
  'S1 Zn1': {
    type: 'chemicalFormula',
    value: 'S1 Zn1'
  },
  BN: {
    type: 'chemicalFormula',
    value: 'BN'
  },
  C12H18O3: {
    type: 'chemicalFormula',
    value: 'C12H18O3'
  },
  N2C4O2H6: {
    type: 'chemicalFormula',
    value: 'N2C4O2H6'
  },
  C10H20OS: {
    type: 'chemicalFormula',
    value: 'C10H20OS'
  },
  Be: {
    type: 'chemicalFormula',
    value: 'Be'
  },
  C10H18OS: {
    type: 'chemicalFormula',
    value: 'C10H18OS'
  },
  C11H18O2: {
    type: 'chemicalFormula',
    value: 'C11H18O2'
  },
  C11H23P: {
    type: 'chemicalFormula',
    value: 'C11H23P'
  },
  O8Si4: {
    type: 'chemicalFormula',
    value: 'O8Si4'
  },
  C11H22N2: {
    type: 'chemicalFormula',
    value: 'C11H22N2'
  },
  Mo: {
    type: 'chemicalFormula',
    value: 'Mo'
  },
  NC5O2H7: {
    type: 'chemicalFormula',
    value: 'NC5O2H7'
  },
  O3C5NH3: {
    type: 'chemicalFormula',
    value: 'O3C5NH3'
  },
  OC5N3H3: {
    type: 'chemicalFormula',
    value: 'OC5N3H3'
  },
  'Al2 Ni O4': {
    type: 'chemicalFormula',
    value: 'Al2 Ni O4'
  },
  BeO: {
    type: 'chemicalFormula',
    value: 'BeO'
  },
  C6N2H6: {
    type: 'chemicalFormula',
    value: 'C6N2H6'
  },
  C6O2H6: {
    type: 'chemicalFormula',
    value: 'C6O2H6'
  },
  C9H17P: {
    type: 'chemicalFormula',
    value: 'C9H17P'
  },
  'La0.64Sr0.36FeO3': {
    type: 'chemicalFormula',
    value: 'La0.64Sr0.36FeO3'
  },
  C11H22S: {
    type: 'chemicalFormula',
    value: 'C11H22S'
  },
  C13H26O: {
    type: 'chemicalFormula',
    value: 'C13H26O'
  },
  C5N3H7: {
    type: 'chemicalFormula',
    value: 'C5N3H7'
  },
  Ge: {
    type: 'chemicalFormula',
    value: 'Ge'
  },
  N5C3OH5: {
    type: 'chemicalFormula',
    value: 'N5C3OH5'
  },
  C11H22O2: {
    type: 'chemicalFormula',
    value: 'C11H22O2'
  },
  C6O2H14: {
    type: 'chemicalFormula',
    value: 'C6O2H14'
  },
  C8H14OS: {
    type: 'chemicalFormula',
    value: 'C8H14OS'
  },
  'La0.75Sr0.25FeO3': {
    type: 'chemicalFormula',
    value: 'La0.75Sr0.25FeO3'
  },
  MgAl2O4: {
    type: 'chemicalFormula',
    value: 'MgAl2O4'
  },
  Na: {
    type: 'chemicalFormula',
    value: 'Na'
  },
  'LaCo0.98Ni0.02O3': {
    type: 'chemicalFormula',
    value: 'LaCo0.98Ni0.02O3'
  },
  C10H21N: {
    type: 'chemicalFormula',
    value: 'C10H21N'
  },
  C5N3FH6: {
    type: 'chemicalFormula',
    value: 'C5N3FH6'
  },
  Li: {
    type: 'chemicalFormula',
    value: 'Li'
  },
  Te: {
    type: 'chemicalFormula',
    value: 'Te'
  },
  C9H16N2: {
    type: 'chemicalFormula',
    value: 'C9H16N2'
  },
  C11H19NO: {
    type: 'chemicalFormula',
    value: 'C11H19NO'
  },
  C11H23NO: {
    type: 'chemicalFormula',
    value: 'C11H23NO'
  },
  C7H14: {
    type: 'chemicalFormula',
    value: 'C7H14'
  },
  O2C4N3H3: {
    type: 'chemicalFormula',
    value: 'O2C4N3H3'
  },
  C10H20O2: {
    type: 'chemicalFormula',
    value: 'C10H20O2'
  },
  C12H22O11: {
    type: 'chemicalFormula',
    value: 'C12H22O11'
  },
  C4O2N3H5: {
    type: 'chemicalFormula',
    value: 'C4O2N3H5'
  },
  N2C5OH8: {
    type: 'chemicalFormula',
    value: 'N2C5OH8'
  },
  NC5O3H9: {
    type: 'chemicalFormula',
    value: 'NC5O3H9'
  },
  Bi2Sr2CaC2O8: {
    type: 'chemicalFormula',
    value: 'Bi2Sr2CaC2O8'
  },
  C7H14O: {
    type: 'chemicalFormula',
    value: 'C7H14O'
  },
  C8H15NO: {
    type: 'chemicalFormula',
    value: 'C8H15NO'
  },
  Fe1: {
    type: 'chemicalFormula',
    value: 'Fe1'
  },
  C4O2N3H7: {
    type: 'chemicalFormula',
    value: 'C4O2N3H7'
  },
  FeOF: {
    type: 'chemicalFormula',
    value: 'FeOF'
  },
  'La0.8Ca0.2VO3': {
    type: 'chemicalFormula',
    value: 'La0.8Ca0.2VO3'
  },
  OC5N2H8: {
    type: 'chemicalFormula',
    value: 'OC5N2H8'
  },
  N2C4O3H6: {
    type: 'chemicalFormula',
    value: 'N2C4O3H6'
  },
  N3C4O2H3: {
    type: 'chemicalFormula',
    value: 'N3C4O2H3'
  },
  P: {
    type: 'chemicalFormula',
    value: 'P'
  },
  Sb: {
    type: 'chemicalFormula',
    value: 'Sb'
  },
  'C Ca O3': {
    type: 'chemicalFormula',
    value: 'C Ca O3'
  },
  'La0.9Ca0.1VO3': {
    type: 'chemicalFormula',
    value: 'La0.9Ca0.1VO3'
  },
  'Y0.7Ca0.3VO3': {
    type: 'chemicalFormula',
    value: 'Y0.7Ca0.3VO3'
  },
  C10H21NO: {
    type: 'chemicalFormula',
    value: 'C10H21NO'
  },
  'C10H22NO+': {
    type: 'chemicalFormula',
    value: 'C10H22NO+'
  },
  C9H20N2: {
    type: 'chemicalFormula',
    value: 'C9H20N2'
  },
  C8H17N: {
    type: 'chemicalFormula',
    value: 'C8H17N'
  },
  C8H19P: {
    type: 'chemicalFormula',
    value: 'C8H19P'
  },
  K: {
    type: 'chemicalFormula',
    value: 'K'
  },
  NC6OH7: {
    type: 'chemicalFormula',
    value: 'NC6OH7'
  },
  'Y0.9Ca0.1VO3': {
    type: 'chemicalFormula',
    value: 'Y0.9Ca0.1VO3'
  },
  Bi: {
    type: 'chemicalFormula',
    value: 'Bi'
  },
  C15H24: {
    type: 'chemicalFormula',
    value: 'C15H24'
  },
  C6H10: {
    type: 'chemicalFormula',
    value: 'C6H10'
  },
  C9H18OS: {
    type: 'chemicalFormula',
    value: 'C9H18OS'
  },
  C12H24OS: {
    type: 'chemicalFormula',
    value: 'C12H24OS'
  },
  O2NC6H7: {
    type: 'chemicalFormula',
    value: 'O2NC6H7'
  },
  C10H18N2: {
    type: 'chemicalFormula',
    value: 'C10H18N2'
  },
  C10H22N2: {
    type: 'chemicalFormula',
    value: 'C10H22N2'
  },
  C5NOH9: {
    type: 'chemicalFormula',
    value: 'C5NOH9'
  },
  C6NH9: {
    type: 'chemicalFormula',
    value: 'C6NH9'
  },
  'Ca O5 Si Ti': {
    type: 'chemicalFormula',
    value: 'Ca O5 Si Ti'
  },
  Cl1K1: {
    type: 'chemicalFormula',
    value: 'Cl1K1'
  },
  Li3V3P8O29: {
    type: 'chemicalFormula',
    value: 'Li3V3P8O29'
  },
  O4C5H4: {
    type: 'chemicalFormula',
    value: 'O4C5H4'
  },
  Al4O6: {
    type: 'chemicalFormula',
    value: 'Al4O6'
  },
  C10H16O3: {
    type: 'chemicalFormula',
    value: 'C10H16O3'
  },
  C8H17NO: {
    type: 'chemicalFormula',
    value: 'C8H17NO'
  },
  O2C5N2H2: {
    type: 'chemicalFormula',
    value: 'O2C5N2H2'
  },
  O2NC6H9: {
    type: 'chemicalFormula',
    value: 'O2NC6H9'
  },
  Rb: {
    type: 'chemicalFormula',
    value: 'Rb'
  },
  Ta: {
    type: 'chemicalFormula',
    value: 'Ta'
  },
  C10H23P: {
    type: 'chemicalFormula',
    value: 'C10H23P'
  },
  C15H26O: {
    type: 'chemicalFormula',
    value: 'C15H26O'
  },
  C5NOH7: {
    type: 'chemicalFormula',
    value: 'C5NOH7'
  },
  C8H14O2: {
    type: 'chemicalFormula',
    value: 'C8H14O2'
  },
  C9H18O2: {
    type: 'chemicalFormula',
    value: 'C9H18O2'
  },
  'LaCo0.9Ni0.1O3': {
    type: 'chemicalFormula',
    value: 'LaCo0.9Ni0.1O3'
  },
  LaCoO3: {
    type: 'chemicalFormula',
    value: 'LaCoO3'
  },
  OC6NH5: {
    type: 'chemicalFormula',
    value: 'OC6NH5'
  },
  C4N3OH5: {
    type: 'chemicalFormula',
    value: 'C4N3OH5'
  },
  'C6 H12 O6': {
    type: 'chemicalFormula',
    value: 'C6 H12 O6'
  },
  C7H15P: {
    type: 'chemicalFormula',
    value: 'C7H15P'
  },
  C9H19NO: {
    type: 'chemicalFormula',
    value: 'C9H19NO'
  },
  'LaMnO3.1': {
    type: 'chemicalFormula',
    value: 'LaMnO3.1'
  },
  'Sr0.5Ca0.5MnO3': {
    type: 'chemicalFormula',
    value: 'Sr0.5Ca0.5MnO3'
  },
  'Al2 O4 Zn': {
    type: 'chemicalFormula',
    value: 'Al2 O4 Zn'
  },
  C6H12O6: {
    type: 'chemicalFormula',
    value: 'C6H12O6'
  },
  C6NOH13: {
    type: 'chemicalFormula',
    value: 'C6NOH13'
  },
  C7H14OS: {
    type: 'chemicalFormula',
    value: 'C7H14OS'
  },
  C8H16S: {
    type: 'chemicalFormula',
    value: 'C8H16S'
  },
  'C9H20NO+': {
    type: 'chemicalFormula',
    value: 'C9H20NO+'
  },
  Fe2Se2: {
    type: 'chemicalFormula',
    value: 'Fe2Se2'
  },
  Hf: {
    type: 'chemicalFormula',
    value: 'Hf'
  },
  LiMnPO4: {
    type: 'chemicalFormula',
    value: 'LiMnPO4'
  },
  Mg1O1: {
    type: 'chemicalFormula',
    value: 'Mg1O1'
  },
  O2C4N2H4: {
    type: 'chemicalFormula',
    value: 'O2C4N2H4'
  },
  C10H17NO: {
    type: 'chemicalFormula',
    value: 'C10H17NO'
  },
  C20H30O3: {
    type: 'chemicalFormula',
    value: 'C20H30O3'
  },
  C5N2H10O2: {
    type: 'chemicalFormula',
    value: 'C5N2H10O2'
  },
  O2C5H8: {
    type: 'chemicalFormula',
    value: 'O2C5H8'
  },
  Se: {
    type: 'chemicalFormula',
    value: 'Se'
  },
  Zr: {
    type: 'chemicalFormula',
    value: 'Zr'
  },
  C13H24O3: {
    type: 'chemicalFormula',
    value: 'C13H24O3'
  },
  C5N3OH11: {
    type: 'chemicalFormula',
    value: 'C5N3OH11'
  },
  C7OH16: {
    type: 'chemicalFormula',
    value: 'C7OH16'
  },
  'Fe3 O4': {
    type: 'chemicalFormula',
    value: 'Fe3 O4'
  },
  H2O: {
    type: 'chemicalFormula',
    value: 'H2O'
  },
  'La0.83Sr0.17FeO3': {
    type: 'chemicalFormula',
    value: 'La0.83Sr0.17FeO3'
  },
  N2C4O2H4: {
    type: 'chemicalFormula',
    value: 'N2C4O2H4'
  },
  O2C5H6: {
    type: 'chemicalFormula',
    value: 'O2C5H6'
  },
  'ZrO2.xMgO': {
    type: 'chemicalFormula',
    value: 'ZrO2.xMgO'
  },
  'C Fe3': {
    type: 'chemicalFormula',
    value: 'C Fe3'
  },
  C6ONH13: {
    type: 'chemicalFormula',
    value: 'C6ONH13'
  },
  C7H10: {
    type: 'chemicalFormula',
    value: 'C7H10'
  },
  C8H16O2: {
    type: 'chemicalFormula',
    value: 'C8H16O2'
  },
  N4C3OH4: {
    type: 'chemicalFormula',
    value: 'N4C3OH4'
  },
  Ne1: {
    type: 'chemicalFormula',
    value: 'Ne1'
  },
  C12H20O2: {
    type: 'chemicalFormula',
    value: 'C12H20O2'
  },
  C20H32O4: {
    type: 'chemicalFormula',
    value: 'C20H32O4'
  },
  C4O2N2H6: {
    type: 'chemicalFormula',
    value: 'C4O2N2H6'
  },
  Cr: {
    type: 'chemicalFormula',
    value: 'Cr'
  },
  Cs: {
    type: 'chemicalFormula',
    value: 'Cs'
  },
  Fe6O8: {
    type: 'chemicalFormula',
    value: 'Fe6O8'
  },
  N2C6OH4: {
    type: 'chemicalFormula',
    value: 'N2C6OH4'
  },
  C4N2O2H6: {
    type: 'chemicalFormula',
    value: 'C4N2O2H6'
  },
  C6H12O: {
    type: 'chemicalFormula',
    value: 'C6H12O'
  },
  C7OH6: {
    type: 'chemicalFormula',
    value: 'C7OH6'
  },
  N2C6H8: {
    type: 'chemicalFormula',
    value: 'N2C6H8'
  },
  Sc: {
    type: 'chemicalFormula',
    value: 'Sc'
  },
  'C W': {
    type: 'chemicalFormula',
    value: 'C W'
  },
  C10H19N: {
    type: 'chemicalFormula',
    value: 'C10H19N'
  },
  C12H22S: {
    type: 'chemicalFormula',
    value: 'C12H22S'
  },
  C5O4H6: {
    type: 'chemicalFormula',
    value: 'C5O4H6'
  },
  C5ON3H5: {
    type: 'chemicalFormula',
    value: 'C5ON3H5'
  },
  C7H14N2: {
    type: 'chemicalFormula',
    value: 'C7H14N2'
  },
  'Sr0.7Ca0.3MnO3': {
    type: 'chemicalFormula',
    value: 'Sr0.7Ca0.3MnO3'
  },
  C12H22O3: {
    type: 'chemicalFormula',
    value: 'C12H22O3'
  },
  C20H30O2: {
    type: 'chemicalFormula',
    value: 'C20H30O2'
  },
  N2C6H6: {
    type: 'chemicalFormula',
    value: 'N2C6H6'
  },
  N4C5H8: {
    type: 'chemicalFormula',
    value: 'N4C5H8'
  },
  OC7NH13: {
    type: 'chemicalFormula',
    value: 'OC7NH13'
  },
  'Sr0.6Ca0.4MnO3': {
    type: 'chemicalFormula',
    value: 'Sr0.6Ca0.4MnO3'
  },
  'Sr0.8Ba0.2MnO3': {
    type: 'chemicalFormula',
    value: 'Sr0.8Ba0.2MnO3'
  },
  C10H18S: {
    type: 'chemicalFormula',
    value: 'C10H18S'
  },
  C20H28O3: {
    type: 'chemicalFormula',
    value: 'C20H28O3'
  },
  C4N5H5: {
    type: 'chemicalFormula',
    value: 'C4N5H5'
  },
  C7H12O: {
    type: 'chemicalFormula',
    value: 'C7H12O'
  },
  N3C5H5: {
    type: 'chemicalFormula',
    value: 'N3C5H5'
  },
  Nb: {
    type: 'chemicalFormula',
    value: 'Nb'
  },
  O2C7H4: {
    type: 'chemicalFormula',
    value: 'O2C7H4'
  },
  O4Si2: {
    type: 'chemicalFormula',
    value: 'O4Si2'
  },
  OC5NH7: {
    type: 'chemicalFormula',
    value: 'OC5NH7'
  },
  Sn: {
    type: 'chemicalFormula',
    value: 'Sn'
  },
  C12H24O2: {
    type: 'chemicalFormula',
    value: 'C12H24O2'
  },
  C15H20O3: {
    type: 'chemicalFormula',
    value: 'C15H20O3'
  },
  C4ON4H6: {
    type: 'chemicalFormula',
    value: 'C4ON4H6'
  },
  N2C5O2H10: {
    type: 'chemicalFormula',
    value: 'N2C5O2H10'
  },
  'Si6-xAlxOxN8-x': {
    type: 'chemicalFormula',
    value: 'Si6-xAlxOxN8-x'
  },
  C11H23N: {
    type: 'chemicalFormula',
    value: 'C11H23N'
  },
  C5ONH7: {
    type: 'chemicalFormula',
    value: 'C5ONH7'
  },
  Fe4O6: {
    type: 'chemicalFormula',
    value: 'Fe4O6'
  },
  'LaTi0.95V0.05O3': {
    type: 'chemicalFormula',
    value: 'LaTi0.95V0.05O3'
  },
  O2Zn2: {
    type: 'chemicalFormula',
    value: 'O2Zn2'
  },
  O3NC5H7: {
    type: 'chemicalFormula',
    value: 'O3NC5H7'
  },
  C20H30O4: {
    type: 'chemicalFormula',
    value: 'C20H30O4'
  },
  C8H18N2: {
    type: 'chemicalFormula',
    value: 'C8H18N2'
  },
  'La0.85Sr0.15VO3': {
    type: 'chemicalFormula',
    value: 'La0.85Sr0.15VO3'
  },
  LiFePO4: {
    type: 'chemicalFormula',
    value: 'LiFePO4'
  },
  LiFeSiO4: {
    type: 'chemicalFormula',
    value: 'LiFeSiO4'
  },
  Tl: {
    type: 'chemicalFormula',
    value: 'Tl'
  },
  As: {
    type: 'chemicalFormula',
    value: 'As'
  },
  BaTiO3: {
    type: 'chemicalFormula',
    value: 'BaTiO3'
  },
  C13H22: {
    type: 'chemicalFormula',
    value: 'C13H22'
  },
  C4N4H6: {
    type: 'chemicalFormula',
    value: 'C4N4H6'
  },
  C5ONH9: {
    type: 'chemicalFormula',
    value: 'C5ONH9'
  },
  C6N3H5: {
    type: 'chemicalFormula',
    value: 'C6N3H5'
  },
  C6NH13O2: {
    type: 'chemicalFormula',
    value: 'C6NH13O2'
  },
  'Fe0.4 Mg0.6 O': {
    type: 'chemicalFormula',
    value: 'Fe0.4 Mg0.6 O'
  },
  GaN: {
    type: 'chemicalFormula',
    value: 'GaN'
  },
  'La0.9Sr0.1VO3': {
    type: 'chemicalFormula',
    value: 'La0.9Sr0.1VO3'
  },
  OC7H12: {
    type: 'chemicalFormula',
    value: 'OC7H12'
  },
  Pb1Te1: {
    type: 'chemicalFormula',
    value: 'Pb1Te1'
  },
  'Si3N4.xY2O3': {
    type: 'chemicalFormula',
    value: 'Si3N4.xY2O3'
  },
  Y: {
    type: 'chemicalFormula',
    value: 'Y'
  },
  C10H16OS: {
    type: 'chemicalFormula',
    value: 'C10H16OS'
  },
  C5O2NH5: {
    type: 'chemicalFormula',
    value: 'C5O2NH5'
  },
  C8OH6: {
    type: 'chemicalFormula',
    value: 'C8OH6'
  },
  C9H11NO2: {
    type: 'chemicalFormula',
    value: 'C9H11NO2'
  },
  Hg: {
    type: 'chemicalFormula',
    value: 'Hg'
  },
  LiNiPO4: {
    type: 'chemicalFormula',
    value: 'LiNiPO4'
  },
  'Mg2 O4 Si': {
    type: 'chemicalFormula',
    value: 'Mg2 O4 Si'
  },
  NC5O2H5: {
    type: 'chemicalFormula',
    value: 'NC5O2H5'
  },
  O2C4NH5: {
    type: 'chemicalFormula',
    value: 'O2C4NH5'
  },
  Os: {
    type: 'chemicalFormula',
    value: 'Os'
  },
  'SrFeO2.75': {
    type: 'chemicalFormula',
    value: 'SrFeO2.75'
  },
  Bi2O3: {
    type: 'chemicalFormula',
    value: 'Bi2O3'
  },
  C10H20S: {
    type: 'chemicalFormula',
    value: 'C10H20S'
  },
  C11H20S: {
    type: 'chemicalFormula',
    value: 'C11H20S'
  },
  C20H28O2: {
    type: 'chemicalFormula',
    value: 'C20H28O2'
  },
  N2C5OH4: {
    type: 'chemicalFormula',
    value: 'N2C5OH4'
  },
  O2N2C5H6: {
    type: 'chemicalFormula',
    value: 'O2N2C5H6'
  },
  C10H22OS: {
    type: 'chemicalFormula',
    value: 'C10H22OS'
  },
  C4N4H8: {
    type: 'chemicalFormula',
    value: 'C4N4H8'
  },
  C5ON2H6: {
    type: 'chemicalFormula',
    value: 'C5ON2H6'
  },
  C7H17P: {
    type: 'chemicalFormula',
    value: 'C7H17P'
  },
  'Ca O': {
    type: 'chemicalFormula',
    value: 'Ca O'
  },
  'La0.8Sr0.2FeO3': {
    type: 'chemicalFormula',
    value: 'La0.8Sr0.2FeO3'
  },
  O16Si8: {
    type: 'chemicalFormula',
    value: 'O16Si8'
  },
  OC8H6: {
    type: 'chemicalFormula',
    value: 'OC8H6'
  },
  'Al2 O5 Si': {
    type: 'chemicalFormula',
    value: 'Al2 O5 Si'
  },
  Al2La2O6: {
    type: 'chemicalFormula',
    value: 'Al2La2O6'
  },
  B: {
    type: 'chemicalFormula',
    value: 'B'
  },
  C10H12O2: {
    type: 'chemicalFormula',
    value: 'C10H12O2'
  },
  C20H32O3: {
    type: 'chemicalFormula',
    value: 'C20H32O3'
  },
  C6H12O2: {
    type: 'chemicalFormula',
    value: 'C6H12O2'
  },
  C6N2FH7: {
    type: 'chemicalFormula',
    value: 'C6N2FH7'
  },
  C7H12O2: {
    type: 'chemicalFormula',
    value: 'C7H12O2'
  },
  C7NH13: {
    type: 'chemicalFormula',
    value: 'C7NH13'
  },
  C8H8: {
    type: 'chemicalFormula',
    value: 'C8H8'
  },
  GaAs: {
    type: 'chemicalFormula',
    value: 'GaAs'
  },
  N3C4OH7: {
    type: 'chemicalFormula',
    value: 'N3C4OH7'
  },
  NC8H11: {
    type: 'chemicalFormula',
    value: 'NC8H11'
  },
  O4C5H10: {
    type: 'chemicalFormula',
    value: 'O4C5H10'
  },
  'data item value from': {
    type: 'chemicalFormula',
    value: 'data item value from'
  },
  AlPO4: {
    type: 'chemicalFormula',
    value: 'AlPO4'
  },
  C5O3H6: {
    type: 'chemicalFormula',
    value: 'C5O3H6'
  },
  C7H15N: {
    type: 'chemicalFormula',
    value: 'C7H15N'
  },
  C9H17N: {
    type: 'chemicalFormula',
    value: 'C9H17N'
  },
  'La0.7Sr0.3FeO3': {
    type: 'chemicalFormula',
    value: 'La0.7Sr0.3FeO3'
  },
  LiCoPO4: {
    type: 'chemicalFormula',
    value: 'LiCoPO4'
  },
  O2C4N2H6: {
    type: 'chemicalFormula',
    value: 'O2C4N2H6'
  },
  'As4 S4': {
    type: 'chemicalFormula',
    value: 'As4 S4'
  },
  C20H32O5: {
    type: 'chemicalFormula',
    value: 'C20H32O5'
  },
  C4O3N2H6: {
    type: 'chemicalFormula',
    value: 'C4O3N2H6'
  },
  C5N2H8: {
    type: 'chemicalFormula',
    value: 'C5N2H8'
  },
  C5O2N2H4: {
    type: 'chemicalFormula',
    value: 'C5O2N2H4'
  },
  H2: {
    type: 'chemicalFormula',
    value: 'H2'
  },
  'Mg2 O4 Ti': {
    type: 'chemicalFormula',
    value: 'Mg2 O4 Ti'
  },
  O2C7H14: {
    type: 'chemicalFormula',
    value: 'O2C7H14'
  },
  O3C4NH5: {
    type: 'chemicalFormula',
    value: 'O3C4NH5'
  },
  OC4N4H4: {
    type: 'chemicalFormula',
    value: 'OC4N4H4'
  },
  OC4N4H6: {
    type: 'chemicalFormula',
    value: 'OC4N4H6'
  },
  OC5N2H4: {
    type: 'chemicalFormula',
    value: 'OC5N2H4'
  },
  'C10H20NO+': {
    type: 'chemicalFormula',
    value: 'C10H20NO+'
  },
  C14H26O: {
    type: 'chemicalFormula',
    value: 'C14H26O'
  },
  C14H26O3: {
    type: 'chemicalFormula',
    value: 'C14H26O3'
  },
  C30H50O: {
    type: 'chemicalFormula',
    value: 'C30H50O'
  },
  C4N2OH6: {
    type: 'chemicalFormula',
    value: 'C4N2OH6'
  },
  'La0.4Sr0.6MnO2.76': {
    type: 'chemicalFormula',
    value: 'La0.4Sr0.6MnO2.76'
  },
  'LiFe2(BO3)2': {
    type: 'chemicalFormula',
    value: 'LiFe2(BO3)2'
  },
  Mn: {
    type: 'chemicalFormula',
    value: 'Mn'
  },
  N3C4FOH4: {
    type: 'chemicalFormula',
    value: 'N3C4FOH4'
  },
  O2C5N2H10: {
    type: 'chemicalFormula',
    value: 'O2C5N2H10'
  },
  Pb1S1: {
    type: 'chemicalFormula',
    value: 'Pb1S1'
  },
  Bi2Fe2O6: {
    type: 'chemicalFormula',
    value: 'Bi2Fe2O6'
  },
  'C11H24NO+': {
    type: 'chemicalFormula',
    value: 'C11H24NO+'
  },
  C2Ca2O6: {
    type: 'chemicalFormula',
    value: 'C2Ca2O6'
  },
  C7H13NO: {
    type: 'chemicalFormula',
    value: 'C7H13NO'
  },
  C8H18O: {
    type: 'chemicalFormula',
    value: 'C8H18O'
  },
  C9H14O: {
    type: 'chemicalFormula',
    value: 'C9H14O'
  },
  S: {
    type: 'chemicalFormula',
    value: 'S'
  },
  YNi2B2C: {
    type: 'chemicalFormula',
    value: 'YNi2B2C'
  },
  C13H26: {
    type: 'chemicalFormula',
    value: 'C13H26'
  },
  C6H12O5: {
    type: 'chemicalFormula',
    value: 'C6H12O5'
  },
  C8H14S: {
    type: 'chemicalFormula',
    value: 'C8H14S'
  },
  O3C5H10: {
    type: 'chemicalFormula',
    value: 'O3C5H10'
  },
  ON2C6H8: {
    type: 'chemicalFormula',
    value: 'ON2C6H8'
  },
  'Al O4 P': {
    type: 'chemicalFormula',
    value: 'Al O4 P'
  },
  C10H14O: {
    type: 'chemicalFormula',
    value: 'C10H14O'
  },
  C10H22O: {
    type: 'chemicalFormula',
    value: 'C10H22O'
  },
  C10H23N: {
    type: 'chemicalFormula',
    value: 'C10H23N'
  },
  C11H20O3: {
    type: 'chemicalFormula',
    value: 'C11H20O3'
  },
  C12H21NO: {
    type: 'chemicalFormula',
    value: 'C12H21NO'
  },
  C12H25NO: {
    type: 'chemicalFormula',
    value: 'C12H25NO'
  },
  C5H10O: {
    type: 'chemicalFormula',
    value: 'C5H10O'
  },
  C5N3H5: {
    type: 'chemicalFormula',
    value: 'C5N3H5'
  },
  C7H14O2: {
    type: 'chemicalFormula',
    value: 'C7H14O2'
  },
  C7ONH5: {
    type: 'chemicalFormula',
    value: 'C7ONH5'
  },
  Cr4O6: {
    type: 'chemicalFormula',
    value: 'Cr4O6'
  },
  MgSiO3: {
    type: 'chemicalFormula',
    value: 'MgSiO3'
  },
  NC6O2H11: {
    type: 'chemicalFormula',
    value: 'NC6O2H11'
  },
  O3C4N2H6: {
    type: 'chemicalFormula',
    value: 'O3C4N2H6'
  },
  'Bi2Sr2CaC2O8+x': {
    type: 'chemicalFormula',
    value: 'Bi2Sr2CaC2O8+x'
  },
  C10H13NO2: {
    type: 'chemicalFormula',
    value: 'C10H13NO2'
  },
  C10H18O3: {
    type: 'chemicalFormula',
    value: 'C10H18O3'
  },
  C11H21P: {
    type: 'chemicalFormula',
    value: 'C11H21P'
  },
  C4N5H9: {
    type: 'chemicalFormula',
    value: 'C4N5H9'
  },
  C6H12: {
    type: 'chemicalFormula',
    value: 'C6H12'
  },
  C8H9NO2: {
    type: 'chemicalFormula',
    value: 'C8H9NO2'
  },
  C9H14O2: {
    type: 'chemicalFormula',
    value: 'C9H14O2'
  },
  In: {
    type: 'chemicalFormula',
    value: 'In'
  },
  N3C3O3H3: {
    type: 'chemicalFormula',
    value: 'N3C3O3H3'
  },
  O2N2C5H8: {
    type: 'chemicalFormula',
    value: 'O2N2C5H8'
  },
  'Al Na O6 Si2': {
    type: 'chemicalFormula',
    value: 'Al Na O6 Si2'
  },
  Bi2Te3: {
    type: 'chemicalFormula',
    value: 'Bi2Te3'
  },
  C1: {
    type: 'chemicalFormula',
    value: 'C1'
  },
  C10H21P: {
    type: 'chemicalFormula',
    value: 'C10H21P'
  },
  C11H20N2: {
    type: 'chemicalFormula',
    value: 'C11H20N2'
  },
  C4O3N2H4: {
    type: 'chemicalFormula',
    value: 'C4O3N2H4'
  },
  C6H11NO: {
    type: 'chemicalFormula',
    value: 'C6H11NO'
  },
  C8H18OS: {
    type: 'chemicalFormula',
    value: 'C8H18OS'
  },
  C9H10O2: {
    type: 'chemicalFormula',
    value: 'C9H10O2'
  },
  C9H20O: {
    type: 'chemicalFormula',
    value: 'C9H20O'
  },
  C9H21N: {
    type: 'chemicalFormula',
    value: 'C9H21N'
  },
  C11H16O3: {
    type: 'chemicalFormula',
    value: 'C11H16O3'
  },
  C11H24OS: {
    type: 'chemicalFormula',
    value: 'C11H24OS'
  },
  'C13 H18 O2': {
    type: 'chemicalFormula',
    value: 'C13 H18 O2'
  },
  C15H20O4: {
    type: 'chemicalFormula',
    value: 'C15H20O4'
  },
  C3N5OH5: {
    type: 'chemicalFormula',
    value: 'C3N5OH5'
  },
  C5O4H10: {
    type: 'chemicalFormula',
    value: 'C5O4H10'
  },
  HfO2: {
    type: 'chemicalFormula',
    value: 'HfO2'
  },
  La: {
    type: 'chemicalFormula',
    value: 'La'
  },
  'La0.95Sr0.05VO3': {
    type: 'chemicalFormula',
    value: 'La0.95Sr0.05VO3'
  },
  LiCuPO4: {
    type: 'chemicalFormula',
    value: 'LiCuPO4'
  },
  NC8H7: {
    type: 'chemicalFormula',
    value: 'NC8H7'
  },
  O3C5H4: {
    type: 'chemicalFormula',
    value: 'O3C5H4'
  },
  Tc: {
    type: 'chemicalFormula',
    value: 'Tc'
  },
  C10H19P: {
    type: 'chemicalFormula',
    value: 'C10H19P'
  },
  C12H20OS: {
    type: 'chemicalFormula',
    value: 'C12H20OS'
  },
  C14H22O3: {
    type: 'chemicalFormula',
    value: 'C14H22O3'
  },
  C21H30O3: {
    type: 'chemicalFormula',
    value: 'C21H30O3'
  },
  C4Fe12: {
    type: 'chemicalFormula',
    value: 'C4Fe12'
  },
  C4N4OH4: {
    type: 'chemicalFormula',
    value: 'C4N4OH4'
  },
  C5H10O5: {
    type: 'chemicalFormula',
    value: 'C5H10O5'
  },
  'C8 H9 N O2': {
    type: 'chemicalFormula',
    value: 'C8 H9 N O2'
  },
  'C8H18NO+': {
    type: 'chemicalFormula',
    value: 'C8H18NO+'
  },
  C8H19N: {
    type: 'chemicalFormula',
    value: 'C8H19N'
  },
  'C9H18NO+': {
    type: 'chemicalFormula',
    value: 'C9H18NO+'
  },
  Cd1Te1: {
    type: 'chemicalFormula',
    value: 'Cd1Te1'
  },
  Ce1Mn1Ni4: {
    type: 'chemicalFormula',
    value: 'Ce1Mn1Ni4'
  },
  GaP: {
    type: 'chemicalFormula',
    value: 'GaP'
  },
  Hf2N2O: {
    type: 'chemicalFormula',
    value: 'Hf2N2O'
  },
  Mn6O5F7: {
    type: 'chemicalFormula',
    value: 'Mn6O5F7'
  },
  N2: {
    type: 'chemicalFormula',
    value: 'N2'
  },
  Zn: {
    type: 'chemicalFormula',
    value: 'Zn'
  },
  'Al2 Mg3 O12 Si3': {
    type: 'chemicalFormula',
    value: 'Al2 Mg3 O12 Si3'
  },
  Al2Na2O12Si4: {
    type: 'chemicalFormula',
    value: 'Al2Na2O12Si4'
  },
  C15H24O2: {
    type: 'chemicalFormula',
    value: 'C15H24O2'
  },
  C1Zr1: {
    type: 'chemicalFormula',
    value: 'C1Zr1'
  },
  C20H28O4: {
    type: 'chemicalFormula',
    value: 'C20H28O4'
  },
  C6H13NO: {
    type: 'chemicalFormula',
    value: 'C6H13NO'
  },
  C6ONH5: {
    type: 'chemicalFormula',
    value: 'C6ONH5'
  },
  C7H16N2: {
    type: 'chemicalFormula',
    value: 'C7H16N2'
  },
  C8H14N2: {
    type: 'chemicalFormula',
    value: 'C8H14N2'
  },
  C8H8O3: {
    type: 'chemicalFormula',
    value: 'C8H8O3'
  },
  CeO2: {
    type: 'chemicalFormula',
    value: 'CeO2'
  },
  GdTiO3: {
    type: 'chemicalFormula',
    value: 'GdTiO3'
  },
  Li6V3P8O29: {
    type: 'chemicalFormula',
    value: 'Li6V3P8O29'
  },
  NC6OH9: {
    type: 'chemicalFormula',
    value: 'NC6OH9'
  },
  O3Pb1Ti1: {
    type: 'chemicalFormula',
    value: 'O3Pb1Ti1'
  },
  WO3: {
    type: 'chemicalFormula',
    value: 'WO3'
  },
  ZrB2: {
    type: 'chemicalFormula',
    value: 'ZrB2'
  },
  'Al2 O3': {
    type: 'chemicalFormula',
    value: 'Al2 O3'
  },
  'C18 H16 N2 O2': {
    type: 'chemicalFormula',
    value: 'C18 H16 N2 O2'
  },
  C4ON3H7: {
    type: 'chemicalFormula',
    value: 'C4ON3H7'
  },
  C4ON4H8: {
    type: 'chemicalFormula',
    value: 'C4ON4H8'
  },
  'C6 H10 N2 O2': {
    type: 'chemicalFormula',
    value: 'C6 H10 N2 O2'
  },
  C6N2H12: {
    type: 'chemicalFormula',
    value: 'C6N2H12'
  },
  C9H10O3: {
    type: 'chemicalFormula',
    value: 'C9H10O3'
  },
  Ca1: {
    type: 'chemicalFormula',
    value: 'Ca1'
  },
  Cd: {
    type: 'chemicalFormula',
    value: 'Cd'
  },
  Li4V3P8O29: {
    type: 'chemicalFormula',
    value: 'Li4V3P8O29'
  },
  N4C4H4: {
    type: 'chemicalFormula',
    value: 'N4C4H4'
  },
  N8Si6: {
    type: 'chemicalFormula',
    value: 'N8Si6'
  },
  O3C4N2H2: {
    type: 'chemicalFormula',
    value: 'O3C4N2H2'
  },
  C11H24N2: {
    type: 'chemicalFormula',
    value: 'C11H24N2'
  },
  C12H24S: {
    type: 'chemicalFormula',
    value: 'C12H24S'
  },
  C15H22O2: {
    type: 'chemicalFormula',
    value: 'C15H22O2'
  },
  C27H44O3: {
    type: 'chemicalFormula',
    value: 'C27H44O3'
  },
  C7H15NO: {
    type: 'chemicalFormula',
    value: 'C7H15NO'
  },
  C9H14O3: {
    type: 'chemicalFormula',
    value: 'C9H14O3'
  },
  C9H15NO: {
    type: 'chemicalFormula',
    value: 'C9H15NO'
  },
  'La0.2Sr0.8FeO2.7': {
    type: 'chemicalFormula',
    value: 'La0.2Sr0.8FeO2.7'
  },
  'Li2Mn3(BO3)3': {
    type: 'chemicalFormula',
    value: 'Li2Mn3(BO3)3'
  },
  N3C5OH3: {
    type: 'chemicalFormula',
    value: 'N3C5OH3'
  },
  NC6OH5: {
    type: 'chemicalFormula',
    value: 'NC6OH5'
  },
  O2C4N3H7: {
    type: 'chemicalFormula',
    value: 'O2C4N3H7'
  },
  OC6NH11: {
    type: 'chemicalFormula',
    value: 'OC6NH11'
  },
  'Si3N4.xY2O3.yAl2O3': {
    type: 'chemicalFormula',
    value: 'Si3N4.xY2O3.yAl2O3'
  },
  Ba2Cu3O7Y1: {
    type: 'chemicalFormula',
    value: 'Ba2Cu3O7Y1'
  },
  C11H18OS: {
    type: 'chemicalFormula',
    value: 'C11H18OS'
  },
  C4N2O2H8: {
    type: 'chemicalFormula',
    value: 'C4N2O2H8'
  },
  C5O2H6: {
    type: 'chemicalFormula',
    value: 'C5O2H6'
  },
  C6H10O: {
    type: 'chemicalFormula',
    value: 'C6H10O'
  },
  LiFeF4: {
    type: 'chemicalFormula',
    value: 'LiFeF4'
  },
  Ne: {
    type: 'chemicalFormula',
    value: 'Ne'
  },
  O4Zr2: {
    type: 'chemicalFormula',
    value: 'O4Zr2'
  },
  O8Zr4: {
    type: 'chemicalFormula',
    value: 'O8Zr4'
  },
  Pb1Se1: {
    type: 'chemicalFormula',
    value: 'Pb1Se1'
  },
  'Sr0.1Ca0.9MnO3': {
    type: 'chemicalFormula',
    value: 'Sr0.1Ca0.9MnO3'
  },
  Xe: {
    type: 'chemicalFormula',
    value: 'Xe'
  },
  'Y0.8Ca0.2VO3': {
    type: 'chemicalFormula',
    value: 'Y0.8Ca0.2VO3'
  },
  Al3O12P3: {
    type: 'chemicalFormula',
    value: 'Al3O12P3'
  },
  AlAs: {
    type: 'chemicalFormula',
    value: 'AlAs'
  },
  Br1K1: {
    type: 'chemicalFormula',
    value: 'Br1K1'
  },
  C15H26O3: {
    type: 'chemicalFormula',
    value: 'C15H26O3'
  },
  C19H26O3: {
    type: 'chemicalFormula',
    value: 'C19H26O3'
  },
  C21H30O2: {
    type: 'chemicalFormula',
    value: 'C21H30O2'
  },
  C27H44O2: {
    type: 'chemicalFormula',
    value: 'C27H44O2'
  },
  C5H8O2: {
    type: 'chemicalFormula',
    value: 'C5H8O2'
  },
  C5N2OFH5: {
    type: 'chemicalFormula',
    value: 'C5N2OFH5'
  },
  C6H10O2: {
    type: 'chemicalFormula',
    value: 'C6H10O2'
  },
  C6H12N2: {
    type: 'chemicalFormula',
    value: 'C6H12N2'
  },
  C7H7NO3: {
    type: 'chemicalFormula',
    value: 'C7H7NO3'
  },
  C8H15P: {
    type: 'chemicalFormula',
    value: 'C8H15P'
  },
  La1Ni5: {
    type: 'chemicalFormula',
    value: 'La1Ni5'
  },
  'LiMn2(BO3)2': {
    type: 'chemicalFormula',
    value: 'LiMn2(BO3)2'
  },
  N3C3O2H3: {
    type: 'chemicalFormula',
    value: 'N3C3O2H3'
  },
  N5C3OH3: {
    type: 'chemicalFormula',
    value: 'N5C3OH3'
  },
  NH9C5O3: {
    type: 'chemicalFormula',
    value: 'NH9C5O3'
  },
  OC4N3H5: {
    type: 'chemicalFormula',
    value: 'OC4N3H5'
  },
  SnO2: {
    type: 'chemicalFormula',
    value: 'SnO2'
  },
  Y2O3: {
    type: 'chemicalFormula',
    value: 'Y2O3'
  },
  YBa2C4O8: {
    type: 'chemicalFormula',
    value: 'YBa2C4O8'
  },
  AlP: {
    type: 'chemicalFormula',
    value: 'AlP'
  },
  C10H22S: {
    type: 'chemicalFormula',
    value: 'C10H22S'
  },
  C11H15NO2: {
    type: 'chemicalFormula',
    value: 'C11H15NO2'
  },
  'C15 H22 O3': {
    type: 'chemicalFormula',
    value: 'C15 H22 O3'
  },
  C20H30O5: {
    type: 'chemicalFormula',
    value: 'C20H30O5'
  },
  C6H10O4: {
    type: 'chemicalFormula',
    value: 'C6H10O4'
  },
  C6H12OS: {
    type: 'chemicalFormula',
    value: 'C6H12OS'
  },
  C6H13P: {
    type: 'chemicalFormula',
    value: 'C6H13P'
  },
  C7H14S: {
    type: 'chemicalFormula',
    value: 'C7H14S'
  },
  'C8 H8 O3': {
    type: 'chemicalFormula',
    value: 'C8 H8 O3'
  },
  Ca2Mg2O12Si4: {
    type: 'chemicalFormula',
    value: 'Ca2Mg2O12Si4'
  },
  Ge2Mg2O6: {
    type: 'chemicalFormula',
    value: 'Ge2Mg2O6'
  },
  LiMnF3: {
    type: 'chemicalFormula',
    value: 'LiMnF3'
  },
  N3C5H7: {
    type: 'chemicalFormula',
    value: 'N3C5H7'
  },
  O4Ru1Sr2: {
    type: 'chemicalFormula',
    value: 'O4Ru1Sr2'
  },
  TiC: {
    type: 'chemicalFormula',
    value: 'TiC'
  },
  Al4O8Zn2: {
    type: 'chemicalFormula',
    value: 'Al4O8Zn2'
  },
  Al8O20Si4: {
    type: 'chemicalFormula',
    value: 'Al8O20Si4'
  },
  As16S16: {
    type: 'chemicalFormula',
    value: 'As16S16'
  },
  C6H13NO2: {
    type: 'chemicalFormula',
    value: 'C6H13NO2'
  },
  C6H15P: {
    type: 'chemicalFormula',
    value: 'C6H15P'
  },
  C7H12OS: {
    type: 'chemicalFormula',
    value: 'C7H12OS'
  },
  C7H17N: {
    type: 'chemicalFormula',
    value: 'C7H17N'
  },
  C8H18: {
    type: 'chemicalFormula',
    value: 'C8H18'
  },
  C8NH17: {
    type: 'chemicalFormula',
    value: 'C8NH17'
  },
  C9H10O4: {
    type: 'chemicalFormula',
    value: 'C9H10O4'
  },
  C9H14OS: {
    type: 'chemicalFormula',
    value: 'C9H14OS'
  },
  CaO: {
    type: 'chemicalFormula',
    value: 'CaO'
  },
  CdTe: {
    type: 'chemicalFormula',
    value: 'CdTe'
  },
  Ce1O2: {
    type: 'chemicalFormula',
    value: 'Ce1O2'
  },
  N1Zr1: {
    type: 'chemicalFormula',
    value: 'N1Zr1'
  },
  NH9C6O2: {
    type: 'chemicalFormula',
    value: 'NH9C6O2'
  },
  Ni1O1: {
    type: 'chemicalFormula',
    value: 'Ni1O1'
  },
  O2C4NH7: {
    type: 'chemicalFormula',
    value: 'O2C4NH7'
  },
  O3C4NH3: {
    type: 'chemicalFormula',
    value: 'O3C4NH3'
  },
  OC6H8: {
    type: 'chemicalFormula',
    value: 'OC6H8'
  },
  'SrFeO2.65': {
    type: 'chemicalFormula',
    value: 'SrFeO2.65'
  },
  TiN: {
    type: 'chemicalFormula',
    value: 'TiN'
  },
  Yb: {
    type: 'chemicalFormula',
    value: 'Yb'
  },
  C10H14O2: {
    type: 'chemicalFormula',
    value: 'C10H14O2'
  },
  'C10H24NO+': {
    type: 'chemicalFormula',
    value: 'C10H24NO+'
  },
  C11H25P: {
    type: 'chemicalFormula',
    value: 'C11H25P'
  },
  'C13 H12 N2 O': {
    type: 'chemicalFormula',
    value: 'C13 H12 N2 O'
  },
  C1Nb1: {
    type: 'chemicalFormula',
    value: 'C1Nb1'
  },
  C1Ta1: {
    type: 'chemicalFormula',
    value: 'C1Ta1'
  },
  C20H32O2: {
    type: 'chemicalFormula',
    value: 'C20H32O2'
  },
  C4N3H7: {
    type: 'chemicalFormula',
    value: 'C4N3H7'
  },
  C5N2H8O2: {
    type: 'chemicalFormula',
    value: 'C5N2H8O2'
  },
  C5NO2H11: {
    type: 'chemicalFormula',
    value: 'C5NO2H11'
  },
  C6H11NO2: {
    type: 'chemicalFormula',
    value: 'C6H11NO2'
  },
  C6H13O9P: {
    type: 'chemicalFormula',
    value: 'C6H13O9P'
  },
  C7H16O: {
    type: 'chemicalFormula',
    value: 'C7H16O'
  },
  'Cl K0.2 Na0.8': {
    type: 'chemicalFormula',
    value: 'Cl K0.2 Na0.8'
  },
  Li5V3P8O29: {
    type: 'chemicalFormula',
    value: 'Li5V3P8O29'
  },
  Mg2Si: {
    type: 'chemicalFormula',
    value: 'Mg2Si'
  },
  Mg2SiO4: {
    type: 'chemicalFormula',
    value: 'Mg2SiO4'
  },
  N2C5FOH5: {
    type: 'chemicalFormula',
    value: 'N2C5FOH5'
  },
  O4Sn2: {
    type: 'chemicalFormula',
    value: 'O4Sn2'
  },
  VO2: {
    type: 'chemicalFormula',
    value: 'VO2'
  },
  'Al Na O8 Si3': {
    type: 'chemicalFormula',
    value: 'Al Na O8 Si3'
  },
  'Al1.937 Cr0.061 Fe0.002 Mg0.996 O4 Zn0.004': {
    type: 'chemicalFormula',
    value: 'Al1.937 Cr0.061 Fe0.002 Mg0.996 O4 Zn0.004'
  },
  C10H13NO3: {
    type: 'chemicalFormula',
    value: 'C10H13NO3'
  },
  C18H30O2: {
    type: 'chemicalFormula',
    value: 'C18H30O2'
  },
  C21H32O3: {
    type: 'chemicalFormula',
    value: 'C21H32O3'
  },
  'C38 H28 Fe N10 S2': {
    type: 'chemicalFormula',
    value: 'C38 H28 Fe N10 S2'
  },
  C4N2O3H4: {
    type: 'chemicalFormula',
    value: 'C4N2O3H4'
  },
  C4N2O3H6: {
    type: 'chemicalFormula',
    value: 'C4N2O3H6'
  },
  C6H13NO4: {
    type: 'chemicalFormula',
    value: 'C6H13NO4'
  },
  C9H21P: {
    type: 'chemicalFormula',
    value: 'C9H21P'
  },
  Cu2In2Se4: {
    type: 'chemicalFormula',
    value: 'Cu2In2Se4'
  },
  'Li3Mn4(BO3)4': {
    type: 'chemicalFormula',
    value: 'Li3Mn4(BO3)4'
  },
  N2C4OH6: {
    type: 'chemicalFormula',
    value: 'N2C4OH6'
  },
  NC7OH5: {
    type: 'chemicalFormula',
    value: 'NC7OH5'
  },
  ONC7H9: {
    type: 'chemicalFormula',
    value: 'ONC7H9'
  },
  TiCr2: {
    type: 'chemicalFormula',
    value: 'TiCr2'
  },
  Bi2Sr2Ca2C3O10: {
    type: 'chemicalFormula',
    value: 'Bi2Sr2Ca2C3O10'
  },
  C10H10O4: {
    type: 'chemicalFormula',
    value: 'C10H10O4'
  },
  C22H30O4: {
    type: 'chemicalFormula',
    value: 'C22H30O4'
  },
  C5H11NO2: {
    type: 'chemicalFormula',
    value: 'C5H11NO2'
  },
  C5ON2H10: {
    type: 'chemicalFormula',
    value: 'C5ON2H10'
  },
  C6H10O3: {
    type: 'chemicalFormula',
    value: 'C6H10O3'
  },
  C6H14O: {
    type: 'chemicalFormula',
    value: 'C6H14O'
  },
  C7H16OS: {
    type: 'chemicalFormula',
    value: 'C7H16OS'
  },
  C8H8O4: {
    type: 'chemicalFormula',
    value: 'C8H8O4'
  },
  C9H13NO2: {
    type: 'chemicalFormula',
    value: 'C9H13NO2'
  },
  Ce1: {
    type: 'chemicalFormula',
    value: 'Ce1'
  },
  'Cl K0.4 Na0.6': {
    type: 'chemicalFormula',
    value: 'Cl K0.4 Na0.6'
  },
  LiCoSiO4: {
    type: 'chemicalFormula',
    value: 'LiCoSiO4'
  },
  LiVF4: {
    type: 'chemicalFormula',
    value: 'LiVF4'
  },
  N4C4FH5: {
    type: 'chemicalFormula',
    value: 'N4C4FH5'
  },
  NiO: {
    type: 'chemicalFormula',
    value: 'NiO'
  },
  'Al2 Fe O4': {
    type: 'chemicalFormula',
    value: 'Al2 Fe O4'
  },
  C11H24O: {
    type: 'chemicalFormula',
    value: 'C11H24O'
  },
  'C14 H12 N2 O2': {
    type: 'chemicalFormula',
    value: 'C14 H12 N2 O2'
  },
  C14H28O: {
    type: 'chemicalFormula',
    value: 'C14H28O'
  },
  'C15 H12 N2 O': {
    type: 'chemicalFormula',
    value: 'C15 H12 N2 O'
  },
  C4N4FH5: {
    type: 'chemicalFormula',
    value: 'C4N4FH5'
  },
  C5OH10: {
    type: 'chemicalFormula',
    value: 'C5OH10'
  },
  C5OH8: {
    type: 'chemicalFormula',
    value: 'C5OH8'
  },
  C6H13N: {
    type: 'chemicalFormula',
    value: 'C6H13N'
  },
  C8H15N: {
    type: 'chemicalFormula',
    value: 'C8H15N'
  },
  C9H20: {
    type: 'chemicalFormula',
    value: 'C9H20'
  },
  CaSi2: {
    type: 'chemicalFormula',
    value: 'CaSi2'
  },
  'Cr2 Mg O4': {
    type: 'chemicalFormula',
    value: 'Cr2 Mg O4'
  },
  Mn6O7F5: {
    type: 'chemicalFormula',
    value: 'Mn6O7F5'
  },
  'O2 Ti': {
    type: 'chemicalFormula',
    value: 'O2 Ti'
  },
  O3C4NH7: {
    type: 'chemicalFormula',
    value: 'O3C4NH7'
  },
  Si1: {
    type: 'chemicalFormula',
    value: 'Si1'
  },
  WC: {
    type: 'chemicalFormula',
    value: 'WC'
  },
  AgI: {
    type: 'chemicalFormula',
    value: 'AgI'
  },
  'Al(HO)3': {
    type: 'chemicalFormula',
    value: 'Al(HO)3'
  },
  'Al2O3.xSiC': {
    type: 'chemicalFormula',
    value: 'Al2O3.xSiC'
  },
  'Al2O3.xZrO2': {
    type: 'chemicalFormula',
    value: 'Al2O3.xZrO2'
  },
  Ba8Ga16Ge30: {
    type: 'chemicalFormula',
    value: 'Ba8Ga16Ge30'
  },
  'Bi2 O3': {
    type: 'chemicalFormula',
    value: 'Bi2 O3'
  },
  'C14 H13 N O2': {
    type: 'chemicalFormula',
    value: 'C14 H13 N O2'
  },
  C20H34O2: {
    type: 'chemicalFormula',
    value: 'C20H34O2'
  },
  C5H9NO2: {
    type: 'chemicalFormula',
    value: 'C5H9NO2'
  },
  C5N2FOH5: {
    type: 'chemicalFormula',
    value: 'C5N2FOH5'
  },
  C6H14N2: {
    type: 'chemicalFormula',
    value: 'C6H14N2'
  },
  CdS: {
    type: 'chemicalFormula',
    value: 'CdS'
  },
  Cu2O: {
    type: 'chemicalFormula',
    value: 'Cu2O'
  },
  N4C4OH8: {
    type: 'chemicalFormula',
    value: 'N4C4OH8'
  },
  Nd: {
    type: 'chemicalFormula',
    value: 'Nd'
  },
  O8Si2Zr2: {
    type: 'chemicalFormula',
    value: 'O8Si2Zr2'
  },
  OC5NH5: {
    type: 'chemicalFormula',
    value: 'OC5NH5'
  },
  PrMnO3: {
    type: 'chemicalFormula',
    value: 'PrMnO3'
  },
  'Si3N4.xMgO': {
    type: 'chemicalFormula',
    value: 'Si3N4.xMgO'
  },
  Zr2N2O: {
    type: 'chemicalFormula',
    value: 'Zr2N2O'
  },
  C11H21N: {
    type: 'chemicalFormula',
    value: 'C11H21N'
  },
  C14H26: {
    type: 'chemicalFormula',
    value: 'C14H26'
  },
  'C15 H14 N2 O2': {
    type: 'chemicalFormula',
    value: 'C15 H14 N2 O2'
  },
  C15H24O: {
    type: 'chemicalFormula',
    value: 'C15H24O'
  },
  C15H24O3: {
    type: 'chemicalFormula',
    value: 'C15H24O3'
  },
  C16H14O5: {
    type: 'chemicalFormula',
    value: 'C16H14O5'
  },
  C1Ti1: {
    type: 'chemicalFormula',
    value: 'C1Ti1'
  },
  C20H34O5: {
    type: 'chemicalFormula',
    value: 'C20H34O5'
  },
  C2Mg2O6: {
    type: 'chemicalFormula',
    value: 'C2Mg2O6'
  },
  C6H10O5: {
    type: 'chemicalFormula',
    value: 'C6H10O5'
  },
  C8H8O2: {
    type: 'chemicalFormula',
    value: 'C8H8O2'
  },
  'C9H22NO+': {
    type: 'chemicalFormula',
    value: 'C9H22NO+'
  },
  Fe2Sb4: {
    type: 'chemicalFormula',
    value: 'Fe2Sb4'
  },
  Ge3O6: {
    type: 'chemicalFormula',
    value: 'Ge3O6'
  },
  GeO2: {
    type: 'chemicalFormula',
    value: 'GeO2'
  },
  Hg1Te1: {
    type: 'chemicalFormula',
    value: 'Hg1Te1'
  },
  LiFeP2O7: {
    type: 'chemicalFormula',
    value: 'LiFeP2O7'
  },
  MnO2: {
    type: 'chemicalFormula',
    value: 'MnO2'
  },
  MnOF: {
    type: 'chemicalFormula',
    value: 'MnOF'
  },
  O3C4H6: {
    type: 'chemicalFormula',
    value: 'O3C4H6'
  },
  Pr: {
    type: 'chemicalFormula',
    value: 'Pr'
  },
  Se4Sn4: {
    type: 'chemicalFormula',
    value: 'Se4Sn4'
  },
  SiRh: {
    type: 'chemicalFormula',
    value: 'SiRh'
  },
  ZnSe: {
    type: 'chemicalFormula',
    value: 'ZnSe'
  },
  ZnTe: {
    type: 'chemicalFormula',
    value: 'ZnTe'
  },
  AlPd: {
    type: 'chemicalFormula',
    value: 'AlPd'
  },
  'As4 O6': {
    type: 'chemicalFormula',
    value: 'As4 O6'
  },
  'Ba O3 Ti': {
    type: 'chemicalFormula',
    value: 'Ba O3 Ti'
  },
  BaO: {
    type: 'chemicalFormula',
    value: 'BaO'
  },
  C10H16S: {
    type: 'chemicalFormula',
    value: 'C10H16S'
  },
  C11H13NO4: {
    type: 'chemicalFormula',
    value: 'C11H13NO4'
  },
  C13H24O2: {
    type: 'chemicalFormula',
    value: 'C13H24O2'
  },
  C13H24OS: {
    type: 'chemicalFormula',
    value: 'C13H24OS'
  },
  C15H22O4: {
    type: 'chemicalFormula',
    value: 'C15H22O4'
  },
  'C19 H19 N O2': {
    type: 'chemicalFormula',
    value: 'C19 H19 N O2'
  },
  C2Na4O6: {
    type: 'chemicalFormula',
    value: 'C2Na4O6'
  },
  C3N4O2H4: {
    type: 'chemicalFormula',
    value: 'C3N4O2H4'
  },
  C4H9NO2: {
    type: 'chemicalFormula',
    value: 'C4H9NO2'
  },
  'C7 H7 N O2': {
    type: 'chemicalFormula',
    value: 'C7 H7 N O2'
  },
  CO2: {
    type: 'chemicalFormula',
    value: 'CO2'
  },
  CaAlSi: {
    type: 'chemicalFormula',
    value: 'CaAlSi'
  },
  'Cl K0.8 Na0.2': {
    type: 'chemicalFormula',
    value: 'Cl K0.8 Na0.2'
  },
  LiMnP2O7: {
    type: 'chemicalFormula',
    value: 'LiMnP2O7'
  },
  N6C3H4: {
    type: 'chemicalFormula',
    value: 'N6C3H4'
  },
  O2: {
    type: 'chemicalFormula',
    value: 'O2'
  },
  O2C6H12: {
    type: 'chemicalFormula',
    value: 'O2C6H12'
  },
  O3Sr1Ti1: {
    type: 'chemicalFormula',
    value: 'O3Sr1Ti1'
  },
  'Pr0.95Ca0.05VO3': {
    type: 'chemicalFormula',
    value: 'Pr0.95Ca0.05VO3'
  },
  'Si3N4.xAl2O3.yY2O3': {
    type: 'chemicalFormula',
    value: 'Si3N4.xAl2O3.yY2O3'
  },
  SrO: {
    type: 'chemicalFormula',
    value: 'SrO'
  },
  Te2MoWSeS: {
    type: 'chemicalFormula',
    value: 'Te2MoWSeS'
  },
  TeMoWSe2S: {
    type: 'chemicalFormula',
    value: 'TeMoWSe2S'
  },
  TeMoWSeS2: {
    type: 'chemicalFormula',
    value: 'TeMoWSeS2'
  },
  W2C: {
    type: 'chemicalFormula',
    value: 'W2C'
  },
  Al6Cl2Na8O24Si6: {
    type: 'chemicalFormula',
    value: 'Al6Cl2Na8O24Si6'
  },
  Al8Mg12O48Si12: {
    type: 'chemicalFormula',
    value: 'Al8Mg12O48Si12'
  },
  As1Ga1: {
    type: 'chemicalFormula',
    value: 'As1Ga1'
  },
  'C Fe O3': {
    type: 'chemicalFormula',
    value: 'C Fe O3'
  },
  C10H15NO: {
    type: 'chemicalFormula',
    value: 'C10H15NO'
  },
  C15H18O3: {
    type: 'chemicalFormula',
    value: 'C15H18O3'
  },
  C15H22O3: {
    type: 'chemicalFormula',
    value: 'C15H22O3'
  },
  C18H32O2: {
    type: 'chemicalFormula',
    value: 'C18H32O2'
  },
  C19H22N2O: {
    type: 'chemicalFormula',
    value: 'C19H22N2O'
  },
  C19H26O2: {
    type: 'chemicalFormula',
    value: 'C19H26O2'
  },
  C20H26O3: {
    type: 'chemicalFormula',
    value: 'C20H26O3'
  },
  C20H28O5: {
    type: 'chemicalFormula',
    value: 'C20H28O5'
  },
  C21H32O2: {
    type: 'chemicalFormula',
    value: 'C21H32O2'
  },
  C27H44O: {
    type: 'chemicalFormula',
    value: 'C27H44O'
  },
  'C3 H4 N2': {
    type: 'chemicalFormula',
    value: 'C3 H4 N2'
  },
  C3N4OH6: {
    type: 'chemicalFormula',
    value: 'C3N4OH6'
  },
  C4O2NH7: {
    type: 'chemicalFormula',
    value: 'C4O2NH7'
  },
  C5NO3H5: {
    type: 'chemicalFormula',
    value: 'C5NO3H5'
  },
  C6H12O3: {
    type: 'chemicalFormula',
    value: 'C6H12O3'
  },
  C6H12O4: {
    type: 'chemicalFormula',
    value: 'C6H12O4'
  },
  C7H8: {
    type: 'chemicalFormula',
    value: 'C7H8'
  },
  C7H8N2O2: {
    type: 'chemicalFormula',
    value: 'C7H8N2O2'
  },
  C9H16O3: {
    type: 'chemicalFormula',
    value: 'C9H16O3'
  },
  Ca4Mg2O14Si4: {
    type: 'chemicalFormula',
    value: 'Ca4Mg2O14Si4'
  },
  CaSiPt: {
    type: 'chemicalFormula',
    value: 'CaSiPt'
  },
  'Cl K': {
    type: 'chemicalFormula',
    value: 'Cl K'
  },
  'Cl K0.6 Na0.4': {
    type: 'chemicalFormula',
    value: 'Cl K0.6 Na0.4'
  },
  'Cl Na': {
    type: 'chemicalFormula',
    value: 'Cl Na'
  },
  Fe4Li4O16P4: {
    type: 'chemicalFormula',
    value: 'Fe4Li4O16P4'
  },
  Li2VO2F: {
    type: 'chemicalFormula',
    value: 'Li2VO2F'
  },
  'Li5Fe8(BO3)8': {
    type: 'chemicalFormula',
    value: 'Li5Fe8(BO3)8'
  },
  'Li5Mn6(BO3)6': {
    type: 'chemicalFormula',
    value: 'Li5Mn6(BO3)6'
  },
  N1Ti1: {
    type: 'chemicalFormula',
    value: 'N1Ti1'
  },
  N2C4O3H8: {
    type: 'chemicalFormula',
    value: 'N2C4O3H8'
  },
  N3C3O2H5: {
    type: 'chemicalFormula',
    value: 'N3C3O2H5'
  },
  O3C3N3H3: {
    type: 'chemicalFormula',
    value: 'O3C3N3H3'
  },
  ON2C6H6: {
    type: 'chemicalFormula',
    value: 'ON2C6H6'
  },
  'SiC.xTiB2': {
    type: 'chemicalFormula',
    value: 'SiC.xTiB2'
  },
  ThO2: {
    type: 'chemicalFormula',
    value: 'ThO2'
  },
  Al8Ca12O48Si12: {
    type: 'chemicalFormula',
    value: 'Al8Ca12O48Si12'
  },
  'Ba2 Cu3 O6.91 Y': {
    type: 'chemicalFormula',
    value: 'Ba2 Cu3 O6.91 Y'
  },
  Bi2Sr2CaC2Ox: {
    type: 'chemicalFormula',
    value: 'Bi2Sr2CaC2Ox'
  },
  'C10 H12 N2 O2': {
    type: 'chemicalFormula',
    value: 'C10 H12 N2 O2'
  },
  C10H11NO3: {
    type: 'chemicalFormula',
    value: 'C10H11NO3'
  },
  C11H14O3: {
    type: 'chemicalFormula',
    value: 'C11H14O3'
  },
  'C13 H14 N2 O2': {
    type: 'chemicalFormula',
    value: 'C13 H14 N2 O2'
  },
  'C13 H7 F4 N': {
    type: 'chemicalFormula',
    value: 'C13 H7 F4 N'
  },
  'C14 H12 N2 O3': {
    type: 'chemicalFormula',
    value: 'C14 H12 N2 O3'
  },
  'C15 H20 O4': {
    type: 'chemicalFormula',
    value: 'C15 H20 O4'
  },
  'C17 H14 N2 O2': {
    type: 'chemicalFormula',
    value: 'C17 H14 N2 O2'
  },
  'C18 H18 N2 O2': {
    type: 'chemicalFormula',
    value: 'C18 H18 N2 O2'
  },
  C18H32O16: {
    type: 'chemicalFormula',
    value: 'C18H32O16'
  },
  'C19 H18 O': {
    type: 'chemicalFormula',
    value: 'C19 H18 O'
  },
  'C20 H18 O4': {
    type: 'chemicalFormula',
    value: 'C20 H18 O4'
  },
  C21H28O2: {
    type: 'chemicalFormula',
    value: 'C21H28O2'
  },
  C21H28O4: {
    type: 'chemicalFormula',
    value: 'C21H28O4'
  },
  C5H10O3: {
    type: 'chemicalFormula',
    value: 'C5H10O3'
  },
  C5NH11O3: {
    type: 'chemicalFormula',
    value: 'C5NH11O3'
  },
  C6H11FO5: {
    type: 'chemicalFormula',
    value: 'C6H11FO5'
  },
  C6NOH5: {
    type: 'chemicalFormula',
    value: 'C6NOH5'
  },
  C6OH14: {
    type: 'chemicalFormula',
    value: 'C6OH14'
  },
  C7H14O6: {
    type: 'chemicalFormula',
    value: 'C7H14O6'
  },
  C7H15NO2: {
    type: 'chemicalFormula',
    value: 'C7H15NO2'
  },
  Ca12Fe8O48Si12: {
    type: 'chemicalFormula',
    value: 'Ca12Fe8O48Si12'
  },
  CdSe: {
    type: 'chemicalFormula',
    value: 'CdSe'
  },
  Cr2O4: {
    type: 'chemicalFormula',
    value: 'Cr2O4'
  },
  F3Sc1: {
    type: 'chemicalFormula',
    value: 'F3Sc1'
  },
  'Fe2 O4 Zn': {
    type: 'chemicalFormula',
    value: 'Fe2 O4 Zn'
  },
  In2O3: {
    type: 'chemicalFormula',
    value: 'In2O3'
  },
  Li2Nb2O6: {
    type: 'chemicalFormula',
    value: 'Li2Nb2O6'
  },
  'Li3Fe8(BO3)8': {
    type: 'chemicalFormula',
    value: 'Li3Fe8(BO3)8'
  },
  N3C4OFH4: {
    type: 'chemicalFormula',
    value: 'N3C4OFH4'
  },
  N3C4OH3: {
    type: 'chemicalFormula',
    value: 'N3C4OH3'
  },
  N5C4H7: {
    type: 'chemicalFormula',
    value: 'N5C4H7'
  },
  O24Y16: {
    type: 'chemicalFormula',
    value: 'O24Y16'
  },
  O2C5NH3: {
    type: 'chemicalFormula',
    value: 'O2C5NH3'
  },
  OC7H6: {
    type: 'chemicalFormula',
    value: 'OC7H6'
  },
  Si2: {
    type: 'chemicalFormula',
    value: 'Si2'
  },
  Si2V6: {
    type: 'chemicalFormula',
    value: 'Si2V6'
  },
  BP: {
    type: 'chemicalFormula',
    value: 'BP'
  },
  Be2O2: {
    type: 'chemicalFormula',
    value: 'Be2O2'
  },
  'C11H22NO+': {
    type: 'chemicalFormula',
    value: 'C11H22NO+'
  },
  'C12 H12 N2 O2': {
    type: 'chemicalFormula',
    value: 'C12 H12 N2 O2'
  },
  C12H20S: {
    type: 'chemicalFormula',
    value: 'C12H20S'
  },
  C14H24O: {
    type: 'chemicalFormula',
    value: 'C14H24O'
  },
  'C15 H15 N O2': {
    type: 'chemicalFormula',
    value: 'C15 H15 N O2'
  },
  C15H18O4: {
    type: 'chemicalFormula',
    value: 'C15H18O4'
  },
  C15H20O2: {
    type: 'chemicalFormula',
    value: 'C15H20O2'
  },
  'C16 H17 N O2': {
    type: 'chemicalFormula',
    value: 'C16 H17 N O2'
  },
  C20H26O2: {
    type: 'chemicalFormula',
    value: 'C20H26O2'
  },
  C30H50O2: {
    type: 'chemicalFormula',
    value: 'C30H50O2'
  },
  C4H6O2: {
    type: 'chemicalFormula',
    value: 'C4H6O2'
  },
  C4H8O2: {
    type: 'chemicalFormula',
    value: 'C4H8O2'
  },
  C4N2OH8: {
    type: 'chemicalFormula',
    value: 'C4N2OH8'
  },
  C5H11NO: {
    type: 'chemicalFormula',
    value: 'C5H11NO'
  },
  C5H9NO: {
    type: 'chemicalFormula',
    value: 'C5H9NO'
  },
  C5N2O2H4: {
    type: 'chemicalFormula',
    value: 'C5N2O2H4'
  },
  C5NO3H11: {
    type: 'chemicalFormula',
    value: 'C5NO3H11'
  },
  C6NH7: {
    type: 'chemicalFormula',
    value: 'C6NH7'
  },
  C8H18S: {
    type: 'chemicalFormula',
    value: 'C8H18S'
  },
  Co1Sb1Ti1: {
    type: 'chemicalFormula',
    value: 'Co1Sb1Ti1'
  },
  CoO: {
    type: 'chemicalFormula',
    value: 'CoO'
  },
  'F3 Mg Na': {
    type: 'chemicalFormula',
    value: 'F3 Mg Na'
  },
  'F3 Sc1': {
    type: 'chemicalFormula',
    value: 'F3 Sc1'
  },
  Fe4O8Zn2: {
    type: 'chemicalFormula',
    value: 'Fe4O8Zn2'
  },
  'Ge O2': {
    type: 'chemicalFormula',
    value: 'Ge O2'
  },
  Ge1Te1: {
    type: 'chemicalFormula',
    value: 'Ge1Te1'
  },
  'Mn O': {
    type: 'chemicalFormula',
    value: 'Mn O'
  },
  N1V1: {
    type: 'chemicalFormula',
    value: 'N1V1'
  },
  SrTiO3: {
    type: 'chemicalFormula',
    value: 'SrTiO3'
  },
  Te1Zn1: {
    type: 'chemicalFormula',
    value: 'Te1Zn1'
  },
  'Al H O2': {
    type: 'chemicalFormula',
    value: 'Al H O2'
  },
  'Al K O8 Si3': {
    type: 'chemicalFormula',
    value: 'Al K O8 Si3'
  },
  AlSb: {
    type: 'chemicalFormula',
    value: 'AlSb'
  },
  'As2 O3': {
    type: 'chemicalFormula',
    value: 'As2 O3'
  },
  'Ba1-xKxBiO3': {
    type: 'chemicalFormula',
    value: 'Ba1-xKxBiO3'
  },
  BaZrO3: {
    type: 'chemicalFormula',
    value: 'BaZrO3'
  },
  'C12 H15 N O3': {
    type: 'chemicalFormula',
    value: 'C12 H15 N O3'
  },
  C12H14N2O2: {
    type: 'chemicalFormula',
    value: 'C12H14N2O2'
  },
  'C13 H14 N2 O3': {
    type: 'chemicalFormula',
    value: 'C13 H14 N2 O3'
  },
  'C15 H14 N2 O3': {
    type: 'chemicalFormula',
    value: 'C15 H14 N2 O3'
  },
  'C16 H16 N2 O2': {
    type: 'chemicalFormula',
    value: 'C16 H16 N2 O2'
  },
  'C16 H16 N2 O4': {
    type: 'chemicalFormula',
    value: 'C16 H16 N2 O4'
  },
  'C16 H18 N4 O6 S2': {
    type: 'chemicalFormula',
    value: 'C16 H18 N4 O6 S2'
  },
  C16H23NO2: {
    type: 'chemicalFormula',
    value: 'C16H23NO2'
  },
  'C18 H18 O4': {
    type: 'chemicalFormula',
    value: 'C18 H18 O4'
  },
  C18H22O2: {
    type: 'chemicalFormula',
    value: 'C18H22O2'
  },
  C19H21NO4: {
    type: 'chemicalFormula',
    value: 'C19H21NO4'
  },
  C19H28O2: {
    type: 'chemicalFormula',
    value: 'C19H28O2'
  },
  C1Hf1: {
    type: 'chemicalFormula',
    value: 'C1Hf1'
  },
  C20H34O4: {
    type: 'chemicalFormula',
    value: 'C20H34O4'
  },
  C21H30O4: {
    type: 'chemicalFormula',
    value: 'C21H30O4'
  },
  C30H48O4: {
    type: 'chemicalFormula',
    value: 'C30H48O4'
  },
  C4H8O: {
    type: 'chemicalFormula',
    value: 'C4H8O'
  },
  C5H8O: {
    type: 'chemicalFormula',
    value: 'C5H8O'
  },
  C5NOH11: {
    type: 'chemicalFormula',
    value: 'C5NOH11'
  },
  C5O2H12: {
    type: 'chemicalFormula',
    value: 'C5O2H12'
  },
  C6H12S: {
    type: 'chemicalFormula',
    value: 'C6H12S'
  },
  C6H13NO3: {
    type: 'chemicalFormula',
    value: 'C6H13NO3'
  },
  C6H15N: {
    type: 'chemicalFormula',
    value: 'C6H15N'
  },
  C6NO2H5: {
    type: 'chemicalFormula',
    value: 'C6NO2H5'
  },
  'C7H16NO+': {
    type: 'chemicalFormula',
    value: 'C7H16NO+'
  },
  C8H10O2: {
    type: 'chemicalFormula',
    value: 'C8H10O2'
  },
  C9H11NO: {
    type: 'chemicalFormula',
    value: 'C9H11NO'
  },
  C9H9NO4: {
    type: 'chemicalFormula',
    value: 'C9H9NO4'
  },
  'Ca Mg O6 Si2': {
    type: 'chemicalFormula',
    value: 'Ca Mg O6 Si2'
  },
  Ca1O3Si1: {
    type: 'chemicalFormula',
    value: 'Ca1O3Si1'
  },
  Er2Fe4: {
    type: 'chemicalFormula',
    value: 'Er2Fe4'
  },
  'HgBa2Ca2C3O8+x': {
    type: 'chemicalFormula',
    value: 'HgBa2Ca2C3O8+x'
  },
  In1Sb1: {
    type: 'chemicalFormula',
    value: 'In1Sb1'
  },
  'Li Mn2 O4': {
    type: 'chemicalFormula',
    value: 'Li Mn2 O4'
  },
  Li1: {
    type: 'chemicalFormula',
    value: 'Li1'
  },
  'Li3MnV(PO4)3': {
    type: 'chemicalFormula',
    value: 'Li3MnV(PO4)3'
  },
  LiFeF3: {
    type: 'chemicalFormula',
    value: 'LiFeF3'
  },
  'N4 Si3': {
    type: 'chemicalFormula',
    value: 'N4 Si3'
  },
  Na1Nb1O3: {
    type: 'chemicalFormula',
    value: 'Na1Nb1O3'
  },
  SbO2: {
    type: 'chemicalFormula',
    value: 'SbO2'
  },
  Si2N2O: {
    type: 'chemicalFormula',
    value: 'Si2N2O'
  },
  V2O5: {
    type: 'chemicalFormula',
    value: 'V2O5'
  },
  Zn2: {
    type: 'chemicalFormula',
    value: 'Zn2'
  },
  Al4Mg2O8: {
    type: 'chemicalFormula',
    value: 'Al4Mg2O8'
  },
  As2Ba1Fe2: {
    type: 'chemicalFormula',
    value: 'As2Ba1Fe2'
  },
  'C Mg O3': {
    type: 'chemicalFormula',
    value: 'C Mg O3'
  },
  C11H13NO3: {
    type: 'chemicalFormula',
    value: 'C11H13NO3'
  },
  C11H25N: {
    type: 'chemicalFormula',
    value: 'C11H25N'
  },
  C13H25NO: {
    type: 'chemicalFormula',
    value: 'C13H25NO'
  },
  'C14 H12 Cl N O': {
    type: 'chemicalFormula',
    value: 'C14 H12 Cl N O'
  },
  'C14 H16 N2 O2': {
    type: 'chemicalFormula',
    value: 'C14 H16 N2 O2'
  },
  C15H28O3: {
    type: 'chemicalFormula',
    value: 'C15H28O3'
  },
  'C16 H13 N O2': {
    type: 'chemicalFormula',
    value: 'C16 H13 N O2'
  },
  'C16 H14 O3': {
    type: 'chemicalFormula',
    value: 'C16 H14 O3'
  },
  'C16 H17 N O3': {
    type: 'chemicalFormula',
    value: 'C16 H17 N O3'
  },
  'C18 H20 O4': {
    type: 'chemicalFormula',
    value: 'C18 H20 O4'
  },
  C18H22O3: {
    type: 'chemicalFormula',
    value: 'C18H22O3'
  },
  C20H26O4: {
    type: 'chemicalFormula',
    value: 'C20H26O4'
  },
  C20H32O6: {
    type: 'chemicalFormula',
    value: 'C20H32O6'
  },
  C21H30O5: {
    type: 'chemicalFormula',
    value: 'C21H30O5'
  },
  C21H34O4: {
    type: 'chemicalFormula',
    value: 'C21H34O4'
  },
  C27H46O2: {
    type: 'chemicalFormula',
    value: 'C27H46O2'
  },
  C2Ca1Mg1O6: {
    type: 'chemicalFormula',
    value: 'C2Ca1Mg1O6'
  },
  C3N6H6: {
    type: 'chemicalFormula',
    value: 'C3N6H6'
  },
  C4O2H8: {
    type: 'chemicalFormula',
    value: 'C4O2H8'
  },
  C4O2NH9: {
    type: 'chemicalFormula',
    value: 'C4O2NH9'
  },
  C5H9NO3: {
    type: 'chemicalFormula',
    value: 'C5H9NO3'
  },
  C5N4H4: {
    type: 'chemicalFormula',
    value: 'C5N4H4'
  },
  C5NO2H5: {
    type: 'chemicalFormula',
    value: 'C5NO2H5'
  },
  C6H8O4: {
    type: 'chemicalFormula',
    value: 'C6H8O4'
  },
  'C8H20NO+': {
    type: 'chemicalFormula',
    value: 'C8H20NO+'
  },
  CaF2: {
    type: 'chemicalFormula',
    value: 'CaF2'
  },
  Cu1: {
    type: 'chemicalFormula',
    value: 'Cu1'
  },
  'Fe2 O4 Si': {
    type: 'chemicalFormula',
    value: 'Fe2 O4 Si'
  },
  Gd: {
    type: 'chemicalFormula',
    value: 'Gd'
  },
  GeSe: {
    type: 'chemicalFormula',
    value: 'GeSe'
  },
  Lu: {
    type: 'chemicalFormula',
    value: 'Lu'
  },
  'Mg Ni O4 Si': {
    type: 'chemicalFormula',
    value: 'Mg Ni O4 Si'
  },
  Mn1S1: {
    type: 'chemicalFormula',
    value: 'Mn1S1'
  },
  Mo2C: {
    type: 'chemicalFormula',
    value: 'Mo2C'
  },
  N4C4H6O: {
    type: 'chemicalFormula',
    value: 'N4C4H6O'
  },
  NC5O2H9: {
    type: 'chemicalFormula',
    value: 'NC5O2H9'
  },
  OC6H10: {
    type: 'chemicalFormula',
    value: 'OC6H10'
  },
  Se1Zn1: {
    type: 'chemicalFormula',
    value: 'Se1Zn1'
  },
  TiCu: {
    type: 'chemicalFormula',
    value: 'TiCu'
  },
  AlCu3: {
    type: 'chemicalFormula',
    value: 'AlCu3'
  },
  BiO2: {
    type: 'chemicalFormula',
    value: 'BiO2'
  },
  'C Ba O3': {
    type: 'chemicalFormula',
    value: 'C Ba O3'
  },
  C10H12O3: {
    type: 'chemicalFormula',
    value: 'C10H12O3'
  },
  C10H12O4: {
    type: 'chemicalFormula',
    value: 'C10H12O4'
  },
  C11H17NO: {
    type: 'chemicalFormula',
    value: 'C11H17NO'
  },
  C11H24S: {
    type: 'chemicalFormula',
    value: 'C11H24S'
  },
  'C13 H13 N O': {
    type: 'chemicalFormula',
    value: 'C13 H13 N O'
  },
  'C14 H12 N2 O4': {
    type: 'chemicalFormula',
    value: 'C14 H12 N2 O4'
  },
  'C15 H12 O2': {
    type: 'chemicalFormula',
    value: 'C15 H12 O2'
  },
  'C15 H15 N O': {
    type: 'chemicalFormula',
    value: 'C15 H15 N O'
  },
  'C15 H16 N2 O2': {
    type: 'chemicalFormula',
    value: 'C15 H16 N2 O2'
  },
  'C15 H20 O3': {
    type: 'chemicalFormula',
    value: 'C15 H20 O3'
  },
  'C18 H17 N O4': {
    type: 'chemicalFormula',
    value: 'C18 H17 N O4'
  },
  C19H28O3: {
    type: 'chemicalFormula',
    value: 'C19H28O3'
  },
  'C24 H12 O13 Zn4': {
    type: 'chemicalFormula',
    value: 'C24 H12 O13 Zn4'
  },
  C27H42O3: {
    type: 'chemicalFormula',
    value: 'C27H42O3'
  },
  'C28 H30 Cu F12 N4 O6': {
    type: 'chemicalFormula',
    value: 'C28 H30 Cu F12 N4 O6'
  },
  C29H48O: {
    type: 'chemicalFormula',
    value: 'C29H48O'
  },
  C30H48O3: {
    type: 'chemicalFormula',
    value: 'C30H48O3'
  },
  C4N3OFH4: {
    type: 'chemicalFormula',
    value: 'C4N3OFH4'
  },
  C5H10O2: {
    type: 'chemicalFormula',
    value: 'C5H10O2'
  },
  C5H9NO4: {
    type: 'chemicalFormula',
    value: 'C5H9NO4'
  },
  C6H11NO3: {
    type: 'chemicalFormula',
    value: 'C6H11NO3'
  },
  C6H13NO5: {
    type: 'chemicalFormula',
    value: 'C6H13NO5'
  },
  'C8H16NO+': {
    type: 'chemicalFormula',
    value: 'C8H16NO+'
  },
  C9H11NO3: {
    type: 'chemicalFormula',
    value: 'C9H11NO3'
  },
  Cl1Na1: {
    type: 'chemicalFormula',
    value: 'Cl1Na1'
  },
  CrN2: {
    type: 'chemicalFormula',
    value: 'CrN2'
  },
  F18La6: {
    type: 'chemicalFormula',
    value: 'F18La6'
  },
  Fe4Zr2: {
    type: 'chemicalFormula',
    value: 'Fe4Zr2'
  },
  'Ga Li O6 Si2': {
    type: 'chemicalFormula',
    value: 'Ga Li O6 Si2'
  },
  InAs: {
    type: 'chemicalFormula',
    value: 'InAs'
  },
  'La0.98Sr0.02CrO3': {
    type: 'chemicalFormula',
    value: 'La0.98Sr0.02CrO3'
  },
  LiVSiO4: {
    type: 'chemicalFormula',
    value: 'LiVSiO4'
  },
  Mn6OF11: {
    type: 'chemicalFormula',
    value: 'Mn6OF11'
  },
  N1Nb1: {
    type: 'chemicalFormula',
    value: 'N1Nb1'
  },
  N2C4O2H8: {
    type: 'chemicalFormula',
    value: 'N2C4O2H8'
  },
  N3C3OH5: {
    type: 'chemicalFormula',
    value: 'N3C3OH5'
  },
  Ni1: {
    type: 'chemicalFormula',
    value: 'Ni1'
  },
  O24Si12: {
    type: 'chemicalFormula',
    value: 'O24Si12'
  },
  O2C3N3H3: {
    type: 'chemicalFormula',
    value: 'O2C3N3H3'
  },
  O2C3N4H4: {
    type: 'chemicalFormula',
    value: 'O2C3N4H4'
  },
  O2C4N3H: {
    type: 'chemicalFormula',
    value: 'O2C4N3H'
  },
  PbCrO3: {
    type: 'chemicalFormula',
    value: 'PbCrO3'
  },
  PbS: {
    type: 'chemicalFormula',
    value: 'PbS'
  },
  Pu: {
    type: 'chemicalFormula',
    value: 'Pu'
  },
  S1Zn1: {
    type: 'chemicalFormula',
    value: 'S1Zn1'
  },
  S2Ti1: {
    type: 'chemicalFormula',
    value: 'S2Ti1'
  },
  Sc1: {
    type: 'chemicalFormula',
    value: 'Sc1'
  },
  SnTe: {
    type: 'chemicalFormula',
    value: 'SnTe'
  },
  Sr1: {
    type: 'chemicalFormula',
    value: 'Sr1'
  },
  U: {
    type: 'chemicalFormula',
    value: 'U'
  },
  VOF: {
    type: 'chemicalFormula',
    value: 'VOF'
  },
  'ZrO2.xCeO2': {
    type: 'chemicalFormula',
    value: 'ZrO2.xCeO2'
  },
  Al1: {
    type: 'chemicalFormula',
    value: 'Al1'
  },
  Al1La1O3: {
    type: 'chemicalFormula',
    value: 'Al1La1O3'
  },
  'Al2 Ca3 O12 Si3': {
    type: 'chemicalFormula',
    value: 'Al2 Ca3 O12 Si3'
  },
  Al2Li2: {
    type: 'chemicalFormula',
    value: 'Al2Li2'
  },
  'As S': {
    type: 'chemicalFormula',
    value: 'As S'
  },
  As1In1: {
    type: 'chemicalFormula',
    value: 'As1In1'
  },
  'Ba Co2 Gd O5.389': {
    type: 'chemicalFormula',
    value: 'Ba Co2 Gd O5.389'
  },
  C10H12N2O3: {
    type: 'chemicalFormula',
    value: 'C10H12N2O3'
  },
  C10H17: {
    type: 'chemicalFormula',
    value: 'C10H17'
  },
  C11H12O4: {
    type: 'chemicalFormula',
    value: 'C11H12O4'
  },
  C11H15NO3: {
    type: 'chemicalFormula',
    value: 'C11H15NO3'
  },
  'C13 H15 N O2': {
    type: 'chemicalFormula',
    value: 'C13 H15 N O2'
  },
  'C14 H14 N2 O4': {
    type: 'chemicalFormula',
    value: 'C14 H14 N2 O4'
  },
  'C15 H14 O2': {
    type: 'chemicalFormula',
    value: 'C15 H14 O2'
  },
  'C15 H24 O2': {
    type: 'chemicalFormula',
    value: 'C15 H24 O2'
  },
  C15H22O: {
    type: 'chemicalFormula',
    value: 'C15H22O'
  },
  'C18 H19 N O3': {
    type: 'chemicalFormula',
    value: 'C18 H19 N O3'
  },
  C18H32O4: {
    type: 'chemicalFormula',
    value: 'C18H32O4'
  },
  C20H24O6: {
    type: 'chemicalFormula',
    value: 'C20H24O6'
  },
  C21H28O3: {
    type: 'chemicalFormula',
    value: 'C21H28O3'
  },
  C4H8O3: {
    type: 'chemicalFormula',
    value: 'C4H8O3'
  },
  C4N3O2H9: {
    type: 'chemicalFormula',
    value: 'C4N3O2H9'
  },
  C4O2N2H8: {
    type: 'chemicalFormula',
    value: 'C4O2N2H8'
  },
  C4O3NH7: {
    type: 'chemicalFormula',
    value: 'C4O3NH7'
  },
  C5H12O: {
    type: 'chemicalFormula',
    value: 'C5H12O'
  },
  C5NH9O3: {
    type: 'chemicalFormula',
    value: 'C5NH9O3'
  },
  C5O3H12: {
    type: 'chemicalFormula',
    value: 'C5O3H12'
  },
  C6H10O7: {
    type: 'chemicalFormula',
    value: 'C6H10O7'
  },
  C6N2OH14: {
    type: 'chemicalFormula',
    value: 'C6N2OH14'
  },
  'C72 H48 Ag4 Mo8 N24 O26': {
    type: 'chemicalFormula',
    value: 'C72 H48 Ag4 Mo8 N24 O26'
  },
  C7N2H4: {
    type: 'chemicalFormula',
    value: 'C7N2H4'
  },
  C8H10O: {
    type: 'chemicalFormula',
    value: 'C8H10O'
  },
  C9H13NO: {
    type: 'chemicalFormula',
    value: 'C9H13NO'
  },
  C9H9NO2: {
    type: 'chemicalFormula',
    value: 'C9H9NO2'
  },
  Ca2O6Si2: {
    type: 'chemicalFormula',
    value: 'Ca2O6Si2'
  },
  Cl6K2Pt1: {
    type: 'chemicalFormula',
    value: 'Cl6K2Pt1'
  },
  Cu2O2: {
    type: 'chemicalFormula',
    value: 'Cu2O2'
  },
  Fe3Pt: {
    type: 'chemicalFormula',
    value: 'Fe3Pt'
  },
  GaSb: {
    type: 'chemicalFormula',
    value: 'GaSb'
  },
  HfB2: {
    type: 'chemicalFormula',
    value: 'HfB2'
  },
  LiCrPO4: {
    type: 'chemicalFormula',
    value: 'LiCrPO4'
  },
  LiMnF4: {
    type: 'chemicalFormula',
    value: 'LiMnF4'
  },
  Mg2O6Ti2: {
    type: 'chemicalFormula',
    value: 'Mg2O6Ti2'
  },
  Mn1Se1: {
    type: 'chemicalFormula',
    value: 'Mn1Se1'
  },
  MoS2: {
    type: 'chemicalFormula',
    value: 'MoS2'
  },
  N2H8C5O2: {
    type: 'chemicalFormula',
    value: 'N2H8C5O2'
  },
  N5C3H5: {
    type: 'chemicalFormula',
    value: 'N5C3H5'
  },
  N5C4H3: {
    type: 'chemicalFormula',
    value: 'N5C4H3'
  },
  'O12 Sc2 W3': {
    type: 'chemicalFormula',
    value: 'O12 Sc2 W3'
  },
  O2U1: {
    type: 'chemicalFormula',
    value: 'O2U1'
  },
  O4C4NH3: {
    type: 'chemicalFormula',
    value: 'O4C4NH3'
  },
  OC4N2H4: {
    type: 'chemicalFormula',
    value: 'OC4N2H4'
  },
  OC5N3H9: {
    type: 'chemicalFormula',
    value: 'OC5N3H9'
  },
  Se3: {
    type: 'chemicalFormula',
    value: 'Se3'
  },
  VPd3: {
    type: 'chemicalFormula',
    value: 'VPd3'
  },
  'Y0.8Ca0.2TiO3': {
    type: 'chemicalFormula',
    value: 'Y0.8Ca0.2TiO3'
  },
  Ag1: {
    type: 'chemicalFormula',
    value: 'Ag1'
  },
  AlPt3: {
    type: 'chemicalFormula',
    value: 'AlPt3'
  },
  'C10 H10 O4': {
    type: 'chemicalFormula',
    value: 'C10 H10 O4'
  },
  C10H10O2: {
    type: 'chemicalFormula',
    value: 'C10H10O2'
  },
  C10H11NO4: {
    type: 'chemicalFormula',
    value: 'C10H11NO4'
  },
  C10H14O3: {
    type: 'chemicalFormula',
    value: 'C10H14O3'
  },
  C11H15NO: {
    type: 'chemicalFormula',
    value: 'C11H15NO'
  },
  C11H18S: {
    type: 'chemicalFormula',
    value: 'C11H18S'
  },
  'C11H26NO+': {
    type: 'chemicalFormula',
    value: 'C11H26NO+'
  },
  C12H15NO8: {
    type: 'chemicalFormula',
    value: 'C12H15NO8'
  },
  C12H25P: {
    type: 'chemicalFormula',
    value: 'C12H25P'
  },
  'C13 H12 N2 O2': {
    type: 'chemicalFormula',
    value: 'C13 H12 N2 O2'
  },
  'C13 H16 O4': {
    type: 'chemicalFormula',
    value: 'C13 H16 O4'
  },
  'C14 H14 N2 O2': {
    type: 'chemicalFormula',
    value: 'C14 H14 N2 O2'
  },
  'C15 H13 N O2': {
    type: 'chemicalFormula',
    value: 'C15 H13 N O2'
  },
  'C15 H14 N2 O4': {
    type: 'chemicalFormula',
    value: 'C15 H14 N2 O4'
  },
  'C15 H22 O2': {
    type: 'chemicalFormula',
    value: 'C15 H22 O2'
  },
  C15H12O6: {
    type: 'chemicalFormula',
    value: 'C15H12O6'
  },
  'C16 H14 O2': {
    type: 'chemicalFormula',
    value: 'C16 H14 O2'
  },
  C16H12O5: {
    type: 'chemicalFormula',
    value: 'C16H12O5'
  },
  C18H32O3: {
    type: 'chemicalFormula',
    value: 'C18H32O3'
  },
  C19H23NO4: {
    type: 'chemicalFormula',
    value: 'C19H23NO4'
  },
  'C20 H26 O4': {
    type: 'chemicalFormula',
    value: 'C20 H26 O4'
  },
  C20H23NO4: {
    type: 'chemicalFormula',
    value: 'C20H23NO4'
  },
  'C4 H9 N O2': {
    type: 'chemicalFormula',
    value: 'C4 H9 N O2'
  },
  C4H6O3: {
    type: 'chemicalFormula',
    value: 'C4H6O3'
  },
  C4H9NO3: {
    type: 'chemicalFormula',
    value: 'C4H9NO3'
  },
  C4NO2H7: {
    type: 'chemicalFormula',
    value: 'C4NO2H7'
  },
  C5H10N2O2: {
    type: 'chemicalFormula',
    value: 'C5H10N2O2'
  },
  C6H11NO4: {
    type: 'chemicalFormula',
    value: 'C6H11NO4'
  },
  C7H13N: {
    type: 'chemicalFormula',
    value: 'C7H13N'
  },
  C8H15NO2: {
    type: 'chemicalFormula',
    value: 'C8H15NO2'
  },
  C8H7NO4: {
    type: 'chemicalFormula',
    value: 'C8H7NO4'
  },
  C8H9NO3: {
    type: 'chemicalFormula',
    value: 'C8H9NO3'
  },
  'C9 H10 O3': {
    type: 'chemicalFormula',
    value: 'C9 H10 O3'
  },
  'C9 H9 N3 O2 S2': {
    type: 'chemicalFormula',
    value: 'C9 H9 N3 O2 S2'
  },
  C9H20S: {
    type: 'chemicalFormula',
    value: 'C9H20S'
  },
  C9H8O4: {
    type: 'chemicalFormula',
    value: 'C9H8O4'
  },
  'Ca Fe O6 Si2': {
    type: 'chemicalFormula',
    value: 'Ca Fe O6 Si2'
  },
  CaSnS3: {
    type: 'chemicalFormula',
    value: 'CaSnS3'
  },
  'Cd O': {
    type: 'chemicalFormula',
    value: 'Cd O'
  },
  Co1O1: {
    type: 'chemicalFormula',
    value: 'Co1O1'
  },
  Co6O8: {
    type: 'chemicalFormula',
    value: 'Co6O8'
  },
  'Fe2 O3': {
    type: 'chemicalFormula',
    value: 'Fe2 O3'
  },
  Fe4Y2: {
    type: 'chemicalFormula',
    value: 'Fe4Y2'
  },
  LaFeO3: {
    type: 'chemicalFormula',
    value: 'LaFeO3'
  },
  Li2MnF4: {
    type: 'chemicalFormula',
    value: 'Li2MnF4'
  },
  Mg2Sn: {
    type: 'chemicalFormula',
    value: 'Mg2Sn'
  },
  Mn12O7F17: {
    type: 'chemicalFormula',
    value: 'Mn12O7F17'
  },
  N2C5OFH5: {
    type: 'chemicalFormula',
    value: 'N2C5OFH5'
  },
  N4C4H6: {
    type: 'chemicalFormula',
    value: 'N4C4H6'
  },
  NC4O3H7: {
    type: 'chemicalFormula',
    value: 'NC4O3H7'
  },
  NH7C5O3: {
    type: 'chemicalFormula',
    value: 'NH7C5O3'
  },
  NaCl: {
    type: 'chemicalFormula',
    value: 'NaCl'
  },
  NbPd3: {
    type: 'chemicalFormula',
    value: 'NbPd3'
  },
  'O2 Zr': {
    type: 'chemicalFormula',
    value: 'O2 Zr'
  },
  O2Zr1: {
    type: 'chemicalFormula',
    value: 'O2Zr1'
  },
  'SiC.xTiC': {
    type: 'chemicalFormula',
    value: 'SiC.xTiC'
  },
  Sm: {
    type: 'chemicalFormula',
    value: 'Sm'
  },
  Sn1Te1: {
    type: 'chemicalFormula',
    value: 'Sn1Te1'
  },
  Ta2O5: {
    type: 'chemicalFormula',
    value: 'Ta2O5'
  },
  TaPd3: {
    type: 'chemicalFormula',
    value: 'TaPd3'
  },
  VPt3: {
    type: 'chemicalFormula',
    value: 'VPt3'
  },
  'YBa2C3O6.9': {
    type: 'chemicalFormula',
    value: 'YBa2C3O6.9'
  },
  Zn4Sb3: {
    type: 'chemicalFormula',
    value: 'Zn4Sb3'
  },
  ZrN: {
    type: 'chemicalFormula',
    value: 'ZrN'
  },
  Ag4Sb4Te8: {
    type: 'chemicalFormula',
    value: 'Ag4Sb4Te8'
  },
  AgBr: {
    type: 'chemicalFormula',
    value: 'AgBr'
  },
  Ba1: {
    type: 'chemicalFormula',
    value: 'Ba1'
  },
  BaF2: {
    type: 'chemicalFormula',
    value: 'BaF2'
  },
  'C D K O3': {
    type: 'chemicalFormula',
    value: 'C D K O3'
  },
  'C10 H14 O3': {
    type: 'chemicalFormula',
    value: 'C10 H14 O3'
  },
  C10H11NO2: {
    type: 'chemicalFormula',
    value: 'C10H11NO2'
  },
  C10H12O: {
    type: 'chemicalFormula',
    value: 'C10H12O'
  },
  C10H14O4: {
    type: 'chemicalFormula',
    value: 'C10H14O4'
  },
  C10H15NO2: {
    type: 'chemicalFormula',
    value: 'C10H15NO2'
  },
  'C11 H12 N2 O2': {
    type: 'chemicalFormula',
    value: 'C11 H12 N2 O2'
  },
  'C13 H13 N O2': {
    type: 'chemicalFormula',
    value: 'C13 H13 N O2'
  },
  'C15 H12 O3': {
    type: 'chemicalFormula',
    value: 'C15 H12 O3'
  },
  'C15 H17 N O2': {
    type: 'chemicalFormula',
    value: 'C15 H17 N O2'
  },
  C15H26O2: {
    type: 'chemicalFormula',
    value: 'C15H26O2'
  },
  'C16 H16 N2 O3': {
    type: 'chemicalFormula',
    value: 'C16 H16 N2 O3'
  },
  C16H14O4: {
    type: 'chemicalFormula',
    value: 'C16H14O4'
  },
  'C17 H13 N O2': {
    type: 'chemicalFormula',
    value: 'C17 H13 N O2'
  },
  'C17 H16 O4': {
    type: 'chemicalFormula',
    value: 'C17 H16 O4'
  },
  'C18 H15 N O2': {
    type: 'chemicalFormula',
    value: 'C18 H15 N O2'
  },
  'C18 H19 N O4': {
    type: 'chemicalFormula',
    value: 'C18 H19 N O4'
  },
  C18H20O3: {
    type: 'chemicalFormula',
    value: 'C18H20O3'
  },
  C18H21NO3: {
    type: 'chemicalFormula',
    value: 'C18H21NO3'
  },
  C18H24O2: {
    type: 'chemicalFormula',
    value: 'C18H24O2'
  },
  C18H28O2: {
    type: 'chemicalFormula',
    value: 'C18H28O2'
  },
  'C19 H18 N2 O2': {
    type: 'chemicalFormula',
    value: 'C19 H18 N2 O2'
  },
  C19H24O2: {
    type: 'chemicalFormula',
    value: 'C19H24O2'
  },
  C19H24O3: {
    type: 'chemicalFormula',
    value: 'C19H24O3'
  },
  C19H24O4: {
    type: 'chemicalFormula',
    value: 'C19H24O4'
  },
  C2: {
    type: 'chemicalFormula',
    value: 'C2'
  },
  C20H20O6: {
    type: 'chemicalFormula',
    value: 'C20H20O6'
  },
  C20H22N2O2: {
    type: 'chemicalFormula',
    value: 'C20H22N2O2'
  },
  C20H24O3: {
    type: 'chemicalFormula',
    value: 'C20H24O3'
  },
  C20H26O6: {
    type: 'chemicalFormula',
    value: 'C20H26O6'
  },
  C21H32O4: {
    type: 'chemicalFormula',
    value: 'C21H32O4'
  },
  C22H30O5: {
    type: 'chemicalFormula',
    value: 'C22H30O5'
  },
  C22H32O2: {
    type: 'chemicalFormula',
    value: 'C22H32O2'
  },
  C24H40O5: {
    type: 'chemicalFormula',
    value: 'C24H40O5'
  },
  C28H46O: {
    type: 'chemicalFormula',
    value: 'C28H46O'
  },
  C2H8N4O2: {
    type: 'chemicalFormula',
    value: 'C2H8N4O2'
  },
  'C3 H7 N O2': {
    type: 'chemicalFormula',
    value: 'C3 H7 N O2'
  },
  C3N3OH5: {
    type: 'chemicalFormula',
    value: 'C3N3OH5'
  },
  C4H7NO2: {
    type: 'chemicalFormula',
    value: 'C4H7NO2'
  },
  'C5 H19 Cl2 N5 O3 Ru S': {
    type: 'chemicalFormula',
    value: 'C5 H19 Cl2 N5 O3 Ru S'
  },
  C5H10O4: {
    type: 'chemicalFormula',
    value: 'C5H10O4'
  },
  C5H8: {
    type: 'chemicalFormula',
    value: 'C5H8'
  },
  C5H8O3: {
    type: 'chemicalFormula',
    value: 'C5H8O3'
  },
  C5OF3H7: {
    type: 'chemicalFormula',
    value: 'C5OF3H7'
  },
  'C6 H5 N O3': {
    type: 'chemicalFormula',
    value: 'C6 H5 N O3'
  },
  C6H14OS: {
    type: 'chemicalFormula',
    value: 'C6H14OS'
  },
  C6H9NO2: {
    type: 'chemicalFormula',
    value: 'C6H9NO2'
  },
  C7H16: {
    type: 'chemicalFormula',
    value: 'C7H16'
  },
  C7H7NO2: {
    type: 'chemicalFormula',
    value: 'C7H7NO2'
  },
  C7NH15: {
    type: 'chemicalFormula',
    value: 'C7NH15'
  },
  C8H10O3: {
    type: 'chemicalFormula',
    value: 'C8H10O3'
  },
  C8H11N: {
    type: 'chemicalFormula',
    value: 'C8H11N'
  },
  C9H10O: {
    type: 'chemicalFormula',
    value: 'C9H10O'
  },
  C9H14S: {
    type: 'chemicalFormula',
    value: 'C9H14S'
  },
  C9H20OS: {
    type: 'chemicalFormula',
    value: 'C9H20OS'
  },
  CaCO3: {
    type: 'chemicalFormula',
    value: 'CaCO3'
  },
  Ce: {
    type: 'chemicalFormula',
    value: 'Ce'
  },
  CoO2: {
    type: 'chemicalFormula',
    value: 'CoO2'
  },
  Cr3C2: {
    type: 'chemicalFormula',
    value: 'Cr3C2'
  },
  CrSi2: {
    type: 'chemicalFormula',
    value: 'CrSi2'
  },
  CuI: {
    type: 'chemicalFormula',
    value: 'CuI'
  },
  Dy: {
    type: 'chemicalFormula',
    value: 'Dy'
  },
  Er: {
    type: 'chemicalFormula',
    value: 'Er'
  },
  'Fe Mn O4 Si': {
    type: 'chemicalFormula',
    value: 'Fe Mn O4 Si'
  },
  Ga2O3: {
    type: 'chemicalFormula',
    value: 'Ga2O3'
  },
  H: {
    type: 'chemicalFormula',
    value: 'H'
  },
  In1: {
    type: 'chemicalFormula',
    value: 'In1'
  },
  'Li2MnFe(BO3)2': {
    type: 'chemicalFormula',
    value: 'Li2MnFe(BO3)2'
  },
  LiF: {
    type: 'chemicalFormula',
    value: 'LiF'
  },
  Mg2Ni: {
    type: 'chemicalFormula',
    value: 'Mg2Ni'
  },
  Mg2Si1: {
    type: 'chemicalFormula',
    value: 'Mg2Si1'
  },
  MnP2O7: {
    type: 'chemicalFormula',
    value: 'MnP2O7'
  },
  MnPO4: {
    type: 'chemicalFormula',
    value: 'MnPO4'
  },
  N1U1: {
    type: 'chemicalFormula',
    value: 'N1U1'
  },
  N3Na1: {
    type: 'chemicalFormula',
    value: 'N3Na1'
  },
  NC4O3H5: {
    type: 'chemicalFormula',
    value: 'NC4O3H5'
  },
  NC7H9: {
    type: 'chemicalFormula',
    value: 'NC7H9'
  },
  'Ni2 O4 Si': {
    type: 'chemicalFormula',
    value: 'Ni2 O4 Si'
  },
  O8W2Zn2: {
    type: 'chemicalFormula',
    value: 'O8W2Zn2'
  },
  OC5NH9: {
    type: 'chemicalFormula',
    value: 'OC5NH9'
  },
  Sb2Te3: {
    type: 'chemicalFormula',
    value: 'Sb2Te3'
  },
  TeO2: {
    type: 'chemicalFormula',
    value: 'TeO2'
  },
  V1: {
    type: 'chemicalFormula',
    value: 'V1'
  },
  YAl3: {
    type: 'chemicalFormula',
    value: 'YAl3'
  },
  Al2Cu: {
    type: 'chemicalFormula',
    value: 'Al2Cu'
  },
  Al2N2: {
    type: 'chemicalFormula',
    value: 'Al2N2'
  },
  Al2O6Pr2: {
    type: 'chemicalFormula',
    value: 'Al2O6Pr2'
  },
  As2S3: {
    type: 'chemicalFormula',
    value: 'As2S3'
  },
  Au1Te2: {
    type: 'chemicalFormula',
    value: 'Au1Te2'
  },
  'Be3 Fe4 O12 S Si3': {
    type: 'chemicalFormula',
    value: 'Be3 Fe4 O12 S Si3'
  },
  'C10 H12 O4': {
    type: 'chemicalFormula',
    value: 'C10 H12 O4'
  },
  'C10 H14 O': {
    type: 'chemicalFormula',
    value: 'C10 H14 O'
  },
  C10H13NO: {
    type: 'chemicalFormula',
    value: 'C10H13NO'
  },
  'C11 H10 O3': {
    type: 'chemicalFormula',
    value: 'C11 H10 O3'
  },
  'C11 H15 N O2': {
    type: 'chemicalFormula',
    value: 'C11 H15 N O2'
  },
  C11H15N5O4: {
    type: 'chemicalFormula',
    value: 'C11H15N5O4'
  },
  C12H14O4: {
    type: 'chemicalFormula',
    value: 'C12H14O4'
  },
  C12H24N2: {
    type: 'chemicalFormula',
    value: 'C12H24N2'
  },
  C12H26N2: {
    type: 'chemicalFormula',
    value: 'C12H26N2'
  },
  'C13 H13 N O4': {
    type: 'chemicalFormula',
    value: 'C13 H13 N O4'
  },
  'C13 H9 F2 N O': {
    type: 'chemicalFormula',
    value: 'C13 H9 F2 N O'
  },
  C13H26O2: {
    type: 'chemicalFormula',
    value: 'C13H26O2'
  },
  'C14 H16 N2 O3': {
    type: 'chemicalFormula',
    value: 'C14 H16 N2 O3'
  },
  'C14 H17 N O3': {
    type: 'chemicalFormula',
    value: 'C14 H17 N O3'
  },
  C14H21NO2: {
    type: 'chemicalFormula',
    value: 'C14H21NO2'
  },
  C14H28: {
    type: 'chemicalFormula',
    value: 'C14H28'
  },
  'C15 H17 N O3': {
    type: 'chemicalFormula',
    value: 'C15 H17 N O3'
  },
  C15H14O4: {
    type: 'chemicalFormula',
    value: 'C15H14O4'
  },
  'C16 H15 N O2': {
    type: 'chemicalFormula',
    value: 'C16 H15 N O2'
  },
  C16H14O6: {
    type: 'chemicalFormula',
    value: 'C16H14O6'
  },
  'C17 H15 N O2': {
    type: 'chemicalFormula',
    value: 'C17 H15 N O2'
  },
  'C17 H15 N O4': {
    type: 'chemicalFormula',
    value: 'C17 H15 N O4'
  },
  'C18 H16 N2 O3': {
    type: 'chemicalFormula',
    value: 'C18 H16 N2 O3'
  },
  C18H24O3: {
    type: 'chemicalFormula',
    value: 'C18H24O3'
  },
  C18H30O3: {
    type: 'chemicalFormula',
    value: 'C18H30O3'
  },
  C18H34O2: {
    type: 'chemicalFormula',
    value: 'C18H34O2'
  },
  C19H24N2O: {
    type: 'chemicalFormula',
    value: 'C19H24N2O'
  },
  C19H24O6: {
    type: 'chemicalFormula',
    value: 'C19H24O6'
  },
  C1W1: {
    type: 'chemicalFormula',
    value: 'C1W1'
  },
  'C20 H16 N2 O2': {
    type: 'chemicalFormula',
    value: 'C20 H16 N2 O2'
  },
  C20H18O5: {
    type: 'chemicalFormula',
    value: 'C20H18O5'
  },
  C20H26N2O2: {
    type: 'chemicalFormula',
    value: 'C20H26N2O2'
  },
  C22H32O3: {
    type: 'chemicalFormula',
    value: 'C22H32O3'
  },
  C27H44O4: {
    type: 'chemicalFormula',
    value: 'C27H44O4'
  },
  'C36 H26 Cd N2 O4': {
    type: 'chemicalFormula',
    value: 'C36 H26 Cd N2 O4'
  },
  C3N4: {
    type: 'chemicalFormula',
    value: 'C3N4'
  },
  'C6 H13 Cl N2 O4': {
    type: 'chemicalFormula',
    value: 'C6 H13 Cl N2 O4'
  },
  C6H14O12P2: {
    type: 'chemicalFormula',
    value: 'C6H14O12P2'
  },
  'C7 H19 N5 Ni O4': {
    type: 'chemicalFormula',
    value: 'C7 H19 N5 Ni O4'
  },
  'C7 H8 N2 O2': {
    type: 'chemicalFormula',
    value: 'C7 H8 N2 O2'
  },
  C7H14O5: {
    type: 'chemicalFormula',
    value: 'C7H14O5'
  },
  C7NFH8: {
    type: 'chemicalFormula',
    value: 'C7NFH8'
  },
  'C8 Al F O4': {
    type: 'chemicalFormula',
    value: 'C8 Al F O4'
  },
  'C8 H18 N4 O6': {
    type: 'chemicalFormula',
    value: 'C8 H18 N4 O6'
  },
  C8H11NO: {
    type: 'chemicalFormula',
    value: 'C8H11NO'
  },
  C8H11NO2: {
    type: 'chemicalFormula',
    value: 'C8H11NO2'
  },
  C8H17S: {
    type: 'chemicalFormula',
    value: 'C8H17S'
  },
  C9H12O2: {
    type: 'chemicalFormula',
    value: 'C9H12O2'
  },
  C9H15: {
    type: 'chemicalFormula',
    value: 'C9H15'
  },
  Ca3AlSb3: {
    type: 'chemicalFormula',
    value: 'Ca3AlSb3'
  },
  CaCd2: {
    type: 'chemicalFormula',
    value: 'CaCd2'
  },
  'Cl Co H15 N7 O5': {
    type: 'chemicalFormula',
    value: 'Cl Co H15 N7 O5'
  },
  Co4Nd2: {
    type: 'chemicalFormula',
    value: 'Co4Nd2'
  },
  Co4Y2: {
    type: 'chemicalFormula',
    value: 'Co4Y2'
  },
  'Cr2 O3': {
    type: 'chemicalFormula',
    value: 'Cr2 O3'
  },
  'Cr2 O4 Zn': {
    type: 'chemicalFormula',
    value: 'Cr2 O4 Zn'
  },
  Cr2O3: {
    type: 'chemicalFormula',
    value: 'Cr2O3'
  },
  Fe2O6Ti2: {
    type: 'chemicalFormula',
    value: 'Fe2O6Ti2'
  },
  Fe4O7F: {
    type: 'chemicalFormula',
    value: 'Fe4O7F'
  },
  FePO4: {
    type: 'chemicalFormula',
    value: 'FePO4'
  },
  Ga2La2O6: {
    type: 'chemicalFormula',
    value: 'Ga2La2O6'
  },
  'Ge Mg O3': {
    type: 'chemicalFormula',
    value: 'Ge Mg O3'
  },
  H1: {
    type: 'chemicalFormula',
    value: 'H1'
  },
  Hf1O3Sr1: {
    type: 'chemicalFormula',
    value: 'Hf1O3Sr1'
  },
  Hg1I2: {
    type: 'chemicalFormula',
    value: 'Hg1I2'
  },
  Li2FeF4: {
    type: 'chemicalFormula',
    value: 'Li2FeF4'
  },
  N1Th1: {
    type: 'chemicalFormula',
    value: 'N1Th1'
  },
  N4C3O2H2: {
    type: 'chemicalFormula',
    value: 'N4C3O2H2'
  },
  N4C3OH6: {
    type: 'chemicalFormula',
    value: 'N4C3OH6'
  },
  O2NC5H7: {
    type: 'chemicalFormula',
    value: 'O2NC5H7'
  },
  O3C5NH11: {
    type: 'chemicalFormula',
    value: 'O3C5NH11'
  },
  OC4N4H2: {
    type: 'chemicalFormula',
    value: 'OC4N4H2'
  },
  SiRu: {
    type: 'chemicalFormula',
    value: 'SiRu'
  },
  TaC: {
    type: 'chemicalFormula',
    value: 'TaC'
  },
  'Al Li O6 Si2': {
    type: 'chemicalFormula',
    value: 'Al Li O6 Si2'
  },
  Al1As1: {
    type: 'chemicalFormula',
    value: 'Al1As1'
  },
  Al4Ce2: {
    type: 'chemicalFormula',
    value: 'Al4Ce2'
  },
  Al5Mo: {
    type: 'chemicalFormula',
    value: 'Al5Mo'
  },
  Al8Mn12O48Si12: {
    type: 'chemicalFormula',
    value: 'Al8Mn12O48Si12'
  },
  AlPt2: {
    type: 'chemicalFormula',
    value: 'AlPt2'
  },
  Au1: {
    type: 'chemicalFormula',
    value: 'Au1'
  },
  B1N1: {
    type: 'chemicalFormula',
    value: 'B1N1'
  },
  B2Mg1: {
    type: 'chemicalFormula',
    value: 'B2Mg1'
  },
  B2N2: {
    type: 'chemicalFormula',
    value: 'B2N2'
  },
  B6O: {
    type: 'chemicalFormula',
    value: 'B6O'
  },
  'C Ca0.5 Mg0.5 O3': {
    type: 'chemicalFormula',
    value: 'C Ca0.5 Mg0.5 O3'
  },
  'C1 Si1': {
    type: 'chemicalFormula',
    value: 'C1 Si1'
  },
  C10H15N: {
    type: 'chemicalFormula',
    value: 'C10H15N'
  },
  C11H12N2O2: {
    type: 'chemicalFormula',
    value: 'C11H12N2O2'
  },
  C11H14O2: {
    type: 'chemicalFormula',
    value: 'C11H14O2'
  },
  'C12 H18 O3': {
    type: 'chemicalFormula',
    value: 'C12 H18 O3'
  },
  C12H16O3: {
    type: 'chemicalFormula',
    value: 'C12H16O3'
  },
  'C14 H11 N O2': {
    type: 'chemicalFormula',
    value: 'C14 H11 N O2'
  },
  'C14 H17 N O2': {
    type: 'chemicalFormula',
    value: 'C14 H17 N O2'
  },
  C15H16O5: {
    type: 'chemicalFormula',
    value: 'C15H16O5'
  },
  C15H21NO2: {
    type: 'chemicalFormula',
    value: 'C15H21NO2'
  },
  'C16 H14 O4': {
    type: 'chemicalFormula',
    value: 'C16 H14 O4'
  },
  'C16 H15 N O': {
    type: 'chemicalFormula',
    value: 'C16 H15 N O'
  },
  'C16 H15 N O3': {
    type: 'chemicalFormula',
    value: 'C16 H15 N O3'
  },
  C16H12O6: {
    type: 'chemicalFormula',
    value: 'C16H12O6'
  },
  C16H23NO: {
    type: 'chemicalFormula',
    value: 'C16H23NO'
  },
  'C17 H17 N O2': {
    type: 'chemicalFormula',
    value: 'C17 H17 N O2'
  },
  'C17 H21 N O2': {
    type: 'chemicalFormula',
    value: 'C17 H21 N O2'
  },
  C17H19NO4: {
    type: 'chemicalFormula',
    value: 'C17H19NO4'
  },
  'C18 H16 O3': {
    type: 'chemicalFormula',
    value: 'C18 H16 O3'
  },
  'C18 H21 N O4': {
    type: 'chemicalFormula',
    value: 'C18 H21 N O4'
  },
  'C19 H21 N O3': {
    type: 'chemicalFormula',
    value: 'C19 H21 N O3'
  },
  C19H23NO3: {
    type: 'chemicalFormula',
    value: 'C19H23NO3'
  },
  C19H30O2: {
    type: 'chemicalFormula',
    value: 'C19H30O2'
  },
  C1U1: {
    type: 'chemicalFormula',
    value: 'C1U1'
  },
  'C2 H5 N O2': {
    type: 'chemicalFormula',
    value: 'C2 H5 N O2'
  },
  'C20 H18 N2 O4': {
    type: 'chemicalFormula',
    value: 'C20 H18 N2 O4'
  },
  C20H34O3: {
    type: 'chemicalFormula',
    value: 'C20H34O3'
  },
  C21H26O3: {
    type: 'chemicalFormula',
    value: 'C21H26O3'
  },
  'C22 H20 N2 O2': {
    type: 'chemicalFormula',
    value: 'C22 H20 N2 O2'
  },
  'C22 H22 O6': {
    type: 'chemicalFormula',
    value: 'C22 H22 O6'
  },
  C22H32O5: {
    type: 'chemicalFormula',
    value: 'C22H32O5'
  },
  'C23 H23 Cu F12 N4 O6': {
    type: 'chemicalFormula',
    value: 'C23 H23 Cu F12 N4 O6'
  },
  'C26 H20 Fe N14 S2': {
    type: 'chemicalFormula',
    value: 'C26 H20 Fe N14 S2'
  },
  'C29 H23 O P S': {
    type: 'chemicalFormula',
    value: 'C29 H23 O P S'
  },
  C30H46O3: {
    type: 'chemicalFormula',
    value: 'C30H46O3'
  },
  C3H7NO2: {
    type: 'chemicalFormula',
    value: 'C3H7NO2'
  },
  C4H10O2: {
    type: 'chemicalFormula',
    value: 'C4H10O2'
  },
  C5H12N2: {
    type: 'chemicalFormula',
    value: 'C5H12N2'
  },
  C5H13P: {
    type: 'chemicalFormula',
    value: 'C5H13P'
  },
  C5H8O4: {
    type: 'chemicalFormula',
    value: 'C5H8O4'
  },
  C5NH11O2: {
    type: 'chemicalFormula',
    value: 'C5NH11O2'
  },
  C6H10O6: {
    type: 'chemicalFormula',
    value: 'C6H10O6'
  },
  C6H8O2: {
    type: 'chemicalFormula',
    value: 'C6H8O2'
  },
  C7H11NO2: {
    type: 'chemicalFormula',
    value: 'C7H11NO2'
  },
  C7H16S: {
    type: 'chemicalFormula',
    value: 'C7H16S'
  },
  C8H12N2: {
    type: 'chemicalFormula',
    value: 'C8H12N2'
  },
  C8H12O: {
    type: 'chemicalFormula',
    value: 'C8H12O'
  },
  C8H14O3: {
    type: 'chemicalFormula',
    value: 'C8H14O3'
  },
  C8H18O2: {
    type: 'chemicalFormula',
    value: 'C8H18O2'
  },
  C9H8O3: {
    type: 'chemicalFormula',
    value: 'C9H8O3'
  },
  'Ca D5 O6 P': {
    type: 'chemicalFormula',
    value: 'Ca D5 O6 P'
  },
  Ca1O3Ti1: {
    type: 'chemicalFormula',
    value: 'Ca1O3Ti1'
  },
  Ca2Fe2O12Si4: {
    type: 'chemicalFormula',
    value: 'Ca2Fe2O12Si4'
  },
  Cd2S2: {
    type: 'chemicalFormula',
    value: 'Cd2S2'
  },
  Cd2Se2: {
    type: 'chemicalFormula',
    value: 'Cd2Se2'
  },
  Co1Li1O2: {
    type: 'chemicalFormula',
    value: 'Co1Li1O2'
  },
  Eu: {
    type: 'chemicalFormula',
    value: 'Eu'
  },
  F4Mg2: {
    type: 'chemicalFormula',
    value: 'F4Mg2'
  },
  F4Mn2: {
    type: 'chemicalFormula',
    value: 'F4Mn2'
  },
  FC4N2OH3: {
    type: 'chemicalFormula',
    value: 'FC4N2OH3'
  },
  Fe2O3F: {
    type: 'chemicalFormula',
    value: 'Fe2O3F'
  },
  FeHO2: {
    type: 'chemicalFormula',
    value: 'FeHO2'
  },
  Ge2O4: {
    type: 'chemicalFormula',
    value: 'Ge2O4'
  },
  'H2 K O4 P': {
    type: 'chemicalFormula',
    value: 'H2 K O4 P'
  },
  Hf2V4: {
    type: 'chemicalFormula',
    value: 'Hf2V4'
  },
  HfAl3: {
    type: 'chemicalFormula',
    value: 'HfAl3'
  },
  HfCr2: {
    type: 'chemicalFormula',
    value: 'HfCr2'
  },
  KBr: {
    type: 'chemicalFormula',
    value: 'KBr'
  },
  KCl: {
    type: 'chemicalFormula',
    value: 'KCl'
  },
  La2O3: {
    type: 'chemicalFormula',
    value: 'La2O3'
  },
  'LiFe4(BO3)4': {
    type: 'chemicalFormula',
    value: 'LiFe4(BO3)4'
  },
  LiNbO3: {
    type: 'chemicalFormula',
    value: 'LiNbO3'
  },
  LiV2OF5: {
    type: 'chemicalFormula',
    value: 'LiV2OF5'
  },
  LiVF5: {
    type: 'chemicalFormula',
    value: 'LiVF5'
  },
  Mg3Au: {
    type: 'chemicalFormula',
    value: 'Mg3Au'
  },
  Mg3Hg: {
    type: 'chemicalFormula',
    value: 'Mg3Hg'
  },
  'Mn S': {
    type: 'chemicalFormula',
    value: 'Mn S'
  },
  Mn12O5F19: {
    type: 'chemicalFormula',
    value: 'Mn12O5F19'
  },
  Mn2OF3: {
    type: 'chemicalFormula',
    value: 'Mn2OF3'
  },
  NbRh: {
    type: 'chemicalFormula',
    value: 'NbRh'
  },
  O1Zn1: {
    type: 'chemicalFormula',
    value: 'O1Zn1'
  },
  O2C3N4H2: {
    type: 'chemicalFormula',
    value: 'O2C3N4H2'
  },
  O3NC5H5: {
    type: 'chemicalFormula',
    value: 'O3NC5H5'
  },
  'O4 Si Zr': {
    type: 'chemicalFormula',
    value: 'O4 Si Zr'
  },
  O4C4H6: {
    type: 'chemicalFormula',
    value: 'O4C4H6'
  },
  O4C4NH5: {
    type: 'chemicalFormula',
    value: 'O4C4NH5'
  },
  P4: {
    type: 'chemicalFormula',
    value: 'P4'
  },
  Pt1: {
    type: 'chemicalFormula',
    value: 'Pt1'
  },
  Ta5Si3: {
    type: 'chemicalFormula',
    value: 'Ta5Si3'
  },
  TaCo3: {
    type: 'chemicalFormula',
    value: 'TaCo3'
  },
  'Te2Mo3W(Se2S)2': {
    type: 'chemicalFormula',
    value: 'Te2Mo3W(Se2S)2'
  },
  'Te2MoW3(Se2S)2': {
    type: 'chemicalFormula',
    value: 'Te2MoW3(Se2S)2'
  },
  'Te2MoW3(SeS2)2': {
    type: 'chemicalFormula',
    value: 'Te2MoW3(SeS2)2'
  },
  'Te4Mo3W(SeS)2': {
    type: 'chemicalFormula',
    value: 'Te4Mo3W(SeS)2'
  },
  'Te4MoW3(SeS)2': {
    type: 'chemicalFormula',
    value: 'Te4MoW3(SeS)2'
  },
  Ti3Hg: {
    type: 'chemicalFormula',
    value: 'Ti3Hg'
  },
  V2OF5: {
    type: 'chemicalFormula',
    value: 'V2OF5'
  },
  V4Zr2: {
    type: 'chemicalFormula',
    value: 'V4Zr2'
  },
  VIr: {
    type: 'chemicalFormula',
    value: 'VIr'
  },
  VSi2: {
    type: 'chemicalFormula',
    value: 'VSi2'
  },
  YAl: {
    type: 'chemicalFormula',
    value: 'YAl'
  },
  'Al2 H4 O9 Si2': {
    type: 'chemicalFormula',
    value: 'Al2 H4 O9 Si2'
  },
  'Be O': {
    type: 'chemicalFormula',
    value: 'Be O'
  },
  'C10 H11 N O2': {
    type: 'chemicalFormula',
    value: 'C10 H11 N O2'
  },
  C10H9NO: {
    type: 'chemicalFormula',
    value: 'C10H9NO'
  },
  C11H12O3: {
    type: 'chemicalFormula',
    value: 'C11H12O3'
  },
  C11H13NO2: {
    type: 'chemicalFormula',
    value: 'C11H13NO2'
  },
  'C12 H16 O3': {
    type: 'chemicalFormula',
    value: 'C12 H16 O3'
  },
  C12H17NO3: {
    type: 'chemicalFormula',
    value: 'C12H17NO3'
  },
  C12H19NO2: {
    type: 'chemicalFormula',
    value: 'C12H19NO2'
  },
  'C13 H10 N2 O2': {
    type: 'chemicalFormula',
    value: 'C13 H10 N2 O2'
  },
  'C13 H15 N O3': {
    type: 'chemicalFormula',
    value: 'C13 H15 N O3'
  },
  C13H26OS: {
    type: 'chemicalFormula',
    value: 'C13H26OS'
  },
  'C14 H13 N O': {
    type: 'chemicalFormula',
    value: 'C14 H13 N O'
  },
  C14H25NO11: {
    type: 'chemicalFormula',
    value: 'C14H25NO11'
  },
  'C15 H18 N2 O2': {
    type: 'chemicalFormula',
    value: 'C15 H18 N2 O2'
  },
  'C16 H16 N2 O': {
    type: 'chemicalFormula',
    value: 'C16 H16 N2 O'
  },
  'C16 H18 N2 O2': {
    type: 'chemicalFormula',
    value: 'C16 H18 N2 O2'
  },
  'C17 H15 N O3': {
    type: 'chemicalFormula',
    value: 'C17 H15 N O3'
  },
  'C17 H19 N O3': {
    type: 'chemicalFormula',
    value: 'C17 H19 N O3'
  },
  'C17H15O7+': {
    type: 'chemicalFormula',
    value: 'C17H15O7+'
  },
  'C18 H14 N2 O2': {
    type: 'chemicalFormula',
    value: 'C18 H14 N2 O2'
  },
  C18H20O2: {
    type: 'chemicalFormula',
    value: 'C18H20O2'
  },
  'C19 H17 N O2': {
    type: 'chemicalFormula',
    value: 'C19 H17 N O2'
  },
  'C20 H22 N2 O2': {
    type: 'chemicalFormula',
    value: 'C20 H22 N2 O2'
  },
  C20H22O6: {
    type: 'chemicalFormula',
    value: 'C20H22O6'
  },
  C20H22O7: {
    type: 'chemicalFormula',
    value: 'C20H22O7'
  },
  C20H32O: {
    type: 'chemicalFormula',
    value: 'C20H32O'
  },
  C21H24N2O3: {
    type: 'chemicalFormula',
    value: 'C21H24N2O3'
  },
  C21H34O2: {
    type: 'chemicalFormula',
    value: 'C21H34O2'
  },
  'C22 H22 O4': {
    type: 'chemicalFormula',
    value: 'C22 H22 O4'
  },
  C22H30O3: {
    type: 'chemicalFormula',
    value: 'C22H30O3'
  },
  C27H46O3: {
    type: 'chemicalFormula',
    value: 'C27H46O3'
  },
  'C42 H28': {
    type: 'chemicalFormula',
    value: 'C42 H28'
  },
  C4H9NO: {
    type: 'chemicalFormula',
    value: 'C4H9NO'
  },
  C4O2N2H4: {
    type: 'chemicalFormula',
    value: 'C4O2N2H4'
  },
  C4O3N2H8: {
    type: 'chemicalFormula',
    value: 'C4O3N2H8'
  },
  C5H11N: {
    type: 'chemicalFormula',
    value: 'C5H11N'
  },
  C5H11NO3: {
    type: 'chemicalFormula',
    value: 'C5H11NO3'
  },
  C5H11P: {
    type: 'chemicalFormula',
    value: 'C5H11P'
  },
  C5N2OH4: {
    type: 'chemicalFormula',
    value: 'C5N2OH4'
  },
  C5ONH11: {
    type: 'chemicalFormula',
    value: 'C5ONH11'
  },
  C6H14S: {
    type: 'chemicalFormula',
    value: 'C6H14S'
  },
  C6N3H13: {
    type: 'chemicalFormula',
    value: 'C6N3H13'
  },
  C7H13NO4: {
    type: 'chemicalFormula',
    value: 'C7H13NO4'
  },
  C7H5NO4: {
    type: 'chemicalFormula',
    value: 'C7H5NO4'
  },
  C7H6N2O4: {
    type: 'chemicalFormula',
    value: 'C7H6N2O4'
  },
  C8H13NO2: {
    type: 'chemicalFormula',
    value: 'C8H13NO2'
  },
  C8H15NO6: {
    type: 'chemicalFormula',
    value: 'C8H15NO6'
  },
  C8H16N2O4: {
    type: 'chemicalFormula',
    value: 'C8H16N2O4'
  },
  Ca2SnS4: {
    type: 'chemicalFormula',
    value: 'Ca2SnS4'
  },
  Ca4O12Si4: {
    type: 'chemicalFormula',
    value: 'Ca4O12Si4'
  },
  CaZn2: {
    type: 'chemicalFormula',
    value: 'CaZn2'
  },
  CoSb2: {
    type: 'chemicalFormula',
    value: 'CoSb2'
  },
  Cu1Nd2O4: {
    type: 'chemicalFormula',
    value: 'Cu1Nd2O4'
  },
  Cu6Se6: {
    type: 'chemicalFormula',
    value: 'Cu6Se6'
  },
  CuCl: {
    type: 'chemicalFormula',
    value: 'CuCl'
  },
  Dy2Fe4: {
    type: 'chemicalFormula',
    value: 'Dy2Fe4'
  },
  Fe3Sn: {
    type: 'chemicalFormula',
    value: 'Fe3Sn'
  },
  Fe4Tb2: {
    type: 'chemicalFormula',
    value: 'Fe4Tb2'
  },
  FeO2: {
    type: 'chemicalFormula',
    value: 'FeO2'
  },
  FeSi2: {
    type: 'chemicalFormula',
    value: 'FeSi2'
  },
  HfC: {
    type: 'chemicalFormula',
    value: 'HfC'
  },
  'HgBa2CuO4+x': {
    type: 'chemicalFormula',
    value: 'HgBa2CuO4+x'
  },
  I2Li2O6: {
    type: 'chemicalFormula',
    value: 'I2Li2O6'
  },
  K1: {
    type: 'chemicalFormula',
    value: 'K1'
  },
  K2O: {
    type: 'chemicalFormula',
    value: 'K2O'
  },
  La4O14Zr4: {
    type: 'chemicalFormula',
    value: 'La4O14Zr4'
  },
  LiPd: {
    type: 'chemicalFormula',
    value: 'LiPd'
  },
  LiSn: {
    type: 'chemicalFormula',
    value: 'LiSn'
  },
  Mg3Ir: {
    type: 'chemicalFormula',
    value: 'Mg3Ir'
  },
  Mg3Pt: {
    type: 'chemicalFormula',
    value: 'Mg3Pt'
  },
  MgPd3: {
    type: 'chemicalFormula',
    value: 'MgPd3'
  },
  Mn2Sb2: {
    type: 'chemicalFormula',
    value: 'Mn2Sb2'
  },
  MnAu: {
    type: 'chemicalFormula',
    value: 'MnAu'
  },
  N2C5H8O2: {
    type: 'chemicalFormula',
    value: 'N2C5H8O2'
  },
  N6C3H6: {
    type: 'chemicalFormula',
    value: 'N6C3H6'
  },
  NC4O4H5: {
    type: 'chemicalFormula',
    value: 'NC4O4H5'
  },
  Nb2C: {
    type: 'chemicalFormula',
    value: 'Nb2C'
  },
  Nb6Sn2: {
    type: 'chemicalFormula',
    value: 'Nb6Sn2'
  },
  NbSi2: {
    type: 'chemicalFormula',
    value: 'NbSi2'
  },
  'O Pb': {
    type: 'chemicalFormula',
    value: 'O Pb'
  },
  O2C4NH3: {
    type: 'chemicalFormula',
    value: 'O2C4NH3'
  },
  S1U1: {
    type: 'chemicalFormula',
    value: 'S1U1'
  },
  ScSiCu: {
    type: 'chemicalFormula',
    value: 'ScSiCu'
  },
  Si2Mo: {
    type: 'chemicalFormula',
    value: 'Si2Mo'
  },
  Si2W: {
    type: 'chemicalFormula',
    value: 'Si2W'
  },
  Ta1: {
    type: 'chemicalFormula',
    value: 'Ta1'
  },
  'Te2Mo3W(SeS2)2': {
    type: 'chemicalFormula',
    value: 'Te2Mo3W(SeS2)2'
  },
  Te2MoWSe2: {
    type: 'chemicalFormula',
    value: 'Te2MoWSe2'
  },
  Te3: {
    type: 'chemicalFormula',
    value: 'Te3'
  },
  Ti2Cu3: {
    type: 'chemicalFormula',
    value: 'Ti2Cu3'
  },
  Ti3Al: {
    type: 'chemicalFormula',
    value: 'Ti3Al'
  },
  TiAl2: {
    type: 'chemicalFormula',
    value: 'TiAl2'
  },
  TiCoSi: {
    type: 'chemicalFormula',
    value: 'TiCoSi'
  },
  TiSiRu: {
    type: 'chemicalFormula',
    value: 'TiSiRu'
  },
  V3Au: {
    type: 'chemicalFormula',
    value: 'V3Au'
  },
  V5Si3: {
    type: 'chemicalFormula',
    value: 'V5Si3'
  },
  VOF3: {
    type: 'chemicalFormula',
    value: 'VOF3'
  },
  'Y(SiIr)2': {
    type: 'chemicalFormula',
    value: 'Y(SiIr)2'
  },
  YCd3: {
    type: 'chemicalFormula',
    value: 'YCd3'
  },
  'Zn(FeO2)2': {
    type: 'chemicalFormula',
    value: 'Zn(FeO2)2'
  },
  'Ag I': {
    type: 'chemicalFormula',
    value: 'Ag I'
  },
  Ar: {
    type: 'chemicalFormula',
    value: 'Ar'
  },
  As3Ga3O12: {
    type: 'chemicalFormula',
    value: 'As3Ga3O12'
  },
  'Bi2Sr2Cax-1CxO2x+4': {
    type: 'chemicalFormula',
    value: 'Bi2Sr2Cax-1CxO2x+4'
  },
  C10H14N5O7P: {
    type: 'chemicalFormula',
    value: 'C10H14N5O7P'
  },
  'C11 H13 N O3': {
    type: 'chemicalFormula',
    value: 'C11 H13 N O3'
  },
  C11H14N2O: {
    type: 'chemicalFormula',
    value: 'C11H14N2O'
  },
  'C12 H13 N O3': {
    type: 'chemicalFormula',
    value: 'C12 H13 N O3'
  },
  C12H17NO: {
    type: 'chemicalFormula',
    value: 'C12H17NO'
  },
  C13H10O3: {
    type: 'chemicalFormula',
    value: 'C13H10O3'
  },
  'C14 H15 N O': {
    type: 'chemicalFormula',
    value: 'C14 H15 N O'
  },
  'C14 H20 O2': {
    type: 'chemicalFormula',
    value: 'C14 H20 O2'
  },
  'C15 H14 O3': {
    type: 'chemicalFormula',
    value: 'C15 H14 O3'
  },
  'C15 H15 N O3': {
    type: 'chemicalFormula',
    value: 'C15 H15 N O3'
  },
  'C15 H17 N O2 S': {
    type: 'chemicalFormula',
    value: 'C15 H17 N O2 S'
  },
  C15H14O6: {
    type: 'chemicalFormula',
    value: 'C15H14O6'
  },
  C15H16N2O: {
    type: 'chemicalFormula',
    value: 'C15H16N2O'
  },
  C15H20O5: {
    type: 'chemicalFormula',
    value: 'C15H20O5'
  },
  'C16 H15 N3 O8': {
    type: 'chemicalFormula',
    value: 'C16 H15 N3 O8'
  },
  'C16 H16 O3': {
    type: 'chemicalFormula',
    value: 'C16 H16 O3'
  },
  'C16 H19 N O2': {
    type: 'chemicalFormula',
    value: 'C16 H19 N O2'
  },
  C16H14O3: {
    type: 'chemicalFormula',
    value: 'C16H14O3'
  },
  'C17 H17 N O': {
    type: 'chemicalFormula',
    value: 'C17 H17 N O'
  },
  'C17 H17 N O3': {
    type: 'chemicalFormula',
    value: 'C17 H17 N O3'
  },
  'C17 H20 N2 O2': {
    type: 'chemicalFormula',
    value: 'C17 H20 N2 O2'
  },
  'C18 H16 O2': {
    type: 'chemicalFormula',
    value: 'C18 H16 O2'
  },
  'C18 H16 O4': {
    type: 'chemicalFormula',
    value: 'C18 H16 O4'
  },
  'C18 H18 O5': {
    type: 'chemicalFormula',
    value: 'C18 H18 O5'
  },
  'C18 H20 N2 O2': {
    type: 'chemicalFormula',
    value: 'C18 H20 N2 O2'
  },
  'C18 H20 N2 O4': {
    type: 'chemicalFormula',
    value: 'C18 H20 N2 O4'
  },
  'C19 H22 N2 O2': {
    type: 'chemicalFormula',
    value: 'C19 H22 N2 O2'
  },
  C19H21NO2: {
    type: 'chemicalFormula',
    value: 'C19H21NO2'
  },
  'C2 Ca Mg O6': {
    type: 'chemicalFormula',
    value: 'C2 Ca Mg O6'
  },
  'C20 H14 N2': {
    type: 'chemicalFormula',
    value: 'C20 H14 N2'
  },
  'C20 H14 N4': {
    type: 'chemicalFormula',
    value: 'C20 H14 N4'
  },
  'C21 H22 N2 O2': {
    type: 'chemicalFormula',
    value: 'C21 H22 N2 O2'
  },
  C21H22O6: {
    type: 'chemicalFormula',
    value: 'C21H22O6'
  },
  C21H26N2O3: {
    type: 'chemicalFormula',
    value: 'C21H26N2O3'
  },
  C21H34O5: {
    type: 'chemicalFormula',
    value: 'C21H34O5'
  },
  C22H28O5: {
    type: 'chemicalFormula',
    value: 'C22H28O5'
  },
  C30H46O5: {
    type: 'chemicalFormula',
    value: 'C30H46O5'
  },
  'C33 H39 N O4': {
    type: 'chemicalFormula',
    value: 'C33 H39 N O4'
  },
  'C38 H28 N10 S2 Zn': {
    type: 'chemicalFormula',
    value: 'C38 H28 N10 S2 Zn'
  },
  C4H8N2O3: {
    type: 'chemicalFormula',
    value: 'C4H8N2O3'
  },
  C4N3OH9: {
    type: 'chemicalFormula',
    value: 'C4N3OH9'
  },
  C4O2NH5: {
    type: 'chemicalFormula',
    value: 'C4O2NH5'
  },
  'C5 H7 N O3': {
    type: 'chemicalFormula',
    value: 'C5 H7 N O3'
  },
  C5FN2OH5: {
    type: 'chemicalFormula',
    value: 'C5FN2OH5'
  },
  C5H10S: {
    type: 'chemicalFormula',
    value: 'C5H10S'
  },
  C6H6O4: {
    type: 'chemicalFormula',
    value: 'C6H6O4'
  },
  C6H8: {
    type: 'chemicalFormula',
    value: 'C6H8'
  },
  C6H8O6: {
    type: 'chemicalFormula',
    value: 'C6H8O6'
  },
  'C72 H60 Bi N18 P3': {
    type: 'chemicalFormula',
    value: 'C72 H60 Bi N18 P3'
  },
  C7H12S: {
    type: 'chemicalFormula',
    value: 'C7H12S'
  },
  C8H12O2: {
    type: 'chemicalFormula',
    value: 'C8H12O2'
  },
  C8H17OS: {
    type: 'chemicalFormula',
    value: 'C8H17OS'
  },
  C8H7NO3: {
    type: 'chemicalFormula',
    value: 'C8H7NO3'
  },
  'C9 H8 O2': {
    type: 'chemicalFormula',
    value: 'C9 H8 O2'
  },
  C9H13N: {
    type: 'chemicalFormula',
    value: 'C9H13N'
  },
  C9H9NO3: {
    type: 'chemicalFormula',
    value: 'C9H9NO3'
  },
  Ca1F2: {
    type: 'chemicalFormula',
    value: 'Ca1F2'
  },
  Ca1H2O2: {
    type: 'chemicalFormula',
    value: 'Ca1H2O2'
  },
  Ca3Co4O9: {
    type: 'chemicalFormula',
    value: 'Ca3Co4O9'
  },
  Ca4Mn4O12: {
    type: 'chemicalFormula',
    value: 'Ca4Mn4O12'
  },
  Ce1Cu2Si2: {
    type: 'chemicalFormula',
    value: 'Ce1Cu2Si2'
  },
  Ce1Pd3: {
    type: 'chemicalFormula',
    value: 'Ce1Pd3'
  },
  Co5Y1: {
    type: 'chemicalFormula',
    value: 'Co5Y1'
  },
  'Cr Na O6 Si2': {
    type: 'chemicalFormula',
    value: 'Cr Na O6 Si2'
  },
  Cr4Zr2: {
    type: 'chemicalFormula',
    value: 'Cr4Zr2'
  },
  Cu2F6K2: {
    type: 'chemicalFormula',
    value: 'Cu2F6K2'
  },
  Cu2Se: {
    type: 'chemicalFormula',
    value: 'Cu2Se'
  },
  FC6N2H3: {
    type: 'chemicalFormula',
    value: 'FC6N2H3'
  },
  'Fe H O2': {
    type: 'chemicalFormula',
    value: 'Fe H O2'
  },
  'Fe1.4 O3 Ti0.6': {
    type: 'chemicalFormula',
    value: 'Fe1.4 O3 Ti0.6'
  },
  Fe10Si6: {
    type: 'chemicalFormula',
    value: 'Fe10Si6'
  },
  Ga2N2: {
    type: 'chemicalFormula',
    value: 'Ga2N2'
  },
  H1Li1: {
    type: 'chemicalFormula',
    value: 'H1Li1'
  },
  Hf1N1: {
    type: 'chemicalFormula',
    value: 'Hf1N1'
  },
  InSb: {
    type: 'chemicalFormula',
    value: 'InSb'
  },
  KF: {
    type: 'chemicalFormula',
    value: 'KF'
  },
  KI: {
    type: 'chemicalFormula',
    value: 'KI'
  },
  La1N1: {
    type: 'chemicalFormula',
    value: 'La1N1'
  },
  LaNiO3: {
    type: 'chemicalFormula',
    value: 'LaNiO3'
  },
  'LiFe(PO3)4': {
    type: 'chemicalFormula',
    value: 'LiFe(PO3)4'
  },
  'Mg(FeO2)2': {
    type: 'chemicalFormula',
    value: 'Mg(FeO2)2'
  },
  Mn6O18Y6: {
    type: 'chemicalFormula',
    value: 'Mn6O18Y6'
  },
  N1Ta1: {
    type: 'chemicalFormula',
    value: 'N1Ta1'
  },
  N2C5H6O2: {
    type: 'chemicalFormula',
    value: 'N2C5H6O2'
  },
  N3C5FH6: {
    type: 'chemicalFormula',
    value: 'N3C5FH6'
  },
  N4O2Si4: {
    type: 'chemicalFormula',
    value: 'N4O2Si4'
  },
  NaF: {
    type: 'chemicalFormula',
    value: 'NaF'
  },
  NiO2: {
    type: 'chemicalFormula',
    value: 'NiO2'
  },
  O2C6H4: {
    type: 'chemicalFormula',
    value: 'O2C6H4'
  },
  O8Ti4: {
    type: 'chemicalFormula',
    value: 'O8Ti4'
  },
  OC4N2H6: {
    type: 'chemicalFormula',
    value: 'OC4N2H6'
  },
  Os2: {
    type: 'chemicalFormula',
    value: 'Os2'
  },
  'S Zn': {
    type: 'chemicalFormula',
    value: 'S Zn'
  },
  S1Sr1: {
    type: 'chemicalFormula',
    value: 'S1Sr1'
  },
  'Si3N4.xSiC': {
    type: 'chemicalFormula',
    value: 'Si3N4.xSiC'
  },
  SnS: {
    type: 'chemicalFormula',
    value: 'SnS'
  },
  Te2MoWS2: {
    type: 'chemicalFormula',
    value: 'Te2MoWS2'
  },
  VF5: {
    type: 'chemicalFormula',
    value: 'VF5'
  },
  Y3Al5O12: {
    type: 'chemicalFormula',
    value: 'Y3Al5O12'
  },
  ZrSiO4: {
    type: 'chemicalFormula',
    value: 'ZrSiO4'
  },
  'data item value.': {
    type: 'chemicalFormula',
    value: 'data item value.'
  },
  '\u03B2-NaYF4': {
    type: 'chemicalFormula',
    value: '\u03B2-NaYF4'
  },
  'Al2 Co O4': {
    type: 'chemicalFormula',
    value: 'Al2 Co O4'
  },
  'Al4+2xSi2-2xO10-x.yZrO2': {
    type: 'chemicalFormula',
    value: 'Al4+2xSi2-2xO10-x.yZrO2'
  },
  Al4Gd2: {
    type: 'chemicalFormula',
    value: 'Al4Gd2'
  },
  B6La1: {
    type: 'chemicalFormula',
    value: 'B6La1'
  },
  Bi2O8P2: {
    type: 'chemicalFormula',
    value: 'Bi2O8P2'
  },
  'C0.047N0.205P0S0V0Ni3.71Nb0Al0Ti0Fe71.218Hf0Mo0.05Mn6.74Co0Si0.32Cr17.48Cu0.23': {
    type: 'chemicalFormula',
    value: 'C0.047N0.205P0S0V0Ni3.71Nb0Al0Ti0Fe71.218Hf0Mo0.05Mn6.74Co0Si0.32Cr17.48Cu0.23'
  },
  'C10 H13 N O': {
    type: 'chemicalFormula',
    value: 'C10 H13 N O'
  },
  C10H14N5O5: {
    type: 'chemicalFormula',
    value: 'C10H14N5O5'
  },
  C10H8N2O2: {
    type: 'chemicalFormula',
    value: 'C10H8N2O2'
  },
  'C11 H11 N O2': {
    type: 'chemicalFormula',
    value: 'C11 H11 N O2'
  },
  'C11 H13 N O4': {
    type: 'chemicalFormula',
    value: 'C11 H13 N O4'
  },
  'C12 H10 N2 O': {
    type: 'chemicalFormula',
    value: 'C12 H10 N2 O'
  },
  'C12 H12 N2 O3': {
    type: 'chemicalFormula',
    value: 'C12 H12 N2 O3'
  },
  'C13 H13 N O3': {
    type: 'chemicalFormula',
    value: 'C13 H13 N O3'
  },
  'C13 H18 O3': {
    type: 'chemicalFormula',
    value: 'C13 H18 O3'
  },
  'C14 H12 O3': {
    type: 'chemicalFormula',
    value: 'C14 H12 O3'
  },
  'C14 H20 O4': {
    type: 'chemicalFormula',
    value: 'C14 H20 O4'
  },
  C14H12O2: {
    type: 'chemicalFormula',
    value: 'C14H12O2'
  },
  C14H19NO2: {
    type: 'chemicalFormula',
    value: 'C14H19NO2'
  },
  C14H24: {
    type: 'chemicalFormula',
    value: 'C14H24'
  },
  'C15 H15 N O4': {
    type: 'chemicalFormula',
    value: 'C15 H15 N O4'
  },
  'C15 H16 O4': {
    type: 'chemicalFormula',
    value: 'C15 H16 O4'
  },
  'C15 H18 O3': {
    type: 'chemicalFormula',
    value: 'C15 H18 O3'
  },
  'C15 H19 N O3': {
    type: 'chemicalFormula',
    value: 'C15 H19 N O3'
  },
  'C15 H20 O2': {
    type: 'chemicalFormula',
    value: 'C15 H20 O2'
  },
  C15H14O5: {
    type: 'chemicalFormula',
    value: 'C15H14O5'
  },
  'C16 H12 N2 O3': {
    type: 'chemicalFormula',
    value: 'C16 H12 N2 O3'
  },
  'C16 H14 N2 O2': {
    type: 'chemicalFormula',
    value: 'C16 H14 N2 O2'
  },
  'C16 H17 N O': {
    type: 'chemicalFormula',
    value: 'C16 H17 N O'
  },
  'C16 H18 N2 O4': {
    type: 'chemicalFormula',
    value: 'C16 H18 N2 O4'
  },
  'C16 H19 N O3': {
    type: 'chemicalFormula',
    value: 'C16 H19 N O3'
  },
  'C17 H14 N2 O': {
    type: 'chemicalFormula',
    value: 'C17 H14 N2 O'
  },
  C17H22O2: {
    type: 'chemicalFormula',
    value: 'C17H22O2'
  },
  C17H25NO2: {
    type: 'chemicalFormula',
    value: 'C17H25NO2'
  },
  'C18 H14 N2 O4 Zn': {
    type: 'chemicalFormula',
    value: 'C18 H14 N2 O4 Zn'
  },
  'C18 H15 N O3': {
    type: 'chemicalFormula',
    value: 'C18 H15 N O3'
  },
  'C18 H17 N O2': {
    type: 'chemicalFormula',
    value: 'C18 H17 N O2'
  },
  'C18 H18 N2 O4': {
    type: 'chemicalFormula',
    value: 'C18 H18 N2 O4'
  },
  'C18 H19 N O2': {
    type: 'chemicalFormula',
    value: 'C18 H19 N O2'
  },
  'C18 H21 N O3': {
    type: 'chemicalFormula',
    value: 'C18 H21 N O3'
  },
  'C18 H24 N2 O2': {
    type: 'chemicalFormula',
    value: 'C18 H24 N2 O2'
  },
  C18H18O2: {
    type: 'chemicalFormula',
    value: 'C18H18O2'
  },
  C18H19NO4: {
    type: 'chemicalFormula',
    value: 'C18H19NO4'
  },
  'C19 H16 O2': {
    type: 'chemicalFormula',
    value: 'C19 H16 O2'
  },
  'C19 H18 O4': {
    type: 'chemicalFormula',
    value: 'C19 H18 O4'
  },
  'C19 H20 O4': {
    type: 'chemicalFormula',
    value: 'C19 H20 O4'
  },
  C19H24N2: {
    type: 'chemicalFormula',
    value: 'C19H24N2'
  },
  'C20 H15 N O2': {
    type: 'chemicalFormula',
    value: 'C20 H15 N O2'
  },
  'C20 H22 O6': {
    type: 'chemicalFormula',
    value: 'C20 H22 O6'
  },
  'C20 H23 N O3': {
    type: 'chemicalFormula',
    value: 'C20 H23 N O3'
  },
  'C20 H28 O4': {
    type: 'chemicalFormula',
    value: 'C20 H28 O4'
  },
  'C20 H30 O4': {
    type: 'chemicalFormula',
    value: 'C20 H30 O4'
  },
  C20H18O6: {
    type: 'chemicalFormula',
    value: 'C20H18O6'
  },
  C20H24O4: {
    type: 'chemicalFormula',
    value: 'C20H24O4'
  },
  C21H26O2: {
    type: 'chemicalFormula',
    value: 'C21H26O2'
  },
  C23H30O5: {
    type: 'chemicalFormula',
    value: 'C23H30O5'
  },
  C23H34O5: {
    type: 'chemicalFormula',
    value: 'C23H34O5'
  },
  'C3 Cl N': {
    type: 'chemicalFormula',
    value: 'C3 Cl N'
  },
  C30H46O4: {
    type: 'chemicalFormula',
    value: 'C30H46O4'
  },
  C3H7NO: {
    type: 'chemicalFormula',
    value: 'C3H7NO'
  },
  C3N5H7: {
    type: 'chemicalFormula',
    value: 'C3N5H7'
  },
  C4O3NH5: {
    type: 'chemicalFormula',
    value: 'C4O3NH5'
  },
  C5H10N2O3: {
    type: 'chemicalFormula',
    value: 'C5H10N2O3'
  },
  C5N2H12O2: {
    type: 'chemicalFormula',
    value: 'C5N2H12O2'
  },
  C5OF3H9: {
    type: 'chemicalFormula',
    value: 'C5OF3H9'
  },
  C5ON2FH5: {
    type: 'chemicalFormula',
    value: 'C5ON2FH5'
  },
  'C6 H11 N O8': {
    type: 'chemicalFormula',
    value: 'C6 H11 N O8'
  },
  C6H12N2O2: {
    type: 'chemicalFormula',
    value: 'C6H12N2O2'
  },
  C6H14N2O: {
    type: 'chemicalFormula',
    value: 'C6H14N2O'
  },
  C6H14N2O2: {
    type: 'chemicalFormula',
    value: 'C6H14N2O2'
  },
  'C6H16NO+': {
    type: 'chemicalFormula',
    value: 'C6H16NO+'
  },
  C6H8N2: {
    type: 'chemicalFormula',
    value: 'C6H8N2'
  },
  C6N3H3: {
    type: 'chemicalFormula',
    value: 'C6N3H3'
  },
  'C7 H6 N2 O5': {
    type: 'chemicalFormula',
    value: 'C7 H6 N2 O5'
  },
  'C72 H60 Cu4 I4 P4': {
    type: 'chemicalFormula',
    value: 'C72 H60 Cu4 I4 P4'
  },
  C7H6O4: {
    type: 'chemicalFormula',
    value: 'C7H6O4'
  },
  C7H9NO: {
    type: 'chemicalFormula',
    value: 'C7H9NO'
  },
  'C8 H4 Cu2 O11 S': {
    type: 'chemicalFormula',
    value: 'C8 H4 Cu2 O11 S'
  },
  C8H15NO3: {
    type: 'chemicalFormula',
    value: 'C8H15NO3'
  },
  'C9 H11 N O2': {
    type: 'chemicalFormula',
    value: 'C9 H11 N O2'
  },
  'Ca(FeO2)2': {
    type: 'chemicalFormula',
    value: 'Ca(FeO2)2'
  },
  Ca1O1: {
    type: 'chemicalFormula',
    value: 'Ca1O1'
  },
  Ca2Ir2O6: {
    type: 'chemicalFormula',
    value: 'Ca2Ir2O6'
  },
  Ca4O20Si4Ti4: {
    type: 'chemicalFormula',
    value: 'Ca4O20Si4Ti4'
  },
  CdO: {
    type: 'chemicalFormula',
    value: 'CdO'
  },
  Co4S8: {
    type: 'chemicalFormula',
    value: 'Co4S8'
  },
  CoPO4: {
    type: 'chemicalFormula',
    value: 'CoPO4'
  },
  CrO2: {
    type: 'chemicalFormula',
    value: 'CrO2'
  },
  'Fe O3 Ti': {
    type: 'chemicalFormula',
    value: 'Fe O3 Ti'
  },
  'Fe0.91 Si0.09': {
    type: 'chemicalFormula',
    value: 'Fe0.91 Si0.09'
  },
  Fe3O4: {
    type: 'chemicalFormula',
    value: 'Fe3O4'
  },
  Fe4O3F5: {
    type: 'chemicalFormula',
    value: 'Fe4O3F5'
  },
  Fe4O5F3: {
    type: 'chemicalFormula',
    value: 'Fe4O5F3'
  },
  Fe4OF7: {
    type: 'chemicalFormula',
    value: 'Fe4OF7'
  },
  Gd16O24: {
    type: 'chemicalFormula',
    value: 'Gd16O24'
  },
  Ge2: {
    type: 'chemicalFormula',
    value: 'Ge2'
  },
  He: {
    type: 'chemicalFormula',
    value: 'He'
  },
  HgO: {
    type: 'chemicalFormula',
    value: 'HgO'
  },
  Ho: {
    type: 'chemicalFormula',
    value: 'Ho'
  },
  KNbO3: {
    type: 'chemicalFormula',
    value: 'KNbO3'
  },
  La2Mn2O6: {
    type: 'chemicalFormula',
    value: 'La2Mn2O6'
  },
  LaNi5: {
    type: 'chemicalFormula',
    value: 'LaNi5'
  },
  Li3N1: {
    type: 'chemicalFormula',
    value: 'Li3N1'
  },
  'Li8Mn7Fe(BO3)8': {
    type: 'chemicalFormula',
    value: 'Li8Mn7Fe(BO3)8'
  },
  'Mg Mn O4 Si': {
    type: 'chemicalFormula',
    value: 'Mg Mn O4 Si'
  },
  Mg2: {
    type: 'chemicalFormula',
    value: 'Mg2'
  },
  Mg2Sn1: {
    type: 'chemicalFormula',
    value: 'Mg2Sn1'
  },
  Mg3Sb2: {
    type: 'chemicalFormula',
    value: 'Mg3Sb2'
  },
  Mg8O16Si4: {
    type: 'chemicalFormula',
    value: 'Mg8O16Si4'
  },
  'Mn O2': {
    type: 'chemicalFormula',
    value: 'Mn O2'
  },
  MoSe2: {
    type: 'chemicalFormula',
    value: 'MoSe2'
  },
  N16Si12: {
    type: 'chemicalFormula',
    value: 'N16Si12'
  },
  N2C4FO2H3: {
    type: 'chemicalFormula',
    value: 'N2C4FO2H3'
  },
  N5C3H3: {
    type: 'chemicalFormula',
    value: 'N5C3H3'
  },
  NC4O2H5: {
    type: 'chemicalFormula',
    value: 'NC4O2H5'
  },
  NC7H7: {
    type: 'chemicalFormula',
    value: 'NC7H7'
  },
  Na2O: {
    type: 'chemicalFormula',
    value: 'Na2O'
  },
  NaBr: {
    type: 'chemicalFormula',
    value: 'NaBr'
  },
  Nb1: {
    type: 'chemicalFormula',
    value: 'Nb1'
  },
  Ni1Ti1: {
    type: 'chemicalFormula',
    value: 'Ni1Ti1'
  },
  Ni2Ti2: {
    type: 'chemicalFormula',
    value: 'Ni2Ti2'
  },
  Ni4S8: {
    type: 'chemicalFormula',
    value: 'Ni4S8'
  },
  O2C4N2FH3: {
    type: 'chemicalFormula',
    value: 'O2C4N2FH3'
  },
  O2Ti1: {
    type: 'chemicalFormula',
    value: 'O2Ti1'
  },
  O6V4: {
    type: 'chemicalFormula',
    value: 'O6V4'
  },
  OC6H6: {
    type: 'chemicalFormula',
    value: 'OC6H6'
  },
  ON3C5H3: {
    type: 'chemicalFormula',
    value: 'ON3C5H3'
  },
  ONC7H11: {
    type: 'chemicalFormula',
    value: 'ONC7H11'
  },
  ONC7H7: {
    type: 'chemicalFormula',
    value: 'ONC7H7'
  },
  Pd1: {
    type: 'chemicalFormula',
    value: 'Pd1'
  },
  PrVO3: {
    type: 'chemicalFormula',
    value: 'PrVO3'
  },
  Rb4Te2: {
    type: 'chemicalFormula',
    value: 'Rb4Te2'
  },
  'S3 Sb2': {
    type: 'chemicalFormula',
    value: 'S3 Sb2'
  },
  Sc2O3: {
    type: 'chemicalFormula',
    value: 'Sc2O3'
  },
  SnSe: {
    type: 'chemicalFormula',
    value: 'SnSe'
  },
  SrF2: {
    type: 'chemicalFormula',
    value: 'SrF2'
  },
  'Ti17(NO4)6': {
    type: 'chemicalFormula',
    value: 'Ti17(NO4)6'
  },
  'V3(O2F)2': {
    type: 'chemicalFormula',
    value: 'V3(O2F)2'
  },
  V6O5F19: {
    type: 'chemicalFormula',
    value: 'V6O5F19'
  },
  VO2F: {
    type: 'chemicalFormula',
    value: 'VO2F'
  },
  Ag1Br1: {
    type: 'chemicalFormula',
    value: 'Ag1Br1'
  },
  Ag1Cl1: {
    type: 'chemicalFormula',
    value: 'Ag1Cl1'
  },
  Ag2I2: {
    type: 'chemicalFormula',
    value: 'Ag2I2'
  },
  'Al F6 Na3': {
    type: 'chemicalFormula',
    value: 'Al F6 Na3'
  },
  Al2Nb6: {
    type: 'chemicalFormula',
    value: 'Al2Nb6'
  },
  'Al4+2xSi2-2xO10-x': {
    type: 'chemicalFormula',
    value: 'Al4+2xSi2-2xO10-x'
  },
  'Ba2 Cu3 O7 Y': {
    type: 'chemicalFormula',
    value: 'Ba2 Cu3 O7 Y'
  },
  BaS: {
    type: 'chemicalFormula',
    value: 'BaS'
  },
  Bi2Se3: {
    type: 'chemicalFormula',
    value: 'Bi2Se3'
  },
  Bi8O12: {
    type: 'chemicalFormula',
    value: 'Bi8O12'
  },
  'C H6 Cl2 Fe0.5 N': {
    type: 'chemicalFormula',
    value: 'C H6 Cl2 Fe0.5 N'
  },
  'C10 H10 Cl6 Co N2': {
    type: 'chemicalFormula',
    value: 'C10 H10 Cl6 Co N2'
  },
  'C10 H12 O3': {
    type: 'chemicalFormula',
    value: 'C10 H12 O3'
  },
  'C10 H9 N O3': {
    type: 'chemicalFormula',
    value: 'C10 H9 N O3'
  },
  'C11 H14 N2 O4': {
    type: 'chemicalFormula',
    value: 'C11 H14 N2 O4'
  },
  C11H14N4O4: {
    type: 'chemicalFormula',
    value: 'C11H14N4O4'
  },
  C11H17NO2: {
    type: 'chemicalFormula',
    value: 'C11H17NO2'
  },
  'C12 H11 N O2': {
    type: 'chemicalFormula',
    value: 'C12 H11 N O2'
  },
  'C12 H12 N2': {
    type: 'chemicalFormula',
    value: 'C12 H12 N2'
  },
  'C14 H11 N O3': {
    type: 'chemicalFormula',
    value: 'C14 H11 N O3'
  },
  'C14 H14 N4 O6': {
    type: 'chemicalFormula',
    value: 'C14 H14 N4 O6'
  },
  'C14 H15 N O2': {
    type: 'chemicalFormula',
    value: 'C14 H15 N O2'
  },
  'C14 H18 O4': {
    type: 'chemicalFormula',
    value: 'C14 H18 O4'
  },
  C14H12O3: {
    type: 'chemicalFormula',
    value: 'C14H12O3'
  },
  'C15 H12 N2 O2': {
    type: 'chemicalFormula',
    value: 'C15 H12 N2 O2'
  },
  'C15 H13 N O3': {
    type: 'chemicalFormula',
    value: 'C15 H13 N O3'
  },
  C15H23NO2: {
    type: 'chemicalFormula',
    value: 'C15H23NO2'
  },
  'C16 H12 N2 O': {
    type: 'chemicalFormula',
    value: 'C16 H12 N2 O'
  },
  'C16 H12 O4': {
    type: 'chemicalFormula',
    value: 'C16 H12 O4'
  },
  'C16 H18 O4': {
    type: 'chemicalFormula',
    value: 'C16 H18 O4'
  },
  'C16 H19 N O4': {
    type: 'chemicalFormula',
    value: 'C16 H19 N O4'
  },
  C16H21NO3: {
    type: 'chemicalFormula',
    value: 'C16H21NO3'
  },
  C16H22O4: {
    type: 'chemicalFormula',
    value: 'C16H22O4'
  },
  C16H30O2: {
    type: 'chemicalFormula',
    value: 'C16H30O2'
  },
  'C17 H14 F6 S2': {
    type: 'chemicalFormula',
    value: 'C17 H14 F6 S2'
  },
  'C17 H17 N O4': {
    type: 'chemicalFormula',
    value: 'C17 H17 N O4'
  },
  'C17 H19 N O4': {
    type: 'chemicalFormula',
    value: 'C17 H19 N O4'
  },
  C17H16O5: {
    type: 'chemicalFormula',
    value: 'C17H16O5'
  },
  C17H22O5: {
    type: 'chemicalFormula',
    value: 'C17H22O5'
  },
  C18H19NO3: {
    type: 'chemicalFormula',
    value: 'C18H19NO3'
  }
};


var trie = new _trieSearch2.default([], {
  min: 1, // Minimum length of a key to
  // store and search. By default this is 1,
  // but you might improve performance by using 2 or 3
  ignoreCase: true,
  indexField: undefined, // Defaults to undefined.
  // If specified, determines which rows are unique when using get().
  splitOnRegEx: false // Default regular expression to split
  // all keys into tokens.
  // By default this is any whitespace.
  // Set to 'false' if you have whitespace in your keys!
});

trie.addFromObject(prefill);

exports.default = trie;
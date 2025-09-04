export const ANTARCTICA_COUNTRY_CODE = 'AQ'

// For map country/region names from data to country code
const FAKE_COUNTRIES = [
  { name: 'United Arab Emirates (Dubai)', code: 'AE' },

  // Euro Area region
  { name: 'Euro Area', code: 'AT' }, // Austria
  { name: 'Euro Area', code: 'BE' }, // Belgium
  { name: 'Euro Area', code: 'HR' }, // Croatia
  { name: 'Euro Area', code: 'CY' }, // Cyprus
  { name: 'Euro Area', code: 'EE' }, // Estonia
  { name: 'Euro Area', code: 'FI' }, // Finland
  { name: 'Euro Area', code: 'FR' }, // France
  { name: 'Euro Area', code: 'DE' }, // Germany
  { name: 'Euro Area', code: 'GR' }, // Greece
  { name: 'Euro Area', code: 'IE' }, // Ireland
  { name: 'Euro Area', code: 'IT' }, // Italy
  { name: 'Euro Area', code: 'LV' }, // Latvia
  { name: 'Euro Area', code: 'LT' }, // Lithuania
  { name: 'Euro Area', code: 'LU' }, // Luxembourg
  { name: 'Euro Area', code: 'MT' }, // Malta
  { name: 'Euro Area', code: 'NL' }, // Netherlands
  { name: 'Euro Area', code: 'PT' }, // Portugal
  { name: 'Euro Area', code: 'SK' }, // Slovakia
  { name: 'Euro Area', code: 'SI' }, // Slovenia
  { name: 'Euro Area', code: 'ES' }, // Spain

  // Caribbean region
  { name: 'Eastern Caribbean Economic and Currency Union (OECS/ECCU)', code: 'AG' }, // Antigua and Barbuda
  { name: 'Eastern Caribbean Economic and Currency Union (OECS/ECCU)', code: 'DM' }, // Dominica
  { name: 'Eastern Caribbean Economic and Currency Union (OECS/ECCU)', code: 'GD' }, // Grenada
  { name: 'Eastern Caribbean Economic and Currency Union (OECS/ECCU)', code: 'MS' }, // Montserrat
  { name: 'Eastern Caribbean Economic and Currency Union (OECS/ECCU)', code: 'KN' }, // St Kitts and Nevis
  { name: 'Eastern Caribbean Economic and Currency Union (OECS/ECCU)', code: 'LC' }, // Saint Lucia
  { name: 'Eastern Caribbean Economic and Currency Union (OECS/ECCU)', code: 'VC' }, // Saint Vincent and the Grenadines

  { name: 'Economic and Monetary Community of Central Africa (EMCCA)', code: 'CM' }, // Cameroon
  { name: 'Economic and Monetary Community of Central Africa (EMCCA)', code: 'TD' }, // Chad
  { name: 'Economic and Monetary Community of Central Africa (EMCCA)', code: 'CD' }, // Republic of Congo
  { name: 'Economic and Monetary Community of Central Africa (EMCCA)', code: 'GA' }, // Gabon
  { name: 'Economic and Monetary Community of Central Africa (EMCCA)', code: 'GQ' }, // Equatorial Guinea
  { name: 'Economic and Monetary Community of Central Africa (EMCCA)', code: 'CF' }, // Central African Republic

  { name: 'Western African Monetary Union (WAMU)', code: 'BJ' }, // Benin
  { name: 'Western African Monetary Union (WAMU)', code: 'BF' }, // Burkina Faso
  { name: 'Western African Monetary Union (WAMU)', code: 'CI' }, // Côte d’Ivoire
  { name: 'Western African Monetary Union (WAMU)', code: 'GW' }, // Guinea-Bissau
  { name: 'Western African Monetary Union (WAMU)', code: 'ML' }, // Mali
  { name: 'Western African Monetary Union (WAMU)', code: 'NE' }, // Niger
  { name: 'Western African Monetary Union (WAMU)', code: 'SN' }, // Senegal
  { name: 'Western African Monetary Union (WAMU)', code: 'TG' } // Togo
]

// Used for get country name
export const REAL_COUNTRIES = [
  { name: 'Afghanistan', code: 'AF' },
  { name: 'Albania', code: 'AL' },
  { name: 'Algeria', code: 'DZ' },
  { name: 'American Samoa', code: 'AS' },
  { name: 'Andorra', code: 'AD' },
  { name: 'Angola', code: 'AO' },
  { name: 'Anguilla', code: 'AI' },
  { name: 'Antarctica', code: ANTARCTICA_COUNTRY_CODE },
  { name: 'Antigua and Barbuda', code: 'AG' },
  { name: 'Argentina', code: 'AR' },
  { name: 'Armenia', code: 'AM' },
  { name: 'Aruba', code: 'AW' },
  { name: 'Australia', code: 'AU' },
  { name: 'Austria', code: 'AT' },
  { name: 'Azerbaijan', code: 'AZ' },
  { name: 'Bahamas', code: 'BS' },
  { name: 'Bahrain', code: 'BH' },
  { name: 'Bangladesh', code: 'BD' },
  { name: 'Barbados', code: 'BB' },
  { name: 'Belarus', code: 'BY' },
  { name: 'Belgium', code: 'BE' },
  { name: 'Belize', code: 'BZ' },
  { name: 'Benin', code: 'BJ' },
  { name: 'Bermuda', code: 'BM' },
  { name: 'Bhutan', code: 'BT' },
  { name: 'Bolivia (Plurinational State of)', code: 'BO' },
  { name: 'Bonaire, Sint Eustatius and Saba', code: 'BQ' },
  { name: 'Bosnia and Herzegovina', code: 'BA' },
  { name: 'Botswana', code: 'BW' },
  { name: 'Bouvet Island', code: 'BV' },
  { name: 'Brazil', code: 'BR' },
  { name: 'British Indian Ocean Territory (the)', code: 'IO' },
  { name: 'Brunei Darussalam', code: 'BN' },
  { name: 'Bulgaria', code: 'BG' },
  { name: 'Burkina Faso', code: 'BF' },
  { name: 'Burundi', code: 'BI' },
  { name: 'Cabo Verde', code: 'CV' },
  { name: 'Cambodia', code: 'KH' },
  { name: 'Cameroon', code: 'CM' },
  { name: 'Canada', code: 'CA' },
  { name: 'Cayman Islands (the)', code: 'KY' },
  { name: 'Central African Republic (the)', code: 'CF' },
  { name: 'Chad', code: 'TD' },
  { name: 'Chile', code: 'CL' },
  { name: 'China', code: 'CN' },
  { name: 'Christmas Island', code: 'CX' },
  { name: 'Cocos (Keeling) Islands (the)', code: 'CC' },
  { name: 'Colombia', code: 'CO' },
  { name: 'Comoros (the)', code: 'KM' },
  { name: 'Congo (the Democratic Republic of the)', code: 'CD' },
  { name: 'Congo (the)', code: 'CG' },
  { name: 'Cook Islands (the)', code: 'CK' },
  { name: 'Costa Rica', code: 'CR' },
  { name: 'Croatia', code: 'HR' },
  { name: 'Cuba', code: 'CU' },
  { name: 'Curacao', code: 'CW' },
  { name: 'Cyprus', code: 'CY' },
  { name: 'Czech Republic', code: 'CZ' },
  { name: "Côte d'Ivoire", code: 'CI' },
  { name: 'Denmark', code: 'DK' },
  { name: 'Djibouti', code: 'DJ' },
  { name: 'Dominica', code: 'DM' },
  { name: 'Dominican Republic (the)', code: 'DO' },
  { name: 'Ecuador', code: 'EC' },
  { name: 'Egypt', code: 'EG' },
  { name: 'El Salvador', code: 'SV' },
  { name: 'Equatorial Guinea', code: 'GQ' },
  { name: 'Eritrea', code: 'ER' },
  { name: 'Estonia', code: 'EE' },
  { name: 'Eswatini', code: 'SZ' },
  { name: 'Ethiopia', code: 'ET' },
  { name: 'Falkland Islands (the) [Malvinas]', code: 'FK' },
  { name: 'Faroe Islands (the)', code: 'FO' },
  { name: 'Fiji', code: 'FJ' },
  { name: 'Finland', code: 'FI' },
  { name: 'France', code: 'FR' },
  { name: 'French Guiana', code: 'GF' },
  { name: 'French Polynesia', code: 'PF' },
  { name: 'French Southern Territories (the)', code: 'TF' },
  { name: 'Gabon', code: 'GA' },
  { name: 'Gambia (the)', code: 'GM' },
  { name: 'Georgia', code: 'GE' },
  { name: 'Germany', code: 'DE' },
  { name: 'Ghana', code: 'GH' },
  { name: 'Gibraltar', code: 'GI' },
  { name: 'Greece', code: 'GR' },
  { name: 'Greenland', code: 'GL' },
  { name: 'Grenada', code: 'GD' },
  { name: 'Guadeloupe', code: 'GP' },
  { name: 'Guam', code: 'GU' },
  { name: 'Guatemala', code: 'GT' },
  { name: 'Guernsey', code: 'GG' },
  { name: 'Guinea', code: 'GN' },
  { name: 'Guinea-Bissau', code: 'GW' },
  { name: 'Guyana', code: 'GY' },
  { name: 'Haiti', code: 'HT' },
  { name: 'Heard Island and McDonald Islands', code: 'HM' },
  { name: 'Holy See (the)', code: 'VA' },
  { name: 'Honduras', code: 'HN' },
  { name: 'Hong Kong', code: 'HK' },
  { name: 'Hungary', code: 'HU' },
  { name: 'Iceland', code: 'IS' },
  { name: 'India', code: 'IN' },
  { name: 'Indonesia', code: 'ID' },
  { name: 'Iran', code: 'IR' },
  { name: 'Iraq', code: 'IQ' },
  { name: 'Ireland', code: 'IE' },
  { name: 'Isle of Man', code: 'IM' },
  { name: 'Israel', code: 'IL' },
  { name: 'Italy', code: 'IT' },
  { name: 'Jamaica', code: 'JM' },
  { name: 'Japan', code: 'JP' },
  { name: 'Jersey', code: 'JE' },
  { name: 'Jordan', code: 'JO' },
  { name: 'Kazakhstan', code: 'KZ' },
  { name: 'Kenya', code: 'KE' },
  { name: 'Kiribati', code: 'KI' },
  { name: 'North Korea', code: 'KP' },
  { name: 'South Korea', code: 'KR' },
  { name: 'Kuwait', code: 'KW' },
  { name: 'Kyrgyzstan', code: 'KG' },
  { name: 'Laos', code: 'LA' },
  { name: 'Latvia', code: 'LV' },
  { name: 'Lebanon', code: 'LB' },
  { name: 'Lesotho', code: 'LS' },
  { name: 'Liberia', code: 'LR' },
  { name: 'Libya', code: 'LY' },
  { name: 'Liechtenstein', code: 'LI' },
  { name: 'Lithuania', code: 'LT' },
  { name: 'Luxembourg', code: 'LU' },
  { name: 'Macau', code: 'MO' },
  { name: 'Madagascar', code: 'MG' },
  { name: 'Malawi', code: 'MW' },
  { name: 'Malaysia', code: 'MY' },
  { name: 'Maldives', code: 'MV' },
  { name: 'Mali', code: 'ML' },
  { name: 'Malta', code: 'MT' },
  { name: 'Marshall Islands', code: 'MH' },
  { name: 'Martinique', code: 'MQ' },
  { name: 'Mauritania', code: 'MR' },
  { name: 'Mauritius', code: 'MU' },
  { name: 'Mayotte', code: 'YT' },
  { name: 'Mexico', code: 'MX' },
  { name: 'Micronesia (Federated States of)', code: 'FM' },
  { name: 'Moldova (the Republic of)', code: 'MD' },
  { name: 'Monaco', code: 'MC' },
  { name: 'Mongolia', code: 'MN' },
  { name: 'Montenegro', code: 'ME' },
  { name: 'Montserrat', code: 'MS' },
  { name: 'Morocco', code: 'MA' },
  { name: 'Mozambique', code: 'MZ' },
  { name: 'Myanmar', code: 'MM' },
  { name: 'Namibia', code: 'NA' },
  { name: 'Nauru', code: 'NR' },
  { name: 'Nepal', code: 'NP' },
  { name: 'Netherlands', code: 'NL' },
  { name: 'New Caledonia', code: 'NC' },
  { name: 'New Zealand', code: 'NZ' },
  { name: 'Nicaragua', code: 'NI' },
  { name: 'Niger (the)', code: 'NE' },
  { name: 'Nigeria', code: 'NG' },
  { name: 'Niue', code: 'NU' },
  { name: 'Norfolk Island', code: 'NF' },
  { name: 'Northern Mariana Islands (the)', code: 'MP' },
  { name: 'Norway', code: 'NO' },
  { name: 'Oman', code: 'OM' },
  { name: 'Pakistan', code: 'PK' },
  { name: 'Palau', code: 'PW' },
  { name: 'Palestine', code: 'PS' },
  { name: 'Panama', code: 'PA' },
  { name: 'Papua New Guinea', code: 'PG' },
  { name: 'Paraguay', code: 'PY' },
  { name: 'Peru', code: 'PE' },
  { name: 'Philippines', code: 'PH' },
  { name: 'Pitcairn', code: 'PN' },
  { name: 'Poland', code: 'PL' },
  { name: 'Portugal', code: 'PT' },
  { name: 'Puerto Rico', code: 'PR' },
  { name: 'Qatar', code: 'QA' },
  { name: 'Republic of North Macedonia', code: 'MK' },
  { name: 'Romania', code: 'RO' },
  { name: 'Russian Federation', code: 'RU' },
  { name: 'Rwanda', code: 'RW' },
  { name: 'Réunion', code: 'RE' },
  { name: 'Saint Barthélemy', code: 'BL' },
  { name: 'Saint Helena, Ascension and Tristan da Cunha', code: 'SH' },
  { name: 'St Kitts and Nevis', code: 'KN' },
  { name: 'Saint Lucia', code: 'LC' },
  { name: 'Saint Martin (French part)', code: 'MF' },
  { name: 'Saint Pierre and Miquelon', code: 'PM' },
  { name: 'Saint Vincent and the Grenadines', code: 'VC' },
  { name: 'Samoa', code: 'WS' },
  { name: 'San Marino', code: 'SM' },
  { name: 'Sao Tome and Principe', code: 'ST' },
  { name: 'Saudi Arabia', code: 'SA' },
  { name: 'Senegal', code: 'SN' },
  { name: 'Serbia', code: 'RS' },
  { name: 'Seychelles', code: 'SC' },
  { name: 'Sierra Leone', code: 'SL' },
  { name: 'Singapore', code: 'SG' },
  { name: 'Sint Maarten (Dutch part)', code: 'SX' },
  { name: 'Slovakia', code: 'SK' },
  { name: 'Slovenia', code: 'SI' },
  { name: 'Solomon Islands', code: 'SB' },
  { name: 'Somalia', code: 'SO' },
  { name: 'South Africa', code: 'ZA' },
  { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
  { name: 'South Sudan', code: 'SS' },
  { name: 'Spain', code: 'ES' },
  { name: 'Sri Lanka', code: 'LK' },
  { name: 'Sudan (the)', code: 'SD' },
  { name: 'Suriname', code: 'SR' },
  { name: 'Svalbard and Jan Mayen', code: 'SJ' },
  { name: 'Sweden', code: 'SE' },
  { name: 'Switzerland', code: 'CH' },
  { name: 'Syrian Arab Republic', code: 'SY' },
  { name: 'Taiwan', code: 'TW' },
  { name: 'Tajikistan', code: 'TJ' },
  { name: 'Tanzania', code: 'TZ' },
  { name: 'Thailand', code: 'TH' },
  { name: 'Timor-Leste', code: 'TL' },
  { name: 'Togo', code: 'TG' },
  { name: 'Tokelau', code: 'TK' },
  { name: 'Tonga', code: 'TO' },
  { name: 'Trinidad and Tobago', code: 'TT' },
  { name: 'Tunisia', code: 'TN' },
  { name: 'Turkey', code: 'TR' },
  { name: 'Turkmenistan', code: 'TM' },
  { name: 'Turks and Caicos Islands (the)', code: 'TC' },
  { name: 'Tuvalu', code: 'TV' },
  { name: 'Uganda', code: 'UG' },
  { name: 'Ukraine', code: 'UA' },
  { name: 'United Arab Emirates', code: 'AE' },
  { name: 'United Kingdom', code: 'GB' },
  { name: 'United States Minor Outlying Islands (the)', code: 'UM' },
  { name: 'United States of America', code: 'US' },
  { name: 'Uruguay', code: 'UY' },
  { name: 'Uzbekistan', code: 'UZ' },
  { name: 'Vanuatu', code: 'VU' },
  { name: 'Venezuela', code: 'VE' },
  { name: 'Vietnam', code: 'VN' },
  { name: 'Virgin Islands (British)', code: 'VG' },
  { name: 'Virgin Islands (U.S.)', code: 'VI' },
  { name: 'Wallis and Futuna', code: 'WF' },
  { name: 'Western Sahara', code: 'EH' },
  { name: 'Yemen', code: 'YE' },
  { name: 'Zambia', code: 'ZM' },
  { name: 'Zimbabwe', code: 'ZW' },
  { name: 'Åland Islands', code: 'AX' },
  { name: 'Europe', code: 'EU' }
]

export const REAL_COUNTRY_CODE_MAP = new Map(REAL_COUNTRIES.map((country) => {
  return [country.code, country]
}))

export const COUNTRIES = [
  ...FAKE_COUNTRIES,
  ...REAL_COUNTRIES
]

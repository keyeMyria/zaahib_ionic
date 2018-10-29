import { countryLocaliztionData } from '../../app/models/shared/general';


export const getCountryLocaliztionData = function (lang: string, _country: string): countryLocaliztionData {
	let result: countryLocaliztionData;
	if (lang === "ar") {
		switch (_country) {
			case "sa": {
				result = {
					COUNTRY: "sa", COUNTRY_NAME: "السعودية", CURRENCY: "ر.س", CURRENCY_NAME: "ريال", MAP_CENTER: "24.529516680000008, 44.14512994699999",
					COUNTRY_ZOOM: 5, PROVINCE_ZOOM: 8, CITY_ZOOM: 11, DISTRICT_ZOOM: 14, GOOGLE_GEOCODE_CITY_PARAM: "locality", GOOGLE_GEOCODE_DISTRICT_PARAM: "sublocality",
					PROVINCE_TITLE: "منطقة", PROVINCES_TITLE: "المناطق", CITY_TITLE: "مدينة", DISTRICT_TITLE: "حي", SEARCH_PLACEHOLDER: "مثال: بيت الرياض، أو: شقة شمال جدة",
					SERVER_ADDRESS: "https://www.zaahib.com", SECURE_SERVER_ADDRESS: "https://www.zaahib.com", AREA_LEVELS: 3, MOBILE_NUMBER_REGEX: "/5\\d{8}/g",
					MOBILE_NUMBER_EXAMPLE: "٥٤١٢٣٤٥٦٧", GA_ACCOUNT: "UA-36382072-3"
				};
				break;
			}

			case "eg": {
				result = {
					COUNTRY: "eg", COUNTRY_NAME: "مصر", CURRENCY: "جنية", CURRENCY_NAME: "جنية", MAP_CENTER: "26.74561038161637, 32.4755859375",
					COUNTRY_ZOOM: 6, PROVINCE_ZOOM: 10, CITY_ZOOM: 13, DISTRICT_ZOOM: 16, GOOGLE_GEOCODE_CITY_PARAM: "administrative_area_level_2",
					GOOGLE_GEOCODE_DISTRICT_PARAM: "administrative_area_level_3", PROVINCE_TITLE: "محافظة", PROVINCES_TITLE: "المحافظات", CITY_TITLE: "مركز/قسم", DISTRICT_TITLE: "مدينة/قرية", SEARCH_PLACEHOLDER: "مثال: شقة القاهرة، او: شقة للإيجار في الجيزة",
					SERVER_ADDRESS: "https://eg.zaahib.com", SECURE_SERVER_ADDRESS: "https://eg.zaahib.com", AREA_LEVELS: 3, MOBILE_NUMBER_EXAMPLE: "١٠١٢٣٤٥٦٧٨", MOBILE_NUMBER_REGEX: "/(1[0-2]{1})\\-{0,1}(\\d{8})/g",
					GA_ACCOUNT: "UA-36382072-3"
				}
				break;
			}

			case "ae": {
				result = {
					COUNTRY: "ae", COUNTRY_NAME: "الإمارات العربية", CURRENCY: "درهم", CURRENCY_NAME: "درهم", MAP_CENTER: "24.266997288418167, 54.1680908203125", COUNTRY_ZOOM: 7, PROVINCE_ZOOM: 10, CITY_ZOOM: 13, DISTRICT_ZOOM: 16, GOOGLE_GEOCODE_CITY_PARAM: "locality", GOOGLE_GEOCODE_DISTRICT_PARAM: "sublocality", PROVINCE_TITLE: "أمارة", PROVINCES_TITLE: "أمارات", CITY_TITLE: "مدينة", DISTRICT_TITLE: "حي", SEARCH_PLACEHOLDER: "مثال: فيلا أبو ظبي، أو: شقة شمال الشارقة للإيجار", SERVER_ADDRESS: "https://ae.zaahib.com", SECURE_SERVER_ADDRESS: "https://ae.zaahib.com", AREA_LEVELS: 3, MOBILE_NUMBER_EXAMPLE: "٥٠١٢٣٤٥٦٧", MOBILE_NUMBER_REGEX: "/5\\d{8}/g", GA_ACCOUNT: "UA-36382072-3"
				}
				break;
			}

			case "bh": {
				result = {
					COUNTRY: "bh", COUNTRY_NAME: "البحرين", CURRENCY: "دينار", CURRENCY_NAME: "دينار", MAP_CENTER: "26.06283587374773, 50.59547784739062", COUNTRY_ZOOM: 10, PROVINCE_ZOOM: 13, CITY_ZOOM: 15, DISTRICT_ZOOM: 18, GOOGLE_GEOCODE_CITY_PARAM: "sublocality", GOOGLE_GEOCODE_DISTRICT_PARAM: "sublocality", PROVINCE_TITLE: "منطقة", PROVINCES_TITLE: "المناطق", CITY_TITLE: "مدينة", DISTRICT_TITLE: "حي", SEARCH_PLACEHOLDER: "مثال: فيلا المنامة، أو: شقة للإيجار المنامة", SERVER_ADDRESS: "https://bh.zaahib.com", SECURE_SERVER_ADDRESS: "https://bh.zaahib.com", AREA_LEVELS: 2, MOBILE_NUMBER_EXAMPLE: "٣١٢٣٤٥٦٧", MOBILE_NUMBER_REGEX: "/[36]{1}\\d{1}-?\\d{6}/g", GA_ACCOUNT: "UA-36382072-3"
				}
				break;
			}

			case "kw": {
				result = {
					COUNTRY: "kw", COUNTRY_NAME: "الكويت", CURRENCY: "دينار", CURRENCY_NAME: "دينار", MAP_CENTER: "29.38924273716569, 47.990344790749994", COUNTRY_ZOOM: 9, PROVINCE_ZOOM: 12, CITY_ZOOM: 14, DISTRICT_ZOOM: 17, GOOGLE_GEOCODE_CITY_PARAM: "sublocality", GOOGLE_GEOCODE_DISTRICT_PARAM: "sublocality", PROVINCE_TITLE: "منطقة", PROVINCES_TITLE: "المناطق", CITY_TITLE: "مدينة", DISTRICT_TITLE: "حي", SEARCH_PLACEHOLDER: "مثال: شقق للبيع العاصمه الكويت، او: استوديو للايجار في العاصمة", SERVER_ADDRESS: "https://kw.zaahib.com", SECURE_SERVER_ADDRESS: "https://kw.zaahib.com", AREA_LEVELS: 2, MOBILE_NUMBER_EXAMPLE: "٥٤١٢٣٤٥٦", MOBILE_NUMBER_REGEX: "/[569]{1}\\d{1}-?\\d{6}/g", GA_ACCOUNT: "UA-36382072-3"
				}
				break;
			}
			case "om": {
				result = {
					COUNTRY: "om", COUNTRY_NAME: "عمان", CURRENCY: "ر.ع", CURRENCY_NAME: "ريال", MAP_CENTER: "21.925091995583358, 57.130969790749994", COUNTRY_ZOOM: 6, PROVINCE_ZOOM: 9, CITY_ZOOM: 12, DISTRICT_ZOOM: 16, GOOGLE_GEOCODE_CITY_PARAM: "locality", GOOGLE_GEOCODE_DISTRICT_PARAM: "sublocality", PROVINCE_TITLE: "منطقة", PROVINCES_TITLE: "المناطق", CITY_TITLE: "مدينة", DISTRICT_TITLE: "حي", SEARCH_PLACEHOLDER: "مثال: بيت مسقط، أو: شقة للايجار مسقط", SERVER_ADDRESS: "https://om.zaahib.com", SECURE_SERVER_ADDRESS: "https://om.zaahib.com", AREA_LEVELS: 3, MOBILE_NUMBER_EXAMPLE: "٩١٢٣٤٥٦٧", MOBILE_NUMBER_REGEX: "/9[1-9]{1}-?\\d{6}/g", GA_ACCOUNT: "UA-36382072-3"
				}
				break;
			}

			case "qa": {
				result = {
					COUNTRY: "qa", COUNTRY_NAME: "قyطر", CURRENCY: "ر.ق", CURRENCY_NAME: "ريال", MAP_CENTER: "25.351356418223368, 51.363147525124994", COUNTRY_ZOOM: 8, PROVINCE_ZOOM: 11, CITY_ZOOM: 14, DISTRICT_ZOOM: 17, GOOGLE_GEOCODE_CITY_PARAM: "sublocality", GOOGLE_GEOCODE_DISTRICT_PARAM: "sublocality", PROVINCE_TITLE: "منطقة", PROVINCES_TITLE: "المناطق", CITY_TITLE: "مدينة", DISTRICT_TITLE: "حي", SEARCH_PLACEHOLDER: "مثال: فيلا للبيع الدوحة، أو: شقة للإيجار في الدوحة", SERVER_ADDRESS: "https://qa.zaahib.com", SECURE_SERVER_ADDRESS: "https://qa.zaahib.com", AREA_LEVELS: 2, MOBILE_NUMBER_EXAMPLE: "٣١٢٣٤٥٦٧", MOBILE_NUMBER_REGEX: "/[3-7]{1}\\d{1}-?\\d{6}/g", GA_ACCOUNT: "UA-36382072-3"
				}
				break;
			}

			case "ye": {
				result = {
					COUNTRY: "ye", COUNTRY_NAME: "اليمن", CURRENCY: "ر.ي", CURRENCY_NAME: "ريال", MAP_CENTER: "15.604396520418042, 47.814563540749994", COUNTRY_ZOOM: 6, PROVINCE_ZOOM: 9, CITY_ZOOM: 12, DISTRICT_ZOOM: 16, GOOGLE_GEOCODE_CITY_PARAM: "sublocality", GOOGLE_GEOCODE_DISTRICT_PARAM: "sublocality", PROVINCE_TITLE: "منطقة", PROVINCES_TITLE: "المناطق", CITY_TITLE: "مدينة", DISTRICT_TITLE: "حي", SEARCH_PLACEHOLDER: "مثال: شقة صنعاء ، أو: شقة للإيجار صنعاء", SERVER_ADDRESS: "https://ye.zaahib.com", SECURE_SERVER_ADDRESS: "https://ye.zaahib.com", AREA_LEVELS: 2, MOBILE_NUMBER_EXAMPLE: "٧٠١٢٣٤٥٦٧", MOBILE_NUMBER_REGEX: "/7[0137]{1}-?\\d{7}/g", GA_ACCOUNT: "UA-36382072-3"
				}
				break;
			}

			case "dz": {
				result = {
					COUNTRY: "dz", COUNTRY_NAME: "الجزائر", CURRENCY: "دينار", CURRENCY_NAME: "دينار", MAP_CENTER: "28.0289837, 1.6666663", COUNTRY_ZOOM: 8, PROVINCE_ZOOM: 11, CITY_ZOOM: 14, DISTRICT_ZOOM: 17, GOOGLE_GEOCODE_CITY_PARAM: "locality", GOOGLE_GEOCODE_DISTRICT_PARAM: "sublocality", PROVINCE_TITLE: "ولاية", PROVINCES_TITLE: "ولاية", CITY_TITLE: "مدينة", DISTRICT_TITLE: "بلدية", SEARCH_PLACEHOLDER: "", SERVER_ADDRESS: "https://dz.zaahib.com", SECURE_SERVER_ADDRESS: "https://dz.zaahib.com", AREA_LEVELS: 3, MOBILE_NUMBER_REGEX: "/(55|66|69|77|79)\\d{7}/g", MOBILE_NUMBER_EXAMPLE: "٥٥١٢٣٤٥٦٧", GA_ACCOUNT: "UA-36382072-3"
				}
				break;
			}

			case "tr": {
				result = {
					COUNTRY: "tr", COUNTRY_NAME: "تركيا", CURRENCY: "ليرا", CURRENCY_NAME: "ليرا", MAP_CENTER: "39.021748, 35.558175", COUNTRY_ZOOM: 7, PROVINCE_ZOOM: 10, CITY_ZOOM: 13, DISTRICT_ZOOM: 16, GOOGLE_GEOCODE_CITY_PARAM: "administrative_area_level_2", GOOGLE_GEOCODE_DISTRICT_PARAM: "sublocality", PROVINCE_TITLE: "منطقة", PROVINCES_TITLE: "المناطق", CITY_TITLE: "حي", DISTRICT_TITLE: "بلدية", SEARCH_PLACEHOLDER: "مثال: بيت استنبول، أو: شقة أنقره", SERVER_ADDRESS: "https://tr.zaahib.com", SECURE_SERVER_ADDRESS: "https://tr.zaahib.com", AREA_LEVELS: 2, MOBILE_NUMBER_REGEX: "/5\\d{9}/g", MOBILE_NUMBER_EXAMPLE: "٥٥١٢٣٤٥٦٧٣", GA_ACCOUNT: "UA-36382072-3"
				}
				break;
			}

			default:{
				result = {
					COUNTRY: "sa", COUNTRY_NAME: "السعودية", CURRENCY: "ر.س", CURRENCY_NAME: "ريال", MAP_CENTER: "24.529516680000008, 44.14512994699999",
					COUNTRY_ZOOM: 5, PROVINCE_ZOOM: 8, CITY_ZOOM: 11, DISTRICT_ZOOM: 14, GOOGLE_GEOCODE_CITY_PARAM: "locality", GOOGLE_GEOCODE_DISTRICT_PARAM: "sublocality",
					PROVINCE_TITLE: "منطقة", PROVINCES_TITLE: "المناطق", CITY_TITLE: "مدينة", DISTRICT_TITLE: "حي", SEARCH_PLACEHOLDER: "مثال: بيت الرياض، أو: شقة شمال جدة",
					SERVER_ADDRESS: "https://www.zaahib.com", SECURE_SERVER_ADDRESS: "https://www.zaahib.com", AREA_LEVELS: 3, MOBILE_NUMBER_REGEX: "/5\\d{8}/g",
					MOBILE_NUMBER_EXAMPLE: "٥٤١٢٣٤٥٦٧", GA_ACCOUNT: "UA-36382072-3"
				}
			}
		}
	}
	else if (lang === "en") {
		switch (_country) {

			case "sa": {
				result = {
					COUNTRY: "sa", COUNTRY_NAME: "Saudi Arabia", CURRENCY: "SAR", CURRENCY_NAME: "Riyal(s)", MAP_CENTER: "24.529516680000008, 44.14512994699999", COUNTRY_ZOOM: 5, PROVINCE_ZOOM: 8, CITY_ZOOM: 11, DISTRICT_ZOOM: 14, GOOGLE_GEOCODE_CITY_PARAM: "locality", GOOGLE_GEOCODE_DISTRICT_PARAM: "sublocality", PROVINCE_TITLE: "Province", PROVINCES_TITLE: "Provinces", CITY_TITLE: "City", DISTRICT_TITLE: "District", SEARCH_PLACEHOLDER: "Example: Riyadh House, or: North Jeddah Apartment", SERVER_ADDRESS: "https://www.zaahib.com", SECURE_SERVER_ADDRESS: "https://www.zaahib.com", AREA_LEVELS: 3, MOBILE_NUMBER_EXAMPLE: "531234567", MOBILE_NUMBER_REGEX: "/5\\d{8}/g", GA_ACCOUNT: "UA-36382072-3"
				}
				break;
			}

			case "eg": {
				result = {
					COUNTRY: "eg", COUNTRY_NAME: "Egypt", CURRENCY: "LE", CURRENCY_NAME: "Pound(s)", MAP_CENTER: "26.74561038161637, 32.4755859375", COUNTRY_ZOOM: 6, PROVINCE_ZOOM: 10, CITY_ZOOM: 13, DISTRICT_ZOOM: 16, GOOGLE_GEOCODE_CITY_PARAM: "administrative_area_level_2", GOOGLE_GEOCODE_DISTRICT_PARAM: "administrative_area_level_3", PROVINCE_TITLE: "Governorate", PROVINCES_TITLE: "Governorates", CITY_TITLE: "District", DISTRICT_TITLE: "City/Town", SEARCH_PLACEHOLDER: "Example: Cairo Apartment, or: Apartment For Rent In Giza", SERVER_ADDRESS: "https://eg.zaahib.com", SECURE_SERVER_ADDRESS: "https://eg.zaahib.com", AREA_LEVELS: 3, MOBILE_NUMBER_EXAMPLE: "10-12345678", MOBILE_NUMBER_REGEX: "/(1[0-2]{1})\\-{0,1}(\\d{8})/g", GA_ACCOUNT: "UA-36382072-3"
				}
				break;
			}
			case "ae": {
				result = {
					COUNTRY: "ae", COUNTRY_NAME: "United Arab Emirates", CURRENCY: "AED", CURRENCY_NAME: "Dirham(s)", MAP_CENTER: "24.266997288418167, 54.1680908203125", COUNTRY_ZOOM: 7, PROVINCE_ZOOM: 10, CITY_ZOOM: 13, DISTRICT_ZOOM: 16, GOOGLE_GEOCODE_CITY_PARAM: "locality", GOOGLE_GEOCODE_DISTRICT_PARAM: "sublocality", PROVINCE_TITLE: "Emirate", PROVINCES_TITLE: "Emirates", CITY_TITLE: "City", DISTRICT_TITLE: "District", SEARCH_PLACEHOLDER: "Example: Abu Dhabi Villa , or: Apartment for rent north Sharjah", SERVER_ADDRESS: "https://ae.zaahib.com", SECURE_SERVER_ADDRESS: "https://ae.zaahib.com", AREA_LEVELS: 3, MOBILE_NUMBER_EXAMPLE: "501234567", MOBILE_NUMBER_REGEX: "/5\\d{8}/g", GA_ACCOUNT: "UA-36382072-3"
				}
				break;
			}

			case "bh": {
				result = {
					COUNTRY: "bh", COUNTRY_NAME: "Bahrain", CURRENCY: "BHD", CURRENCY_NAME: "Dinar(s)", MAP_CENTER: "26.06283587374773, 50.59547784739062", COUNTRY_ZOOM: 10, PROVINCE_ZOOM: 13, CITY_ZOOM: 15, DISTRICT_ZOOM: 18, GOOGLE_GEOCODE_CITY_PARAM: "sublocality", GOOGLE_GEOCODE_DISTRICT_PARAM: "sublocality", PROVINCE_TITLE: "Province", PROVINCES_TITLE: "Provinces", CITY_TITLE: "City", DISTRICT_TITLE: "District", SEARCH_PLACEHOLDER: "Example: Al Manama Villa , or: Apartment for sale al Manama", SERVER_ADDRESS: "https://bh.zaahib.com", SECURE_SERVER_ADDRESS: "https://bh.zaahib.com", AREA_LEVELS: 2, MOBILE_NUMBER_EXAMPLE: "31-234567", MOBILE_NUMBER_REGEX: "/[36]{1}\\d{1}-?\\d{6}/g", GA_ACCOUNT: "UA-36382072-3"
				}
				break;
			}

			case "kw": {
				result = {
					COUNTRY: "kw", COUNTRY_NAME: "Kuwait", CURRENCY: "KWD", CURRENCY_NAME: "Dinar(s)", MAP_CENTER: "29.38924273716569, 47.990344790749994", COUNTRY_ZOOM: 9, PROVINCE_ZOOM: 12, CITY_ZOOM: 14, DISTRICT_ZOOM: 17, GOOGLE_GEOCODE_CITY_PARAM: "sublocality", GOOGLE_GEOCODE_DISTRICT_PARAM: "sublocality", PROVINCE_TITLE: "Province", PROVINCES_TITLE: "Provinces", CITY_TITLE: "City", DISTRICT_TITLE: "District", SEARCH_PLACEHOLDER: "Example: Villa Al Asimah , or: Apartment for sale Al Asimah", SERVER_ADDRESS: "https://kw.zaahib.com", SECURE_SERVER_ADDRESS: "https://kw.zaahib.com", AREA_LEVELS: 2, MOBILE_NUMBER_EXAMPLE: "51-234567", MOBILE_NUMBER_REGEX: "/[569]{1}\\d{1}-?\\d{6}/g", GA_ACCOUNT: "UA-36382072-3"
				}
				break;
			}

			case "om": {
				result = {
					COUNTRY: "om", COUNTRY_NAME: "Oman", CURRENCY: "OMR", CURRENCY_NAME: "Rial(s)", MAP_CENTER: "21.925091995583358, 57.130969790749994", COUNTRY_ZOOM: 6, PROVINCE_ZOOM: 9, CITY_ZOOM: 12, DISTRICT_ZOOM: 16, GOOGLE_GEOCODE_CITY_PARAM: "locality", GOOGLE_GEOCODE_DISTRICT_PARAM: "sublocality", PROVINCE_TITLE: "Province", PROVINCES_TITLE: "Provinces", CITY_TITLE: "City", DISTRICT_TITLE: "District", SEARCH_PLACEHOLDER: "Example: Muscat House, or: Apartment for rent Muscat", SERVER_ADDRESS: "https://om.zaahib.com", SECURE_SERVER_ADDRESS: "https://om.zaahib.com", AREA_LEVELS: 3, MOBILE_NUMBER_EXAMPLE: "91-234567", MOBILE_NUMBER_REGEX: "/9[1-9]{1}-?\\d{6}/g", GA_ACCOUNT: "UA-36382072-3"
				}
				break;
			}
			case "qa": {
				result = {
					COUNTRY: "qa", COUNTRY_NAME: "Qatar", CURRENCY: "QAR", CURRENCY_NAME: "Riyal(s)", MAP_CENTER: "25.351356418223368, 51.363147525124994", COUNTRY_ZOOM: 8, PROVINCE_ZOOM: 11, CITY_ZOOM: 14, DISTRICT_ZOOM: 17, GOOGLE_GEOCODE_CITY_PARAM: "sublocality", GOOGLE_GEOCODE_DISTRICT_PARAM: "sublocality", PROVINCE_TITLE: "Province", PROVINCES_TITLE: "Provinces", CITY_TITLE: "City", DISTRICT_TITLE: "District", SEARCH_PLACEHOLDER: "Example:Villa sale al Doha, or : Apartment for rent Al Doha", SERVER_ADDRESS: "https://qa.zaahib.com", SECURE_SERVER_ADDRESS: "https://qa.zaahib.com", AREA_LEVELS: 2, MOBILE_NUMBER_EXAMPLE: "31-123456", MOBILE_NUMBER_REGEX: "/[3-7]{1}\\d{1}-?\\d{6}/g", GA_ACCOUNT: "UA-36382072-3"
				}
				break;
			}

			case "ye": {
				result = {
					COUNTRY: "ye", COUNTRY_NAME: "Yemen", CURRENCY: "YER", CURRENCY_NAME: "Rial(s)", MAP_CENTER: "15.604396520418042, 47.814563540749994", COUNTRY_ZOOM: 6, PROVINCE_ZOOM: 9, CITY_ZOOM: 12, DISTRICT_ZOOM: 16, GOOGLE_GEOCODE_CITY_PARAM: "sublocality", GOOGLE_GEOCODE_DISTRICT_PARAM: "sublocality", PROVINCE_TITLE: "Province", PROVINCES_TITLE: "Provinces", CITY_TITLE: "City", DISTRICT_TITLE: "District", SEARCH_PLACEHOLDER: "Example: Sanaa Apartment , or:  Apartment for rent Sanaa", SERVER_ADDRESS: "https://ye.zaahib.com", SECURE_SERVER_ADDRESS: "https://ye.zaahib.com", AREA_LEVELS: 2, MOBILE_NUMBER_EXAMPLE: "70-1234567", MOBILE_NUMBER_REGEX: "/7[0137]{1}-?\\d{7}/g", GA_ACCOUNT: "UA-36382072-3"
				}
				break;
			}

			case "dz": {
				result = {
					COUNTRY: "dz", COUNTRY_NAME: "Algeria", CURRENCY: "DZD", CURRENCY_NAME: "Dinar(s)", MAP_CENTER: "28.0289837, 1.6666663", COUNTRY_ZOOM: 8, PROVINCE_ZOOM: 11, CITY_ZOOM: 14, DISTRICT_ZOOM: 17, GOOGLE_GEOCODE_CITY_PARAM: "locality", GOOGLE_GEOCODE_DISTRICT_PARAM: "sublocality", PROVINCE_TITLE: "Province", PROVINCES_TITLE: "Provinces", CITY_TITLE: "District", DISTRICT_TITLE: "Municipality", SEARCH_PLACEHOLDER: "", SERVER_ADDRESS: "https://dz.zaahib.com", SECURE_SERVER_ADDRESS: "https://dz.zaahib.com", AREA_LEVELS: 3, MOBILE_NUMBER_REGEX: "/(55|66|69|77|79)\\d{7}/g", MOBILE_NUMBER_EXAMPLE: "551234567", GA_ACCOUNT: "UA-36382072-3"
				}
				break;
			}

			case "tr": {
				result = {
					COUNTRY: "tr", COUNTRY_NAME: "Turkey", CURRENCY: "TRY", CURRENCY_NAME: "Lira(s)", MAP_CENTER: "39.021748, 35.558175", COUNTRY_ZOOM: 7, PROVINCE_ZOOM: 10, CITY_ZOOM: 13, DISTRICT_ZOOM: 16, GOOGLE_GEOCODE_CITY_PARAM: "administrative_area_level_2", GOOGLE_GEOCODE_DISTRICT_PARAM: "sublocality", PROVINCE_TITLE: "Province", PROVINCES_TITLE: "Provinces", CITY_TITLE: "District", DISTRICT_TITLE: "District", SEARCH_PLACEHOLDER: "Example: Istabul House, or: Ankara Apartment", SERVER_ADDRESS: "https://tr.zaahib.com", SECURE_SERVER_ADDRESS: "https://tr.zaahib.com", AREA_LEVELS: 2, MOBILE_NUMBER_EXAMPLE: "5312345673", MOBILE_NUMBER_REGEX: "/5\\d{9}/g", GA_ACCOUNT: "UA-36382072-3"
				}
				break;
			}

			default:{
				result = {
					COUNTRY: "sa", COUNTRY_NAME: "Saudi Arabia", CURRENCY: "SAR", CURRENCY_NAME: "Riyal(s)", MAP_CENTER: "24.529516680000008, 44.14512994699999", COUNTRY_ZOOM: 5, PROVINCE_ZOOM: 8, CITY_ZOOM: 11, DISTRICT_ZOOM: 14, GOOGLE_GEOCODE_CITY_PARAM: "locality", GOOGLE_GEOCODE_DISTRICT_PARAM: "sublocality", PROVINCE_TITLE: "Province", PROVINCES_TITLE: "Provinces", CITY_TITLE: "City", DISTRICT_TITLE: "District", SEARCH_PLACEHOLDER: "Example: Riyadh House, or: North Jeddah Apartment", SERVER_ADDRESS: "https://www.zaahib.com", SECURE_SERVER_ADDRESS: "https://www.zaahib.com", AREA_LEVELS: 3, MOBILE_NUMBER_EXAMPLE: "531234567", MOBILE_NUMBER_REGEX: "/5\\d{8}/g", GA_ACCOUNT: "UA-36382072-3"
				}
			}



		}
	}

	return result;
}

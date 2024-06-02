import React, { useState,useEffect } from 'react';
import CardMedia from '@mui/material/CardMedia';
import { Navbar } from './Navbar';
import {TextField,Card,CardContent,Typography,Grid,Button,Dialog,DialogContent,DialogActions,DialogContentText,DialogTitle,InputAdornment,IconButton,Box,Slider,FormControl, InputLabel, Select, MenuItem} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Pens from './Images/pens.webp';
import notebook from './Images/notebook1.jpg';
import pencils from './Images/pencils.jpeg';
import calculator from './Images/calculator.webp';
import Glue from './Images/gluestick.jpg';
import GermanBook from './Images/Germanbook.png';
import FrenchBook from './Images/frenchbook.jpg';
import EnglishBook from './Images/englishbook.png';
import SchoolBags from './Images/schoolbags.jpeg';
import Apple from './Images/Apples.png';
import Carrot from './Images/Carrot.png';
import Andalusia from './Images/AndalusiaImg.jpg';
import Misr from './Images/MisrImg.jpg';
import Elite from './Images/EliteImg.jpg';
import  Nile from './Images/NileImg.png';
import Banana from './Images/Banana.webp';
import Cucumbers from './Images/cucumbers.webp';
import muffins from './Images/Blueberry muffins.webp';
import Pie from './Images/Pie.jpeg';
import Dounts from './Images/Dounts.jpeg';
import Croissants from './Images/Croissants.png';
import Bread from './Images/Bread.jpeg';
import Earphone from './Images/sama3at2.jpg';
import Maloox from './Images/maloox.jpg';
import Asparin from './Images/aspirin.jpg';
import Pandol from './Images/panadol.jpg';
import Bloodpressure from './Images/bloodpressure.jpg';
import Thermometer from './Images/thermometer2.jpg';
import Siringe from './Images/siringe.jpg';
import Chickpeacurry from './Images/Chickpea curry with brown rice.webp';
import Bakedsalmon from './Images/Baked salmon with quinoa and roasted asparagus.png';
import Macaroni from './Images/Macaroni and cheese with broccoli canned.jpeg';
import chickenbreast from './Images/top-view-grilled-chicken-with-vegetables-isolated-on-white-background-free-photo.jpg';
import Potato from './Images/potatoes-box.webp';
import Onion from './Images/onion.webp';
import beans from './Images/beans.jpeg';
import soup from './Images/canned soup.jpg';
import Mango from './Images/mango.jpg';
import Grapes from './Images/Grapes.jpeg';
import Pepper from './Images/coloredpepper.jpg';
import Kiwi from './Images/kiwi.webp';
import NoResultsGIF from './Images/no-result.gif';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
// 5ody alsowar mn hena y sarrah 
import Tshirt from './Images/IMG1.jpg';
import Pants from'./Images/IMG10.jpg';
import Jacket from './Images/IMG6.jpg';
import Skirt from './Images/IMG5.jpg';
import Shorts from './Images/IMG3.jpg';
import tshirt2 from './Images/Img4.jpg' ;
import Pullover from './Images/IMG9.jpg';
import Gloves from './Images/IMG8.jpg';
import IceCap from './Images/IMG7.jpg';
import Barbie2 from './Images/Barbie2.jpg';
import CAR from './Images/CAR.jpg';
import Chess from './Images/chess.jpg' ;
import Football from './Images/Football.jpg';
import girlbaby from './Images/girlbaby.jpg' ;
import boybaby from './Images/boybaby.jpg';
import electriCar from './Images/electriCar.jpg';
import bowling from './Images/bowling.jpg' ;
import Soccorball from './Images/Soccorball.jpg';
import trampoline from './Images/trampoline.jpg';
import stuffedtoy from './Images/stuffedtoy.jpg';
const initialDatafood = [
    { id: 1, name: 'Apple', subcategory: 'Fruit',quantity:'40 KG',quantitydonated:'30',img:Apple,category:'Food'},
    { id: 2, name: 'Carrot', subcategory: 'Vegetable',quantity:'25 KG',quantitydonated:'17',img:Carrot,category:'Food' },
    { id: 3, name: 'Banana', subcategory: 'Fruit',quantity:'60 KG',quantitydonated:'30',img:Banana,category:'Food' },
    { id: 4, name: 'Cucumbers', subcategory: 'Vegetable',quantity:'20 KG',quantitydonated:'12',img:Cucumbers,category:'Food' },
    { id: 5, name: 'Grapes', subcategory: 'Fruit',quantity:'84 KG',quantitydonated:'50',img:Grapes,category:'Food' },
    { id: 6, name: 'Mango', subcategory: 'Fruit',quantity:'15 KG',quantitydonated:'11',img:Mango,category:'Food' },
    { id: 7, name: 'Canned soup', subcategory: 'Canned foods',quantity:'50 Cans',quantitydonated:'30',img:soup,category:'Food' },
    { id: 8, name: 'Canned beans', subcategory: 'Canned foods',quantity:'90 Cans',quantitydonated:'57',img:beans,category:'Food' },
    { id: 9, name: 'Onion', subcategory: 'Vegetable',quantity:'90 KG',quantitydonated:'80',img:Onion,category:'Food' },
    { id: 10, name: 'Potato', subcategory: 'Vegetable',quantity:'55 KG',quantitydonated:'30',img:Potato,category:'Food' },
    { id: 11, name: 'Grilled chicken breast with steamed vegetables', subcategory: 'Fresh meals',quantity:'20 meals',quantitydonated:'14',img:chickenbreast,category:'Food' },
    { id: 12, name: 'Macaroni and cheese with broccoli canned', subcategory: 'Canned foods',quantity:'5 meals',quantitydonated:'3',img:Macaroni,category:'Food' },
    { id: 13, name: 'Baked salmon with quinoa and roasted asparagus', subcategory: 'Fresh meals',quantity:'30 meals',quantitydonated:'15',img:Bakedsalmon,category:'Food' },
    { id: 14, name: 'Chickpea curry with brown rice', subcategory: 'Fresh meals',quantity:'60 meals' ,quantitydonated:'50',img:Chickpeacurry,category:'Food'},
    { id: 15, name: 'Bread', subcategory: 'Baked goods',quantity:'60 breads' ,quantitydonated:'40',img:Bread,category:'Food'},
    { id: 16, name: 'Croissants', subcategory: 'Baked goods',quantity:'55 croissants',quantitydonated:'40',img:Croissants,category:'Food' },
    { id: 17, name: 'Dounts', subcategory: 'Baked goods',quantity:'20 dounts' ,quantitydonated:'14',img:Dounts,category:'Food'},
    { id: 18, name: 'Pie', subcategory: 'Baked goods',quantity:'7 pies',quantitydonated:'5',img:Pie,category:'Food'},
    { id: 19, name: 'Blueberry muffins', subcategory: 'Baked goods',quantity:'30 muffins',quantitydonated:'19',img:muffins,category:'Food'},
    { id: 20, name: 'Colored Pepper', subcategory: 'Vegetable',quantity:'30 KG',quantitydonated:'19',img:Pepper,category:'Food'},
    { id: 21, name: 'Blueberry muffins', subcategory: 'Fruit',quantity:'60 KG',quantitydonated:'29',img:Kiwi,category:'Food'}];
    const initialDataBooks = [
        { id: 1, name: "The Boy Who Harnessed the Wind", subcategory: 'Books', Author:"William Kamkwamba and Bryan Mealer", quantity: '80 books', quantitydonated: 40, Language: 'English', Edition: 'Young Readers Edition (2015)', Summary:'Tells the inspiring true story of William Kamkwamba, a young Malawian boy who built a windmill to bring electricity to his village.',img:EnglishBook,category:'School Supplies' },
        { id: 2, name: 'Le Petit Prince', subcategory: 'Books', Author: 'Antoine de Saint-Exupéry', Language: 'French', quantity: '30 books', quantitydonated: 15, Edition: 'Various editions available', Summary: 'A beloved novel that tells the story of a young prince who travels from planet to planet, meeting various inhabitants and learning valuable life lessons along the way.',img:FrenchBook,category:'School Supplies' },
        { id: 3, name: 'Die Macht der Geographie', subcategory: 'Books', Author: 'Tim Marshall', Language: 'German', Edition: '1st Edition (2016)', quantity: '70 books', quantitydonated: 20, Summary: 'Delves into the geopolitical significance of geography, using ten maps to illustrate key global dynamics.',img:GermanBook,category:'School Supplies' },];
    const initialDataStationery = [
        { id: 1, name: 'Pens',subcategory:'Stationery', quantity: '100 Pens', quantitydonated: '50',img:Pens,category:'School Supplies' },
        { id: 2, name: 'Pencils',subcategory:'Stationery', quantity: '150 Pencils', quantitydonated: '70',img:pencils,category:'School Supplies' },
        { id: 3, name: 'Notebooks',subcategory:'Stationery', quantity: '70 Notebooks', quantitydonated: '40',img:notebook,category:'School Supplies' },
        { id: 4, name: 'Calculator',subcategory:'Stationery', quantity: '70 Calculators', quantitydonated: '50',img:calculator,category:'School Supplies' },
        { id: 5, name: 'Glue Stick',subcategory:'Stationery', quantity: '90 Glue sticks', quantitydonated: '75',img:Glue,category:'School Supplies' },
    
    ];
    const initialDataMedical=[
        {id: 1,
            title: 'Stethoscope',
            type: 'Medical Equipments',
            cuisine: 'Measuring body heartbeat',
            use:'Measuring body heartbeat',
            coverSrc:Earphone,
            category:'Medical',
            quantity: '100',
            quantitydonated: '80',
        },
        {
            id: 2,
            title: 'Syringe',
            type: 'Medical Equipments',
            cuisine: 'Giving Injections',
            use: 'Giving Injections',
            coverSrc: Siringe,
            category:'Medical',
            quantity: '100',
            quantitydonated: '80',
          },
          {
            id: 3,
            title: 'Thermometer',
            type: 'Medical Devices',
            cuisine: 'Measuring body temperature',
            use: 'Measuring body temperature',
            coverSrc: Thermometer,
            category:'Medical',
            quantity: '100',
            quantitydonated: '80',
          },
          {
            id: 4,
            title: 'Blood pressure cuff',
            type: 'Medical Devices',
            cuisine: 'Measuring body blood pressure',
            use: 'Measuring body blood pressure',
            quantity: '100',
            quantitydonated: '80',
            category:'Medical',
            coverSrc:Bloodpressure,
          },
          {
            id: 5,
            title: 'Panadol',
            type: 'Medications',
            cuisine: 'Antipyretics',
            use:'Headache and Fever',
            quantity: '100',
            quantitydonated: '80',
            category:'Medical',
            coverSrc:Pandol,
          },
          {
            id: 6,
            title: 'Aspirin',
            type: 'Medications',
            cuisine: 'Anticoagulant',
            use:'Preventing blood clots',
            category:'Medical',
            quantity: '100',
            quantitydonated: '80',
            coverSrc:Asparin,
          },
          {
            id: 7,
            title: 'Maalox',
            type: 'Medications',
            cuisine: 'Antacids',
            use:'Neutriliizing Acidity',
            category:'Medical',
           coverSrc:Maloox,
           quantity: '100',
           quantitydonated: '80',
          }, 
    ];
    export const initialDataBlood = [
        {
          id: 1,
          title: 'Andalusia Hospital',
          government: 'Cairo',
          cuisine: 'Maadi',
          area: 'Maadi',
          npatient:'Mohamed Walid',
          bloodtype:'A negative',
          category:'Blood',
          coverSrc: Andalusia,
          address:'4G/6, Sayed Anbar, Ezbet Fahmy, Maadi, Cairo Governorate, Egypt'
        },
        {
          id: 2,
          title: 'Misr International Hospital',
          government: 'Giza',
          cuisine: 'Dokki',
          area: 'Dokki',
          npatient:'Shahd Mohamed',
          bloodtype:'O positive',
          category:'Blood',
          coverSrc:Misr,
          address:'42 Abd El-Raheem Sabry, Ad Doqi A, Dokki, Giza '
        },
        {
          id: 3,
          title: 'Elite Hospital',
          government: 'Alexandria',
          cuisine: 'ElFillat District',
          area:'ElFillat District',
          npatient:'Sarrah Elgazzar',
          bloodtype:'B negative',
          category:'Blood',
          coverSrc:Elite,
          address:'Entrance of the ring road after downtown, Alexandria. '
        },
        {
          id: 4,
          title: 'Nile Hospital',
          government: 'Hurghada',
          cuisine: 'Airport Road',
          area:'Airport Road',
          npatient:'Ahmed Mohamed',
          bloodtype:'AB negative',
          category:'Blood',
          coverSrc:Nile,
          address:'Nile Hospital،AirPort Road, El-Nasr, Red Sea Governorate'
        },
        {
          id: 5,
          title: 'Misr International Hospital',
          government: 'Giza',
          cuisine: 'Dokki',
          area:'Dokki',
          npatient:'Saif Ahmed',
          bloodtype:'O negative',
          category:'Blood',
          coverSrc: Misr,
          address:'42 Abd El-Raheem Sabry, Ad Doqi A, Dokki, Giza '
        },
        {
          id: 6,
          title: 'Andalusia Hospital',
          government: 'Cairo',
          cuisine: 'Maadi',
          area: 'Maadi',
          npatient:'Ali Hani',
          bloodtype:'A positive',
          category:'Blood',
          coverSrc: Andalusia,
          address:'4G/6, Sayed Anbar, Ezbet Fahmy, Maadi, Cairo Governorate, Egypt'

        },
        {
          id: 7,
          title: 'Elite Hospital',
          government: 'Alexandria',
          cuisine: 'ElFillat District',
          area:'ElFillat District',
          npatient:'Khaled Amr',
          bloodtype:'B positive',
          category:'Blood',
          coverSrc:Elite,
          address:'Entrance of the ring road after downtown, Alexandria. '

        },
        {
          id: 8,
          title: 'Nile Hospital',
          government: 'Hurghada',
          cuisine: 'Airport Road',
          area:'Airport Road',
          npatient:'Mariam Dahy',
          bloodtype:'AB positive',
          category:'Blood',
          coverSrc:Nile,
          address:'Nile Hospital،AirPort Road, El-Nasr, Red Sea Governorate'
        },
        {
            id: 9,
            title: 'Misr International Hospital',
            government: 'Giza',
            cuisine: 'Dokki',
            area:'Dokki',
            npatient:'Manal Ahmed',
            bloodtype:'O negative',
            category:'Blood',
            coverSrc: Misr,
            address:'42 Abd El-Raheem Sabry, Ad Doqi A, Dokki, Giza '
          },
       
    ]; 
    // Data you should take for Cloth Sarah
    export const initialDataCloth = [
        {
            id: 1,
            Type: 'T-shirt',
            Gender: 'Woman',
            Season: 'Summer',
            category:'Cloth',
            Age:'Above 18',
            Material: 'cotton',
            quantity:'60 T-shirt',
            quantitydonated:'29',
            coverSrc:  Tshirt,

            
          },
          {
            id: 2,
            Type: 'SweatPants',
            Gender: 'Man',
            Season: 'Winter',
            category:'Cloth',
            Age:'12 to 18',
            Material: 'Cotton',
            quantity:'100 SweatPants',
            quantitydonated:'29',
            coverSrc:Pants,
          },
          {
            id: 3,
            Type: 'Jacket',
            Gender: 'Woman',
            Season: 'Summer',
            category:'Cloth',
            Age:'1 to 12',
            Material: 'cotton',
            quantity:'70 Jacket',
            quantitydonated:'20',
            coverSrc:Jacket,
          },
          {
            id: 4,
            Type: 'Skirt',
            Gender: 'Woman',
            Season: 'Summer',
            category:'Cloth',
            Age:'Above 18',
            Material: 'cotton',
            quantity:'150 Skirt',
            quantitydonated:'90',
            coverSrc:Skirt,
          },
          {
            id: 5,
            Type: 'shorts',
            Gender: 'Man',
            Season: 'Summer',
            category:'Cloth',
            Age:'Above 18',
            Material: 'cotton',
            quantity:'120 shorts',
            quantitydonated:'70',
            coverSrc:Shorts,
          },
          {
            id: 6,
            Type: 'T-shirt',
            Gender: 'Woman',
            Season: 'Summer',
            category:'Cloth',
            Age:'1-6',
            Material: 'cotton',
            quantity:'160 T-shirt',
            quantitydonated:'80',
            coverSrc:tshirt2,
          },
          {
            id: 7,
            Type: 'Pullover',
            Gender: 'Man',
            Season: 'Winter',
            category:'Cloth',
            Age:'1-6',
            Material: 'cotton',
            quantity:'160 Pullover',
            quantitydonated:'80',
            coverSrc:Pullover,
          },
          {
            id: 8,
            Type: 'Winter gloves',
            Gender: 'Man',
            Season: 'Winter',
            category:'Cloth',
            Age:'above 18',
            Material: 'cotton',
            quantity:'90 gloves',
            quantitydonated:'80',
            coverSrc:Gloves,
          },
          {
            id: 9,
            Type: 'Winter Hat',
            Gender: 'Man',
            Season: 'Winter',
            category:'Cloth',
            Age:'above 18',
            Material: 'cotton',
            quantity:'100 IceCap',
            quantitydonated:'80',
            coverSrc:IceCap,
          },
      
    ]
     // Data you should take for Toys Sarah
    export const initialDataToys = [
        {
            id: 1,
            Type: 'Barbie',
            Gender: 'Girl',
            category:'Toys',
            subcategory: 'dolls',
            Age:'1 to 4',
            quantity: '10 Toys',
            quantitydonated:'5',
            coverSrc:Barbie2,
            
          },
          {
            id: 2,
            Type: 'Remote Contol car',
            Gender: 'Boy',
            subcategory: 'Cars',
            Age:'4 to 8',
            quantity: '5 Toys',
            category:'Toys',
            coverSrc:CAR,
            quantitydonated:'3'
          },
          {
            id: 3,
            Type: 'Chess',
            Gender: 'Both',
            subcategory: 'Board Games',
            category:'Toys',
            Age:'8 to 12',
            quantity: '3 Toys',
            coverSrc:Chess,
            quantitydonated:'2'
          },
          {
            id: 4,
            Type: 'FootBALL',
            Gender: 'Boy',
            subcategory: 'Sports',
            category:'Toys',
            Age:'12 to 16',
            quantity: '15 Toys',
            coverSrc:Football,
            quantitydonated:'10'
          },
          {
            id: 5,
            Type: 'Baby doll',
            Gender: 'Girl',
            subcategory: 'Dolls',
            category:'Toys',
            Age:'1-4',
            quantity: '8 Toys',
            coverSrc:girlbaby,
            quantitydonated:'2'
          },
          {
            id: 6,
            Type: 'Baby doll',
            Gender: 'Boy',
            subcategory: 'Dolls',
            category:'Toys',
            Age:'1-4',
            quantity: '1 Toys',
            coverSrc:boybaby,
            quantitydonated:'0'
          },
          {
            id: 7,
            Type: 'Electric Car ',
            Gender: 'Boy',
            subcategory: 'Cars',
            category:'Toys',
            Age:'12-16',
            quantity: '9 Toys',
            coverSrc:electriCar,
            quantitydonated:'7'
          },
          {
            id: 8,
            Type: 'Bowling Game',
            Gender: 'Both',
            subcategory: 'Outdoor',
            category:'Toys',
            Age:'8-12',
            quantity: '4 Toys',
            coverSrc:bowling,
            quantitydonated:'2'
          },
          {
            id: 9,
            Type: 'Bear',
            Gender: 'Girl',
            subcategory: 'Stuffed toys',
            category:'Toys',
            Age:'12-16',
            quantity: '6 Toys',
            coverSrc:stuffedtoy,
            quantitydonated:'2'
          },
          {
            id: 10,
            Type: 'Soccor Ball',
            Gender: 'Boy',
            subcategory: 'Sports',
            category:'Toys',
            Age:'12-16',
            quantity: '10 Toys',
            coverSrc:Soccorball,
            quantitydonated:'7'
          },

          {
              id: 11,
              Type: 'Trampoline',
              Gender: 'Both',
              subcategory: 'Outdoor',
              category:'Toys',
              Age:'12-16',
              quantity: '6 Toys',
              coverSrc:trampoline,
              quantitydonated:'2'
            },
            {
              id: 12,
              Type: 'Bear',
              Gender: 'Girl',
              subcategory: 'Stuffed toys',
              category:'Toys',
              Age:'12-16',
              quantity: '20 Toys',
              coverSrc:stuffedtoy,
              quantitydonated:'17'
            },

    ]
    const MAX = 100;
    const MIN = 0;    
export const ViewAllRequests = () => {
    const [filter, setFilter] = useState('');    
    const [openBook,setopenBook]=useState(false);
    const [openmedical,setopenmedical]=useState(false);
    const [openblood,setopenblood]=useState(false);
    const [openbloodInfo,setopenbloodInfo]=useState(false);
    const [filterDataFood,setFilterDataFood]=useState(initialDatafood);
    const[openInfo,setOpenInfo]=useState(false);
    const [openFood, setOpenFood] = useState(false);
    const [openStationery, setOpenStationery] = useState(false);
    const [dialogContent, setDialogContent] = useState('');
    const [dialogTitle, setDialogTitle] = useState('');
    const [maxQuantity, setMaxQuantity] = useState(1);
    const [quantityDonated, setQuantityDonated] = useState(1);
    const [quantity, setQuantity] = useState(1);
    const [itemQuantity, setItemQuantity] = useState('');
    const [val, setVal] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [finalValueChange, setFinalValueChange] = useState(0);
    const [noResults, setNoResults] = useState(false);
    const [filteredDataBooks, setFilteredDataBooks] = useState(initialDataBooks);
    const [filteredDataStationery, setFilteredDataStationery] = useState(initialDataStationery);
    const [filterDataMedical, setFilterDataMedical] = useState(initialDataMedical);
    const [filterDataBlood, setFilterDataBlood] = useState(initialDataBlood);
    const [PopOpen, setPopOpen] = useState(false);
    const [Lang, setLang] = useState('');
    const [Author, setAuthor] = useState('');
    const [TypeMed, setTypeMed] = useState('');
    const [UseMed, setUseMed] = useState('');
    const [UsemedCont, setUsemedCont] = useState('');
    const [TypemedCont, setTypemedCont] = useState('');
    const [NamePatCont, setNamePatCont] = useState('');
    const [hospitalname, sethospitalname] = useState('');
    const [hospitalAddressCont, sethospitalAddressCont] = useState('');
    const [hospitalAddress, sethospitalAddress] = useState('');
    const [hospitalgovCont, sethospitalgovCont] = useState('');
    const [hospitalgov, sethospitalgov] = useState('');
    const [hospitalAreaCont, sethospitalAreaCont] = useState('');
    const [hospitalArea, sethospitalArea] = useState('');
    const [hospitalnameCont, sethospitalnameCont] = useState('');
    const [NamePat, setNamePat] = useState('');
    const [TypeBCont, setTypeBCont] = useState('');
    const [TypeB, setTypeB] = useState('');
    const [Edition, setEdition] = useState('');
    const [Summaryy, setSummaryy] = useState('');
    const [langCont, setlangCont] = useState('');
    const [AuthorCont, setAuthorCont] = useState('');
    const [EditionCont, setEditionCont] = useState('');
    const [SummaryCont, setSummaryCont] = useState('');
    const [transportion, setTransportion] = React.useState('');
    const [showTransportation, setShowTransportation] = React.useState(false); 
    const [error, setError] = React.useState(false); 
    const[errorCont,setErrorCont]=useState('');
    const [ChooseDateandTime, setChooseDateandTime] = useState(false);    
    const [ChooseTransportion, setChooseTransportion] = useState(false); 
    const[errorDate,seterrorDate]=useState(false); 
    const[errorTransportion,seterrorTransportion]=useState(false); 
    // sarah 5ody alhaga mn henaa 
    const [genderCont, setgenderCont] = useState('');
    const [gender, setgender] = useState('');
    const [genderT, setgenderT] = useState('');
    const [ageCont, setageCont] = useState('');
    const [age, setage] = useState('');
    const [ageT, setageT] = useState('');
    const [TypeCCont, setTypeCCont] = useState('');
    const [TypeC, setTypeC] = useState('');
    const [TypeT, setTypeT] = useState('');
    const [TypeseasonCont, setseasonCont] = useState('');
    const [season, setseason] = useState('');
    const[subcategory,setsubcategory]= useState('');
    const [TypematerialCont, setmaterialCont] = useState('');
    const [material, setmaterial] = useState('');
    const [opentoys,setopentoys]=useState(false);
    const [filterDataToys, setFilterDataToys] = useState(initialDataToys);
    const [openCloth,setopenCloth]=useState(false);
    const [filterDataCloth, setFilterDataCloth] = useState(initialDataCloth);
    const [openClothInfo,setopenClothInfo]=useState(false);
    const [openToyInfo,setopenToyInfo]=useState(false);
    const handleCloseCloth = () => {
        setopenCloth(false);
    };
    const handleCloseToys = () => {
        setopentoys(false);
    };
    const handleCloseClothInfo = () => {
        setopenClothInfo(false);
    };
    const handleCloseToyInfo = () => {
        setopenToyInfo(false);
    };

    const handleCloseFood = () => {
        setOpenFood(false);
    };
    const handleCloseBlood = () => {
        setopenblood(false);
    };
    const handleCloseBloodInfo = () => {
        setopenbloodInfo(false);
    };
    const handleCloseMedicial = () => {
        setopenmedical(false);
    };
    const handleCloseBook=()=>{
        setopenBook(false);
    }
    const handleCloseInfo = () => {
        setOpenInfo(false);
    };
    const handleCloseStationery=()=>{setOpenStationery(false)};
    const handleSubmit = () => {
        if (!ChooseDateandTime) {
            seterrorDate(true);
        }
        else if (!ChooseTransportion){
            seterrorTransportion(true);
        }
         else {
            setIsSubmitted(true);
            handlePopupOpen();
            handleCloseBook();
            handleCloseFood();
            handleCloseStationery();
            handleCloseMedicial();
            handleCloseCloth();
            handleCloseToys();
    
        }
    };
    const handlePopupOpen = () => {
        setPopOpen(true);
      };
      const handlePopupClose = () => {
        setPopOpen(false);
      };
    const handleChange = (event) => {
        handleFinalValueChange();
        setTransportion(event.target.value);
        setError(false); 
    };

    const handleFinalValueChange = () => {
        if (isSubmitted) {
            setFinalValueChange(quantityDonated + quantity);
        } else {
            setFinalValueChange(quantityDonated);
        }
    };
    const handleDecrement = () => {
        setErrorCont('');
        if (quantity > 1) {
            setErrorCont('');
            setQuantity(prevCount => prevCount - 1);
        } else {
            // Display error message when quantity is already 1
            // You can set an error state here to display the error message
            setQuantity(1);
            setErrorCont("Quantity can not be less than 1");
        }
    };

    const handleIncrement = () => {
        setErrorCont('');
        const newMaxQuantity = maxQuantity - parseInt(quantityDonated);
        if (quantity<newMaxQuantity){
            setQuantity(prevCount => prevCount + 1);
        }
        else {
            setQuantity(newMaxQuantity);
            setErrorCont(`Quantity can not be greater than ${newMaxQuantity}`);
        }
    };
    const marks = [
        { value: MIN, label: '' },
        { value: MAX, label: '' },
    ];
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
        const filteredBooks = initialDataBooks.filter(item =>
            item.category.toLowerCase().includes(event.target.value.toLowerCase()) 
        );
        setFilteredDataBooks(filteredBooks);

        const filteredStationery = initialDataStationery.filter(item =>
            item.category.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setFilteredDataStationery(filteredStationery);

        const filterFood=initialDatafood.filter(item =>
            item.category.toLowerCase().includes(event.target.value.toLowerCase()));
        setFilterDataFood(filterFood);
        const filterBlood=initialDataBlood.filter(item=>
            item.category.toLowerCase().includes(event.target.value.toLowerCase()));  
        setFilterDataBlood(filterBlood); 
        const filterMedicial=initialDataMedical.filter(item=>
            item.category.toLowerCase().includes(event.target.value.toLowerCase()));  
        setFilterDataMedical(filterMedicial);
        // han5od da kman sarah 
        const filteredCloth = initialDataCloth.filter(item =>
            item.category.toLowerCase().includes(event.target.value.toLowerCase()) 
        );
        setFilterDataCloth(filteredCloth); 
        const filteredToys = initialDataToys.filter(item =>
            item.category.toLowerCase().includes(event.target.value.toLowerCase()) 
        );
        setFilterDataToys(filteredToys); 
    };  
    const handleOpenCloth = (content1, content2, itemName, maxQuantity, itemQuantity, quantityDonated)=>{
        setDialogTitle(`${content2} ${itemName}`);
        setDialogContent(content1);
        setopenCloth(true);
        seterrorDate(true);
        seterrorTransportion(true);
        setChooseDateandTime(false);
        setChooseTransportion(false);
        setTransportion('');
        setMaxQuantity(maxQuantity);
        setQuantity(1);
        setItemQuantity(itemQuantity);
        setQuantityDonated(quantityDonated);
    }
    const handleOpenClothInfo=(content2,Title,typecont,ageCont,type,age,genderCont,gender,seasonCont,season,materialCont,material)=>{
        setopenClothInfo(true);
        setTypeC(type);
        setTypeCCont(typecont);
        setage(age);
        setageCont(ageCont);
        setgender(gender);
        setgenderCont(genderCont);
        setmaterialCont(materialCont);
        setmaterial(material);
        setseasonCont(seasonCont);
        setseason(season);
        setDialogContent(`${content2} ${Title}`);
        setDialogTitle(`${content2} ${Title}`);

    }
    const handleOpenToy = (content1, content2, itemName, maxQuantity, itemQuantity, quantityDonated)=>{
        setDialogTitle(`${content2} ${itemName}`);
        setDialogContent(content1);
        setopentoys(true);
        seterrorDate(true);
        seterrorTransportion(true);
        setChooseDateandTime(false);
        setChooseTransportion(false);
        setTransportion('');
        setMaxQuantity(maxQuantity);
        setQuantity(1);
        setItemQuantity(itemQuantity);
        setQuantityDonated(quantityDonated);
    }
    const handleOpenToyInfo=(content2,type,age,gender,subcategory)=>{
        setopenToyInfo(true);
        setDialogContent(`${content2} ${type}`);
        setDialogTitle(`${content2} ${type}`);
        setTypeT(type);
        setageT(age);
        setgenderT(gender);
        setsubcategory(subcategory);
        
    }
    const handleOpenStationery = (content1, content2, itemName, maxQuantity, itemQuantity, quantityDonated) => {
        setDialogTitle(`${content2} ${itemName}`);
        setDialogContent(content1);
        setOpenStationery(true);
        seterrorDate(true);
        seterrorTransportion(true);
        setChooseDateandTime(false);
        setChooseTransportion(false);
        setTransportion('');
        setMaxQuantity(maxQuantity);
        setQuantity(1);
        setItemQuantity(itemQuantity);
        setQuantityDonated(quantityDonated);
    };
    const handleOpenMedicial=(Title,content1,content2,maxQuantity,quantityDonated)=>{
        setDialogTitle(Title);
        setDialogContent(`${content2}${Title}`);
        setopenmedical(true);
        seterrorDate(true);
        seterrorTransportion(true);
        setChooseDateandTime(false);
        setChooseTransportion(false);
        setTransportion('');
        setMaxQuantity(maxQuantity);
        setQuantity(1);
        setQuantityDonated(quantityDonated);
    };
    const handleOpenBlood=()=>{
        setQuantity(1);
        handlePopupOpen();
        handleCloseBlood();
    };
    const handleOpenBook = (content1, content2, itemName, maxQuantity, itemQuantity, quantityDonated) => {
        setDialogTitle(`${content2} ${itemName}`);
        setDialogContent(content1);
        setopenBook(true);
        seterrorDate(true);
        seterrorTransportion(true);
        setTransportion('');
        setMaxQuantity(maxQuantity);
        setQuantity(1);
        setItemQuantity(itemQuantity);
        setQuantityDonated(quantityDonated);
        seterrorDate(true);
        seterrorTransportion(true);
    };
    const handleOpenBloodInfo=(typecont,Namecont,hospitalnameCont,hospitalgovCont,hospitalAddressCont,hospitalAddress,hospitalgov,hospitalAreaCont,hospitalArea,hospitalname,type,NameofPatient,content2)=>{
        setopenbloodInfo(true);
        setTypeB(type);
        setTypeBCont(typecont);
        setNamePatCont(Namecont);
        setNamePat(NameofPatient);
        sethospitalnameCont(hospitalnameCont);
        sethospitalname(hospitalname);
        sethospitalAddressCont(hospitalAddressCont);
        sethospitalAddress(hospitalAddress);
        sethospitalgovCont(hospitalgovCont);
        sethospitalgov(hospitalgov);
        sethospitalAreaCont(hospitalAreaCont);
        sethospitalArea(hospitalArea);
        setDialogContent(`${content2} ${hospitalname}`);
        setDialogTitle(`${content2} ${hospitalname}`);
    };
    const handleOpenInfo=(languageCont,editionCont,summaryCont,authorCont,content1,content2,itemName,language,author,edition,summary)=>{
        setOpenInfo(true);
        setDialogTitle(`${content2} ${itemName}`);
        setDialogContent(content1);
        setAuthor(author);
        setEdition(edition);
        setLang(language);
        setSummaryy(summary);
        setSummaryCont(summaryCont);
        setEditionCont(editionCont);
        setAuthorCont(authorCont);
        setlangCont(languageCont);

    };
    const handleOpenFood = (content1, content2, itemName, maxQuantity, itemQuantity, quantityDonated) => {
        setDialogTitle(`${content2} ${itemName}`);
        setDialogContent(content1);
        setOpenFood(true);
        seterrorDate(true);
        seterrorTransportion(true);
        setChooseDateandTime(false);
        setChooseTransportion(false);
        setTransportion('');
        setMaxQuantity(maxQuantity);
        setQuantity(1);
        setItemQuantity(itemQuantity);
        setQuantityDonated(quantityDonated);
    };
    useEffect(() => {
        if (filteredDataBooks.length === 0 && filteredDataStationery.length === 0 && filterDataFood.length===0 && filterDataMedical===0 && filterDataBlood===0) {
            setNoResults(true);
        } else {
            setNoResults(false);
        }
    }, [filteredDataBooks, filteredDataStationery,filterDataFood,filterDataMedical,filterDataBlood]);
    return(
        <div><Navbar/>
        <LocalizationProvider dateAdapter={AdapterDayjs}>    
        <div >
            <TextField
                label="Filter"
                value={filter}
                onChange={handleFilterChange}
                variant="outlined"
                color='warning'
                margin="normal"
                style={{ width: '25%', borderRadius: '20px' }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                placeholder="Enter either food,School Supplies,Medicial,Blood to filter"
            />
            {/* filteration of Toys */}
            <Grid container spacing={2} alignItems="center">
            {filterDataToys.map(toy => (
             <Grid item xs={12} sm={6} md={4} key={toy.id} >
                <Card sx={{
                maxWidth: 385,
                padding: 1,
                alignContent: 'center',
                borderRadius: '1rem',
                transition: 'box-shadow 0.3s',
                '&:hover': {
                    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)'
                }
                }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={toy.coverSrc}
                    alt="cloth Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {toy.Type}
                    </Typography>
                    <Typography variant="body2">
                        Category: {toy.category}
                    </Typography>

                    <Box sx={{ width: 350 }}>
                        <Slider
                            aria-label="Always visible"
                            marks={marks}
                            step={1}
                            value={parseInt(toy.quantitydonated)}
                            valueLabelDisplay="on"
                            valueLabelFormat={(value) => `${value} ${itemQuantity.replace(/\d+/g, '')} already donated`}
                            min={0}
                            max={parseInt(toy.quantity)}
                            onChange={handleChange}
                            disabled
                            sx={{
                                color: '#fd580b',
                                '& .MuiSlider-track': {
                                    color: '#fd580b',
                                },
                                '& .MuiSlider-thumb': {
                                    color: '#fd580b',
                                },
                            }}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center' }}>
                            <Typography
                                variant="body2"
                                onClick={() => setVal(parseInt(toy.quantitydonated))}
                                sx={{ cursor: 'pointer' }}
                            >
                                {MIN}
                            </Typography>
                            <Typography
                                variant="body2"
                                onClick={() => setVal(parseInt(toy.quantitydonated))}
                                sx={{ cursor: 'pointer' }}
                            >
                                {parseFloat(toy.quantity)}{(toy.quantity).replace(/\d+/g, '')}
                            </Typography>
                        </Box>
                    </Box>
                    <Button onClick={() => handleOpenToy('Please add the quantity you would like to donate:',
                        'Donation Process for', toy.Type, parseFloat(toy.quantity),
                        (toy.quantity).replace(/S/g, ''), parseInt(toy.quantitydonated))} variant='outlined' sx={{
                            borderRadius: '1rem',
                            color: 'black',
                            border: '1px solid black',
                            marginRight: '30px',
                            '&:hover': { bgcolor: '#fd580b', color: 'white', border: '2px solid #fd580b' }
                        }}>Donate</Button>
                    <Button onClick={() => handleOpenToyInfo('Donation Process For',toy.Type,toy.Age,toy.Gender,toy.subcategory)} variant='outlined' sx={{
                        borderRadius: '1rem',
                        color: 'black',
                        border: '1px solid black',
                        '&:hover': { bgcolor: '#fd580b', color: 'white', border: '2px solid #fd580b' }
                    }}>More Information</Button>
                </CardContent>
            </Card>
        </Grid>
    ))}
</Grid>

                <Dialog open={opentoys}  fullWidth maxWidth="md">
                <DialogTitle>{dialogTitle}</DialogTitle>
                    <DialogContent sx={{ display: 'flex', alignItems: 'center', marginRight: '16px' }}>
                        <div sx={{ display: 'flex', alignItems: 'center' }}>
                        <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                                        <DateTimePicker
                                        slotProps={{
                                            textField:({errorDate})=>({color:errorDate===true?'red':'warning'})
                                        }}
                                            label="Select pickup date and time"
                                            viewRenderers={{
                                                hours: renderTimeViewClock,
                                                minutes: renderTimeViewClock,
                                                seconds: renderTimeViewClock,
                                            }}
                                             onChange={() => {
                                                setChooseDateandTime(true);
                                                  seterrorDate(false); // Set errorDate to false when date and time are selected
                                      }}
                                        />
                                 {errorDate && <Typography variant="caption" color="error">You must choose a date and time</Typography>}
                                        <FormControl fullWidth  color='warning'>
                                            <InputLabel id="demo-simple-select-label">Choose  transportation type</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={transportion}
                                                onChange={(event) => {
                                                    setTransportion(event.target.value);
                                                    setChooseTransportion(true);
                                                    seterrorTransportion(false);
                                                }}
                                            >
                                                <MenuItem value="">Select Transportation</MenuItem>
                                                <MenuItem value={10}>Truck</MenuItem>
                                                <MenuItem value={20}>Car</MenuItem>
                                                <MenuItem value={30}>Motorcycle</MenuItem>
                                            </Select>
                                            {errorTransportion && <Typography variant="caption" color="error">You must choose one from the list</Typography>}
                                        </FormControl>
                                    </DemoContainer>
                            <Grid container spacing={1} alignItems="center" >
                                <Grid item><DialogContentText sx={{ marginRight: '16px' }}>{dialogContent}</DialogContentText></Grid>
                                    <Grid item>
                                        <Button variant="contained"
                                            sx={{
                                                maxWidth: '15px',
                                                minWidth: '15px',
                                                borderRadius: '2px',
                                                backgroundColor: '#fd580b',
                                                color: 'white',
                                                '&:hover': {
                                                    backgroundColor: '#ff6e40',
                                                }
                                            }}
                                            onClick={handleDecrement}>-</Button>
                                    </Grid>
                                    <Grid item>
                                        <div sx={{ maxWidth: '20px', minWidth: '20px' }}>{quantity}</div>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained"
                                            sx={{
                                                maxWidth: '15px',
                                                minWidth: '15px',
                                                borderRadius: '2px',
                                                backgroundColor: '#fd580b',
                                                color: 'white',
                                                '&:hover': {
                                                    backgroundColor: '#ff6e40',
                                                }
                                            }}
                                            onClick={handleIncrement}>+</Button>
                                    </Grid>
                                    {errorCont && <Typography variant="caption" color="error">{errorCont}</Typography>}

                            </Grid>
                            {<span>Quantity to be donate = {quantity}{itemQuantity.replace(/\d+/g, '')}</span>}
                        </div>   
                    </DialogContent>
                <DialogActions>
                    <form>
                        <Button sx={{
                                borderRadius: '2px',
                                backgroundColor: '#fd580b',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#ff6e40',
                                }
                            }} variant='contained' onClick={() => {
                                handleSubmit();
                            }}>
                                Submit
                        </Button>
                    </form>
                    <DialogActions>
                            <Button sx={{borderRadius: '2px',
                            backgroundColor: '#fd580b',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#ff6e40',
                            }
                            }}variant='contained' onClick={() => {handleCloseToys();}}> Close</Button>
                        </DialogActions> 
                </DialogActions>
            </Dialog>
            <Dialog open={openToyInfo} fullWidth maxWidth="md">
            <DialogTitle>{dialogTitle}</DialogTitle>
                    <DialogContent sx={{display: 'flex', alignItems: 'center', marginRight: '16px'}}>
                        <div>
                        <Typography variant="body1">
                                {'Type: '}{TypeT}
                            </Typography>
                            <Typography variant="body1">
                                {'Age: '}{ageT}  
                            </Typography>
                            <Typography variant="body1">
                                {'Gender: '}{genderT}
                            </Typography>
                            <Typography variant="body1">
                                {'Category: '}{subcategory}
                            </Typography>
                        </div>
                    </DialogContent>
                    <DialogActions>
                            <Button sx={{borderRadius: '2px',
                            backgroundColor: '#fd580b',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#ff6e40',
                            }
                            }}variant='contained' onClick={() => {handleCloseToyInfo();}}> Close</Button>
                        </DialogActions>
            </Dialog>
            <Dialog
      open={PopOpen}
      fullWidth
      maxWidth="sm"
      classes={{ paper: "custom-dialog" }}
      className="dialog"
    >
      <DialogTitle>Donation Successful!!</DialogTitle>
      <DialogContent>
        <div className="image-container">
          {/* Smaller Image */}
          <img
            src="/images/gif/Done2.gif"
            alt="Image"
            className="popup-image"
          />
          {/* Centered text */}
          <div className="thank-you-text">
            <strong>Thank You for your generous donation!!</strong>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        {/* Close button with orange background and white font color */}
        <Button
          onClick={handlePopupClose}
          variant="contained"
          style={{ backgroundColor: "#fd580b", color: "white" }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
            {/* filteration for Cloth */}
            <Grid container spacing={2} alignItems="center">
                {filterDataCloth.map(cloth => (
                    <Grid item xs={12} sm={6} md={4} key={cloth.id} >
                          <Card sx={{
                                maxWidth: 385,
                                padding: 1,
                                alignContent: 'center',
                                borderRadius: '1rem',
                                transition: 'box-shadow 0.3s',
                                '&:hover': {
                                    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)'
                                }
                                }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={cloth.coverSrc}
                                    alt="cloth Image"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {cloth.Type}
                                    </Typography>
                                    <Typography variant="body2">
                                        Category: {cloth.category}
                                    </Typography>

                                    <Box sx={{ width: 350 }}>
                                        <Slider
                                            aria-label="Always visible"
                                            marks={marks}
                                            step={1}
                                            value={parseInt(cloth.quantitydonated)}
                                            valueLabelDisplay="on"
                                            valueLabelFormat={(value) => `${value} ${itemQuantity.replace(/\d+/g, '')} already donated`}
                                            min={0}
                                            max={parseInt(cloth.quantity)}
                                            onChange={handleChange}
                                            disabled
                                            sx={{
                                                color: '#fd580b',
                                                '& .MuiSlider-track': {
                                                    color: '#fd580b',
                                                },
                                                '& .MuiSlider-thumb': {
                                                    color: '#fd580b',
                                                },
                                            }}
                                        />
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center' }}>
                                            <Typography
                                                variant="body2"
                                                onClick={() => setVal(parseInt(cloth.quantitydonated))}
                                                sx={{ cursor: 'pointer' }}
                                            >
                                                {MIN}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                onClick={() => setVal(parseInt(cloth.quantitydonated))}
                                                sx={{ cursor: 'pointer' }}
                                            >
                                                {parseFloat(cloth.quantity)}{(cloth.quantity).replace(/\d+/g, '')}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Button onClick={() => handleOpenCloth('Please add the quantity you would like to donate:',
                                        'Donation Process for', cloth.Type, parseFloat(cloth.quantity),
                                        (cloth.quantity).replace(/S/g, ''), parseInt(cloth.quantitydonated))} variant='outlined' sx={{
                                            borderRadius: '1rem',
                                            color: 'black',
                                            border: '1px solid black',
                                            marginRight: '30px',
                                            '&:hover': { bgcolor: '#fd580b', color: 'white', border: '2px solid #fd580b' }
                                        }}>Donate</Button>
                                    <Button onClick={() => handleOpenClothInfo('Donation Process For', cloth.Type, `Type:`, `Age:`, cloth.Type, cloth.Age, `Gender:`, cloth.Gender, `Season:`, cloth.Season, `Material:`, cloth.Material)} variant='outlined' sx={{
                                        borderRadius: '1rem',
                                        color: 'black',
                                        border: '1px solid black',
                                        '&:hover': { bgcolor: '#fd580b', color: 'white', border: '2px solid #fd580b' }
                                    }}>More Information</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Dialog open={openCloth}  fullWidth maxWidth="md">
                <DialogTitle>{dialogTitle}</DialogTitle>
                    <DialogContent sx={{ display: 'flex', alignItems: 'center', marginRight: '16px' }}>
                        <div sx={{ display: 'flex', alignItems: 'center' }}>
                        <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                                        <DateTimePicker
                                        slotProps={{
                                            textField:({errorDate})=>({color:errorDate===true?'red':'warning'})
                                        }}
                                            label="Select pickup date and time"
                                            viewRenderers={{
                                                hours: renderTimeViewClock,
                                                minutes: renderTimeViewClock,
                                                seconds: renderTimeViewClock,
                                            }}
                                             onChange={() => {
                                                setChooseDateandTime(true);
                                                  seterrorDate(false); // Set errorDate to false when date and time are selected
                                      }}
                                        />
                                 {errorDate && <Typography variant="caption" color="error">You must choose a date and time</Typography>}
                                        <FormControl fullWidth  color='warning'>
                                            <InputLabel id="demo-simple-select-label">Choose  transportation type</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={transportion}
                                                onChange={(event) => {
                                                    setTransportion(event.target.value);
                                                    setChooseTransportion(true);
                                                    seterrorTransportion(false);
                                                }}
                                            >
                                                <MenuItem value="">Select Transportation</MenuItem>
                                                <MenuItem value={10}>Truck</MenuItem>
                                                <MenuItem value={20}>Car</MenuItem>
                                                <MenuItem value={30}>Motorcycle</MenuItem>
                                            </Select>
                                            {errorTransportion && <Typography variant="caption" color="error">You must choose one from the list</Typography>}
                                        </FormControl>
                                    </DemoContainer>
                            <Grid container spacing={1} alignItems="center" >
                                <Grid item><DialogContentText sx={{ marginRight: '16px' }}>{dialogContent}</DialogContentText></Grid>
                                    <Grid item>
                                        <Button variant="contained"
                                            sx={{
                                                maxWidth: '15px',
                                                minWidth: '15px',
                                                borderRadius: '2px',
                                                backgroundColor: '#fd580b',
                                                color: 'white',
                                                '&:hover': {
                                                    backgroundColor: '#ff6e40',
                                                }
                                            }}
                                            onClick={handleDecrement}>-</Button>
                                    </Grid>
                                    <Grid item>
                                        <div sx={{ maxWidth: '20px', minWidth: '20px' }}>{quantity}</div>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained"
                                            sx={{
                                                maxWidth: '15px',
                                                minWidth: '15px',
                                                borderRadius: '2px',
                                                backgroundColor: '#fd580b',
                                                color: 'white',
                                                '&:hover': {
                                                    backgroundColor: '#ff6e40',
                                                }
                                            }}
                                            onClick={handleIncrement}>+</Button>
                                    </Grid>
                                    {errorCont && <Typography variant="caption" color="error">{errorCont}</Typography>}

                            </Grid>
                            {<span>Quantity to be donate = {quantity}{itemQuantity.replace(/\d+/g, '')}</span>}
                        </div>   
                    </DialogContent>
                <DialogActions>
                    <form>
                        <Button sx={{
                                borderRadius: '2px',
                                backgroundColor: '#fd580b',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#ff6e40',
                                }
                            }} variant='contained' onClick={() => {
                                handleSubmit();
                            }}>
                                Submit
                        </Button>
                    </form>
                    <DialogActions>
                            <Button sx={{borderRadius: '2px',
                            backgroundColor: '#fd580b',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#ff6e40',
                            }
                            }}variant='contained' onClick={() => {handleCloseCloth();}}> Close</Button>
                        </DialogActions> 
                </DialogActions>
            </Dialog>
            <Dialog open={openClothInfo} fullWidth maxWidth="md">
            <DialogTitle>{dialogTitle}</DialogTitle>
                    <DialogContent sx={{display: 'flex', alignItems: 'center', marginRight: '16px'}}>
                        <div>
                        <Typography variant="body1">
                                {TypeCCont}{TypeC}
                            </Typography>
                            <Typography variant="body1">
                                {ageCont}{age}
                            </Typography>
                            <Typography variant="body1">
                                {genderCont}{gender}
                            </Typography>
                            <Typography variant="body1">
                                {'Season:'}{season}
                            </Typography>
                            <Typography variant="body1">
                            {'Material:'}{material}
                            </Typography>
                        </div>
                    </DialogContent>
                    <DialogActions>
                            <Button sx={{borderRadius: '2px',
                            backgroundColor: '#fd580b',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#ff6e40',
                            }
                            }}variant='contained' onClick={() => {handleCloseClothInfo();}}> Close</Button>
                        </DialogActions>
            </Dialog>
            <Dialog
      open={PopOpen}
      fullWidth
      maxWidth="sm"
      classes={{ paper: "custom-dialog" }}
      className="dialog"
    >
      <DialogTitle>Donation Successful!!</DialogTitle>
      <DialogContent>
        <div className="image-container">
          {/* Smaller Image */}
          <img
            src="/images/gif/Done2.gif"
            alt="Image"
            className="popup-image"
          />
          {/* Centered text */}
          <div className="thank-you-text">
            <strong>Thank You for your generous donation!!</strong>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        {/* Close button with orange background and white font color */}
        <Button
          onClick={handlePopupClose}
          variant="contained"
          style={{ backgroundColor: "#fd580b", color: "white" }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>



            {/* filteration for blood */}
            <Grid container spacing={2} justifyContent="center">
              {filterDataBlood.map(blood=>(
              <Grid item xs={12} sm={6} md={4} key={blood.id}>
                         <Card sx={{
                            maxWidth: 385,
                            padding: 1,
                            alignContent: 'center',
                            borderRadius: '1rem',
                            transition: 'box-shadow 0.3s',
                            '&:hover': {
                                boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)'
                            }
                     }}>
                        <CardMedia
                                component="img"
                                height="140"
                                image={blood.coverSrc}
                                alt="Image"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                    {blood.title}
                                </Typography>
                            <Typography variant="body2">
                                    Category: {blood.category}
                            </Typography> 
                                <Button onClick={() => handleOpenBlood()} variant='outlined' sx={{
                                        borderRadius: '1rem',
                                        color: 'black',
                                        margin:'1.5rem',
                                        border: '1px solid black',
                                        '&:hover': { bgcolor: '#fd580b', color: 'white', border: '2px solid #fd580b'}
                                    }}>Donate</Button>
                                <Button onClick={() => handleOpenBloodInfo(`Type:`, `Name of Patient:` ,`hospital:`,`hospital government:`, `hospital Address:`,blood.address,blood.government, `hospital Area:`,blood.area,blood.title,blood.bloodtype,blood.npatient,'Donation Process For')} variant='outlined' sx={{
                                borderRadius: '1rem',
                                color: 'black',
                                border: '1px solid black',
                                '&:hover': { bgcolor: '#fd580b', color: 'white', border: '2px solid #fd580b' }
                            }}>More Information</Button>    
                            </CardContent>
                     </Card>
              </Grid>
            ))}  
            <Dialog open={openbloodInfo} fullWidth maxWidth="md">
            <DialogTitle>{dialogTitle}</DialogTitle>
                    <DialogContent sx={{display: 'flex', alignItems: 'center', marginRight: '16px'}}>
                        <div>
                        <Typography variant="body1">
                                {NamePatCont}{NamePat}
                            </Typography>
                            <Typography variant="body1">
                                {TypeBCont}{TypeB}
                            </Typography>
                            <Typography variant="body1">
                                {hospitalnameCont}{hospitalname}
                            </Typography>
                            <Typography variant="body1">
                                {hospitalAreaCont}{hospitalArea}
                            </Typography>
                            <Typography variant="body1">
                            {hospitalgovCont}{hospitalgov}
                            </Typography>
                            <Typography variant="body1">
                                {hospitalAddressCont}{hospitalAddress}
                            </Typography>
                        </div>
                    </DialogContent>
                    <DialogActions>
                            <Button sx={{borderRadius: '2px',
                            backgroundColor: '#fd580b',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#ff6e40',
                            }
                            }}variant='contained' onClick={() => {handleCloseBloodInfo();}}> Close</Button>
                        </DialogActions>
            </Dialog>
            <Dialog open={openblood} fullWidth maxWidth="md">
                    <DialogTitle>{dialogTitle}</DialogTitle>
                    <DialogContent sx={{ display:'flex',alignItems:'center',marginRight:'16px'}}>
                        <div sx={{ display: 'flex', alignItems: 'center' }}>
                            <Grid container spacing={1} alignItems="center" > 
                                <Grid item>
                                <DialogContentText sx={{ marginRight: '16px' }}>{dialogContent}</DialogContentText></Grid>
                                {showTransportation && (
                        <div>
                            <Grid container spacing={1}>
                                <Grid item>
                                <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                                    <DateTimePicker  error={error}
                                    label="Select pickup date and time"
                                    viewRenderers={{
                                        hours: renderTimeViewClock,
                                        minutes: renderTimeViewClock,
                                        seconds: renderTimeViewClock,
                                    }}
                                    />
                                     <FormControl fullWidth error={error} sx={{ width: '100%', mt: 1 }}> 
                                        <InputLabel id="demo-simple-select-label">Choose  transportation type</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={transportion}
                                            onChange={handleChange}>
                                            <MenuItem value="">Select Transportation</MenuItem>
                                            <MenuItem value={10}>Truck</MenuItem>
                                            <MenuItem value={20}>Car</MenuItem>
                                            <MenuItem value={30}>Motorcycle</MenuItem>
                                        </Select>
                                        {error && <Typography variant="caption" color="error">You must choose one from the list</Typography>} {/* Display error message */}
                                    </FormControl>  
                                </DemoContainer>
                                </Grid>
                            </Grid>
                        </div>
                    )}
                                <Grid item>
                                        <Button variant="contained"
                                            sx={{
                                                maxWidth: '15px',
                                                minWidth: '15px',
                                                borderRadius: '2px',
                                                backgroundColor: '#fd580b',
                                                color: 'white',
                                                '&:hover': {
                                                    backgroundColor: '#ff6e40',
                                                }
                                            }}
                                            onClick={handleDecrement}>-</Button>
                                    </Grid>
                                    <Grid item>
                                        <div sx={{ maxWidth: '20px', minWidth: '20px' }}>{quantity}</div>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained"
                                            sx={{
                                                maxWidth: '15px',
                                                minWidth: '15px',
                                                borderRadius: '2px',
                                                backgroundColor: '#fd580b',
                                                color: 'white',
                                                '&:hover': {
                                                    backgroundColor: '#ff6e40',
                                                }
                                            }}
                                            onClick={handleIncrement}>+</Button>
                                    </Grid>
                                    {errorCont && <Typography variant="caption" color="error">{errorCont}</Typography>}

                            </Grid> 
                            {<span>Quantity to be donate = {quantity }</span>}
                        </div>
                    </DialogContent>
                    <DialogActions>
                    <form>
                        <Button sx={{
                                borderRadius: '2px',
                                backgroundColor: '#fd580b',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#ff6e40',
                                }
                            }} variant='contained' onClick={() => {
                                handleSubmit();
                                handlePopupOpen();
                                handleCloseBlood();
                            }}>
                                Submit
                        </Button>
                    </form> 
                    <DialogActions>
                            <Button sx={{borderRadius: '2px',
                            backgroundColor: '#fd580b',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#ff6e40',
                            }
                            }}variant='contained' onClick={() => {handleCloseBlood();}}> Close</Button>
                        </DialogActions>
                </DialogActions>
                </Dialog>
                <Dialog
      open={PopOpen}
      fullWidth
      maxWidth="sm"
      classes={{ paper: "custom-dialog" }}
      className="dialog"
    >
      <DialogTitle>Donation Successful!!</DialogTitle>
      <DialogContent>
        <div className="image-container">
          {/* Smaller Image */}
          <img
            src="/images/gif/Done2.gif"
            alt="Image"
            className="popup-image"
          />
          {/* Centered text */}
          <div className="thank-you-text">
            <strong>Thank You for your generous donation!!</strong>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        {/* Close button with orange background and white font color */}
        <Button
          onClick={handlePopupClose}
          variant="contained"
          style={{ backgroundColor: "#fd580b", color: "white" }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
            </Grid>
            {/* filteration for book */}
            <Grid container spacing={2} justifyContent="center">
                {filteredDataBooks.map(book => (
                    <Grid item xs={12} sm={6} md={4} key={book.id}>
                        <Card sx={{
                            maxWidth: 385,
                            marginTop:2,
                            padding: 1,
                            alignContent: 'center',
                            borderRadius: '1rem',
                            transition: 'box-shadow 0.3s',
                            '&:hover': {
                                boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)'
                            }
                        }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={book.img}
                                alt="Image"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {book.name}
                                </Typography>
                                <Typography variant="body2">
                                    Category: {book.category}
                                </Typography>
                                <Box sx={{ width: 350 }}>
                                    <Slider
                                        aria-label="Always visible"
                                        marks={marks}
                                        step={1}
                                        value={parseInt(book.quantitydonated)}
                                        valueLabelDisplay="on"
                                        valueLabelFormat={(value) => `${value} ${itemQuantity.replace(/\d+/g, '')} already donated`}
                                        min={0}
                                        max={parseInt(book.quantity)}
                                        onChange={handleChange}
                                        disabled
                                        sx={{
                                            color: '#fd580b',
                                            '& .MuiSlider-track': {
                                                color: '#fd580b',
                                            },
                                            '& .MuiSlider-thumb': {
                                                color: '#fd580b',
                                            },
                                        }}
                                    />
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center' }}>
                                        <Typography
                                            variant="body2"
                                            onClick={() => setVal(parseInt(book.quantitydonated))}
                                            sx={{ cursor: 'pointer' }}
                                        >
                                            {MIN}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            onClick={() => setVal(parseInt(book.quantitydonated))}
                                            sx={{ cursor: 'pointer' }}
                                        >
                                            {parseFloat(book.quantity)}{(book.quantity).replace(/\d+/g, '')}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Button onClick={() => handleOpenBook('Please add the quantity you would like to donate:',
                                    'Donation Process For', book.name, parseFloat(book.quantity),
                                    (book.quantity).replace(/S/g, ''), parseInt(book.quantitydonated))} variant='outlined' sx={{
                                        borderRadius: '1rem',
                                        color: 'black',
                                        margin:'1.5rem',
                                        border: '1px solid black',
                                        '&:hover': { bgcolor: '#fd580b', color: 'white', border: '2px solid #fd580b' }
                                    }}>Donate</Button>
                                <Button onClick={() => handleOpenInfo(`Language:`, `Edition:` ,`Summary:`,`Author:`, 'Donation Process For','Donation Process for', book.name,book.Language,book.Author,book.Edition,book.Summary)} variant='outlined' sx={{
                                borderRadius: '1rem',
                                color: 'black',
                                border: '1px solid black',
                                '&:hover': { bgcolor: '#fd580b', color: 'white', border: '2px solid #fd580b' }
                            }}>More Information</Button>

                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                <Dialog open={openInfo} fullWidth maxWidth="md">
                    <DialogTitle>{dialogTitle}</DialogTitle>
                        <DialogContent sx={{ display: 'flex', alignItems: 'center', marginRight: '16px' }}>
                        <div>
                            <Typography variant="body1">
                                {langCont}{Lang}
                            </Typography>
                            <Typography variant="body1">
                                {AuthorCont}{Author}
                            </Typography>
                            <Typography variant="body1">
                            {SummaryCont}{Summaryy}
                            </Typography>
                            <Typography variant="body1">
                                {EditionCont}{Edition}
                            </Typography>
                        </div>
                        </DialogContent>
                        <DialogActions>
                            <Button sx={{borderRadius: '2px',
                            backgroundColor: '#fd580b',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#ff6e40',
                            }
                            }}variant='contained' onClick={() => {handleCloseInfo();}}> Close</Button>
                        </DialogActions>
                 </Dialog>    
                <Dialog open={openBook} fullWidth maxWidth="md">
                    <DialogTitle>{dialogTitle}</DialogTitle>
                    <DialogContent sx={{ display: 'flex', alignItems: 'center', marginRight: '16px' }}>
                        <div sx={{ display: 'flex', alignItems: 'center' }}>
                        <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                                        <DateTimePicker
                                        slotProps={{
                                            textField:({errorDate})=>({color:errorDate===true?'red':'warning'})
                                        }}
                                            label="Select pickup date and time"
                                            viewRenderers={{
                                                hours: renderTimeViewClock,
                                                minutes: renderTimeViewClock,
                                                seconds: renderTimeViewClock,
                                            }}
                                             onChange={() => {
                                                setChooseDateandTime(true);
                                                  seterrorDate(false); // Set errorDate to false when date and time are selected
                                      }}
                                        />
                                 {errorDate && <Typography variant="caption" color="error">You must choose a date and time</Typography>}
                                        <FormControl fullWidth  color='warning'>
                                            <InputLabel id="demo-simple-select-label">Choose  transportation type</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={transportion}
                                                onChange={(event) => {
                                                    setTransportion(event.target.value);
                                                    setChooseTransportion(true);
                                                    seterrorTransportion(false);
                                                }}
                                            >
                                                <MenuItem value="">Select Transportation</MenuItem>
                                                <MenuItem value={10}>Truck</MenuItem>
                                                <MenuItem value={20}>Car</MenuItem>
                                                <MenuItem value={30}>Motorcycle</MenuItem>
                                            </Select>
                                            {errorTransportion && <Typography variant="caption" color="error">You must choose one from the list</Typography>}
                                        </FormControl>
                                    </DemoContainer>
                            <Grid container spacing={1} alignItems="center" > 
                                <Grid item><DialogContentText sx={{ marginRight: '16px' }}>{dialogContent}</DialogContentText></Grid>
                                <Grid item>
                                        <Button variant="contained"
                                            sx={{
                                                maxWidth: '15px',
                                                minWidth: '15px',
                                                borderRadius: '2px',
                                                backgroundColor: '#fd580b',
                                                color: 'white',
                                                '&:hover': {
                                                    backgroundColor: '#ff6e40',
                                                }
                                            }}
                                            onClick={handleDecrement}>-</Button>
                                    </Grid>
                                    <Grid item>
                                        <div sx={{ maxWidth: '20px', minWidth: '20px' }}>{quantity}</div>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained"
                                            sx={{
                                                maxWidth: '15px',
                                                minWidth: '15px',
                                                borderRadius: '2px',
                                                backgroundColor: '#fd580b',
                                                color: 'white',
                                                '&:hover': {
                                                    backgroundColor: '#ff6e40',
                                                }
                                            }}
                                            onClick={handleIncrement}>+</Button>
                                    </Grid>
                                    {errorCont && <Typography variant="caption" color="error">{errorCont}</Typography>}

                            </Grid> 
                            {<span>Quantity to be donate = {quantity}{itemQuantity.replace(/\d+/g, '')}</span>}
                        </div>
                    </DialogContent>
                    <DialogActions>
                    <form>
                        <Button sx={{
                                borderRadius: '2px',
                                backgroundColor: '#fd580b',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#ff6e40',
                                }
                            }} variant='contained' onClick={() => {
                                handleSubmit();

                            }}>
                                Submit
                        </Button>
                    </form> 
                    <DialogActions>
                            <Button sx={{borderRadius: '2px',
                            backgroundColor: '#fd580b',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#ff6e40',
                            }
                            }}variant='contained' onClick={() => {handleCloseBook();}}> Close</Button>
                        </DialogActions>
                </DialogActions>
                </Dialog>
                <Dialog
      open={PopOpen}
      fullWidth
      maxWidth="sm"
      classes={{ paper: "custom-dialog" }}
      className="dialog"
    >
      <DialogTitle>Donation Successful!!</DialogTitle>
      <DialogContent>
        <div className="image-container">
          {/* Smaller Image */}
          <img
            src="/images/gif/Done2.gif"
            alt="Image"
            className="popup-image"
          />
          {/* Centered text */}
          <div className="thank-you-text">
            <strong>Thank You for your generous donation!!</strong>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        {/* Close button with orange background and white font color */}
        <Button
          onClick={handlePopupClose}
          variant="contained"
          style={{ backgroundColor: "#fd580b", color: "white" }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
{/* filteration for food  */}
{filterDataFood.map(food => (
                    <Grid item xs={12} sm={6} md={4} key={food.id}>
                        <Card sx={{
                            maxWidth: 385,
                            padding: 1,
                            alignContent: 'center',
                            borderRadius: '1rem',
                            transition: 'box-shadow 0.3s',
                            '&:hover': {
                                boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)'
                            }
                        }}>
                        <CardMedia
                                component="img"
                                height="140"
                                image={food.img}
                                alt="food Image"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {food.name}
                                </Typography>
                                <Typography variant="body2">
                                    Category: {food.category}
                                </Typography>
                                <Box sx={{ width: 350 }}>
                                <Slider
                                        aria-label="Always visible"
                                        marks={marks}
                                        step={1}
                                        value={parseInt(food.quantitydonated)}
                                        valueLabelDisplay="on"
                                        valueLabelFormat={(value) => `${value} ${itemQuantity.replace(/\d+/g, '')} already donated`}
                                        min={0}
                                        max={parseInt(food.quantity)}
                                        onChange={handleChange}
                                        disabled
                                        sx={{
                                            color: '#fd580b',
                                            '& .MuiSlider-track': {
                                                color: '#fd580b',
                                            },
                                            '& .MuiSlider-thumb': {
                                                color: '#fd580b',
                                            },
                                        }}
                                    />
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center' }}>
                                        <Typography
                                                variant="body2"
                                                onClick={() => setVal(parseInt(food.quantitydonated))}
                                                sx={{ cursor: 'pointer' }}
                                            >
                                                {MIN}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                onClick={() => setVal(parseInt(food.quantitydonated))}
                                                sx={{ cursor: 'pointer' }}
                                            >
                                                {parseFloat(food.quantity)}{(food.quantity).replace(/\d+/g, '')}
                                            </Typography>
                                    </Box>
                                </Box>
                                <Button onClick={() => handleOpenFood('Please add the quantity you would like to donate:',
                                    'Donation Process for', food.name, parseFloat(food.quantity),
                                    (food.quantity).replace(/S/g, ''), parseInt(food.quantitydonated))} variant='outlined' sx={{
                                        borderRadius: '1rem',
                                        color: 'black',
                                        border: '1px solid black',
                                        '&:hover': { bgcolor: '#fd580b', color: 'white', border: '2px solid #fd580b' }
                                    }}>Donate</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                <Dialog open={openFood}  fullWidth maxWidth="md">
                <DialogTitle>{dialogTitle}</DialogTitle>
                    <DialogContent sx={{ display: 'flex', alignItems: 'center', marginRight: '16px' }}>
                        <div sx={{ display: 'flex', alignItems: 'center' }}>
                        <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                                        <DateTimePicker
                                        slotProps={{
                                            textField:({errorDate})=>({color:errorDate===true?'red':'warning'})
                                        }}
                                            label="Select pickup date and time"
                                            viewRenderers={{
                                                hours: renderTimeViewClock,
                                                minutes: renderTimeViewClock,
                                                seconds: renderTimeViewClock,
                                            }}
                                             onChange={() => {
                                                setChooseDateandTime(true);
                                                  seterrorDate(false); // Set errorDate to false when date and time are selected
                                      }}
                                        />
                                 {errorDate && <Typography variant="caption" color="error">You must choose a date and time</Typography>}
                                        <FormControl fullWidth  color='warning'>
                                            <InputLabel id="demo-simple-select-label">Choose  transportation type</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={transportion}
                                                onChange={(event) => {
                                                    setTransportion(event.target.value);
                                                    setChooseTransportion(true);
                                                    seterrorTransportion(false);
                                                }}
                                            >
                                                <MenuItem value="">Select Transportation</MenuItem>
                                                <MenuItem value={10}>Truck</MenuItem>
                                                <MenuItem value={20}>Car</MenuItem>
                                                <MenuItem value={30}>Motorcycle</MenuItem>
                                            </Select>
                                            {errorTransportion && <Typography variant="caption" color="error">You must choose one from the list</Typography>}
                                        </FormControl>
                                    </DemoContainer>
                            <Grid container spacing={1} alignItems="center" >
                                <Grid item><DialogContentText sx={{ marginRight: '16px' }}>{dialogContent}</DialogContentText></Grid>
                                    <Grid item>
                                        <Button variant="contained"
                                            sx={{
                                                maxWidth: '15px',
                                                minWidth: '15px',
                                                borderRadius: '2px',
                                                backgroundColor: '#fd580b',
                                                color: 'white',
                                                '&:hover': {
                                                    backgroundColor: '#ff6e40',
                                                }
                                            }}
                                            onClick={handleDecrement}>-</Button>
                                    </Grid>
                                    <Grid item>
                                        <div sx={{ maxWidth: '20px', minWidth: '20px' }}>{quantity}</div>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained"
                                            sx={{
                                                maxWidth: '15px',
                                                minWidth: '15px',
                                                borderRadius: '2px',
                                                backgroundColor: '#fd580b',
                                                color: 'white',
                                                '&:hover': {
                                                    backgroundColor: '#ff6e40',
                                                }
                                            }}
                                            onClick={handleIncrement}>+</Button>
                                    </Grid>
                                    {errorCont && <Typography variant="caption" color="error">{errorCont}</Typography>}

                            </Grid>
                            {<span>Quantity to be donate = {quantity}{itemQuantity.replace(/\d+/g, '')}</span>}
                        </div>   
                    </DialogContent>
                <DialogActions>
                    <form>
                        <Button sx={{
                                borderRadius: '2px',
                                backgroundColor: '#fd580b',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#ff6e40',
                                }
                            }} variant='contained' onClick={() => {
                                handleSubmit();
                            }}>
                                Submit
                        </Button>
                    </form>
                    <DialogActions>
                            <Button sx={{borderRadius: '2px',
                            backgroundColor: '#fd580b',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#ff6e40',
                            }
                            }}variant='contained' onClick={() => {handleCloseFood();}}> Close</Button>
                        </DialogActions> 
                </DialogActions>
            </Dialog>
            <Dialog
      open={PopOpen}
      fullWidth
      maxWidth="sm"
      classes={{ paper: "custom-dialog" }}
      className="dialog"
    >
      <DialogTitle>Donation Successful!!</DialogTitle>
      <DialogContent>
        <div className="image-container">
          {/* Smaller Image */}
          <img
            src="/images/gif/Done2.gif"
            alt="Image"
            className="popup-image"
          />
          {/* Centered text */}
          <div className="thank-you-text">
            <strong>Thank You for your generous donation!!</strong>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        {/* Close button with orange background and white font color */}
        <Button
          onClick={handlePopupClose}
          variant="contained"
          style={{ backgroundColor: "#fd580b", color: "white" }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
{/* filteration of Medicial */}
{filterDataMedical.map(Med => (
                    <Grid item xs={12} sm={6} md={4} key={Med.id}>
                        <Card sx={{
                            maxWidth: 385,
                            padding: '0px',
                            
                            alignContent: 'center',
                            borderRadius: '1rem',
                            transition: 'box-shadow 0.3s',
                            '&:hover': {
                                boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)'
                            }
                        }}>
                        <CardMedia
                                component="img"
                                height="140"
                                image={Med.coverSrc}
                                alt="medical Image"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {Med.title}
                                </Typography>
                                <Typography variant="body2">
                                    Category: {Med.type}
                                </Typography>
                                <Typography variant="body2">
                                    Subcategory: {Med.use}
                                </Typography>  
                                <Box sx={{ width: 350 }}>
                                    <Slider
                                        aria-label="Always visible"
                                        marks={marks}
                                        step={1}
                                        value={parseInt(Med.quantitydonated)}
                                        valueLabelDisplay="on"
                                        valueLabelFormat={(value) => `${value} ${itemQuantity.replace(/\d+/g, '')} already donated`}
                                        min={0}
                                        max={parseInt(Med.quantity)}
                                        onChange={handleChange}
                                        disabled
                                        sx={{
                                            color: '#fd580b',
                                            '& .MuiSlider-track': {
                                                color: '#fd580b',
                                            },
                                            '& .MuiSlider-thumb': {
                                                color: '#fd580b',
                                            },
                                        }}
                                    />
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center' }}>
                                        <Typography
                                                variant="body2"
                                                onClick={() => setVal(parseInt(Med.quantitydonated))}
                                                sx={{ cursor: 'pointer' }}
                                            >
                                                {MIN}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                onClick={() => setVal(parseInt(Med.quantitydonated))}
                                                sx={{ cursor: 'pointer' }}
                                            >
                                                {parseFloat(Med.quantity)}{(Med.quantity).replace(/\d+/g, '')}
                                            </Typography>
                                    </Box>
                                </Box>
                                <Button onClick={() => handleOpenMedicial(Med.title,'Please add the quantity you would like to donate:',
                                    'Donation Process For',Med.quantity,Med.quantitydonated)} variant='outlined' sx={{
                                        borderRadius: '1rem',
                                        color: 'black',
                                        border: '1px solid black',
                                        '&:hover': { bgcolor: '#fd580b', color: 'white', border: '2px solid #fd580b' }
                                    }}>Donate</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                            <Dialog open={openmedical}  fullWidth maxWidth="md">
                            <DialogTitle>{dialogTitle}</DialogTitle>
                        <DialogContent sx={{ display: 'flex', alignItems: 'center', marginRight: '16px' }}>
                        <div sx={{ display: 'flex', alignItems: 'center' }}>
                        <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                                        <DateTimePicker
                                        slotProps={{
                                            textField:({errorDate})=>({color:errorDate===true?'red':'warning'})
                                        }}
                                            label="Select pickup date and time"
                                            viewRenderers={{
                                                hours: renderTimeViewClock,
                                                minutes: renderTimeViewClock,
                                                seconds: renderTimeViewClock,
                                            }}
                                             onChange={() => {
                                                setChooseDateandTime(true);
                                                  seterrorDate(false); // Set errorDate to false when date and time are selected
                                      }}
                                        />
                                 {errorDate && <Typography variant="caption" color="error">You must choose a date and time</Typography>}
                                        <FormControl fullWidth  color='warning'>
                                            <InputLabel id="demo-simple-select-label">Choose  transportation type</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={transportion}
                                                onChange={(event) => {
                                                    setTransportion(event.target.value);
                                                    setChooseTransportion(true);
                                                    seterrorTransportion(false);
                                                }}
                                            >
                                                <MenuItem value="">Select Transportation</MenuItem>
                                                <MenuItem value={10}>Truck</MenuItem>
                                                <MenuItem value={20}>Car</MenuItem>
                                                <MenuItem value={30}>Motorcycle</MenuItem>
                                            </Select>
                                            {errorTransportion && <Typography variant="caption" color="error">You must choose one from the list</Typography>}
                                        </FormControl>
                                    </DemoContainer>
                            <Grid container spacing={1} alignItems="center" >
                                <Grid item><DialogContentText sx={{ marginRight: '16px' }}>{dialogContent}</DialogContentText></Grid>
                                    <Grid item>
                                        <Button variant="contained"
                                            sx={{
                                                maxWidth: '15px',
                                                minWidth: '15px',
                                                borderRadius: '2px',
                                                backgroundColor: '#fd580b',
                                                color: 'white',
                                                '&:hover': {
                                                    backgroundColor: '#ff6e40',
                                                }
                                            }}
                                            onClick={handleDecrement}>-</Button>
                                    </Grid>
                                    <Grid item>
                                        <div sx={{ maxWidth: '20px', minWidth: '20px' }}>{quantity}</div>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained"
                                            sx={{
                                                maxWidth: '15px',
                                                minWidth: '15px',
                                                borderRadius: '2px',
                                                backgroundColor: '#fd580b',
                                                color: 'white',
                                                '&:hover': {
                                                    backgroundColor: '#ff6e40',
                                                }
                                            }}
                                            onClick={handleIncrement}>+</Button>
                                    </Grid>
                                    {errorCont && <Typography variant="caption" color="error">{errorCont}</Typography>}

                            </Grid>
                            {<span>Quantity to be donate = {quantity}{itemQuantity.replace(/\d+/g, '')}</span>}
                        </div>   
                    </DialogContent>
                <DialogActions>
                    <form>
                        <Button sx={{
                                borderRadius: '2px',
                                backgroundColor: '#fd580b',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#ff6e40',
                                }
                            }} variant='contained' onClick={() => {
                                handleSubmit();
                            }}>
                                Submit
                        </Button>
                    </form>
                    <DialogActions>
                            <Button sx={{borderRadius: '2px',
                            backgroundColor: '#fd580b',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#ff6e40',
                            }
                            }}variant='contained' onClick={() => {handleCloseMedicial();}}> Close</Button>
                        </DialogActions> 
                </DialogActions>
            </Dialog>
           
            <Dialog
      open={PopOpen}
      fullWidth
      maxWidth="sm"
      classes={{ paper: "custom-dialog" }}
      className="dialog"
    >
      <DialogTitle>Donation Successful!!</DialogTitle>
      <DialogContent>
        <div className="image-container">
          {/* Smaller Image */}
          <img
            src="/images/gif/Done2.gif"
            alt="Image"
            className="popup-image"
          />
          {/* Centered text */}
          <div className="thank-you-text">
            <strong>Thank You for your generous donation!!</strong>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        {/* Close button with orange background and white font color */}
        <Button
          onClick={handlePopupClose}
          variant="contained"
          style={{ backgroundColor: "#fd580b", color: "white" }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
{/* filteration of stationery components  */}

                {filteredDataStationery.map(stationery => (
                    <Grid item xs={12} sm={6} md={4} key={stationery.id} >
                        <Card sx={{
                            maxWidth: 385,
                            padding: 1,
                            alignContent: 'center',
                            borderRadius: '1rem',
                            transition: 'box-shadow 0.3s',
                            '&:hover': {
                                boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)'
                            }
                        }}>
                        <CardMedia
                                component="img"
                                height="140"
                                image={stationery.img}
                                alt="stationery Image"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {stationery.name}
                                </Typography>
                                <Typography variant="body2">
                                    Category: {stationery.category}
                                </Typography>
                                <Box sx={{ width: 350 }}>
                                <Slider
                                        aria-label="Always visible"
                                        marks={marks}
                                        step={1}
                                        value={parseInt(stationery.quantitydonated)}
                                        valueLabelDisplay="on"
                                        valueLabelFormat={(value) => `${value} ${itemQuantity.replace(/\d+/g, '')} already donated`}
                                        min={0}
                                        max={parseInt(stationery.quantity)}
                                        onChange={handleChange}
                                        disabled
                                        sx={{
                                            color: '#fd580b',
                                            '& .MuiSlider-track': {
                                                color: '#fd580b',
                                            },
                                            '& .MuiSlider-thumb': {
                                                color: '#fd580b',
                                            },
                                        }}
                                    />
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center' }}>
                                        <Typography
                                                variant="body2"
                                                onClick={() => setVal(parseInt(stationery.quantitydonated))}
                                                sx={{ cursor: 'pointer' }}
                                            >
                                                {MIN}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                onClick={() => setVal(parseInt(stationery.quantitydonated))}
                                                sx={{ cursor: 'pointer' }}
                                            >
                                                {parseFloat(stationery.quantity)}{(stationery.quantity).replace(/\d+/g, '')}
                                            </Typography>
                                    </Box>
                                </Box>
                                <Button onClick={() => handleOpenStationery('Please add the quantity you would like to donate:',
                                    'Donation Process For', stationery.name, parseFloat(stationery.quantity),
                                    (stationery.quantity).replace(/S/g, ''), parseInt(stationery.quantitydonated))} variant='outlined' sx={{
                                        borderRadius: '1rem',
                                        color: 'black',
                                        border: '1px solid black',
                                        '&:hover': { bgcolor: '#fd580b', color: 'white', border: '2px solid #fd580b' }
                                    }}>Donate</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Dialog open={openStationery}  fullWidth maxWidth="md">
                <DialogTitle>{dialogTitle}</DialogTitle>
                    <DialogContent sx={{ display: 'flex', alignItems: 'center', marginRight: '16px' }}>
                        <div sx={{ display: 'flex', alignItems: 'center' }}>
                        <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                                        <DateTimePicker
                                        slotProps={{
                                            textField:({errorDate})=>({color:errorDate===true?'red':'warning'})
                                        }}
                                            label="Select pickup date and time"
                                            viewRenderers={{
                                                hours: renderTimeViewClock,
                                                minutes: renderTimeViewClock,
                                                seconds: renderTimeViewClock,
                                            }}
                                             onChange={() => {
                                                setChooseDateandTime(true);
                                                  seterrorDate(false); // Set errorDate to false when date and time are selected
                                      }}
                                        />
                                 {errorDate && <Typography variant="caption" color="error">You must choose a date and time</Typography>}
                                        <FormControl fullWidth  color='warning'>
                                            <InputLabel id="demo-simple-select-label">Choose  transportation type</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={transportion}
                                                onChange={(event) => {
                                                    setTransportion(event.target.value);
                                                    setChooseTransportion(true);
                                                    seterrorTransportion(false);
                                                }}
                                            >
                                                <MenuItem value="">Select Transportation</MenuItem>
                                                <MenuItem value={10}>Truck</MenuItem>
                                                <MenuItem value={20}>Car</MenuItem>
                                                <MenuItem value={30}>Motorcycle</MenuItem>
                                            </Select>
                                            {errorTransportion && <Typography variant="caption" color="error">You must choose one from the list</Typography>}
                                        </FormControl>
                                    </DemoContainer>
                            <Grid container spacing={1} alignItems="center" >
                                <Grid item><DialogContentText sx={{ marginRight: '16px' }}>{dialogContent}</DialogContentText></Grid>
                                    <Grid item>
                                        <Button variant="contained"
                                            sx={{
                                                maxWidth: '15px',
                                                minWidth: '15px',
                                                borderRadius: '2px',
                                                backgroundColor: '#fd580b',
                                                color: 'white',
                                                '&:hover': {
                                                    backgroundColor: '#ff6e40',
                                                }
                                            }}
                                            onClick={handleDecrement}>-</Button>
                                    </Grid>
                                    <Grid item>
                                        <div sx={{ maxWidth: '20px', minWidth: '20px' }}>{quantity}</div>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained"
                                            sx={{
                                                maxWidth: '15px',
                                                minWidth: '15px',
                                                borderRadius: '2px',
                                                backgroundColor: '#fd580b',
                                                color: 'white',
                                                '&:hover': {
                                                    backgroundColor: '#ff6e40',
                                                }
                                            }}
                                            onClick={handleIncrement}>+</Button>
                                    </Grid>
                                    {errorCont && <Typography variant="caption" color="error">{errorCont}</Typography>}

                            </Grid>
                            {<span>Quantity to be donate = {quantity}{itemQuantity.replace(/\d+/g, '')}</span>}
                        </div>   
                    </DialogContent>
                <DialogActions>
                    <form>
                        <Button sx={{
                                borderRadius: '2px',
                                backgroundColor: '#fd580b',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#ff6e40',
                                }
                            }} variant='contained' onClick={() => {
                                handleSubmit();
                            }}>
                                Submit
                        </Button>
                    </form>
                    <DialogActions>
                            <Button sx={{borderRadius: '2px',
                            backgroundColor: '#fd580b',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#ff6e40',
                            }
                            }}variant='contained' onClick={() => {handleCloseStationery();}}> Close</Button>
                        </DialogActions> 
                </DialogActions>
            </Dialog>
            <Dialog
      open={PopOpen}
      fullWidth
      maxWidth="sm"
      classes={{ paper: "custom-dialog" }}
      className="dialog"
    >
      <DialogTitle>Donation Successful!!</DialogTitle>
      <DialogContent>
        <div className="image-container">
          {/* Smaller Image */}
          <img
            src="/images/gif/Done2.gif"
            alt="Image"
            className="popup-image"
          />
          {/* Centered text */}
          <div className="thank-you-text">
            <strong>Thank You for your generous donation!!</strong>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        {/* Close button with orange background and white font color */}
        <Button
          onClick={handlePopupClose}
          variant="contained"
          style={{ backgroundColor: "#fd580b", color: "white" }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            {noResults && <img src={NoResultsGIF} alt="No Results"style={{ width: '100%', maxWidth: '500px' }} />}            
            </div>
        </div>
        </LocalizationProvider>
        </div>
    );
}
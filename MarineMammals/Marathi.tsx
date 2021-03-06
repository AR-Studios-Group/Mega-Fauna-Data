import { IDatabaseEntry } from '../../src/Interface/Interface'

const data: any[] = [
    {   
        scientific_name: "डुगॉन्ग डगॉन्ग" ,
        image_path: "Dugong" ,
        local_name: "दुगोंग" ,
        IUCN_status: "VU" ,
        description: "समुद्राच्या गवतावर कुरवाळण्यासाठी दंडगोलाकार आणि नळीसारखे डोके खाली वाकलेले असते. खोड कंबरेच्या भागात सर्वात रुंद असते आणि मागे अरुंद होऊन शेपूट तयार होतो, जो आडवा आणि अर्धचंद्राच्या आकाराचा असतो. त्यांच्याकडे एक विलक्षण पृष्ठभाग आहे जेथे फक्त पृष्ठीय पृष्ठभाग आणि एक मंद झटका कधीकधी दृश्यमान असतो आणि एक फ्लूक जो डुबकी मारण्यापूर्वी दिसून येतो." ,
        size: "जन्माच्या वेळी लांबी: 1-1.3m, प्रौढ लांबी: 2.5-2.7m, प्रौढ वजन: 570 Kg" ,
        colour_pattern: "गलिच्छ तपकिरी राखाडी" ,
        dorsal_fin: "त्यांना पृष्ठीय पंख नसतात" ,
        teeth_count: "जबड्याच्या प्रत्येक चतुर्थांश भागावर सहा दात, वरच्या जबड्यावर एक कात टाकणारे जे पुरुषांमध्ये दात म्हणून बाहेर पडतात" ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "रहिवासी लोकसंख्या" ,
        habitat_preferance: "डुगॉन्ग्स उथळ, आश्रयस्थान असलेल्या किनारपट्टीच्या पाण्यात राहतात जेथे समुद्राच्या गवताचे बेड आहेत भारतात सध्याचे वितरण कच्छचे आखात, पाल्क बे, मन्नारचे आखात आणि अंदमान आणि निकोबार बेटे आहे." ,
        type: "Marine Mammals" ,
    },
    {           
        scientific_name: "Megaptera novaeangliae" ,
        image_path: "Humpback-Whale" ,
        local_name: "कुबड आलेला मनुष्य असं" ,
        IUCN_status: "LC" ,
        description: "इतर rorquals पेक्षा अधिक मजबूत शरीर. डोक्याचा वरचा भाग चपटा आणि रिजशिवाय अनेक मांसल नॉब्सने झाकलेला असतो. खालच्या जबडयाच्या टोकावर एक गोलाकार प्रक्षेपण आहे. वरून, डोके रुंद आणि गोलाकार आहे. घशातील खोबणींची संख्या 14 ते 35 आहे, नाभीपर्यंत पसरलेली आहे. फ्लिपर्स खूप लांब असतात, शरीराच्या एकूण लांबीच्या सुमारे एक तृतीयांश मोजतात. ते knobs किंवा अडथळे सह scalloped आहेत. ते झुंड क्रस्टेशियन्स आणि शोलिंग मासे खातात." ,
        size: "जन्माच्या वेळी लांबी: 4.3m, प्रौढ लांबी: 11-17m, प्रौढ वजन: 40000 Kg" ,
        colour_pattern: "काळा किंवा राखाडी, घसा आणि पोटावर पांढरा भाग. फ्लिपर्स खाली पांढऱ्या असतात, कधी कधी वरही असतात." ,
        dorsal_fin: "पृष्ठीय पंख शेपटीच्या फ्ल्यूक नॉचपासून शरीराच्या लांबीच्या एक तृतीयांशपेक्षा कमी स्थित असतो. तो लहान आणि त्रिकोणी किंवा मोठा आणि सिकल-आकाराचा असू शकतो, त्यात वारंवार एक पायरी किंवा कुबड समाविष्ट असते, ज्यामुळे प्रजातीला त्याचे सामान्य नाव मिळते." ,
        teeth_count: null,
        baleen_plate: "350-370 जोड्या" ,
        throat_grooves: "घशातील खोबणींची संख्या 14 ते 35 आहे, नाभीपर्यंत पसरलेली आहे" ,
        seasonal_movement: "अरबी समुद्रात" ,
        habitat_preferance: " किनारी आणि महाद्वीपीय शेल्फ-एज पाण्यात आढळतात" ,
        type: "Marine Mammals" ,
    },
    {           
        scientific_name: "बॅलेनोप्टेरा मस्कुलस" ,
        image_path: "Blue-Whale" ,
        local_name: "निळा देवमासा" ,
        IUCN_status: "EN" ,
        description: "एक विस्तीर्ण 'U' आकाराचे डोके एकाच मध्यवर्ती रिजसह बाजूंनी सपाट दिसते. धक्का स्तंभीय आहे." ,
        size: "जन्माच्या वेळी लांबी: 7-8m, प्रौढ लांबी: 25-29m, प्रौढ वजन: 72000-135000 Kg" ,
        colour_pattern: "मोटलिंगसह निळसर राखाडी." ,
        dorsal_fin: "रोस्ट्रमच्या टोकापासून मार्गाच्या 3/4व्या बाजूला खूप लहान पृष्ठीय पंख" ,
        teeth_count: null,
        baleen_plate: "बेलीनच्या 260-400 जोड्या" ,
        throat_grooves: "70-118 (बहुतेक 90-95) व्हेंट्रल प्लीट्स जवळजवळ नाभीपर्यंत" ,
        seasonal_movement: "अरबी समुद्र - बंगालचा उपसागर" ,
        habitat_preferance: "खुल्या-महासागराच्या प्रजाती, खाण्यासाठी आणि शक्यतो प्रजननासाठी किनाऱ्याजवळ दिसतात. अरबी समुद्रात कदाचित पिग्मी ब्लू व्हेल देखील आहे." ,
        type: "Marine Mammals" ,
    },
    {           
        scientific_name: "बालेनोप्टेरा एडेनी" ,
        image_path: "Bryde’s-Whale" ,
        local_name: "ब्राइड्स व्हेल" ,
        IUCN_status: "LC" ,
        description: "सरळ अनुगामी कडा असलेल्या रुंद फ्ल्यूकसह गोंडस शरीर आहे. रोस्ट्रमवर तीन कड्यांसह एक टोकदार डोके. धक्का स्तंभीय किंवा बदलत्या उंचीसह झुडूप आहे." ,
        size: "जन्माच्या वेळी लांबी: 4m, प्रौढ लांबी: 15-16.5m, प्रौढ वजन: 40000 Kg" ,
        colour_pattern: "गडद राखाडी" ,
        dorsal_fin: " रोस्ट्रमच्या टोकापासून मार्गाच्या 3/4व्या अंतरावर उंच आणि फाल्केट पृष्ठीय पंख" ,
        teeth_count: null,
        baleen_plate: "बेलीनच्या 250-370 जोड्या" ,
        throat_grooves: "40- 70 (अरबी समुद्रासाठी 42-54) वेंट्रल प्लीट्स नाभीपर्यंत किंवा त्यापलीकडे" ,
        seasonal_movement: "रहिवासी लोकसंख्या" ,
        habitat_preferance: "किनार्" ,
        type: "Marine Mammals" ,
    },
    {           
        scientific_name: "बालेनोप्टेरा ओमुराई" ,
        image_path: "Omura's-Whale" ,
        local_name: "ओमुरा व्हेल" ,
        IUCN_status: "DD" ,
        description: "एकल प्रमुख मध्यवर्ती रिजसह 'V' आकाराचे डोके असलेले लहान आणि सुव्यवस्थित शरीर आहे. फिकट रंगाचे अनियमित शेवरॉन दोन्ही बाजूंच्या पृष्ठीय पंखाच्या आधी आढळतात आणि उजवा शेवरॉन अधिक ठळक असतो. उजव्या बाजूला 2-3 पट्टे डोळ्यावर पाठीपर्यंत दुभाजक असलेली एक सुस्पष्ट झगमगाट. उजवा खालचा जबडा पांढरा आहे. फ्लिपेसर आणि आतील पृष्ठभागाच्या आधीच्या कडा पांढर्या असतात. फ्ल्यूक सरळ मागच्या काठासह रुंद आहे." ,
        size: "जन्माच्या वेळी लांबी: 3.5-4m, प्रौढ लांबी: 9.6-11.5m, प्रौढ वजन: 20000 Kg" ,
        colour_pattern: "गडद पृष्ठीय आणि हलक्या वेंट्रल बॉडीसह दोन-टोन्ड बॉडी कलरिंग." ,
        dorsal_fin: "एक अत्यंत फाल्केट आणि बॅकस्वेप्ट पृष्ठीय पंख पृष्ठभागावर ब्लोहोलसह दृश्यमान आहे हा पंख रोस्ट्रमच्या टोकापासून 3/4थ्यापेक्षा जास्त आहे" ,
        teeth_count: null,
        baleen_plate: "लहान आणि रुंद बॅलीनच्या 180-210 जोड्या, समोर पिवळा पांढरा आणि मागे काळा" ,
        throat_grooves: "80-90 वेंट्रल प्लीट्स नाभीच्या पलीकडे पसरतात" ,
        seasonal_movement: "अज्ञात" ,
        habitat_preferance: "202m पर्यंत उथळ महाद्वीपीय शेल्फ् 'चे अव रुप जवळच्या किनाऱ्यावर आढळते" ,
        type: "Marine Mammals" ,
    },
    {           
        scientific_name: "मेसोप्लोडॉन पॅसिफिकस" ,
        image_path: "Longman's-Beaked-Whale" ,
        local_name: "लाँगमॅनची चोची असलेली व्हेल" ,
        IUCN_status: "DD" ,
        description: "ठळक चोच असलेले सडपातळ शरीर आणि चोच आणि खरबूज यांच्यामध्ये क्रीझ असलेले कपाळ पसरलेले असते. रेषीय रेक चिन्ह नाहीत आणि फ्लूक्सला खाच नाही. फ्लिपर्स लहान बोथट आहेत. ब्लोहोलची टोके समोरच्या दिशेने निर्देशित करतात." ,
        size: "जन्माच्या वेळी लांबी: 2.9m, प्रौढ लांबी: 6.5m, प्रौढ वजन: Unknown" ,
        colour_pattern: "पृष्ठीय शरीर राखाडी ते तपकिरी राखाडी असते तर बाजू, पोट आणि डोके हलके रंगाचे असतात. बर्याचदा, कुकी कटर शार्कच्या शरीरावर पांढरे डाग दिसतात." ,
        dorsal_fin: "मागच्या मध्यबिंदूच्या मागे तुलनेने उंच आणि फाल्केट पृष्ठीय पंख" ,
        teeth_count: "हिरड्यांमध्ये एकच दात आणि बाहेर दिसत नाही" ,
        baleen_plate: null,
        throat_grooves: "व्ही-आकार d घसा खोबणी उपस्थित" ,
        seasonal_movement: "अज्ञात" ,
        habitat_preferance: "खोल महासागरात ऑफशोअर सापडले" ,
        type: "Marine Mammals" ,
    },
    {           
        scientific_name: "मेसोप्लोडॉन हॉटौला" ,
        image_path: "Deraniyagala’s-Beaked-Whale" ,
        local_name: "Deraniyagala च्या beaked व्हेल" ,
        IUCN_status: "DD" ,
        description: "स्पिंडल आकाराचे शरीर आणि लहान अरुंद फ्लिपर्स आहेत. मुखरेखा त्याच्या संपूर्ण लांबीच्या बाजूने वक्र आहे, मागील बाजूस कमानदार आहे. हळुवारपणे वरचे कपाळ आहे आणि ब्लोहोल एक चंद्रकोर आहे ज्याचे टोक पुढे निर्देशित करतात." ,
        size: "जन्माच्या वेळी लांबी: 2m, प्रौढ लांबी: 3.9-4.8m, प्रौढ वजन: Unknown" ,
        colour_pattern: "पांढर्" ,
        dorsal_fin: "रोस्ट्रमच्या टोकापासून मार्गाचा 2/3रा भाग लहान फाल्केट पृष्ठीय पंख" ,
        teeth_count: "केवळ प्रौढ पुरुषांच्या खालच्या जबड्यातच पुढे निर्देशित केलेल्या शंकूच्या आकाराच्या टस्कची एक जोडी फुटते" ,
        baleen_plate: null,
        throat_grooves: " व्ही-आकाराच्या गळ्यातील खोबणी उपस्थित" ,
        seasonal_movement: "अज्ञात" ,
        habitat_preferance: "वितरण अज्ञात परंतु खोल पाण्यात ऑफशोअर आढळले" ,
        type: "Marine Mammals" ,
    },
    {           
        scientific_name: "मेसोप्लोडॉन जिन्कगोडेन" ,
        image_path: "Ginkgo-Toothed-Beaked-Whale" ,
        local_name: "जिन्कगो-दात असलेली चोची असलेली व्हेल" ,
        IUCN_status: "DD" ,
        description: "लहान अरुंद फ्लिपर्ससह स्पिंडल आकाराचे शरीर आहे. पुरुषांमध्ये कमानदार तोंडाची रेषा असलेले एक लहान डोके." ,
        size: "जन्माच्या वेळी लांबी: 2-2.5m, प्रौढ लांबी: 5.3m, प्रौढ वजन: Unknown" ,
        colour_pattern: "गडद राखाडी ते काळ्या रंगाच्या पांढऱ्या टिपांसह. प्रौढांमध्ये पांढरे डाग." ,
        dorsal_fin: "रोस्ट्रमच्या टोकापासून 2/3रा भाग लहान पृष्ठीय पंख" ,
        teeth_count: "खालच्या जबड्याच्या मध्यभागी रुंद, चपटे एस-आकाराचे टस्क जे फक्त प्रौढ पुरुषांमध्ये फुटतात." ,
        baleen_plate: null,
        throat_grooves: "गळ्यातील खोबणीची एक जोडी उपस्थित आहे" ,
        seasonal_movement: "अज्ञात" ,
        habitat_preferance: "वितरण अज्ञात आहे; ऑफशोअर खोल पाण्यात आढळतात" ,
        type: "Marine Mammals" ,
    },
    {           
        scientific_name: "झिफिअस कॅविरोस्ट्रिस" ,
        image_path: "Cuvier's-Beaked-Whale" ,
        local_name: "कुव्हियरची चोची असलेली व्हेल" ,
        IUCN_status: "LC" ,
        description: "लहान चोच आणि लहान अरुंद फ्लिपर्ससह स्पिंडल आकाराचे शरीर आहे. एक गुळगुळीत उतार असलेला कपाळ (पुरुष खरबूजाचा आकार दर्शवितो) आणि त्याच्या संपूर्ण लांबीच्या बाजूने वक्र असलेली अवतलता मुखरेषा असते." ,
        size: "जन्माच्या वेळी लांबी: 2.7m, प्रौढ लांबी: 6-7m, प्रौढ वजन: 3000 Kg" ,
        colour_pattern: "राखाडी ते हलका गंजलेला तपकिरी, कुकी कटरच्या चट्टे आणि रेकच्या खुणा सर्वत्र. पुरुषांच्या डोक्यावर आणि पाठीच्या वरच्या बाजूला जास्त पांढरे असतात." ,
        dorsal_fin: "रोस्ट्रमच्या टोकापासून मार्गाचा 2/3रा भाग लहान फाल्केट पृष्ठीय पंख" ,
        teeth_count: "प्रौढ पुरुषांच्या खालच्या जबड्याच्या टोकाला शंकूच्या आकाराचे दातांची एक जोडी फुटते." ,
        baleen_plate: null,
        throat_grooves: "V-आकाराच्या गळ्यातील खोबणीची जोडी उपस्थित आहे" ,
        seasonal_movement: "अज्ञात" ,
        habitat_preferance: "महाद्वीपीय उतारांच्या जवळ समुद्रात आणि खोल पाण्यात आढळले" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "मेसोप्लोडॉन डेन्सिरोस्ट्रिस" ,
        image_path: "Blainville's-Beaked-Whale" ,
        local_name: "Blainville's Beaked Whale" ,
        IUCN_status: "LC" ,
        description: "चंद्रकोर आकाराचे ब्लोहोल असलेले स्पिंडल आकाराचे शरीर आहे जे आधीच्या टोकाला टिकून आहे. शेपटीचे फ्लूक्स मध्यम खाच नसलेले निमुळते आहेत आणि फ्लिपर्स लहान आणि अरुंद आहेत. पाठीमागचे टोक उच्च कमानदार असल्याने मुखरेखा वेगळी आहे; पुरुषांमध्ये ही कमान खूप रुंद आणि चौरस असते. गाल वरच्या जबड्याच्या वर येऊ शकतात आणि खरबूज सपाट दिसतो." ,
        size: "जन्माच्या वेळी लांबी: 2-2.5m, प्रौढ लांबी: 4.7m, प्रौढ वजन: 1033 Kg" ,
        colour_pattern: "कुकी कटर आणि रेकच्या खुणांद्वारे पांढरे डाग असलेले राखाडी ते तपकिरी राखाडी." ,
        dorsal_fin: "रोस्ट्रमच्या टोकापासून मार्गाचा 2/3रा भाग लहान पृष्ठीय पंख" ,
        teeth_count: "एक जोडी तोंडातून बाहेर पडते." ,
        baleen_plate: null,
        throat_grooves: "गळ्यातील खोबणीची एक जोडी उपस्थित आहे" ,
        seasonal_movement: "अज्ञात" ,
        habitat_preferance: "ऑफशोअर खोल पाण्यात 200 मीटर किंवा त्याहून अधिक आढळतात" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "फिसेटर मॅक्रोसेफलस" ,
        image_path: "Sperm-Whale" ,
        local_name: "स्पर्म व्हेल" ,
        IUCN_status: "VU" ,
        description: "दात असलेल्या सिटेशियन्सपैकी सर्वात मोठे, शरीरावर सुरकुत्या असतात. डोके शरीराच्या लांबीच्या 1/3 भाग बनवते आणि बाजूने चौरस दिसते. खालचा जबडा वरच्या जबड्याच्या तुलनेत खूपच अरुंद असतो आणि त्याला दात असतात. वरच्या जबड्याला दात नसतात. एकच एस-आकाराचे ब्लोहोल डोक्याच्या थोडे डावीकडे ठेवलेले असते/ फ्लिपर्स लहान आणि स्पॅटुला आकाराचे असतात. फ्लूक सरळ अनुगामी काठासह रुंद आहे आणि त्याला अनेक खाच आहेत. धक्का झुडूपयुक्त आहे आणि डावीकडे पुढे कोन आहे." ,
        size: "जन्माच्या वेळी लांबी: 35-45m, प्रौढ लांबी: 12.5-19.2m, प्रौढ वजन: 57000 Kg" ,
        colour_pattern: "काळा ते तपकिरी राखाडी" ,
        dorsal_fin: "कमी नॉबी डोर्सल फिन" ,
        teeth_count: "खालच्या जबड्यात 18-26 जोड्या दात असतात." ,
        baleen_plate: null,
        throat_grooves: "2-10 लहान घशातील खोबणी" ,
        seasonal_movement: "अज्ञात" ,
        habitat_preferance: "महाद्वीपीय उताराजवळ, 1000m पेक्षा खोल पाण्यात आणि किनार्" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "कोगिया सिमा" ,
        image_path: "Dwarf-Sperm-Whale" ,
        local_name: "बटू स्पर्म व्हेल" ,
        IUCN_status: "LC" ,
        description: "शार्कसारखे डोके आणि लहान अरुंद खालचा जबडा असलेले मजबूत शरीर आहे. ब्लोहोल रोस्ट्रमच्या टोकापासून सुमारे 10% अंतरावर स्थित आहे. डोळ्याच्या मागे एक खूण आहे जी खोटी गिल स्लिटसारखी दिसते आणि लहान फ्लिपर्स डोक्याच्या जवळ ठेवलेले असतात." ,
        size: "जन्माच्या वेळी लांबी: 1m, प्रौढ लांबी: 2.5-2.7m, प्रौढ वजन: 272 Kg" ,
        colour_pattern: "वरच्या बाजूला गडद राखाडी ते तपकिरी काळा. डोळ्याच्या मागे एक खूण जी खोटी गिल फाटल्यासारखी दिसते." ,
        dorsal_fin: "पाठीच्या मध्यभागी उंच फॅल्केट पृष्ठीय पंख" ,
        teeth_count: "खालच्या जबड्यात 7-12 जोड्या दात असतात; वरच्या जबड्यात कधीकधी 3 जोड्या दात असतात" ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "अज्ञात" ,
        habitat_preferance: "ऑफशोअर पाण्यात आढळतात" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "कोगिया ब्रेव्हिसेप्स" ,
        image_path: "Pygmy-Sperm-Whale" ,
        local_name: "पिग्मी स्पर्म व्हेल" ,
        IUCN_status: "LC" ,
        description: "मजबूत शरीर; डोळ्याच्या मागे एक खूण जे खोट्या गिल स्लिटसारखे दिसते; शार्कसारखे डोके; लहान आणि अरुंद खालचा जबडा; डोक्याच्या जवळ लहान फ्लिपर्स; ब्लोहोल आणि डोर्सल फिनमध्ये थोडासा कुबडा असतो; ब्लोहोल रोस्ट्रमच्या टोकापासून 10% दूर स्थित आहे." ,
        size: "जन्माच्या वेळी लांबी: 1.2m, प्रौढ लांबी: 2.7-3.9m, प्रौढ वजन: 450 Kg" ,
        colour_pattern: "वरच्या बाजूला गडद राखाडी ते तपकिरी काळा. डोळ्याच्या मागे एक खूण जी खोटी गिल फाटल्यासारखी दिसते." ,
        dorsal_fin: "पाठीच्या मध्यभागी विहीर मागे लहान वक्र पृष्ठीय पंख" ,
        teeth_count: "खालच्या जबड्यात 10-16 जोड्या दात असतात" ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "अज्ञात" ,
        habitat_preferance: "महाद्वीपीय उतारावर आणि खोल पाण्यात आढळणारे बौने शुक्राणू व्हेलसारखे सामान्य नाही" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "ऑर्केला ब्रेव्हिरोस्ट्रिस" ,
        image_path: "Irrawaddy-Dolphin" ,
        local_name: "इरावडी डॉल्फिन" ,
        IUCN_status: "EN" ,
        description: "प्रमुख चोचीशिवाय गोलाकार थूथन आहे. फ्लिपर्स मोठे आणि पॅडलच्या आकाराचे असतात आणि प्रौढांमध्ये गळ्यात गळ असते." ,
        size: "जन्माच्या वेळी लांबी: 1m, प्रौढ लांबी: 2.5m, प्रौढ वजन: 130Kg" ,
        colour_pattern: "स्टील राखाडी" ,
        dorsal_fin: "शरीराच्या मध्यबिंदूच्या अगदी मागे पृष्ठीय पंखासारखी गाठ" ,
        teeth_count: "वरचा जबडा 8-19 जोड्या दात, खालचा जबडा 13-14 दात" ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "अज्ञात" ,
        habitat_preferance: "किनार्यावरील पाणी, सरोवर, मुहाने आणि नद्यांमध्ये आढळतात भारतातील सध्याच्या वितरणामध्ये चिलिका सरोवर, उत्तर ओरिसा आणि पश्चिम बंगालच्या किनारी पाण्याचा समावेश आहे, ज्यात भितरकनिका आणि सुंदरबन यांचा समावेश आहे" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "ग्लोबिसेफला मॅक्रोरिंचस" ,
        image_path: "Short-Finned-Pilot-Whale" ,
        local_name: "शॉर्ट-फिन्ड पायलट व्हेल" ,
        IUCN_status: "LC" ,
        description: "काळ्या-माश्यांपैकी एक, पायलट व्हेलच्या शरीराच्या पुढील अर्ध्या भागात एक प्रॉमिमेंट पृष्ठीय पंख असतो. थूथन प्रौढांमध्" ,
        size: "जन्माच्या वेळी लांबी: 1.4-1.9m, प्रौढ लांबी: 5.5-7.2m, प्रौढ वजन: 3600 Kg" ,
        colour_pattern: "काळा ते तपकिरी राखाडी. यात चेसवर अँकरच्या आकाराचा हलका पॅच आहे आणि डोर्सल फिनच्या पायथ्यापासून दोन दोन हलक्या पट्ट्या डोळ्याकडे पडत असलेल्या ब्लो होलभोवती आहेत. पृष्ठीय पंखाच्या मागे हलक्या रंगाचा सॅडल नमुना असतो." ,
        dorsal_fin: "पृष्ठीय पंखाच्या मागे हलक्या रंगाचा खोगीर नमुना; मोठा गोलाकार पृष्ठीय पंख, खालचा आणि मागच्या मध्यबिंदूच्या अगदी समोर" ,
        teeth_count: "प्रत्येक जबड्यात 7-9 जोड्या दात असतात." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "अज्ञात" ,
        habitat_preferance: "खोल ऑफशोअर पाण्यात आणि समुद्रातील बेटांच्या आसपास आढळतात जेथे जवळील पाणी खोल आहे" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "ऑर्सिनस ऑर्का" ,
        image_path: "Killer-Whale" ,
        local_name: "किलर व्हेल" ,
        IUCN_status: "DD" ,
        description: "सर्वात मोठ्या डॉल्फिनचे शरीर मजबूत असते, एक ठळक चोच नसलेली बोथट थुंकी आणि उंच पृष्ठीय पंख असतात." ,
        size: "जन्माच्या वेळी लांबी: 2.1-2.6m, प्रौढ लांबी: 8.5-9.8m, प्रौढ वजन: 7500-10000 Kg" ,
        colour_pattern: "पृष्ठीय पंखाच्या मागे हलक्या रंगाच्या खोगीने काळा-पांढरा रंगाचा नमुना ओळखणे सोपे आहे." ,
        dorsal_fin: "त्याच्या खूप मोठ्या त्रिकोणी ताठ पृष्ठीय पंखाने सहज ओळखता येतो (पुरुष पृष्ठीय पंख 2 मीटरपेक्षा जास्त उंच; मादींचा वक्र पंख 09 मीटर उंच असतो)" ,
        teeth_count: "प्रत्येक जबड्यात 10-14 जोड्या दात असतात." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "अज्ञात" ,
        habitat_preferance: "कॉस्मोपॉलिटन प्रजाती सहसा जवळ आणि समुद्रकिनाऱ्यावर दिसतात" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "स्यूडोर्का क्रॅसिडेन्स" ,
        image_path: "False-Killer-Whale" ,
        local_name: "खोट्या किलर व्हेल" ,
        IUCN_status: "NT" ,
        description: "गोलाकार थूथन आणि हळूवारपणे उतार असलेला खरबूज असलेले लांब सडपातळ शरीर आहे. चोच प्रमुख नाही. फ्लिपर्स लांब असतात आणि पुढच्या काठावर थोडासा कुबडा असतो आणि त्यांना S-आकार देतात." ,
        size: "जन्माच्या वेळी लांबी: 1.5-2.1m, प्रौढ लांबी: 5-6m, प्रौढ वजन: 2000 Kg" ,
        colour_pattern: "छाती आणि पोटावर हलका राखाडी पॅच असलेला काळा ते राखाडी काळा. खूप फिकट केप गुटगुटीत निमुळता होत आहे." ,
        dorsal_fin: "पाठीच्या मध्यबिंदूवर, पृष्ठीय पंख उंच, गोलाकार टीपासह फॅकेट आहे" ,
        teeth_count: "प्रत्येक जबड्यात 7-12 जोड्या दात असतात." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "अज्ञात" ,
        habitat_preferance: "खोल ऑफशोअर पाण्यात आणि समुद्रातील बेटांच्या आसपास आढळतात जेथे जवळील पाणी खोल आहे" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "फेरेसा अटेनुआटा" ,
        image_path: "Pygmy-Killer-Whale" ,
        local_name: "पिग्मी किलर व्हेल" ,
        IUCN_status: "LC" ,
        description: "लांब शरीर आहे, पृष्ठीय पंखापूर्वी मजबूत आणि नंतर सडपातळ आहे. थुंकी एका तिरक्या खरबूजाने गोलाकार आहे. चोच प्रमुख नाही. फ्लिपर्स गोलाकार टिपांसह लांब आहेत." ,
        size: "जन्माच्या वेळी लांबी: 80cm, प्रौढ लांबी: 2.6m, प्रौढ वजन: 225 Kg" ,
        colour_pattern: "काळे ते राखाडी काळे.ओठ आणि चोचीचे टोक पांढरे असतात. पृष्ठीय पंखाखाली एक हलका राखाडी केप ठळकपणे ठळकपणे दिसतो." ,
        dorsal_fin: "पृष्ठीय पंख उंच आहे, पाठीच्या मध्यबिंदूवर कमी कोनात वाढणारा फाल्केट" ,
        teeth_count: "वरचा जबडा 8-11 जोड्या दात आणि खालचा जबडा 11-13 जोड्या" ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "अज्ञात" ,
        habitat_preferance: "खोल ऑफशोअर पाण्यात आणि समुद्रातील बेटांच्या आसपास आढळतात जेथे जवळील पाणी खोल आहे" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "पेपोनोसेफला इलेक्ट्रा" ,
        image_path: "Melon-Headed-Whale" ,
        local_name: "खरबूज-डोके असलेली व्हेल" ,
        IUCN_status: "LC" ,
        description: "लांब सडपातळ शरीर आणि खरबूजासह गोलाकार थूथन आहे. चोचीचा थोडासा इशारा आहे. फ्लिपर्स लांब, टोकदार आणि सिकल आकाराचे असतात." ,
        size: "जन्माच्या वेळी लांबी: 1m, प्रौढ लांबी: 2.6m, प्रौढ वजन: 275 Kg" ,
        colour_pattern: "पांढरे ओठ आणि चोचीच्या टिपांसह राखाडी काळा रंग. पृष्ठीय पंखाखाली एक हलका राखाडी केप डिपिंग (पिग्मी किलर व्हेलपेक्षा जास्त खोलवर) ठळकपणे दिसून येतो. एक फिकट मूत्रजननीय पॅच." ,
        dorsal_fin: "पृष्ठीय पंख उंच आहे, मागील बाजूच्या मध्यबिंदूवर फॅकेट आहे" ,
        teeth_count: "प्रत्येक जबड्यात 20-25 जोड्या दात असतात." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "अज्ञात" ,
        habitat_preferance: "खोल ऑफशोअर पाण्यात आणि समुद्रातील बेटांच्या आसपास आढळतात जेथे जवळील पाणी खोल आहे" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "Grampus griseus" ,
        image_path: "Risso's-Dolphin" ,
        local_name: "रिसोचा डॉल्फिन" ,
        IUCN_status: "LC" ,
        description: "बोथट डोके आणि वरच्या बाजूस उतार असलेली मुखरेषा असलेले एक मजबूत शरीर आहे. खरबूज गोल पेक्षा अधिक चौरस आहे. फ्लिपर्स लांब आणि टोकदार असतात. शरीराच्या पुढच्या भागाच्या तुलनेत शेपटीचा साठा खूपच सडपातळ असतो." ,
        size: "जन्माच्या वेळी लांबी: 1-1.5m, प्रौढ लांबी: 3.8m, प्रौढ वजन: 500 Kg" ,
        colour_pattern: "राखाडी पांढरा, शरीराचा बराचसा भाग दंताळेच्या खुणांद्वारे जड जखमांसह." ,
        dorsal_fin: "पृष्ठीय पंख उंच, सडपातळ, पाठीच्या मध्यभागी ताठ असतो" ,
        teeth_count: "खालच्या जबड्यात 2-7 जोड्या दात असतात आणि वरच्या जबड्यात 1 जोडी दात असतात किंवा एकही नसतो; दात सहसा नेहमी थकलेले असतात." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "अज्ञात" ,
        habitat_preferance: "महाद्वीपीय उतारावर आणि बाह्य शेल्फ् 'चे अव रुप खोलवर आढळले" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "स्टेनो ब्रेडनेन्सिस" ,
        image_path: "Rough-Toothed-Dolphin" ,
        local_name: "उग्र दात असलेला डॉल्फिन" ,
        IUCN_status: "LC" ,
        description: "टोकदार शंकूच्या आकाराचे डोके असलेले एक मजबूत शरीर आहे आणि हलक्या तिरक्या खरबूजाची कोणतीही क्रीज नाही. चोच लांब आहे आणि फ्लिपर्स मोठे आणि टोकदार आहेत." ,
        size: "जन्माच्या वेळी लांबी: 1m, प्रौढ लांबी: 2.65m, प्रौढ वजन: 155 Kg" ,
        colour_pattern: "वरचा राखाडी काळा, गुलाबी पोट आणि बाजूंना एक हलका राखाडी केप जो पृष्ठीय पंखाखाली बुडतो. पोट, ओठ आणि खालचा जबडा पांढऱ्या रंगाचा असतो आणि डोळ्यावर गडद ठिपके असतात." ,
        dorsal_fin: "पृष्ठीय पंख उंच, सडपातळ, पाठीच्या मध्यबिंदूवर ताठ असतो; लांब चोच" ,
        teeth_count: "प्रत्येक जबड्यात 19-28 जोड्या दातांना सुरकुत्या असलेल्या कडा असतात." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "अज्ञात" ,
        habitat_preferance: "खोल महासागराच्या पाण्यात आढळते, भारतीय पाण्यात फारच दुर्मिळ" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "Sousa plumbea" ,
        image_path: "Indian-Ocean-Humpback-Dolphin" ,
        local_name: "हिंदी महासागर हंपबॅक डॉल्फिन" ,
        IUCN_status: "EN" ,
        description: "मजबूत शरीर, मध्यम लॉग चोचीसह. पृष्ठीय पंख पाठीच्या मध्यभागी, कुबड्यावर ठेवलेला असतो आणि म्हणून हे नाव. एक बल्बस खरबूज एक वेगळी क्रीज आणि गोलाकार टिपांसह मोठे फ्लिपर्स आणि फ्लूक्स आहे. प्रौढांना मोठे कुबडे असतात, विशेषत: पुरुषांमध्ये." ,
        size: "जन्माच्या वेळी लांबी: 1m, प्रौढ लांबी: 2.6-2.8m, प्रौढ वजन: 280 Kg" ,
        colour_pattern: "वर राखाडी काळा, गुलाबी पोट. पोट, ओठ आणि खालचा जबडा हलका, ओठ आणि खालचा जबडा आणि चिवट गुलाबी रंगाचा असतो. एक गडद डोळा पॅच आहे." ,
        dorsal_fin: "पृष्ठीय पंख लहान आणि टोकदार असतो जो शरीराच्या मध्यबिंदूच्या अगदी समोर एका मोठ्या कुबड्यावर बसतो" ,
        teeth_count: "वरच्या जबड्यात 33-39 जोड्या दात असतात आणि खालच्या जबड्यात 31-37 जोड्या दात असतात." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "रहिवासी लोकसंख्या" ,
        habitat_preferance: "30 मीटर पेक्षा कमी खोलीच्या किनार्" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "सौसा चिनेन्सिस" ,
        image_path: "Indo-Pacific-Humpback-Dolphin" ,
        local_name: "इंडो-पॅसिफिक हंपबॅक डॉल्फिन" ,
        IUCN_status: "VU" ,
        description: "मजबूत शरीर, मध्यम लॉग चोचीसह. वेगळ्या क्रीजसह एक बल्बस खरबूज आहे. पृष्ठीय पंख पाठीच्या मध्यभागी, कुबड्यावर ठेवलेला असतो आणि म्हणून हे नाव. पंखाखाली हळूवारपणे उतार असलेला कुबडा S plumbea प्रमाणे उच्चारला जात नाही. पंख मागील बाजूच्या मध्यबिंदूवर असतो. गोलाकार टिपांसह फ्लिपर्स आणि फ्लूक्स. प्रौढांमध्ये मोठ्या कुबड्या असतात, विशेषत: पुरुषांमध्ये (प्रौढ पुरुषांचे वजन प्रौढ स्त्रियांपेक्षा तीन पटीने जास्त असते)." ,
        size: "जन्माच्या वेळी लांबी: 1m, प्रौढ लांबी: 2.7m, प्रौढ वजन: 240 Kg" ,
        colour_pattern: "राखाडी गुलाबी, तोंडाभोवती अधिक गुलाबी आणि गुलाबी पोट." ,
        dorsal_fin: "पृष्ठीय पंख लहान आहे" ,
        teeth_count: "वरच्या जबड्यात 32-38 जोड्या दात असतात आणि खालच्या जबड्यात 29-38 जोड्या दात असतात." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "रहिवासी लोकसंख्या" ,
        habitat_preferance: "भारताच्या पूर्व किनार्" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "टर्सिओप्स अॅडनकस" ,
        image_path: "Indo-Pacific-Bottlenose-Dolphin" ,
        local_name: "इंडो-पॅसिफिक बॉटलनोज डॉल्फिन" ,
        IUCN_status: "NT" ,
        description: "बल्बस डोके आणि हलक्या तिरक्या कपाळासह एक मजबूत शरीर आहे. चोच लांब असते आणि खालचा जबडा वरच्या जबड्यापेक्षा थोडा लांब असतो. एक प्रमुख क्रीज उपस्थित आहे. फ्लिपर्स लहान, टोकदार आहेत." ,
        size: "जन्माच्या वेळी लांबी: 85-112cm, प्रौढ लांबी: 2.7m, प्रौढ वजन: 230 Kg" ,
        colour_pattern: "बाजूंना हलक्या राखाडी केपसह शीर्षस्थानी राखाडी आणि पृष्ठीय पंखाच्या दिशेने झगमगाट. वासरांचे पोट गुलाबी रंगाचे असते तर प्रौढांमध्ये तेच काळे रंगाचे असते." ,
        dorsal_fin: "पृष्ठीय पंख विस्तृत पायासह उंच आहे" ,
        teeth_count: "प्रत्येक जबड्यात 21-29 जोड्या दात असतात." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "रहिवासी लोकसंख्या" ,
        habitat_preferance: "जवळच्या पाण्यात आढळतात भारतीय पाण्यात टर्सिओप्स ट्रंकॅटस (सामान्य बॉटलनोज डॉल्फिन) देखील शेल्फवर आढळतात परंतु खोल पाण्यात टी ट्रंकॅटसची चोच लहान असते, अधिक मजबूत शरीर असते, अधिक फाल्केट फिन असते आणि वेंट्रल स्पॉट्स नसतात." ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "स्टेनेला अॅटेनुआटा" ,
        image_path: "Pan-Tropical-Spotted-Dolphin" ,
        local_name: "पॅन-उष्णकटिबंधीय स्पॉट डॉल्फिन" ,
        IUCN_status: "LC" ,
        description: "एक सडपातळ सुव्यवस्थित शरीर आहे ज्यामध्ये एक प्रमुख खरबूज आहे. पृष्ठीय पंख उंच, सडपातळ, मागच्या मध्यभागी असलेल्या टिपांवर गोलाकार असतो. चोच मध्यम लांब आहे, फ्लिपर्स सडपातळ आणि टोकदार आहेत." ,
        size: "जन्माच्या वेळी लांबी: 90cm, प्रौढ लांबी: 2.4-2.6m, प्रौढ वजन: 119 Kg" ,
        colour_pattern: "पॅन्ट्रोपिकल स्पॉटेड डॉल्फिन एकंदरीत राखाडी असतात, वरच्या बाजूस आणि वरच्या बाजूस गडद असतात आणि पोट आणि खालच्या बाजूस हलके असतात. शरीरावर सामान्यतः डाग पडतात, जरी स्पॉटिंग प्रदेशानुसार बदलते, वर पांढरे डाग आणि खाली गडद ठिपके असतात. वय आणि प्रदेशानुसार स्पॉटिंग वाढते. नवजात डाग नसलेल्या डॉल्फिनची पाठ गडद राखाडी असून मऊ कडा आणि हलके पोट असते. समुद्रात, चिन्हांकित लगाम, पृष्ठीय बाजूला एकसमान गडद केप आणि गडद फ्लिपर लाइनची उपस्थिती प्रजाती ओळखण्यात मदत करते." ,
        dorsal_fin: " एक उंच, फाल्केट पृष्ठीय पंख जो मध्यभागी ठेवलेला असतो" ,
        teeth_count: "प्रत्येक जबड्यात 35-40 लहान टोकदार दात असतात." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "रहिवासी लोकसंख्या" ,
        habitat_preferance: "पॅन-उष्णकटिबंधीय स्पॉटेड डॉल्फिन उष्ण पृष्ठभागाच्या उष्ण तापमानासह उष्णकटिबंधीय महासागरांमध्ये आढळतात, किनारी आणि ऑफशोअर दोन्ही प्रदेशांमध्ये किनारपट्टीचे स्वरूप सामान्यतः समुद्रकिनाऱ्यावर राहणाऱ्यांपेक्षा मोठे आणि जास्त प्रमाणात आढळतात." ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "स्टेनेला लाँगिरोस्ट्रिस" ,
        image_path: "Spinner-Dolphin" ,
        local_name: "स्पिनर डॉल्फिन" ,
        IUCN_status: "DD" ,
        description: "हलक्या तिरक्या कपाळासह अतिशय सडपातळ शरीर आहे. एक क्रीज उपस्थित आहे आणि चोच खूप लांब आहे. फ्लिपर्स सडपातळ आणि टोकदार असतात." ,
        size: "जन्माच्या वेळी लांबी: 75-80cm, प्रौढ लांबी: 1.5-2.3m, प्रौढ वजन: 82 Kg" ,
        colour_pattern: "वरचा राखाडी काळा, बाजूने एक हलका राखाडी पट्टा आणि पांढरा पोट (त्रिपक्षीय नमुना). डोळ्यापासून क्रीजपर्यंत आणि डोळ्यापासून फ्लिपरपर्यंत गडद डोळ्याची पट्टी. वरची चोच गडद असते आणि खालची चोच पांढरी असते आणि वरच्या चोचीपर्यंत काळ्या रंगाची असते." ,
        dorsal_fin: "पृष्ठीय पंख उंच, सडपातळ, पाठीच्या मध्यभागी ताठ असतो" ,
        teeth_count: "प्रत्येक जबड्यात 40-62 जोड्या दात असतात (बटू स्पिनर डॉल्फिनच्या प्रत्येक जबड्यात 41-52 जोड्या दात असतात)" ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "रहिवासी लोकसंख्या" ,
        habitat_preferance: "खोल ऑफशोअर पाण्यात आणि समुद्रातील बेटांच्या आसपास आढळतात जेथे जवळील पाणी खोल आहे" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "स्टेनेला कोएरुलिओआल्बा" ,
        image_path: "Striped-Dolphin" ,
        local_name: "पट्टे असलेला डॉल्फिन" ,
        IUCN_status: "LC" ,
        description: "शरीर इतर स्टेनेलासारखे सडपातळ नाही. त्यांचे कपाळ हळुवारपणे तिरके असते आणि मध्यम लांबीची चोच असते. फ्लिपर्स सडपातळ आणि टोकदार असतात आणि एक क्रीज असते." ,
        size: "जन्माच्या वेळी लांबी: 93-100cn, प्रौढ लांबी: 2.56m, प्रौढ वजन: 155 Kg" ,
        colour_pattern: "गडद केपसह वर राखाडी काळा. पृष्ठीय पंखाच्या पुढील बाजूस एक झगमगाट असलेल्या बाजूला हलका राखाडी. डोळ्यापासून गुदद्वारापर्यंत आणि डोळ्यापासून फ्लिपरपर्यंत एक गडद पट्टा असतो, वरची चोच गडद असते आणि खालची चोच काळ्या रंगाची असते." ,
        dorsal_fin: "पाठीच्या मध्यबिंदूवर विस्तृत पायासह पृष्ठीय पंख त्रिकोणी असतो" ,
        teeth_count: "प्रत्येक जबड्यात 40-55 जोड्या दात असतात." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "अज्ञात" ,
        habitat_preferance: "समुद्राच्या खोल पाण्यात आढळतात" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "डेल्फिनस कॅपेन्सिस ट्रॉपिकलिस" ,
        image_path: "Indo-Pacific-Common-Dolphin" ,
        local_name: "इंडो-पॅसिफिक सामान्य डॉल्फिन" ,
        IUCN_status: "LC" ,
        description: "हलक्या तिरक्या कपाळासह आणि एक प्रमुख क्रीजसह अतिशय सडपातळ शरीर आहे. त्यांची चोच खूप लांब असते आणि फ्लिपर्स लांब, बारीक आणि टोकदार असतात." ,
        size: "जन्माच्या वेळी लांबी: 80-100cm, प्रौढ लांबी: 2.6m, प्रौढ वजन: 235 Kg" ,
        colour_pattern: "वर राखाडी काळा, पृष्ठीय पंखाखाली व्ही-आकाराच्या तासाच्या काचेच्या पॅटर्नसह फिकट पांढरे पोट आणि फ्लिपरच्या वर पिवळा झगमगाट." ,
        dorsal_fin: "पृष्ठीय पंख उंच, सडपातळ, फाल्केट आणि पाठीच्या मध्यबिंदूवर असतो" ,
        teeth_count: "वरच्या जबड्यात 54-67 जोड्या दात असतात आणि खालच्या जबड्यात 52-64 जोड्या दात असतात." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "अज्ञात" ,
        habitat_preferance: "महाद्वीपीय शेल्फच्या खोल पाण्यात आणि उतारावर, कधी कधी जवळ-किनाऱ्याच्या खोल पाण्यात आढळतात" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "लागेनोडेल्फीस होसी" ,
        image_path: "Fraser's-Dolphin" ,
        local_name: "फ्रेझरचा डॉल्फिन" ,
        IUCN_status: "LC" ,
        description: "हलक्या तिरक्या कपाळासह, एक प्रमुख क्रीजसह एक अतिशय साठा शरीर आहे. खरबूज आणि चोच दरम्यान. चोच स्वतःच लहान आणि खुंटलेली असते फ्लिपर्स लांब असतात आणि टोकांवर टोकदार असतात फ्लूकच्या मागच्या कडा स्पष्टपणे अवतल असतात" ,
        size: "जन्माच्या वेळी लांबी: 1-1.1m, प्रौढ लांबी: 2.6-2.7m, प्रौढ वजन: 210 Kg" ,
        colour_pattern: "गुलाबी पोट आणि चेहऱ्यापासून गुद्द्वारापर्यंत हलका राखाडी पट्टा असलेला राखाडी. खालच्या जबड्याच्या मध्यापासून फ्लिपरपर्यंत राखाडी पट्टी दिसते तर खरबूजाच्या शिखरापासून वरच्या जबड्याच्या टोकापर्यंत गडद पट्टा दिसतो. चोचीचे टोक गडद आहे." ,
        dorsal_fin: "पृष्ठीय पंख लहान, त्रिकोणी आणि पाठीच्या मध्यबिंदूवर उभा असतो" ,
        teeth_count: "प्रत्येक जबड्यात 38-44 जोड्या दात असतात." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "अज्ञात" ,
        habitat_preferance: "समुद्रातील प्रजाती खोल समुद्रात आढळतात" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "निओफोकेना फोकेनोइड्स" ,
        image_path: "Indo-Pacific-Finless-Porpoise" ,
        local_name: "इंडो-पॅसिफिक फिनलेस पोर्पोइज" ,
        IUCN_status: "VU" ,
        description: "टॉर्पेडो आकाराचे शरीर आहे ज्याचे डोके बल्बस आणि गोलाकार थूथन आहे. चोच नाही. फ्लिपर्स लांब आणि फाल्केट असतात. फ्लूक खाचदार आहे." ,
        size: "जन्माच्या वेळी लांबी: 75-85cm, प्रौढ लांबी: 1.5m, प्रौढ वजन: 60 Kg" ,
        colour_pattern: "गडद राखाडी ते तपकिरी राखाडी 10-25 ट्यूबरकलच्या ओळींसह मागील बाजूस ट्यूबरकल पॅचसह. पृष्ठीय पंख नाही." ,
        dorsal_fin: "पृष्ठीय पंख अनुपस्थित आहे" ,
        teeth_count: "प्रत्येक जबड्यात 15-22 जोड्या दात असलेले कुदळीच्या आकाराचे दात" ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "रहिवासी लोकसंख्या" ,
        habitat_preferance: "सुंदरबनसह भारताच्या सर्व किनार्" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "प्लॅटनिस्टा गंगेटिका" ,
        image_path: "South-Asian-River-Dolphin" ,
        local_name: "दक्षिण आशियाई नदी डॉल्फिन" ,
        IUCN_status: "EN" ,
        description: "दक्षिण आशियाई नदीच्या डॉल्फिनचे शरीर साठलेले असते आणि एक सपाट टोक असलेली लांब सडपातळ चोच असते. मादीमध्ये चोच लांब असते आणि पुरुषांमध्ये तुलनेने लहान असते. चोच आणि खरबूज यांच्यामध्ये एक ठळक क्रिझ असते, खरबूजावर कड असते. एकच स्लिट ब्लोहोल दर्शवते. डोळे पिनहोलसारखे आहेत आणि फ्ल्यूक्स अवतल आतील मार्जिन आणि एक प्रमुख खाच असलेले विस्तृत आहेत. फ्लिपर्स चौरस दूरच्या टोकांसह ब्रॉड आहेत." ,
        size: "जन्माच्या वेळी लांबी: 70-90cm, प्रौढ लांबी: 1.6-2.6m, प्रौढ वजन: 85 Kg" ,
        colour_pattern: "वरचा आणि मागचा भाग हलका तपकिरी ते तपकिरी राखाडी असतो तर पोटाचा भाग हलका असतो" ,
        dorsal_fin: "पृष्ठीय पंख कमी, लहान, त्रिकोणी, रुंद-आधारित आणि रोस्ट्रमच्या टोकापासून सुमारे 2/3 मार्ग आहे" ,
        teeth_count: "वरच्या जबड्यात 26-39 जोड्या दात असतात आणि खालच्या जबड्यात 26-35 जोड्या दात असतात." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "रहिवासी लोकसंख्या" ,
        habitat_preferance: "सिंधू, गंगा, ब्रह्मपुत्रा, मेघना आणि कर्णफुली सांगू नद्या आणि त्यांच्या उपनद्यांमध्ये आढळतात. P.g .minor पाकिस्तानातील सिंधू नाल्यात आणि भारतातील बियास नदीत आढळते. Pg gangetica उर्वरित प्रजाती वितरण श्रेणीमध्ये आढळते." ,
        type: "Marine Mammals" ,
    },
]


data.sort((a, b) => a.scientific_name.localeCompare(b.scientific_name))

const d: IDatabaseEntry[] = data.map((e,i) => {
    return {
        id: i.toString(),
        ...e
    }
})

export default d
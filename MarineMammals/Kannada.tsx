import { IDatabaseEntry } from '../../src/Interface/Interface'

const data: any[] = [
    {   
        scientific_name: "ಡುಗಾಂಗ್ ಡುಗಾಂಗ್" ,
        image_path: "Dugong" ,
        local_name: "ಡುಗಾಂಗ್" ,
        IUCN_status: "VU" ,
        description: "ಸಿಲಿಂಡರಾಕಾರದ ಮತ್ತು ಟ್ಯೂಬ್ ತರಹದ ತಲೆಯು ಸಮುದ್ರದ ಹುಲ್ಲಿನ ಮೇಲೆ ಮೆಲ್ಲಲು ಕೆಳಕ್ಕೆ ಬಾಗಿರುತ್ತದೆ. ಸೊಂಟದ ಪ್ರದೇಶದಲ್ಲಿ ಕಾಂಡವು ಅಗಲವಾಗಿರುತ್ತದೆ ಮತ್ತು ಬಾಲದ ಫ್ಲೂಕ್ ಅನ್ನು ರೂಪಿಸಲು ಹಿಂಭಾಗದಲ್ಲಿ ಕಿರಿದಾಗುತ್ತದೆ, ಇದು ಸಮತಲ ಮತ್ತು ಅರ್ಧಚಂದ್ರಾಕಾರದ ಆಕಾರದಲ್ಲಿದೆ. ಅವುಗಳು ವಿಶಿಷ್ಟವಾದ ಮೇಲ್ಮೈಯನ್ನು ಹೊಂದಿವೆ, ಅಲ್ಲಿ ಕೇವಲ ಬೆನ್ನಿನ ಮೇಲ್ಮೈ ಮತ್ತು ನಿಧಾನವಾದ ಹೊಡೆತವು ಕೆಲವೊಮ್ಮೆ ಗೋಚರಿಸುತ್ತದೆ ಮತ್ತು ಡೈವ್" ,
        size: "ಹುಟ್ಟಿದಾಗ ಉದ್ದ: 1-1.3m, ವಯಸ್ಕರ ಉದ್ದ: 2.5-2.7m, ವಯಸ್ಕರ ತೂಕ: 570 Kg" ,
        colour_pattern: "ಕೊಳಕು ಕಂದು ಬೂದು" ,
        dorsal_fin: "ಅವರಿಗೆ ಡಾರ್ಸಲ್ ರೆಕ್ಕೆಗಳಿಲ್ಲ" ,
        teeth_count: "ದವಡೆಯ ಪ್ರತಿ ಚತುರ್ಭುಜದಲ್ಲಿ ಆರು ಹಲ್ಲುಗಳು ಮತ್ತು ಮೇಲಿನ ದವಡೆಯ ಮೇಲೆ ಒಂದು ಛೇದನವು ಪುರುಷರಲ್ಲಿ ದಂತವಾಗಿ ಹೊರಹೊಮ್ಮುತ್ತದೆ" ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "ನಿವಾಸಿ ಜನಸಂಖ್ಯೆ" ,
        habitat_preferance: "ಡುಗಾಂಗ್" ,
        type: "Marine Mammals" ,
    },
    {           
        scientific_name: " ಮೆಗಾಪ್ಟೆರಾ ನೊವಾಯಾಂಗ್ಲಿಯಾ" ,
        image_path: "Humpback-Whale" ,
        local_name: "ಹಂಪ್ಬ್ಯಾಕ್ ವೇಲ್" ,
        IUCN_status: "LC" ,
        description: "ಇತರ ರೋರ್ಕುಲ್" ,
        size: "ಹುಟ್ಟಿದಾಗ ಉದ್ದ: 4.3m, ವಯಸ್ಕರ ಉದ್ದ: 11-17m, ವಯಸ್ಕರ ತೂಕ: 40000 Kg" ,
        colour_pattern: "ಕಪ್ಪು ಅಥವಾ ಬೂದು, ಗಂಟಲು ಮತ್ತು ಹೊಟ್ಟೆಯ ಮೇಲೆ ಬಿಳಿ ಪ್ರದೇಶವನ್ನು ಹೊಂದಿರುತ್ತದೆ. ಫ್ಲಿಪ್ಪರ್" ,
        dorsal_fin: "ಡಾರ್ಸಲ್ ಫಿನ್ ದೇಹದ ಉದ್ದದ ಮೂರನೇ ಒಂದು ಭಾಗಕ್ಕಿಂತ ಕಡಿಮೆ ಬಾಲದ ಫ್ಲೂಕ್ ನಾಚ್" ,
        teeth_count: null,
        baleen_plate: "350-370 ಜೋಡಿಗಳು" ,
        throat_grooves: "ಗಂಟಲಿನ ಚಡಿಗಳ ಸಂಖ್ಯೆ 14 ರಿಂದ 35, ಹೊಕ್ಕುಳಕ್ಕೆ ವಿಸ್ತರಿಸುತ್ತದೆ" ,
        seasonal_movement: "ಅರಬ್ಬೀ ಸಮುದ್ರದೊಳಗೆ" ,
        habitat_preferance: " ಕರಾವಳಿ ಮತ್ತು ಭೂಖಂಡದ ಶೆಲ್ಫ್ ಅಂಚಿನ ನೀರಿನಲ್ಲಿ ಕಂಡುಬರುತ್ತದೆ" ,
        type: "Marine Mammals" ,
    },
    {           
        scientific_name: "ಬಾಲನೊಪ್ಟೆರಾ ಮಸ್ಕ್ಯುಲಸ್" ,
        image_path: "Blue-Whale" ,
        local_name: "ನೀಲಿ ತಿಮಿಂಗಿಲ" ,
        IUCN_status: "EN" ,
        description: "ವಿಶಾಲವಾದ 'U' ಆಕಾರದ ತಲೆಯು ಒಂದೇ ಕೇಂದ್ರೀಯ ರಿಡ್ಜ್" ,
        size: "ಹುಟ್ಟಿದಾಗ ಉದ್ದ: 7-8m, ವಯಸ್ಕರ ಉದ್ದ: 25-29m, ವಯಸ್ಕರ ತೂಕ: 72000-135000 Kg" ,
        colour_pattern: "ಮಚ್ಚೆಯೊಂದಿಗೆ ನೀಲಿ ಬೂದು." ,
        dorsal_fin: "ರೋಸ್ಟ್ರಮ್ ತುದಿಯಿಂದ 3/4 ನೇ ದಾರಿಯಲ್ಲಿ ತುಂಬಾ ಚಿಕ್ಕದಾದ ಡಾರ್ಸಲ್ ಫಿನ್" ,
        teeth_count: null,
        baleen_plate: "260-400 ಜೋಡಿ ಬಾಲೀನ್" ,
        throat_grooves: "70-118 (ಹೆಚ್ಚಾಗಿ 90-95) ಕುಹರದ ಮಡಿಕೆಗಳು ಬಹುತೇಕ ಹೊಕ್ಕುಳದವರೆಗೆ" ,
        seasonal_movement: "ಅರೇಬಿಯನ್ ಸಮುದ್ರ - ಬಂಗಾಳ ಕೊಲ್ಲಿ" ,
        habitat_preferance: "ತೆರೆದ-ಸಾಗರದ ಜಾತಿಗಳು, ಆಹಾರಕ್ಕಾಗಿ ಮತ್ತು ಪ್ರಾಯಶಃ ಸಂತಾನೋತ್ಪತ್ತಿಗಾಗಿ ತೀರಕ್ಕೆ ಹತ್ತಿರದಲ್ಲಿ ಕಂಡುಬರುತ್ತವೆ. ಅರಬ್ಬೀ ಸಮುದ್ರದಲ್ಲಿ ಬಹುಶಃ ಪಿಗ್ಮಿ ಬ್ಲೂ ವೇಲ್ ಕೂಡ ಇದೆ." ,
        type: "Marine Mammals" ,
    },
    {           
        scientific_name: "ಬಾಲೆನೊಪ್ಟೆರಾ ಇದೇನಿ" ,
        image_path: "Bryde’s-Whale" ,
        local_name: "ವಧುವಿನ ತಿಮಿಂಗಿಲ" ,
        IUCN_status: "LC" ,
        description: "ನೇರವಾದ ಹಿಂದುಳಿದ ಅಂಚುಗಳೊಂದಿಗೆ ವಿಶಾಲವಾದ ಫ್ಲೂಕ್ನೊಂದಿಗೆ ನಯವಾದ ದೇಹವನ್ನು ಹೊಂದಿದೆ. ರೋಸ್ಟ್ರಮ್" ,
        size: "ಹುಟ್ಟಿದಾಗ ಉದ್ದ: 4m, ವಯಸ್ಕರ ಉದ್ದ: 15-16.5m, ವಯಸ್ಕರ ತೂಕ: 40000 Kg" ,
        colour_pattern: "ಕಡು ಬೂದು" ,
        dorsal_fin: " ರೋಸ್ಟ್ರಮ್ ತುದಿಯಿಂದ 3/4 ನೇ ದಾರಿಯಲ್ಲಿ ಎತ್ತರದ ಮತ್ತು ಫಾಲ್ಕೇಟ್ ಡಾರ್ಸಲ್ ಫಿನ್" ,
        teeth_count: null,
        baleen_plate: "250-370 ಜೋಡಿ ಬಾಲೀನ್" ,
        throat_grooves: "40- 70 (ಅರೇಬಿಯನ್ ಸಮುದ್ರಕ್ಕೆ 42-54) ಹೊಕ್ಕುಳಿನ ಮಡಿಕೆಗಳು ಹೊಕ್ಕುಳ ಅಥವಾ ಅದರಾಚೆಗೆ" ,
        seasonal_movement: "ನಿವಾಸಿ ಜನಸಂಖ್ಯೆ" ,
        habitat_preferance: "ಕಡಲಾಚೆಯ ಮತ್ತು ಸಮೀಪ ತೀರದಲ್ಲಿ ಕಂಡುಬಂದಿದೆ" ,
        type: "Marine Mammals" ,
    },
    {           
        scientific_name: "ಬಾಲೆನೊಪ್ಟೆರಾ ಒಮುರೈ" ,
        image_path: "Omura's-Whale" ,
        local_name: "ಒಮುರಾ ತಿಮಿಂಗಿಲ" ,
        IUCN_status: "DD" ,
        description: "ಒಂದು ಪ್ರಮುಖವಾದ ಕೇಂದ್ರೀಯ ರೇಖೆಯೊಂದಿಗೆ 'V' ಆಕಾರದ ತಲೆಯೊಂದಿಗೆ ಸಣ್ಣ ಮತ್ತು ಸುವ್ಯವಸ್ಥಿತ ದೇಹವನ್ನು ಹೊಂದಿದೆ. ಮಸುಕಾದ ಅನಿಯಮಿತ ಚೆವ್ರಾನ್" ,
        size: "ಹುಟ್ಟಿದಾಗ ಉದ್ದ: 3.5-4m, ವಯಸ್ಕರ ಉದ್ದ: 9.6-11.5m, ವಯಸ್ಕರ ತೂಕ: 20000 Kg" ,
        colour_pattern: "ಡಾರ್ಕ್ ಡಾರ್ಸಲ್ ಮತ್ತು ಲೈಟ್ ವೆಂಟ್ರಲ್ ಬಾಡಿಯೊಂದಿಗೆ ಎರಡು-ಟೋನ್ ದೇಹದ ಬಣ್ಣ." ,
        dorsal_fin: "ಹೆಚ್ಚು ಫಾಲ್ಕೇಟ್ ಮತ್ತು ಬ್ಯಾಕ್" ,
        teeth_count: null,
        baleen_plate: "180-210 ಜೋಡಿ ಸಣ್ಣ ಮತ್ತು ಅಗಲವಾದ ಬಾಲೀನ್, ಮುಂಭಾಗದಲ್ಲಿ ಹಳದಿ ಬಿಳಿ ಮತ್ತು ಹಿಂಭಾಗದಲ್ಲಿ ಕಪ್ಪು" ,
        throat_grooves: "80-90 ವೆಂಟ್ರಲ್ ಪ್ಲೀಟ್" ,
        seasonal_movement: "ಅಜ್ಞಾತ" ,
        habitat_preferance: "202 ಮೀ ವರೆಗಿನ ಆಳವಿಲ್ಲದ ಭೂಖಂಡದ ಕಪಾಟಿನಲ್ಲಿ ಸಮೀಪದ ತೀರದಲ್ಲಿ ಕಂಡುಬರುತ್ತದೆ" ,
        type: "Marine Mammals" ,
    },
    {           
        scientific_name: "ಮೆಸೊಪ್ಲೊಡಾನ್ ಪೆಸಿಫಿಕಸ್" ,
        image_path: "Longman's-Beaked-Whale" ,
        local_name: "ಲಾಂಗ್" ,
        IUCN_status: "DD" ,
        description: "ಕೊಕ್ಕು ಮತ್ತು ಕಲ್ಲಂಗಡಿ ನಡುವೆ ಕ್ರೀಸ್ ಹೊಂದಿರುವ ಪ್ರಮುಖ ಕೊಕ್ಕು ಮತ್ತು ಚಾಚಿಕೊಂಡಿರುವ ಹಣೆಯ ಜೊತೆಗೆ ತೆಳ್ಳಗಿನ ಆಕಾರದ ದೇಹವನ್ನು ಹೊಂದಿದೆ. ರೇಖೀಯ ಕುಂಟೆ ಗುರುತುಗಳಿಲ್ಲ ಮತ್ತು ಫ್ಲೂಕ್ಸ್" ,
        size: "ಹುಟ್ಟಿದಾಗ ಉದ್ದ: 2.9m, ವಯಸ್ಕರ ಉದ್ದ: 6.5m, ವಯಸ್ಕರ ತೂಕ: Unknown" ,
        colour_pattern: "ಡಾರ್ಸಲ್ ದೇಹವು ಬೂದು ಬಣ್ಣದಿಂದ ಕಂದು ಬೂದು ಬಣ್ಣದ್ದಾಗಿದ್ದು, ಬದಿಗಳು, ಕೆಳಭಾಗ ಮತ್ತು ತಲೆಯು ತಿಳಿ ಬಣ್ಣವನ್ನು ಹೊಂದಿರುತ್ತದೆ. ಸಾಮಾನ್ಯವಾಗಿ, ಕುಕೀ ಕಟ್ಟರ್ ಶಾರ್ಕ್" ,
        dorsal_fin: "ಬೆನ್ನಿನ ಮಧ್ಯಭಾಗದ ಹಿಂದೆ ತುಲನಾತ್ಮಕವಾಗಿ ಎತ್ತರದ ಮತ್ತು ಫಾಲ್ಕೇಟ್ ಡಾರ್ಸಲ್ ಫಿನ್" ,
        teeth_count: "ಒಸಡುಗಳಲ್ಲಿ ಒಂದೇ ಜೋಡಿ ಹಲ್ಲುಗಳು ಮತ್ತು ಹೊರಗೆ ಕಾಣಿಸುವುದಿಲ್ಲ" ,
        baleen_plate: null,
        throat_grooves: "V-ಆಕಾರದ d ಗಂಟಲಿನ ತೋಡು ಇರುತ್ತದೆ" ,
        seasonal_movement: "ಅಜ್ಞಾತ" ,
        habitat_preferance: "ಆಳವಾದ ಸಾಗರಗಳಲ್ಲಿ ಕಡಲಾಚೆಯಲ್ಲಿ ಕಂಡುಬರುತ್ತದೆ" ,
        type: "Marine Mammals" ,
    },
    {           
        scientific_name: "ಮೆಸೊಪ್ಲೊಡಾನ್ ಹೋತೌಲಾ" ,
        image_path: "Deraniyagala’s-Beaked-Whale" ,
        local_name: "ದೇರಣೀಯಗಳ ಕೊಕ್ಕಿನ ತಿಮಿಂಗಿಲ" ,
        IUCN_status: "DD" ,
        description: "ಸ್ಪಿಂಡಲ್ ಆಕಾರದ ದೇಹ ಮತ್ತು ಸಣ್ಣ ಕಿರಿದಾದ ಫ್ಲಿಪ್ಪರ್ಗಳನ್ನು ಹೊಂದಿದೆ. ಮೌತ್ಲೈನ್ " ,
        size: "ಹುಟ್ಟಿದಾಗ ಉದ್ದ: 2m, ವಯಸ್ಕರ ಉದ್ದ: 3.9-4.8m, ವಯಸ್ಕರ ತೂಕ: Unknown" ,
        colour_pattern: "ಬಿಳಿ ಗುರುತುಗಳೊಂದಿಗೆ ಗಾಢ ಬೂದು. ಕೆಳಗಿನ ದವಡೆಯ ತುದಿ ಬಿಳಿಯಾಗಿರುತ್ತದೆ." ,
        dorsal_fin: "ರೋಸ್ಟ್ರಮ್ ತುದಿಯಿಂದ 2/3 ಭಾಗದಷ್ಟು ಸಣ್ಣ ಫಾಲ್ಕೇಟ್ ಡಾರ್ಸಲ್ ಫಿನ್" ,
        teeth_count: "ಒಂದು ಜೋಡಿ ಮುಂದಕ್ಕೆ ಸೂಚಿಸುವ ಶಂಕುವಿನಾಕಾರದ ದಂತಗಳು ವಯಸ್ಕ ಪುರುಷರ ಕೆಳಗಿನ ದವಡೆಯಲ್ಲಿ ಮಾತ್ರ ಹೊರಹೊಮ್ಮುತ್ತವೆ" ,
        baleen_plate: null,
        throat_grooves: " V-ಆಕಾರದ ಗಂಟಲಿನ ತೋಡು ಇರುತ್ತದೆ" ,
        seasonal_movement: "ಅಜ್ಞಾತ" ,
        habitat_preferance: "ವಿತರಣೆ ತಿಳಿದಿಲ್ಲ ಆದರೆ ಆಳವಾದ ನೀರಿನಲ್ಲಿ ಕಡಲಾಚೆಯ ಕಂಡುಬರುತ್ತದೆ" ,
        type: "Marine Mammals" ,
    },
    {           
        scientific_name: "ಮೆಸೊಪ್ಲೊಡಾನ್ ಗಿಂಕ್ಗೊಡೆನ್ಸ್" ,
        image_path: "Ginkgo-Toothed-Beaked-Whale" ,
        local_name: "ಗಿಂಕ್ಗೊ-ಹಲ್ಲಿನ ಕೊಕ್ಕಿನ ತಿಮಿಂಗಿಲ" ,
        IUCN_status: "DD" ,
        description: "ಸಣ್ಣ ಕಿರಿದಾದ ಫ್ಲಿಪ್ಪರ್ಗಳೊಂದಿಗೆ ಸ್ಪಿಂಡಲ್ ಆಕಾರದ ದೇಹವನ್ನು ಹೊಂದಿದೆ. ಪುರುಷರಲ್ಲಿ ಕಮಾನಿನ ಬಾಯಿಯ ರೇಖೆಯನ್ನು ಹೊಂದಿರುವ ಸಣ್ಣ ತಲೆ." ,
        size: "ಹುಟ್ಟಿದಾಗ ಉದ್ದ: 2-2.5m, ವಯಸ್ಕರ ಉದ್ದ: 5.3m, ವಯಸ್ಕರ ತೂಕ: Unknown" ,
        colour_pattern: "ರೋಸ್ಟ್ರಮ್" ,
        dorsal_fin: "ರೋಸ್ಟ್ರಮ್ ತುದಿಯಿಂದ 2/3 ಭಾಗದಷ್ಟು ಸಣ್ಣ ಡಾರ್ಸಲ್ ಫಿನ್" ,
        teeth_count: "ಕೆಳಗಿನ ದವಡೆಯ ಮಧ್ಯದಲ್ಲಿ ಅಗಲವಾದ, ಚಪ್ಪಟೆಯಾದ s-ಆಕಾರದ ದಂತಗಳು ವಯಸ್ಕ ಪುರುಷರಲ್ಲಿ ಮಾತ್ರ ಹೊರಹೊಮ್ಮುತ್ತವೆ." ,
        baleen_plate: null,
        throat_grooves: "ಒಂದು ಜೋಡಿ ಗಂಟಲಿನ ಚಡಿಗಳಿವೆ" ,
        seasonal_movement: "ಅಜ್ಞಾತ" ,
        habitat_preferance: "ವಿತರಣೆ ತಿಳಿದಿಲ್ಲ; ಕಡಲಾಚೆಯ ಆಳವಾದ ನೀರಿನಲ್ಲಿ ಕಂಡುಬರುತ್ತದೆ" ,
        type: "Marine Mammals" ,
    },
    {           
        scientific_name: "ಜಿಫಿಯಸ್ ಕ್ಯಾವಿರೋಸ್ಟ್ರಿಸ್" ,
        image_path: "Cuvier's-Beaked-Whale" ,
        local_name: "ಕುವಿಯರ್ನ ಕೊಕ್ಕಿನ ತಿಮಿಂಗಿಲ" ,
        IUCN_status: "LC" ,
        description: "ಸಣ್ಣ ಕೊಕ್ಕು ಮತ್ತು ಸಣ್ಣ ಕಿರಿದಾದ ಫ್ಲಿಪ್ಪರ್ಗಳೊಂದಿಗೆ ಸ್ಪಿಂಡಲ್ ಆಕಾರದ ದೇಹವನ್ನು ಹೊಂದಿದೆ. ನಯವಾದ ಇಳಿಜಾರಾದ ಹಣೆಯಿದೆ (ಪುರುಷರು ಕಲ್ಲಂಗಡಿ ಆಕಾರವನ್ನು ತೋರಿಸುತ್ತಾರೆ) ಅದರ ಉದ್ದಕ್ಕೂ ಬಾಗಿದ ಕಾನ್ಕಾವಿಟಿ ಮೌತ್" ,
        size: "ಹುಟ್ಟಿದಾಗ ಉದ್ದ: 2.7m, ವಯಸ್ಕರ ಉದ್ದ: 6-7m, ವಯಸ್ಕರ ತೂಕ: 3000 Kg" ,
        colour_pattern: "ಬೂದು ಬಣ್ಣದಿಂದ ತಿಳಿ ತುಕ್ಕು ಹಿಡಿದ ಕಂದು ಬಣ್ಣಕ್ಕೆ ಕುಕೀ ಕಟ್ಟರ್ ಕಲೆಗಳು ಮತ್ತು ಕುಂಟೆ ಗುರುತುಗಳು. ಪುರುಷರು ತಲೆ ಮತ್ತು ಬೆನ್ನಿನ ಮೇಲೆ ಹೆಚ್ಚು ಬಿಳಿ ಬಣ್ಣವನ್ನು ಹೊಂದಿರುತ್ತಾರೆ." ,
        dorsal_fin: "ರೋಸ್ಟ್ರಮ್ ತುದಿಯಿಂದ 2/3 ಭಾಗದಷ್ಟು ಸಣ್ಣ ಫಾಲ್ಕೇಟ್ ಡಾರ್ಸಲ್ ಫಿನ್" ,
        teeth_count: "ಒಂದು ಜೋಡಿ ಶಂಕುವಿನಾಕಾರದ ಹಲ್ಲುಗಳು ವಯಸ್ಕ ಪುರುಷರ ಕೆಳಗಿನ ದವಡೆಯ ತುದಿಯಲ್ಲಿ ಮಾತ್ರ ಹೊರಹೊಮ್ಮುತ್ತವೆ." ,
        baleen_plate: null,
        throat_grooves: "V-ಆಕಾರದ ಒಂದು ಜೋಡಿ ಗಂಟಲಿನ ಚಡಿಗಳು ಇರುತ್ತವೆ" ,
        seasonal_movement: "ಅಜ್ಞಾತ" ,
        habitat_preferance: "ಕಡಲಾಚೆಯ ಮತ್ತು ಕಡಿದಾದ ಭೂಖಂಡದ ಇಳಿಜಾರುಗಳಿಗೆ ಸಮೀಪವಿರುವ ಆಳವಾದ ನೀರಿನಲ್ಲಿ ಕಂಡುಬರುತ್ತದೆ" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "ಮೆಸೊಪ್ಲೋಡಾನ್ ಡೆನ್ಸಿರೋಸ್ಟ್ರಿಸ್" ,
        image_path: "Blainville's-Beaked-Whale" ,
        local_name: "ಬ್ಲೇನ್ವಿಲ್ಲೆಸ್ ಕೊಕ್ಕಿನ ತಿಮಿಂಗಿಲ" ,
        IUCN_status: "LC" ,
        description: "ಅರ್ಧಚಂದ್ರಾಕಾರದ ಬ್ಲೋಹೋಲ್ನೊಂದಿಗೆ ಸ್ಪಿಂಡಲ್ ಆಕಾರದ ದೇಹವನ್ನು ಹೊಂದಿದ್ದು ಅದು ಮುಂಭಾಗದ ತುದಿಯಲ್ಲಿ ಹಿಂಜ್ ಆಗಿದೆ. ಟೈಲ್ ಫ್ಲೂಕ್" ,
        size: "ಹುಟ್ಟಿದಾಗ ಉದ್ದ: 2-2.5m, ವಯಸ್ಕರ ಉದ್ದ: 4.7m, ವಯಸ್ಕರ ತೂಕ: 1033 Kg" ,
        colour_pattern: "ಕುಕೀ ಕಟ್ಟರ್" ,
        dorsal_fin: "ರೋಸ್ಟ್ರಮ್ ತುದಿಯಿಂದ 2/3 ಭಾಗದಷ್ಟು ಸಣ್ಣ ಡಾರ್ಸಲ್ ಫಿನ್" ,
        teeth_count: "ಒಂದು ಜೋಡಿ ದಂತಗಳು ಬಾಯಿಯಿಂದ ಹೊರಬರುತ್ತವೆ." ,
        baleen_plate: null,
        throat_grooves: "ಒಂದೇ ಜೋಡಿ ಗಂಟಲಿನ ಚಡಿಗಳು ಇರುತ್ತವೆ" ,
        seasonal_movement: "ಅಜ್ಞಾತ" ,
        habitat_preferance: "200 ಮೀ ಅಥವಾ ಅದಕ್ಕಿಂತ ಹೆಚ್ಚಿನ ಸಮುದ್ರದ ಆಳವಾದ ನೀರಿನಲ್ಲಿ ಕಂಡುಬರುತ್ತದೆ" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "ಫಿಸೆಟರ್ ಮ್ಯಾಕ್ರೋಸೆಫಾಲಸ್" ,
        image_path: "Sperm-Whale" ,
        local_name: "ಸ್ಪರ್ಮ್ ತಿಮಿಂಗಿಲ" ,
        IUCN_status: "VU" ,
        description: "ಹಲ್ಲಿನ ಸೆಟಾಸಿಯನ್" ,
        size: "ಹುಟ್ಟಿದಾಗ ಉದ್ದ: 35-45m, ವಯಸ್ಕರ ಉದ್ದ: 12.5-19.2m, ವಯಸ್ಕರ ತೂಕ: 57000 Kg" ,
        colour_pattern: "ಕಪ್ಪು ಬಣ್ಣದಿಂದ ಕಂದು ಬೂದು" ,
        dorsal_fin: "ಕಡಿಮೆ ನಾಬಿ ಡಾರ್ಸಲ್ ಫಿನ್" ,
        teeth_count: "ಕೆಳಗಿನ ದವಡೆಯಲ್ಲಿ 18-26 ಜೋಡಿ ಹಲ್ಲುಗಳಿವೆ." ,
        baleen_plate: null,
        throat_grooves: "2-10 ಸಣ್ಣ ಗಂಟಲಿನ ಚಡಿಗಳು" ,
        seasonal_movement: "ಅಜ್ಞಾತ" ,
        habitat_preferance: "ಕಾಂಟಿನೆಂಟಲ್ ಇಳಿಜಾರಿನ ಬಳಿ, 1000 ಮೀ ಗಿಂತ ಹೆಚ್ಚು ಆಳದ ನೀರಿನಲ್ಲಿ ಮತ್ತು ದಡಕ್ಕೆ ಹತ್ತಿರವಿರುವ ಜಲಾಂತರ್ಗಾಮಿ ಕಣಿವೆಗಳಲ್ಲಿ ಕಂಡುಬರುತ್ತದೆ" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "ಕೋಗಿಯಾ ಸಿಮಾ" ,
        image_path: "Dwarf-Sperm-Whale" ,
        local_name: "ಡ್ವಾರ್ಫ್ ಸ್ಪರ್ಮ್ ವೇಲ್" ,
        IUCN_status: "LC" ,
        description: "ಶಾರ್ಕ್ ತರಹದ ತಲೆ ಮತ್ತು ಸಣ್ಣ ಕಿರಿದಾದ ಕೆಳಗಿನ ದವಡೆಯೊಂದಿಗೆ ದೃಢವಾದ ದೇಹವನ್ನು ಹೊಂದಿದೆ. ಬ್ಲೋಹೋಲ್ ರೋಸ್ಟ್ರಮ್ನ ತುದಿಯಿಂದ ಸುಮಾರು 10% ದೂರದಲ್ಲಿದೆ. ಕಣ್ಣಿನ ಹಿಂದೆ ಸುಳ್ಳು ಗಿಲ್ ಸ್ಲಿಟ್" ,
        size: "ಹುಟ್ಟಿದಾಗ ಉದ್ದ: 1m, ವಯಸ್ಕರ ಉದ್ದ: 2.5-2.7m, ವಯಸ್ಕರ ತೂಕ: 272 Kg" ,
        colour_pattern: "ಮೇಲಿನ ಭಾಗದಲ್ಲಿ ಗಾಢ ಬೂದು ಬಣ್ಣದಿಂದ ಕಂದು ಕಪ್ಪು. ಸುಳ್ಳು ಗಿಲ್ ಸ್ಲಿಟ್" ,
        dorsal_fin: "ಹಿಂಭಾಗದ ಮಧ್ಯದಲ್ಲಿ ಎತ್ತರದ ಫಾಲ್ಕೇಟ್ ಡಾರ್ಸಲ್ ಫಿನ್" ,
        teeth_count: "ಕೆಳಗಿನ ದವಡೆಯು 7-12 ಜೋಡಿ ಹಲ್ಲುಗಳನ್ನು ಹೊಂದಿರುತ್ತದೆ; ಮೇಲಿನ ದವಡೆಯು ಕೆಲವೊಮ್ಮೆ 3 ಜೋಡಿ ಹಲ್ಲುಗಳನ್ನು ಹೊಂದಿರುತ್ತದೆ" ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "ಅಜ್ಞಾತ" ,
        habitat_preferance: "ಕಡಲಾಚೆಯ ನೀರಿನಲ್ಲಿ ಕಂಡುಬರುತ್ತದೆ" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "ಕೊಗಿಯಾ ಬ್ರೆವಿಸೆಪ್ಸ್" ,
        image_path: "Pygmy-Sperm-Whale" ,
        local_name: "ಪಿಗ್ಮಿ ಸ್ಪರ್ಮ್ ವೇಲ್" ,
        IUCN_status: "LC" ,
        description: "ದೃಢವಾದ ದೇಹ; ಸುಳ್ಳು ಗಿಲ್ ಸ್ಲಿಟ್ನಂತೆ ಕಾಣುವ ಕಣ್ಣಿನ ಹಿಂದೆ ಒಂದು ಗುರುತು; ಶಾರ್ಕ್ ತರಹದ ತಲೆ; ಸಣ್ಣ ಮತ್ತು ಕಿರಿದಾದ ಕೆಳ ದವಡೆ; ತಲೆಗೆ ಹತ್ತಿರವಿರುವ ಸಣ್ಣ ಫ್ಲಿಪ್ಪರ್ಗಳು; ಬ್ಲೋಹೋಲ್ ಮತ್ತು ಡಾರ್ಸಲ್ ಫಿನ್ ನಡುವೆ ಸ್ವಲ್ಪ ಗೂನು ಇರುತ್ತದೆ; ಬ್ಲೋಹೋಲ್ ರೋಸ್ಟ್ರಮ್ ತುದಿಯಿಂದ> 10% ದೂರದಲ್ಲಿದೆ." ,
        size: "ಹುಟ್ಟಿದಾಗ ಉದ್ದ: 1.2m, ವಯಸ್ಕರ ಉದ್ದ: 2.7-3.9m, ವಯಸ್ಕರ ತೂಕ: 450 Kg" ,
        colour_pattern: "ಮೇಲಿನ ಭಾಗದಲ್ಲಿ ಗಾಢ ಬೂದು ಬಣ್ಣದಿಂದ ಕಂದು ಕಪ್ಪು. ಸುಳ್ಳು ಗಿಲ್ ಸ್ಲಿಟ್" ,
        dorsal_fin: "ಸಣ್ಣ ಬಾಗಿದ ಡೋರ್ಸಲ್ ಫಿನ್ ಹಿಂಭಾಗದ ಮಧ್ಯದ ಹಿಂದೆ" ,
        teeth_count: "ಕೆಳಗಿನ ದವಡೆಯು 10-16 ಜೋಡಿ ಹಲ್ಲುಗಳನ್ನು ಹೊಂದಿರುತ್ತದೆ" ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "ಅಜ್ಞಾತ" ,
        habitat_preferance: "ಭೂಖಂಡದ ಇಳಿಜಾರಿನಲ್ಲಿ ಮತ್ತು ಆಳವಾದ ನೀರಿನಲ್ಲಿ ಕಂಡುಬರುತ್ತದೆ ಡ್ವಾರ್ಫ್ ಸ್ಪರ್ಮ್ ವೇಲ್" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "ಓರ್ಕೆಲಾ ಬ್ರೆವಿರೋಸ್ಟ್ರಿಸ್" ,
        image_path: "Irrawaddy-Dolphin" ,
        local_name: "ಐರಾವಡ್ಡಿ ಡಾಲ್ಫಿನ್" ,
        IUCN_status: "EN" ,
        description: "ಪ್ರಮುಖ ಕೊಕ್ಕು ಇಲ್ಲದೆ ದುಂಡಾದ ಮೂತಿಯನ್ನು ಹೊಂದಿದೆ. ಫ್ಲಿಪ್ಪರ್" ,
        size: "ಹುಟ್ಟಿದಾಗ ಉದ್ದ: 1m, ವಯಸ್ಕರ ಉದ್ದ: 2.5m, ವಯಸ್ಕರ ತೂಕ: 130Kg" ,
        colour_pattern: "ಉಕ್ಕಿನ ಬೂದು" ,
        dorsal_fin: "ದೇಹದ ಮಧ್ಯಬಿಂದುವಿನ ಹಿಂದೆ ಡಾರ್ಸಲ್ ಫಿನ್" ,
        teeth_count: "ಮೇಲಿನ ದವಡೆ 8-19 ಜೋಡಿ ಹಲ್ಲುಗಳು, ಕೆಳಗಿನ ದವಡೆ 13-14 ಜೋಡಿ ಹಲ್ಲುಗಳು" ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "ಅಜ್ಞಾತ" ,
        habitat_preferance: "ಕರಾವಳಿ ನೀರು, ಆವೃತ ಪ್ರದೇಶಗಳು, ನದೀಮುಖಗಳು ಮತ್ತು ನದಿಗಳಲ್ಲಿ ಕಂಡುಬರುತ್ತದೆ ಭಾರತದಲ್ಲಿನ ಪ್ರಸ್ತುತ ವಿತರಣೆಯು ಚಿಲಿಕಾ ಆವೃತ, ಉತ್ತರ ಒರಿಸ್ಸಾ ಮತ್ತು ಪಶ್ಚಿಮ ಬಂಗಾಳದ ಕರಾವಳಿ ನೀರು ಮತ್ತು ಭಿತರ್ಕಾನಿಕಾ ಮತ್ತು ಸುಂದರಬನ್ಸ್ ಸೇರಿದಂತೆ" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "ಗ್ಲೋಬಿಸೆಫಾಲಾ ಮ್ಯಾಕ್ರೋರಿಂಚಸ್" ,
        image_path: "Short-Finned-Pilot-Whale" ,
        local_name: "ಸಣ್ಣ ಫಿನ್ಡ್ ಪೈಲಟ್ ವೇಲ್" ,
        IUCN_status: "LC" ,
        description: "ಕಪ್ಪು-ಮೀನುಗಳಲ್ಲಿ ಒಂದಾದ ಪೈಲಟ್ ತಿಮಿಂಗಿಲಗಳು ದೇಹದ ಮುಂಭಾಗದ ಅರ್ಧಭಾಗದಲ್ಲಿ ಪ್ರಾಮಿಮೆಂಟ್ ಡಾರ್ಸಲ್ ಫಿನ್ ಅನ್ನು ಹೊಂದಿರುತ್ತವೆ. ಮೂತಿಯು ದುಂಡಾಗಿದ್ದು ಬಲ್ಬಸ್ ತಲೆಯು ವಯಸ್ಕರಲ್ಲಿ ಬಹುತೇಕ ಚದರವಾಗಿರುತ್ತದೆ. ಫ್ಲಿಪ್ಪರ್" ,
        size: "ಹುಟ್ಟಿದಾಗ ಉದ್ದ: 1.4-1.9m, ವಯಸ್ಕರ ಉದ್ದ: 5.5-7.2m, ವಯಸ್ಕರ ತೂಕ: 3600 Kg" ,
        colour_pattern: "ಕಪ್ಪು ಬಣ್ಣದಿಂದ ಕಂದು ಬೂದು. ಇದು ಚೆಸ್" ,
        dorsal_fin: "ಡಾರ್ಸಲ್ ಫಿನ್" ,
        teeth_count: "ಪ್ರತಿ ದವಡೆಯು 7-9 ಜೋಡಿ ಹಲ್ಲುಗಳನ್ನು ಹೊಂದಿರುತ್ತದೆ." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "ಅಜ್ಞಾತ" ,
        habitat_preferance: "ಆಳವಾದ ಕಡಲಾಚೆಯ ನೀರಿನಲ್ಲಿ ಮತ್ತು ಹತ್ತಿರದ ಸಮುದ್ರದ ನೀರು ಆಳವಾಗಿರುವ ಸಾಗರ ದ್ವೀಪಗಳ ಸುತ್ತಲೂ ಕಂಡುಬರುತ್ತದೆ" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "ಓರ್ಸಿನಸ್ ಓರ್ಕಾ" ,
        image_path: "Killer-Whale" ,
        local_name: "ಕೊಲೆಗಾರ ತಿಮಿಂಗಿಲ" ,
        IUCN_status: "DD" ,
        description: "ದೊಡ್ಡದಾದ ಡಾಲ್ಫಿನ್" ,
        size: "ಹುಟ್ಟಿದಾಗ ಉದ್ದ: 2.1-2.6m, ವಯಸ್ಕರ ಉದ್ದ: 8.5-9.8m, ವಯಸ್ಕರ ತೂಕ: 7500-10000 Kg" ,
        colour_pattern: "ಡಾರ್ಸಲ್ ಫಿನ್" ,
        dorsal_fin: "ಅದರ ದೊಡ್ಡ ತ್ರಿಕೋನ ನೆಟ್ಟ ಬೆನ್ನಿನ ರೆಕ್ಕೆಯಿಂದ ಸುಲಭವಾಗಿ ಗುರುತಿಸಬಹುದು (ಪುರುಷ ಡಾರ್ಸಲ್ ಫಿನ್ 2 ಮೀ ಗಿಂತ ಹೆಚ್ಚು ಎತ್ತರ; ಹೆಣ್ಣುಗಳು 09 ಮೀ ಎತ್ತರದವರೆಗೆ ಬಾಗಿದ ರೆಕ್ಕೆ ಹೊಂದಿರುತ್ತವೆ)" ,
        teeth_count: "ಪ್ರತಿ ದವಡೆಯು 10-14 ಜೋಡಿ ಹಲ್ಲುಗಳನ್ನು ಹೊಂದಿರುತ್ತದೆ." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "ಅಜ್ಞಾತ" ,
        habitat_preferance: "ಕಾಸ್ಮೊಪೊಲಿಲ್ಟನ್ ಜಾತಿಗಳು ಸಾಮಾನ್ಯವಾಗಿ ತೀರದ ಹತ್ತಿರ ಮತ್ತು ಕಡಲಾಚೆಗೆ ಕಂಡುಬರುತ್ತವೆ" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "ಸ್ಯೂಡೋರ್ಕಾ ಕ್ರಾಸಿಡೆನ್ಸ್" ,
        image_path: "False-Killer-Whale" ,
        local_name: "ಫಾಲ್ಸ್ ಕಿಲ್ಲರ್ ವೇಲ್" ,
        IUCN_status: "NT" ,
        description: "ದುಂಡಗಿನ ಮೂತಿ ಮತ್ತು ಮೃದುವಾಗಿ ಇಳಿಜಾರಾದ ಕಲ್ಲಂಗಡಿ ಹೊಂದಿರುವ ಉದ್ದವಾದ ತೆಳ್ಳಗಿನ ದೇಹವನ್ನು ಹೊಂದಿದೆ. ಕೊಕ್ಕು ಪ್ರಮುಖವಾಗಿಲ್ಲ. ಫ್ಲಿಪ್ಪರ್" ,
        size: "ಹುಟ್ಟಿದಾಗ ಉದ್ದ: 1.5-2.1m, ವಯಸ್ಕರ ಉದ್ದ: 5-6m, ವಯಸ್ಕರ ತೂಕ: 2000 Kg" ,
        colour_pattern: "ಎದೆ ಮತ್ತು ಹೊಟ್ಟೆಯ ಮೇಲೆ ತಿಳಿ ಬೂದು ಬಣ್ಣದ ತೇಪೆಯೊಂದಿಗೆ ಕಪ್ಪು ಬಣ್ಣದಿಂದ ಬೂದು ಕಪ್ಪು. ತುಂಬಾ ಮಸುಕಾದ ಕೇಪ್ ಕೀಲ್" ,
        dorsal_fin: "ಡೋರ್ಸಲ್ ಫಿನ್ ಎತ್ತರವಾಗಿದೆ, ಹಿಂಭಾಗದ ಮಧ್ಯದಲ್ಲಿ ದುಂಡಗಿನ ತುದಿಯೊಂದಿಗೆ ಫಾಲ್ಕೇಟ್ ಆಗಿದೆ" ,
        teeth_count: "ಪ್ರತಿ ದವಡೆಯು 7-12 ಜೋಡಿ ಹಲ್ಲುಗಳನ್ನು ಹೊಂದಿರುತ್ತದೆ." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "ಅಜ್ಞಾತ" ,
        habitat_preferance: "ಆಳವಾದ ಕಡಲಾಚೆಯ ನೀರಿನಲ್ಲಿ ಮತ್ತು ಹತ್ತಿರದ ಸಮುದ್ರದ ನೀರು ಆಳವಾಗಿರುವ ಸಾಗರ ದ್ವೀಪಗಳ ಸುತ್ತಲೂ ಕಂಡುಬರುತ್ತದೆ" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "ಫೆರೆಸಾ ಅಟೆನುವಾಟಾ" ,
        image_path: "Pygmy-Killer-Whale" ,
        local_name: "ಪಿಗ್ಮಿ ಕಿಲ್ಲರ್ ವೇಲ್" ,
        IUCN_status: "LC" ,
        description: "ಉದ್ದವಾದ ದೇಹವನ್ನು ಹೊಂದಿದೆ, ಬೆನ್ನಿನ ರೆಕ್ಕೆಗಿಂತ ಮೊದಲು ದೃಢವಾಗಿರುತ್ತದೆ ಮತ್ತು ನಂತರ ತೆಳ್ಳಗಿರುತ್ತದೆ. ಮೂತಿಯು ಇಳಿಜಾರಾದ ಕಲ್ಲಂಗಡಿಯೊಂದಿಗೆ ದುಂಡಾಗಿರುತ್ತದೆ. ಕೊಕ್ಕು ಪ್ರಮುಖವಾಗಿಲ್ಲ. ಫ್ಲಿಪ್ಪರ್" ,
        size: "ಹುಟ್ಟಿದಾಗ ಉದ್ದ: 80cm, ವಯಸ್ಕರ ಉದ್ದ: 2.6m, ವಯಸ್ಕರ ತೂಕ: 225 Kg" ,
        colour_pattern: "ಕಪ್ಪು ಬಣ್ಣದಿಂದ ಬೂದುಬಣ್ಣದ ಕಪ್ಪು. ತುಟಿಗಳು ಮತ್ತು ಕೊಕ್ಕಿನ ತುದಿಗಳು ಬಿಳಿಯಾಗಿರುತ್ತವೆ. ಡೋರ್ಸಲ್ ಫಿನ್ ಅಡಿಯಲ್ಲಿ ಅದ್ದುವ ತಿಳಿ ಬೂದು ಬಣ್ಣದ ಕೇಪ್ ಪ್ರಮುಖವಾಗಿದೆ." ,
        dorsal_fin: "ಡಾರ್ಸಲ್ ಫಿನ್ ಎತ್ತರವಾಗಿದೆ, ಹಿಂಭಾಗದ ಮಧ್ಯದಲ್ಲಿ ಕಡಿಮೆ ಕೋನದಲ್ಲಿ ಫಾಲ್ಕೇಟ್ ಏರುತ್ತದೆ" ,
        teeth_count: "ಮೇಲಿನ ದವಡೆ 8-11 ಜೋಡಿ ಹಲ್ಲುಗಳು ಮತ್ತು ಕೆಳಗಿನ ದವಡೆ 11-13 ಜೋಡಿಗಳು" ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "ಅಜ್ಞಾತ" ,
        habitat_preferance: "ಆಳವಾದ ಕಡಲಾಚೆಯ ನೀರಿನಲ್ಲಿ ಮತ್ತು ಹತ್ತಿರದ ಸಮುದ್ರದ ನೀರು ಆಳವಾಗಿರುವ ಸಾಗರ ದ್ವೀಪಗಳ ಸುತ್ತಲೂ ಕಂಡುಬರುತ್ತದೆ" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "ಪೆಪೋನೋಸೆಫಾಲಾ ಎಲೆಕ್ಟ್ರಾ" ,
        image_path: "Melon-Headed-Whale" ,
        local_name: "ಕಲ್ಲಂಗಡಿ ತಲೆಯ ತಿಮಿಂಗಿಲ" ,
        IUCN_status: "LC" ,
        description: "ಉದ್ದವಾದ ತೆಳ್ಳಗಿನ ದೇಹ ಮತ್ತು ಕಲ್ಲಂಗಡಿಯೊಂದಿಗೆ ದುಂಡಾದ ಮೂತಿಯನ್ನು ಹೊಂದಿದೆ. ಕೊಕ್ಕಿನ ಸ್ವಲ್ಪ ಸುಳಿವು ಇದೆ. ಫ್ಲಿಪ್ಪರ್" ,
        size: "ಹುಟ್ಟಿದಾಗ ಉದ್ದ: 1m, ವಯಸ್ಕರ ಉದ್ದ: 2.6m, ವಯಸ್ಕರ ತೂಕ: 275 Kg" ,
        colour_pattern: "ಬಿಳಿ ಬಣ್ಣದ ತುಟಿಗಳು ಮತ್ತು ಕೊಕ್ಕಿನ ತುದಿಗಳೊಂದಿಗೆ ಬೂದುಬಣ್ಣದ ಕಪ್ಪು ಬಣ್ಣ. ಡೋರ್ಸಲ್ ಫಿನ್ ಅಡಿಯಲ್ಲಿ ಒಂದು ತಿಳಿ ಬೂದು ಬಣ್ಣದ ಕೇಪ್ ಡಿಪ್ಪಿಂಗ್ (ಪಿಗ್ಮಿ ಕಿಲ್ಲರ್ ವೇಲ್ಸ್" ,
        dorsal_fin: "ಡೋರ್ಸಲ್ ಫಿನ್ ಎತ್ತರವಾಗಿದೆ, ಹಿಂಭಾಗದ ಮಧ್ಯದಲ್ಲಿ ಫಾಲ್ಕೇಟ್ ಆಗಿದೆ" ,
        teeth_count: "ಪ್ರತಿ ದವಡೆಯು 20-25 ಜೋಡಿ ಹಲ್ಲುಗಳನ್ನು ಹೊಂದಿರುತ್ತದೆ." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "ಅಜ್ಞಾತ" ,
        habitat_preferance: "ಆಳವಾದ ಕಡಲಾಚೆಯ ನೀರಿನಲ್ಲಿ ಮತ್ತು ಹತ್ತಿರದ ಸಮುದ್ರದ ನೀರು ಆಳವಾಗಿರುವ ಸಾಗರ ದ್ವೀಪಗಳ ಸುತ್ತಲೂ ಕಂಡುಬರುತ್ತದೆ" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "ಗ್ರ್ಯಾಂಪಸ್ ಗ್ರೀಸ್ಯಸ್" ,
        image_path: "Risso's-Dolphin" ,
        local_name: "ರಿಸ್ಸೋನ ಡಾಲ್ಫಿನ್" ,
        IUCN_status: "LC" ,
        description: "ಮೊಂಡಾದ ತಲೆ ಮತ್ತು ಮೇಲ್ಮುಖವಾಗಿ ಇಳಿಜಾರಿನ ಮೌತ್ಲೈನ್ನೊಂದಿಗೆ ದೃಢವಾದ ದೇಹವನ್ನು ಹೊಂದಿದೆ. ಕಲ್ಲಂಗಡಿ ದುಂಡಗಿಂತ ಹೆಚ್ಚು ಚದರ. ಫ್ಲಿಪ್ಪರ್" ,
        size: "ಹುಟ್ಟಿದಾಗ ಉದ್ದ: 1-1.5m, ವಯಸ್ಕರ ಉದ್ದ: 3.8m, ವಯಸ್ಕರ ತೂಕ: 500 Kg" ,
        colour_pattern: "ಬೂದುಬಣ್ಣದ ಬಿಳಿ, ದೇಹದ ಹೆಚ್ಚಿನ ಭಾಗವು ಕುಂಟೆ ಗುರುತುಗಳಿಂದ ಹೆಚ್ಚು ಗಾಯವಾಗಿರುತ್ತದೆ." ,
        dorsal_fin: "ಡಾರ್ಸಲ್ ಫಿನ್ ಎತ್ತರವಾಗಿದೆ, ತೆಳ್ಳಗಿರುತ್ತದೆ, ಹಿಂಭಾಗದ ಮಧ್ಯದಲ್ಲಿ ನೆಟ್ಟಗಿರುತ್ತದೆ" ,
        teeth_count: "ಕೆಳಗಿನ ದವಡೆಯು 2-7 ಜೋಡಿ ಹಲ್ಲುಗಳನ್ನು ಹೊಂದಿದೆ ಮತ್ತು ಮೇಲಿನ ದವಡೆಯು 1 ಜೋಡಿ ಹಲ್ಲುಗಳನ್ನು ಹೊಂದಿದೆ ಅಥವಾ ಯಾವುದೂ ಇಲ್ಲ; ಹಲ್ಲುಗಳು ಸಾಮಾನ್ಯವಾಗಿ ಯಾವಾಗಲೂ ಸವೆದು ಹೋಗುತ್ತವೆ." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "ಅಜ್ಞಾತ" ,
        habitat_preferance: "ಭೂಖಂಡದ ಇಳಿಜಾರಿನಲ್ಲಿ ಮತ್ತು ಹೊರಗಿನ ಕಪಾಟಿನ ಆಳವಾದ ಪ್ರದೇಶಗಳಲ್ಲಿ ಕಂಡುಬರುತ್ತದೆ" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "ಸ್ಟೆನೋ ಬ್ರೆಡನೆನ್ಸಿಸ್" ,
        image_path: "Rough-Toothed-Dolphin" ,
        local_name: "ಒರಟು-ಹಲ್ಲಿನ ಡಾಲ್ಫಿನ್" ,
        IUCN_status: "LC" ,
        description: "ಮೊನಚಾದ ಶಂಕುವಿನಾಕಾರದ ತಲೆಯೊಂದಿಗೆ ದೃಢವಾದ ದೇಹವನ್ನು ಹೊಂದಿದೆ ಮತ್ತು ಮೃದುವಾದ ಇಳಿಜಾರಾದ ಕಲ್ಲಂಗಡಿ ಯಾವುದೇ ಕ್ರೀಸ್ ಇಲ್ಲ. ಕೊಕ್ಕು ಉದ್ದವಾಗಿದೆ ಮತ್ತು ಫ್ಲಿಪ್ಪರ್" ,
        size: "ಹುಟ್ಟಿದಾಗ ಉದ್ದ: 1m, ವಯಸ್ಕರ ಉದ್ದ: 2.65m, ವಯಸ್ಕರ ತೂಕ: 155 Kg" ,
        colour_pattern: "ಮೇಲ್ಭಾಗದಲ್ಲಿ ಬೂದುಬಣ್ಣದ ಕಪ್ಪು, ಗುಲಾಬಿ ಬಣ್ಣದ ಹೊಟ್ಟೆ ಮತ್ತು ಡೋರ್ಸಲ್ ಫಿನ್ ಅಡಿಯಲ್ಲಿ ಮುಳುಗುವ ಬದಿಗಳಲ್ಲಿ ಹಗುರವಾದ ಬೂದು ಬಣ್ಣದ ಕೇಪ್. ಹೊಟ್ಟೆ, ತುಟಿಗಳು ಮತ್ತು ಕೆಳಗಿನ ದವಡೆಯು ಬಿಳಿ ಬಣ್ಣವನ್ನು ಹೊಂದಿರುತ್ತದೆ ಮತ್ತು ಕಪ್ಪು ಕಣ್ಣಿನ ಪ್ಯಾಚ್ ಇರುತ್ತದೆ." ,
        dorsal_fin: "ಡಾರ್ಸಲ್ ಫಿನ್ ಎತ್ತರವಾಗಿದೆ, ತೆಳ್ಳಗಿರುತ್ತದೆ, ಹಿಂಭಾಗದ ಮಧ್ಯದಲ್ಲಿ ನೆಟ್ಟಗಿರುತ್ತದೆ; ಉದ್ದ ಕೊಕ್ಕು" ,
        teeth_count: "ಪ್ರತಿಯೊಂದು ದವಡೆಯು 19-28 ಜೋಡಿ ಹಲ್ಲುಗಳನ್ನು ಹೊಂದಿದ್ದು ಹಲ್ಲುಗಳಿಗೆ ಸುಕ್ಕುಗಟ್ಟಿದ ಅಂಚುಗಳನ್ನು ಹೊಂದಿರುತ್ತದೆ." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "ಅಜ್ಞಾತ" ,
        habitat_preferance: "ಆಳವಾದ ಸಾಗರದ ನೀರಿನಲ್ಲಿ ಕಂಡುಬರುವುದು ಭಾರತೀಯ ನೀರಿನಲ್ಲಿ ಬಹಳ ಅಪರೂಪ" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "ಸೌಸಾ ಪ್ಲಂಬಿಯಾ" ,
        image_path: "Indian-Ocean-Humpback-Dolphin" ,
        local_name: "ಹಿಂದೂ ಮಹಾಸಾಗರದ ಹಂಪ್" ,
        IUCN_status: "EN" ,
        description: "ದೃಢವಾದ ದೇಹ, ಮಧ್ಯಮ ಲಾಗ್ ಕೊಕ್ಕಿನೊಂದಿಗೆ. ಡೋರ್ಸಲ್ ಫಿನ್ ಅನ್ನು ಹಿಂಭಾಗದ ಮಧ್ಯದಲ್ಲಿ ಇರಿಸಲಾಗುತ್ತದೆ, ಗೂನು ಮೇಲೆ ಮತ್ತು ಆದ್ದರಿಂದ ಹೆಸರು. ಒಂದು ಬಲ್ಬಸ್ ಕಲ್ಲಂಗಡಿ ಒಂದು ವಿಶಿಷ್ಟವಾದ ಕ್ರೀಸ್ ಮತ್ತು ದುಂಡಗಿನ ತುದಿಗಳೊಂದಿಗೆ ದೊಡ್ಡ ಫ್ಲಿಪ್ಪರ್" ,
        size: "ಹುಟ್ಟಿದಾಗ ಉದ್ದ: 1m, ವಯಸ್ಕರ ಉದ್ದ: 2.6-2.8m, ವಯಸ್ಕರ ತೂಕ: 280 Kg" ,
        colour_pattern: "ಮೇಲ್ಭಾಗದಲ್ಲಿ ಬೂದುಬಣ್ಣದ ಕಪ್ಪು, ಗುಲಾಬಿ ಬಣ್ಣದ ಹೊಟ್ಟೆ. ಹೊಟ್ಟೆ, ತುಟಿಗಳು ಮತ್ತು ಕೆಳಗಿನ ದವಡೆಗಳು ಹಗುರವಾಗಿರುತ್ತವೆ, ತುಟಿಗಳು ಮತ್ತು ಕೆಳಗಿನ ದವಡೆ ಮತ್ತು ಮಚ್ಚೆಯುಳ್ಳ ಗುಲಾಬಿ. ಕಪ್ಪು ಕಣ್ಣಿನ ಪ್ಯಾಚ್ ಇದೆ." ,
        dorsal_fin: "ಡಾರ್ಸಲ್ ಫಿನ್ ಚಿಕ್ಕದಾಗಿದೆ ಮತ್ತು ದೇಹದ ಮಧ್ಯಬಿಂದುವಿನ ಮುಂದೆ ದೊಡ್ಡ ಗೂನು ಮೇಲೆ ಕುಳಿತಿದೆ" ,
        teeth_count: "ಮೇಲಿನ ದವಡೆಯು 33-39 ಜೋಡಿ ಹಲ್ಲುಗಳನ್ನು ಹೊಂದಿದೆ ಮತ್ತು ಕೆಳಗಿನ ದವಡೆಯು 31-37 ಜೋಡಿ ಹಲ್ಲುಗಳನ್ನು ಹೊಂದಿರುತ್ತದೆ." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "ನಿವಾಸಿ ಜನಸಂಖ್ಯೆ" ,
        habitat_preferance: "30 ಮೀ ಗಿಂತ ಕಡಿಮೆ ಆಳದ ಸಮೀಪ ತೀರದ ಆಳವಿಲ್ಲದ ನೀರಿನಲ್ಲಿ, ನದಿಯ ಬಾಯಿಗಳಿಗೆ ಹತ್ತಿರ ಮತ್ತು ನದೀಮುಖಗಳಲ್ಲಿ ಭಾರತದ ಪಶ್ಚಿಮ ಕರಾವಳಿಯಲ್ಲಿ ಕಂಡುಬರುವ ಅತ್ಯಂತ ಸಾಮಾನ್ಯ ಜಾತಿಗಳು" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "ಸೌಸಾ ಚೈನೆನ್ಸಿಸ್" ,
        image_path: "Indo-Pacific-Humpback-Dolphin" ,
        local_name: "ಇಂಡೋ-ಪೆಸಿಫಿಕ್ ಹಂಪ್" ,
        IUCN_status: "VU" ,
        description: "ದೃಢವಾದ ದೇಹ, ಮಧ್ಯಮ ಲಾಗ್ ಕೊಕ್ಕಿನೊಂದಿಗೆ. ಒಂದು ವಿಶಿಷ್ಟವಾದ ಕ್ರೀಸ್ನೊಂದಿಗೆ ಬಲ್ಬಸ್ ಕಲ್ಲಂಗಡಿ ಇದೆ. ಡೋರ್ಸಲ್ ಫಿನ್ ಅನ್ನು ಹಿಂಭಾಗದ ಮಧ್ಯದಲ್ಲಿ ಇರಿಸಲಾಗುತ್ತದೆ, ಗೂನು ಮೇಲೆ ಮತ್ತು ಆದ್ದರಿಂದ ಹೆಸರು. ಫಿನ್ ಅಡಿಯಲ್ಲಿ ನಿಧಾನವಾಗಿ ಇಳಿಜಾರಾದ ಗೂನು ಎಸ್ ಪ್ಲಂಬಿಯಾದಲ್ಲಿ ಉಚ್ಚರಿಸಲ್ಪಟ್ಟಿಲ್ಲ. ರೆಕ್ಕೆ ಹಿಂಭಾಗದ ಮಧ್ಯಭಾಗದಲ್ಲಿದೆ. ದುಂಡಗಿನ ತುದಿಗಳೊಂದಿಗೆ ಫ್ಲಿಪ್ಪರ್" ,
        size: "ಹುಟ್ಟಿದಾಗ ಉದ್ದ: 1m, ವಯಸ್ಕರ ಉದ್ದ: 2.7m, ವಯಸ್ಕರ ತೂಕ: 240 Kg" ,
        colour_pattern: "ಬೂದುಬಣ್ಣದ ಗುಲಾಬಿ, ಬದಿಗಳಲ್ಲಿ ಹೆಚ್ಚು ಗುಲಾಬಿ, ಬಾಯಿಯ ಸುತ್ತಲೂ ಮತ್ತು ಗುಲಾಬಿ ಬಣ್ಣದ ಹೊಟ್ಟೆ." ,
        dorsal_fin: "ಡಾರ್ಸಲ್ ಫಿನ್ ಚಿಕ್ಕದಾಗಿದೆ" ,
        teeth_count: "ಮೇಲಿನ ದವಡೆಯು 32-38 ಜೋಡಿ ಹಲ್ಲುಗಳನ್ನು ಹೊಂದಿದೆ ಮತ್ತು ಕೆಳಗಿನ ದವಡೆಯು 29-38 ಜೋಡಿ ಹಲ್ಲುಗಳನ್ನು ಹೊಂದಿರುತ್ತದೆ." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "ನಿವಾಸಿ ಜನಸಂಖ್ಯೆ" ,
        habitat_preferance: "ಭಾರತದ ಪೂರ್ವ ಕರಾವಳಿಯಲ್ಲಿ ಕಂಡುಬರುವ ಎಸ್ ಪ್ಲಂಬಿಯಾ ಮತ್ತು ಚೈನೆನ್ಸಿಸ್ ನಡುವಿನ ಅತಿಕ್ರಮಣ ಪ್ರದೇಶವು ಆಗ್ನೇಯ ಭಾರತದಲ್ಲಿದೆ ಎಂದು ಊಹಿಸಲಾಗಿದೆ, ಇದು 30 ಮೀ ಗಿಂತ ಕಡಿಮೆ ಆಳದ ತೀರದ ಸಮೀಪವಿರುವ ಆಳವಿಲ್ಲದ ನೀರಿನಲ್ಲಿ, ನದಿಯ ಬಾಯಿಗಳಿಗೆ ಹತ್ತಿರ ಮತ್ತು ನದೀಮುಖಗಳಲ್ಲಿ ಕಂಡುಬರುತ್ತದೆ." ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "ಟರ್ಸಿಯಾಪ್ಸ್ ಅಡುಂಕಸ್" ,
        image_path: "Indo-Pacific-Bottlenose-Dolphin" ,
        local_name: "ಇಂಡೋ-ಪೆಸಿಫಿಕ್ ಬಾಟಲ್" ,
        IUCN_status: "NT" ,
        description: "ಬಲ್ಬಸ್ ತಲೆ ಮತ್ತು ನಿಧಾನವಾಗಿ ಇಳಿಜಾರಾದ ಹಣೆಯೊಂದಿಗೆ ದೃಢವಾದ ದೇಹವನ್ನು ಹೊಂದಿದೆ. ಕೊಕ್ಕು ಉದ್ದವಾಗಿದ್ದು ಕೆಳಗಿನ ದವಡೆಯು ಮೇಲಿನ ದವಡೆಗಿಂತ ಸ್ವಲ್ಪ ಉದ್ದವಾಗಿದೆ. ಪ್ರಮುಖ ಕ್ರೀಸ್ ಇದೆ. ಫ್ಲಿಪ್ಪರ್ಗಳು ಚಿಕ್ಕದಾಗಿರುತ್ತವೆ, ಮೊನಚಾದವು." ,
        size: "ಹುಟ್ಟಿದಾಗ ಉದ್ದ: 85-112cm, ವಯಸ್ಕರ ಉದ್ದ: 2.7m, ವಯಸ್ಕರ ತೂಕ: 230 Kg" ,
        colour_pattern: "ಬದಿಗಳಲ್ಲಿ ಹಗುರವಾದ ಬೂದು ಬಣ್ಣದ ಕೇಪ್" ,
        dorsal_fin: "ಡಾರ್ಸಲ್ ಫಿನ್ ವಿಶಾಲ ತಳಹದಿಯೊಂದಿಗೆ ಎತ್ತರವಾಗಿದೆ" ,
        teeth_count: "ಪ್ರತಿ ದವಡೆಯು 21-29 ಜೋಡಿ ಹಲ್ಲುಗಳನ್ನು ಹೊಂದಿರುತ್ತದೆ." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "ನಿವಾಸಿ ಜನಸಂಖ್ಯೆ" ,
        habitat_preferance: "ಸಮೀಪದ ತೀರದ ನೀರಿನಲ್ಲಿ ಕಂಡುಬರುವ ಭಾರತೀಯ ನೀರಿನಲ್ಲಿ ಟರ್ಸಿಯಾಪ್ಸ್ ಟ್ರಂಕಾಟಸ್ (ಸಾಮಾನ್ಯ ಬಾಟಲ್" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "ಸ್ಟೆನೆಲ್ಲಾ ಅಟೆನುವಾಟಾ" ,
        image_path: "Pan-Tropical-Spotted-Dolphin" ,
        local_name: "ಪ್ಯಾನ್-ಟ್ರಾಪಿಕಲ್ ಸ್ಪಾಟೆಡ್ ಡಾಲ್ಫಿನ್" ,
        IUCN_status: "LC" ,
        description: "ಕ್ರೀಸ್ ಹೊಂದಿರುವ ಪ್ರಮುಖ ಕಲ್ಲಂಗಡಿ ಹೊಂದಿರುವ ತೆಳ್ಳಗಿನ ಸುವ್ಯವಸ್ಥಿತ ದೇಹವನ್ನು ಹೊಂದಿದೆ. ಡಾರ್ಸಲ್ ಫಿನ್ ಎತ್ತರವಾಗಿದೆ, ತೆಳ್ಳಗಿರುತ್ತದೆ, ಹಿಂಭಾಗದ ಮಧ್ಯಭಾಗದಲ್ಲಿರುವ ತುದಿಗಳಲ್ಲಿ ದುಂಡಾಗಿರುತ್ತದೆ. ಕೊಕ್ಕು ಮಧ್ಯಮ ಉದ್ದವಾಗಿದೆ, ಫ್ಲಿಪ್ಪರ್ಗಳು ತೆಳ್ಳಗಿರುತ್ತವೆ ಮತ್ತು ಮೊನಚಾದವು." ,
        size: "ಹುಟ್ಟಿದಾಗ ಉದ್ದ: 90cm, ವಯಸ್ಕರ ಉದ್ದ: 2.4-2.6m, ವಯಸ್ಕರ ತೂಕ: 119 Kg" ,
        colour_pattern: "ಪ್ಯಾಂಟ್ರೊಪಿಕಲ್ ಮಚ್ಚೆಯುಳ್ಳ ಡಾಲ್ಫಿನ್" ,
        dorsal_fin: " ಎತ್ತರದ, ಫಾಲ್ಕೇಟ್ ಡಾರ್ಸಲ್ ಫಿನ್ ಅನ್ನು ಕೇಂದ್ರದಲ್ಲಿ ಇರಿಸಲಾಗುತ್ತದೆ" ,
        teeth_count: "ಪ್ರತಿ ದವಡೆಯು 35-40 ಸಣ್ಣ ಮೊನಚಾದ ಹಲ್ಲುಗಳನ್ನು ಹೊಂದಿರುತ್ತದೆ." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "ನಿವಾಸಿ ಜನಸಂಖ್ಯೆ" ,
        habitat_preferance: "ಪ್ಯಾನ್-ಉಷ್ಣವಲಯದ ಮಚ್ಚೆಯುಳ್ಳ ಡಾಲ್ಫಿನ್" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "ಸ್ಟೆನೆಲ್ಲಾ ಲಾಂಗಿರೋಸ್ಟ್ರಿಸ್" ,
        image_path: "Spinner-Dolphin" ,
        local_name: "ಸ್ಪಿನ್ನರ್ ಡಾಲ್ಫಿನ್" ,
        IUCN_status: "DD" ,
        description: "ನಿಧಾನವಾಗಿ ಇಳಿಜಾರಾದ ಹಣೆಯೊಂದಿಗೆ ಅತ್ಯಂತ ತೆಳ್ಳಗಿನ ದೇಹವನ್ನು ಹೊಂದಿದೆ. ಒಂದು ಕ್ರೀಸ್ ಇರುತ್ತದೆ ಮತ್ತು ಕೊಕ್ಕು ತುಂಬಾ ಉದ್ದವಾಗಿದೆ. ಫ್ಲಿಪ್ಪರ್ಗಳು ತೆಳ್ಳಗೆ ಮತ್ತು ಮೊನಚಾದವು." ,
        size: "ಹುಟ್ಟಿದಾಗ ಉದ್ದ: 75-80cm, ವಯಸ್ಕರ ಉದ್ದ: 1.5-2.3m, ವಯಸ್ಕರ ತೂಕ: 82 Kg" ,
        colour_pattern: "ಮೇಲ್ಭಾಗದಲ್ಲಿ ಬೂದುಬಣ್ಣದ ಕಪ್ಪು, ಹಗುರವಾದ ಬೂದು ಬ್ಯಾಂಡ್ ಬದಿಗಳಲ್ಲಿ ಚಲಿಸುತ್ತದೆ ಮತ್ತು ಬಿಳಿ ಹೊಟ್ಟೆ (ತ್ರಿಪಕ್ಷೀಯ ಮಾದರಿ). ಕಣ್ಣಿನಿಂದ ಕ್ರೀಸ್" ,
        dorsal_fin: "ಡಾರ್ಸಲ್ ಫಿನ್ ಎತ್ತರವಾಗಿದೆ, ತೆಳ್ಳಗಿರುತ್ತದೆ, ಹಿಂಭಾಗದ ಮಧ್ಯದಲ್ಲಿ ನೆಟ್ಟಗಿರುತ್ತದೆ" ,
        teeth_count: "ಪ್ರತಿ ದವಡೆಯು 40-62 ಜೋಡಿ ಹಲ್ಲುಗಳನ್ನು ಹೊಂದಿರುತ್ತದೆ (ಡ್ವಾರ್ಫ್ ಸ್ಪಿನ್ನರ್ ಡಾಲ್ಫಿನ್ಗಳು ಪ್ರತಿ ದವಡೆಯಲ್ಲಿ 41-52 ಜೋಡಿ ಹಲ್ಲುಗಳನ್ನು ಹೊಂದಿರುತ್ತವೆ)" ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "ನಿವಾಸಿ ಜನಸಂಖ್ಯೆ" ,
        habitat_preferance: "ಆಳವಾದ ಕಡಲಾಚೆಯ ನೀರಿನಲ್ಲಿ ಮತ್ತು ಹತ್ತಿರದ ಸಮುದ್ರದ ನೀರು ಆಳವಾಗಿರುವ ಸಾಗರ ದ್ವೀಪಗಳ ಸುತ್ತಲೂ ಕಂಡುಬರುತ್ತದೆ" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "ಸ್ಟೆನೆಲ್ಲಾ ಕೊರುಲಿಯೋಲ್ಬಾ" ,
        image_path: "Striped-Dolphin" ,
        local_name: "ಪಟ್ಟೆ ಡಾಲ್ಫಿನ್" ,
        IUCN_status: "LC" ,
        description: "ದೇಹವು ಇತರ ಸ್ಟೆನೆಲ್ಲಾದಷ್ಟು ತೆಳ್ಳಗಿಲ್ಲ. ಅವರು ನಿಧಾನವಾಗಿ ಇಳಿಜಾರಾದ ಹಣೆಯನ್ನು ಮತ್ತು ಮಧ್ಯಮ ಉದ್ದದ ಕೊಕ್ಕನ್ನು ಹೊಂದಿದ್ದಾರೆ. ಫ್ಲಿಪ್ಪರ್" ,
        size: "ಹುಟ್ಟಿದಾಗ ಉದ್ದ: 93-100cn, ವಯಸ್ಕರ ಉದ್ದ: 2.56m, ವಯಸ್ಕರ ತೂಕ: 155 Kg" ,
        colour_pattern: "ಡಾರ್ಕ್ ಕೇಪ್ನೊಂದಿಗೆ ಮೇಲ್ಭಾಗದಲ್ಲಿ ಬೂದುಬಣ್ಣದ ಕಪ್ಪು. ಡೋರ್ಸಲ್ ಫಿನ್ನ ಮುಂಭಾಗದ ಕಡೆಗೆ ಬ್ಲೇಜ್ ಜೊತೆಗೆ ಬದಿಯಲ್ಲಿ ತಿಳಿ ಬೂದು. ಕಪ್ಪು ಪಟ್ಟಿಯು ಕಣ್ಣಿನಿಂದ ಗುದದ್ವಾರಕ್ಕೆ ಮತ್ತು ಕಣ್ಣಿನಿಂದ ಫ್ಲಿಪ್ಪರ್" ,
        dorsal_fin: "ಡೋರ್ಸಲ್ ಫಿನ್ ತ್ರಿಕೋನವಾಗಿದ್ದು ಹಿಂಭಾಗದ ಮಧ್ಯಭಾಗದಲ್ಲಿ ವಿಶಾಲವಾದ ತಳವನ್ನು ಹೊಂದಿದೆ" ,
        teeth_count: "ಪ್ರತಿ ದವಡೆಯು 40-55 ಜೋಡಿ ಹಲ್ಲುಗಳನ್ನು ಹೊಂದಿರುತ್ತದೆ." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "ಅಜ್ಞಾತ" ,
        habitat_preferance: "ಸಾಗರದ ಆಳವಾದ ನೀರಿನಲ್ಲಿ ಕಂಡುಬರುತ್ತದೆ" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "ಡೆಲ್ಫಿನಸ್ ಕ್ಯಾಪೆನ್ಸಿಸ್ ಟ್ರಾಪಿಕಲಿಸ್" ,
        image_path: "Indo-Pacific-Common-Dolphin" ,
        local_name: "ಇಂಡೋ-ಪೆಸಿಫಿಕ್ ಸಾಮಾನ್ಯ ಡಾಲ್ಫಿನ್" ,
        IUCN_status: "LC" ,
        description: "ನಿಧಾನವಾಗಿ ಇಳಿಜಾರಾದ ಹಣೆಯ ಮತ್ತು ಪ್ರಮುಖವಾದ ಕ್ರೀಸ್ನೊಂದಿಗೆ ಅತ್ಯಂತ ತೆಳ್ಳಗಿನ ದೇಹವನ್ನು ಹೊಂದಿದೆ. ಅವು ಬಹಳ ಉದ್ದವಾದ ಕೊಕ್ಕನ್ನು ಹೊಂದಿರುತ್ತವೆ ಮತ್ತು ಫ್ಲಿಪ್ಪರ್" ,
        size: "ಹುಟ್ಟಿದಾಗ ಉದ್ದ: 80-100cm, ವಯಸ್ಕರ ಉದ್ದ: 2.6m, ವಯಸ್ಕರ ತೂಕ: 235 Kg" ,
        colour_pattern: "ಮೇಲ್ಭಾಗದಲ್ಲಿ ಬೂದುಬಣ್ಣದ ಕಪ್ಪು, ಡೋರ್ಸಲ್ ಫಿನ್" ,
        dorsal_fin: "ಡಾರ್ಸಲ್ ಫಿನ್ ಎತ್ತರವಾಗಿದೆ, ತೆಳ್ಳಗಿರುತ್ತದೆ, ಫಾಲ್ಕೇಟ್ ಮತ್ತು ಹಿಂಭಾಗದ ಮಧ್ಯಭಾಗದಲ್ಲಿದೆ" ,
        teeth_count: "ಮೇಲಿನ ದವಡೆಯು 54-67 ಜೋಡಿ ಹಲ್ಲುಗಳನ್ನು ಹೊಂದಿದೆ ಮತ್ತು ಕೆಳಗಿನ ದವಡೆಯು 52-64 ಜೋಡಿ ಹಲ್ಲುಗಳನ್ನು ಹೊಂದಿದೆ." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "ಅಜ್ಞಾತ" ,
        habitat_preferance: "ಕಾಂಟಿನೆಂಟಲ್ ಶೆಲ್ಫ್" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "ಲ್ಯಾಗೆನೊಡೆಲ್ಫಿಸ್ ಹೋಸೆ" ,
        image_path: "Fraser's-Dolphin" ,
        local_name: "ಫ್ರೇಸರ್ ಡಾಲ್ಫಿನ್" ,
        IUCN_status: "LC" ,
        description: "ನಿಧಾನವಾಗಿ ಇಳಿಜಾರಾದ ಹಣೆಯೊಂದಿಗೆ, ಪ್ರಮುಖವಾದ ಕ್ರೀಸ್ನೊಂದಿಗೆ ಅತ್ಯಂತ ಸ್ಥೂಲವಾದ ದೇಹವನ್ನು ಹೊಂದಿದೆ. ಕಲ್ಲಂಗಡಿ ಮತ್ತು ಕೊಕ್ಕಿನ ನಡುವೆ. ಕೊಕ್ಕು ಚಿಕ್ಕದಾಗಿದೆ ಮತ್ತು ಮೊಂಡುತನದಿಂದ ಕೂಡಿರುತ್ತದೆ ಮತ್ತು ಫ್ಲಿಪ್ಪರ್" ,
        size: "ಹುಟ್ಟಿದಾಗ ಉದ್ದ: 1-1.1m, ವಯಸ್ಕರ ಉದ್ದ: 2.6-2.7m, ವಯಸ್ಕರ ತೂಕ: 210 Kg" ,
        colour_pattern: "ಗುಲಾಬಿ ಹೊಟ್ಟೆ ಮತ್ತು ಮುಖದಿಂದ ಗುದದ್ವಾರಕ್ಕೆ ಚಲಿಸುವ ತಿಳಿ ಬೂದು ಬಣ್ಣದ ಬ್ಯಾಂಡ್" ,
        dorsal_fin: "ಡೋರ್ಸಲ್ ಫಿನ್ ಚಿಕ್ಕದಾಗಿದೆ, ತ್ರಿಕೋನ ಮತ್ತು ಹಿಂಭಾಗದ ಮಧ್ಯದಲ್ಲಿ ನೆಟ್ಟಗಿರುತ್ತದೆ" ,
        teeth_count: "ಪ್ರತಿ ದವಡೆಯು 38-44 ಜೋಡಿ ಹಲ್ಲುಗಳನ್ನು ಹೊಂದಿರುತ್ತದೆ." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "ತಿಳಿದಿಲ್ಲ" ,
        habitat_preferance: "ಸಮುದ್ರದ ಜಾತಿಗಳು ಆಳವಾದ ಕಡಲಾಚೆಯ ನೀರಿನಲ್ಲಿ ಕಂಡುಬರುತ್ತವೆ" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "ನಿಯೋಫೋಕೇನಾ ಫೋಕೆನಾಯ್ಡ್ಸ್" ,
        image_path: "Indo-Pacific-Finless-Porpoise" ,
        local_name: "ಇಂಡೋ-ಪೆಸಿಫಿಕ್ ಫಿನ್ಲೆಸ್ ಪೋರ್ಪೊಯಿಸ್" ,
        IUCN_status: "VU" ,
        description: "ಬಲ್ಬಸ್ ತಲೆ ಮತ್ತು ದುಂಡಾದ ಮೂತಿಯೊಂದಿಗೆ ಟಾರ್ಪಿಡೊ ಆಕಾರದ ದೇಹವನ್ನು ಹೊಂದಿದೆ. ಕೊಕ್ಕು ಇಲ್ಲ. ಫ್ಲಿಪ್ಪರ್" ,
        size: "ಹುಟ್ಟಿದಾಗ ಉದ್ದ: 75-85cm, ವಯಸ್ಕರ ಉದ್ದ: 1.5m, ವಯಸ್ಕರ ತೂಕ: 60 Kg" ,
        colour_pattern: "10-25 ಟ್ಯೂಬರ್" ,
        dorsal_fin: "ಡಾರ್ಸಲ್ ಫಿನ್ ಇರುವುದಿಲ್ಲ" ,
        teeth_count: "ಪ್ರತಿ ದವಡೆಯಲ್ಲಿ 15-22 ಜೋಡಿ ಹಲ್ಲುಗಳನ್ನು ಹೊಂದಿರುವ ಸ್ಪೇಡ್-ಆಕಾರದ ಹಲ್ಲುಗಳು" ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "ನಿವಾಸಿ ಜನಸಂಖ್ಯೆ" ,
        habitat_preferance: "ಸುಂದರಬನ್ಸ್ ಸೇರಿದಂತೆ ಭಾರತದ ಕರಾವಳಿಯುದ್ದಕ್ಕೂ, ತೀರ ಸಮೀಪವಿರುವ ನೀರಿನಲ್ಲಿ ಮತ್ತು ನದೀಮುಖಗಳಲ್ಲಿ ಕಂಡುಬರುತ್ತದೆ" ,
        type: "Marine Mammals" ,
    },
    {   
        scientific_name: "ಪ್ಲಾಟಾನಿಸ್ಟಾ ಗ್ಯಾಂಟಿಕಾ" ,
        image_path: "South-Asian-River-Dolphin" ,
        local_name: "ದಕ್ಷಿಣ ಏಷ್ಯಾದ ನದಿ ಡಾಲ್ಫಿನ್" ,
        IUCN_status: "EN" ,
        description: "ದಕ್ಷಿಣ ಏಷ್ಯಾದ ನದಿ ಡಾಲ್ಫಿನ್ ಸ್ಥೂಲವಾದ ದೇಹವನ್ನು ಹೊಂದಿದೆ ಮತ್ತು ಚಪ್ಪಟೆಯಾದ ತುದಿಯೊಂದಿಗೆ ಉದ್ದವಾದ ತೆಳ್ಳಗಿನ ಕೊಕ್ಕನ್ನು ಹೊಂದಿದೆ. ಹೆಣ್ಣಿನಲ್ಲಿ ಕೊಕ್ಕು ಉದ್ದವಾಗಿದೆ ಮತ್ತು ಪುರುಷರಲ್ಲಿ ತುಲನಾತ್ಮಕವಾಗಿ ಚಿಕ್ಕದಾಗಿದೆ. ಕೊಕ್ಕು ಮತ್ತು ಕಲ್ಲಂಗಡಿಗಳ ನಡುವೆ ಒಂದು ಪ್ರಮುಖ ಕ್ರೀಸ್ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ, ಕಲ್ಲಂಗಡಿ ಮೇಲೆ ರಿಡ್ಜ್ ಇದೆ. ಒಂದೇ ಸ್ಲಿಟ್ ಬ್ಲೋಹೋಲ್ ಅನ್ನು ಸೂಚಿಸುತ್ತದೆ. ಕಣ್ಣುಗಳು ಪಿನ್" ,
        size: "ಹುಟ್ಟಿದಾಗ ಉದ್ದ: 70-90cm, ವಯಸ್ಕರ ಉದ್ದ: 1.6-2.6m, ವಯಸ್ಕರ ತೂಕ: 85 Kg" ,
        colour_pattern: "ಮೇಲ್ಭಾಗ ಮತ್ತು ಹಿಂಭಾಗವು ತಿಳಿ ಕಂದು ಬಣ್ಣದಿಂದ ಕಂದು ಬೂದು ಬಣ್ಣದ್ದಾಗಿದ್ದು, ಕೆಳಭಾಗವು ಹಗುರವಾಗಿರುತ್ತದೆ" ,
        dorsal_fin: "ಡಾರ್ಸಲ್ ಫಿನ್ ಕಡಿಮೆ, ಚಿಕ್ಕದಾಗಿದೆ, ತ್ರಿಕೋನಾಕಾರದ, ಅಗಲ-ಆಧಾರಿತ ಮತ್ತು ರೋಸ್ಟ್ರಮ್ ತುದಿಯಿಂದ ಸುಮಾರು 2/3 ರಷ್ಟಿದೆ" ,
        teeth_count: "ಮೇಲಿನ ದವಡೆಯು 26-39 ಜೋಡಿ ಹಲ್ಲುಗಳನ್ನು ಹೊಂದಿದೆ ಮತ್ತು ಕೆಳಗಿನ ದವಡೆಯು 26-35 ಜೋಡಿ ಹಲ್ಲುಗಳನ್ನು ಹೊಂದಿದೆ." ,
        baleen_plate: null,
        throat_grooves: null,
        seasonal_movement: "ನಿವಾಸಿ ಜನಸಂಖ್ಯೆ" ,
        habitat_preferance: "ಸಿಂಧೂ, ಗಂಗಾ, ಬ್ರಹ್ಮಪುತ್ರ, ಮೇಘನಾ ಮತ್ತು ಕರ್ಣಫುಲಿ ಸಂಗು ನದಿಗಳು ಮತ್ತು ಅವುಗಳ ಉಪನದಿಗಳಲ್ಲಿ ಕಂಡುಬರುತ್ತದೆ. P. g .minor ಪಾಕಿಸ್ತಾನದ ಸಿಂಧೂ ಒಳಚರಂಡಿ ಮತ್ತು ಭಾರತದಲ್ಲಿ ಬಿಯಾಸ್ ನದಿಯಲ್ಲಿ ಕಂಡುಬರುತ್ತದೆ. Pg gangetica ಉಳಿದ ಜಾತಿಯ ವಿತರಣಾ ವ್ಯಾಪ್ತಿಯಲ್ಲಿ ಕಂಡುಬರುತ್ತದೆ." ,
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
import React, { useState } from 'react';
import { Text, View, FlatList, Image, ScrollView } from 'react-native';
import styles from './style'
import { YellowBox } from 'react-native'

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Occurs when FlatList is inside ScrollView since v61. Fairly new, will keep an eye out.
])

import bloodChartImage from '../../images/blood_chart.png'

function Faq() {
  const [open, setOpen] = useState(null)
  const openQuestion = (id) => setOpen(open === id ? null : id)

  return (
    <ScrollView>
      <FlatList
        data={faqs}
        renderItem={({ item }) => (
          <View style={styles.faq}>
            <Text 
              style={[styles.question, (open === item.id && styles.open)]}
              onPress={() => openQuestion(item.id)}>
              {item.question}
            </Text>
            
            { open === item.id && (
              <Text style={styles.answer}>{item.answer}</Text>
            )}
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
      <View style={styles.faq}>
        <Text
          style={[styles.question, (open === 5 && styles.open)]}
          onPress={() => openQuestion(5)}>
          What blood types can I donate to?
        </Text>

        {open === 5 && (
          <View style={styles.blood_chart}>
          <Image
            style={{ width: 310, height: 300, marginTop: 10 }}
            source={bloodChartImage}
          />
          </View>
        )}
      </View>
    </ScrollView>
  )
}

const faqs = [
  {
    id: 1,
    question: "Who can donate?", 
    answer: "Requirements may vary depending on the hospital." +
      "\nBe in good health - between 16 and 65 years old (those aged 16 and 17 need parental consent)" +
      "\nWeigh at least 100 pounds or 45 KG -have a blood pressure between 90 and 160 mmHg (systolic), 60 and 100 mmHg (diastolic)" +
      "\npass the physical and health history assessments ",
  }, { 
    id: 2,
    question: "Medical Conditions that affect eligibility", 
    answer: "May vary depending on the hospital." +
     "\nDiabetes, Cancer, Hyperthyroidsm, Cardiovascular diseases, Severe Psychiatric Disorder, Epilepsy/Convulsions, Bronchitis and lung disorders, STDs, Malaria, Kidney and Liver Diseases, Prolonged bleeding, Use of prohibited drugs"
  }, { 
    id: 3,
    question: "Preparation for blood donation", 
    answer: "1. Have at least 8 hours of sleep \n2. No alcohol intake 24 hours prior to the donation. \n3. No medication for at least 24 hours prior to the donation \n4. Eat and stay hydrated.", 
  }, {
    id: 4,
    question: "Steps on how to donate blood", 
    answer: "1. Register your registration form \n2. Have your blood type checked. \n3. Have a physician conduct blood donor examination \n4. Blood Examination \n5. Actual Blood donation \n6. 5-10mins of rest and fluid intake",
  }
]
export default Faq;
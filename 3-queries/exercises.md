# Exercises - Section 3

1. Create View map to list documents by type

2. Create View reduce to count of each document type

3. Create view to show count of patients by state

4. Create a view count of doctors by zipcode

5. Create an index on type, sex, birthDate, name.first, name.last, address.state, address.zip

6. Use find to find patients that have the same first letter of your last name
are the same sex and are living in the following states ['NJ', 'SC', 'CO', 'CA', 'MO']

7. Use find to find all patients, born before 1962

8. Use startkey, limit, skip to create 10 pages of doctors

9. Using the data write 5 prescriptions for a patient and doctor

  - type: 'prescription'
  - patient_id: pick a patient
  - doctor_id: pick a doctor
  - medication: {
    id: medication_id,
    name: name,
    rxcui: rxcui
  }
  - quantity
  - startDate
  - directions

10. Create a join view that will return all prescriptions for a patient.
11. Create a join view that will return all prescriptions for a doctor.
12. Create a join view that will return the patient and doctor for a prescription.

[Return](./)

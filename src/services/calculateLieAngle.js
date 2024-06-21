    // Calculates lie angle from user's height and wrist-to-floor measurements based on a fixed table
    const calculateLieAngle = (data, questions) => {
      const height = questions?.find(question => question?.node?.resultType === 'shaft length')
      const wrist = questions?.find(question => question?.node?.resultType === 'lie angle')

      const heightAnswers = height?.node?.answers?.edges
      const heightId = height?.node?.id
      const wristId = wrist?.node?.id
      const heightIds = heightAnswers.map(answer => {
         return answer?.node?.id
      })

      // Checks database Ids of user's answers to determine appropriate lie angle from a fixed table of values
      // based on user's height and wrist-to-floor measurement, may want to change this for future proofing/in case database records
      // are changed 

      if (data[wristId] === '129' && heightIds.indexOf(data[heightId]) > 1) {
          return '+3° (Upright)'
      } else if (data[wristId] === '128' && heightIds.indexOf(data[heightId]) <= 4) {
          return '+3° (Upright)'
      } else if (data[wristId] === '128' && heightIds.indexOf(data[heightId]) > 4) {
          return '+2° (Upright)'
      } else if (data[wristId] === '127') {
          return '+2° (Upright)'
      } else if (data[wristId] === '126' && heightIds.indexOf(data[heightId]) <= 4) {
          return '+2° (Upright)'
      } else if (data[wristId] === '126' && heightIds.indexOf(data[heightId]) > 4) {
          return '+1° (Upright)'
      } else if (data[wristId] === '125' && heightIds.indexOf(data[heightId]) <= 4) {
          return '+1° (Upright)'
      } else if (data[wristId] === '125' && heightIds.indexOf(data[heightId]) > 4) {
          return 'Standard'
      } else if (data[wristId] === '124' || data[wristId] === '123' || data[wristId] === '122') {
          return 'Standard'
      } else if (data[wristId] === '121' && heightIds.indexOf(data[heightId]) <= 2 ) {
          return 'Standard'
      } else if (data[wristId] === '121' && heightIds.indexOf(data[heightId]) > 2 ) {
          return '-1° (Flat)'
      } else if (data[wristId] === '120' && heightIds.indexOf(data[heightId]) <= 2 ) {
          return '-1° (Flat)'
      } else if (data[wristId] === '120' && heightIds.indexOf(data[heightId]) > 2 ) {
          return '-2° (Flat)'
      } else if (data[wristId] === '119' && heightIds.indexOf(data[heightId]) <= 2 ) {
          return '-2° (Flat)'
      } else if (data[wristId] === '119' && heightIds.indexOf(data[heightId]) > 2 ) {
          return '-3° (Flat)'
      } else if (data[wristId] === '118' && heightIds.indexOf(data[heightId]) <= 4 ) {
          return '-3° (Flat)'
      } else {
          return null
      }
  }

  export default calculateLieAngle
$(() => {
  $('#profileButton').on('click', e => {
    e.preventDefault()
    window.location.href = 'profile'
  })

  $('#mapSubmit').on('click', e => {
    e.preventDefault()
    let inputData = $('#location').val().split(' ').join('+')
    let APIkey = 'AIzaSyB5U4qgJfbbGVBQc1Ewa0X0vJpZrvyIRSM'
    console.log(inputData)
    $.ajax({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${inputData}&&key=AIzaSyB5U4qgJfbbGVBQc1Ewa0X0vJpZrvyIRSM`
    }).done(data => {
      let location = data.results[0].geometry.location
      initMap(location,14)
      console.log(location)
      $($(".longAt")[0]).val(JSON.stringify(location))

      // make longAt invisible
    })
  })
  

  function initMap (data,scope) {
    var uluru = data||{ lat: 42.698334, lng: 23.319941 }
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: scope||6,
      center: uluru
    })
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    })
  }
})

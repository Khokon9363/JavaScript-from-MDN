let isCharging = document.querySelector('.is-charging').textContent

navigator.getBattery()
         .then( (battery) => {
             alert(`Your battery charge level ${battery.level}`)
         })
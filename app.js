const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
// const yargs = require('yargs')

const address = process.argv[2]

// console.log(address)

if (!address) {
    console.log('please provide an address')
} else {
    geocode(address, (error, {latitude, longitude, label} = {}) => {
                    if (error) {
                        console.log(error)
                    } else {
                        forecast(latitude, longitude, (error, {temperature} = {}) => {
                            if(error) {
                                console.log(error)
                            } else {
                                console.log(label)
                                console.log(temperature)
                            }
                        })
                    }
                })
}

// yargs.command({
//     command: 'location',
//     describe: 'Enter your desired location:',
//     builder: {
//         city: {
//             describe: 'city you wanted',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler(argv) {
//         geocode(argv.city, (error, data) => {
//             if (error) {
//                 console.log(error)
//             } else {
//                 forecast(data.latitude, data.longitude, (error, response) => {
//                     if(error) {
//                         console.log(error)
//                     } else {
//                         console.log(response.location.region)
//                         console.log(response.current.temperature)
//                     }
//                 })
//             }
//         })
        
//     }
// })

// yargs.parse()
// geocode('philadelphia', (error, data) => {
//     if (error) {
//         console.log(error)
//     } else {
//         forecast(data.latitude, data.longitude, (error, response) => {
//             if(error) {
//                 console.log(error)
//             } else {
//                 console.log(response.temperature)
//             }
//         })
//     }
// })


import * as cheerio from 'cheerio';
import fetch from 'node-fetch';
import fs from 'fs'

// async function fetFormulaOneDrivers() {
//     try {
//         const response = await fetch('https://www.formula1.com/en/drivers.html')
//         const body = await response.text()
//         const $ = cheerio.load(body)

//         // const wrapper = $('.listing-items--wrapper')
//         // console.log(wrapper.length)

//         const items = []
//         $('.listing-items--wrapper > .row > .col-12').map((i, element) => {

//             const rank = $(element).find('.rank').text()
//             const points = $(element).find('.points > .f1-wide--s').text()
//             const firstName = $(element).find('.listing-item--name span:first').text()
//             const lastName = $(element).find('.listing-item--name span:last').text()
//             const photo = $(element).find('.listing-item--photo img').attr('data-src')

//             items.push({
//                 rank,
//                 points,
//                 firstName,
//                 lastName,
//                 photo
//             })

//             console.log(items)
//             fs.writeFile('formula.json', JSON.stringify(items), function(err){
//                 if(err) return console.log(err)
//                 console.log('Formula 1 Drivers were saved as: formula1.json')
//             })
//         })

//     } catch (error) {
//         console.log(error)
//     }
// }

// fetFormulaOneDrivers()

// ----------------------------------------------------------------------

async function getFantasyNews() {
    try {
        const response = await fetch('https://www.cbssports.com/fantasy/football/')
        const body = await response.text()
        const $ = cheerio.load(body)

        // const wrapper = $('.latest-news > .latest-news-items > div > li > a > div:.latest-content h4')
        // console.log(wrapper)

        const items = []
        $('.latest-news .latest-news-items div li').map((i, element) => {

            const title = $(element).find('div.latest-content h4').text()
            const url = $(element).find('a').attr('href')
            const photo = $(element).find('a figure img').attr('src')

        //     const points = $(element).find('.points > .f1-wide--s').text()
        //     const firstName = $(element).find('.listing-item--name span:first').text()
        //     const lastName = $(element).find('.listing-item--name span:last').text()
        //     const photo = $(element).find('.listing-item--photo img').attr('data-src')

            items.push({
                title,
                url,
                photo,

            })

            console.log(items)
        
        //     fs.writeFile('formula.json', JSON.stringify(items), function(err){
        //         if(err) return console.log(err)
        //         console.log('Formula 1 Drivers were saved as: formula1.json')
            // })
        })

    } catch (error) {
        console.log(error)
    }
}

getFantasyNews()



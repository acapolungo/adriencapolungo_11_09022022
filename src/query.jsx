

export async function getAllData() {
    const data = await fetch(`${process.env.PUBLIC_URL}/data/logements.json`)
    const response = await data.json()
    return response
}

export async function getLodgingById(id) {
    const data = await fetch(`${process.env.PUBLIC_URL}/data/logements.json`)
    const response = await data.json()
    // debugger
    return response.find(lodging => lodging.id === id)
}

// export async function getAllData() {

//     // code Effect de bord par rapport au composant

//     fetch(`${process.env.PUBLIC_URL}/data/logements.json`)
//         .then((response) => response.json()
//             .then((data) => {
//                 //console.log(data)
//                 return data
//             })
//             .catch((error) => console.log(error))
//         )

        
// }


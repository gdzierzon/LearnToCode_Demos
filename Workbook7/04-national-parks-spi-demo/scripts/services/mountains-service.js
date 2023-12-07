
class MountainsService {

    baseUrl = "http://localhost:3000/Mountains"

    async getAllMountains() 
    {
        const response = await fetch(this.baseUrl)
        const body = await response.json()

        const mountains = body.map( m => {
            return {
                name: m.Name,
                elevation: m.Elevation,
                effort: m.Effort,
                img: m.Img,
                desc: m.Desc,
                coords: {
                    lat: m.Coords.Lat,
                    lng: m.Coords.Lng
                }
            }
        })

        return mountains
    }

    async findByName(name) {
        const url = this.baseUrl + `?Name=${name}`

        // the response is THE WHOLE PACKAGE - response.json() UNPACKAGES the response - returns the body
        let response = await fetch(url)
        let body = await response.json()
        
        // the body is... an array with 1 mountain    
        const mountains = body.map( m => {
            return {
                name: m.Name,
                elevation: m.Elevation,
                effort: m.Effort,
                img: m.Img,
                desc: m.Desc,
                coords: {
                    lat: m.Coords.Lat,
                    lng: m.Coords.Lng
                }
            }
        })
    
        return mountains[0]
    }

    async add(mountain){
        // POST to add a new mountain to the API
    }

    async update(mountain){
        // PUT to update a mountain in the API
    }

    async delete(name) {
        // DELETE a mountain from the API
    }

}
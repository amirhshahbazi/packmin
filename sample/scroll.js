import treasures from "./treasures"

function extractTreasuresLocations() {
    const locations = treasures.map(treasure => treasure.location)
    return locations
}

export default extractTreasuresLocations

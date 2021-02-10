import _ from "lodash";
import axios from "axios";

export class BreakingBadApi {
    static URL = 'https://breakingbadapi.com/api'

    static search(characters) {
        const filterCharacters = Array.isArray(characters) ? characters : [characters];
        return axios.get(`${BreakingBadApi.URL}/episodes?series=Breaking+Bad`).then((result) => {
            const data = result.data || [];
            return data.filter(episode => _.isEmpty(_.difference(filterCharacters, episode.characters)))
        })
    }
}

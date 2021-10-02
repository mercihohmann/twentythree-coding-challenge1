export const searchResult = async query => {
    if (query && query.length > 0) {
        const url = `https://your.service.com/api/assets?search=${query}`;
        const res = await fetch(url);
        const resJson = res.json();
        return resJson;
    } else {
        return [];
    }
}
const verifyMethods = () => {
    try {
        window.localStorage.setItem('test', 'only a test');
        const myTestItem = window.localStorage.getItem('test');
        window.localStorage.clear();
        console.debug('local storage seems to be working');
        return true;
    } catch (error) {
        console.error('local storage does not seem to be available', error);
        return false;
    }
};

const saveItem = (key, value) => {
    try {
        const item = value instanceof Object ? JSON.stringify(value) : value;
        localStorage.setItem(key, item);
        
    } catch (error) {
        console.error('localStore.saveItem failed to save to local storage', {key: key, value: value});
        throw error;
    }
};

const fetchItem = (key, type = '') => {
    const item = localStorage.getItem(key);
    try {
        switch (type.toLocaleLowerCase()) {
            case 'string': return item.toString();
            case 'number': return Number(item);
            case 'object': return JSON.parse(item);
            default: return item;
        }
    } catch (error) {
        console.error(`localStore.fetchItem error encountered while fetching ${key}`, { key, type, });
        throw error;
    }
};

export default {
    verifyMethods,
    fetchItem,
    saveItem,
}

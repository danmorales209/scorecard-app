import { faker } from '@faker-js/faker';

const generateRandomRow = (numberOfCells=5, options = {}) => {
    const {freeSpaceCell} = options;
    return Array.from({length: numberOfCells}, (_, index) => {
        if (freeSpaceCell === index) {
            return 'Free Space';
        }
        return faker.lorem.word();
    });
};

const generateRandomSet = (numberOfRows, options = {}) => {
    const {
        freeSpaceRow,
        freeSpaceCell,
        numberOfCells = 5
    } = options;
    return Array.from({length: numberOfRows}, (_, index) => {
        const rowOptions = {};
        if (freeSpaceRow === index) {
            rowOptions.freeSpaceCell = freeSpaceCell;
        }
        return generateRandomRow(numberOfCells, rowOptions);
    })
};

export default generateRandomSet;
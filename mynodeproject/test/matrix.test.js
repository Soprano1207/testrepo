import { expect } from 'chai';
import { matrixWeight } from '../index.js';

describe('matrixWeight', () => {
    it('должен правильно рассчитать вес матрицы 2x2', () => {
        const matrix = [
            [1, 2],
            [3, 4]
        ];
        const result = matrixWeight(matrix);
        expect(result).to.equal(10);
    });

    it('должен правильно рассчитать вес матрицы 3х3', () => {
        const matrix = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ];
        const result = matrixWeight(matrix);
        expect(result).to.equal(9);
    });

    it('должен обрабатывать пустую матрицу', () => {
        const matrix = [];
        const result = matrixWeight(matrix);
        expect(result).to.equal(0);
    });

    it('должно выдавать ошибку из-за неверного ввода', () => {
        const matrix = [1, 2, 3];
        expect(() => matrixWeight(matrix)).to.throw('Входные данные должны быть двумерным массивом');
    });
});

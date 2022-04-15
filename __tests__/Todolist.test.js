import React from 'react';
import {render} from '@testing-library/react';
import Todolist from '../src/Todolist';

describe('Todolist Test', () => {
    test('remove: Supprimer une tâche', () => {
        const startState = [{ id: 1, task: "tâche 1", completed: false }];
        const finState = remove(1);

        expect(finState).toEqual([]);
    });
})

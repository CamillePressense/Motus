import {test, expect, describe, it} from 'vitest'
import {splitWordInArray, getWellPlaced, getNotInWordAndInWord, compareWords} from './script.js'

describe('fonction getNotInWordandInWord', () => {
    const result = getNotInWordAndInWord("chapiteau", "chaton");

    it('La fonction sépare les lettres présentes dans le mot et les absentes', () => {
        expect(result).toEqual({notInWord:["p","i", "e", "u" ], inWord:["c", "h", "a", "t", "a"]})
    })
    
    it('La fonction récupère les lettres présentes dans le mot'), () => {
        expect(result.inWord).toBe(["c", "h", "a", "p", "e", "a", "u"])
    }

    it('La fonction récupère les lettres absentes dans le mot'), () => {
        expect(result.notInWord).toBe(["i", "t"])
    }   
}) 

describe('fonction splitWordInArray', () => {
    it('La fonction sépare les chaînes de caractères en tableau de caractères', () => {
        expect(splitWordInArray("chaton")).toEqual(["c", "h", "a", "t", "o", "n"])
    })
    
    it('La fonction alerte si l utilisateur a entre autre chose qu une string', () => {
        expect(splitWordInArray(364)).toBe("Ceci n'est pas un mot!")
    })
    
    it('La fonction alerte si l utilisateur a entré une valeur nulle', () => {
        expect(splitWordInArray()).toBe("Ceci n'est pas un mot!")
    })
    
})

test('La fonction reconnait les lettres bien placées', () => {
    expect(getWellPlaced("chapiteau", "chaton")).toEqual(["c", "h", "a"])
})

describe('Fonction compareWords', () => {
    const result1 = compareWords("crocodile", "crocodile");
    const result2 = compareWords("dilecroco", "crocodile");
    
    test('La fonction reconnaît quand le mot est trouvé', ()=> {
        expect(result1.WELL_PLACED).toEqual(["c", "r", "o", "c", "o", "d", "i", "l","e"])
    })

    test('La fonction retourne les lettres mal placées', () => {
        expect(result2.miss_placed).toEqual(["d", "i", "l", "e", "c", "r", "o", "c", "o"])
    })


})

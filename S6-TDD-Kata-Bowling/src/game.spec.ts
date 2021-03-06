import { Game } from './game'
import { assert } from 'console'

let g: Game = new Game()

beforeEach(() => {
  g = new Game()
})

describe('Bowling Game', () => {
  test('Should score 0 for gutter game', () => {
    rollMany(20, 0)
    expect(g.score()).toBe(0)
  })

  test('should score 20 for all ones game', () => {
    rollMany(20, 1)
    expect(g.score()).toBe(20)
  })

  test('should score 16 with a spare followed by a 3 ball', () => {
    rollSpare()
    g.roll(3)
    expect(g.score()).toBe(16)
  })

  test('should score 24 for a strike followed by a 3 and 4 balls', () => {
    rollStrike()
    g.roll(3)
    g.roll(4)
    rollMany(16, 0)
    expect(g.score()).toBe(24)
  })

  test('should score 300 for a perfect Game', () => {
    rollMany(12, 10)
    rollStrike()
    expect(g.score()).toBe(300)
  })

  function rollSpare (): void {
    g.roll(5)
    g.roll(5)
  }
  function rollStrike (): void {
    g.roll(10)
  }
  
  function rollMany (n: number, pins: number): void {
    Array(n).fill(0).map(() => { g.roll(pins) })
  }

})
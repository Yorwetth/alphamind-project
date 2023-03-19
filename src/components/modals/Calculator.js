import React from 'react'
import './modals.css'

export default function Calculator() {
  return (
    <div className="calculator">
      <div className="display">
        <div class="previousNumber">
          <p></p>
          <span class="mathSign"></span>
        </div>
        <p class="currentNumber"></p>
      </div>
      <div className="panel">
        <button class="clear">C</button>
        <button class="operator">2^</button>
        <button class="operator">:</button>
        <button class="operator">x</button>
        <button class="number">7</button>
        <button class="number">8</button>
        <button class="number">9</button>
        <button class="operator">-</button>
        <button class="number">4</button>
        <button class="number">5</button>
        <button class="number">6</button>
        <button class="operator">+</button>
        <button class="number">1</button>
        <button class="number">2</button>
        <button class="number">3</button>
        <button class="equals">=</button>
        <button class="number">0</button>
        <button class="number">00</button>
        <button class="number">.</button>
      </div>
    </div>
  )
}

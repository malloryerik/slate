
import { resetKeyGenerator } from '..'

/**
 * Polyfills.
 */

import 'babel-polyfill'

/**
 * Tests.
 */

import './rendering'
import './schema'
import './serializers'
import './transforms'

/**
 * Reset Slate's internal state before each text.
 */

beforeEach(() => {
  resetKeyGenerator()
})

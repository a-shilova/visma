import { createRoot } from 'react-dom/client'

import App from './App'
import { Main } from '@pages/Main'
import { Calculator } from '@pages/Calculator'
import { Documents } from '@pages/Documents'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(<App />)

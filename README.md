# useKonamiCode

⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️🅱️🅰️

Use the infamous Konami code with a React hook.

## Install

```sh
npm install @bitmap/use-konami-code
```

## Usage

For the uninitiated, [The Konami Code](https://en.wikipedia.org/wiki/Konami_Code) is one of the most well known video game cheat codes.

The sequence is `Up`, `Up`, `Down`, `Down`, `Left`, `Right`, `Left`, `Right`, `B`, `A`, `Enter`.

After entering the code, the hook will run whatever callback function you pass to it.

```js
import React, { useState } from 'react'
import { useKonamiCode } from '@bitmap/use-konami-code'

function SecretComponent() {
  const [cheatCodeActive, setCheatCodeActive] = useState(false)

  useKonamiCode(() => {
    setCheatCodeActive(true)
  })

  if (cheatCodeActive) return (
    <div>It’s a secret to everybody.</div>
  )

  return null
}
```

### Custom cheat code

`useKonamiCode` takes a second argument, which is an array of `keycodeEvent.key` strings. This will allow you to to a custom key sequence.

```js
const godMode = 'iddqd'.split('')

useKonamiCode(callback, godMode)
```

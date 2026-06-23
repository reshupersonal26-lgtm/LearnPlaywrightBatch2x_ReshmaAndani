# JavaScript String Functions Cheat Sheet

| Method | Example | Output |
|--------|---------|--------|
| `length` | `"hello".length` | `5` |
| `charAt(i)` | `"hello".charAt(1)` | `"e"` |
| `charCodeAt(i)` | `"hello".charCodeAt(1)` | `101` |
| `at(i)` | `"hello".at(-1)` | `"o"` |
| `concat(s)` | `"he".concat("llo")` | `"hello"` |
| `includes(s)` | `"hello".includes("ell")` | `true` |
| `indexOf(s)` | `"hello".indexOf("l")` | `2` |
| `lastIndexOf(s)` | `"hello".lastIndexOf("l")` | `3` |
| `match(regex)` | `"a1b2".match(/\d+/)` | `["1"]` |
| `matchAll(regex)` | `"a1b2".matchAll(/\d/g)` | `Iterator` |
| `replace(a,b)` | `"hello".replace("l","x")` | `"hexlo"` |
| `replaceAll(a,b)` | `"hello".replaceAll("l","x")` | `"hexxo"` |
| `search(regex)` | `"hello".search(/l/)` | `2` |
| `slice(s,e)` | `"hello".slice(1,4)` | `"ell"` |
| `split(delim)` | `"a,b,c".split(",")` | `["a","b","c"]` |
| `substring(s,e)` | `"hello".substring(1,4)` | `"ell"` |
| `substr(s,len)` | `"hello".substr(1,3)` | `"ell"` |
| `trim()` | `"  hi  ".trim()` | `"hi"` |
| `trimStart()` | `"  hi".trimStart()` | `"hi"` |
| `trimEnd()` | `"hi  ".trimEnd()` | `"hi"` |
| `padStart(n,c)` | `"5".padStart(3,"0")` | `"005"` |
| `padEnd(n,c)` | `"5".padEnd(3,"0")` | `"500"` |
| `repeat(n)` | `"ha".repeat(3)` | `"hahaha"` |
| `startsWith(s)` | `"hello".startsWith("he")` | `true` |
| `endsWith(s)` | `"hello".endsWith("lo")` | `true` |
| `toUpperCase()` | `"hello".toUpperCase()` | `"HELLO"` |
| `toLowerCase()` | `"HELLO".toLowerCase()` | `"hello"` |
| `localeCompare(s)` | `"a".localeCompare("b")` | `-1` |
| `normalize()` | `"é".normalize()` | `"é"` |
| `fromCharCode(n)` | `String.fromCharCode(65)` | `"A"` |
| `fromCodePoint(n)` | `String.fromCodePoint(128512)` | `"😀"` |
| `raw()` | `String.raw\`hello\n\`` | `"hello\\n"` |

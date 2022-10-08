import { FormEvent, useMemo, useState } from "react"

function App() {
  const [items, setItems] = useState([''])
  const [query, setQuery] = useState("")
  const [input, setInput] = useState('')

  const filteredItems = useMemo(() => {
    return items.filter((item: string) => {
      return item.toLowerCase().includes(query.toLowerCase())
    })
  }, [items, query])

  function onSubmit(e: FormEvent) {
    e.preventDefault()

    const value = input
    if (value === "") return
    setItems((prev) => {
      return [...prev, value]
    })

    setInput('')
  }

  return (
    <form onSubmit={onSubmit} style={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: '50px'
    }}>
      <div style={{
        display: "grid",
        gap: "1rem .5rem",
        justifyContent: "flex-start",
        gridTemplateColumns: "repeat(3, 200px)",
        fontSize: 'large',
        maxWidth: 'min-content'
      }}>
        <label>
          Search:
        </label>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          type="search"
        />
        <br />
        <br />
        <label>
          New Item:
        </label>
        <input value={input} onChange={e => setInput(e?.target?.value)} type="text" />
        <button type="submit">Add</button>
        <h3>Items:</h3>
        <br />
        <br />
        {filteredItems.map(item => (
          <div style={{ textDecoration: 'underline' }}>{item}</div>
        ))}
      </div>
    </form >
  )
}

export default App
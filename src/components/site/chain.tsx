/** HARDWARE > FIRMWARE > SYSTEMS > SOFTWARE > AI */
export function Chain({ items }: { items: readonly string[] }) {
  return (
    <div className="chain" aria-label={items.join(', ')}>
      {items.map((item, i) => (
        <span key={item} style={{ display: 'contents' }}>
          {i > 0 && <i aria-hidden="true">&gt;</i>}
          <span>{item}</span>
        </span>
      ))}
    </div>
  )
}

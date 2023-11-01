export default function Home() {
  return (
    <div>
      <h2>Homepage</h2>
      <button>Press</button>

      <div>
        <label htmlFor="random-txt">Some label</label>
        <input id="random-txt" />
      </div>

      <div>
        <label htmlFor="plc-txt">with placeholder</label>
        <input id="plc-txt" placeholder="search..." />
      </div>
    </div>
  );
}

type Props = {
  items: string[];
};

function ChipList({ items }: Props) {
  return (
    <div className="chip-list">
      {items.map((item) => (
        <span className="chip" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}

export default ChipList;

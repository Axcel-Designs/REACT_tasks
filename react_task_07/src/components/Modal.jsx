export default function Modal({ children }) {
  return (
    <section className="fixed inset-0 bg-black/30 backdrop-blur-sm">
      <div>Modal</div>
      <div>{children}</div>
    </section>
  );
}

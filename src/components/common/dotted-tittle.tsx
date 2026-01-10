export default function DottedTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="pb-9 flex ">
      <h2 className="card-title ">
        <div className="corner corner-tl"></div>{" "}
        <div className="corner corner-tr"></div>{" "}
        <div className="corner corner-bl"></div>{" "}
        <div className="corner corner-br"></div>
        {children}
      </h2>
    </div>
  );
}

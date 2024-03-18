export default function AppBar() {
  return (
    <div className="flex flex-row justify-between px-3">
      <div>Logo</div>
      <div className="flex flex-row justify-around w-1/2 px-2">
        <div>About</div>
        <div>LogIn</div>
      </div>
    </div>
  );
}

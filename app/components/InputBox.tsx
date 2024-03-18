export default function InputBox() {
  return (
    <input
      type="email"
      id="email"
      placeholder="Enter Email Address"
      name="email"
      // value={email}
      // onChange={(e) => {
      //   setEmail(e.target.value);
      // }}
      className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
      required
    />
  );
}

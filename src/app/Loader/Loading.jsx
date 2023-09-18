import "./loading.css";
export default function Loading(props) {
  return (
    <div className=" bg-black h-full w-full flex justify-center items-center absolute rippleContainer">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

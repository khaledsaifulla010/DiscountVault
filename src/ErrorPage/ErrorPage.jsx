import { useNavigate } from "react-router-dom";
import errorPage from "../assets/errorPage/errorPage.png";

const ErrorPage = () => {
  const redirect = useNavigate();
  const handleRedirect = () => {
    redirect("/");
  };

  return (
    <div>
      <img className="h-[600px] ml-52 mt-12" src={errorPage} />
      <button
        onClick={handleRedirect}
        className="border p-2 rounded-xl font-bold text-lg bg-black text-white relative ml-[700px] bottom-14"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;

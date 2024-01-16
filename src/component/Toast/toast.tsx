import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const showToast = (message: string) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default showToast;

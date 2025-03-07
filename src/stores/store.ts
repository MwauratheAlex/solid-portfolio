import { createSignal } from "solid-js";

const [selectedPage, setSelectedPage] = createSignal(0)


type toastInfo = {
  message: string;
  type: "Error" | "Success";
}

const [showToast, setShowToast] = createSignal(false);
const [toastInfo, setToastInfo] = createSignal<toastInfo>({ message: "", type: "Success" })

const showToastFn = (toastInfo: toastInfo) => {
  setToastInfo(toastInfo)
  setShowToast(true);
  setTimeout(() => setShowToast(false), 3000)
}

export { showToast, showToastFn, selectedPage, setSelectedPage, toastInfo }

import {createPortal} from "react-dom";
import {useRef} from "react";
import PlainButton from "./PlainButton";

const Modal = ({ children, ref }) => {
    const modalRef = useRef(null);

    function closeModal() {
        modalRef.current.close();
    }


    return createPortal(
        <dialog open ref={modalRef} className={`fixed top-0 h-full w-full bg-opacity-80 bg-slate-800`}>
            <div className="h-full w-full flex flex-col justify-center items-center">
                <div className={'text-white rounded p-5 bg-slate-500'}>
                    <div className={'mb-5'}>
                        {children}
                    </div>

                    <PlainButton onClick={closeModal} className={'bg-slate-500 p-1 text-xl'}>Close</PlainButton>
                </div>
            </div>

        </dialog>
        , document.body)
}

export default Modal;
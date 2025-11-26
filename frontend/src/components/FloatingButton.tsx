export const FloatingButton = () => {
  return (
    <div className="text-sm box-border caret-transparent font-noto_sans_kr">
      <div className="box-border caret-transparent">
        <div className="fixed box-border caret-transparent hidden z-[9999999] left-6 bottom-6">
          <button
            aria-label="avada-joy-button-widget"
            className="relative bg-transparent caret-transparent text-center p-0"
          >
            <div className="items-center bg-white shadow-[rgba(0,0,0,0.25)_0px_6px_12px_0px] box-border caret-transparent flex h-12 justify-center max-w-[155px] min-w-12 rounded-[50%]">
              <img
                src="https://sfycdn.speedsize.com/4aadaad8-50d5-458f-88dd-2f364bf4d82e/https://firebasestorage.googleapis.com/v0/b/avada-joy.appspot.com/o/icon/branding/suPCrdYPwvf1RjS6PQIt/allBirdFloatingImage.png?alt=media&token=613c915d-2cf3-4e4e-83bc-80ab6d546030"
                alt="trigger icon"
                className="box-border caret-transparent h-12 max-w-full w-[120px] rounded-3xl"
              />
            </div>
          </button>
        </div>
      </div>
      <a
        href="https://joy.so/"
        className="text-base box-border caret-transparent hidden tracking-[0.15008px] leading-6 font-roboto"
      >
        Powered by joy.so
      </a>
    </div>
  );
};

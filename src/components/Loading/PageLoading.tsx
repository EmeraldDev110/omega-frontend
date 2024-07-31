import { FadeLoader } from "react-spinners";

const PageLoading = () => {
  return (
    <div className="fixed inset-0 z-50 bg-haiti">
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center justify-center gap-2">
          <img src={"./assets/images/LogoInfo.png"} />
          <div className="text-[35px] font-semibold">FOCUS</div>
          <div className="flex justify-center pl-4">
            <FadeLoader color="#1E88E5" height={10} width={5} radius={5} />
          </div>
        </div>
      </div>
      <div className="fixed bottom-16 left-1/2 -translate-x-1/2 text-center text-[14px] text-gray">
        Get Rewarded for your focus video
      </div>
    </div>
  );
};

export default PageLoading;

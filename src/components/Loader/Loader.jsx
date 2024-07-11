import { InfinitySpin } from "react-loader-spinner";

export const Loader = () => {
  return (
    <InfinitySpin
      visible={true}
      width="200"
      color="#6c3eb8"
      ariaLabel="infinity-spin-loading"
    />
  );
};

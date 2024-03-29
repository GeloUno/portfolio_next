import HeaderDescription from '../components/header/headerDescription';

export default function Home() {
  return (
    <div>
      <div
        className="min-h-screen p-0 bg-indigo-900 w-full h-full bg-blobBackgroundMobile md:bg-blobBackgroundDesktop md:object-scale-down bg-no-repeat bg-right-top"
        style={{ backgroundSize: '55vw' }}
      >
        <HeaderDescription />
      </div>
    </div>
  );
}

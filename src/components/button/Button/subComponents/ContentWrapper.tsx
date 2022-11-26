type Props = {
  hovered: boolean;
  children: JSX.Element;
};

export default function ContentWrapper({ hovered, children }: Props) {
  return (
    <div className="h-14 flex p-0 flex-col bg-none">
      <div className="w-full flex justify-center px-2">
        <div className="w-full h-2 bg-white" />
      </div>
      <div className="grow flex flex-row">
        <div className="w-2 h-full flex items-center">
          <div className="w-full h-full bg-white" />
        </div>
        <div className="grow">{children}</div>
        <div className="w-2 h-full flex items-center">
          <div className="w-full h-full bg-white" />
        </div>
      </div>
      <div className="w-full flex px-2 justify-center">
        <div className="w-full h-2 bg-white" />
      </div>
    </div>
  );
}

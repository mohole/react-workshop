export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-5">
      <hr className="my-8 mx-3" />
      <p className="text-center">
        Made at <span className="font-bold">Mohole</span> in {year}
      </p>
    </footer>
  );
};

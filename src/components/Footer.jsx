export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8">
      <div className="container mx-auto">
        <hr />
        <p className="text-center italic my-3">
          Made by{" "}
          <a
            href="https://scuola.mohole.it/"
            target="_blank"
            rel="noopener"
            className="text-primary hover:text-primary-focus"
          >
            Mohole
          </a>{" "}
          - Not copyrighted {year}
        </p>
      </div>
    </footer>
  );
};
